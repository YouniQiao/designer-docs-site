# DataShareExtensionAbility

This module provides data sharing and expansion capabilities.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { DataShareExtensionAbility } from '@kit.ArkData';
```

## batchInsert

```TypeScript
batchInsert?(uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<number>): void
```

Batch inserts data into the database. This API is called by the server and can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the data to insert. |
| valueBuckets | Array&lt;ValuesBucket> | 是 | Data to insert. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the number of inserted data records. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, ValuesBucket } from '@kit.ArkData';

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  batchInsert(uri: string, valueBuckets: Array<ValuesBucket>, callback: Function) {
    if (valueBuckets === null || valueBuckets.length <= 0) {
      console.info('invalid valueBucket');
      return;
    }
    rdbStore.batchInsert(TBL_NAME, valueBuckets, (err, ret) => {
      if (callback !== undefined) {
        callback(err, ret);
      }
    });
  };
};

```

## batchUpdate

```TypeScript
batchUpdate?(
    operations: Record<string, Array<UpdateOperation>>,
    callback: AsyncCallback<Record<string, Array<number>>>
  ): void
```

Batch updates data into the database. This API is called by the server and can be overridden as required.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| operations | Record&lt;string, Array&lt;UpdateOperation>> | 是 | Collection of the path of the data to update, update  conditions, and new data. |
| callback | AsyncCallback&lt;Record&lt;string, Array&lt;number>>> | 是 | Callback used to return an array of updated data  records. The value -1 means the update operation fails. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, dataShare } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit'

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  batchUpdate(operations: Record<string, Array<dataShare.UpdateOperation>>, callback: Function) {
    let recordOps : Record<string, Array<dataShare.UpdateOperation>> = operations;
    let results : Record<string, Array<number>> = {};
    let a = Object.entries(recordOps);
    for (let i = 0; i < a.length; i++) {
      let key = a[i][0];
      let values = a[i][1];
      let result : number[] = [];
      for (const value of values) {
        rdbStore.update(TBL_NAME, value.values, value.predicates).then(async (rows) => {
          console.info('Update row count is ' + rows);
          result.push(rows);
        }).catch((err:BusinessError) => {
          console.error(`Failed to Update. Code: ${err.code}, message: ${err.message}`);
          result.push(-1)
        })
      }
      results[key] = result;
    }
    callback(null, results);
  }
};

```

## delete

```TypeScript
delete?(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void
```

Deletes data from the database. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the data to delete. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Filter criteria for deleting data. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the number of deleted data records. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, dataSharePredicates } from '@kit.ArkData';

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  delete(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: Function) {
    if (predicates === null || predicates === undefined) {
      return;
    }
    rdbStore.delete(TBL_NAME, predicates, (err, ret) => {
      if (callback !== undefined) {
        callback(err, ret);
      }
    });
  }
};

```

## denormalizeUri

```TypeScript
denormalizeUri?(uri: string, callback: AsyncCallback<string>): void
```

Denormalizes a URI. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | [URI](../../apis-arkts/arkts-apis/arkts-uri-uri-c.md#URI) to denormalize. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful, the  denormalized URI is returned. If the URI passed in is returned, denormalization is not required. If  denormalization is not supported, null is returned. |

**示例：**

```TypeScript
import { DataShareExtensionAbility } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit'

export default class DataShareExtAbility extends DataShareExtensionAbility {
  denormalizeUri(uri: string, callback: Function) {
    let key = 'code';
    let value = 0;
    let err: BusinessError = {
      code: value,
      name: key,
      message: key
    };
    let ret = `denormalize ${uri}`;
    callback(err, ret);
  }
};

```

## insert

```TypeScript
insert?(uri: string, valueBucket: ValuesBucket, callback: AsyncCallback<number>): void
```

Inserts data into the database. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the data to insert. |
| valueBucket | ValuesBucket | 是 | Data to insert. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the index of the inserted data record. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, ValuesBucket } from '@kit.ArkData';

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  insert(uri: string, valueBucket: ValuesBucket, callback: Function) {
    if (valueBucket === null) {
      console.info('invalid valueBucket');
      return;
    }
    rdbStore.insert(TBL_NAME, valueBucket, (err, ret) => {
      console.info(`callback ret: ${ret}`);
      if (callback !== undefined) {
        callback(err, ret);
      }
    });
  }
};

```

## normalizeUri

```TypeScript
normalizeUri?(uri: string, callback: AsyncCallback<string>): void
```

Normalizes a URI. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | [URI](../../apis-arkts/arkts-apis/arkts-uri-uri-c.md#URI) to normalize. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful, the  normalized URI is returned. Otherwise, null is returned. |

**示例：**

```TypeScript
import { DataShareExtensionAbility } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit'

export default class DataShareExtAbility extends DataShareExtensionAbility {
  normalizeUri(uri: string, callback: Function) {
    let key = 'code';
    let value = 0;
    let err: BusinessError = {
      code: value,
      name: key,
      message: key
    };
    let ret: string = `normalize: ${uri}`;
    callback(err, ret);
  }
};

