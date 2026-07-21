# Query

Provides APIs to create a **Query** object, which defines different data query criteria.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** Query

<!--Device-distributedData-class Query--><!--Device-distributedData-class Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

<a id="and"></a>
## and

```TypeScript
and(): Query
```

Creates a **Query** object with the AND condition.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** and

<!--Device-Query-and(): Query--><!--Device-Query-and(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="begingroup"></a>
## beginGroup

```TypeScript
beginGroup(): Query
```

Creates a **Query** object for a query condition group with a left parenthesis.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** beginGroup

<!--Device-Query-beginGroup(): Query--><!--Device-Query-beginGroup(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Defines a constructor used to create a **Query** instance.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** constructor

<!--Device-Query-constructor()--><!--Device-Query-constructor()-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

<a id="deviceid"></a>
## deviceId

```TypeScript
deviceId(deviceId: string): Query
```

Creates a **Query** object with the device ID as the key prefix.

> **NOTE**  
>  
> The value of **deviceId** can be obtained by <!--RP1-->  
> [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-distributedservice-devicemanager-devicemanager-i-sys.md#gettrusteddevicelistsync-1).  
> <!--RP1End-->The APIs of the **deviceManager** module are system interfaces and available only to system  
> applications.  
> For details about how to obtain **deviceId**, see [sync()](arkts-arkdata-distributeddata-singlekvstore-i.md#sync-1).

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deviceId

<!--Device-Query-deviceId(deviceId: string): Query--><!--Device-Query-deviceId(deviceId: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="endgroup"></a>
## endGroup

```TypeScript
endGroup(): Query
```

Creates a **Query** object for a query condition group with a right parenthesis.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** endGroup

<!--Device-Query-endGroup(): Query--><!--Device-Query-endGroup(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="equalto"></a>
## equalTo

```TypeScript
equalTo(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are equal to the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** equalTo

<!--Device-Query-equalTo(field: string, value: number | string | boolean): Query--><!--Device-Query-equalTo(field: string, value: number | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="getsqllike"></a>
## getSqlLike

```TypeScript
getSqlLike(): string
```

Obtains the query statement of the **Query** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getSqlLike

<!--Device-Query-getSqlLike(): string--><!--Device-Query-getSqlLike(): string-End-->

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

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are greater than the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** greaterThan

<!--Device-Query-greaterThan(field: string, value: number | string | boolean): Query--><!--Device-Query-greaterThan(field: string, value: number | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are greater than or equal to the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** greaterThanOrEqualTo

<!--Device-Query-greaterThanOrEqualTo(field: string, value: number | string): Query--><!--Device-Query-greaterThanOrEqualTo(field: string, value: number | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="innumber"></a>
## inNumber

```TypeScript
inNumber(field: string, valueList: number[]): Query
```

Creates a **Query** object to search for the records with the specified field that are within the given number list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** inNumber

<!--Device-Query-inNumber(field: string, valueList: number[]): Query--><!--Device-Query-inNumber(field: string, valueList: number[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | number[] | Yes | List of numbers to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="instring"></a>
## inString

```TypeScript
inString(field: string, valueList: string[]): Query
```

Creates a **Query** object to search for the records with the specified field that are within the given string list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** inString

<!--Device-Query-inString(field: string, valueList: string[]): Query--><!--Device-Query-inString(field: string, valueList: string[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | string[] | Yes | List of strings to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="isnotnull"></a>
## isNotNull

```TypeScript
isNotNull(field: string): Query
```

Creates a **Query** object to search for the records whose value is not **null**.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isNotNull

<!--Device-Query-isNotNull(field: string): Query--><!--Device-Query-isNotNull(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="isnull"></a>
## isNull

```TypeScript
isNull(field: string): Query
```

Creates a **Query** object to search for the records with the specified field that are **null**.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isNull

<!--Device-Query-isNull(field: string): Query--><!--Device-Query-isNull(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are less than the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** lessThan

<!--Device-Query-lessThan(field: string, value: number | string): Query--><!--Device-Query-lessThan(field: string, value: number | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: number | string): Query
```

Creates a **Query** object to search for the records with the specified field that are less than or equal to the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** lessThanOrEqualTo

<!--Device-Query-lessThanOrEqualTo(field: string, value: number | string): Query--><!--Device-Query-lessThanOrEqualTo(field: string, value: number | string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="like"></a>
## like

```TypeScript
like(field: string, value: string): Query
```

Creates a **Query** object to search for the records with the specified field that are similar to the given string.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** like

<!--Device-Query-like(field: string, value: string): Query--><!--Device-Query-like(field: string, value: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | string | Yes | String to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="limit"></a>
## limit

```TypeScript
limit(total: number, offset: number): Query
```

Creates a **Query** object to specify the number of records in the query result and the start position.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** limit

<!--Device-Query-limit(total: number, offset: number): Query--><!--Device-Query-limit(total: number, offset: number): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| total | number | Yes | Number of records in the query result. |
| offset | number | Yes | Start position. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="notequalto"></a>
## notEqualTo

```TypeScript
notEqualTo(field: string, value: number | string | boolean): Query
```

Creates a **Query** object to search for the records with the specified field that are not equal to the given value.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** notEqualTo

<!--Device-Query-notEqualTo(field: string, value: number | string | boolean): Query--><!--Device-Query-notEqualTo(field: string, value: number | string | boolean): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | number \| string \| boolean | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="notinnumber"></a>
## notInNumber

```TypeScript
notInNumber(field: string, valueList: number[]): Query
```

Creates a **Query** object to search for the records with the specified field that are not within the given number list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** notInNumber

<!--Device-Query-notInNumber(field: string, valueList: number[]): Query--><!--Device-Query-notInNumber(field: string, valueList: number[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | number[] | Yes | List of numbers to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="notinstring"></a>
## notInString

```TypeScript
notInString(field: string, valueList: string[]): Query
```

Creates a **Query** object to search for the records with the specified field that are not within the given string list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** notInString

<!--Device-Query-notInString(field: string, valueList: string[]): Query--><!--Device-Query-notInString(field: string, valueList: string[]): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| valueList | string[] | Yes | List of strings to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="or"></a>
## or

```TypeScript
or(): Query
```

Creates a **Query** object with the OR condition.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** or

<!--Device-Query-or(): Query--><!--Device-Query-or(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="orderbyasc"></a>
## orderByAsc

```TypeScript
orderByAsc(field: string): Query
```

Creates a **Query** object to sort the query results in ascending order.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** orderByAsc

<!--Device-Query-orderByAsc(field: string): Query--><!--Device-Query-orderByAsc(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="orderbydesc"></a>
## orderByDesc

```TypeScript
orderByDesc(field: string): Query
```

Creates a **Query** object to sort the query results in descending order.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** orderByDesc

<!--Device-Query-orderByDesc(field: string): Query--><!--Device-Query-orderByDesc(field: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="prefixkey"></a>
## prefixKey

```TypeScript
prefixKey(prefix: string): Query
```

Creates a **Query** object with a specified key prefix.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** prefixKey

<!--Device-Query-prefixKey(prefix: string): Query--><!--Device-Query-prefixKey(prefix: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | Key prefix. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="reset"></a>
## reset

```TypeScript
reset(): Query
```

Resets the **Query** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** reset

<!--Device-Query-reset(): Query--><!--Device-Query-reset(): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object reset. |

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

<a id="setsuggestindex"></a>
## setSuggestIndex

```TypeScript
setSuggestIndex(index: string): Query
```

Creates a **Query** object with an index preferentially used for query.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** setSuggestIndex

<!--Device-Query-setSuggestIndex(index: string): Query--><!--Device-Query-setSuggestIndex(index: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | string | Yes | Index preferentially used for query. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

<a id="unlike"></a>
## unlike

```TypeScript
unlike(field: string, value: string): Query
```

Creates a **Query** object to search for the records with the specified field that are not similar to the given string.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** unlike

<!--Device-Query-unlike(field: string, value: string): Query--><!--Device-Query-unlike(field: string, value: string): Query-End-->

**System capability:** SystemCapability.DistributedDataManager.KVStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Field to query. It cannot contain '^'. |
| value | string | Yes | String to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [Query](arkts-arkdata-distributeddata-query-c.md) | **Query** object created. |

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

