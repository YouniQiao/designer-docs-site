# RdbStore

Provides APIs for managing data in an RDB store. Before using the following APIs, you should obtain an **RdbStore** instance by calling the [getRdbStore](arkts-relationalstore-getrdbstore-f.md#getRdbStore-2) method and then call the corresponding method through the instance. In addition, use [execute](arkts-relationalstore-rdbstore-i.md#execute) to initialize the database table structure and related data first, ensuring that the prerequisites for related API calls are met.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## attach

```TypeScript
attach(fullPath: string, attachName: string, waitTime?: int) : Promise<int>
```

Attaches a database file to the currently linked database.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullPath | string | Yes | Indicates the path of the database file to attach. |
| attachName | string | Yes | Indicates the alias of the database. |
| waitTime | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of attached databases. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800016 | The database alias already exists. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## attach

```TypeScript
attach(context: Context, config: StoreConfig, attachName: string, waitTime?: int) : Promise<int>
```

Attaches a database file to the currently linked database.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of an application or ability. |
| config | StoreConfig | Yes | Indicates the {@link StoreConfig} configuration of the database related to this RDB store. |
| attachName | string | Yes | Indicates the alias of the database. |
| waitTime | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of attached databases. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800016 | The database alias already exists. |
| 14801001 | The operation is supported in the stage model only. |
| 14801002 | Invalid data group ID. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## backup

```TypeScript
backup(destName: string, callback: AsyncCallback<void>): void
```

Backs up a database in a specified name.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destName | string | Yes | Indicates the name that saves the database backup. |
| callback | AsyncCallback&lt;void> | Yes | The callback of backup. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path.  [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## backup

```TypeScript
backup(destName: string): Promise<void>
```

Backs up a database in a specified name.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destName | string | Yes | Indicates the name that saves the database backup. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## batchInsert

```TypeScript
batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<long>): void
```

Inserts a batch of data into the target table. The data insertion fails if the API returns an error, or if it returns -1 without throwing an error. Write 32766 parameters per batch using the {@link ConflictResolution.ON_CONFLICT_REPLACE} policy. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. This API returns immediately upon a failure during the process.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket}  to be inserted into the table. |
| callback | AsyncCallback&lt;long> | Yes | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## batchInsert

```TypeScript
batchInsert(table: string, values: Array<ValuesBucket>): Promise<long>
```

Inserts a batch of data into the target table. The data insertion fails if the API returns an error, or if it returns -1 without throwing an error. Write 32766 parameters per batch using the {@link ConflictResolution.ON_CONFLICT_REPLACE} policy. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. This API returns immediately upon a failure during the process.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of values that were inserted if the operation is successful.  Returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## batchInsertSync

```TypeScript
batchInsertSync(table: string, values: Array<ValuesBucket>): long
```

Inserts a batch of data into the target table. The data insertion fails if the API returns an error, or if it returns -1 without throwing an error. Write 32766 parameters per batch using the {@link ConflictResolution.ON_CONFLICT_REPLACE} policy. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. This API returns immediately upon a failure during the process.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| long | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithConflictResolution

```TypeScript
batchInsertWithConflictResolution(
        table: string,
        values: Array<ValuesBucket>, 
        conflict: ConflictResolution
    ): Promise<long>
```

Inserts a batch of data into the target table. A maximum of 32766 parameters can be inserted at a time. If the number of parameters exceeds the upper limit, the error code 14800000 is returned. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. For example, if the size of the union is 10, a maximum of 3276 data records can be inserted (3276 * 10 = 32760). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters.

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of values that were inserted if the operation is successful.  Returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithConflictResolutionSync

```TypeScript
batchInsertWithConflictResolutionSync(
        table: string,
        values: Array<ValuesBucket>,
        conflict: ConflictResolution
    ): long
```

Inserts a batch of data into the target table. A maximum of 32766 parameters can be inserted at a time. If the number of parameters exceeds the upper limit, the error code 14800000 is returned. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. For example, if the size of the union is 10, a maximum of 3276 data records can be inserted (3276 * 10 = 32760). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters.

**Since:** 18

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| long | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithReturning

```TypeScript
batchInsertWithReturning(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>
```

Inserts a batch of data into the target table and return a resultSet of changed fields. A maximum of 32766 parameters can be inserted at a time. If the number of parameters exceeds the upper limit, the error code 14800001 is returned. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. For example, if the size of the union is 10, a maximum of 3276 data records can be inserted (3276 * 10 = 32760). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the  table. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the inserted field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithReturningSync

```TypeScript
batchInsertWithReturningSync(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Result
```

Inserts a batch of data into the target table and return a resultSet of changed fields. A maximum of 32766 parameters can be inserted at a time. If the number of parameters exceeds the upper limit, the error code 14800001 is returned. The product of the number of inserted data records and the size of the union of all fields in the inserted data equals the number of parameters. For example, if the size of the union is 10, a maximum of 3276 data records can be inserted (3276 * 10 = 32760). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | Array&lt;ValuesBucket> | Yes | Indicates the rows of data {@link ValuesBucket} to be inserted into the  table. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Result | The {@link Result} result of the inserted field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## beginTrans

```TypeScript
beginTrans(): Promise<long>
```

Begins a transaction before executing the SQL statement.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Returns the transaction ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## beginTransaction

```TypeScript
beginTransaction(): void
```

BeginTransaction before execute your sql.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## cleanDeviceDirtyData

```TypeScript
cleanDeviceDirtyData(table: string, cursor?: long): Promise<void>
```

Cleans dirty data deleted in the cross-device sync. If a cursor is specified, data whose cursor is smaller than the specified cursor is cleaned. Otherwise, all data is cleaned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check.  The maximum length is 256 and cannot be empty,  Value constraint:Only letters, digits, and underscores (_) are allowed. |
| cursor | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | -The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800024 | SQLite: The database file is locked. |
| 14800043 | The database does not support this scenario.  Possible causes: 1. The database type is not support;2. The table type is not supported;  3. This is a read-only database. |

## cleanDirtyData

```TypeScript
cleanDirtyData(table: string, cursor: long, callback: AsyncCallback<void>): void
```

Cleans the dirty data, which is the data deleted in the cloud. Data with a cursor smaller than the specified cursor will be cleaned up.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check. |
| cursor | long | Yes | Indicates the position of the data to be cleaned up. |
| callback | AsyncCallback&lt;void> | Yes | Indicates the callback invoked to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be not nullptr.  3. The tablesNames must be not empty string. 4. The cursor must be valid cursor. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## cleanDirtyData

```TypeScript
cleanDirtyData(table: string, callback: AsyncCallback<void>): void
```

Cleans all dirty data deleted in the cloud.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check. |
| callback | AsyncCallback&lt;void> | Yes | The callback of clean. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s). 2. The RdbStore must be not nullptr.  3. The tablesNames must be not empty string. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## cleanDirtyData

