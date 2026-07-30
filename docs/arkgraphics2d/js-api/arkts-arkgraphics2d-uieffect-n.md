# uiEffect

The uiEffect module provides basic capabilities to apply an effect, for example, blur, pixel stretch, and brightness,to a component. Effects are classified into filters and visual effects. Effects of the same category can be cascaded in an effect instance of the corresponding category. In actual development, the blur effect can be used for background blurring, and the brightness effect can be used for screen-on display.

- [Filter](../../../reference/apis-arkgraphics2d/js-apis-uiEffect.md#filter): applies a filter to a component.  
- [VisualEffect](../../../reference/apis-arkgraphics2d/js-apis-uiEffect.md#visualeffect): applies a visual effect to a component.

**Since:** 12

<!--Device-unnamed-declare namespace uiEffect--><!--Device-unnamed-declare namespace uiEffect-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createFilter](arkts-arkgraphics2d-uieffect-createfilter-f.md#createfilter) | Create a Filter to add multiple effects to the component. |
| [createEffect](arkts-arkgraphics2d-uieffect-createeffect-f.md#createeffect) | Create a VisualEffect to add multiple effects to the component. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createBrightnessBlender](arkts-arkgraphics2d-uieffect-createbrightnessblender-f-sys.md#createbrightnessblender) | Create a BrightnessBlender, which is used to adjust the brightness of UI components. |
| [createHdrBrightnessBlender](arkts-arkgraphics2d-uieffect-createhdrbrightnessblender-f-sys.md#createhdrbrightnessblender) | Create an HdrBrightnessBlender, which is used to adjust the HDR brightness of UI components. |
| [createHdrDarkenBlender](arkts-arkgraphics2d-uieffect-createhdrdarkenblender-f-sys.md#createhdrdarkenblender) | Create an HdrDarkenBlender, which is used to apply HDR-adaptive darken blender on UI components. |
<!--DelEnd-->

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [Mask](arkts-arkgraphics2d-uieffect-mask-c-sys.md) | Defines the mask for Filter or VisualEffect. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [Filter](arkts-arkgraphics2d-uieffect-filter-i.md) | The Filter for Component. |
| [HdrBrightnessBlender](arkts-arkgraphics2d-uieffect-hdrbrightnessblender-i.md) | The HDR enabled Blender of backgroundColorEffect. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Filter](arkts-arkgraphics2d-uieffect-filter-i-sys.md) | The Filter for Component. |
| [VisualEffect](arkts-arkgraphics2d-uieffect-visualeffect-i-sys.md) | The VisualEffect of Component. |
| [BrightnessParam](arkts-arkgraphics2d-uieffect-brightnessparam-i-sys.md) | The parameters of brightness. |
| [HeatDistortionEffectParam](arkts-arkgraphics2d-uieffect-heatdistortioneffectparam-i-sys.md) | The parameters of heat distortion effect. |
| [BlurBubblesRiseEffectParam](arkts-arkgraphics2d-uieffect-blurbubblesriseeffectparam-i-sys.md) | The parameters of blur bubbles rise effect. |
| [LiquidMaterialEffectParam](arkts-arkgraphics2d-uieffect-liquidmaterialeffectparam-i-sys.md) | The parameters of liquid material effect. |
| [BrightnessBlender](arkts-arkgraphics2d-uieffect-brightnessblender-i-sys.md) | The Blender of backgroundColorEffect. |
| [HdrDarkenBlender](arkts-arkgraphics2d-uieffect-hdrdarkenblender-i-sys.md) | The HDR-adaptive darken blender. |
| [Color](arkts-arkgraphics2d-uieffect-color-i-sys.md) | The Color of Light. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [TileMode](arkts-arkgraphics2d-uieffect-tilemode-e-sys.md) | TileMode enumeration description |
| [WaterRippleMode](arkts-arkgraphics2d-uieffect-waterripplemode-e-sys.md) | WaterRippleMode enumeration description |
| [FlyMode](arkts-arkgraphics2d-uieffect-flymode-e-sys.md) | FlyMode enumeration description |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [Blender](arkts-arkgraphics2d-uieffect-blender-t-sys.md) | Defines the blending effect. |
<!--DelEnd-->

