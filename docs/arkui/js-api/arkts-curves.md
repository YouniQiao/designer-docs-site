# @ohos.curves

The **Curves** module provides APIs for interpolation calculation to create step, cubic Bezier, and spring curves.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [cubicBezier](arkts-arkui-cubicbezier-f.md#cubicbezier-1) | Creates a cubic Bézier curve. The curve values must be between 0 and 1. |
| [cubicBezierCurve](arkts-arkui-cubicbeziercurve-f.md#cubicbeziercurve-1) | Creates a cubic Bezier curve, with x-coordinates automatically normalized between 0 and 1. |
| [customCurve](arkts-arkui-customcurve-f.md#customcurve-1) | Creates a custom curve. |
| [init](arkts-arkui-init-f.md#init-1) | Implements initialization for the interpolation curve, which is used to create an interpolation curve based on the input parameter. |
| [initCurve](arkts-arkui-initcurve-f.md#initcurve-1) | Implements initialization for the interpolation curve, which is used to create an interpolation curve based on the input parameter. |
| [interpolatingSpring](arkts-arkui-interpolatingspring-f.md#interpolatingspring-1) | Creates an interpolating spring curve animated from 0 to 1. The actual animation value is calculated based on the curve. The animation duration is subject to the curve parameters, rather than the **duration** parameter in **animation** or **animateTo**. |
| [responsiveSpringMotion](arkts-arkui-responsivespringmotion-f.md#responsivespringmotion-1) | Creates a responsive spring animation curve. It is a special case of [springMotion](arkts-arkui-springmotion-f.md#springmotion-1), with the only difference in the default values. It can be used together with **springMotion**. |
| [spring](arkts-arkui-spring-f.md#spring-1) | Constructs a spring curve object. |
| [springCurve](arkts-arkui-springcurve-f.md#springcurve-1) | Creates a spring curve. The curve shape is subject to the spring parameters, and the animation duration is subject to the **duration** parameter in **animation** and **animateTo**. |
| [springMotion](arkts-arkui-springmotion-f.md#springmotion-1) | Creates a spring animation curve. If multiple spring animations are applied to the same attribute of an object, each animation replaces their predecessor and inherits the velocity. |
| [steps](arkts-arkui-steps-f.md#steps-1) | Creates a step curve. |
| [stepsCurve](arkts-arkui-stepscurve-f.md#stepscurve-1) | Creates a step curve. |

### Interfaces

| Name | Description |
| --- | --- |
| [ICurve](arkts-arkui-icurve-i.md) | Represents a curve object. Different types of curve objects can be created using APIs in this module, including [curves.cubicBezierCurve](arkts-arkui-cubicbeziercurve-f.md#cubicbeziercurve-1) and [curves.interpolatingSpring](arkts-arkui-interpolatingspring-f.md#interpolatingspring-1). The curve object provides interpolation functionality through its member method [interpolate](arkts-arkui-icurve-i.md#interpolate-1). |

### Enums

| Name | Description |
| --- | --- |
| [Curve](arkts-arkui-curve-e.md) | Defines an interpolation curve. For details about the curves and animations, see &lt;!--RP1--&gt;[Bezier Curve](../../../../../design/ux-design/animation-attributes.md)&lt;!--RP1End--&gt;. |

