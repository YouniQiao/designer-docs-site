# RdbStore

Provides APIs for managing data in an RDB store. Before using the following APIs, you should obtain an **RdbStore** instance by calling the [getRdbStore](arkts-relationalstore-getrdbstore-f.md#getRdbStore-2) method and then call the corresponding method through the instance. In addition, use [execute](arkts-relationalstore-rdbstore-i.md#execute) to initialize the database table structure and related data first, ensuring that the prerequisites for related API calls are met.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## attach

```TypeScript
attach(fullPath: string, attachName: string, waitTime?: int) : Promise<int>
```

Attaches a database file to the currently linked database.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fullPath | string | 是 | Indicates the path of the database file to attach. |
| attachName | string | 是 | Indicates the alias of the database. |
| waitTime | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of attached databases. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of an application or ability. |
| config | StoreConfig | 是 | Indicates the {@link StoreConfig} configuration of the database related to this RDB store. |
| attachName | string | 是 | Indicates the alias of the database. |
| waitTime | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of attached databases. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| destName | string | 是 | Indicates the name that saves the database backup. |
| callback | AsyncCallback&lt;void> | 是 | The callback of backup. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| destName | string | 是 | Indicates the name that saves the database backup. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket}  to be inserted into the table. |
| callback | AsyncCallback&lt;long> | 是 | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of values that were inserted if the operation is successful.  Returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of values that were inserted if the operation is successful.  Returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The number of values that were inserted if the operation is successful. returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the  table. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the inserted field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | Array&lt;ValuesBucket> | 是 | Indicates the rows of data {@link ValuesBucket} to be inserted into the  table. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | The {@link Result} result of the inserted field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Returns the transaction ID. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check.  The maximum length is 256 and cannot be empty,  Value constraint:Only letters, digits, and underscores (_) are allowed. |
| cursor | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | -The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check. |
| cursor | long | 是 | Indicates the position of the data to be cleaned up. |
| callback | AsyncCallback&lt;void> | 是 | Indicates the callback invoked to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check. |
| callback | AsyncCallback&lt;void> | 是 | The callback of clean. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check. |
| cursor | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | -The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: The RdbStore verification failed. |
| 14800000 | Inner error. |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>, callback: AsyncCallback<void>): void
```

Sync data to cloud.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | 是 | The callback of cloudSync. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.  Possible causes: 1. Need 2 - 4 parameter(s). 2. The RdbStore must be not nullptr.  3. The mode must be a SyncMode of cloud. 4. The progress must be a callback type.  5. The callback must be a function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>): Promise<void>
```

Sync data to cloud.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| tables | string[] | 是 | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | 是 | The callback of cloudSync. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:           1. Mandatory parameters are left unspecified.          2. Incorrect parameter types.          3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## cloudSync

```TypeScript
cloudSync(mode: SyncMode, tables: string[], progress: Callback<ProgressDetails>): Promise<void>
```

Sync data to cloud.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| tables | string[] | 是 | indicates the database synchronization mode. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| predicates | RdbPredicates | 是 | The specified sync condition by the instance object of {@link RdbPredicates}. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |
| callback | AsyncCallback&lt;void> | 是 | The callback of cloudSync. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | indicates the database synchronization mode. |
| predicates | RdbPredicates | 是 | The specified sync condition by the instance object of {@link RdbPredicates}. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | CloudSyncConfig | 是 | indicates the cloud synchronization config. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the sync progress. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## commit

```TypeScript
commit(): void
```

