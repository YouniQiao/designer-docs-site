# createHdrDarkenBlender (System API)

## createHdrDarkenBlender

```TypeScript
function createHdrDarkenBlender(hdrBrightnessRatio: double,
    grayscaleFactor?: [double, double, double]): HdrDarkenBlender
```

Create an HdrDarkenBlender, which is used to apply HDR-adaptive darken blender on UI components.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-uiEffect-function createHdrDarkenBlender(hdrBrightnessRatio: double,    grayscaleFactor?: [double, double, double]): HdrDarkenBlender--><!--Device-uiEffect-function createHdrDarkenBlender(hdrBrightnessRatio: double,    grayscaleFactor?: [double, double, double]): HdrDarkenBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrBrightnessRatio | double | Yes | The HDR brightness ratio of the src. |
| grayscaleFactor | [double, double, double] | No | The grayscale factor for converting dst's RGB channels to grayscale. Formula: grayscale = dot(grayscaleFactor, dst). |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Returns the blender. |