```TypeScript
cleanDirtyData(table: string, cursor?: long): Promise<void>
```

Cleans dirty data deleted in the cloud. If a cursor is specified, data with a cursor smaller than the specified cursor will be cleaned up. otherwise clean all.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check. |
| cursor | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | -The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be not nullptr.  3. The tablesNames must be not empty string. 4. The cursor must be valid cursor. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## close

```TypeScript
close(): Promise<void>
```

Close the RdbStore and all resultSets.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 14800000 | Inner error. |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>, callback: AsyncCallback<void>): void
```

Sync data to cloud.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | Yes | The callback of cloudSync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The progress must be a callback type.  5. The callback must be a function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>): Promise<void>
```

Sync data to cloud.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The progress must be a callback type. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(
      mode: SyncMode,
      tables: string[],
      progress: Callback<ProgressDetails>,
      callback: AsyncCallback<void>
    ): void
```

Sync data to cloud.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| tables | string[] | Yes | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | Yes | The callback of cloudSync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:           1. Mandatory parameters are left unspecified.          2. Incorrect parameter types.          3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, tables: string[], progress: Callback<ProgressDetails>): Promise<void>
```

Sync data to cloud.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| tables | string[] | Yes | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.  5. The progress must be a callback type. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(
      mode: SyncMode,
      predicates: RdbPredicates,
      progress: Callback<ProgressDetails>,
      callback: AsyncCallback<void>
    ): void
```

Sync data to cloud.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| predicates | RdbPredicates | Yes | The specified sync condition by the instance object of {@link RdbPredicates}. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | Yes | The callback of cloudSync. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.  5. The progress must be a callback type. 6. The callback must be a function. |
| 202 | if permission verification failed, application which is not a system application uses system API. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, predicates: RdbPredicates, progress: Callback<ProgressDetails>): Promise<void>
```

Sync data to cloud.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | indicates the database synchronization mode. |
| predicates | RdbPredicates | Yes | The specified sync condition by the instance object of {@link RdbPredicates}. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.  5. The progress must be a callback type. |
| 202 | if permission verification failed, application which is not a system  application uses system API. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSyncEx

```TypeScript
cloudSyncEx(config: CloudSyncConfig, progress: Callback<ProgressDetails>): Promise<void>
```

Synchronizes data to the cloud. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | CloudSyncConfig | Yes | indicates the cloud synchronization config. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the sync progress. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800014 | The target instance is already closed. |

## commit

```TypeScript
commit(): void
```

Commit the the sql you have executed.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## commit

```TypeScript
commit(txId : long): Promise<void>
```

Commits the SQL statement executed.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txId | long | Yes | Indicates the transaction ID which is obtained by beginTrans. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## createTransaction

```TypeScript
createTransaction(options?: TransactionOptions): Promise<Transaction>
```

create a transaction instance and begin.

**Since:** 14

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TransactionOptions | No | The option for creating transactions. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Transaction> | The {@link Transaction} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database is busy. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |

