# RdbStore

Provides APIs for managing data in an RDB store. Before using the APIs of this class, use [executeSql]rdb.RdbStore.executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>) to initialize the database table structure and related data.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## batchInsert

```TypeScript
batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void
```

Inserts a batch of data into a table. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  the number of inserted data records is returned. Otherwise, -1 is returned. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);
let value5 = "Jack";
let value6 = 19;
let value7 = 101.5;
let value8 = new Uint8Array([6, 7, 8, 9, 10]);
let value9 = "Tom";
let value10 = 20;
let value11 = 102.5;
let value12 = new Uint8Array([11, 12, 13, 14, 15]);
const valueBucket1: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};
const valueBucket2: ValuesBucket = {
  key1: value5,
  key2: value6,
  key3: value7,
  key4: value8,
};
const valueBucket3: ValuesBucket = {
  key1: value9,
  key2: value10,
  key3: value11,
  key4: value12,
};

let valueBuckets = new Array(valueBucket1, valueBucket2, valueBucket3);
rdbStore.batchInsert("EMPLOYEE", valueBuckets, (status: number, insertNum: number) => {
  if (status) {
    console.error("batchInsert failed, status = " + status);
    return;
  }
  console.info("batchInsert is successful, the number of values that were inserted = " + insertNum);
})

```

## batchInsert

```TypeScript
batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>
```

Inserts a batch of data into a table. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | Array&lt;ValuesBucket> | 是 | An array of data to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the result. If the operation is successful, the number of  inserted data records is returned. Otherwise, -1 is returned. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);
let value5 = "Jack";
let value6 = 19;
let value7 = 101.5;
let value8 = new Uint8Array([6, 7, 8, 9, 10]);
let value9 = "Tom";
let value10 = 20;
let value11 = 102.5;
let value12 = new Uint8Array([11, 12, 13, 14, 15]);
const valueBucket1: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};
const valueBucket2: ValuesBucket = {
  key1: value5,
  key2: value6,
  key3: value7,
  key4: value8,
};
const valueBucket3: ValuesBucket = {
  key1: value9,
  key2: value10,
  key3: value11,
  key4: value12,
};

let valueBuckets = new Array(valueBucket1, valueBucket2, valueBucket3);
let promise: void = rdbStore.batchInsert("EMPLOYEE", valueBuckets);
promise.then((insertNum: number) => {
  console.info("batchInsert is successful, the number of values that were inserted = " + insertNum);
}).catch((status: number) => {
  console.error("batchInsert failed, status = " + status);
})

```

## beginTransaction

```TypeScript
beginTransaction(): void
```

Starts the transaction before executing an SQL statement.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.beginTransaction

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**示例：**

```TypeScript
import featureAbility from '@ohos.ability.featureAbility';
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "blobType";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3]);

const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};

data_rdb.getRdbStore(this.context, "RdbTest.db", 1, async (err: BusinessError, rdbStore) => {
  rdbStore.beginTransaction()
  await rdbStore.insert("test", valueBucket)
  rdbStore.commit()
})

```

## commit

```TypeScript
commit(): void
```

Commits the executed SQL statements.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.commit

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';
import featureAbility from '@ohos.ability.featureAbility';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "blobType";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3]);

const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};

data_rdb.getRdbStore(this.context, "RdbTest.db", 1, async (err: BusinessError, rdbStore) => {
  rdbStore.beginTransaction()
  await rdbStore.insert("test", valueBucket)
  rdbStore.commit()
})

```

## delete

```TypeScript
delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void
```

Deletes data from the RDB store based on the specified **RdbPredicates** object. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.delete

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the number of rows deleted. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
rdbStore.delete(predicates, (err: BusinessError, rows: number) => {
  if (err) {
    console.error("Delete failed, err: " + err)
    return
  }
  console.info("Delete rows: " + rows)
})

```

## delete

```TypeScript
delete(predicates: RdbPredicates): Promise<number>
```

