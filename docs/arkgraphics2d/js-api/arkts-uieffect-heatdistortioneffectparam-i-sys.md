# HeatDistortionEffectParam

热浪扭曲效果的参数。

**Since:** 26.0.0

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## intensity

```TypeScript
intensity: double
```

热浪扭曲的强度。 取值范围[0, 1]，超出边界会在实现时自动截断。0表示无扭曲，1表示最大扭曲程度。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: double
```

热浪扭曲的动画进度。 取值范围[0, 1]，超出边界会在实现时自动截断。0对应动画开始，1对应动画结束。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## riseWeight

```TypeScript
riseWeight: double
```

热浪扭曲的上升权重，控制气泡的上升速度。 取值范围[0, 1]，超出边界会在实现时自动截断。值越大，向上运动越明显。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## noiseScale

```TypeScript
noiseScale: double
```

热浪扭曲的噪声缩放，控制噪声纹理的细度。 取值范围[0.1, 5.0]，超出边界会在实现时自动截断。值越大，噪声纹理越细腻。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

