# RdbPredicates

Defines the predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false. Multiple predicates statements can be concatenated by using **and()** by default. **RdbPredicates** cannot be passed across threads using Sendable.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## and

```TypeScript
and(): RdbPredicates
```

Creates an **RdbPredicates** object to add the AND condition.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

## beginsWith

```TypeScript
beginsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that begin with the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## beginWrap

```TypeScript
beginWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a left parenthesis.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are within the given range (including the min. and max. values) in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| low | ValueType | 是 | Minimum value of the range to set. |
| high | ValueType | 是 | Maximum value of the range to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## constructor

```TypeScript
constructor(name: string)
```

Defines a constructor used to create an **RdbPredicates** object.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Database table name. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## contains

```TypeScript
contains(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that contain the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## distinct

```TypeScript
distinct(): RdbPredicates
```

Creates an **RdbPredicates** object to filter out duplicate records.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object that can filter out duplicate records. |

## endsWith

```TypeScript
endsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that end with the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## endWrap

```TypeScript
endWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a right parenthesis.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

## equalTo

```TypeScript
equalTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are equal to the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## glob

```TypeScript
glob(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that match the given string.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. Wildcards are supported. An asterisk () indicates zero, one, or  multiple digits or characters, and a question mark (?) indicates a single digit or character. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are greater than the given value in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are greater than or equal to the given value in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## groupBy

```TypeScript
groupBy(fields: Array<string>): RdbPredicates
```

Creates a **RdbPredicates** object to group the query results based on the specified columns.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fields | Array&lt;string> | 是 | Names of columns to group. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | Predicates that group rows with the same value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## having

```TypeScript
having(conditions: string, args?: Array<ValueType>): RdbPredicates
```

Filters for group data that meets the conditions.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| conditions | string | 是 | Condition used to filter the data obtained using  [groupBy]relationalStore.RdbPredicates.groupBy. This parameter cannot be empty and must be used with  [groupBy]relationalStore.RdbPredicates.groupBy. |
| args | Array&lt;ValueType> | 否 | Parameters used in conditions, which replace the placeholder in the  conditional statement. If this parameter is not specified, the default value is an empty array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid arguments. Possible causes: 1. Parameter is out of valid range;  2. Missing GROUP BY clause. |

## in

```TypeScript
in(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are in the given range in the specified column. > **NOTE** > > The **value** array cannot be empty; otherwise, this condition becomes invalid. As a result, the operation ( > such as full query, update, or deletion) is performed on all data. Before calling this API, check whether the > **value** array is empty to avoid misoperations.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | Array&lt;ValueType> | 是 | Array of ValueTypes to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## inAllDevices

```TypeScript
inAllDevices(): RdbPredicates
```

Creates an **RdbPredicates** object to specify all remote devices on the network to connect during distributed database sync.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

## inDevices

```TypeScript
inDevices(devices: Array<string>): RdbPredicates
```

Creates an **RdbPredicates** object to specify the remote devices to connect on the network during distributed database sync. > **NOTE** > > **devices** can be obtained by using [deviceManager.getAvailableDeviceListSync] > {@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}. > When calling **sync()**, you need to call **inDevices** to specify the devices. If **inDevices** is not used, > data will be synced to all devices on the network by default.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| devices | Array&lt;string> | 是 | IDs of the remote devices to connect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## indexedBy

```TypeScript
indexedBy(field: string): RdbPredicates
```

Creates a **RdbPredicates** object to specify the index column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Name of the index column. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## inValues

```TypeScript
inValues(field: string, value: Array<ValueType>): RdbPredicates
```

Configure RdbPredicates to match the specified field whose data type is ValueType array and values are within a given range.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | 是 | Indicates the values to match with {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | - The SQL statement with the specified {@link RdbPredicates}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## isNotNull

```TypeScript
isNotNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not **null**.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## isNull

```TypeScript
isNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are **null**.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## lessThan

```TypeScript
lessThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are less than the given value in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are less than or equal to the given value in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## like

```TypeScript
like(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are similar to the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Condition for fuzzy match. Generally, this parameter is used together with a wildcard.  A percent sign (%) represents any character of any length, and an underscore (_) represents a single  character. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## limitAs

```TypeScript
limitAs(value: int): RdbPredicates
```

Creates a **RdbPredicates** object to limit the number of records.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | int | 是 | Maximum number of data records. The value should be a positive integer. If a value less  than or equal to 0 is specified, the number of records is not limited. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | Predicates that specify the maximum number of records. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are out of the given range (excluding the min. and max. values) in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| low | ValueType | 是 | Minimum value of the range to set. |
| high | ValueType | 是 | Maximum value of the range to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## notContains

```TypeScript
notContains(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that do not contain the given value in the specified column.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not equal to the given value.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are out of the given range in the specified column.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | Array&lt;ValueType> | 是 | Array of ValueTypes to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## notInValues

```TypeScript
notInValues(field: string, value: Array<ValueType>): RdbPredicates
```

Configure RdbPredicates to match the specified field whose data type is ValueType array and values are out of a given range.

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Indicates the column name in the database table. |
| value | Array&lt;ValueType> | 是 | Indicates the values to match with {@link RdbPredicates}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | - The SQL statement with the specified {@link RdbPredicates}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## notLike

```TypeScript
notLike(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not similar to the given value.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |
| value | string | 是 | Condition for fuzzy match. Generally, this parameter is used together with a wildcard.  A percent sign (%) represents any character of any length, and an underscore (_) represents a single  character. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## offsetAs

```TypeScript
offsetAs(rowOffset: int): RdbPredicates
```

Creates an **RdbPredicates** object to set the start position of the query result. This API must be used together with **limitAs**. Otherwise, no result will be returned. To query all rows after the specified offset, pass in a parameter less than or equal to **0** in **limitAs**.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rowOffset | int | 是 | Start position of the query result. By default, the start position is the beginning of  the result set. If rowOffset is a negative number, the start position is the beginning of the result set.  If rowOffset exceeds the end of the result set, the query result is empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | Predicates that specify the start position of the returned result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## or

```TypeScript
or(): RdbPredicates
```

Creates an **RdbPredicates** object to add the OR condition.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

## orderByAsc

```TypeScript
orderByAsc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in ascending order.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## orderByDesc

```TypeScript
orderByDesc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in descending order.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

