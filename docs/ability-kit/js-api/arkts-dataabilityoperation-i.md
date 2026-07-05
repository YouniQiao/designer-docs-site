# DataAbilityOperation

定义DataAbility数据操作方式，可以作为 [executeBatch](docroot://reference/apis-ability-kit/js-apis-inner-ability-dataAbilityHelper.md#dataabilityhelperexecutebatch) 的入参，操作数据库的信息。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## valueBackReferences

```TypeScript
valueBackReferences?: rdb.ValuesBucket
```

指示包含一组键值对的valuesBucket对象。

**Type:** rdb.ValuesBucket

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## predicates

```TypeScript
predicates?: dataAbility.DataAbilityPredicates
```

指示要设置的筛选条件。如果此参数为空，则操作所有数据记录。

**Type:** dataAbility.DataAbilityPredicates

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## valuesBucket

```TypeScript
valuesBucket?: rdb.ValuesBucket
```

指示要操作的数据值。

**Type:** rdb.ValuesBucket

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## expectedCount

```TypeScript
expectedCount?: number
```

指示要更新或删除的预期行数。

**Type:** number

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## interrupted

```TypeScript
interrupted?: boolean
```

指示是否可以中断批处理操作。true表示可以中断批处理操作，false表示不可中断批处理操作。

**Type:** boolean

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## type

```TypeScript
type: featureAbility.DataAbilityOperationType
```

指示数据操作类型。

**Type:** featureAbility.DataAbilityOperationType

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## uri

```TypeScript
uri: string
```

指示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。

**Type:** string

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## predicatesBackReferences

```TypeScript
predicatesBackReferences?: Map<number, number>
```

指示用作谓词中筛选条件的反向引用。

**Type:** Map<number, number>

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

