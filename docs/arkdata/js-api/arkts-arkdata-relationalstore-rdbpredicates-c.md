# RdbPredicates

Defines the predicates for an RDB store. This class determines whether the conditional expression for the RDB store is true or false. Multiple predicates statements can be concatenated by using **and()** by default.**RdbPredicates** cannot be passed across threads using Sendable.

**Since:** 9

<!--Device-relationalStore-class RdbPredicates--><!--Device-relationalStore-class RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

<a id="and"></a>
## and

```TypeScript
and(): RdbPredicates
```

Creates an **RdbPredicates** object to add the AND condition.

**Since:** 9

<!--Device-RdbPredicates-and(): RdbPredicates--><!--Device-RdbPredicates-and(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

<a id="beginwrap"></a>
## beginWrap

```TypeScript
beginWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a left parenthesis.

**Since:** 9

<!--Device-RdbPredicates-beginWrap(): RdbPredicates--><!--Device-RdbPredicates-beginWrap(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

<a id="beginswith"></a>
## beginsWith

```TypeScript
beginsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that begin with the given value.

**Since:** 9

<!--Device-RdbPredicates-beginsWith(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-beginsWith(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="between"></a>
## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are within the given range (including the min.and max. values) in the specified column.

**Since:** 9

<!--Device-RdbPredicates-between(field: string, low: ValueType, high: ValueType): RdbPredicates--><!--Device-RdbPredicates-between(field: string, low: ValueType, high: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value of the range to set. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value of the range to set. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor(name: string)
```

Defines a constructor used to create an **RdbPredicates** object.

**Since:** 9

<!--Device-RdbPredicates-constructor(name: string)--><!--Device-RdbPredicates-constructor(name: string)-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Database table name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="contains"></a>
## contains

```TypeScript
contains(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that contain the given value.

**Since:** 9

<!--Device-RdbPredicates-contains(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-contains(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="distinct"></a>
## distinct

```TypeScript
distinct(): RdbPredicates
```

Creates an **RdbPredicates** object to filter out duplicate records.

**Since:** 9

<!--Device-RdbPredicates-distinct(): RdbPredicates--><!--Device-RdbPredicates-distinct(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object that can filter out duplicate records. |

<a id="endwrap"></a>
## endWrap

```TypeScript
endWrap(): RdbPredicates
```

Creates an **RdbPredicates** object to add a right parenthesis.

**Since:** 9

<!--Device-RdbPredicates-endWrap(): RdbPredicates--><!--Device-RdbPredicates-endWrap(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

<a id="endswith"></a>
## endsWith

```TypeScript
endsWith(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that end with the given value.

**Since:** 9

<!--Device-RdbPredicates-endsWith(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-endsWith(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="equalto"></a>
## equalTo

```TypeScript
equalTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are equal to the given value.

**Since:** 9

<!--Device-RdbPredicates-equalTo(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-equalTo(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="glob"></a>
## glob

```TypeScript
glob(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that match the given string.

**Since:** 9

<!--Device-RdbPredicates-glob(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-glob(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match.<br>Wildcards are supported. An asterisk (*) indicates zero, one, or multiple digits or characters, and a question mark (?) indicates a single digit or character. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are greater than the given value in the specified column.

**Since:** 9

<!--Device-RdbPredicates-greaterThan(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-greaterThan(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are greater than or equal to the given value in the specified column.

**Since:** 9

<!--Device-RdbPredicates-greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="groupby"></a>
## groupBy

```TypeScript
groupBy(fields: Array<string>): RdbPredicates
```

Creates a **RdbPredicates** object to group the query results based on the specified columns.

**Since:** 9

<!--Device-RdbPredicates-groupBy(fields: Array<string>): RdbPredicates--><!--Device-RdbPredicates-groupBy(fields: Array<string>): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | Array&lt;string&gt; | Yes | Names of columns to group. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | Predicates that group rows with the same value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="having"></a>
## having

```TypeScript
having(conditions: string, args?: Array<ValueType>): RdbPredicates
```

Filters for group data that meets the conditions.

**Since:** 20

<!--Device-RdbPredicates-having(conditions: string, args?: Array<ValueType>): RdbPredicates--><!--Device-RdbPredicates-having(conditions: string, args?: Array<ValueType>): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| conditions | string | Yes | Condition used to filter the data obtained using [groupBy](arkts-arkdata-relationalstore-rdbpredicates-c.md#groupby-1). This parameter cannot be empty and must be used with [groupBy](arkts-arkdata-relationalstore-rdbpredicates-c.md#groupby-1). |
| args | Array&lt;ValueType&gt; | No | Parameters used in **conditions**, which replace the placeholder in the conditional statement. If this parameter is not specified, the default value is an empty array. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [14800001](../errorcode-data-rdb.md#14800001-invalid-arguments) | Invalid arguments. Possible causes: 1. Parameter is out of valid range;<br>2. Missing GROUP BY clause. |

<a id="in"></a>
## in

```TypeScript
in(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are in the given range in the specified column.

> **NOTE**  
>  
> The **value** array cannot be empty; otherwise, this condition becomes invalid. As a result, the operation (  
> such as full query, update, or deletion) is performed on all data. Before calling this API, check whether the  
> **value** array is empty to avoid misoperations.

**Since:** 9

<!--Device-RdbPredicates-in(field: string, value: Array<ValueType>): RdbPredicates--><!--Device-RdbPredicates-in(field: string, value: Array<ValueType>): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | Array&lt;ValueType&gt; | Yes | Array of **ValueType**s to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="inalldevices"></a>
## inAllDevices

```TypeScript
inAllDevices(): RdbPredicates
```

Creates an **RdbPredicates** object to specify all remote devices on the network to connect during distributed database sync.

**Since:** 9

<!--Device-RdbPredicates-inAllDevices(): RdbPredicates--><!--Device-RdbPredicates-inAllDevices(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

<a id="indevices"></a>
## inDevices

```TypeScript
inDevices(devices: Array<string>): RdbPredicates
```

Creates an **RdbPredicates** object to specify the remote devices to connect on the network during distributed database sync.

> **NOTE**  
>  
> **devices** can be obtained by using [deviceManager.getAvailableDeviceListSync]  
> {@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}.  
> When calling **sync()**, you need to call **inDevices** to specify the devices. If **inDevices** is not used,  
> data will be synced to all devices on the network by default.

**Since:** 9

<!--Device-RdbPredicates-inDevices(devices: Array<string>): RdbPredicates--><!--Device-RdbPredicates-inDevices(devices: Array<string>): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| devices | Array&lt;string&gt; | Yes | IDs of the remote devices to connect. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="indexedby"></a>
## indexedBy

```TypeScript
indexedBy(field: string): RdbPredicates
```

Creates a **RdbPredicates** object to specify the index column.

**Since:** 9

<!--Device-RdbPredicates-indexedBy(field: string): RdbPredicates--><!--Device-RdbPredicates-indexedBy(field: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Name of the index column. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="isnotnull"></a>
## isNotNull

```TypeScript
isNotNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not **null**.

**Since:** 9

<!--Device-RdbPredicates-isNotNull(field: string): RdbPredicates--><!--Device-RdbPredicates-isNotNull(field: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="isnull"></a>
## isNull

```TypeScript
isNull(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are **null**.

**Since:** 9

<!--Device-RdbPredicates-isNull(field: string): RdbPredicates--><!--Device-RdbPredicates-isNull(field: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are less than the given value in the specified column.

**Since:** 9

<!--Device-RdbPredicates-lessThan(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-lessThan(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are less than or equal to the given value in the specified column.

**Since:** 9

<!--Device-RdbPredicates-lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="like"></a>
## like

```TypeScript
like(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are similar to the given value.

**Since:** 9

<!--Device-RdbPredicates-like(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-like(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Condition for fuzzy match. Generally, this parameter is used together with a wildcard.A percent sign (%) represents any character of any length, and an underscore (_) represents a single character. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="limitas"></a>
## limitAs

```TypeScript
limitAs(value: number): RdbPredicates
```

Creates a **RdbPredicates** object to limit the number of records.

**Since:** 9

<!--Device-RdbPredicates-limitAs(value: int): RdbPredicates--><!--Device-RdbPredicates-limitAs(value: int): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of data records. The value should be a positive integer. If a value less than or equal to **0** is specified, the number of records is not limited. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | Predicates that specify the maximum number of records. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="notbetween"></a>
## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are out of the given range (excluding the min.and max. values) in the specified column.

**Since:** 9

<!--Device-RdbPredicates-notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates--><!--Device-RdbPredicates-notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value of the range to set. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value of the range to set. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="notcontains"></a>
## notContains

```TypeScript
notContains(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that do not contain the given value in the specified column.

**Since:** 12

<!--Device-RdbPredicates-notContains(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-notContains(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="notequalto"></a>
## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not equal to the given value.

**Since:** 9

<!--Device-RdbPredicates-notEqualTo(field: string, value: ValueType): RdbPredicates--><!--Device-RdbPredicates-notEqualTo(field: string, value: ValueType): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="notin"></a>
## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records that are out of the given range in the specified column.

**Since:** 9

<!--Device-RdbPredicates-notIn(field: string, value: Array<ValueType>): RdbPredicates--><!--Device-RdbPredicates-notIn(field: string, value: Array<ValueType>): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | Array&lt;ValueType&gt; | Yes | Array of **ValueType**s to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="notlike"></a>
## notLike

```TypeScript
notLike(field: string, value: string): RdbPredicates
```

Creates an **RdbPredicates** object to search for the records in the specified column that are not similar to the given value.

**Since:** 12

<!--Device-RdbPredicates-notLike(field: string, value: string): RdbPredicates--><!--Device-RdbPredicates-notLike(field: string, value: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |
| value | string | Yes | Condition for fuzzy match. Generally, this parameter is used together with a wildcard.A percent sign (%) represents any character of any length, and an underscore (_) represents a single character. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="offsetas"></a>
## offsetAs

```TypeScript
offsetAs(rowOffset: number): RdbPredicates
```

Creates an **RdbPredicates** object to set the start position of the query result. This API must be used together with **limitAs**. Otherwise, no result will be returned. To query all rows after the specified offset, pass in a parameter less than or equal to **0** in **limitAs**.

**Since:** 9

<!--Device-RdbPredicates-offsetAs(rowOffset: int): RdbPredicates--><!--Device-RdbPredicates-offsetAs(rowOffset: int): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rowOffset | number | Yes | Start position of the query result. By default, the start position is the beginning of the result set. If **rowOffset** is a negative number, the start position is the beginning of the result set.If **rowOffset** exceeds the end of the result set, the query result is empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | Predicates that specify the start position of the returned result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="or"></a>
## or

```TypeScript
or(): RdbPredicates
```

Creates an **RdbPredicates** object to add the OR condition.

**Since:** 9

<!--Device-RdbPredicates-or(): RdbPredicates--><!--Device-RdbPredicates-or(): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

<a id="orderbyasc"></a>
## orderByAsc

```TypeScript
orderByAsc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in ascending order.

**Since:** 9

<!--Device-RdbPredicates-orderByAsc(field: string): RdbPredicates--><!--Device-RdbPredicates-orderByAsc(field: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="orderbydesc"></a>
## orderByDesc

```TypeScript
orderByDesc(field: string): RdbPredicates
```

Creates an **RdbPredicates** object to sort the records in the specified column in descending order.

**Since:** 9

<!--Device-RdbPredicates-orderByDesc(field: string): RdbPredicates--><!--Device-RdbPredicates-orderByDesc(field: string): RdbPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the database table. |

**Return value:**

| Type | Description |
| --- | --- |
| [RdbPredicates](arkts-arkdata-rdb-rdbpredicates-c.md) | **RdbPredicates** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

