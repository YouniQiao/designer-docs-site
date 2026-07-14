# DataSharePredicates (System API)

Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for it.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
```

## and

```TypeScript
and(): DataSharePredicates
```

Creates a **DataSharePredicates** object to add the AND condition. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object with the AND operator. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "lisi")
    .and()
    .equalTo("SALARY", 200.5);

```

## equalTo

```TypeScript
equalTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to search for the records in the specified column that are equal to the given value. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or**null**, the predicate used is invalid. |
| value | ValueType | Yes | Value to match.If this parameter is set to **undefined** or **null**, thepredicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose");

```

## in

```TypeScript
in(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is within the specified range. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or**null**, the predicate used is invalid. |
| value | Array&lt;ValueType&gt; | Yes | Array of the values to match. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.in("AGE", [18, 20]);

```

## limit

```TypeScript
limit(total: number, offset: number): DataSharePredicates
```

Creates a **DataSharePredicates** object to specify the number of records in the result and the start position. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| total | number | Yes | Maximum number of records.If the KV store is used and **total** is **undefined** or**null**, the maximum number of records is 0. For details about the value range, see the description of thisparameter in [limit](arkts-arkdata-query-c.md#limit-1).If the RDB storeis used and **total** is **undefined** or **null**, the maximum number of records is not limited. For detailsabout the value range, see the description of this parameter in[limitAs](arkts-arkdata-query-c.md#limit-1). |
| offset | number | Yes | Start position of the query result.If this parameter is set to **undefined** or**null**, the start position is the beginning of the result set.For details about the value range in a KVstore, see the description of this parameter in[limit](arkts-arkdata-query-c.md#limit-1).For details about the valuerange in an RDB store, see the description of the **rowOffset** parameter in[offsetAs](arkts-arkdata-rdbpredicates-c.md#offsetas-1). |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").limit(10, 3);

```

## orderByAsc

```TypeScript
orderByAsc(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object that sorts records in ascending order. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or**null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.orderByAsc("AGE");

```

## orderByDesc

```TypeScript
orderByDesc(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object that sorts data in descending order. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or**null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.orderByDesc("AGE");

```

