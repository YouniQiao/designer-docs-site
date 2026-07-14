# @ohos.data.distributedKVStore

The **distributedKVStore** module implements collaboration between databases for different devices that form a Super Device. You can use the APIs provided by this module to save application data to a distributed key-value (KV) store and perform operations, such as adding, deleting, modifying, and querying data, and synchronizing data across devices. The **distributedKVStore** module provides the following functionalities: - [KVManager](arkts-arkdata-kvmanagerconfig-i.md): provides a **KVManager** instance to obtain KV store information. - [KVStoreResultSet](arkts-arkdata-kvstoreresultset-i.md): provides APIs for accessing the results obtained from a KV store. - [Query](arkts-arkdata-query-c.md): provides APIs for setting predicates for data query. - [SingleKVStore](arkts-arkdata-singlekvstore-i.md): provides APIs for querying data in single KV stores and synchronizing data across devices. The single KV stores manage data without distinguishing devices. - [DeviceKVStore](arkts-arkdata-devicekvstore-i.md): provides APIs for querying data in device KV stores and synchronizing data across devices. This class inherits from [SingleKVStore](arkts-arkdata-singlekvstore-i.md). The device KV stores manage data by device.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## Modules to Import

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createKVManager](arkts-arkdata-createkvmanager-f.md#createkvmanager-1) | Creates a **KVManager** instance for KV store management. |

### Classes

| Name | Description |
| --- | --- |
| [FieldNode](arkts-arkdata-fieldnode-c.md) | Represents a **Schema** instance, which provides the methods for defining the values stored in a KV store. |
| [Query](arkts-arkdata-query-c.md) | Provides methods to create a **Query** object, which defines different data query criteria. A **Query** object supports a maximum of 256 predicates. |
| [Schema](arkts-arkdata-schema-c.md) | Defines the schema of a KV store. You can create a **Schema** object and pass it in [Options](arkts-arkdata-options-i.md) when creating or opening a KV store. |

### Interfaces

| Name | Description |
| --- | --- |
| [BackupConfig](arkts-arkdata-backupconfig-i.md) | Provides backup config to backup or restore KVStore. |
| [ChangeNotification](arkts-arkdata-changenotification-i.md) | Defines the content of a data change notification, including inserted data, updated data, deleted data, and device ID. |
| [Constants](arkts-arkdata-constants-i.md) | Provides constants of the distributed KV store. |
| [DeviceKVStore](arkts-arkdata-devicekvstore-i.md) | Provides APIs for querying data in a device KV store and performing cross-device data sync. This class inherits from **SingleKVStore**. The **SingleKVStore** APIs such as **put** and **putBatch** can be used. Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) to obtain a **DeviceKVStore** object. |
| [Entry](arkts-arkdata-entry-i.md) | Provides key-value pairs stored in the distributedKVStore. |
| [KVManager](arkts-arkdata-kvmanager-i.md) | Provides an instance to obtain information about a distributed KV store. Before calling any API in **KVManager**, you must use [createKVManager](arkts-arkdata-createkvmanager-f.md#createkvmanager-1) to create a **KVManager** instance. |
| [KVManagerConfig](arkts-arkdata-kvmanagerconfig-i.md) | Provides the **KVManager** instance configuration, including the bundle name of the invoker and the application context. |
| [KVStoreResultSet](arkts-arkdata-kvstoreresultset-i.md) | Provides APIs for obtaining the distributed KV store result sets. A maximum of eight result sets can be opened at a time. The **KVStoreResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data. Before calling any API in **KVStoreResultSet**, you must use ** [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) ** to construct a **SingleKVStore** or **DeviceKVStore** instance. &gt; **NOTE** &gt; &gt; The cursor start position of **KVStoreResultSet** is **-1**. |
| [Options](arkts-arkdata-options-i.md) | Provides KV store configuration. |
| [SingleKVStore](arkts-arkdata-singlekvstore-i.md) | Provides APIs for data management in a single KV store, such as adding data, deleting data, and subscribing to data changes or across-device data sync completion events. Before calling any method in **SingleKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) to obtain a **SingleKVStore** instance. |
| [Value](arkts-arkdata-value-i.md) | Defines the **value** object in a KV store. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceKVStore](arkts-arkdata-devicekvstore-i-sys.md) | Provides APIs for querying data in a device KV store and performing cross-device data sync. This class inherits from **SingleKVStore**. The **SingleKVStore** APIs such as **put** and **putBatch** can be used. Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) to obtain a **DeviceKVStore** object. |
| [SingleKVStore](arkts-arkdata-singlekvstore-i-sys.md) | Provides APIs for data management in a single KV store, such as adding data, deleting data, and subscribing to data changes or across-device data sync completion events. Before calling any method in **SingleKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-1) to obtain a **SingleKVStore** instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [KVStoreType](arkts-arkdata-kvstoretype-e.md) | Enumerates the distributed KV store types. \| Name \| Value\| Description \| \| -------------------- \| - \| ------------------------------------------------------------ \| \| DEVICE_COLLABORATION \| 0 \| Device KV store.<br>The device KV store manages data by device, which eliminates conflicts. Data can be queried by device.<br>**System capability**: SystemCapability.DistributedDataManager.KVStore.DistributedKVStore\| \| SINGLE_VERSION \| 1 \| Single KV store.<br>The single KV store does not differentiate data by device. If entries with the same key are modified on different devices, the value will be overwritten.<br>**System capability**: SystemCapability.DistributedDataManager.KVStore.Core\| |
| [SecurityLevel](arkts-arkdata-securitylevel-e.md) | Enumerates the KV store security levels. &gt; **NOTE** &gt; &gt; For the scenarios involving a single device, you can upgrade the security level of a KV store by modifying the &gt; **securityLevel** parameter. When upgrading the database security level, observe the following: &gt; &gt; * This operation does not apply to the databases that require cross-device sync. Data cannot be synced between &gt; databases of different security levels. If you want to upgrade the security level of a database, you are advised &gt; to create a database of a higher security level. &gt; &gt; * You need to close the database before modifying the **securityLevel** parameter, and open it after the security &gt; level is upgraded. &gt; &gt; * You cannot downgrade the database security level. For example, you can change the database security level from &gt; S2 to S3, but cannot change it from S3 to S2. |
| [SubscribeType](arkts-arkdata-subscribetype-e.md) | Enumerates the subscription types. |
| [SyncMode](arkts-arkdata-syncmode-e.md) | Enumerates the sync modes. |
| [ValueType](arkts-arkdata-valuetype-e.md) | Indicates the {@code ValueType}. &lt;p&gt;{@code ValueType} is obtained based on the value. |

