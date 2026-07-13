# getRdbStoreSync

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## getRdbStoreSync

```TypeScript
function getRdbStoreSync(context: Context, config: StoreConfig): RdbStore
```

Obtains a RDB store.
You can set parameters of the RDB store as required. This is a synchronous method
that blocks the thread until the RDB store is obtained.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of an application or ability. |
| config | StoreConfig | Yes | Indicates the {@link StoreConfig} configuration of the database related tothis RDB store. |

**Return value:**

| Type | Description |
| --- | --- |
| RdbStore | The RDB store {@link RdbStore}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid args. |
| [14800010](../../apis-basic-services-kit/errorcode-settings.md#14800010-uiability-required) | Invalid database path. |
| [14800011](../errorcode-data-rdb.md#14800011-database-file-corrupted) | The current operation failed because the database is corrupted. |
| [14801001](../errorcode-data-rdb.md#14801001-stage-model-required) | The operation is supported in the stage model only. |
| [14801002](../errorcode-data-rdb.md#14801002-invalid-datagroupid-in-storeconfig) | Invalid data group ID. |
| [14800017](../errorcode-data-rdb.md#14800017-key-configuration-changed) | Config changed. |
| [14800020](../errorcode-data-rdb.md#14800020-key-damaged-or-lost) | The secret key is corrupted or lost. |
| [14800021](../errorcode-data-rdb.md#14800021-sqlite-generic-error) | SQLite: Generic error. |
| [14800027](../errorcode-data-rdb.md#14800027-sqlite-attempt-to-write-a-readonly-database) | SQLite: Attempt to write a readonly database. |
| [14800028](../errorcode-data-rdb.md#14800028-sqlite-io-error) | SQLite: Some kind of disk I/O error occurred. |
| [14800029](../errorcode-data-rdb.md#14800029-sqlite-database-is-full) | SQLite: The database is full. |
| [14800030](../errorcode-data-rdb.md#14800030-sqlite-unable-to-open-the-database-file) | SQLite: Unable to open the database file. |

