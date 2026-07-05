# Transaction

Provides APIs for managing databases in transaction mode. A transaction object is created by using [createTransaction](arkts-relationalstore-rdbstore-i.md#createTransaction). Operations on different transaction objects are isolated. For details about the transaction types, see [TransactionType](arkts-relationalstore-transactiontype-e.md#TransactionType). Currently, an RDB store supports only one write transaction at a time. If the current [RdbStore](arkts-data-relationalstore.md#relationalStore) has a write transaction that is not released, creating an **IMMEDIATE** or **EXCLUSIVE** transaction object will return error 14800024. If a **DEFERRED** transaction object is created, error 14800024 may be returned when it is used to invoke a write operation for the first time. After a write transaction is created using **IMMEDIATE** or **EXCLUSIVE**, or a **DEFERRED** transaction is upgraded to a write transaction, write operations in the [RdbStore](arkts-data-relationalstore.md#relationalStore) will also return error 14800024. When the number of concurrent transactions is large and the write transaction duration is long, the frequency of returning error 14800024 may increase. You can reduce the occurrence of error 14800024 by shortening the transaction duration or by handling the error 14800024 through retries. Before using the following APIs, you should obtain a **Transaction** instance by calling the [createTransaction](arkts-relationalstore-rdbstore-i.md#createTransaction) method and then call the corresponding method through the instance. **System capability**: SystemCapability.DistributedDataManager.RelationalStore.Core **Example**: For details about the definition of **this.context** in the sample code, see the application [context]./application/Context:Context of the stage model.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## batchInsert

```TypeScript
batchInsert(table: string, values: Array<ValuesBucket>): Promise<long>
```

Inserts data into a table in batches. This API uses a promise to return the result. Data is written in batches of up to 32,766 parameters each with the [ConflictResolution.ON_CONFLICT_REPLACE](arkts-relationalstore-conflictresolution-e.md#ConflictResolution) policy. The total number of parameters is calculated as the number of inserted data records multiplied by the size of the union set of all fields in the inserted data. If the operation fails, an error is returned. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the result. If the operation is successful, the number of  inserted data records is returned. Otherwise, -1 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertSync

```TypeScript
batchInsertSync(table: string, values: Array<ValuesBucket>): long
```

Inserts data into a table in batches. This API returns the result synchronously. Data is written in batches of up to 32,766 parameters each with the [ConflictResolution.ON_CONFLICT_REPLACE](arkts-relationalstore-conflictresolution-e.md#ConflictResolution) policy. The total number of parameters is calculated as the number of inserted data records multiplied by the size of the union set of all fields in the inserted data. If the operation fails, an error is returned. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | If the operation is successful, the number of inserted data records is returned. Otherwise,  -1 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithConflictResolution

```TypeScript
batchInsertWithConflictResolution(
        table: string,
        values: Array<ValuesBucket>,
        conflict: ConflictResolution
    ): Promise<long>
```

Inserts data into a table with conflict resolutions in batches. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution). This API uses a promise to return the result. A maximum of 32,766 parameters can be inserted at a time. If the number of parameters exceeds this limit, the error code 14800000 is returned. The number of inserted data records multiplied by the size of the union across all fields in the inserted data equals the number of parameters. For example, if the size of the union set is 10, a maximum of 3,276 data records can be inserted (3276 × 10 = 327 60). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |
| conflict | ConflictResolution | 是 | Resolution used to resolve the conflict. If ON_CONFLICT_ROLLBACK is  used, the transaction will be rolled back when a conflict occurs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the result. If the operation is successful, the number of  inserted data records is returned. Otherwise, -1 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800034 | SQLite: Library used incorrectly. |
| 14800047 | The WAL file size exceeds the default limit. |

## batchInsertWithConflictResolutionSync

```TypeScript
batchInsertWithConflictResolutionSync(table: string, values: Array<ValuesBucket>,
      conflict: ConflictResolution): long
```

Inserts data into a table with conflict resolutions in batches. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution). A maximum of 32,766 parameters can be inserted at a time. If the number of parameters exceeds this limit, the error code 14800000 is returned. The number of inserted data records multiplied by the size of the union across all fields in the inserted data equals the number of parameters. For example, if the size of the union set is 10, a maximum of 3,276 data records can be inserted (3276 × 10 = 327 60). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |
| conflict | ConflictResolution | 是 | Resolution used to resolve the conflict. If ON_CONFLICT_ROLLBACK is  used, the transaction will be rolled back when a conflict occurs. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | If the operation is successful, the number of inserted data records is returned. Otherwise,  -1 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800022 | SQLite: Callback routine requested an abort. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
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

Inserts data into a table in batches. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution), and [Result](arkts-relationalstore-result-i.md#Result) is returned. This API uses a promise to return the result. A maximum of 32,766 parameters can be inserted at a time. If the number of parameters exceeds this limit, the error code 14800001 is returned. The number of inserted data records multiplied by the size of the union across all fields in the inserted data equals the number of parameters. For example, if the size of the union set is 10, a maximum of 3,276 data records can be inserted (3276 × 10 = 327 60). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters. It is not recommended to use the **ON_CONFLICT_FAIL** policy for the **conflict** parameter, as this may prevent the return of correct results. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table for data insertion. Note: A valid table name must not contain  spaces ( ), commas (,), or asterisks (), and must not start or end with a dot (.). Otherwise, a parameter  error will be thrown. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. Note: An empty array or data containing  duplicate asset records will trigger a parameter error. |
| config | ReturningConfig | 是 | Configuration information of the return value. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | Promise used to return the result. If the operation is successful, the affected  dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
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

Inserts data into a table in batches. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution), and [Result](arkts-relationalstore-result-i.md#Result) is returned. A maximum of 32,766 parameters can be inserted at a time. If the number of parameters exceeds this limit, the error code 14800001 is returned. The number of inserted data records multiplied by the size of the union across all fields in the inserted data equals the number of parameters. For example, if the size of the union set is 10, a maximum of 3,276 data records can be inserted (3276 × 10 = 327 60). Ensure that your application complies with this constraint when calling this API to avoid errors caused by excessive parameters. It is not recommended to use the **ON_CONFLICT_FAIL** policy for the **conflict** parameter, as this may prevent the return of correct results. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table for data insertion. Note: A valid table name must not contain  spaces ( ), commas (,), or asterisks (), and must not start or end with a dot (.). Otherwise, a parameter  error will be thrown. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. Note: An empty array or data containing  duplicate asset records will trigger a parameter error. |
| config | ReturningConfig | 是 | Configuration information of the return value. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | If the operation is successful, the affected dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## commit

```TypeScript
commit(): Promise<void>
```

Commits this executed SQL statement. This API uses a promise to return the result. When using asynchronous APIs to execute SQL statements, ensure that **commit()** is called after the asynchronous API execution is completed. Otherwise, the SQL operations may be lost. After **commit()** is called, the transaction object and the created **ResultSet** object will be closed.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |

## delete

```TypeScript
delete(predicates: RdbPredicates): Promise<long>
```

Deletes data from the RDB store based on the specified **RdbPredicates** object. This API uses a promise to return the result.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the number of rows deleted. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## deleteSync

```TypeScript
deleteSync(predicates: RdbPredicates): long
```

Deletes data from the RDB store based on the specified **RdbPredicates** object. This API returns the result synchronously.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Number of rows deleted. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## deleteWithReturning

```TypeScript
deleteWithReturning(predicates: RdbPredicates, config: ReturningConfig): Promise<Result>
```

Deletes data from the RDB store based on the specified **RdbPredicates** object and returns [Result](arkts-relationalstore-result-i.md#Result). This API uses a promise to return the result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |
| config | ReturningConfig | 是 | Configuration information of the return value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | Promise used to return the result. If the operation is successful, the affected  dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## deleteWithReturningSync

```TypeScript
deleteWithReturningSync(predicates: RdbPredicates, config: ReturningConfig): Result
```

Deletes data from the RDB store based on the specified **RdbPredicates** object and returns [Result](arkts-relationalstore-result-i.md#Result).

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |
| config | ReturningConfig | 是 | Configuration information of the return value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | If the operation is successful, the affected dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## execute

```TypeScript
execute(sql: string, args?: Array<ValueType>): Promise<ValueType>
```

Executes an SQL statement that contains parameters but does not return data. This API returns the result synchronously. The SQL statement can be used to create, delete, query, and modify a table. The type of the return value varies, depending on the execution result. This API does not support query, database attachment, and transaction operations. You can use [querySql]relationalStore.Transaction.querySql or [query]relationalStore.Transaction.query to query data, and use [attach] {@link @ohos.data.relationalStore:relationalStore.RdbStore.attach(fullPath: string, attachName: string)} to attach a database. Statements separated by semicolons (\;) are not supported. Statements starting with comments are not supported.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| args | Array&lt;ValueType> | 否 | Arguments in the SQL statement. The value corresponds to the placeholders in  the SQL parameter statement. If the SQL parameter statement is complete, leave this parameter  blank. [since 14 - 19] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | Promise used to return the SQL execution result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## executeSync

```TypeScript
executeSync(sql: string, args?: Array<ValueType>): ValueType
```

Executes an SQL statement that contains specified arguments. The number of relational operators between expressions and operators in the statement cannot exceed 1,000. This API returns a value of the **ValueType** type. This API can be used to add, delete, and modify data, run SQL statements of the PRAGMA syntax, and create, delete, and modify a table. The type of the return value varies, depending on the execution result. This API does not support query, database attachment, and transaction operations. You can use [querySql]relationalStore.Transaction.querySql or [query]relationalStore.Transaction.query to query data, and use [attach] {@link @ohos.data.relationalStore:relationalStore.RdbStore.attach(fullPath: string, attachName: string)} to attach a database. Statements separated by semicolons (\;) are not supported. Statements starting with comments are not supported.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| args | Array&lt;ValueType> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | SQL execution result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported the sql(attach,begin,commit,rollback etc.). |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## insert

```TypeScript
insert(table: string, values: ValuesBucket, conflict?: ConflictResolution): Promise<long>
```

Inserts a row of data into a table. This API uses a promise to return the result. Due to the limit of the shared memory, the size of a single data record cannot exceed 2 MB. Otherwise, data cannot be obtained using the **get** methods such as [getValue](arkts-relationalstore-resultset-i.md#getValue) and [getString](arkts-relationalstore-resultset-i.md#getString) after **ResultSet** is obtained through the [query]@ohos.data.relationalStore:relationalStore.RdbStore.query(predicates: RdbPredicates) or [querySql](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount) API of **RdbStore**. As a result, the operation may fail or an exception may be thrown. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | ValuesBucket | 是 | Row of data to insert. |
| conflict | ConflictResolution | 否 | Resolution used to resolve the conflict. Default value:  relationalStore.ConflictResolution.ON_CONFLICT_NONE. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the result. If the operation is successful, the row ID will be  returned. Otherwise, -1 will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## insertSync

```TypeScript
insertSync(table: string, values: ValuesBucket | sendableRelationalStore.ValuesBucket,
      conflict?: ConflictResolution): number
```

Inserts a row of data into a table. This API returns the result synchronously. Due to the limit of the shared memory, the size of a single data record cannot exceed 2 MB. Otherwise, data cannot be obtained using the **get** methods such as [getValue](arkts-relationalstore-resultset-i.md#getValue) and [getString](arkts-relationalstore-resultset-i.md#getString) after **ResultSet** is obtained through the [query]@ohos.data.relationalStore:relationalStore.RdbStore.query(predicates: RdbPredicates) or [querySql](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount) API of **RdbStore**. As a result, the operation may fail or an exception may be thrown. A single string field supports a maximum of 8 MB data. If the data exceeds 8 MB, only the first 8 MB data is retained. For data storage requirements exceeding 8 MB, the Blob type is recommended.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | ValuesBucket \| sendableRelationalStore.ValuesBucket | 是 | Row of data to insert. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | If the operation is successful, the row ID will be returned. Otherwise, -1 will be  returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## insertSync

```TypeScript
insertSync(table: string, values: ValuesBucket, conflict?: ConflictResolution): long
```

Inserts a row of data into the target table with sync interface, just use in TaskPool or Worker.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The row ID if the operation is successful. return -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## query

```TypeScript
query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries data from the RDB store based on specified conditions. This API uses a promise to return the result.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 否 | Columns to query. If null is passed in, all columns are queried. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | Promise used to return the result. If the operation is successful, a  ResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800047 | The WAL file size exceeds the default limit. |

## querySql

```TypeScript
querySql(sql: string, args?: Array<ValueType>): Promise<ResultSet>
```

Queries data in the RDB store using the specified SQL statement. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000. This API uses a promise to return the result.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| args | Array&lt;ValueType> | 否 | Arguments in the SQL statement. The value corresponds to the placeholders in  the SQL parameter statement. If the SQL parameter statement is complete, leave this parameter blank. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | Promise used to return the result. If the operation is successful, a  ResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800047 | The WAL file size exceeds the default limit. |

## querySqlSync

```TypeScript
querySqlSync(sql: string, args?: Array<ValueType>): ResultSet
```

Queries data in the RDB store using the specified SQL statement. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000. If complex logic and a large number of loops are involved in the operations on the **resultSet** obtained by **querySync**, the freeze problem may occur. You are advised to perform this operation in the [taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) thread.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| args | Array&lt;ValueType> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResultSet | If the operation is successful, a ResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800047 | The WAL file size exceeds the default limit. |

## querySqlWithoutRowCount

```TypeScript
querySqlWithoutRowCount(sql: string, bindArgs?: Array<ValueType>): Promise<LiteResultSet>
```

Queries data from the RDB store based on specified conditions without calculating the row count. This API uses a promise to return the result and delivers better performance than the [querySql]relationalStore.Transaction.querySql API. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;LiteResultSet> | Promise used to return the result. If the operation is successful, a  LiteResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## querySqlWithoutRowCountSync

```TypeScript
querySqlWithoutRowCountSync(sql: string, bindArgs?: Array<ValueType>): LiteResultSet
```

Queries data from the RDB store based on specified SQL statements without calculating the row count. The number of relational operators between expressions and operators in the SQL statement cannot exceed 1,000. If complex logic and a large number of loops are involved in the operations on the **LiteResultSet** obtained by **querySqlWithoutRowCountSync**, the freeze problem may occur. You are advised to perform this operation in the [taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) thread.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LiteResultSet | If the operation is successful, a LiteResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## querySync

```TypeScript
querySync(predicates: RdbPredicates, columns?: Array<string>): ResultSet
```

Queries data in a database based on specified conditions. This API returns the result synchronously. If complex logic and a large number of loops are involved in the operations on the **resultSet** obtained by **querySync**, the freeze problem may occur. You are advised to perform this operation in the [taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) thread.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 否 | Columns to query. If null is passed in, all columns are queried. The default  value is null. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResultSet | If the operation is successful, a ResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800047 | The WAL file size exceeds the default limit. |

## queryWithoutRowCount

```TypeScript
queryWithoutRowCount(predicates: RdbPredicates, columns?: Array<string>): Promise<LiteResultSet>
```

Queries data from the RDB store based on specified conditions without calculating the row count. This API delivers better performance than the [query]relationalStore.Transaction.query API. This API uses a promise to return the result.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;LiteResultSet> | If the operation is successful, a LiteResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryWithoutRowCountSync

```TypeScript
queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet
```

Queries data from the RDB store based on specified conditions without calculating the row count. If complex logic and a large number of loops are involved in the operations on the **LiteResultSet** obtained by **queryWithoutRowCountSync**, the freeze problem may occur. You are advised to perform this operation in the [taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) thread.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LiteResultSet | If the operation is successful, a LiteResultSet object will be returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## rollback

```TypeScript
rollback(): Promise<void>
```

Rolls back this executed SQL statement. This API uses a promise to return the result. After **rollback()** is called, the transaction object and the created **ResultSet** object will be closed.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): Promise<long>
```

Updates data based on the specified **RdbPredicates** object. This API uses a promise to return the result. Due to the limit of the shared memory, the size of a single data record cannot exceed 2 MB. Otherwise, data cannot be obtained using the **get** methods such as [getValue](arkts-relationalstore-resultset-i.md#getValue) and [getString](arkts-relationalstore-resultset-i.md#getString) after **ResultSet** is obtained through the [query]@ohos.data.relationalStore:relationalStore.RdbStore.query(predicates: RdbPredicates) or [querySql](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount) API of **RdbStore**. As a result, the operation may fail or an exception may be thrown.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |
| conflict | ConflictResolution | 否 | Resolution used to resolve the conflict. Default value:  relationalStore.ConflictResolution.ON_CONFLICT_NONE. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the number of rows updated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## updateSync

```TypeScript
updateSync(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): long
```

Updates data in the RDB store based on the specified **RdbPredicates** object. This API returns the result synchronously. Due to the limit of the shared memory, the size of a single data record cannot exceed 2 MB. Otherwise, data cannot be obtained using the **get** methods such as [getValue](arkts-relationalstore-resultset-i.md#getValue) and [getString](arkts-relationalstore-resultset-i.md#getString) after **ResultSet** is obtained through the [query]@ohos.data.relationalStore:relationalStore.RdbStore.query(predicates: RdbPredicates) or [querySql](arkts-relationalstore-rdbstore-i.md#querySqlWithoutRowCount) API of **RdbStore**. As a result, the operation may fail or an exception may be thrown.

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |
| conflict | ConflictResolution | 否 | Resolution used to resolve the conflict. Default value:  relationalStore.ConflictResolution.ON_CONFLICT_NONE. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Number of rows updated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14800000 | Inner error. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800023 | SQLite: Access permission denied. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800026 | SQLite: The database is out of memory. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800031 | SQLite: TEXT or BLOB exceeds size limit. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

## updateWithReturning

```TypeScript
updateWithReturning(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>
```

Updates data in the RDB store based on the specified **RdbPredicates** instance object. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution), and [Result](arkts-relationalstore-result-i.md#Result) is returned. This API uses a promise to return the result. It is not recommended to use the **ON_CONFLICT_FAIL** policy for the **conflict** parameter, as this may prevent the return of correct results.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |
| config | ReturningConfig | 是 | Configuration information of the return value. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | Promise used to return the result. If the operation is successful, the affected  dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
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

Updates data in the RDB store based on the specified **RdbPredicates** instance object. You can use the **conflict** parameter to specify [ConflictResolution](arkts-relationalstore-conflictresolution-e.md#ConflictResolution), and [Result](arkts-relationalstore-result-i.md#Result) is returned. It is not recommended to use the **ON_CONFLICT_FAIL** policy for the **conflict** parameter, as this may prevent the return of correct results.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |
| config | ReturningConfig | 是 | Configuration information of the return value. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | If the operation is successful, the affected dataset is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14800014 | The target instance is already closed. |
| 14800021 | SQLite: Generic error.  Possible causes: Insert failed or the updated data does not exist. |
| 14800024 | SQLite: The database file is locked. |
| 14800025 | SQLite: A table in the database is locked. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800032 | SQLite: Abort due to constraint violation. |
| 14800033 | SQLite: Data type mismatch. |
| 14800047 | The WAL file size exceeds the default limit. |

