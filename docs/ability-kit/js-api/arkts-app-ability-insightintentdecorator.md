# @ohos.app.ability.InsightIntentDecorator

## Modules to Import

```TypeScript
import { InsightIntentFunction, InsightIntentForm, InsightIntentLink, InsightIntentEntity, LinkParamCategory, InsightIntentPage, InsightIntentEntry, InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [EntryIntentDecoratorInfo](arkts-ability-entryintentdecoratorinfo-i.md) | Inherits from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md) and is used to describe the parameters supported bythe[@InsightIntentEntry](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry) decorator. |
| [FormIntentDecoratorInfo](arkts-ability-formintentdecoratorinfo-i.md) | Inherits from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md) and is used to describe the parameters supported bythe[@InsightIntentForm](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) decorator. |
| [FunctionIntentDecoratorInfo](arkts-ability-functionintentdecoratorinfo-i.md) | Parameter type of the[@InsightIntentFunctionMethod](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod) decorator. All properties inherit from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md). |
| [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md) | Common properties for intent decorators, used to define basic information about an intent (including the intent nameand version number). It applies to all decorators provided by this module.&gt; **NOTE**&gt;&gt; If a matching intent is found in the standard intent list based on the **schema** and **intentVersion** fields, the&gt; system automatically populates the **intentName**, **domain**, **llmDescription**, **keywords**, **parameters**,&gt; and **result** fields with the values from the matching standard intent. |
| [IntentEntityDecoratorInfo](arkts-ability-intententitydecoratorinfo-i.md) | Describes the parameters supported by the[@InsightIntentEntity](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity) decorator. |
| [LinkIntentDecoratorInfo](arkts-ability-linkintentdecoratorinfo-i.md) | LinkIntentDecoratorInfo inherits from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md) and describes the parameterssupported by the[@InsightIntentLink](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) decorator, such as the URI information required for application redirection. |
| [LinkIntentParamMapping](arkts-ability-linkintentparammapping-i.md) | LinkIntentParamMapping defines the mapping between intent parameters and URI information for the[@InsightIntentLink](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) decorator. |
| [PageIntentDecoratorInfo](arkts-ability-pageintentdecoratorinfo-i.md) | PageIntentDecoratorInfo inherits from [IntentDecoratorInfo](arkts-ability-intentdecoratorinfo-i.md) and describes the parameterssupported by the[@InsightIntentPage](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) decorator, such as the name of[NavDestination](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10) of thetarget page. |

### Enums

| Name | Description |
| --- | --- |
| [LinkParamCategory](arkts-ability-linkparamcategory-e.md) | Enumerates the intent parameter categories available for the[@InsightIntentLink](../../../../reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink) decorator. The enum is used to define how intent parameters should be passed. |

