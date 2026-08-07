# OH_Predicates

```c
typedef struct OH_Predicates {...} OH_Predicates
```

## Overview

**Related module**: [RDB](capi-rdb.md)

**Header file**: [oh_predicates.h](capi-oh-predicates-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int64_t id | The id used to uniquely identify the OH_Predicates struct. |


### Member functions

| Name | Description |
| -- | -- |
| [OH_Predicates *(\*equalTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer. Restricts the value of the field to be equal to the specified value to the predicates.This method is similar to = of the SQL statement. |
| [OH_Predicates *(\*notEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be not equal to the specified value to the predicates.This method is similar to != of the SQL statement. |
| [OH_Predicates *(\*beginWrap)(OH_Predicates *predicates)](#*) | Function pointer. Add left parenthesis to predicate.This method is similar to ( of the SQL statement. |
| [OH_Predicates *(\*endWrap)(OH_Predicates *predicates)](#*) | Function pointer. Add right parenthesis to predicate.This method is similar to ) of the SQL statement. |
| [OH_Predicates *(\*orOperate)(OH_Predicates *predicates)](#*) | Function pointer. Adds an or condition to the predicates.This method is similar to OR of the SQL statement. |
| [OH_Predicates *(\*andOperate)(OH_Predicates *predicates)](#*) | Function pointer. Adds an and condition to the predicates.This method is similar to AND of the SQL statement. |
| [OH_Predicates *(\*isNull)(OH_Predicates *predicates, const char *field)](#*) | Function pointer. Restricts the value of the field which is null to the predicates.This method is similar to IS NULL of the SQL statement. |
| [OH_Predicates *(\*isNotNull)(OH_Predicates *predicates, const char *field)](#*) | Function pointer. Restricts the value of the field which is not null to the predicates.This method is similar to IS NOT NULL of the SQL statement. |
| [OH_Predicates *(\*like)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer. Restricts the value of the field to be like the specified value to the predicates.This method is similar to LIKE of the SQL statement. |
| [OH_Predicates *(\*between)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer. Restricts the value of the field to be between the specified value to the predicates.This method is similar to BETWEEN of the SQL statement. |
| [OH_Predicates *(\*notBetween)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be not between the specified value to the predicates.This method is similar to NOT BETWEEN of the SQL statement. |
| [OH_Predicates *(\*greaterThan)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be greater than the specified value to the predicates.This method is similar to > of the SQL statement. |
| [OH_Predicates *(\*lessThan)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be less than the specified value to the predicates.This method is similar to < of the SQL statement. |
| [OH_Predicates *(\*greaterThanOrEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be greater than or equal to the specified value to the predicates.This method is similar to >= of the SQL statement. |
| [OH_Predicates *(\*lessThanOrEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Restricts the value of the field to be less than or equal to the specified value to the predicates.This method is similar to <= of the SQL statement. |
| [OH_Predicates *(\*orderBy)(OH_Predicates *predicates, const char *field, OH_OrderType type)](#*) | Function pointer. Restricts the ascending or descending order of the return list.When there are several orders, the one close to the head has the highest priority.This method is similar ORDER BY the SQL statement. |
| [OH_Predicates *(\*distinct)(OH_Predicates *predicates)](#*) | Function pointer. Configure predicates to filter duplicate records and retain only one of them.This method is similar DISTINCT the SQL statement. |
| [OH_Predicates *(\*limit)(OH_Predicates *predicates, unsigned int value)](#*) | Function pointer. Predicate for setting the maximum number of data records.This method is similar LIMIT the SQL statement. |
| [OH_Predicates *(\*offset)(OH_Predicates *predicates, unsigned int rowOffset)](#*) | Function pointer. Configure the predicate to specify the starting position of the returned result.This method is similar OFFSET the SQL statement. |
| [OH_Predicates *(\*groupBy)(OH_Predicates *predicates, char const *const *fields, int length)](#*) | Function pointer. Configure predicates to group query results by specified columns.This method is similar GROUP BY the SQL statement. |
| [OH_Predicates *(\*in)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Configure the predicate to match the specified field and the value within the given array range.This method is similar IN the SQL statement. |
| [OH_Predicates *(\*notIn)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)](#*) | Function pointer.Configure the predicate to match the specified field and the value not within the given array range.This method is similar NOT IN the SQL statement. |
| [OH_Predicates *(\*clear)(OH_Predicates *predicates)](#*) | Function pointer. Initialize OH_Predicates object. |
| [int (\*destroy)(OH_Predicates *predicates)](#destroy) | Destroy the [OH_Predicates](capi-rdb-oh-predicates.md) object and reclaim the memory occupied by the object. |

## Member function description

### *()

```c
OH_Predicates *(*equalTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer. Restricts the value of the field to be equal to the specified value to the predicates.This method is similar to = of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*notEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be not equal to the specified value to the predicates.This method is similar to != of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*beginWrap)(OH_Predicates *predicates)
```

**Description**

Function pointer. Add left parenthesis to predicate.This method is similar to ( of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*endWrap)(OH_Predicates *predicates)
```

**Description**

Function pointer. Add right parenthesis to predicate.This method is similar to ) of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*orOperate)(OH_Predicates *predicates)
```

**Description**

Function pointer. Adds an or condition to the predicates.This method is similar to OR of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*andOperate)(OH_Predicates *predicates)
```

**Description**

Function pointer. Adds an and condition to the predicates.This method is similar to AND of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*isNull)(OH_Predicates *predicates, const char *field)
```

**Description**

Function pointer. Restricts the value of the field which is null to the predicates.This method is similar to IS NULL of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*isNotNull)(OH_Predicates *predicates, const char *field)
```

**Description**

Function pointer. Restricts the value of the field which is not null to the predicates.This method is similar to IS NOT NULL of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*like)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer. Restricts the value of the field to be like the specified value to the predicates.This method is similar to LIKE of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*between)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer. Restricts the value of the field to be between the specified value to the predicates.This method is similar to BETWEEN of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*notBetween)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be not between the specified value to the predicates.This method is similar to NOT BETWEEN of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*greaterThan)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be greater than the specified value to the predicates.This method is similar to > of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*lessThan)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be less than the specified value to the predicates.This method is similar to < of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*greaterThanOrEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be greater than or equal to the specified value to the predicates.This method is similar to >= of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*lessThanOrEqualTo)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Restricts the value of the field to be less than or equal to the specified value to the predicates.This method is similar to <= of the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*orderBy)(OH_Predicates *predicates, const char *field, OH_OrderType type)
```

**Description**

Function pointer. Restricts the ascending or descending order of the return list.When there are several orders, the one close to the head has the highest priority.This method is similar ORDER BY the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_OrderType](capi-oh-predicates-h.md#oh_ordertype) type | Indicates the sort [OH_OrderType](capi-oh-predicates-h.md#oh_ordertype) type. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_OrderType


### *()

```c
OH_Predicates *(*distinct)(OH_Predicates *predicates)
```

**Description**

Function pointer. Configure predicates to filter duplicate records and retain only one of them.This method is similar DISTINCT the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*limit)(OH_Predicates *predicates, unsigned int value)
```

**Description**

Function pointer. Predicate for setting the maximum number of data records.This method is similar LIMIT the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  unsigned int value | Indicates the maximum number of records. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*offset)(OH_Predicates *predicates, unsigned int rowOffset)
```

**Description**

Function pointer. Configure the predicate to specify the starting position of the returned result.This method is similar OFFSET the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  unsigned int rowOffset | Indicates the number of rows to offset from the beginning. The value is a positive integer. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*groupBy)(OH_Predicates *predicates, char const *const *fields, int length)
```

**Description**

Function pointer. Configure predicates to group query results by specified columns.This method is similar GROUP BY the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  char const *const *fields | Indicates the column names that the grouping depends on. |
|  int length | Indicates the length of fields. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### *()

```c
OH_Predicates *(*in)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Configure the predicate to match the specified field and the value within the given array range.This method is similar IN the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*notIn)(OH_Predicates *predicates, const char *field, OH_VObject *valueObject)
```

**Description**

Function pointer.Configure the predicate to match the specified field and the value not within the given array range.This method is similar NOT IN the SQL statement.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |
|  const char *field | Indicates the column name in the database table. |
|  [OH_VObject](capi-rdb-oh-vobject.md) *valueObject | Represents a pointer to an [OH_VObject](capi-rdb-oh-vobject.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates, OH_VObject


### *()

```c
OH_Predicates *(*clear)(OH_Predicates *predicates)
```

**Description**

Function pointer. Initialize OH_Predicates object.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) | Returns the self. |

**Reference**:

OH_Predicates


### destroy()

```c
int (*destroy)(OH_Predicates *predicates)
```

**Description**

Destroy the [OH_Predicates](capi-rdb-oh-predicates.md) object and reclaim the memory occupied by the object.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Predicates](capi-rdb-oh-predicates.md) *predicates | Represents a pointer to an [OH_Predicates](capi-rdb-oh-predicates.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns the status code of the execution.. |

**Reference**:

OH_Predicates



