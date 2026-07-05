# Query

Provides APIs to create a **Query** object, which defines different data query criteria.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## and

```TypeScript
and(): Query
```

Creates a **Query** object with the AND condition.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#and

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value1");
    query.and();
    query.notEqualTo("field", "value2");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## beginGroup

```TypeScript
beginGroup(): Query
```

Creates a **Query** object for a query condition group with a left parenthesis.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#beginGroup

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.beginGroup();
    query.isNotNull("field");
    query.endGroup();
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Query** instance.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#constructor

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

## deviceId

```TypeScript
deviceId(deviceId: string): Query
```

Creates a **Query** object with the device ID as the key prefix. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#deviceId

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Device ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.deviceId("deviceId");
    console.log("query is " + query.getSqlLike());
} catch (e) {
    console.log("should be ok on Method Chaining : " + e);
}

```

## endGroup

```TypeScript
endGroup(): Query
```

Creates a **Query** object for a query condition group with a right parenthesis.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#endGroup

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.beginGroup();
    query.isNotNull("field");
    query.endGroup();
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## equalTo

```TypeScript
equalTo(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are equal to the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#equalTo

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.equalTo("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## getSqlLike

```TypeScript
getSqlLike(): string
```

Obtains the query statement of the **Query** object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#getSqlLike

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Query statement obtained. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    let sql1 = query.getSqlLike();
    console.log("GetSqlLike sql=" + sql1);
} catch (e) {
    console.log("duplicated calls should be ok : " + e);
}

```

## greaterThan

```TypeScript
greaterThan(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are greater than the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#greaterThan

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.greaterThan("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are greater than or equal to the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#greaterThanOrEqualTo

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.greaterThanOrEqualTo("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## inNumber

```TypeScript
inNumber(field: string, valueList: number[]): Query
```

Creates a **Query** object to search for the records with the specified field that are within the given number list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#inNumber

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| valueList | number[] | 是 | List of numbers to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.inNumber("field", [0, 1]);
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## inString

```TypeScript
inString(field: string, valueList: string[]): Query
```

Creates a **Query** object to search for the records with the specified field that are within the given string list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#inString

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| valueList | string[] | 是 | List of strings to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.inString("field", ['test1', 'test2']);
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## isNotNull

```TypeScript
isNotNull(field: string): Query
```

Creates a **Query** object to search for the records whose value is not **null**.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#isNotNull

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.isNotNull("field");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## isNull

```TypeScript
isNull(field: string): Query
```

Creates a **Query** object to search for the records with the specified field that are **null**.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#isNull

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.isNull("field");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## lessThan

```TypeScript
lessThan(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are less than the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#lessThan

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.lessThan("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are less than or equal to the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#lessThanOrEqualTo

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.lessThanOrEqualTo("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## like

```TypeScript
like(field: string, value: string): Query
```

Creates a **Query** object to search for the records with the specified field that are similar to the given string.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#like

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | string | 是 | String to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.like("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## limit

```TypeScript
limit(total: number, offset: number): Query
```

Creates a **Query** object to specify the number of records in the query result and the start position.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#limit

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| total | number | 是 | Number of records in the query result. |
| offset | number | 是 | Start position. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
let total = 10;
let offset = 1;
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value");
    query.limit(total, offset);
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are not equal to the given value.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#notEqualTo

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## notInNumber

```TypeScript
notInNumber(field: string, valueList: number[]): Query
```

Creates a **Query** object to search for the records with the specified field that are not within the given number list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#notInNumber

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| valueList | number[] | 是 | List of numbers to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notInNumber("field", [0, 1]);
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## notInString

```TypeScript
notInString(field: string, valueList: string[]): Query
```

Creates a **Query** object to search for the records with the specified field that are not within the given string list.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#notInString

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| valueList | string[] | 是 | List of strings to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notInString("field", ['test1', 'test2']);
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## or

```TypeScript
or(): Query
```

Creates a **Query** object with the OR condition.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#or

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value1");
    query.or();
    query.notEqualTo("field", "value2");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## orderByAsc

```TypeScript
orderByAsc(field: string): Query
```

Creates a **Query** object to sort the query results in ascending order.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#orderByAsc

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value");
    query.orderByAsc("field");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## orderByDesc

```TypeScript
orderByDesc(field: string): Query
```

Creates a **Query** object to sort the query results in descending order.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#orderByDesc

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.notEqualTo("field", "value");
    query.orderByDesc("field");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## prefixKey

```TypeScript
prefixKey(prefix: string): Query
```

Creates a **Query** object with a specified key prefix.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#prefixKey

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| prefix | string | 是 | Key prefix. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.prefixKey("$.name");
    query.prefixKey("0");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

## reset

```TypeScript
reset(): Query
```

Resets the **Query** object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#reset

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object reset. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.equalTo("key", "value");
    console.log("query is " + query.getSqlLike());
    query.reset();
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("simply calls should be ok :" + e);
}

```

## setSuggestIndex

```TypeScript
setSuggestIndex(index: string): Query
```

Creates a **Query** object with an index preferentially used for query.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#setSuggestIndex

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | string | 是 | Index preferentially used for query. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.setSuggestIndex("$.name");
    query.setSuggestIndex("0");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
   console.log("duplicated calls should be ok :" + e);
}

```

## unlike

```TypeScript
unlike(field: string, value: string): Query
```

Creates a **Query** object to search for the records with the specified field that are not similar to the given string.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.data.distributedKVStore.Query#unlike

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Field to query. It cannot contain '^'. |
| value | string | 是 | String to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Query | Query object created. |

**示例：**

```TypeScript
try {
    let query = new distributedData.Query();
    query.unlike("field", "value");
    console.log("query is " + query.getSqlLike());
    query = null;
} catch (e) {
    console.log("duplicated calls should be ok :" + e);
}

```

