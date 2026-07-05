# PageIntentInfo

PageIntentInfo用于描述 [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage) 装饰器支持的参数，例如目标页面的 [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)名称。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## navigationId

```TypeScript
readonly navigationId: string
```

表示与意图绑定[Navigation]@internal/component/ets/navigation的id。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## uiAbility

```TypeScript
readonly uiAbility: string
```

Ability名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## pagePath

```TypeScript
readonly pagePath: string
```

页面名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## navDestinationName

```TypeScript
readonly navDestinationName: string
```

表示与意图绑定 [NavDestination组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)的名称 。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