## delete

```TypeScript
delete(predicates: RdbPredicates, callback: AsyncCallback<long>): void
```

Deletes data from the database based on a specified instance object of RdbPredicates.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified delete condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;long> | Yes | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## delete

```TypeScript
delete(predicates: RdbPredicates): Promise<long>
```

Deletes data from the database based on a specified instance object of RdbPredicates.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified delete condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | return the number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## delete

```TypeScript
delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<long>): void
```

Deletes data from the database based on a specified instance object of RdbPredicates.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | The specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;long> | Yes | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## delete

```TypeScript
delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<long>
```

Deletes data from the database based on a specified instance object of RdbPredicates.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | The specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## deleteSync

```TypeScript
deleteSync(predicates: RdbPredicates): long
```

Deletes data from the database based on a specified instance object of RdbPredicates with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified delete condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| long | return the number of rows deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## deleteWithReturning

```TypeScript
deleteWithReturning(predicates: RdbPredicates, config: ReturningConfig): Promise<Result>
```

Deletes data from the database based on a specified instance object of RdbPredicates and return a resultSet of changed fields.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified delete condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the deleted field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## deleteWithReturningSync

```TypeScript
deleteWithReturningSync(predicates: RdbPredicates, config: ReturningConfig): Result
```

Deletes data from the database based on a specified instance object of RdbPredicates and return a resultSet of changed fields.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified delete condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Result | The {@link Result} result of the deleted field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## detach

```TypeScript
detach(attachName: string, waitTime?: int) : Promise<int>
```

Detaches a database from this database.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attachName | string | Yes | Indicates the alias of the database. |
| waitTime | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Return the current number of attached databases. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## emit

```TypeScript
emit(event: string): void
```

Notifies the registered observers of a change to the data resource specified by Uri.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Indicates the subscription event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800050 | Failed to obtain the subscription service. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |

## execute

```TypeScript
execute(sql: string, args?: Array<ValueType>): Promise<ValueType>
```

Executes a SQL statement that contains specified parameters and returns a value of ValueType.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| args | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ValueType> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## execute

```TypeScript
execute(sql: string, txId: long, args?: Array<ValueType>): Promise<ValueType>
```

Executes a SQL statement that contains specified parameters and returns a value of ValueType.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| txId | long | Yes | Indicates the transaction ID which is obtained by beginTrans or 0. |
| args | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ValueType> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## executeSql

```TypeScript
executeSql(sql: string, callback: AsyncCallback<void>): void
```

Executes a SQL statement that contains specified parameters but returns no value.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| callback | AsyncCallback&lt;void> | Yes | The callback of executeSql. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800047 | The WAL file size exceeds the default limit. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## executeSql

```TypeScript
executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void
```

Executes a SQL statement that contains specified parameters but returns no value.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | Yes | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |
| callback | AsyncCallback&lt;void> | Yes | The callback of executeSql. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## executeSql

```TypeScript
executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>
```

Executes a SQL statement that contains specified parameters but returns no value.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## executeSync

```TypeScript
executeSync(sql: string, args?: Array<ValueType>): ValueType
```

Executes a SQL statement that contains specified parameters and returns a value of ValueType with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| args | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| ValueType | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## getModifyTime

```TypeScript
getModifyTime(table: string, columnName: string, primaryKeys: PRIKeyType[]): Promise<ModifyTime>
```

Obtains the modify time of rows corresponding to the primary keys.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check. |
| columnName | string | Yes | Indicates the name of the column to check. |
| primaryKeys | PRIKeyType[] | Yes | Indicates the primary keys of the rows to check. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ModifyTime> | -  The promise returned by the function. ModifyTime indicates the modify time of current row.  If this table does not support cloud, the {@link ModifyTime} will be empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 3 - 4 parameter(s)! 2. The RdbStore must be not nullptr.  3. The tablesNames must be not empty string. 4. The columnName must be not empty string.  5. The PRIKey must be number or string. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## getModifyTime

```TypeScript
getModifyTime(
      table: string,
      columnName: string,
      primaryKeys: PRIKeyType[],
      callback: AsyncCallback<ModifyTime>
    ): void
```

Obtains the modify time of rows corresponding to the primary keys.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the name of the table to check. |
| columnName | string | Yes | Indicates the name of the column to check. |
| primaryKeys | PRIKeyType[] | Yes | Indicates the primary keys of the rows to check. |
| callback | AsyncCallback&lt;ModifyTime> | Yes | The callback of getModifyTime. ModifyTime indicates the modify time of current row.  If this table does not support cloud, the {@link ModifyTime} will be empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 3 - 4 parameter(s)! 2. The RdbStore must be not nullptr.  3. The tablesNames must be not empty string. 4. The columnName must be not empty string.  5. The PRIKey must be number or string. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## insert

```TypeScript
insert(table: string, values: ValuesBucket, callback: AsyncCallback<long>): void
```

