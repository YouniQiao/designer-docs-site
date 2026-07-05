# BlurBubblesRiseEffectParam

模糊气泡上升效果的参数。

**Since:** 26.0.0

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## blurIntensity

```TypeScript
blurIntensity: double
```

模糊气泡上升效果的高斯模糊强度。 取值范围[0, 1]，超出边界会在实现时自动截断。0表示无模糊，1表示最大模糊程度。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: double
```

模糊气泡上升效果的动画进度。 取值范围[0, 1]，超出边界会在实现时自动截断。0对应动画开始，1对应动画结束。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## mixStrength

```TypeScript
mixStrength: double
```

原图与模糊图的混合强度。 取值范围[0, 1]，超出边界会在实现时自动截断。0对应原图，1对应模糊后的图像。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## maskImage

```TypeScript
maskImage: image.PixelMap
```

模糊气泡上升效果的遮罩图像，控制模糊气泡区域。 被遮罩的区域有模糊效果，未遮罩的区域无模糊效果。

**Type:** image.PixelMap

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