Commit the the sql you have executed.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| txId | long | 是 | Indicates the transaction ID which is obtained by beginTrans. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 14

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | TransactionOptions | 否 | The option for creating transactions. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Transaction> | The {@link Transaction} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified delete condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;long> | 是 | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified delete condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | return the number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | The specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;long> | 是 | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | The specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified delete condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | return the number of rows deleted. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified delete condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the deleted field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified delete condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | The {@link Result} result of the deleted field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attachName | string | 是 | Indicates the alias of the database. |
| waitTime | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Return the current number of attached databases. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Indicates the subscription event. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| args | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| txId | long | 是 | Indicates the transaction ID which is obtained by beginTrans or 0. |
| args | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ValueType> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| callback | AsyncCallback&lt;void> | 是 | The callback of executeSql. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | 是 | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |
| callback | AsyncCallback&lt;void> | 是 | The callback of executeSql. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| args | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement.  The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ValueType | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check. |
| columnName | string | 是 | Indicates the name of the column to check. |
| primaryKeys | PRIKeyType[] | 是 | Indicates the primary keys of the rows to check. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ModifyTime> | -  The promise returned by the function. ModifyTime indicates the modify time of current row.  If this table does not support cloud, the {@link ModifyTime} will be empty. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the name of the table to check. |
| columnName | string | 是 | Indicates the name of the column to check. |
| primaryKeys | PRIKeyType[] | 是 | Indicates the primary keys of the rows to check. |
| callback | AsyncCallback&lt;ModifyTime> | 是 | The callback of getModifyTime. ModifyTime indicates the modify time of current row.  If this table does not support cloud, the {@link ModifyTime} will be empty. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| callback | AsyncCallback&lt;long> | 是 | The row ID if the operation is successful. returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |
| callback | AsyncCallback&lt;long> | 是 | The row ID if the operation is successful. returns -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The row ID if the operation is successful. return -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The row ID if the operation is successful. return -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data {@link ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 否 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The row ID if the operation is successful. return -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | sendableRelationalStore.ValuesBucket | 是 | Indicates the row of data  {@link sendableRelationalStore.ValuesBucket} to be inserted into the table. |
| conflict | ConflictResolution | 否 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | The row ID if the operation is successful. return -1 otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The expired time of the lock, in ms. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |

## lockRow

```TypeScript
lockRow(predicates: RdbPredicates): Promise<void>
```

Locks data from the database based on a specified instance object of RdbPredicates.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified lock condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | Indicates the remote device. |
| table | string | 是 | {string}: the distributed table name. |
| callback | AsyncCallback&lt;string> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | Indicates the remote device. |
| table | string | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | {string}: the distributed table name. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | 是 | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> | 是 | {Array}: the data change observer already registered. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | indicates the event must be string 'dataChange'. |
| type | SubscribeType | 是 | indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | 否 | {Array}: the data change observer already registered.  {Array}: the change info already registered. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Indicates the subscription event. |
| interProcess | boolean | 是 | Indicates whether it is an interprocess subscription or an in-process subscription. |
| observer | Callback&lt;void> | 否 | The data change observer already registered. [since 10 - 11] |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'autoSyncProgress' | 是 | indicates the event must be string 'autoSyncProgress'. |
| progress | Callback&lt;ProgressDetails> | 否 | Callback used to return the {@link ProgressDetails} result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Need 1 - 3 parameter(s)! 2. The RdbStore must be valid.  3. The event must be a not empty string. 4. The progress must be function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## off

```TypeScript
off(event: 'statistics', observer?: Callback<SqlExecutionInfo> ): void
```

Unsubscribes from the SQL statistics.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'statistics' | 是 | Indicates the event type, which must be 'statistics'. |
| observer | Callback&lt;SqlExecutionInfo> | 否 | Indicates the callback to unregister. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'perfStat' | 是 | Event type, which must be 'perfStat'. |
| observer | Callback&lt;SqlExecutionInfo> | 否 | Callback to unregister. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## off

```TypeScript
off(event: 'sqliteErrorOccurred', observer?: Callback<ExceptionMessage>): void
```

Unsubscribes from the SQL execution error logs.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'sqliteErrorOccurred' | 是 | Indicates the event type, which must be 'sqliteErrorOccurred'. |
| observer | Callback&lt;ExceptionMessage> | 否 | Callback to unregister. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offAutoSyncProgress

```TypeScript
offAutoSyncProgress(progress?: Callback<ProgressDetails>): void
```

Unregister the database auto synchronization callback.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | Callback&lt;ProgressDetails> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offDataChange

```TypeScript
offDataChange(type: SubscribeType, observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void
```

Remove specified observer of specified type from the database.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SubscribeType | 是 | indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offPerfStat

```TypeScript
offPerfStat(observer?: Callback<SqlExecutionInfo>): void
```

Unsubscribes from the SQL performance statistics.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offSqliteErrorOccurred

```TypeScript
offSqliteErrorOccurred(observer?: Callback<ExceptionMessage>): void
```

Unsubscribes from the SQL execution error logs.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;ExceptionMessage> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## offStatistics

```TypeScript
offStatistics(observer?: Callback<SqlExecutionInfo> ): void
```

Unsubscribes from the SQL statistics.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void
```

Subscribes to data changes of this RDB store. The registered callback will be called when data in a distributed RDB store changes. the callback will be invoked.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | 是 | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> | 是 | {Array}: the observer of data change events in the distributed database. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void
```

Subscribes to data changes of this RDB store. The registered callback will be called when data in a distributed RDB store changes.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Indicates the event must be string 'dataChange'. |
| type | SubscribeType | 是 | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | 是 | {Array}: the observer of data change events in the distributed database.  {Array}: The change info of data change events in the distributed database. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Event type, which must match the event type in {@link emit}. |
| interProcess | boolean | 是 | Indicates whether it is an interprocess subscription or an in-process subscription. |
| observer | Callback&lt;void> | 是 | The observer of data change events in the database. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'autoSyncProgress' | 是 | Indicates the event must be string 'autoSyncProgress'. |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed;  4. The event must be a not empty string; 5. The progress must be function. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. [since 12] |

## on

```TypeScript
on(event: 'statistics', observer: Callback<SqlExecutionInfo> ): void
```

Subscribes to the SQL statistics.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'statistics' | 是 | Indicates the event type, which must be 'statistics'. |
| observer | Callback&lt;SqlExecutionInfo> | 是 | Indicates the callback used to return the SQL execution statistics {@link SqlExeInfo} in the database. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'perfStat' | 是 | Event type, which must be 'perfStat'. |
| observer | Callback&lt;SqlExecutionInfo> | 是 | Callback used to return the SQL execution statistics  {@link SqlExecutionInfo}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## on

```TypeScript
on(event: 'sqliteErrorOccurred', observer: Callback<ExceptionMessage>): void
```

Subscribes to the SQL execution error logs.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'sqliteErrorOccurred' | 是 | Event type, which must be 'sqliteErrorOccurred'. |
| observer | Callback&lt;ExceptionMessage> | 是 | Callback used to return the SQL execution errorlog  {@link ExceptionMessage }. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onAutoSyncProgress

```TypeScript
onAutoSyncProgress(progress: Callback<ProgressDetails>): void
```

Register an automatic synchronization callback to the database.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | Callback&lt;ProgressDetails> | 是 | Callback used to return the {@link ProgressDetails} result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | SubscribeType | 是 | Indicates the subscription type, which is defined in {@link SubscribeType}.  If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required. |
| observer | Callback&lt;Array&lt;string>> \| Callback&lt;Array&lt;ChangeInfo>> | 是 | {Array}: The observer of data change events in the distributed database.  {Array}: The change info of data change events in the distributed database. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onPerfStat

```TypeScript
onPerfStat(observer: Callback<SqlExecutionInfo>): void
```

Subscribes to the SQL performance statistics.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | 是 | Callback used to return the SQL execution statistics  {@link SqlExecutionInfo}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onSqliteErrorOccurred

```TypeScript
onSqliteErrorOccurred(observer: Callback<ExceptionMessage>): void
```

Subscribes to the SQL execution error logs.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;ExceptionMessage> | 是 | Callback used to return the SQL execution errorlog  {@link ExceptionMessage }. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 14800014 | The target instance is already closed. |

## onStatistics

```TypeScript
onStatistics(observer: Callback<SqlExecutionInfo> ): void
```

Subscribes to the SQL statistics.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| observer | Callback&lt;SqlExecutionInfo> | 是 | Indicates the callback used to return the SQL execution statistics {@link SqlExeInfo} in the database. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 是 | The columns to query. If the value is empty array, the query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 | The columns to query. If the value is null, the query applies to all columns. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| columns | Array&lt;string> | 是 | The columns to query. If the value is empty array, the query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | The specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| columns | Array&lt;string> | 否 | The columns to query. If the value is null, the query applies to all columns. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute.  Value range: (0, +∞)  A valid SQL statement must be used. Otherwise, an error code may be thrown when ResultSet is used. |
| bindArgs | Array&lt;ValueType> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryByStep

```TypeScript
queryByStep(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries data in the database step‑by‑step based on specified conditions.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object  of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryLockedRow

```TypeScript
queryLockedRow(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries locked data in the database based on specified conditions.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | -The promise returned by the function.  {@link ResultSet} is query result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The callback of querySharingResource.  {@link ResultSet} is query result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 是 | The specified columns to query. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The callback of querySharingResource.  {@link ResultSet} is query result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | 是 | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | Indicates the SQL statement to execute. |
| bindArgs | Array&lt;ValueType> | 否 | Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResultSet | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

Queries data in the database based on specified conditions with sync function.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 | The columns to query. If the value is empty array, the query applies to all columns. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResultSet | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;LiteResultSet> | The {@link LiteResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## queryWithoutRowCountSync

```TypeScript
queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet
```

Queries data without rowCount in the database based on specified conditions with sync function.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LiteResultSet | The {@link LiteResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800014 | The target instance is already closed. |

## rekey

```TypeScript
rekey(cryptoParam?: CryptoParam): Promise<void>
```

Changes the key used to encrypt the database.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cryptoParam | CryptoParam | 否 | Specifies the crypto parameters used to rekey.  If valid cryptoParam passed, the cryptoParam is used to rekey.  If cryptoParam is null or not passed, the default cryptoParam is used. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 22

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cryptoParam | CryptoParam | 是 | Crypto parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | Indicates specified remote device. |
| table | string | 是 | Indicates the target table. |
| predicates | RdbPredicates | 是 | The specified remote remote query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 是 | The columns to remote query.  If the value is empty array, the remote query applies to all columns. |
| callback | AsyncCallback&lt;ResultSet> | 是 | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | Indicates specified remote device. |
| table | string | 是 | Indicates the target table. |
| predicates | RdbPredicates | 是 | The specified remote remote query condition by the instance object of {@link RdbPredicates}. |
| columns | Array&lt;string> | 是 | The columns to remote query.  If the value is empty array, the remote query applies to all columns. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | The {@link ResultSet} object if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcName | string | 是 | Indicates the name that saves the database file. |
| callback | AsyncCallback&lt;void> | 是 | The callback of restore. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcName | string | 是 | Indicates the name that saves the database file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| retainDevices | Record&lt;string, Array&lt;string>> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| txId | long | 是 | Indicates the transaction ID which is obtained by beginTrans. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Indicates the table names you want to set. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setDistributedTables. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Indicates the table names you want to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Indicates the table names you want to set. |
| type | DistributedType | 是 | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setDistributedTables. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Indicates the table names you want to set. |
| type | DistributedType | 是 | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| config | DistributedConfig | 是 | Indicates the distributed config of the tables. For details, see {@link DistributedConfig}. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setDistributedTables. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Indicates the table names you want to set. |
| type | DistributedType | 否 | Indicates the distributed type {@link DistributedType}.  ohos.permission.DISTRIBUTED_DATASYNC is required only when type is DISTRIBUTED_DEVICE. |
| config | DistributedConfig | 否 | Indicates the distributed config of the tables. For details, see {@link DistributedConfig}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | Language related to the locale.  for example, zh. The value complies with the ISO 639 standard. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.CloudSync.Client

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | : The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported  because the device does not support the cloud synchronization capability. |
| 14800014 | The target instance is already closed. |

## sync

```TypeScript
sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, int]>>): void
```

Sync data between devices.

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | Indicates the database synchronization mode. |
| predicates | RdbPredicates | 是 | The specified sync condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;Array&lt;[string, int]>> | 是 | {Array}: devices sync status array,  {string}: device id,  {int}: device sync status. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | Indicates the database synchronization mode. |
| predicates | RdbPredicates | 是 | The specified sync condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[string, int]>> | {Array}: devices sync status array, {string}: device id, {int}: device sync status. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | Indicates the database synchronization mode.  Only SYNC_MODE_PUSH and SYNC_MODE_PULL are supported. |
| predicates | RdbPredicates | 是 | The specified sync condition by the instance object  of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SyncResult>> | devices sync result array, see {@link SyncResult} for details. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range. |
| 14800014 | The target instance is already closed. |

## unlockCloudContainer

```TypeScript
unlockCloudContainer(): Promise<void>
```

Unlock cloud container.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |

## unlockRow

```TypeScript
unlockRow(predicates: RdbPredicates): Promise<void>
```

Unlocks data from the database based on a specified instance object of RdbPredicates.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | The specified Unlock condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| callback | AsyncCallback&lt;long> | 是 | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |
| callback | AsyncCallback&lt;long> | 是 | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | 是 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the specified update condition by  the instance object of {@link dataSharePredicates.DataSharePredicates}. |
| callback | AsyncCallback&lt;long> | 是 | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Indicates the target table. |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Indicates the specified update condition by  the instance object of {@link dataSharePredicates.DataSharePredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | DistributedInfo | 是 | Indicates the table log needs to be updated. |
| predicates | RdbPredicates | 是 | The specified query condition by the instance object of {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Returns the number of updated logs. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| conflict | ConflictResolution | 否 | Indicates the {@link ConflictResolution} to insert data into the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The number of affected rows. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Result> | The {@link Result} result of the updated field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Indicates the row of data to be updated in the database.  The key-value pairs are associated with column names of the database table. |
| predicates | RdbPredicates | 是 | Indicates the specified update condition by the instance object of {@link RdbPredicates}. |
| config | ReturningConfig | 是 | Indicate the information that needs to be returned. |
| conflict | ConflictResolution | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Result | The {@link Result} result of the updated field includes the number of modified  rows and the result set of changed data. |

**错误码：**

| 错误码ID | 错误信息 |
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

**类型：** RebuildType

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## version

```TypeScript
version: int
```

Set RdbStore version. The version number must be an integer greater than 0. Obtains the RdbStore version.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

