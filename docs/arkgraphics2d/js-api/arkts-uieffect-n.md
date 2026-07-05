# uiEffect

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { uiEffect } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[createBrightnessBlender](arkts-uieffect-createbrightnessblender-f-sys.md#createBrightnessBlender-1) | 创建BrightnessBlender实例用于给组件添加提亮效果。 |
| [createEffect](arkts-uieffect-createeffect-f.md#createEffect-1) | 创建VisualEffect实例用于给组件添加多种effect效果。 |
| [createFilter](arkts-uieffect-createfilter-f.md#createFilter-1) | 创建Filter实例用于给组件添加多种filter效果。 |
| <!--DelRow-->[createHdrBrightnessBlender](arkts-uieffect-createhdrbrightnessblender-f-sys.md#createHdrBrightnessBlender-1) | 创建HdrBrightnessBlender实例用于给组件添加支持HDR的提亮效果。 |
| <!--DelRow-->[createHdrDarkenBlender](arkts-uieffect-createhdrdarkenblender-f-sys.md#createHdrDarkenBlender-1) | 创建HdrDarkenBlender实例用于HDR图层的压暗混合效果。 |

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[Mask](arkts-uieffect-mask-c-sys.md) | Mask效果类，作为Filter以及VisualEffect的输入使用。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[BlurBubblesRiseEffectParam](arkts-uieffect-blurbubblesriseeffectparam-i-sys.md) | 模糊气泡上升效果的参数。 |
| <!--DelRow-->[BrightnessBlender](arkts-uieffect-brightnessblender-i-sys.md) | 提亮混合器，用于将提亮效果添加到指定的组件上。 在调用BrightnessBlender前，需要先通过createBrightnessBlender创建一个BrightnessBlender实例。 |
| <!--DelRow-->[BrightnessParam](arkts-uieffect-brightnessparam-i-sys.md) | 材质提亮参数的详细说明。 |
| <!--DelRow-->[Color](arkts-uieffect-color-i-sys.md) | RGBA格式的颜色描述。 |
| [Filter](arkts-uieffect-filter-i.md) |  |
| <!--DelRow-->[HdrBrightnessBlender](arkts-uieffect-hdrbrightnessblender-i-sys.md) | 支持HDR的提亮混合器（继承自BrightnessBlender），用于将提亮效果添加到指定的组件上。 在调用HdrBrightnessBlender前，需要先通过createHdrBrightnessBlender创建一个HdrBrightnessBlender实例。 该混合器参数可参考BrightnessBlender。 |
| <!--DelRow-->[HdrDarkenBlender](arkts-uieffect-hdrdarkenblender-i-sys.md) | 支持HDR的压暗混合器，用于将压暗效果添加到指定的组件上。 在调用HdrDarkenBlender前，需要先通过createHdrDarkenBlender创建一个HdrDarkenBlender实例。 |
| <!--DelRow-->[HeatDistortionEffectParam](arkts-uieffect-heatdistortioneffectparam-i-sys.md) | 热浪扭曲效果的参数。 |
| <!--DelRow-->[LiquidMaterialEffectParam](arkts-uieffect-liquidmaterialeffectparam-i-sys.md) | 材质的各项参数及其用途的详细说明。 |
| [VisualEffect](arkts-uieffect-visualeffect-i.md) | VisualEffect效果类，用于将相应的效果添加到指定的组件上。 在调用VisualEffect的方法前，需要先通过createEffect创建一个VisualEffect实例。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[Blender](arkts-uieffect-blender-t-sys.md) | 混合器类型，用于描述混合效果。 |
| <!--DelRow-->[Blender](arkts-uieffect-blender-t-sys.md) | 混合器类型，用于描述混合效果。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[FlyMode](arkts-uieffect-flymode-e-sys.md) | 飞入飞出形变场景模式枚举。 |
| <!--DelRow-->[TileMode](arkts-uieffect-tilemode-e-sys.md) | 像素填充模式枚举。 |
| <!--DelRow-->[WaterRippleMode](arkts-uieffect-waterripplemode-e-sys.md) | 水波纹场景模式枚举。 |