Deletes data from the RDB store based on the specified **RdbPredicates** object. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.delete

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Deletion conditions specified by the RdbPredicates object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of rows deleted. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
let promise: void = rdbStore.delete(predicates)
promise.then((rows: number) => {
  console.info("Delete rows: " + rows)
}).catch((err: BusinessError) => {
  console.error("Delete failed, err: " + err)
})

```

## executeSql

```TypeScript
executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void
```

Executes an SQL statement that contains specified arguments but returns no value. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.executeSql

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 是 | Arguments in the SQL statement. The value corresponds to the placeholders  in the SQL parameter statement. If the SQL parameter statement is complete, the value of this parameter must  be an empty array. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
const SQL_DELETE_TABLE = "DELETE FROM test WHERE name = ?"
rdbStore.executeSql(SQL_DELETE_TABLE, ['zhangsan'], (err: BusinessError) => {
  if (err) {
    console.error("ExecuteSql failed, err: " + err)
    return
  }
  console.info('Delete table done.')
})

```

## executeSql

```TypeScript
executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>
```

Executes an SQL statement that contains specified arguments but returns no value. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.executeSql

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 否 | Arguments in the SQL statement. The value corresponds to the placeholders  in the SQL parameter statement. If the SQL parameter statement is complete, leave this parameter blank. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
const SQL_DELETE_TABLE = "DELETE FROM test WHERE name = 'zhangsan'"
let promise = rdbStore.executeSql(SQL_DELETE_TABLE)
promise.then(() => {
  console.info('Delete table done.')
}).catch((err: BusinessError) => {
  console.error("ExecuteSql failed, err: " + err)
})

```

## insert

```TypeScript
insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void
```

Inserts a row of data into a table. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.insert

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | ValuesBucket | 是 | Row of data to insert. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  the row ID will be returned. Otherwise, -1 will be returned. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisi";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);
const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};

rdbStore.insert("EMPLOYEE", valueBucket, (status: number, rowId: number) => {
  if (status) {
    console.error("Insert failed");
    return;
  }
  console.info("Insert is successful, rowId = " + rowId);
})

```

## insert

```TypeScript
insert(table: string, values: ValuesBucket): Promise<number>
```

Inserts a row of data into a table. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.insert

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| table | string | 是 | Name of the target table. |
| values | ValuesBucket | 是 | Row of data to insert. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the result. If the operation is successful, the row ID will  be returned. Otherwise, -1 will be returned. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisi";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);
const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};

let promise: void = rdbStore.insert("EMPLOYEE", valueBucket)
promise.then((rowId: BusinessError) => {
  console.info("Insert is successful, rowId = " + rowId);
}).catch((status: number) => {
  console.error("Insert failed");
})

```

## obtainDistributedTableName

```TypeScript
obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void
```

Obtains the distributed table name of a remote device based on the local table name of the device. The distributed table name is required when the RDB store of a remote device is queried. This API uses an asynchronous callback to return the result. > **NOTE** > The value of **device** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync) > . <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.obtainDistributedTableName

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | ID of the remote device. |
| table | string | 是 | Local table name of the remote device. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation succeeds, the  distributed table name of the remote device is returned. |

**示例：**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let dmInstance: Array<string>;

deviceManager.createDeviceManager("com.example.appdatamgrverify", (err: BusinessError, manager: void) => {
  if (err) {
    console.error("create device manager failed, err=" + err);
    return;
  }
  dmInstance = manager;
  let devices: Array<string> = dmInstance.getTrustedDeviceListSync();
  let deviceId: Array<string> = devices[0].deviceId;
})

rdbStore.obtainDistributedTableName(deviceId, "EMPLOYEE", (err: BusinessError, tableName: String) {
  if (err) {
    console.error('ObtainDistributedTableName failed, err: ' + err)
    return
  }
  console.info('ObtainDistributedTableName successfully, tableName=.' + tableName)
})

```

## obtainDistributedTableName

```TypeScript
obtainDistributedTableName(device: string, table: string): Promise<string>
```

