# LinkIntentDecoratorInfo

LinkIntentDecoratorInfo继承自[IntentDecoratorInfo](arkts-intentdecoratorinfo-i.md#IntentDecoratorInfo)，用于描述 [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器支持的参数，例如应用间跳转需要的uri信息。

**Inheritance:** LinkIntentDecoratorInfoextends: IntentDecoratorInfo.

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { InsightIntentFunction,InsightIntentForm,InsightIntentLink,InsightIntentEntity,LinkParamCategory,InsightIntentPage,InsightIntentEntry,InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## paramMappings

```TypeScript
paramMappings?: LinkIntentParamMapping[]
```

意图参数和uri信息的映射。

**Type:** LinkIntentParamMapping[]

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uri

```TypeScript
uri: string
```

表示意图的uri信息。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

