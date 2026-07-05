# PictureDrawableDescriptor

支持通过传入Picture对象创建PictureDrawableDescriptor对象。 继承自[DrawableDescriptor](arkts-drawabledescriptorloadedresult-i.md#DrawableDescriptorLoadedResult)。

**Inheritance:** PictureDrawableDescriptorextends: DrawableDescriptor.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(src: image.Picture)
```

PictureDrawableDescriptor的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | image.Picture | Yes | 用于创建PictureDrawableDescriptor的Picture对象。 |

## setHdrComposition

```TypeScript
setHdrComposition(config: HdrCompositionConfig): void
```

设置HDR合成配置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | HdrCompositionConfig | Yes | HDR合成配置。 |

**Example**

```TypeScript
import { PictureDrawableDescriptor } from '@ohos.arkui.drawableDescriptor';
import { image } from '@kit.ImageKit';


@Entry
@Component
struct PictureDrawableDescriptorInvalidateTest {
  @State drawable: PictureDrawableDescriptor | undefined = undefined;

  async createPictureDrawableDescriptor() {
    let resMgr = this.getUIContext().getHostContext()?.resourceManager
    if (resMgr) {
      try {
        // Replace $r('app.media.heic') with the image resource file you use.
        let uint8buffer = resMgr.getMediaContentSync($r('app.media.heic').id)
        let imageSource = image.createImageSource(uint8buffer.buffer)
        // Configure decoding options and request to decode the GAINMAP and LHDR_GAINMAP auxiliary images for HDR composition.
        let options: image.DecodingOptionsForPicture = {
          desiredAuxiliaryPictures: [image.AuxiliaryPictureType.GAINMAP, image.AuxiliaryPictureType.LHDR_GAINMAP],
          desiredPixelFormat: image.PixelMapFormat.NV12
        }
        let picture = await imageSource.createPicture(options)
        let drawable = new PictureDrawableDescriptor(picture)
        imageSource.release()
        this.drawable = drawable
      } catch (error) {
        console.error(`get media content failed`)
      }
    }
  }

  build() {
    Column() {
      Image(this.drawable)
        .width(300)
        .height(225)
        .borderColor(Color.Red)
        .borderWidth(1)

      Button("Create PictureDrawableDescriptor").onClick((event: ClickEvent) => {
        this.createPictureDrawableDescriptor()
      })

      Button("Trigger Rebuild").onClick((event: ClickEvent) => {
        // Set the HDR composition and specify the position and size of the rectangle area for composition.
        this.drawable?.setHdrComposition({
          rect: {
            x: 200,
            y: 200,
            width: 300,
            height: 300
          }
        })
        this.drawable?.invalidate()
      })
    }
    .height('100%')
    .width('100%')
  }
}

```

