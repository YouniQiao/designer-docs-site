# @ohos.app.ability.InsightIntentDecorator

## Modules to Import

```TypeScript
import { InsightIntentFunction,InsightIntentForm,InsightIntentLink,InsightIntentEntity,LinkParamCategory,InsightIntentPage,InsightIntentEntry,InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [EntryIntentDecoratorInfo](arkts-entryintentdecoratorinfo-i.md) | EntryIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述 [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry) 装饰器支持的参数。 |
| [FormIntentDecoratorInfo](arkts-formintentdecoratorinfo-i.md) | FormIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述 [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) 装饰器支持的参数。 |
| [FunctionIntentDecoratorInfo](arkts-functionintentdecoratorinfo-i.md) | [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod) 装饰器的参数类型，当前全部属性均继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}。 |
| [IntentDecoratorInfo](arkts-intentdecoratorinfo-i.md) | 意图装饰器的通用属性，用于定义意图的基本信息（包括意图名称、意图版本号）。适用于本模块的所有装饰器。 > **说明：** > > 如果根据schema与intentVersion字段，在标准意图列表存在匹配的标准意图，系统会将intentName、domain、llmDescription、keywords、parameters、result字段均设置为标准 > 意图的相应字段值。 |
| [IntentEntityDecoratorInfo](arkts-intententitydecoratorinfo-i.md) | 用于描述 [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) 装饰器支持的参数。 |
| [LinkIntentDecoratorInfo](arkts-linkintentdecoratorinfo-i.md) | LinkIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述 [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器支持的参数，例如应用间跳转需要的uri信息。 |
| [LinkIntentParamMapping](arkts-linkintentparammapping-i.md) | LinkIntentParamMapping是 [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器的意图参数和uri信息的映射。 |
| [PageIntentDecoratorInfo](arkts-pageintentdecoratorinfo-i.md) | PageIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述 [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) 装饰器支持的参数，例如目标页面的 [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)名称。 |

### Enums

| Name | Description |
| --- | --- |
| [LinkParamCategory](arkts-linkparamcategory-e.md) | [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) 装饰器的意图参数类别，用于定义意图参数的传递形式。 |

