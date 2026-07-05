# EmbeddedUIExtensionAbility

EmbeddedUIExtensionAbility为开发者提供了跨进程界面嵌入的能力，继承自 [UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)。 开发者通过实现EmbeddedUIExtensionAbility，为本应用提供跨进程界面嵌入能力。例如，开发者可以在[UIAbility]@ohos.app.ability.UIAbility的页面中通过 [EmbeddedComponent]@internal/component/ets/embedded_component嵌入本应用的EmbeddedUIExtensionAbility提供的界面。 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中无法被启动。

**Inheritance:** EmbeddedUIExtensionAbilityextends: UIExtensionAbility.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { EmbeddedUIExtensionAbility } from '@kit.AbilityKit';
```

