# Curve

Defines an interpolation curve. For details about the curves and animations, see <!--RP1-->[Bezier Curve](../../../../../design/ux-design/animation-attributes.md)<!--RP1End-->.

**Since:** 7

<!--Device-curves-enum Curve--><!--Device-curves-enum Curve-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Linear

```TypeScript
Linear
```

Linear. Indicates that the animation has the same velocity from start to finish.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Linear--><!--Device-Curve-Linear-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Ease

```TypeScript
Ease
```

Ease. Indicates that the animation starts at a low speed, then speeds up, and slows down before the end,CubicBezier(0.25, 0.1, 0.25, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Ease--><!--Device-Curve-Ease-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## EaseIn

```TypeScript
EaseIn
```

EaseIn. Indicates that the animation starts at a low speed, Cubic Bezier (0.42, 0.0, 1.0, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-EaseIn--><!--Device-Curve-EaseIn-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## EaseOut

```TypeScript
EaseOut
```

EaseOut. Indicates that the animation ends at low speed, CubicBezier (0.0, 0.0, 0.58, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-EaseOut--><!--Device-Curve-EaseOut-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## EaseInOut

```TypeScript
EaseInOut
```

EaseInOut. Indicates that the animation starts and ends at low speed, CubicBezier (0.42, 0.0, 0.58, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-EaseInOut--><!--Device-Curve-EaseInOut-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FastOutSlowIn

```TypeScript
FastOutSlowIn
```

FastOutSlowIn. Standard curve, cubic-bezier (0.4, 0.0, 0.2, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-FastOutSlowIn--><!--Device-Curve-FastOutSlowIn-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LinearOutSlowIn

```TypeScript
LinearOutSlowIn
```

LinearOutSlowIn. Deceleration curve, cubic-bezier (0.0, 0.0, 0.2, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-LinearOutSlowIn--><!--Device-Curve-LinearOutSlowIn-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## FastOutLinearIn

```TypeScript
FastOutLinearIn
```

FastOutLinearIn. Acceleration curve, cubic-bezier (0.4, 0.0, 1.0, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-FastOutLinearIn--><!--Device-Curve-FastOutLinearIn-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ExtremeDeceleration

```TypeScript
ExtremeDeceleration
```

ExtremeDeceleration. Abrupt curve, cubic-bezier (0.0, 0.0, 0.0, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-ExtremeDeceleration--><!--Device-Curve-ExtremeDeceleration-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Sharp

```TypeScript
Sharp
```

Sharp. Sharp curves, cubic-bezier (0.33, 0.0, 0.67, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Sharp--><!--Device-Curve-Sharp-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Rhythm

```TypeScript
Rhythm
```

Rhythm. Rhythmic curve, cubic-bezier (0.7, 0.0, 0.2, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Rhythm--><!--Device-Curve-Rhythm-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Smooth

```TypeScript
Smooth
```

Smooth. Smooth curves, cubic-bezier (0.4, 0.0, 0.4, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Smooth--><!--Device-Curve-Smooth-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Friction

```TypeScript
Friction
```

Friction. Damping curves, CubicBezier (0.2, 0.0, 0.2, 1.0).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Curve-Friction--><!--Device-Curve-Friction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