Inserts a row of data into the target table.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| callback | AsyncCallback&lt;long> | Yes | The row ID if the operation is successful. returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## insert

```TypeScript
insert(table: string, values: ValuesBucket, conflict: ConflictResolution, callback: AsyncCallback<long>): void
```

Inserts a row of data into the target table.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |
| callback | AsyncCallback&lt;long> | Yes | The row ID if the operation is successful. returns -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800047 | The WAL file size exceeds the default limit. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## insert

```TypeScript
insert(table: string, values: ValuesBucket): Promise<long>
```

Inserts a row of data into the target table.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The row ID if the operation is successful. return -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## insert

```TypeScript
insert(table: string, values: ValuesBucket, conflict: ConflictResolution): Promise<long>
```

Inserts a row of data into the target table.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The row ID if the operation is successful. return -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800047 | The WAL file size exceeds the default limit. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## insertSync

```TypeScript
insertSync(table: string, values: ValuesBucket, conflict?: ConflictResolution): long
```

Inserts a row of data into the target table with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | No | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| long | The row ID if the operation is successful. return -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## insertSync

```TypeScript
insertSync(table: string, values: sendableRelationalStore.ValuesBucket, conflict?: ConflictResolution): number
```

Inserts a row of data into the target table with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | sendableRelationalStore.ValuesBucket | Yes | Indicates the row of data  {@link sendableRelationalStore.ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | No | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| number | The row ID if the operation is successful. return -1 otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## lockCloudContainer

```TypeScript
lockCloudContainer(): Promise<int>
```

Lock cloud container before non-auto cloud sync.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | The expired time of the lock, in ms. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |

## lockRow

```TypeScript
lockRow(predicates: RdbPredicates): Promise<void>
```

Locks data from the database based on a specified instance object of RdbPredicates.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified lock condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800018 | No data meets the condition. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## obtainDistributedTableName

```TypeScript
obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void
```

Obtain distributed table name of specified remote device according to local table name. When query remote device database, distributed table name is needed.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | Indicates the remote device. |
| table | string | Yes | {string}: the distributed table name. |
| callback | AsyncCallback&lt;string> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## obtainDistributedTableName

```TypeScript
obtainDistributedTableName(device: string, table: string): Promise<string>
```

Obtain distributed table name of specified remote device according to local table name. When query remote device database, distributed table name is needed.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | Indicates the remote device. |
| table | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | {string}: the distributed table name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## off(SubscribeType)

```TypeScript
off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void
```

Remove specified observer of specified type from the database.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | Yes | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> | Yes | {Array}: the data change observer already registered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## off(SubscribeType)

```TypeScript
off(
      event: 'dataChange',
      type: SubscribeType,
      observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>
    ): void
```

Remove specified observer of specified type from the database.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | indicates the event must be string 'dataChange'. |
| type | SubscribeType | Yes | indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | No | {Array}: the data change observer already registered.  {Array}: the change info already registered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## off

```TypeScript
off(event: string, interProcess: boolean, observer?: Callback<void>): void
```

Remove specified observer of specified type from the database.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Indicates the subscription event. |
| interProcess | boolean | Yes | Indicates whether it is an interprocess subscription or an in-process subscription. |
| observer | Callback&lt;void> | No | The data change observer already registered. [since 10 - 11] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800050 | Failed to obtain the subscription service. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |

## off

```TypeScript
off(event: 'autoSyncProgress', progress?: Callback<ProgressDetails>): void
```

Unregister the database auto synchronization callback.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'autoSyncProgress' | Yes | indicates the event must be string 'autoSyncProgress'. |
| progress | Callback&lt;ProgressDetails> | No | Callback used to return the {@link ProgressDetails} result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be valid.  3. The event must be a not empty string. 4. The progress must be function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## off

```TypeScript
off(event: 'statistics', observer?: Callback<SqlExecutionInfo> ): void
```

Unsubscribes from the SQL statistics.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'statistics' | Yes | Indicates the event type, which must be 'statistics'. |
| observer | Callback&lt;SqlExecutionInfo> | No | Indicates the callback to unregister. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |

## off

```TypeScript
off(event: 'perfStat', observer?: Callback<SqlExecutionInfo>): void
```

Unsubscribes from the SQL performance statistics.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'perfStat' | Yes | Event type, which must be 'perfStat'. |
| observer | Callback&lt;SqlExecutionInfo> | No | Callback to unregister. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## off

```TypeScript
off(event: 'sqliteErrorOccurred', observer?: Callback<ExceptionMessage>): void
```

Unsubscribes from the SQL execution error logs.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'sqliteErrorOccurred' | Yes | Indicates the event type, which must be 'sqliteErrorOccurred'. |
| observer | Callback&lt;ExceptionMessage> | No | Callback to unregister. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offAutoSyncProgress

```TypeScript
offAutoSyncProgress(progress?: Callback<ProgressDetails>): void
```

Unregister the database auto synchronization callback.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | Callback&lt;ProgressDetails> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offDataChange

```TypeScript
offDataChange(type: SubscribeType, observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void
```

Remove specified observer of specified type from the database.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SubscribeType | Yes | indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offPerfStat

```TypeScript
offPerfStat(observer?: Callback<SqlExecutionInfo>): void
```

Unsubscribes from the SQL performance statistics.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offSqliteErrorOccurred

```TypeScript
offSqliteErrorOccurred(observer?: Callback<ExceptionMessage>): void
```

Unsubscribes from the SQL execution error logs.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;ExceptionMessage> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offStatistics

```TypeScript
offStatistics(observer?: Callback<SqlExecutionInfo> ): void
```

Unsubscribes from the SQL statistics.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void
```

Subscribes to data changes of this RDB store. The registered callback will be called when data in a distributed RDB store changes. the callback will be invoked.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | Yes | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> | Yes | {Array}: the observer of data change events in the distributed database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void
```

Subscribes to data changes of this RDB store. The registered callback will be called when data in a distributed RDB store changes.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'dataChange' | Yes | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | Yes | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | Yes | {Array}: the observer of data change events in the distributed database.  {Array}: The change info of data change events in the distributed database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## on

```TypeScript
on(event: string, interProcess: boolean, observer: Callback<void>): void
```

Registers an observer for the database.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Event type, which must match the event type in {@link emit}. |
| interProcess | boolean | Yes | Indicates whether it is an interprocess subscription or an in-process subscription. |
| observer | Callback&lt;void> | Yes | The observer of data change events in the database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800050 | Failed to obtain the subscription service. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |

## on

```TypeScript
on(event: 'autoSyncProgress', progress: Callback<ProgressDetails>): void
```

Register an automatic synchronization callback to the database.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'autoSyncProgress' | Yes | Indicates the event must be string 'autoSyncProgress'. |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed;  4. The event must be a not empty string; 5. The progress must be function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## on

```TypeScript
on(event: 'statistics', observer: Callback<SqlExecutionInfo> ): void
```

Subscribes to the SQL statistics.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'statistics' | Yes | Indicates the event type, which must be 'statistics'. |
| observer | Callback&lt;SqlExecutionInfo> | Yes | Indicates the callback used to return the SQL execution statistics {@link SqlExeInfo} in the database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |

## on

```TypeScript
on(event: 'perfStat', observer: Callback<SqlExecutionInfo>): void
```

Subscribes to the SQL performance statistics.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'perfStat' | Yes | Event type, which must be 'perfStat'. |
| observer | Callback&lt;SqlExecutionInfo> | Yes | Callback used to return the SQL execution statistics  {@link SqlExecutionInfo}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## on

```TypeScript
on(event: 'sqliteErrorOccurred', observer: Callback<ExceptionMessage>): void
```

Subscribes to the SQL execution error logs.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | 'sqliteErrorOccurred' | Yes | Event type, which must be 'sqliteErrorOccurred'. |
| observer | Callback&lt;ExceptionMessage> | Yes | Callback used to return the SQL execution errorlog  {@link ExceptionMessage }. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onAutoSyncProgress

```TypeScript
onAutoSyncProgress(progress: Callback<ProgressDetails>): void
```

Register an automatic synchronization callback to the database.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | Callback&lt;ProgressDetails> | Yes | Callback used to return the {@link ProgressDetails} result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onDataChange

```TypeScript
onDataChange(
      type: SubscribeType, 
      observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>
    ): void
```

Subscribes to data changes of this RDB store. The registered callback will be called when data in a distributed RDB store changes.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SubscribeType | Yes | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | Yes | {Array}: The observer of data change events in the distributed database.  {Array}: The change info of data change events in the distributed database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onPerfStat

```TypeScript
onPerfStat(observer: Callback<SqlExecutionInfo>): void
```

Subscribes to the SQL performance statistics.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | Yes | Callback used to return the SQL execution statistics  {@link SqlExecutionInfo}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onSqliteErrorOccurred

```TypeScript
onSqliteErrorOccurred(observer: Callback<ExceptionMessage>): void
```

Subscribes to the SQL execution error logs.

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;ExceptionMessage> | Yes | Callback used to return the SQL execution errorlog  {@link ExceptionMessage }. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onStatistics

```TypeScript
onStatistics(observer: Callback<SqlExecutionInfo> ): void
```

Subscribes to the SQL statistics.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | Yes | Indicates the callback used to return the SQL execution statistics {@link SqlExeInfo} in the database. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |

## query

```TypeScript
query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database based on specified conditions.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## query

```TypeScript
query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database based on specified conditions.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | Yes | The columns to query. If the value is empty array, the query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## query

```TypeScript
query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries data in the database based on specified conditions.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No | The columns to query. If the value is null, the query applies to all columns. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## query

```TypeScript
query(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database based on specified conditions.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## query

```TypeScript
query(
      table: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns: Array<string>,
      callback: AsyncCallback<ResultSet>
    ): void
```

Queries data in the database based on specified conditions.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| columns | Array&lt;string> | Yes | The columns to query. If the value is empty array, the query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## query

```TypeScript
query(
      table: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns?: Array<string>
    ): Promise<ResultSet>
```

Queries data in the database based on specified conditions.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| columns | Array&lt;string> | No | The columns to query. If the value is null, the query applies to all columns. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## queryByStep

```TypeScript
queryByStep(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>
```

Query data in the database step‑by‑step based on SQL statements.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute.  Value range: (0, +∞)  A valid SQL statement must be used. Otherwise, an error code may be thrown when ResultSet is used. |
| bindArgs | Array&lt;ValueType> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryByStep

```TypeScript
queryByStep(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries data in the database step‑by‑step based on specified conditions.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object  of {@link RdbPredicates}. |
| columns | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryLockedRow

```TypeScript
queryLockedRow(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries locked data in the database based on specified conditions.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## querySharingResource

```TypeScript
querySharingResource(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Obtains sharing resource of rows corresponding to the predicates.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | -The promise returned by the function.  {@link ResultSet} is query result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be not nullptr.  3. The predicates must be an RdbPredicates. 4. The columns must be a string array. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## querySharingResource

```TypeScript
querySharingResource(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>): void
```

Obtains sharing resource of rows corresponding to the predicates.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The callback of querySharingResource.  {@link ResultSet} is query result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be not nullptr.  3. The predicates must be an RdbPredicates. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## querySharingResource

```TypeScript
querySharingResource(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void
```

Obtains sharing resource of rows corresponding to the predicates.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | Yes | The specified columns to query. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The callback of querySharingResource.  {@link ResultSet} is query result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800000 | Inner error. |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be not nullptr.  3. The predicates must be an RdbPredicates. 4. The columns must be a string array. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## querySql

```TypeScript
querySql(sql: string, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database based on SQL statement.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## querySql

```TypeScript
querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void
```

Queries data in the database based on SQL statement.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | Yes | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## querySql

```TypeScript
querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>
```

Queries data in the database based on SQL statement.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |

## querySqlSync

```TypeScript
querySqlSync(sql: string, bindArgs?: Array<ValueType>): ResultSet
```

Queries data in the database based on SQL statement with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | No | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**Return value:**

| Type | Description |
| --- | --- |
| ResultSet | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |

## querySqlWithoutRowCount

```TypeScript
querySqlWithoutRowCount(sql: string, bindArgs?: Array<ValueType>): Promise<LiteResultSet>
```

Queries data from the RDB store based on specified conditions without calculating the row count. This API uses a promise to return the result and delivers better performance than the [querySql]relationalStore.Transaction.querySql API. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;LiteResultSet> | Promise used to return the result. If the operation is successful, a  LiteResultSet object will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## querySqlWithoutRowCountSync

```TypeScript
querySqlWithoutRowCountSync(sql: string, bindArgs?: Array<ValueType>): LiteResultSet
```

Queries data from the RDB store based on specified SQL statements without calculating the row count. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000. If complex logic and a large number of loops are involved in the operations on the **LiteResultSet** obtained by **querySqlWithoutRowCountSync**, the freeze problem may occur. You are advised to perform this operation in the [taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) thread.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sql | string | Yes | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| LiteResultSet | If the operation is successful, a LiteResultSet object will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## querySync

```TypeScript
querySync(predicates: RdbPredicates, columns?: Array<string>): ResultSet
```

Queries data in the database based on specified conditions with sync function.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No | The columns to query. If the value is empty array, the query applies to all columns. |

**Return value:**

| Type | Description |
| --- | --- |
| ResultSet | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |

## queryWithoutRowCount

```TypeScript
queryWithoutRowCount(predicates: RdbPredicates, columns?: Array<string>): Promise<LiteResultSet>
```

Queries data without rowCount in the database based on specified conditions.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;LiteResultSet> | The {@link LiteResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryWithoutRowCountSync

```TypeScript
queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet
```

Queries data without rowCount in the database based on specified conditions with sync function.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| LiteResultSet | The {@link LiteResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800014 | The target instance is already closed. |

## rekey

```TypeScript
rekey(cryptoParam?: CryptoParam): Promise<void>
```

Changes the key used to encrypt the database.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cryptoParam | CryptoParam | No | Specifies the crypto parameters used to rekey.  If valid cryptoParam passed, the cryptoParam is used to rekey.  If cryptoParam is null or not passed, the default cryptoParam is used. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |

## rekeyEx

```TypeScript
rekeyEx(cryptoParam: CryptoParam): Promise<void>
```

Change the encryption parameters of the database.

**Since:** 22

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cryptoParam | CryptoParam | Yes | Crypto parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |

## remoteQuery

```TypeScript
remoteQuery(
      device: string,
      table: string,
      predicates: RdbPredicates,
      columns: Array<string>,
      callback: AsyncCallback<ResultSet>
    ): void
```

Queries remote data in the database based on specified conditions before Synchronizing Data.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | Indicates specified remote device. |
| table | string | Yes | Indicates the target table. |
| predicates | RdbPredicates | Yes | The specified remote remote query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | Yes | The columns to remote query.  If the value is empty array, the remote query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | Yes | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## remoteQuery

```TypeScript
remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>): Promise<ResultSet>
```

Queries remote data in the database based on specified conditions before Synchronizing Data.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| device | string | Yes | Indicates specified remote device. |
| table | string | Yes | Indicates the target table. |
| predicates | RdbPredicates | Yes | The specified remote remote query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | Yes | The columns to remote query.  If the value is empty array, the remote query applies to all columns. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## restore

```TypeScript
restore(srcName: string, callback: AsyncCallback<void>): void
```

Restores a database from a specified database file.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcName | string | Yes | Indicates the name that saves the database file. |
| callback | AsyncCallback&lt;void> | Yes | The callback of restore. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## restore

```TypeScript
restore(srcName: string): Promise<void>
```

Restores a database from a specified database file.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcName | string | Yes | Indicates the name that saves the database file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## restore

```TypeScript
restore(): Promise<void>
```

Restores a database from a specified database file.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800000 | Inner error. |
| 14800010 | Failed to open or delete the database by an invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## retainDeviceData

```TypeScript
retainDeviceData(retainDevices?: Record<string, Array<string>>): Promise<void>
```

Remove distributed table remote data.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| retainDevices | Record&lt;string, Array&lt;string>> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The RdbStore or ResultSet is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800024 | SQLite: The database file is locked. |
| 14800042 | The database does not exist. Possible causes: 1. The database is deleted;  2. The database is not created. |
| 14800043 | The database does not support this scenario.  Possible causes: 1. The database type is not supported;2. The table type is not supported;  3. This is a read-only database. |

## rollBack

```TypeScript
rollBack(): void
```

Roll back the sql you have already executed.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 14800000 | Inner error. [since 12] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## rollback

```TypeScript
rollback(txId : long): Promise<void>
```

Rolls back the SQL statement executed.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| txId | long | Yes | Indicates the transaction ID which is obtained by beginTrans. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800000 | Inner error. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void
```

Set table to be distributed table.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tables | Array&lt;string> | Yes | Indicates the table names you want to set. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setDistributedTables. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>): Promise<void>
```

Set table to be distributed table.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tables | Array&lt;string> | Yes | Indicates the table names you want to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>, type: DistributedType, callback: AsyncCallback<void>): void
```

Set table to be distributed table.

**Since:** 10

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tables | Array&lt;string> | Yes | Indicates the table names you want to set. |
| type | DistributedType | Yes | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setDistributedTables. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800051 | The type of the distributed table does not match. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## setDistributedTables

```TypeScript
setDistributedTables(
      tables: Array<string>,
      type: DistributedType,
      config: DistributedConfig,
      callback: AsyncCallback<void>
    ): void
```

Set table to be distributed table.

**Since:** 10

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tables | Array&lt;string> | Yes | Indicates the table names you want to set. |
| type | DistributedType | Yes | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| config | DistributedConfig | Yes | Indicates the distributed config of the tables. For details, see {@link DistributedConfig}. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setDistributedTables. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800051 | The type of the distributed table does not match. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>, type?: DistributedType, config?: DistributedConfig): Promise<void>
```

Set table to be a distributed table.

**Since:** 10

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tables | Array&lt;string> | Yes | Indicates the table names you want to set. |
| type | DistributedType | No | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| config | DistributedConfig | No | Indicates the distributed config of the tables. For details, see {@link DistributedConfig}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800051 | The type of the distributed table does not match. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## setLocale

```TypeScript
setLocale(locale: string) : Promise<void>
```

Support for collations in different languages.

**Since:** 20

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | Yes | Language related to the locale.  for example, zh. The value complies with the ISO 639 standard. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800034 | SQLite: Library used incorrectly. |

## stopCloudSync

```TypeScript
stopCloudSync(): Promise<void>
```

Stops synchronizing data with the cloud.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported  because the device does not support the cloud synchronization capability. |
| 14800014 | The target instance is already closed. |

## sync

```TypeScript
sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, int]>>): void
```

Sync data between devices.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | Indicates the database synchronization mode. |
| predicates | RdbPredicates | Yes | The specified sync condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;Array&lt;[string, int]>> | Yes | {Array}: devices sync status array,  {string}: device id,  {int}: device sync status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## sync

```TypeScript
sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, int]>>
```

Sync data between devices.

**Since:** 9

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | Indicates the database synchronization mode. |
| predicates | RdbPredicates | Yes | The specified sync condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;[string, int]>> | {Array}: devices sync status array, {string}: device id, {int}: device sync status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## syncEx

```TypeScript
syncEx(mode: SyncMode, predicates: RdbPredicates): Promise<Array<SyncResult>>
```

Sync data between devices. 1. The difference between the sync interface and the syncEx interface is that they can return more error codes, but their functionality is similar. 2. Before invoking synchronization, call setdistributedTable to set the distributed table.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SyncMode | Yes | Indicates the database synchronization mode.  Only SYNC_MODE_PUSH and SYNC_MODE_PULL are supported. |
| predicates | RdbPredicates | Yes | The specified sync condition by the instance object  of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SyncResult>> | devices sync result array, see {@link SyncResult} for details. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## unlockCloudContainer

```TypeScript
unlockCloudContainer(): Promise<void>
```

Unlock cloud container.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |

## unlockRow

```TypeScript
unlockRow(predicates: RdbPredicates): Promise<void>
```

Unlocks data from the database based on a specified instance object of RdbPredicates.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicates | RdbPredicates | Yes | The specified Unlock condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800018 | No data meets the condition. |
| 14800021 | SQLite: Generic error. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<long>): void
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;long> | Yes | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## update

```TypeScript
update(
      values: ValuesBucket,
      predicates: RdbPredicates,
      conflict: ConflictResolution,
      callback: AsyncCallback<long>
    ): void
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |
| callback | AsyncCallback&lt;long> | Yes | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800047 | The WAL file size exceeds the default limit. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates): Promise<long>
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 9

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates, conflict: ConflictResolution): Promise<long>
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | Yes | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800047 | The WAL file size exceeds the default limit. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## update

```TypeScript
update(
      table: string,
      values: ValuesBucket,
      predicates: dataSharePredicates.DataSharePredicates,
      callback: AsyncCallback<long>
    ): void
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Indicates the specified update condition by  the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;long> | Yes | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## update

```TypeScript
update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<long>
```

Updates data in the database based on a specified instance object of RdbPredicates.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| table | string | Yes | Indicates the target table. |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | dataSharePredicates.DataSharePredicates | Yes | Indicates the specified update condition by  the instance object of {@link dataSharePredicates.DataSharePredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800047 | The WAL file size exceeds the default limit. [since 10] |
| 14800011 | The current operation failed because the database is corrupted. [since 12] |
| 14800014 | The target instance is already closed. [since 12] |
| 14800015 | The database does not respond. [since 12] |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. [since 12] |
| 14800022 | SQLite: Callback routine requested an abort. [since 12] |
| 14800023 | SQLite: Access permission denied. [since 12] |
| 14800024 | SQLite: The database file is locked. [since 12] |
| 14800025 | SQLite: A table in the database is locked. [since 12] |
| 14800026 | SQLite: The database is out of memory. [since 12] |
| 14800027 | SQLite: Attempt to write a readonly database. [since 12] |
| 14800028 | SQLite: Some kind of disk I/O error occurred. [since 12] |
| 14800029 | SQLite: The database is full. [since 12] |
| 14800030 | SQLite: Unable to open the database file. [since 12] |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. [since 12] |
| 14800032 | SQLite: Abort due to constraint violation. [since 12] |
| 14800033 | SQLite: Data type mismatch. [since 12] |
| 14800034 | SQLite: Library used incorrectly. [since 12] |

## updateDistributedInfo

```TypeScript
updateDistributedInfo(info: DistributedInfo, predicates: RdbPredicates): Promise<long>
```

Update distributed table log.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | DistributedInfo | Yes | Indicates the table log needs to be updated. |
| predicates | RdbPredicates | Yes | The specified query condition by the instance object of {@link RdbPredicates}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Returns the number of updated logs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The RdbStore or ResultSet is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error. |
| 14800024 | SQLite: The database file is locked. |
| 14800043 | The database does not support this scenario.  Possible causes: 1. The database type is not supported;2. The table type is not supported;  3. This is a read-only database. |

## updateSync

```TypeScript
updateSync(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): long
```

Updates data in the database based on a specified instance object of RdbPredicates with sync interface.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | No | Indicates the {@link ConflictResolution} to insert data into the table. |

**Return value:**

| Type | Description |
| --- | --- |
| long | The number of affected rows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800015 | The database does not respond. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## updateWithReturning

```TypeScript
updateWithReturning(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>
```

Updates data in the database based on a specified instance object of RdbPredicates and return a resultSet of changed fields.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the updated field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## updateWithReturningSync

```TypeScript
updateWithReturningSync(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Result
```

Updates data in the database based on a specified instance object of RdbPredicates and return a resultSet of changed fields.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | ValuesBucket | Yes | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | Yes | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | Yes | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Result | The {@link Result} result of the updated field includes the number of modified  rows and the result set of changed data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## rebuilt

```TypeScript
rebuilt: RebuildType
```

Set whether the database is rebuilt.

**Type:** RebuildType

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## version

```TypeScript
version: int
```

Set RdbStore version. The version number must be an integer greater than 0. Obtains the RdbStore version.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

