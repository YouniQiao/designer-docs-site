# DataSharePredicates

Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for it.

**Since:** 9

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

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with the AND operator. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "lisi")
    .and()
    .equalTo("SALARY", 200.5);

```

## beginsWith

```TypeScript
beginsWith(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that begins with the specified value. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

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
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.beginsWith("NAME", "os");

```

## beginWrap

```TypeScript
beginWrap(): DataSharePredicates
```

Adds a left parenthesis to this **DataSharePredicates**. This API is similar to "(" in an SQL statement and must be used with the right parenthesis. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with a left parenthesis. |

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

## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is within the specified range, including the start and end values. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| low | ValueType | Yes | Minimum value of the range to set.If low is set to a number, the matching  range is specified based on the numeric order.If low is set to a string, the matching range is  specified based on the lexicographical order.If low is set to boolean, the matching range is  specified based on the numeric order. |
| high | ValueType | Yes | Maximum value to match the DataAbilityPredicates.If high is set to a  number, the matching range is specified based on the numeric order.If high is set to a string, the  matching range is specified based on the lexicographical order.If high is set to boolean, the  matching range is specified based on the numeric order. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.between("AGE", 10, 50);

```

## contains

```TypeScript
contains(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that contains the specified value. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

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
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.contains("NAME", "os");

```

## distinct

```TypeScript
distinct(): DataSharePredicates
```

Creates a **DataSharePredicates** object to filter out duplicate data records. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").distinct();

```

## endsWith

```TypeScript
endsWith(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that ends with the specified value. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

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
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.endsWith("NAME", "os");

```

## endWrap

```TypeScript
endWrap(): DataSharePredicates
```

Adds a right parenthesis to this **DataSharePredicates**. This API is similar to ")" in an SQL statement and must be used with the left parenthesis. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with a right parenthesis. |

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

## equalTo

```TypeScript
equalTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to search for the records in the specified column that are equal to the given value. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose");

```

## glob

```TypeScript
glob(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Wildcard expression to match.In the expression, '' represents zero, one, or more  digits or characters, and '?' represents a single digit or character. It is case sensitive. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.glob("NAME", "?h*g");

```

## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThan("AGE", 10);

```

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than or equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThanOrEqualTo("AGE", 10);

```

## groupBy

```TypeScript
groupBy(fields: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object group the records according to the specified fields. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | Array&lt;string> | Yes | Names of the columns by which the records are grouped. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.groupBy(["AGE", "NAME"]);

```

## in

```TypeScript
in(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is within the specified range. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |
| value | Array&lt;ValueType> | Yes | Array of the values to match. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.in("AGE", [18, 20]);

```

## indexedBy

```TypeScript
indexedBy(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to list data by the specified index. Before using this API, ensure that the index column exists. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Name of the index column. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.indexedBy("SALARY_INDEX");

```

## inKeys

```TypeScript
inKeys(keys: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose keys are within the given range. Currently, only the KVDB supports this **DataSharePredicates** object.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | Array&lt;string> | Yes | Array of the keys to match. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.inKeys(["Lisa", "Rose"]);

```

## inValues

```TypeScript
inValues(field: string, value: Array<ValueType>): DataSharePredicates
```

Configure {@code DataSharePredicates} to match the specified field whose data type is ValueType array and values are within a given range. Currently only used for RDB and KVDB(schema).

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | Yes | Indicates the values to match with DataSharePredicates. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | Returns DataSharePredicates that matches the specified field. |

## isNotNull

```TypeScript
isNotNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is not null. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNotNull("NAME");

```

## isNull

```TypeScript
isNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is null. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNull("NAME");

```

## lessThan

```TypeScript
lessThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If field is null or undefined, the predicate  configured by calling this API is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThan("AGE", 50);

```

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than or equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThanOrEqualTo("AGE", 50);

```

## like

```TypeScript
like(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | string | Yes | Wildcard expression to match.In the expression, '%' represents zero, one, or more  digits or characters, and '_' represents a single digit or character. It is case insensitive.If this  parameter is set to undefined or null, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.like("NAME", "%os%");

```

## limit

```TypeScript
limit(total: int, offset: int): DataSharePredicates
```

Creates a **DataSharePredicates** object to specify the number of records in the result and the start position. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| total | int | Yes | Maximum number of records.If the KV store is used and total is undefined or  null, the maximum number of records is 0. For details about the value range, see the description of this  parameter in [limit](arkts-distributedkvstore-query-c.md#limit).If the RDB store  is used and total is undefined or null, the maximum number of records is not limited. For details  about the value range, see the description of this parameter in  [limitAs](arkts-distributedkvstore-query-c.md#limit). |
| offset | int | Yes | Start position of the query result.If this parameter is set to undefined or  null, the start position is the beginning of the result set.For details about the value range in a KV  store, see the description of this parameter in  [limit](arkts-distributedkvstore-query-c.md#limit).For details about the value  range in an RDB store, see the description of the rowOffset parameter in  [offsetAs](arkts-relationalstore-rdbpredicates-c.md#offsetAs). |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").limit(10, 3);

```

## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is out of the specified range, excluding the start and end values. Currently, only RDB store supports this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| low | ValueType | Yes | Minimum value of the range to set.If low is set to a number, the matching  range is specified based on the numeric order.If low is set to a string, the matching range is  specified based on the lexicographical order.If low is set to boolean, the matching range is  specified based on the numeric order. |
| high | ValueType | Yes | Maximum value to match the DataAbilityPredicates.If high is set to a  number, the matching range is specified based on the numeric order.If high is set to a string, the  matching range is specified based on the lexicographical order.If high is set to boolean, the  matching range is specified based on the numeric order. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notBetween("AGE", 10, 50);

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | Yes | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notEqualTo("NAME", "Rose");

```

## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not in the specified value. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | Array&lt;ValueType> | Yes | Array of the values to match.If this parameter is set to undefined or  null, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notIn("NAME", ["Lisa", "Rose"]);

```

## notInValues

```TypeScript
notInValues(field: string, value: Array<ValueType>): DataSharePredicates
```

Configure {@code DataSharePredicates} to match the specified field whose data type is String array and values are out of a given range. Currently only used for RDB and KVDB(schema).

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | Yes | Indicates the values to match with DataSharePredicates. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | Returns DataSharePredicates that matches the specified field. |

## or

```TypeScript
or(): DataSharePredicates
```

Creates a **DataSharePredicates** object to add the OR condition. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with the OR operator. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates()
predicates.equalTo("NAME", "lisi")
    .or()
    .equalTo("NAME", "Rose");

```

## orderByAsc

```TypeScript
orderByAsc(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object that sorts records in ascending order. Currently, both the RDB store and KV store support this predicate.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

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

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.orderByDesc("AGE");

```

## prefixKey

```TypeScript
prefixKey(prefix: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data with the specified key prefix. Currently, only the KVDB supports this **DataSharePredicates** object.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | Key prefix to match. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.prefixKey("NAME");

```

## unlike

```TypeScript
unlike(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that does not match the specified wildcard expression. Currently, both the RDB store and KV store support this predicate.

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Wildcard expression to match.In the expression, '%' represents zero, one, or more  digits or characters, and '_' represents a single digit or character. It is case insensitive. |

**Return value:**

| Type | Description |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**Example**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.unlike("NAME", "%os%");

```

