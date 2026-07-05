# @ohos.arkui.drawableDescriptor

## 导入模块

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md) | 使用[Image]{@link ./@internal/component/ets/image}组件播放PixelMap数组或动图资源时传入 AnimatedDrawableDescriptor对象， 该对象继承自[DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。 |
| [DrawableDescriptor](arkts-drawabledescriptor-c.md) | 父类对象提供可重写的方法，包含：获取[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}实例，图片资源加载能力。 |
| [LayeredDrawableDescriptor](arkts-layereddrawabledescriptor-c.md) | 当传入资源id或name为包含前景和背景资源的json文件时，生成LayeredDrawableDescriptor对象。继承自 [DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。 drawable.json位于项目工程entry/src/main/resources/base/media目录下。定义请参考： |
| [PictureDrawableDescriptor](arkts-picturedrawabledescriptor-c.md) | 支持通过传入Picture对象创建PictureDrawableDescriptor对象。 继承自[DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。 |
| [PixelMapDrawableDescriptor](arkts-pixelmapdrawabledescriptor-c.md) | 支持通过传入PixelMap创建PixelMapDrawableDescriptor对象。 继承自[DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AnimationController](arkts-animationcontroller-i.md) | 动画控制器对象。包含控制动画播放、停止、恢复、暂停和状态查询等方法。 |
| [AnimationOptions](arkts-animationoptions-i.md) | 动画播放参数。包括播放时延，迭代次数，单帧播放时间，是否自动播放。 |
| [DrawableDescriptorLoadedResult](arkts-drawabledescriptorloadedresult-i.md) | 传入的图片资源或地址的加载结果。 |
| [HdrCompositionConfig](arkts-hdrcompositionconfig-i.md) | HDR合成配置选项。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AnimationStopMode](arkts-animationstopmode-e.md) | 动图停止模式。 |

