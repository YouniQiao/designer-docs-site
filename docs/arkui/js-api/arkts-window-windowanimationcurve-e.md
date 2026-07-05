# WindowAnimationCurve

```TypeScript
enum WindowAnimationCurve
```

窗口动画曲线类型。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## LINEAR

```TypeScript
LINEAR = 0
```

表示动画从头到尾的速度都是相同的。 使用该曲线类型时[WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中duration必填。 使用该曲线类型时[WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中param选填，且不生效。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## INTERPOLATION_SPRING

```TypeScript
INTERPOLATION_SPRING = 1
```

表示插值器弹簧曲线，一条从0到1的动画曲线，实际动画值根据曲线进行插值计算。动画时间由曲线参数决定，不受 [WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中的duration参数控制。 使用该曲线类型时[WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中duration选填，且不生效。 使用该曲线类型时[WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中param必填。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## CUBIC_BEZIER

```TypeScript
CUBIC_BEZIER = 2
```

表示贝塞尔曲线。 使用该曲线类型时[WindowAnimationConfig](arkts-window-windowanimationconfig-i.md#WindowAnimationConfig)中的param和duration为必填项。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

