# ParticlePropertyAnimation

设置粒子属性生命周期。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## startMillis

```TypeScript
startMillis: number
```

动画开始时间。 单位：毫秒。 取值范围：[0, +∞)。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## curve

```TypeScript
curve?: Curve | ICurve
```

设置动画曲线。 默认值：Curve.Linear

**Type:** Curve | ICurve

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## from

```TypeScript
from: T
```

属性起始值。非法输入取对应属性的默认值。

**Type:** T

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## to

```TypeScript
to: T
```

属性目标值。非法输入取对应属性的默认值。

**Type:** T

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endMillis

```TypeScript
endMillis: number
```

动画结束时间。 单位：毫秒。 取值范围：[0, +∞)。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

