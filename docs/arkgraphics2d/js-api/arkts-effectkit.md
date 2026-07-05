# @ohos.effectKit

图像效果模块提供了处理图像的基础能力，包括亮度调节、模糊化、灰度调节和智能取色等。effectKit用于离线处理图像（如pixelmap、png、jpeg）以获得视觉效果，而uiEffect则实时接入渲染服务，针对屏幕帧缓存进行处理以 获得动态视觉效果。 该模块提供以下图像效果相关的常用功能： - [Filter]{@link effectKit.Filter}：效果类，用于添加指定效果到图像源。 - [Color]{@link effectKit.Color}：颜色类，用于保存取色的结果。 - [ColorPicker]{@link effectKit.ColorPicker}：智能取色器。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createColorPicker](arkts-effectkit-createcolorpicker-f.md#createColorPicker-1) | 通过传入的PixelMap创建ColorPicker实例，使用Promise异步回调。 |
| [createColorPicker](arkts-effectkit-createcolorpicker-f.md#createColorPicker-2) | 通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用Promise异步回调。 |
| [createColorPicker](arkts-effectkit-createcolorpicker-f.md#createColorPicker-3) | 通过传入的PixelMap创建ColorPicker实例，使用callback异步回调。 |
| [createColorPicker](arkts-effectkit-createcolorpicker-f.md#createColorPicker-4) | 通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用callback异步回调。 |
| [createEffect](arkts-effectkit-createeffect-f.md#createEffect-1) | 通过传入的PixelMap创建Filter实例。 |

### Interfaces

| Name | Description |
| --- | --- |
| [Color](arkts-effectkit-color-i.md) | 颜色类，用于保存取色的结果。 |
| [ColorPicker](arkts-effectkit-colorpicker-i.md) | 取色类，用于从一张图像数据中获取它的主要颜色。在调用ColorPicker的方法前，需要先通过 [createColorPicker]{@link effectKit.createColorPicker(source: image.PixelMap)}创建一个ColorPicker实例。 |
| [Filter](arkts-effectkit-filter-i.md) | 图像效果类，用于将指定的效果添加到输入图像中。在调用Filter的方法前，需要先通过[createEffect]{@link effectKit.createEffect}创建一个Filter实例。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[EllipticalMaskCenter](arkts-effectkit-ellipticalmaskcenter-t-sys.md) | 定义椭圆形遮罩的中心点。 |
| <!--DelRow-->[EllipticalMaskRadius](arkts-effectkit-ellipticalmaskradius-t-sys.md) | 定义椭圆形遮罩的半径。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[PictureComplexityDegree](arkts-effectkit-picturecomplexitydegree-e-sys.md) | 图片内容复杂度的枚举。 |
| <!--DelRow-->[PictureLightDegree](arkts-effectkit-picturelightdegree-e-sys.md) | 图片颜色明亮度的枚举。 |
| <!--DelRow-->[PictureShadeDegree](arkts-effectkit-pictureshadedegree-e-sys.md) | 图片颜色深浅度的枚举。 |
| [TileMode](arkts-effectkit-tilemode-e.md) | 着色器效果平铺模式的枚举。 |