Obtains the distributed table name of a remote device based on the local table name of the device. The distributed table name is required when the RDB store of a remote device is queried. This API uses a promise to return the result. > **NOTE** > The value of **device** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync) > . <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.obtainDistributedTableName

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| device | string | 是 | ID of the remote device. |
| table | string | 是 | Local table name of the remote device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the result. If the operation succeeds, the distributed table  name of the remote device is returned. |

**示例：**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let dmInstance: Array<string>;

deviceManager.createDeviceManager("com.example.appdatamgrverify", (err: BusinessError, manager: void) => {
  if (err) {
    console.error("create device manager failed, err=" + err);
    return;
  }
  dmInstance = manager;
  let devices: Array<string> = dmInstance.getTrustedDeviceListSync();
  let deviceId: Array<string> = devices[0].deviceId;
})

let promise: void = rdbStore.obtainDistributedTableName(deviceId, "EMPLOYEE")
promise.then((tableName: String) => {
  console.info('ObtainDistributedTableName successfully, tableName= ' + tableName)
}).catch((err: BusinessError) => {
  console.error('ObtainDistributedTableName failed, err: ' + err)
})

```

## off(SubscribeType)

```TypeScript
off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void
```

Unregisters the observer of the specified type from the RDB store. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.off

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Event to observe. The value is dataChange, which indicates a data change  event. |
| type | SubscribeType | 是 | Subscription type to register. |
| observer | Callback&lt;Array&lt;string>> | 是 | Data change observer registered. Array indicates the ID  of the peer device whose data in the database is changed. |

**示例：**

```TypeScript
let devices: Array<string>;

try {
  rdbStore.off('dataChange', data_rdb.SubscribeType.SUBSCRIBE_TYPE_REMOTE, (storeObserver: Array<string>) => {
    for (let i = 0; i < devices.length; i++) {
      console.info('device=' + devices[i] + ' data changed')
    }
  })
} catch (err) {
  console.error('Unregister observer failed')
}

```

## on(SubscribeType)

```TypeScript
on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void
```

Registers an observer for this RDB store. When the data in the RDB store changes, a callback is invoked to return the data changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.on

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | 'dataChange' | 是 | Event to observe. The value is dataChange, which indicates a data change  event. |
| type | SubscribeType | 是 | Subscription type to register. |
| observer | Callback&lt;Array&lt;string>> | 是 | Observer that listens for the data changes in the RDB store.  Array indicates the ID of the peer device whose data in the database is changed. |

**示例：**

```TypeScript
let devices: Array<string>;

try {
  rdbStore.on('dataChange', data_rdb.SubscribeType.SUBSCRIBE_TYPE_REMOTE, (storeObserver: Array<string>) => {
    for (let i = 0; i < devices.length; i++) {
      console.info('device=' + devices[i] + ' data changed')
    }
  })
} catch (err) {
  console.error('Register observer failed')
}

```

## query

```TypeScript
query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void
```

Queries data from the RDB store based on specified conditions. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.query

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 是 | Columns to query. If this parameter is not specified, the query applies to all  columns. |
| callback | AsyncCallback&lt;ResultSet> | 是 | Callback used to return the result. If the operation is successful  , a ResultSet object will be returned. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Rose")
rdbStore.query(predicates, ["ID", "NAME", "AGE", "SALARY", "CODES"], (err: BusinessError, resultSet: void) => {
  if (err) {
    console.error("Query failed, err: " + err)
    return
  }
  console.info("ResultSet column names: " + resultSet.columnNames)
  console.info("ResultSet column count: " + resultSet.columnCount)
})

```

## query

```TypeScript
query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>
```

Queries data from the RDB store based on specified conditions. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.query

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicates | RdbPredicates | 是 | Query conditions specified by the RdbPredicates object. |
| columns | Array&lt;string> | 否 | Columns to query. If this parameter is not specified, the query applies to all  columns. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | Promise used to return the result. If the operation is successful, a  ResultSet object will be returned. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Rose")
let promise: void = rdbStore.query(predicates, ["ID", "NAME", "AGE", "SALARY", "CODES"])
promise.then((resultSet: void) => {
  console.info("ResultSet column names: " + resultSet.columnNames)
  console.info("ResultSet column count: " + resultSet.columnCount)
}).catch((err: BusinessError) => {
  console.error("Query failed, err: " + err)
})