```

## onCreate

```TypeScript
onCreate?(want: Want, callback: AsyncCallback<void>): void
```

Called by the server to initialize service logic when the DataShare client connects to the DataShareExtensionAbility server. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information, including the ability name and bundle name. |
| callback | AsyncCallback&lt;void> | 是 | Callback that returns no value. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore } from '@kit.ArkData';
import { Want } from '@kit.AbilityKit';

let DB_NAME = 'DB00.db';
let TBL_NAME = 'TBL00';
let DDL_TBL_CREATE = 'CREATE TABLE IF NOT EXISTS '
  + TBL_NAME
  + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER, phoneNumber DOUBLE, isStudent BOOLEAN, Binary BINARY)';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  onCreate(want: Want, callback: Function) {
    relationalStore.getRdbStore(this.context, {
      name: DB_NAME,
      securityLevel: relationalStore.SecurityLevel.S3
    }, (err, data) => {
      console.info(`getRdbStore done, data : ${data}`);
      rdbStore = data;
      rdbStore.executeSql(DDL_TBL_CREATE, [], (err) => {
        console.error(`Failed to executeSql. Code: ${err.code}, message: ${err.message}`);
      });
      if (callback) {
        callback();
      }
    });
  }
};

```

## query

```TypeScript
query?(
    uri: string,
    predicates: dataSharePredicates.DataSharePredicates,
    columns: Array<string>,
    callback: AsyncCallback<Object>
  ): void
```

Queries data from the database. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the data to query. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Filter criteria for querying data. |
| columns | Array&lt;string> | 是 | Columns to query. If this parameter is empty, all columns will be queried. |
| callback | AsyncCallback&lt;Object> | 是 | Callback used to return the result set obtained. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, dataSharePredicates } from '@kit.ArkData';

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  query(uri: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: Function) {
    if (predicates === null || predicates === undefined) {
      return;
    }
    rdbStore.query(TBL_NAME, predicates, columns, (err, resultSet) => {
      if (resultSet !== undefined) {
        console.info(`resultSet.rowCount: ${resultSet.rowCount}`);
      }
      if (callback !== undefined) {
        callback(err, resultSet);
      }
    });
  }
};

```

## update

```TypeScript
update?(
    uri: string,
    predicates: dataSharePredicates.DataSharePredicates,
    valueBucket: ValuesBucket,
    callback: AsyncCallback<number>
  ): void
```

Updates data in the database. This API can be overridden as required.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | URI of the data to update. |
| predicates | dataSharePredicates.DataSharePredicates | 是 | Filter criteria for updating data. |
| valueBucket | ValuesBucket | 是 | New data. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the number of data records updated. |

**示例：**

```TypeScript
import { DataShareExtensionAbility, relationalStore, dataSharePredicates, ValuesBucket } from '@kit.ArkData';

let TBL_NAME = 'TBL00';
let rdbStore: relationalStore.RdbStore;

export default class DataShareExtAbility extends DataShareExtensionAbility {
  update(uri: string, predicates: dataSharePredicates.DataSharePredicates, valueBucket: ValuesBucket, callback: Function) {
    if (predicates === null || predicates === undefined) {
      return;
    }
    rdbStore.update(TBL_NAME, valueBucket, predicates, (err, ret) => {
      if (callback !== undefined) {
        callback(err, ret);
      }
    });
  }
};

```

## denormalizeUri

```TypeScript
denormalizeUri?: DenormalizeUriFn
```

Converts the given normalized {@code uri} generated by {@link #normalizeUri(uri)} into a denormalized one. The default implementation of this method returns the original uri passed to it.

**类型：** DenormalizeUriFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## onCreate

```TypeScript
onCreate?: OnCreateFn
```

Called back when a datashare extension ability is started for initialization.

**类型：** OnCreateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## normalizeUri

```TypeScript
normalizeUri?: NormalizeUriFn
```

Converts the given {@code uri} that refer to the data share into a normalized URI. A normalized URI can be used across devices, persisted, backed up, and restored. It can refer to the same item in the data share even if the context has changed.

**类型：** NormalizeUriFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## batchInsert

```TypeScript
batchInsert?: BatchInsertFn
```

Inserts multiple data records into the database. This method should be implemented by a data share.

**类型：** BatchInsertFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## query

```TypeScript
query?: QueryFn
```

Queries one or more data records in the database. This method should be implemented by a data share. Only RDB and distributed KVDB resultsets are supported. The current version does not support custom resultsets.

**类型：** QueryFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## batchUpdate

```TypeScript
batchUpdate?: BatchUpdateFn
```

Updates multiple data records in the database. This method should be implemented by a data share.

**类型：** BatchUpdateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## context

```TypeScript
context: ExtensionContext
```

Context of the DataShare ExtensionAbility.

**类型：** ExtensionContext

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## update

```TypeScript
update?: UpdateFn
```

Updates one or more data records in the database. This method should be implemented by a data share.

**类型：** UpdateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## insert

```TypeScript
insert?: InsertFn
```

Inserts a data record into the database. This method should be implemented by a data share.

**类型：** InsertFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

## delete

```TypeScript
delete?: DeleteFn
```

Deletes one or more data records. This method should be implemented by a data share.

**类型：** DeleteFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Provider

**系统接口：** 此接口为系统接口。

