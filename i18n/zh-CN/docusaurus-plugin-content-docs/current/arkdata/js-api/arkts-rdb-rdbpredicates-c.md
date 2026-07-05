# RdbPredicates

Defines predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## and

```TypeScript
and(): RdbPredicates
```

Creates an **RdbPredicates** object to add the AND condition.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.and

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
    .and()
    .equalTo("SALARY", 200.5)

```

## beginsWith

```TypeScript
beginsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that start with the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.beginsWith

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.beginsWith("NAME", "os")

```

## beginWrap

```TypeScript
beginWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a left parenthesis.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.beginWrap

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are within the specified range.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.between

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.between("AGE", 10, 50)

```

## constructor

```TypeScript
constructor(name: string)
```

A constructor used to create an **RdbPredicates** object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Database table name. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")

```

## contains

```TypeScript
contains(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that contain the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.contains

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.contains("NAME", "os")

```

## distinct

```TypeScript
distinct(): RdbPredicates
```

Creates an **RdbPredicates** object to filter out duplicate records.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.distinct

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Rose").distinct()

```

## endsWith

```TypeScript
endsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that end with the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.endsWith

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.endsWith("NAME", "se")

```

## endWrap

```TypeScript
endWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a right parenthesis.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.endWrap

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

## equalTo

```TypeScript
equalTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are equal to the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.equalTo

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "lisi")

```

## glob

```TypeScript
glob(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that match the given string.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.glob

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.glob("NAME", "?h*g")

```

## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are greater than the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.greaterThan

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.greaterThan("AGE", 18)

```

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are greater than or equal to the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.greaterThanOrEqualTo

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.greaterThanOrEqualTo("AGE", 18)

```

## groupBy

```TypeScript
groupBy(fields: Array<string>): RdbPredicates
```

Creates an **RdbPredicates** object to group the query results based on the specified columns.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.groupBy

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fields | Array&lt;string> | 是 | Names of columns to group. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.groupBy(["AGE", "NAME"])

```

## in

```TypeScript
in(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are within the specified range.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.in

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.in("AGE", [18, 20])

```

## inAllDevices

```TypeScript
inAllDevices(): RdbPredicates
```

Creates an **RdbPredicates** object to specify all remote devices on the network to connect during distributed database sync.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.inAllDevices

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.inAllDevices()

```

## inDevices

```TypeScript
inDevices(devices: Array<string>): RdbPredicates
```

Creates an **RdbPredicates** object to specify the remote devices to connect on the network during distributed database sync. > **NOTE** > The value of **devices** can be obtained by using <!--RP2--> > [deviceManager.getTrustedDeviceListSync](../../apis-distributed-service-kit/arkts-apis/arkts-devicemanager-devicemanager-i.md#getTrustedDeviceListSync) > . <!--RP2End-->The APIs of the **deviceManager** module are system interfaces and available only to system > applications.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.inDevices

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| devices | Array&lt;string> | 是 | IDs of the remote devices in the same network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
import deviceManager from '@ohos.distributedHardware.deviceManager';

let dmInstance: deviceManager.DeviceManager;
let deviceIds: Array<string> = [];
let devices: Array<string> = [];

deviceManager.createDeviceManager("com.example.appdatamgrverify", (err: BusinessError, manager: void) => {
  if (err) {
    console.error("create device manager failed, err=" + err);
    return;
  }
  dmInstance = manager;
  devices = dmInstance.getTrustedDeviceListSync();
  for (let i = 0; i < devices.length; i++) {
    deviceIds[i] = devices[i].deviceId;
  }
})

let predicates = new data_rdb.RdbPredicates("EMPLOYEE");
predicates.inDevices(deviceIds);

```

## indexedBy

```TypeScript
indexedBy(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to specify the index column.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.indexedBy

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Name of the index column. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.indexedBy("SALARY_INDEX")

```

## isNotNull

```TypeScript
isNotNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not **null**.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.isNotNull

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
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2  . Incorrect parameter types. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.isNotNull("NAME")

```

## isNull

```TypeScript
isNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are **null**.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.isNull

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.isNull("NAME")

```

## lessThan

```TypeScript
lessThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are less than the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.lessThan

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.lessThan("AGE", 20)

```

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are less than or equal to the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.lessThanOrEqualTo

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.lessThanOrEqualTo("AGE", 20)

```

## like

```TypeScript
like(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are similar to the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.like

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.like("NAME", "%os%")

```

## limitAs

```TypeScript
limitAs(value: number): RdbPredicates
```

Creates an **RdbPredicates** object to limit the number of records.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.limitAs

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | Maximum number of records. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Rose").limitAs(3)

```

## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are out of the specified range.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.notBetween

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.notBetween("AGE", 10, 50)

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not equal to the given value.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.notEqualTo

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.notEqualTo("NAME", "lisi")

```

## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are out of the specified range.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.notIn

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

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.notIn("NAME", ["Lisa", "Rose"])

```

## offsetAs

```TypeScript
offsetAs(rowOffset: number): RdbPredicates
```

Creates an **RdbPredicates** object to specify the start position of the returned result. This API must be used together with **limitAs**. Otherwise, no result will be returned. To query all rows after the specified offset, pass in **-1** in **limitAs**.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.offsetAs

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rowOffset | number | 是 | Start position, which is a positive integer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Rose").limitAs(-1).offsetAs(3)

```

## or

```TypeScript
or(): RdbPredicates
```

Creates an **RdbPredicates** object to add the OR condition.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.or

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.equalTo("NAME", "Lisa")
    .or()
    .equalTo("NAME", "Rose")

```

## orderByAsc

```TypeScript
orderByAsc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in ascending order.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.orderByAsc

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.orderByAsc("NAME")

```

## orderByDesc

```TypeScript
orderByDesc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in descending order.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.data.relationalStore:relationalStore.RdbPredicates.orderByDesc

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the database table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let predicates = new data_rdb.RdbPredicates("EMPLOYEE")
predicates.orderByDesc("AGE")

```

