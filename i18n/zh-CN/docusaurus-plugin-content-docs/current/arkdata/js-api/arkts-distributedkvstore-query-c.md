# Query

Provides methods to create a **Query** object, which defines different data query criteria. A **Query** object supports a maximum of 256 predicates.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## 导入模块

```TypeScript
import { distributedKVStore } from '@kit.ArkData';
```

## and

```TypeScript
and(): Query
```

Creates a **Query** object with the AND condition.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value1');
      query.and();
      query.notEqualTo('field', 'value2');
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## beginGroup

```TypeScript
beginGroup(): Query
```

Creates a **Query** object for a query condition group with a left parenthesis.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.beginGroup();
      query.isNotNull('field');
      query.endGroup();
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Query** instance.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## deviceId

```TypeScript
deviceId(deviceId: string): Query
```

Creates a **Query** object with the device ID as the key prefix. > **NOTE** > > **deviceId** can be obtained by > [deviceManager.getAvailableDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager-devicemanager-i.md#getAvailableDeviceListSync) > . > > For details about how to obtain **deviceId**, see [sync()]distributedKVStore.SyncMode.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | ID of the device to be queried. This parameter cannot be left empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.deviceId('deviceId');
      console.info(`query is ${query.getSqlLike()}`);
    }
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## endGroup

```TypeScript
endGroup(): Query
```

Creates a **Query** object for a query condition group with a right parenthesis.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.beginGroup();
      query.isNotNull('field');
      query.endGroup();
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## equalTo

```TypeScript
equalTo(field: string, value: long | double | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is equal to the given value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | long \| double \| string \| boolean | 是 | Value specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## getSqlLike

```TypeScript
getSqlLike(): string
```

Obtains the query statement of the **Query** object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the query statement obtained. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      let sql1 = query.getSqlLike();
      console.info(`GetSqlLike sql= ${sql1}`);
    }
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## greaterThan

```TypeScript
greaterThan(field: string, value: long | double | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is greater than the specified value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Indicates the field, which cannot contain ^. |
| value | long \| double \| string \| boolean | 是 | Indicates the value to be compared. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: long | double | string): Query
```

Creates a **Query** object to match the specified field whose value is greater than or equal to the specified value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | long \| double \| string | 是 | Value specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## inNumber

```TypeScript
inNumber(field: string, valueList: long[] | double[]): Query
```

Creates a **Query** object to match the specified field whose value is within the specified list of numbers. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| valueList | long[] \| double[] | 是 | List of numbers. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## inString

```TypeScript
inString(field: string, valueList: string[]): Query
```

Creates a **Query** object to match the specified field whose value is within the specified list of strings. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| valueList | string[] | 是 | List of strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.inString('field', ['test1', 'test2']);
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## isNotNull

```TypeScript
isNotNull(field: string): Query
```

Creates a **Query** object to match the specified field whose value is not **null**. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.isNotNull('field');
    console.info(`query is ${query.getSqlLike()}`);
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## isNull

```TypeScript
isNull(field: string): Query
```

Creates a **Query** object to match the specified field whose value is **null**. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.isNull('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## lessThan

```TypeScript
lessThan(field: string, value: long | double | string): Query
```

Creates a **Query** object to match the specified field whose value is less than the specified value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | long \| double \| string | 是 | Value specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: long | double | string): Query
```

Creates a **Query** object to match the specified field whose value is less than or equal to the specified value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | long \| double \| string | 是 | Value specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## like

```TypeScript
like(field: string, value: string): Query
```

Creates a **Query** object to match the specified field whose value is similar to the specified string. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | string | 是 | String specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.like('field', 'value');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## limit

```TypeScript
limit(total: int, offset: int): Query
```

Creates a **Query** object to specify the number of records of the query result and where to start. This API must be called after the invocation of the **orderByAsc()**, **orderByDesc()**, and the query APIs of the **Query** object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| total | int | 是 | Maximum number of results to query. The value must be a non-negative integer. If the value is  a negative number, the entire result set is queried. |
| offset | int | 是 | Start position of the query result. The value must be a non-negative integer. If the value is  a negative number, the entire result set is queried. If offset exceeds the end of the result set, the query  result is empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let total = 10;
let offset = 1;
try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.notEqualTo('field', 'value');
    query.limit(total, offset);
    console.info(`query is ${query.getSqlLike()}`);
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: long | double | string | boolean): Query
```

Creates a **Query** object to match the specified field whose value is not equal to the specified value. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | long \| double \| string \| boolean | 是 | Value specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## notInNumber

```TypeScript
notInNumber(field: string, valueList: long[] | double[]): Query
```

Creates a **Query** object to match the specified field whose value is not within the specified list of numbers. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| valueList | long[] \| double[] | 是 | List of numbers. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

## notInString

```TypeScript
notInString(field: string, valueList: string[]): Query
```

Creates a **Query** object to match the specified field whose value is not within the specified list of strings. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| valueList | string[] | 是 | List of strings. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notInString('field', ['test1', 'test2']);
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## or

```TypeScript
or(): Query
```

Creates a **Query** object with the OR condition.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value1');
      query.or();
      query.notEqualTo('field', 'value2');
      console.info('query is ' + query.getSqlLike());
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## orderByAsc

```TypeScript
orderByAsc(field: string): Query
```

Creates a **Query** object to sort the query results in ascending order. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value');
      query.orderByAsc('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## orderByDesc

```TypeScript
orderByDesc(field: string): Query
```

Creates a **Query** object to sort the query results in descending order. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.notEqualTo('field', 'value');
      query.orderByDesc('field');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## prefixKey

```TypeScript
prefixKey(prefix: string): Query
```

Creates a **Query** object with a specified key prefix.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| prefix | string | 是 | Key prefix, which cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.prefixKey('$.name');
      query.prefixKey('0');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## reset

```TypeScript
reset(): Query
```

Resets the **Query** object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object reset. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let query: distributedKVStore.Query | null = new distributedKVStore.Query();
  if (query != null) {
    query.equalTo('key', 'value');
    console.info('query is ' + query.getSqlLike());
    query.reset();
    console.info('query is ' + query.getSqlLike());
  }
  query = null;
} catch (err) {
  let error = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## setSuggestIndex

```TypeScript
setSuggestIndex(index: string): Query
```

Creates a **Query** object with an index preferentially used for query.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | string | 是 | Index to set, which cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.setSuggestIndex('$.name');
      query.setSuggestIndex('0');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

## unlike

```TypeScript
unlike(field: string, value: string): Query
```

Creates a **Query** object to match the specified field whose value is not similar to the specified string. > **NOTE** > > This API should be used together with [Schema]distributedKVStore.Schema. > > For details about how to use **Schema** to create a database, see the example of creating and obtaining a KV > store using the **getKVStore()** method in > [Persisting KV Store Data](docroot://database/data-persistence-by-kv-store.md#how-to-develop).

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to match. It cannot contain '^'. If the value contains '^', the predicate becomes  invalid and all data in the KV store will be returned. |
| value | string | 是 | String specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameters types;  3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let query: distributedKVStore.Query | null = new distributedKVStore.Query();
    if (query != null) {
      query.unlike('field', 'value');
      console.info(`query is ${query.getSqlLike()}`);
    }
    query = null;
} catch (err) {
    let error = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${error.code}, message: ${error.message}`);
}

```