```

## querySql

```TypeScript
querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void
```

Queries data using the specified SQL statement. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.querySql

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 是 | Arguments in the SQL statement. The value corresponds to the placeholders  in the SQL parameter statement. If the SQL parameter statement is complete, the value of this parameter must  be an empty array. |
| callback | AsyncCallback&lt;ResultSet> | 是 | Callback used to return the result. If the operation is successful  , a ResultSet object will be returned. |

**示例：**

```TypeScript
rdbStore.querySql("SELECT * FROM EMPLOYEE CROSS JOIN BOOK WHERE BOOK.NAME = ?", ['sanguo'], (err: BusinessError, resultSet: void) => {
  if (err) {
    console.error("Query failed, err: " + err)
    return
  }
  console.info("ResultSet column names: " + resultSet.columnNames)
  console.info("ResultSet column count: " + resultSet.columnCount)
})

```

## querySql

```TypeScript
querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>
```

Queries data using the specified SQL statement. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.querySql

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sql | string | 是 | SQL statement to run. |
| bindArgs | Array&lt;ValueType> | 否 | Arguments in the SQL statement. The value corresponds to the placeholders  in the SQL parameter statement. If the SQL parameter statement is complete, leave this parameter blank. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultSet> | Promise used to return the result. If the operation is successful, a  ResultSet object will be returned. |

**示例：**

```TypeScript
let promise: void = rdbStore.querySql("SELECT * FROM EMPLOYEE CROSS JOIN BOOK WHERE BOOK.NAME = 'sanguo'")
promise.then((resultSet: void) => {
  console.info("ResultSet column names: " + resultSet.columnNames)
  console.info("ResultSet column count: " + resultSet.columnCount)
}).catch((err: BusinessError) => {
  console.error("Query failed, err: " + err)
})

```

## rollBack

```TypeScript
rollBack(): void
```

Rolls back the SQL statements that have been executed.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.rollBack

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';
import featureAbility from '@ohos.ability.featureAbility';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "blobType";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3]);

const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};

const STORE_CONFIG = { name: "RdbTest.db"}
data_rdb.getRdbStore(this,context, "RdbTest.db", 1, async (err: BusinessError, rdbStore) => {
  try {
    rdbStore.beginTransaction()
    await rdbStore.insert("test", valueBucket)
    rdbStore.commit()
  } catch (e) {
    rdbStore.rollBack()
  }
})

```

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void
```

Sets distributed tables. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.setDistributedTables

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Names of the distributed tables to set. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
rdbStore.setDistributedTables(["EMPLOYEE"], (err: BusinessError) => {
  if (err) {
    console.error('SetDistributedTables failed, err: ' + err)
    return
  }
  console.info('SetDistributedTables successfully.')
})

```

## setDistributedTables

```TypeScript
setDistributedTables(tables: Array<string>): Promise<void>
```

Sets distributed tables. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.setDistributedTables

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tables | Array&lt;string> | 是 | Names of the distributed tables to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
let promise: void = rdbStore.setDistributedTables(["EMPLOYEE"])
promise.then(() => {
  console.info("SetDistributedTables successfully.")
}).catch((err: BusinessError) => {
  console.error("SetDistributedTables failed, err: " + err)
})

