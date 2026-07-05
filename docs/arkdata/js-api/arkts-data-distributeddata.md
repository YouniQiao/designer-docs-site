# @ohos.data.distributedData

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [distributedData](arkts-distributeddata-n.md) | The distributed data management module implements collaboration between databases of different devices for applications. The APIs provided by distributed data management can be used to save data to distributed databases and perform operations such as adding, deleting, modifying, querying, and synchronizing data in distributed databases. This module provides the following functions: - [KVManager]{@link distributedData.KVManagerConfig}: provides a **KVManager** instance to manage key-value (KV) stores. - [KvStoreResultSet<sup>8+</sup>]{@link distributedData.KvStoreResultSet}: provides APIs to obtain the KV store result set and query or move the data read position. - [Query<sup>8+</sup>]{@link distributedData.Query}: provides APIs to query data from the database through a **Query** instance by using predicates. - [KVStore]{@link distributedData.KVStoreType}: provides APIs to add data, delete data, and observe data changes and data sync through a **KVStore** instance. - [SingleKVStore]{@link distributedData.SingleKVStore}: provides APIs to query and synchronize data in a single KV store. This class inherits from [KVStore]{@link distributedData.KVStoreType}, and data is not distinguished by device. - [DeviceKVStore<sup>8+</sup>]{@link distributedData.DeviceKVStore}: provides APIs to query and synchronize data in a device KV store. This class inherits from [KVStore]{@link distributedData.KVStoreType}, and data is distinguished by device. [@ohos.data.distributedKVStore]{@link @ohos.data.distributedKVStore:distributedKVStore}. |

