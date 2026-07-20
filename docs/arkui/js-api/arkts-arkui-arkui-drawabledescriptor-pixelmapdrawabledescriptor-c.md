# PixelMapDrawableDescriptor

Implements a **PixelMapDrawableDescriptor** object, which can be created by passing in a **PixelMap** object.Inherits from [DrawableDescriptor](arkts-arkui-arkui-drawabledescriptor-drawabledescriptorloadedresult-i.md).

**Inheritance/Implementation:** PixelMapDrawableDescriptor extends [DrawableDescriptor](arkts-arkui-arkui-drawabledescriptor-drawabledescriptor-c.md)

**Since:** 12

<!--Device-unnamed-export class PixelMapDrawableDescriptor extends DrawableDescriptor--><!--Device-unnamed-export class PixelMapDrawableDescriptor extends DrawableDescriptor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DrawableDescriptor, AnimatedDrawableDescriptor, AnimationStopMode, AnimationOptions, AnimationController, DrawableDescriptorLoadedResult, LayeredDrawableDescriptor, PictureDrawableDescriptor, PixelMapDrawableDescriptor, HdrCompositionConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(src?: image.PixelMap)
```

A constructor used to create a **PixelMapDrawableDescriptor** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PixelMapDrawableDescriptor-constructor(src?: image.PixelMap)--><!--Device-PixelMapDrawableDescriptor-constructor(src?: image.PixelMap)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | image.PixelMap | No | **PixelMap** image data. |

## constructor

```TypeScript
constructor(src?: image.PixelMap | ResourceStr)
```

A constructor used to create a **PixelMapDrawableDescriptor** object through the PixelMap type or **ResourceStr**.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-PixelMapDrawableDescriptor-constructor(src?: image.PixelMap | ResourceStr)--><!--Device-PixelMapDrawableDescriptor-constructor(src?: image.PixelMap | ResourceStr)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | image.PixelMap \| ResourceStr | No | **PixelMap** image data. You can use application resources, system resources, sandbox paths (file://&lt;bundleName&gt;/&lt;sandboxPath&gt;), and Base64 strings to create **PixelMapDrawableDescriptor** objects. |

**Example**

The following is the sample code for creating a PixelMapDrawableDescriptor object using ResourceStr:

```TypeScript
// xxx.ets
import { DrawableDescriptor, PixelMapDrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct PixelMapDrawableDescriptorExample {
  // Create a PixelMapDrawableDescriptor object using Resource.
  // Replace $r('app.media.icon') with the image resource file you use.
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

