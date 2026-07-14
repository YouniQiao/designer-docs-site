# BlurBubblesRiseEffectParam (System API)

The parameters of blur bubbles rise effect.

**Since:** 26.0.0

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## blurIntensity

```TypeScript
blurIntensity: number
```

Defines gaussian blur intensity for blur bubbles rise effect. Value range [0, 1], and values outside the range will be clamped. 0 means no blur, and 1 represents the maximum blur level.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## maskImage

```TypeScript
maskImage: image.PixelMap
```

Defines mask image for blur bubbles rise effect, controls the blur bubbles area. The masked area has a blur effect, while the unmasked area has no blur effect.

**Type:** image.PixelMap

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## mixStrength

```TypeScript
mixStrength: number
```

Defines mix strength between original and blurred images. Value range [0, 1], and values outside the range will be clamped. 0 corresponds to the original image, and 1 corresponds to the blurred image.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: number
```

Defines animation progress for blur bubbles rise effect. Value range [0, 1], and values outside the range will be clamped. 0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

