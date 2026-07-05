# DataAbilityResult

定义DataAbility数据操作结果，通过 [executeBatch](docroot://reference/apis-ability-kit/js-apis-inner-ability-dataAbilityHelper.md#dataabilityhelperexecutebatch) 操作数据库时，操作结果使用DataAbilityResult对象返回。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## count

```TypeScript
count?: number
```

指示受操作影响的数据数量。

**Type:** number

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## uri

```TypeScript
uri?: string
```

指示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。

**Type:** string

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

