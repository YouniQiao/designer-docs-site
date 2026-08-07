# BlurBubblesRiseEffectParam (System API)

The parameters of blur bubbles rise effect.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-uiEffect-interface BlurBubblesRiseEffectParam--><!--Device-uiEffect-interface BlurBubblesRiseEffectParam-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## blurIntensity

```TypeScript
blurIntensity: double
```

Defines gaussian blur intensity for blur bubbles rise effect.Value range [0, 1], and values outside the range will be clamped.0 means no blur, and 1 represents the maximum blur level.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-BlurBubblesRiseEffectParam-blurIntensity: double--><!--Device-BlurBubblesRiseEffectParam-blurIntensity: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## maskImage

```TypeScript
maskImage: image.PixelMap
```

Defines mask image for blur bubbles rise effect, controls the blur bubbles area.The masked area has a blur effect, while the unmasked area has no blur effect.

**Type:** image.PixelMap

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-BlurBubblesRiseEffectParam-maskImage: image.PixelMap--><!--Device-BlurBubblesRiseEffectParam-maskImage: image.PixelMap-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## mixStrength

```TypeScript
mixStrength: double
```

Defines mix strength between original and blurred images.Value range [0, 1], and values outside the range will be clamped.0 corresponds to the original image, and 1 corresponds to the blurred image.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-BlurBubblesRiseEffectParam-mixStrength: double--><!--Device-BlurBubblesRiseEffectParam-mixStrength: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: double
```

Defines animation progress for blur bubbles rise effect.Value range [0, 1], and values outside the range will be clamped.0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-BlurBubblesRiseEffectParam-progress: double--><!--Device-BlurBubblesRiseEffectParam-progress: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

