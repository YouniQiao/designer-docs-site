# StartAbilityParameter

定义启动Ability参数，可以作为入参，调用 [startAbility]./../@ohos.ability.featureAbility:featureAbility.startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>) 启动指定的Ability。

**Since:** 6

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## want

```TypeScript
want: Want
```

启动Ability的want信息。

**Type:** Want

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## abilityStartSetting

```TypeScript
abilityStartSetting?: { [key: string]: any }
```

启动Ability的特殊属性，当开发者启动Ability时，该属性可以作为调用中的输入参数传递。

**Type:** { [key: string]: any }

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## abilityStartSettings

```TypeScript
abilityStartSettings?: Record<string, Object>
```

启动Ability的特殊属性，当开发者启动Ability时，该属性可以作为调用中的输入参数传递。推荐使用该属性替代abilityStartSetting，设置该属性后，abilityStartSetting不再生效。

**Type:** Record<string, Object>

**Since:** 11

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

