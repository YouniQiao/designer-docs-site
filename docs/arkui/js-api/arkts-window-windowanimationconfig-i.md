# WindowAnimationConfig

窗口动画参数配置。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## duration

```TypeScript
duration?: long
```

动画播放的时长，单位毫秒（ms）。 默认值：0，最大值：3000。 根据动画曲线类型决定是否必填。

**Type:** long

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## param

```TypeScript
param?: WindowAnimationCurveParam
```

动画曲线参数，根据动画曲线类型决定是否必填。

**Type:** WindowAnimationCurveParam

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## curve

```TypeScript
curve: WindowAnimationCurve
```

动画曲线类型。

**Type:** WindowAnimationCurve

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

