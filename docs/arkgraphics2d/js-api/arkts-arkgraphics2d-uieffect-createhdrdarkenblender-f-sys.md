# createHdrDarkenBlender (System API)

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## createHdrDarkenBlender

```TypeScript
function createHdrDarkenBlender(hdrBrightnessRatio: number,
    grayscaleFactor?: [number, number, number]): HdrDarkenBlender
```

Create an HdrDarkenBlender, which is used to apply HDR-adaptive darken blender on UI components.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-uiEffect-function createHdrDarkenBlender(hdrBrightnessRatio: double,    grayscaleFactor?: [double, double, double]): HdrDarkenBlender--><!--Device-uiEffect-function createHdrDarkenBlender(hdrBrightnessRatio: double,    grayscaleFactor?: [double, double, double]): HdrDarkenBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrBrightnessRatio | number | Yes | The HDR brightness ratio of the src. |
| grayscaleFactor | [number, number, number] | No | The grayscale factor for converting dst's RGB channels to grayscale. Formula: grayscale = dot(grayscaleFactor, dst). |

**Return value:**

| Type | Description |
| --- | --- |
| [HdrDarkenBlender](arkts-arkgraphics2d-uieffect-hdrdarkenblender-i-sys.md) | Returns the blender. |

