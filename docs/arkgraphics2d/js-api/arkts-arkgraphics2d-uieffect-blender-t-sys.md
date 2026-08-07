# Blender (System API)

```TypeScript
type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender
```

Defines the blending effect.

**Since:** 13

**ArkTS mode:** ArkTS-Dyn since version 13; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-uiEffect-type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender--><!--Device-uiEffect-type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

| Type | Description |
| --- | --- |
| BrightnessBlender | Base brightness blender |
| HdrBrightnessBlender | HDR brightness blender [since 20] |
| HdrDarkenBlender | HDR-adaptive darken blender [since 26.0.0] |

