# DataAbilityPredicates

Provides APIs for creating diverse query conditions.

**Since:** 7

<!--Device-dataAbility-class DataAbilityPredicates--><!--Device-dataAbility-class DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

## Modules to Import

```TypeScript
import { dataAbility } from '@kit.ArkData';
```

<a id="and"></a>
## and

```TypeScript
and(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add the AND condition.

**Since:** 7

<!--Device-DataAbilityPredicates-and(): DataAbilityPredicates--><!--Device-DataAbilityPredicates-and(): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object with the AND condition. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .and()
    .equalTo("SALARY", 200.5)

```

<a id="beginwrap"></a>
## beginWrap

```TypeScript
beginWrap(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add a left parenthesis. This API is similar to "(" in an SQL statement and must be used with **endWrap**.

**Since:** 7

<!--Device-DataAbilityPredicates-beginWrap(): DataAbilityPredicates--><!--Device-DataAbilityPredicates-beginWrap(): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object with a left parenthesis. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

<a id="beginswith"></a>
## beginsWith

```TypeScript
beginsWith(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that begin with the given value.

This API is similar to the percent sign (%) in SQL statements.

**Since:** 7

<!--Device-DataAbilityPredicates-beginsWith(field: string, value: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-beginsWith(field: string, value: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.beginsWith("NAME", "os")

```

<a id="between"></a>
## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are within the given range.

**Since:** 7

<!--Device-DataAbilityPredicates-between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value to match. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.between("AGE", 10, 50)

```

<a id="contains"></a>
## contains

```TypeScript
contains(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that contain the given value.

**Since:** 7

<!--Device-DataAbilityPredicates-contains(field: string, value: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-contains(field: string, value: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.contains("NAME", "os")

```

<a id="distinct"></a>
## distinct

```TypeScript
distinct(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to filter out duplicate records.

**Since:** 7

<!--Device-DataAbilityPredicates-distinct(): DataAbilityPredicates--><!--Device-DataAbilityPredicates-distinct(): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Rose").distinct()

```

<a id="endwrap"></a>
## endWrap

```TypeScript
endWrap(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add a right parenthesis. This API is similar to ")" in an SQL statement and must be used with **beginWrap**.

**Since:** 7

<!--Device-DataAbilityPredicates-endWrap(): DataAbilityPredicates--><!--Device-DataAbilityPredicates-endWrap(): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object with a right parenthesis. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

<a id="endswith"></a>
## endsWith

```TypeScript
endsWith(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that end with the given value.

This API is similar to the percent sign (%) in SQL statements.

**Since:** 7

<!--Device-DataAbilityPredicates-endsWith(field: string, value: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-endsWith(field: string, value: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.endsWith("NAME", "se")

```

<a id="equalto"></a>
## equalTo

```TypeScript
equalTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are equal to the given value.

This API is similar to the SQL equal to (=) operator.

**Since:** 7

<!--Device-DataAbilityPredicates-equalTo(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-equalTo(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")

```

<a id="glob"></a>
## glob

```TypeScript
glob(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that match the given string. Different from **like**, the input parameters of this API are case-sensitive.

**Since:** 7

<!--Device-DataAbilityPredicates-glob(field: string, value: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-glob(field: string, value: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.glob("NAME", "?h*g")

// Only the records whose value is "Lisa" in the "name" column are matched.
dataAbilityPredicates.glob("NAME", "Lisa")

// Only the records whose value is "lisa" in the "name" column are matched.
dataAbilityPredicates.glob("NAME", "lisa")

```

<a id="greaterthan"></a>
## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are greater than the given value.

**Since:** 7

<!--Device-DataAbilityPredicates-greaterThan(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-greaterThan(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.greaterThan("AGE", 18)

```

<a id="greaterthanorequalto"></a>
## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are greater than or equal to the given value.

**Since:** 7

<!--Device-DataAbilityPredicates-greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.greaterThanOrEqualTo("AGE", 18)

```

<a id="groupby"></a>
## groupBy

```TypeScript
groupBy(fields: Array<string>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to group the query results based on the specified columns.

**Since:** 7

<!--Device-DataAbilityPredicates-groupBy(fields: Array<string>): DataAbilityPredicates--><!--Device-DataAbilityPredicates-groupBy(fields: Array<string>): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | Array&lt;string&gt; | Yes | Names of columns to group. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.groupBy(["AGE", "NAME"])

```

<a id="in"></a>
## in

```TypeScript
in(field: string, value: Array<ValueType>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are in the given range.

**Since:** 7

<!--Device-DataAbilityPredicates-in(field: string, value: Array<ValueType>): DataAbilityPredicates--><!--Device-DataAbilityPredicates-in(field: string, value: Array<ValueType>): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | Array&lt;ValueType&gt; | Yes | Array of **ValueType**s to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.in("AGE", [18, 20])

```

<a id="indexedby"></a>
## indexedBy

```TypeScript
indexedBy(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to specify the index column. Before calling this API, you need to create an index column.

**Since:** 7

<!--Device-DataAbilityPredicates-indexedBy(field: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-indexedBy(field: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Name of the index. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { dataAbility, relationalStore } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  async onCreate(): Promise<void> {
    let store: relationalStore.RdbStore | undefined = undefined;
    let context = this.context;

    try {
      const STORE_CONFIG: relationalStore.StoreConfig = {
        name: 'RdbTest.db', // Database file name.
        securityLevel: relationalStore.SecurityLevel.S3,
      };
      // Table structure: EMPLOYEE (NAME, AGE, SALARY, CODES)
      const SQL_CREATE_TABLE =
        'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)'; // SQL statement for creating a data table.
      store = await relationalStore.getRdbStore(context, STORE_CONFIG);
      console.info('Succeeded in getting RdbStore.');
      await store.executeSql(SQL_CREATE_TABLE); // Create a data table.
    } catch (e) {
      const err = e as BusinessError;
      console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);
    }

    if (!store) {
      return;
    }

    // Create an index.
    const SQL_CREATE_INDEX = 'CREATE INDEX SALARY_INDEX ON EMPLOYEE(SALARY)'
    await store.executeSql(SQL_CREATE_INDEX);
    // ...

    let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
    dataAbilityPredicates.indexedBy("SALARY_INDEX")

    //  ...
  }
}

```

<a id="isnotnull"></a>
## isNotNull

```TypeScript
isNotNull(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are not **null**.

**Since:** 7

<!--Device-DataAbilityPredicates-isNotNull(field: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-isNotNull(field: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.isNotNull("NAME")

```

<a id="isnull"></a>
## isNull

```TypeScript
isNull(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are **null**.

**Since:** 7

<!--Device-DataAbilityPredicates-isNull(field: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-isNull(field: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.isNull("NAME")

```

<a id="lessthan"></a>
## lessThan

```TypeScript
lessThan(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are less than the given value.

**Since:** 7

<!--Device-DataAbilityPredicates-lessThan(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-lessThan(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.lessThan("AGE", 20)

```

<a id="lessthanorequalto"></a>
## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are less than or equal to the given value.

**Since:** 7

<!--Device-DataAbilityPredicates-lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.lessThanOrEqualTo("AGE", 20)

```

<a id="like"></a>
## like

```TypeScript
like(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are similar to the given value.

This API is similar to the SQL **like** statement.

**Since:** 7

<!--Device-DataAbilityPredicates-like(field: string, value: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-like(field: string, value: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | string | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.like("NAME", "%os%")

```

<a id="limitas"></a>
## limitAs

```TypeScript
limitAs(value: number): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to limit the number of records.

**Since:** 7

<!--Device-DataAbilityPredicates-limitAs(value: number): DataAbilityPredicates--><!--Device-DataAbilityPredicates-limitAs(value: number): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of records. The value should be a positive integer. If a value less than or equal to **0** is specified, the number of records is not limited. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Rose").limitAs(3)

```

<a id="notbetween"></a>
## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are out of the given range.

**Since:** 7

<!--Device-DataAbilityPredicates-notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| low | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Minimum value to match. |
| high | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Maximum value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.notBetween("AGE", 10, 50)

```

<a id="notequalto"></a>
## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are not equal to the given value.

This API is similar to the SQL not equal (!=) operator.

**Since:** 7

<!--Device-DataAbilityPredicates-notEqualTo(field: string, value: ValueType): DataAbilityPredicates--><!--Device-DataAbilityPredicates-notEqualTo(field: string, value: ValueType): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | [ValueType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-pasteboard-valuetype-t.md) | Yes | Value to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.notEqualTo("NAME", "lisi")

```

<a id="notin"></a>
## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are out of the given range.

**Since:** 7

<!--Device-DataAbilityPredicates-notIn(field: string, value: Array<ValueType>): DataAbilityPredicates--><!--Device-DataAbilityPredicates-notIn(field: string, value: Array<ValueType>): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |
| value | Array&lt;ValueType&gt; | Yes | Array of **ValueType**s to match. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
dataAbilityPredicates.notIn("NAME", ["Lisa", "Rose"])

```

<a id="offsetas"></a>
## offsetAs

```TypeScript
offsetAs(rowOffset: number): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to set the start position of the query result. This API must be used together with **limitAs**. Otherwise, no result will be returned. To query all rows after the specified offset,pass in **-1** in **limitAs**.

**Since:** 7

<!--Device-DataAbilityPredicates-offsetAs(rowOffset: number): DataAbilityPredicates--><!--Device-DataAbilityPredicates-offsetAs(rowOffset: number): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rowOffset | number | Yes | Start position. The value should be a positive integer. If a value less than or equal to **0** is specified, the query result is returned from the first element. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
// Display the three data records following the first three records.
dataAbilityPredicates.equalTo("NAME", "Rose").offsetAs(3).limitAs(3)

```

<a id="or"></a>
## or

```TypeScript
or(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add the OR condition.

This API is similar to the SQL **or** operator.

**Since:** 7

<!--Device-DataAbilityPredicates-or(): DataAbilityPredicates--><!--Device-DataAbilityPredicates-or(): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object with the OR condition. |

**Example**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .or()
    .equalTo("NAME", "Rose")

```

<a id="orderbyasc"></a>
## orderByAsc

```TypeScript
orderByAsc(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to sort the records in the specified column in ascending order. When there are multiple **orderByAsc**s, the first **orderByAsc** used has the highest priority.

**Since:** 7

<!--Device-DataAbilityPredicates-orderByAsc(field: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-orderByAsc(field: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
// Sort data by name first; for the records with the same name, sort them by age; for the records with the same name and age, sort them by salary in ascending order.
dataAbilityPredicates.orderByAsc("NAME").orderByAsc("AGE").orderByAsc("SALARY")

```

<a id="orderbydesc"></a>
## orderByDesc

```TypeScript
orderByDesc(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to sort the records in the specified column in descending order. When there are multiple **orderByDesc**s, the first **orderByDesc** used has the highest priority.

**Since:** 7

<!--Device-DataAbilityPredicates-orderByDesc(field: string): DataAbilityPredicates--><!--Device-DataAbilityPredicates-orderByDesc(field: string): DataAbilityPredicates-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| field | string | Yes | Column name in the table. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataAbilityPredicates](arkts-arkdata-dataability-dataabilitypredicates-c.md) | **DataAbilityPredicates** object created. |

**Example**

```TypeScript
// Sort the data by age first. For the data records with the same age, sort them by salary.
dataAbilityPredicates.orderByDesc("AGE").orderByDesc("SALARY")

```

