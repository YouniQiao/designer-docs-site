# PixelMapDrawableDescriptor

支持通过传入PixelMap创建PixelMapDrawableDescriptor对象。 继承自[DrawableDescriptor](arkts-drawabledescriptorloadedresult-i.md#DrawableDescriptorLoadedResult)。

**继承实现关系：** PixelMapDrawableDescriptor继承自：DrawableDescriptor。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(src?: image.PixelMap)
```

PixelMapDrawableDescriptor的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | image.PixelMap | 否 | PixelMap类型参数，存储 PixelMap 图片数据。 |

## constructor

```TypeScript
constructor(src?: image.PixelMap | ResourceStr)
```

PixelMapDrawableDescriptor的构造函数，通过PixelMap类型或者ResourceStr创建。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | image.PixelMap \| ResourceStr | 否 |  |

**示例：**

```TypeScript
// xxx.ets
import { DrawableDescriptor, PixelMapDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct PixelMapDrawableDescriptorExample {
  // 使用Resource创建PixelMapDrawableDescriptor
  // $r('app.media.icon')需要替换为开发者所需的图像资源文件。
  @State drawable: DrawableDescriptor = new PixelMapDrawableDescriptor($r('app.media.icon'))

  build() {
    Column() {
      Image(this.drawable)
        .width(100)
        .height(100)
        .margin({ bottom: 20 })
    }
  }
}

```

