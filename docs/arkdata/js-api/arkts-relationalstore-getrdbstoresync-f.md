# getRdbStoreSync

## getRdbStoreSync

```TypeScript
function getRdbStoreSync(context: Context, config: StoreConfig): RdbStore
```

Obtains a RDB store. You can set parameters of the RDB store as required. This is a synchronous method that blocks the thread until the RDB store is obtained.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of an application or ability. |
| config | StoreConfig | Yes | Indicates the {@link StoreConfig} configuration of the database related to  this RDB store. |

**Return value:**

| Type | Description |
| --- | --- |
| RdbStore | The RDB store {@link RdbStore}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid args. |
| 14800010 | Invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14801001 | The operation is supported in the stage model only. |
| 14801002 | Invalid data group ID. |
| 14800017 | Config changed. |
| 14800020 | The secret key is corrupted or lost. |
| 14800021 | SQLite: Generic error. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |

