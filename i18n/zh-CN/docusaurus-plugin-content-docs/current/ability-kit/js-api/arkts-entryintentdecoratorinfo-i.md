# EntryIntentDecoratorInfo

EntryIntentDecoratorInfo继承自[IntentDecoratorInfo](arkts-intentdecoratorinfo-i.md#IntentDecoratorInfo)，用于描述 [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry) 装饰器支持的参数。

**继承实现关系：** EntryIntentDecoratorInfo继承自：IntentDecoratorInfo。

**起始版本：** 20

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { InsightIntentFunction,InsightIntentForm,InsightIntentLink,InsightIntentEntity,LinkParamCategory,InsightIntentPage,InsightIntentEntry,InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## executeMode

```TypeScript
executeMode: insightIntent.ExecuteMode[]
```

表示意图调用执行模式。即拉起绑定的Ability时支持的执行模式。

**类型：** insightIntent.ExecuteMode[]

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
executeMode?: insightIntent.ExecuteMode[]
```

The execute mode of the intent. For UIAbility, the parameter can be set to insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND or insightIntent.ExecuteMode.UI_ABILITY_UI_ABILITY_BACKGROUND or both of them.

**类型：** insightIntent.ExecuteMode[]

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## abilityName

```TypeScript
abilityName: string
```

表示与意图绑定的Ability名称。

**类型：** string

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

