# DrawableDescriptor

Represents the base class providing overridable methods for [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md)
acquisition and image resource loading.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DrawableDescriptor, AnimatedDrawableDescriptor, AnimationStopMode, AnimationOptions, AnimationController, DrawableDescriptorLoadedResult, LayeredDrawableDescriptor, PictureDrawableDescriptor, PixelMapDrawableDescriptor, HdrCompositionConfig } from '@kit.ArkUI';
```

## getPixelMap

```TypeScript
getPixelMap(): image.PixelMap
```

Obtains this **PixelMap** instance.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | **PixelMap** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [111002](../errorcode-drawable-descriptor.md#111002-resource-released) | The native memory referenced bythe drawableDescriptor has been released.<br>**Applicable version:** 26.0.0 and later |

**Example**

For details, see [LayeredDrawableDescriptor](#layereddrawabledescriptor).

## invalidate

```TypeScript
invalidate(): void
```

Redraws **DrawableDescriptor**. Currently, this API is supported for the
[PictureDrawableDescriptor](arkts-arkui-picturedrawabledescriptor-c.md) type, and does not take effect for other
**DrawableDescriptor** subtypes. If no component is bound to **DrawableDescriptor**, no operation is performed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isReleased

```TypeScript
isReleased(): boolean
```

Checks whether **DrawableDescriptor** is released. If **true** is returned, the object has been released. In this
case, calling APIs such as [getPixelMap](arkts-arkui-drawabledescriptor-c.md#getpixelmap-1),
[getForeground](arkts-arkui-layereddrawabledescriptor-c.md#getforeground-1),
[getBackground](arkts-arkui-layereddrawabledescriptor-c.md#getbackground-1), [getMask](arkts-arkui-layereddrawabledescriptor-c.md#getmask-1),
[loadSync](arkts-arkui-drawabledescriptor-c.md#loadsync-1), and [load](arkts-arkui-drawabledescriptor-c.md#load-1) will throw error code 1110
02. If **false** is returned, the object has not been released and can be used normally.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether **DrawableDescriptor** is released. The value **true** indicates that the object isreleased, and **false** indicates that the object is not released. |

## load

```TypeScript
load(): Promise<DrawableDescriptorLoadedResult>
```

Asynchronously loads the image resource and returns the loading result. This API uses a promise to return the
result.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DrawableDescriptorLoadedResult&gt; | Image resource loading result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [111001](../errorcode-drawable-descriptor.md#111001-failed-to-load-resources) | resource loading failed. |
| [111002](../errorcode-drawable-descriptor.md#111002-resource-released) | The native memory referenced bythe drawableDescriptor has been released.<br>**Applicable version:** 26.0.0 and later |

**Example**

For details, see [DrawableDescriptorLoadedResult](#drawabledescriptorloadedresult21).

## loadSync

```TypeScript
loadSync(): DrawableDescriptorLoadedResult
```

Synchronously loads the image resource and returns the loading result.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DrawableDescriptorLoadedResult | Image resource loading result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [111001](../errorcode-drawable-descriptor.md#111001-failed-to-load-resources) | resource loading failed. |
| [111002](../errorcode-drawable-descriptor.md#111002-resource-released) | The native memory referenced bythe drawableDescriptor has been released.<br>**Applicable version:** 26.0.0 and later |

**Example**

For details, see [DrawableDescriptorLoadedResult](#drawabledescriptorloadedresult21).

## release

```TypeScript
release(): void
```

Releases the resource held by **DrawableDescriptor**. After the **release** API is called, the object becomes
unavailable. In this case, if you call APIs such as [getPixelMap](arkts-arkui-drawabledescriptor-c.md#getpixelmap-1),
[getForeground](arkts-arkui-layereddrawabledescriptor-c.md#getforeground-1),
[getBackground](arkts-arkui-layereddrawabledescriptor-c.md#getbackground-1), [getMask](arkts-arkui-layereddrawabledescriptor-c.md#getmask-1),
[loadSync](arkts-arkui-drawabledescriptor-c.md#loadsync-1), and [load](arkts-arkui-drawabledescriptor-c.md#load-1) again, error code 111002
will be thrown. No crash occurs when the **release** API is called repeatedly.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
import { DrawableDescriptor } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  private resManager = this.getUIContext().getHostContext()?.resourceManager;
  // Replace $r('app.media.startIcon') with the image resource file you use.
  private drawable: DrawableDescriptor | undefined =
    this.resManager?.getDrawableDescriptor($r('app.media.startIcon').id);

  build() {
    Column() {
      Button('release')
        .onClick(() => {
          this.drawable?.release()
        })
      Button('isReleased')
        .onClick(() => {
          let released = this.drawable?.isReleased()
          console.info(`isReleased = ${released}`)
        })
    }
  }
}

```

