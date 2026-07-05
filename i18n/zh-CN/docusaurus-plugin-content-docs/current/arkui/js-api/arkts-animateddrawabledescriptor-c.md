# AnimatedDrawableDescriptor

使用[Image]./@internal/component/ets/image组件播放PixelMap数组或动图资源时传入 AnimatedDrawableDescriptor对象， 该对象继承自[DrawableDescriptor](arkts-drawabledescriptorloadedresult-i.md#DrawableDescriptorLoadedResult)。

**继承实现关系：** AnimatedDrawableDescriptor继承自：DrawableDescriptor。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions)
```

AnimatedDrawableDescriptor的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pixelMaps | Array&lt;image.PixelMap> | 是 | PixelMap 数组类型参数，存储 PixelMap 图片数据。 |
| options | AnimationOptions | 否 |  |

## constructor

```TypeScript
constructor(src: ResourceStr | Array<image.PixelMap>, options?: AnimationOptions)
```

AnimatedDrawableDescriptor的构造函数。

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | ResourceStr \| Array&lt;image.PixelMap> | 是 | 动图资源地址或者  [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)对象构成的数组。 ResourceStr当前支持的范围：  应用资源Resource，沙箱路径（file:///），BASE64字符串。 |
| options | AnimationOptions | 否 |  |

**示例：**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor } from '@kit.ArkUI';
import { fileUri } from '@kit.CoreFileKit';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };
  // 支持传入file://xx沙箱路径和应用资源Resource。
  @State animated1: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);
  @State animated2: AnimatedDrawableDescriptor | undefined = undefined;

  aboutToAppear() {
    let files = this.getUIContext().getHostContext()?.filesDir
    let originPath = files + "/flower.gif"
    let resultPath = fileUri.getUriFromPath(originPath)
    this.animated2 = new AnimatedDrawableDescriptor(resultPath, { iterations: -1 })
  }

  build() {
    Column() {
      Row() {
        Image(this.animated1).width(100).height(100)
        Image(this.animated2).width(100).height(100)
      }
    }
  }
}

```

## getAnimationController

```TypeScript
getAnimationController(id?: string): AnimationController | undefined
```

获取动画控制器。

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AnimationController | 动画控制器对象。 |

**示例：**

```TypeScript
import { AnimationOptions, AnimatedDrawableDescriptor, AnimationController } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };
  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .borderColor(Color.Red)
        .borderWidth(1)
      Button("start")
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          controller?.start()
        })
      Button("stop")
        .onClick(() => {
          let controller = this.animated.getAnimationController()
          controller?.stop()
        })
    }
  }
}


import { AnimationOptions, AnimatedDrawableDescriptor, AnimationController } from '@kit.ArkUI';

@Entry
@Component
struct Example {
  options: AnimationOptions = { duration: 1000, iterations: -1, autoPlay: false };
  // $r('app.media.gif')需要替换为开发者所需的图像资源文件。
  @State animated: AnimatedDrawableDescriptor = new AnimatedDrawableDescriptor($r('app.media.gif'), this.options);

  build() {
    Column() {
      Image(this.animated)
        .width(100)
        .height(100)
        .borderColor(Color.Red)
        .borderWidth(1)
        .id("Component1")
      Image(this.animated)
        .width(100)
        .height(100)
        .borderColor(Color.Red)
        .borderWidth(1)
      Button("start")
        .onClick(() => {
          let controller = this.animated.getAnimationController("Component1")
          controller?.start()
        })
      Button("stop")
        .onClick(() => {
          let controller = this.animated.getAnimationController("Component1")
          controller?.stop()
        })
    }
  }
}

```

