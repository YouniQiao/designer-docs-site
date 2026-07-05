# RoundRectShapeOptions

RectShape 带有半径的构造函数参数。 继承自[ShapeSize](arkts-shapesize-i.md#ShapeSize)。

**Inheritance:** RoundRectShapeOptionsextends: ShapeSize.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## radiusHeight

```TypeScript
radiusHeight?: number | string
```

矩形形状圆角半径的高度。 类型为number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。

**Type:** number | string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## radiusWidth

```TypeScript
radiusWidth?: number | string
```

矩形形状圆角半径的宽度。 类型为number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。

**Type:** number | string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

