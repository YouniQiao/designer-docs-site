# PageIntentDecoratorInfo

PageIntentDecoratorInfo继承自[IntentDecoratorInfo](arkts-intentdecoratorinfo-i.md#IntentDecoratorInfo)，用于描述 [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) 装饰器支持的参数，例如目标页面的 [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)名称。

**Inheritance:** PageIntentDecoratorInfoextends: IntentDecoratorInfo.

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { InsightIntentFunction,InsightIntentForm,InsightIntentLink,InsightIntentEntity,LinkParamCategory,InsightIntentPage,InsightIntentEntry,InsightIntentFunctionMethod } from '@kit.AbilityKit';
```

## navigationId

```TypeScript
navigationId?: string
```

表示与意图绑定的[Navigation组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#属性)的id属性。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uiAbility

```TypeScript
uiAbility?: string
```

表示与意图绑定的UIAbility名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## pagePath

```TypeScript
pagePath: string
```

表示与意图绑定的页面路径，该页面需要是一个实际存在的文件。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## navDestinationName

```TypeScript
navDestinationName?: string
```

表示与意图绑定 [NavDestination组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)的名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

