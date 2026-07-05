# AnimationOptions

拖拽相关的动效参数。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: number
```

动画持续时间，单位为毫秒。 默认值：1000 **说明：** - 设置小于0的值时按0处理。 - 设置浮点型类型的值时，向下取整。例如，设置值为1.2，按照1处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## curve

```TypeScript
curve?: Curve | ICurve
```

设置动画曲线。 默认值：Curve.EaseInOut

**Type:** Curve | ICurve

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

