# DataAbilityPredicates

Provides APIs for creating diverse query conditions.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

## 导入模块

```TypeScript
import { dataAbility } from '@kit.ArkData';
```

## and

```TypeScript
and(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add the AND condition.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object with the AND condition. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .and()
    .equalTo("SALARY", 200.5)

```

## beginsWith

```TypeScript
beginsWith(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that begin with the given value. This API is similar to the percent sign (%) in SQL statements.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.beginsWith("NAME", "os")

```

## beginWrap

```TypeScript
beginWrap(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add a left parenthesis. This API is similar to "(" in an SQL statement and must be used with **endWrap**.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object with a left parenthesis. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

## between

```TypeScript
between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are within the given range.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| low | ValueType | 是 | Minimum value to match. |
| high | ValueType | 是 | Maximum value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.between("AGE", 10, 50)

```

## contains

```TypeScript
contains(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that contain the given value.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.contains("NAME", "os")

```

## distinct

```TypeScript
distinct(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to filter out duplicate records.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Rose").distinct()

```

## endsWith

```TypeScript
endsWith(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that end with the given value. This API is similar to the percent sign (%) in SQL statements.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.endsWith("NAME", "se")

```

## endWrap

```TypeScript
endWrap(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add a right parenthesis. This API is similar to ")" in an SQL statement and must be used with **beginWrap**.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object with a right parenthesis. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")
    .beginWrap()
    .equalTo("AGE", 18)
    .or()
    .equalTo("SALARY", 200.5)
    .endWrap()

```

## equalTo

```TypeScript
equalTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are equal to the given value. This API is similar to the SQL equal to (=) operator.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "lisi")

```

## glob

```TypeScript
glob(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that match the given string. Different from **like**, the input parameters of this API are case-sensitive.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.glob("NAME", "?h*g")

// 仅可匹配到"name"字段值为“Lisa” 
dataAbilityPredicates.glob("NAME", "Lisa")

// 仅可以匹配到"name"字段值为“lisa” 
dataAbilityPredicates.glob("NAME", "lisa")

```

## greaterThan

```TypeScript
greaterThan(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are greater than the given value.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.greaterThan("AGE", 18)

```

## greaterThanOrEqualTo

```TypeScript
greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are greater than or equal to the given value.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.greaterThanOrEqualTo("AGE", 18)

```

## groupBy

```TypeScript
groupBy(fields: Array<string>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to group the query results based on the specified columns.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fields | Array&lt;string> | 是 | Names of columns to group. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.groupBy(["AGE", "NAME"])

```

## in

```TypeScript
in(field: string, value: Array<ValueType>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are in the given range.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | Array&lt;ValueType> | 是 | Array of ValueTypes to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.in("AGE", [18, 20])

```

## indexedBy

```TypeScript
indexedBy(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to specify the index column. Before calling this API, you need to create an index column.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Name of the index. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

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
        name: 'RdbTest.db', // 数据库文件名
        securityLevel: relationalStore.SecurityLevel.S3,
      };
      // 表结构：EMPLOYEE (NAME, AGE, SALARY, CODES)
      const SQL_CREATE_TABLE =
        'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)'; // 建表Sql语句
      store = await relationalStore.getRdbStore(context, STORE_CONFIG);
      console.info('Succeeded in getting RdbStore.');
      await store.executeSql(SQL_CREATE_TABLE); // 创建数据表
    } catch (e) {
      const err = e as BusinessError;
      console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);
    }

    if (!store) {
      return;
    }

    // 创建索引
    const SQL_CREATE_INDEX = 'CREATE INDEX SALARY_INDEX ON EMPLOYEE(SALARY)'
    await store.executeSql(SQL_CREATE_INDEX);
    // ...

    let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
    dataAbilityPredicates.indexedBy("SALARY_INDEX")

    // ...
  }
}

```

## isNotNull

```TypeScript
isNotNull(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are not **null**.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.isNotNull("NAME")

```

## isNull

```TypeScript
isNull(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are **null**.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.isNull("NAME")

```

## lessThan

```TypeScript
lessThan(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are less than the given value.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.lessThan("AGE", 20)

```

## lessThanOrEqualTo

```TypeScript
lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are less than or equal to the given value.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.lessThanOrEqualTo("AGE", 20)

```

## like

```TypeScript
like(field: string, value: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are similar to the given value. This API is similar to the SQL **like** statement.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | string | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.like("NAME", "%os%")

```

## limitAs

```TypeScript
limitAs(value: number): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to limit the number of records.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | Maximum number of records. The value should be a positive integer. If a value less than  or equal to 0 is specified, the number of records is not limited. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Rose").limitAs(3)

```

## notBetween

```TypeScript
notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are out of the given range.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| low | ValueType | 是 | Minimum value to match. |
| high | ValueType | 是 | Maximum value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.notBetween("AGE", 10, 50)

```

## notEqualTo

```TypeScript
notEqualTo(field: string, value: ValueType): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are not equal to the given value. This API is similar to the SQL not equal (!=) operator.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | ValueType | 是 | Value to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.notEqualTo("NAME", "lisi")

```

## notIn

```TypeScript
notIn(field: string, value: Array<ValueType>): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to search for the records in the specified column that are out of the given range.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |
| value | Array&lt;ValueType> | 是 | Array of ValueTypes to match. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
dataAbilityPredicates.notIn("NAME", ["Lisa", "Rose"])

```

## offsetAs

```TypeScript
offsetAs(rowOffset: number): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to set the start position of the query result. This API must be used together with **limitAs**. Otherwise, no result will be returned. To query all rows after the specified offset, pass in **-1** in **limitAs**.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rowOffset | number | 是 | Start position. The value should be a positive integer. If a value less than or  equal to 0 is specified, the query result is returned from the first element. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
// 跳过前三条数据，显示后续三条数据
dataAbilityPredicates.equalTo("NAME", "Rose").offsetAs(3).limitAs(3)

```

## or

```TypeScript
or(): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to add the OR condition. This API is similar to the SQL **or** operator.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object with the OR condition. |

**示例：**

```TypeScript
dataAbilityPredicates.equalTo("NAME", "Lisa")
    .or()
    .equalTo("NAME", "Rose")

```

## orderByAsc

```TypeScript
orderByAsc(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to sort the records in the specified column in ascending order. When there are multiple **orderByAsc**s, the first **orderByAsc** used has the highest priority.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
// 先按“name”字段排序，相同时按“AGE”字段排序，其次按“SALARY”排序
dataAbilityPredicates.orderByAsc("NAME").orderByAsc("AGE").orderByAsc("SALARY")

```

## orderByDesc

```TypeScript
orderByDesc(field: string): DataAbilityPredicates
```

Creates a **DataAbilityPredicates** object to sort the records in the specified column in descending order. When there are multiple **orderByDesc**s, the first **orderByDesc** used has the highest priority.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| field | string | 是 | Column name in the table. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DataAbilityPredicates | DataAbilityPredicates object created. |

**示例：**

```TypeScript
// 优先按“AGE”排序，相同时按“SALARY”排序
dataAbilityPredicates.orderByDesc("AGE").orderByDesc("SALARY")

```

