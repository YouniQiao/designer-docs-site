# IntentResult

意图执行的返回结果，支持[泛型类型](docroot://quick-start/introduction-to-arkts.md#泛型类和接口)。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@kit.AbilityKit';
```

## result

```TypeScript
result?: T
```

意图执行返回的结果，通常会包含需要返回给系统入口的数据。

**Type:** T

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## code

```TypeScript
code: int
```

意图执行返回的错误码，由开发者定义。

**Type:** int

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

