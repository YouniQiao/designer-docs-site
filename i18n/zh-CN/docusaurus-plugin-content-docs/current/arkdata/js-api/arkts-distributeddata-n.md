# distributedData

The distributed data management module implements collaboration between databases of different devices for applications. The APIs provided by distributed data management can be used to save data to distributed databases and perform operations such as adding, deleting, modifying, querying, and synchronizing data in distributed databases. This module provides the following functions: - [KVManager](arkts-distributeddata-kvmanagerconfig-i.md#KVManagerConfig): provides a **KVManager** instance to manage key-value (KV) stores. - [KvStoreResultSet<sup>8+</sup>](arkts-distributeddata-kvstoreresultset-i.md#KvStoreResultSet): provides APIs to obtain the KV store result set and query or move the data read position. - [Query<sup>8+</sup>](arkts-distributeddata-query-c.md#Query): provides APIs to query data from the database through a **Query** instance by using predicates. - [KVStore](arkts-distributeddata-kvstoretype-e.md#KVStoreType): provides APIs to add data, delete data, and observe data changes and data sync through a **KVStore** instance. - [SingleKVStore](arkts-distributeddata-singlekvstore-i.md#SingleKVStore): provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore](arkts-distributeddata-kvstoretype-e.md#KVStoreType), and data is not distinguished by device. - [DeviceKVStore<sup>8+</sup>](arkts-distributeddata-devicekvstore-i.md#DeviceKVStore): provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore](arkts-distributeddata-kvstoretype-e.md#KVStoreType), and data is distinguished by device. [@ohos.data.distributedKVStore](arkts-data-distributedkvstore.md#distributedKVStore).

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [Constants](arkts-distributeddata-constants-n.md) | Defines the KV store constants. |

### 函数

| 名称 | 描述 |
| --- | --- |
| [createKVManager](arkts-distributeddata-createkvmanager-f.md#createKVManager-1) | Creates a **KVManager** instance to manage KV stores. This API uses an asynchronous callback to return the result. |
| [createKVManager](arkts-distributeddata-createkvmanager-f.md#createKVManager-2) | Creates a **KVManager** instance to manage KV stores. This API uses a promise to return the result. |

### 类

| 名称 | 描述 |
| --- | --- |
| [FieldNode](arkts-distributeddata-fieldnode-c.md) | Represents a **Schema** instance, which provides the APIs for defining the values stored in a KV store. |
| [Query](arkts-distributeddata-query-c.md) | Provides APIs to create a **Query** object, which defines different data query criteria. |
| [Schema](arkts-distributeddata-schema-c.md) | Defines the schema of a KV store. You can create a **Schema** object and place it in [Options](arkts-distributeddata-options-i.md#Options) when creating or opening a KV store. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ChangeNotification](arkts-distributeddata-changenotification-i.md) | Defines the content of data change notifications, including inserted data, updated data, deleted data, and device ID. |
| [DeviceKVStore](arkts-distributeddata-devicekvstore-i.md) | Provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore](arkts-distributeddata-kvstoretype-e.md#KVStoreType). Data is distinguished by device in a device KV store. Each device can only write and modify its own data. Data of other devices is read-only and cannot be modified. For example, a device KV store can be used to implement image sharing between devices. The images of other devices can be viewed, but not be modified or deleted. Before calling any method in **DeviceKVStore**, you must use [getKVStore](arkts-distributeddata-kvmanager-i.md#getKVStore) to obtain a **DeviceKVStore** object. |
| [Entry](arkts-distributeddata-entry-i.md) | Defines the KV pairs stored in the KV store. |
| [KVManager](arkts-distributeddata-kvmanager-i.md) | Creates a **KVManager** object to obtain KV store information. Before calling any method in **KVManager**, you must use [createKVManager](arkts-distributeddata-createkvmanager-f.md#createKVManager-1) to create a **KVManager** object. |
| [KVManagerConfig](arkts-distributeddata-kvmanagerconfig-i.md) | Represents the configuration of a **KVManager** instance, including the bundle name and user information of the caller. |
| [KVStore](arkts-distributeddata-kvstore-i.md) | Provides APIs to manage data in a KV store, for example, adding or deleting data and subscribing to data changes or completion of data sync. Before calling any method in **KVStore**, you must use [getKVStore](arkts-distributeddata-kvmanager-i.md#getKVStore) to obtain a **KVStore** object. |
| [KvStoreResultSet](arkts-distributeddata-kvstoreresultset-i.md) | Provides APIs to obtain the KV store result sets, and query and move the data read position. Before calling any method in **KvStoreResultSet**, you must use [getKVStore](arkts-distributeddata-kvmanager-i.md#getKVStore) to obtain a **KVStore** object. |
| [Options](arkts-distributeddata-options-i.md) | Provides KV store configuration. |
| [SingleKVStore](arkts-distributeddata-singlekvstore-i.md) | Provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore](arkts-distributeddata-kvstoretype-e.md#KVStoreType). Data is not distinguished by device in a single KV store. The data written to different devices using the same key will be overwritten. For example, a single KV store can be used to synchronize a user's calendar and contact data between different devices. Before calling any method in **SingleKVStore**, you must use [getKVStore](arkts-distributeddata-kvmanager-i.md#getKVStore) to obtain a **SingleKVStore** instance. |
| [UserInfo](arkts-distributeddata-userinfo-i.md) | Defines user information. |
| [Value](arkts-distributeddata-value-i.md) | Defines the **value** object in a KV store. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [KVStoreType](arkts-distributeddata-kvstoretype-e.md) | Enumerates the KV store types. |
| [SecurityLevel](arkts-distributeddata-securitylevel-e.md) | Enumerates the KV store security levels. |
| [SubscribeType](arkts-distributeddata-subscribetype-e.md) | Enumerates the subscription types. |
| [SyncMode](arkts-distributeddata-syncmode-e.md) | Enumerates the sync modes. |
| [UserType](arkts-distributeddata-usertype-e.md) | Enumerates the user types. |
| [ValueType](arkts-distributeddata-valuetype-e.md) | Enumerates the data types. |

