# distributedData

The distributed data management module implements collaboration between databases of different devices for applications. The APIs provided by distributed data management can be used to save data to distributed databases and perform operations such as adding, deleting, modifying, querying, and synchronizing data in distributed databases. This module provides the following functions: - [KVManager](arkts-arkdata-kvmanagerconfig-i.md#kvmanagerconfig): provides a **KVManager** instance to manage key-value (KV) stores. - [KvStoreResultSet<sup>8+</sup>](arkts-arkdata-kvstoreresultset-i.md#kvstoreresultset): provides APIs to obtain the KV store result set and query or move the data read position. - [Query<sup>8+</sup>](arkts-arkdata-query-c.md#query): provides APIs to query data from the database through a **Query** instance by using predicates. - [KVStore](arkts-arkdata-kvstoretype-e.md#kvstoretype): provides APIs to add data, delete data, and observe data changes and data sync through a **KVStore** instance. - [SingleKVStore](arkts-arkdata-singlekvstore-i.md#singlekvstore): provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore](arkts-arkdata-kvstoretype-e.md#kvstoretype), and data is not distinguished by device. - [DeviceKVStore<sup>8+</sup>](arkts-arkdata-devicekvstore-i.md#devicekvstore): provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore](arkts-arkdata-kvstoretype-e.md#kvstoretype), and data is distinguished by device. [@ohos.data.distributedKVStore](arkts-data-distributedkvstore.md#distributedkvstore).

**Since:** 7

**Deprecated since:** 9

**Substitutes:** distributedKVStore

**System capability:** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [Constants](arkts-arkdata-distributeddata-constants-n.md) | Defines the KV store constants. |

### Functions

| Name | Description |
| --- | --- |
| [createKVManager](arkts-arkdata-createkvmanager-f.md#createkvmanager-1) | Creates a **KVManager** instance to manage KV stores. This API uses an asynchronous callback to return the result. |
| [createKVManager](arkts-arkdata-createkvmanager-f.md#createkvmanager-2) | Creates a **KVManager** instance to manage KV stores. This API uses a promise to return the result. |

### Classes

| Name | Description |
| --- | --- |
| [Schema](arkts-arkdata-schema-c.md) | Defines the schema of a KV store. You can create a **Schema** object and place it in [Options](arkts-arkdata-options-i.md#options) when creating or opening a KV store. |
| [FieldNode](arkts-arkdata-fieldnode-c.md) | Represents a **Schema** instance, which provides the APIs for defining the values stored in a KV store. |
| [Query](arkts-arkdata-query-c.md) | Provides APIs to create a **Query** object, which defines different data query criteria. |

### Interfaces

| Name | Description |
| --- | --- |
| [KVManagerConfig](arkts-arkdata-kvmanagerconfig-i.md) | Represents the configuration of a **KVManager** instance, including the bundle name and user information of the caller. |
| [UserInfo](arkts-arkdata-userinfo-i.md) | Defines user information. |
| [Value](arkts-arkdata-value-i.md) | Defines the **value** object in a KV store. |
| [Entry](arkts-arkdata-entry-i.md) | Defines the KV pairs stored in the KV store. |
| [ChangeNotification](arkts-arkdata-changenotification-i.md) | Defines the content of data change notifications, including inserted data, updated data, deleted data, and device ID. |
| [Options](arkts-arkdata-options-i.md) | Provides KV store configuration. |
| [KvStoreResultSet](arkts-arkdata-kvstoreresultset-i.md) | Provides APIs to obtain the KV store result sets, and query and move the data read position. Before calling any method in **KvStoreResultSet**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-2) to obtain a **KVStore** object. |
| [KVStore](arkts-arkdata-kvstore-i.md) | Provides APIs to manage data in a KV store, for example, adding or deleting data and subscribing to data changes or completion of data sync. Before calling any method in **KVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-2) to obtain a **KVStore** object. |
| [SingleKVStore](arkts-arkdata-singlekvstore-i.md) | Provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore](arkts-arkdata-kvstoretype-e.md#kvstoretype). Data is not distinguished by device in a single KV store. The data written to different devices using the same key will be overwritten. For example, a single KV store can be used to synchronize a user's calendar and contact data between different devices. Before calling any method in **SingleKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-2) to obtain a **SingleKVStore** instance. |
| [DeviceKVStore](arkts-arkdata-devicekvstore-i.md) | Provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore](arkts-arkdata-kvstoretype-e.md#kvstoretype). Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore](arkts-arkdata-kvmanager-i.md#getkvstore-2) to obtain a **DeviceKVStore** object. |
| [KVManager](arkts-arkdata-kvmanager-i.md) | Creates a **KVManager** object to obtain KV store information. Before calling any method in **KVManager**, you must use [createKVManager](arkts-arkdata-createkvmanager-f.md#createkvmanager-1) to create a **KVManager** object. |

### Enums

| Name | Description |
| --- | --- |
| [UserType](arkts-arkdata-usertype-e.md) | Enumerates the user types. |
| [ValueType](arkts-arkdata-valuetype-e.md) | Enumerates the data types. |
| [SyncMode](arkts-arkdata-syncmode-e.md) | Enumerates the sync modes. |
| [SubscribeType](arkts-arkdata-subscribetype-e.md) | Enumerates the subscription types. |
| [KVStoreType](arkts-arkdata-kvstoretype-e.md) | Enumerates the KV store types. |
| [SecurityLevel](arkts-arkdata-securitylevel-e.md) | Enumerates the KV store security levels. |

