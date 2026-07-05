# @ohos.data.distributedKVStore

The **distributedKVStore** module implements collaboration between databases for different devices that form a Super Device. You can use the APIs provided by this module to save application data to a distributed key-value (KV) store and perform operations, such as adding, deleting, modifying, and querying data, and synchronizing data across devices. The **distributedKVStore** module provides the following functionalities: - [KVManager]{@link distributedKVStore.KVManagerConfig}: provides a **KVManager** instance to obtain KV store information. - [KVStoreResultSet]{@link distributedKVStore.KVStoreResultSet}: provides APIs for accessing the results obtained from a KV store. - [Query]{@link distributedKVStore.Query}: provides APIs for setting predicates for data query. - [SingleKVStore]{@link distributedKVStore.SingleKVStore}: provides APIs for querying data in single KV stores and synchronizing data across devices. The single KV stores manage data without distinguishing devices. - [DeviceKVStore]{@link distributedKVStore.DeviceKVStore}: provides APIs for querying data in device KV stores and synchronizing data across devices. This class inherits from [SingleKVStore]{@link distributedKVStore.SingleKVStore}. The device KV stores manage data by device.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createKVManager](arkts-distributedkvstore-createkvmanager-f.md#createKVManager-1) | Creates a **KVManager** instance for KV store management. |

### 类

| 名称 | 描述 |
| --- | --- |
| [FieldNode](arkts-distributedkvstore-fieldnode-c.md) | Represents a **Schema** instance, which provides the methods for defining the values stored in a KV store. |
| [Query](arkts-distributedkvstore-query-c.md) | Provides methods to create a **Query** object, which defines different data query criteria. A **Query** object supports a maximum of 256 predicates. |
| [Schema](arkts-distributedkvstore-schema-c.md) | Defines the schema of a KV store. You can create a **Schema** object and pass it in [Options]{@link distributedKVStore.Options} when creating or opening a KV store. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BackupConfig](arkts-distributedkvstore-backupconfig-i.md) | Provides backup config to backup or restore KVStore. |
| [ChangeNotification](arkts-distributedkvstore-changenotification-i.md) | Defines the content of a data change notification, including inserted data, updated data, deleted data, and device ID. |
| [Constants](arkts-distributedkvstore-constants-i.md) | Provides constants of the distributed KV store. |
| [DeviceKVStore](arkts-distributedkvstore-devicekvstore-i.md) | Provides APIs for querying data in a device KV store and performing cross-device data sync. This class inherits from **SingleKVStore**. The **SingleKVStore** APIs such as **put** and **putBatch** can be used. Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)} to obtain a **DeviceKVStore** object. |
| [Entry](arkts-distributedkvstore-entry-i.md) | Provides key-value pairs stored in the distributedKVStore. |
| [KVManager](arkts-distributedkvstore-kvmanager-i.md) | Provides an instance to obtain information about a distributed KV store. Before calling any API in **KVManager**, you must use [createKVManager]{@link distributedKVStore.createKVManager} to create a **KVManager** instance. |
| [KVManagerConfig](arkts-distributedkvstore-kvmanagerconfig-i.md) | Provides the **KVManager** instance configuration, including the bundle name of the invoker and the application context. |
| [KVStoreResultSet](arkts-distributedkvstore-kvstoreresultset-i.md) | Provides APIs for obtaining the distributed KV store result sets. A maximum of eight result sets can be opened at a time. The **KVStoreResultSet** instance is not refreshed in real time. After using the result set, if the data in the database is changed (by being added, deleted, or modified), you need to query the result set again to obtain the latest data. Before calling any API in **KVStoreResultSet**, you must use ** [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)} ** to construct a **SingleKVStore** or **DeviceKVStore** instance. > **NOTE** > > The cursor start position of **KVStoreResultSet** is **-1**. |
| [Options](arkts-distributedkvstore-options-i.md) | Provides KV store configuration. |
| [SingleKVStore](arkts-distributedkvstore-singlekvstore-i.md) | Provides APIs for data management in a single KV store, such as adding data, deleting data, and subscribing to data changes or across-device data sync completion events. Before calling any method in **SingleKVStore**, you must use [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)} to obtain a **SingleKVStore** instance. |
| [Value](arkts-distributedkvstore-value-i.md) | Defines the **value** object in a KV store. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [Constants](arkts-distributedkvstore-constants-e.md) | KVStore constants |
| [KVStoreType](arkts-distributedkvstore-kvstoretype-e.md) | Enumerates the distributed KV store types. | Name | Value| Description | | -------------------- | - | ------------------------------------------------------------ | | DEVICE_COLLABORATION | 0 | Device KV store.<br>The device KV store manages data by device, which eliminates conflicts. Data can be queried by device.<br>**System capability**: SystemCapability.DistributedDataManager.KVStore.DistributedKVStore| | SINGLE_VERSION | 1 | Single KV store.<br>The single KV store does not differentiate data by device. If entries with the same key are modified on different devices, the value will be overwritten.<br>**System capability**: SystemCapability.DistributedDataManager.KVStore.Core| |
| [SecurityLevel](arkts-distributedkvstore-securitylevel-e.md) | Enumerates the KV store security levels. > **NOTE** > > For the scenarios involving a single device, you can upgrade the security level of a KV store by modifying the > **securityLevel** parameter. When upgrading the database security level, observe the following: > > * This operation does not apply to the databases that require cross-device sync. Data cannot be synced between > databases of different security levels. If you want to upgrade the security level of a database, you are advised > to create a database of a higher security level. > > * You need to close the database before modifying the **securityLevel** parameter, and open it after the security > level is upgraded. > > * You cannot downgrade the database security level. For example, you can change the database security level from > S2 to S3, but cannot change it from S3 to S2. |
| [SubscribeType](arkts-distributedkvstore-subscribetype-e.md) | Enumerates the subscription types. |
| [SyncMode](arkts-distributedkvstore-syncmode-e.md) | Enumerates the sync modes. |
| [ValueType](arkts-distributedkvstore-valuetype-e.md) | Indicates the {@code ValueType}. <p>{@code ValueType} is obtained based on the value. |

