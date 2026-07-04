# @ohos.effectKit

This module provides basic image processing capabilities, including brightness adjustment, blurring, grayscale adjustment, and color picker. The effectKit module processes images (such as PixelMap, PNG, and JPEG) offline to obtain visual effects.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@ohos.effectKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createColorPicker](arkts-arkgraphics2d-createcolorpicker-f.md#createcolorpicker-1) | Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result. |
| [createColorPicker](arkts-arkgraphics2d-createcolorpicker-f.md#createcolorpicker-2) | Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return the result. |
| [createColorPicker](arkts-arkgraphics2d-createcolorpicker-f.md#createcolorpicker-3) | Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result. |
| [createColorPicker](arkts-arkgraphics2d-createcolorpicker-f.md#createcolorpicker-4) | Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous callback to return the result. |
| [createEffect](arkts-arkgraphics2d-createeffect-f.md#createeffect-1) | Creates a Filter instance based on a pixel map. |

### Interfaces

| Name | Description |
| --- | --- |
| [Color](arkts-arkgraphics2d-color-i.md) | A class that stores the color picked. |
| [ColorPicker](arkts-arkgraphics2d-colorpicker-i.md) | A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance. |
| [Filter](arkts-arkgraphics2d-filter-i.md) | A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ColorPicker](arkts-arkgraphics2d-colorpicker-i-sys.md) | A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance. |
| [Filter](arkts-arkgraphics2d-filter-i-sys.md) | A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [TileMode](arkts-arkgraphics2d-tilemode-e.md) | Enumerates the tile modes of the shader effect. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PictureComplexityDegree](arkts-arkgraphics2d-picturecomplexitydegree-e-sys.md) | Enumerates the complexity degree of an image. |
| [PictureLightDegree](arkts-arkgraphics2d-picturelightdegree-e-sys.md) | The picture light color degree. |
| [PictureShadeDegree](arkts-arkgraphics2d-pictureshadedegree-e-sys.md) | Enumerates the shade degree of an image. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [EllipticalMaskCenter](arkts-arkgraphics2d-ellipticalmaskcenter-t-sys.md) | The center of the elliptical mask, specifying where the ellipse mask is anchored in function 'ellipticalGradientBlur'. |
| [EllipticalMaskRadius](arkts-arkgraphics2d-ellipticalmaskradius-t-sys.md) | The major axis and minor axis of the elliptical mask used in function 'ellipticalGradientBlur'. |
<!--DelEnd-->

