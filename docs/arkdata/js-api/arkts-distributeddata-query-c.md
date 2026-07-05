# Query

Provides APIs to create a **Query** object, which defines different data query criteria.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## and

```TypeScript
and(): Query
```

Creates a **Query** object with the AND condition.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#and

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#beginGroup

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#constructor

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

## deviceId

```TypeScript
deviceId(deviceId: string): Query
```

Creates a **Query** object with the device ID as the key prefix. > **NOTE** > > The value of **deviceId** can be obtained by <!--RP1--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync). > <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications. > For details about how to obtain **deviceId**, see [sync()]distributedData.SingleKVStore.sync.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#deviceId

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#endGroup

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#equalTo

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#getSqlLike

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Query statement obtained. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#greaterThan

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#greaterThanOrEqualTo

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#inNumber

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | number[] | Yes | List of numbers to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#inString

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | string[] | Yes | List of strings to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#isNotNull

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#isNull

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#lessThan

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#lessThanOrEqualTo

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#like

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | string | Yes | String to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#limit

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| total | number | Yes | Number of records in the query result. |
| offset | number | Yes | Start position. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#notEqualTo

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#notInNumber

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | number[] | Yes | List of numbers to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#notInString

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | string[] | Yes | List of strings to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#or

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#orderByAsc

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#orderByDesc

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#prefixKey

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | Key prefix. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#reset

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object reset. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#setSuggestIndex

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | string | Yes | Index preferentially used for query. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.data.distributedKVStore.Query#unlike

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | string | Yes | String to match. |

**Return value:**

| Type | Description |
| --- | --- |
| Query | Query object created. |

**Example**

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

