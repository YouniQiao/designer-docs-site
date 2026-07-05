# EntryIntentDecoratorInfo

EntryIntentDecoratorInfo继承自[IntentDecoratorInfo](arkts-intentdecoratorinfo-i.md#IntentDecoratorInfo)，用于描述 [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry) 装饰器支持的参数。

**Inheritance:** EntryIntentDecoratorInfoextends: IntentDecoratorInfo.

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { InsightIntentFunction,InsightIntentForm,InsightIntentLink,InsightIntentEntity,LinkParamCategory,InsightIntentPage,InsightIntentEntry,InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## executeMode

```TypeScript
executeMode: insightIntent.ExecuteMode[]
```

表示意图调用执行模式。即拉起绑定的Ability时支持的执行模式。

**Type:** insightIntent.ExecuteMode[]

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
executeMode?: insightIntent.ExecuteMode[]
```

The execute mode of the intent. For UIAbility, the parameter can be set to insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND or insightIntent.ExecuteMode.UI_ABILITY_UI_ABILITY_BACKGROUND or both of them.

**Type:** insightIntent.ExecuteMode[]

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## abilityName

```TypeScript
abilityName: string
```

表示与意图绑定的Ability名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

