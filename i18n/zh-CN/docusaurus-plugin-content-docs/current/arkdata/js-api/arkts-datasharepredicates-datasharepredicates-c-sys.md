# DataSharePredicates

Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for it.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
```

## and

```TypeScript
and(): DataSharePredicates
```

Creates a **DataSharePredicates** object to add the AND condition. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with the AND operator. |

**示例：**

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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Start value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.beginsWith("NAME", "os");

```

## beginWrap

```TypeScript
beginWrap(): DataSharePredicates
```

Adds a left parenthesis to this **DataSharePredicates**. This API is similar to "(" in an SQL statement and must be used with the right parenthesis. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with a left parenthesis. |

**示例：**

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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| low | ValueType | 是 | Minimum value of the range to set.If low is set to a number, the matching  range is specified based on the numeric order.If low is set to a string, the matching range is  specified based on the lexicographical order.If low is set to boolean, the matching range is  specified based on the numeric order. |
| high | ValueType | 是 | Maximum value to match the DataAbilityPredicates.If high is set to a  number, the matching range is specified based on the numeric order.If high is set to a string, the  matching range is specified based on the lexicographical order.If high is set to boolean, the  matching range is specified based on the numeric order. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.between("AGE", 10, 50);

```

## contains

```TypeScript
contains(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that contains the specified value. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.contains("NAME", "os");

```

## distinct

```TypeScript
distinct(): DataSharePredicates
```

Creates a **DataSharePredicates** object to filter out duplicate data records. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").distinct();

```

## endsWith

```TypeScript
endsWith(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that ends with the specified value. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | End value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.endsWith("NAME", "os");

```

## endWrap

```TypeScript
endWrap(): DataSharePredicates
```

Adds a right parenthesis to this **DataSharePredicates**. This API is similar to ")" in an SQL statement and must be used with the left parenthesis. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with a right parenthesis. |

**示例：**

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

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose");

```

## glob

```TypeScript
glob(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Wildcard expression to match.In the expression, '' represents zero, one, or more  digits or characters, and '?' represents a single digit or character. It is case sensitive. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.glob("NAME", "?h*g");

```

## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThan("AGE", 10);

```

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is greater than or equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.greaterThanOrEqualTo("AGE", 10);

```

## groupBy

```TypeScript
groupBy(fields: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object group the records according to the specified fields. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fields | Array&lt;string> | 是 | Names of the columns by which the records are grouped. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.groupBy(["AGE", "NAME"]);

```

## in

```TypeScript
in(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is within the specified range. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |
| value | Array&lt;ValueType> | 是 | Array of the values to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.in("AGE", [18, 20]);

```

## indexedBy

```TypeScript
indexedBy(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to list data by the specified index. Before using this API, ensure that the index column exists. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Name of the index column. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.indexedBy("SALARY_INDEX");

```

## inKeys

```TypeScript
inKeys(keys: Array<string>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose keys are within the given range. Currently, only the KVDB supports this **DataSharePredicates** object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keys | Array&lt;string> | 是 | Array of the keys to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.inKeys(["Lisa", "Rose"]);

```

## inValues

```TypeScript
inValues(field: string, value: Array<ValueType>): DataSharePredicates
```

Configure {@code DataSharePredicates} to match the specified field whose data type is ValueType array and values are within a given range. Currently only used for RDB and KVDB(schema).

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | 是 | Indicates the values to match with DataSharePredicates. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | Returns DataSharePredicates that matches the specified field. |

## isNotNull

```TypeScript
isNotNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is not null. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNotNull("NAME");

```

## isNull

```TypeScript
isNull(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data whose value is null. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.isNull("NAME");

```

## lessThan

```TypeScript
lessThan(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If field is null or undefined, the predicate  configured by calling this API is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThan("AGE", 50);

```

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is less than or equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.lessThanOrEqualTo("AGE", 50);

```

## like

```TypeScript
like(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | string | 是 | Wildcard expression to match.In the expression, '%' represents zero, one, or more  digits or characters, and '_' represents a single digit or character. It is case insensitive.If this  parameter is set to undefined or null, the predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.like("NAME", "%os%");

```

## limit

```TypeScript
limit(total: int, offset: int): DataSharePredicates
```

Creates a **DataSharePredicates** object to specify the number of records in the result and the start position. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| total | int | 是 | Maximum number of records.If the KV store is used and total is undefined or  null, the maximum number of records is 0. For details about the value range, see the description of this  parameter in [limit](arkts-distributedkvstore-query-c.md#limit).If the RDB store  is used and total is undefined or null, the maximum number of records is not limited. For details  about the value range, see the description of this parameter in  [limitAs](arkts-distributedkvstore-query-c.md#limit). |
| offset | int | 是 | Start position of the query result.If this parameter is set to undefined or  null, the start position is the beginning of the result set.For details about the value range in a KV  store, see the description of this parameter in  [limit](arkts-distributedkvstore-query-c.md#limit).For details about the value  range in an RDB store, see the description of the rowOffset parameter in  [offsetAs](arkts-relationalstore-rdbpredicates-c.md#offsetAs). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.equalTo("NAME", "Rose").limit(10, 3);

```

## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is out of the specified range, excluding the start and end values. Currently, only RDB store supports this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| low | ValueType | 是 | Minimum value of the range to set.If low is set to a number, the matching  range is specified based on the numeric order.If low is set to a string, the matching range is  specified based on the lexicographical order.If low is set to boolean, the matching range is  specified based on the numeric order. |
| high | ValueType | 是 | Maximum value to match the DataAbilityPredicates.If high is set to a  number, the matching range is specified based on the numeric order.If high is set to a string, the  matching range is specified based on the lexicographical order.If high is set to boolean, the  matching range is specified based on the numeric order. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notBetween("AGE", 10, 50);

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not equal to the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | ValueType | 是 | Value to match.If this parameter is set to undefined or null, the  predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notEqualTo("NAME", "Rose");

```

## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that is not in the specified value. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid.If this parameter is set to 'null' or 'undefined' in  string, the matching result may not be as expected or an exception may be thrown when the predicate is used  by the KV store and RDB store APIs. |
| value | Array&lt;ValueType> | 是 | Array of the values to match.If this parameter is set to undefined or  null, the predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.notIn("NAME", ["Lisa", "Rose"]);

```

## notInValues

```TypeScript
notInValues(field: string, value: Array<ValueType>): DataSharePredicates
```

Configure {@code DataSharePredicates} to match the specified field whose data type is String array and values are out of a given range. Currently only used for RDB and KVDB(schema).

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | 是 | Indicates the values to match with DataSharePredicates. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | Returns DataSharePredicates that matches the specified field. |

## or

```TypeScript
or(): DataSharePredicates
```

Creates a **DataSharePredicates** object to add the OR condition. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object with the OR operator. |

**示例：**

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

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.orderByAsc("AGE");

```

## orderByDesc

```TypeScript
orderByDesc(field: string): DataSharePredicates
```

Creates a **DataSharePredicates** object that sorts data in descending order. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table.If this parameter is set to undefined or  null, the predicate used is invalid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.orderByDesc("AGE");

```

## prefixKey

```TypeScript
prefixKey(prefix: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data with the specified key prefix. Currently, only the KVDB supports this **DataSharePredicates** object.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| prefix | string | 是 | Key prefix to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.prefixKey("NAME");

```

## unlike

```TypeScript
unlike(field: string, value: string): DataSharePredicates
```

Creates a **DataSharePredicates** object to match the data that does not match the specified wildcard expression. Currently, both the RDB store and KV store support this predicate.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Wildcard expression to match.In the expression, '%' represents zero, one, or more  digits or characters, and '_' represents a single digit or character. It is case insensitive. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataSharePredicates | DataSharePredicates object created. |

**示例：**

```TypeScript
let predicates = new dataSharePredicates.DataSharePredicates();
predicates.unlike("NAME", "%os%");

```

