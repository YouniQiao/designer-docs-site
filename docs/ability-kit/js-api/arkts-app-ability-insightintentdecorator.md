# @ohos.app.ability.InsightIntentDecorator

## Modules to Import

```TypeScript
import { InsightIntentFunction, InsightIntentForm, InsightIntentLink, InsightIntentEntity, LinkParamCategory, InsightIntentPage, InsightIntentEntry, InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [EntryIntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-entryintentdecoratorinfo-i.md) | Inherits from [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md) and is used to describe the parameters supported by the [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry)decorator. |
| [FormIntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-formintentdecoratorinfo-i.md) | Inherits from [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md) and is used to describe the parameters supported by the [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform)decorator. |
| [FunctionIntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-functionintentdecoratorinfo-i.md) | Parameter type of the [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod)decorator. All properties inherit from [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md). |
| [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md) | Common properties for intent decorators, used to define basic information about an intent (including the intent name and version number). It applies to all decorators provided by this module. |
| [IntentEntityDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intententitydecoratorinfo-i.md) | Describes the parameters supported by the [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)decorator. |
| [LinkIntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-linkintentdecoratorinfo-i.md) | LinkIntentDecoratorInfo inherits from [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md) and describes the parameters supported by the [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)decorator, such as the URI information required for application redirection. |
| [LinkIntentParamMapping](arkts-ability-app-ability-insightintentdecorator-linkintentparammapping-i.md) | LinkIntentParamMapping defines the mapping between intent parameters and URI information for the [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)decorator. |
| [PageIntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-pageintentdecoratorinfo-i.md) | PageIntentDecoratorInfo inherits from [IntentDecoratorInfo](arkts-ability-app-ability-insightintentdecorator-intentdecoratorinfo-i.md) and describes the parameters supported by the [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage)decorator, such as the name of [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10) of the target page. |

### Enums

| Name | Description |
| --- | --- |
| [LinkParamCategory](arkts-ability-app-ability-insightintentdecorator-linkparamcategory-e.md) | Enumerates the intent parameter categories available for the [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)decorator. The enum is used to define how intent parameters should be passed. |