```

## sync

```TypeScript
sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, number]>>): void
```

Synchronizes data across devices. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.sync

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | Data sync mode. The value can be push or pull. |
| predicates | RdbPredicates | 是 | RdbPredicates object that specifies the data and devices to  synchronize. |
| callback | AsyncCallback&lt;Array&lt;[string, number]>> | 是 | Callback invoked to send the sync result to the  caller. string indicates the device ID. number indicates the sync status of that device. The  value 0 indicates a successful sync. Other values indicate a sync failure. |

**示例：**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let dmInstance: Array<string>;

deviceManager.createDeviceManager("com.example.appdatamgrverify", (err: BusinessError, manager: void) => {
  if (err) {
    console.error("create device manager failed, err=" + err);
    return;
  }
  dmInstance = manager;
  let devices: Array<string> = dmInstance.getTrustedDeviceListSync();
  for (let i = 0; i < devices.length; i++) {
    let deviceIds: Array<string> = devices[i].deviceId;
  }
})

let predicates = new data_rdb.RdbPredicates('EMPLOYEE')
predicates.inDevices(deviceIds)
rdbStore.sync(data_rdb.SyncMode.SYNC_MODE_PUSH, predicates, (err: BusinessError, result: void) {
  if (err) {
    console.error('Sync failed, err: ' + err)
    return
  }
  console.info('Sync done.')
  for (let i = 0; i < result.length; i++) {
    console.info('device=' + result[i][0] + ' status=' + result[i][1])
  }
})

```

## sync

```TypeScript
sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, number]>>
```

Synchronizes data across devices. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.sync

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | SyncMode | 是 | Data sync mode. The value can be push or pull. |
| predicates | RdbPredicates | 是 | RdbPredicates object that specifies the data and devices to  synchronize. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;[string, number]>> | Promise used to send the sync result.  string indicates the device ID.  number indicates the sync status of that device. The value 0 indicates a successful sync. Other values  indicate a sync failure. |

**示例：**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let dmInstance: Array<string>;

deviceManager.createDeviceManager("com.example.appdatamgrverify", (err: BusinessError, manager: void) => {
  if (err) {
    console.error("create device manager failed, err=" + err);
    return;
  }
  dmInstance = manager;
  let devices: Array<string> = dmInstance.getTrustedDeviceListSync();
  for (let i = 0; i < devices.length; i++) {
    let deviceIds: Array<string> = devices[i].deviceId;
  }
})

let predicates = new data_rdb.RdbPredicates('EMPLOYEE')
predicates.inDevices(deviceIds)
let promise: void = rdbStore.sync(data_rdb.SyncMode.SYNC_MODE_PUSH, predicates)
promise.then((result: void) =>{
  console.info('Sync done.')
  for (let i = 0; i < result.length; i++) {
    console.info('device=' + result[i][0] + ' status=' + result[i][1])
  }
}).catch((err: BusinessError) => {
  console.error('Sync failed')
})

```

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>): void
```

Updates data in the RDB store based on the specified **RdbPredicates** object. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.update

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |
| callback | AsyncCallback&lt;number> | 是 | Callback invoked to return the number of rows updated. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);

const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
rdbStore.update(valueBucket, predicates, (err: BusinessError, rows: number) => {
  if (err) {
    console.error("Update failed, err: " + err)
    return
  }
  console.info("Updated row count: " + rows)
})

```

## update

```TypeScript
update(values: ValuesBucket, predicates: RdbPredicates): Promise<number>
```

Updates data based on the specified **RdbPredicates** object. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbStore.update

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | ValuesBucket | 是 | Rows of data to update in the RDB store. The key-value pair is associated with  the column name in the target table. |
| predicates | RdbPredicates | 是 | Update conditions specified by the RdbPredicates object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of rows updated. |

**示例：**

```TypeScript
import { ValuesBucket } from '@ohos.data.ValuesBucket';

let key1 = "NAME";
let key2 = "AGE";
let key3 = "SALARY";
let key4 = "CODES";
let value1 = "Lisa";
let value2 = 18;
let value3 = 100.5;
let value4 = new Uint8Array([1, 2, 3, 4, 5]);

const valueBucket: ValuesBucket = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
};
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
let promise: void = rdbStore.update(valueBucket, predicates)
promise.then(async (rows: number) => {
  console.info("Updated row count: " + rows)
}).catch((err: BusinessError) => {
  console.error("Update failed, err: " + err)
})

```

