# ShapeSize

形状的尺寸参数。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## width

```TypeScript
width?: number | string
```

形状的宽度。 类型为number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。

**Type:** number | string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: number | string
```

形状的高度。 类型为number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。

**Type:** number | string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

