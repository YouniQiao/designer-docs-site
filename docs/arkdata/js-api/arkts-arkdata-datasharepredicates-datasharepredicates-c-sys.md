# DataSharePredicates (System API)

Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for it.

**Since:** 10

<!--Device-dataSharePredicates-class DataSharePredicates--><!--Device-dataSharePredicates-class DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
```

<a id="beginwrap"></a>
## beginWrap

```TypeScript
beginWrap(): DataSharePredicates
```

Adds a left parenthesis to this **DataSharePredicates**. This API is similar to "(" in an SQL statement and must be used with the right parenthesis.

Currently, only RDB store supports this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-beginWrap(): DataSharePredicates--><!--Device-DataSharePredicates-beginWrap(): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object with a left parenthesis. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap();

```

<a id="beginswith"></a>
## beginsWith

```TypeScript
beginsWith(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that begins with the specified value.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-beginsWith(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-beginsWith(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Start value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.beginsWith("NAME", "os");

```

<a id="between"></a>
## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is within the specified range, including the start and end values.

Currently, only RDB store supports this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-between(field: string, low: ValueType, high: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-between(field: string, low: ValueType, high: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value of the range to set.If **low** is set to a number, the matching range is specified based on the numeric order.If **low** is set to a string, the matching range is specified based on the lexicographical order.If **low** is set to boolean, the matching range is specified based on the numeric order. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value to match the **DataAbilityPredicates**.If **high** is set to a number, the matching range is specified based on the numeric order.If **high** is set to a string, the matching range is specified based on the lexicographical order.If **high** is set to boolean, the matching range is specified based on the numeric order. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.between("AGE", 10, 50);

```

<a id="contains"></a>
## contains

```TypeScript
contains(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that contains the specified value.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-contains(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-contains(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.contains("NAME", "os");

```

<a id="distinct"></a>
## distinct

```TypeScript
distinct(): DataSharePredicates
```

Creates a **DataSharePredicates** object to filter out duplicate data records.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-distinct(): DataSharePredicates--><!--Device-DataSharePredicates-distinct(): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").distinct();

```

<a id="endwrap"></a>
## endWrap

```TypeScript
endWrap(): DataSharePredicates
```

Adds a right parenthesis to this **DataSharePredicates**. This API is similar to ")" in an SQL statement and must be used with the left parenthesis.

Currently, only RDB store supports this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-endWrap(): DataSharePredicates--><!--Device-DataSharePredicates-endWrap(): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object with a right parenthesis. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap();

```

<a id="endswith"></a>
## endsWith

```TypeScript
endsWith(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that ends with the specified value.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-endsWith(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-endsWith(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | End value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.endsWith("NAME", "os");

```

<a id="glob"></a>
## glob

```TypeScript
glob(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-glob(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-glob(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Wildcard expression to match.In the expression, '*' represents zero, one, or more digits or characters, and '?' represents a single digit or character. It is case sensitive. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.glob("NAME", "?h*g");

```

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-greaterThan(field: string, value: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-greaterThan(field: string, value: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThan("AGE", 10);

```

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than or equal to the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThanOrEqualTo("AGE", 10);

```

<a id="groupby"></a>
## groupBy

```TypeScript
groupBy(fields: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object group the records according to the specified fields.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-groupBy(fields: Array<string>): DataSharePredicates--><!--Device-DataSharePredicates-groupBy(fields: Array<string>): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | Array&lt;string&gt; | Yes | Names of the columns by which the records are grouped. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.groupBy(["AGE", "NAME"]);

```

<a id="inkeys"></a>
## inKeys

```TypeScript
inKeys(keys: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose keys are within the given range.

Currently, only the KVDB supports this **DataSharePredicates** object.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-inKeys(keys: Array<string>): DataSharePredicates--><!--Device-DataSharePredicates-inKeys(keys: Array<string>): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | Array&lt;string&gt; | Yes | Array of the keys to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.inKeys(["Lisa", "Rose"]);

```

<a id="indexedby"></a>
## indexedBy

```TypeScript
indexedBy(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to list data by the specified index. Before using this API, ensure that the index column exists.

Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-indexedBy(field: string): DataSharePredicates--><!--Device-DataSharePredicates-indexedBy(field: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Name of the index column. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.indexedBy("SALARY_INDEX");

```

<a id="isnotnull"></a>
## isNotNull

```TypeScript
isNotNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is not null.

Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-isNotNull(field: string): DataSharePredicates--><!--Device-DataSharePredicates-isNotNull(field: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNotNull("NAME");

```

<a id="isnull"></a>
## isNull

```TypeScript
isNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is null.

Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-isNull(field: string): DataSharePredicates--><!--Device-DataSharePredicates-isNull(field: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNull("NAME");

```

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-lessThan(field: string, value: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-lessThan(field: string, value: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If field is null or undefined, the predicate configured by calling this API is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThan("AGE", 50);

```

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than or equal to the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThanOrEqualTo("AGE", 50);

```

<a id="like"></a>
## like

```TypeScript
like(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-like(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-like(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | string | Yes | Wildcard expression to match.In the expression, '%' represents zero, one, or more digits or characters, and '_' represents a single digit or character. It is case insensitive.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.like("NAME", "%os%");

```

<a id="notbetween"></a>
## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is out of the specified range, excluding the start and end values.

Currently, only RDB store supports this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value of the range to set.If **low** is set to a number, the matching range is specified based on the numeric order.If **low** is set to a string, the matching range is specified based on the lexicographical order.If **low** is set to boolean, the matching range is specified based on the numeric order. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value to match the **DataAbilityPredicates**.If **high** is set to a number, the matching range is specified based on the numeric order.If **high** is set to a string, the matching range is specified based on the lexicographical order.If **high** is set to boolean, the matching range is specified based on the numeric order. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notBetween("AGE", 10, 50);

```

<a id="notequalto"></a>
## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not equal to the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-notEqualTo(field: string, value: ValueType): DataSharePredicates--><!--Device-DataSharePredicates-notEqualTo(field: string, value: ValueType): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notEqualTo("NAME", "Rose");

```

<a id="notin"></a>
## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not in the specified value.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-notIn(field: string, value: Array<ValueType>): DataSharePredicates--><!--Device-DataSharePredicates-notIn(field: string, value: Array<ValueType>): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to **undefined** or **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in string, the matching result may not be as expected or an exception may be thrown when the predicate is used by the KV store and RDB store APIs. |
| value | Array&lt;ValueType&gt; | Yes | Array of the values to match.If this parameter is set to **undefined** or **null**, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notIn("NAME", ["Lisa", "Rose"]);

```

<a id="or"></a>
## or

```TypeScript
or(): DataSharePredicates
```

Creates a **DataSharePredicates** object to add the OR condition.

Currently, both the RDB store and KV store support this predicate.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-or(): DataSharePredicates--><!--Device-DataSharePredicates-or(): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object with the OR operator. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates()
predicates.equalTo("NAME", "lisi")
    .or()
    .equalTo("NAME", "Rose");

```

<a id="prefixkey"></a>
## prefixKey

```TypeScript
prefixKey(prefix: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data with the specified key prefix.

Currently, only the KVDB supports this **DataSharePredicates** object.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-prefixKey(prefix: string): DataSharePredicates--><!--Device-DataSharePredicates-prefixKey(prefix: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.prefixKey("NAME");

```

<a id="unlike"></a>
## unlike

```TypeScript
unlike(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that does not match the specified wildcard expression.

Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

<!--Device-DataSharePredicates-unlike(field: string, value: string): DataSharePredicates--><!--Device-DataSharePredicates-unlike(field: string, value: string): DataSharePredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Wildcard expression to match.In the expression, '%' represents zero, one, or more digits or characters, and '_' represents a single digit or character. It is case insensitive. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataSharePredicates](arkts-arkdata-datasharepredicates-datasharepredicates-c-sys.md) | **DataSharePredicates** object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.unlike("NAME", "%os%");

```

