# @ohos.data.storage

Lightweight storage provides applications with data processing capability and allows applications to perform lightweight data storage and query. Data is stored in key-value (KV) pairs. Keys are of the string type, and values can be of the number, string, or Boolean type. > **NOTE** > - The APIs of this module are no longer maintained since API version 9. You are advised to use > [@ohos.data.preferences]{@link @ohos.data.preferences:preferences}.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.preferences.preferences

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [deleteStorage](arkts-storage-deletestorage-f.md#deleteStorage-1) | Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses an asynchronous callback to return the result. |
| [deleteStorage](arkts-storage-deletestorage-f.md#deleteStorage-2) | Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses a promise to return the result. |
| [deleteStorageSync](arkts-storage-deletestoragesync-f.md#deleteStorageSync-1) | Deletes the singleton **Storage** instance of a file from the memory, and deletes the specified file, its backup file, and damaged files. After the specified files are deleted, the **Storage** instance cannot be used for data operations. Otherwise, data inconsistency will occur. |
| [getStorage](arkts-storage-getstorage-f.md#getStorage-1) | Reads the specified file and loads its data to the **Storage** instance for data operations. This API uses an asynchronous callback to return the result. |
| [getStorage](arkts-storage-getstorage-f.md#getStorage-2) | Reads the specified file and loads its data to the **Storage** instance for data operations. This API uses a promise to return the result. |
| [getStorageSync](arkts-storage-getstoragesync-f.md#getStorageSync-1) | Reads the specified file and loads its data to the **Storage** instance for data operations. |
| [removeStorageFromCache](arkts-storage-removestoragefromcache-f.md#removeStorageFromCache-1) | Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses an asynchronous callback to return the result. |
| [removeStorageFromCache](arkts-storage-removestoragefromcache-f.md#removeStorageFromCache-2) | Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur. This API uses a promise to return the result. |
| [removeStorageFromCacheSync](arkts-storage-removestoragefromcachesync-f.md#removeStorageFromCacheSync-1) | Removes the singleton **Storage** instance of a file from the cache. The removed instance cannot be used for data operations. Otherwise, data inconsistency will occur. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Storage](arkts-storage-storage-i.md) | Provides APIs for obtaining and modifying storage data. Before calling the following APIs, use [data_storage.getStorage]{@link storage.getStorageSync} or [data_storage.getStorageSync]{@link storage.getStorageSync} to obtain the **Storage** instance. |
| [StorageObserver](arkts-storage-storageobserver-i.md) | Define the change data information object. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ValueType](arkts-storage-valuetype-t.md) | Enumerates the value types. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [MAX_KEY_LENGTH](arkts-storage-con.md#MAX_KEY_LENGTH) | Indicates the maximum length of a key (80 characters). |
| [MAX_VALUE_LENGTH](arkts-storage-con.md#MAX_VALUE_LENGTH) | Indicates the maximum length of a string (8192 characters). |

