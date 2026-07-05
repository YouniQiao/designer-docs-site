# EntryIntentInfo

FormIntentInfo用于描述 [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform) 装饰器支持的参数，例如卡片名称。同时，该接口也可用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的卡片信 息。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## executeMode

```TypeScript
readonly executeMode: insightIntent.ExecuteMode[]
```

意图调用执行模式。即拉起绑定的Ability时支持的执行模式。

**Type:** insightIntent.ExecuteMode[]

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## abilityName

```TypeScript
readonly abilityName: string
```

Ability名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

