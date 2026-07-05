# EmbeddableUIAbility

EmbeddableUIAbility组件是为原子化服务提供可嵌入式的UIAbility组件，继承自[UIAbility]@ohos.app.ability.UIAbility。 开发者通过实现EmbeddableUIAbility，为其他应用提供跳出式启动和嵌入式启动原子化服务方式。 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。

**Inheritance:** EmbeddableUIAbilityextends: UIAbility.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { EmbeddableUIAbility } from '@kit.AbilityKit';
```

## context

```TypeScript
context: EmbeddableUIAbilityContext
```

EmbeddableUIAbility组件的上下文。

**Type:** EmbeddableUIAbilityContext

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

