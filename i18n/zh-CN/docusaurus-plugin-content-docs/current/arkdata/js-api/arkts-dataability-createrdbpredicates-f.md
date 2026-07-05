# createRdbPredicates

## createRdbPredicates

```TypeScript
function createRdbPredicates(name: string, dataAbilityPredicates: DataAbilityPredicates): rdb.RdbPredicates
```

Creates an **RdbPredicates** object with a table name and **DataAbilityPredicates** object.

**起始版本：** 7

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of a database table. |
| dataAbilityPredicates | DataAbilityPredicates | 是 | DataAbilityPredicates object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| rdb.RdbPredicates | RdbPredicates object created. |

**示例：**

```TypeScript
let dataAbilityPredicates = new dataAbility.DataAbilityPredicates()
dataAbilityPredicates.equalTo("NAME", "Rose")
// EMPLOYEE是使用关系型数据库创建的表。
let predicates = dataAbility.createRdbPredicates("EMPLOYEE", dataAbilityPredicates)

```

