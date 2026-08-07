# HdrDarkenBlender (System API)

The HDR-adaptive darken blender.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-uiEffect-interface HdrDarkenBlender--><!--Device-uiEffect-interface HdrDarkenBlender-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## grayscaleFactor

```TypeScript
grayscaleFactor?: [double, double, double]
```

Defines the grayscale factor for converting dst's RGB channels to grayscale.Formula: grayscale = dot(grayscaleFactor, dst).

**Type:** [double, double, double]

**Default:** [0.299, 0.587, 0.114]

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HdrDarkenBlender-grayscaleFactor?: [double, double, double]--><!--Device-HdrDarkenBlender-grayscaleFactor?: [double, double, double]-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## hdrBrightnessRatio

```TypeScript
hdrBrightnessRatio: double
```

Defines the HDR brightness ratio of src.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HdrDarkenBlender-hdrBrightnessRatio: double--><!--Device-HdrDarkenBlender-hdrBrightnessRatio: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

