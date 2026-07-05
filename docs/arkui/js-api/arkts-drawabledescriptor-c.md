# DrawableDescriptor

父类对象提供可重写的方法，包含：获取[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)实例，图片资源加载能力。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DrawableDescriptor,AnimatedDrawableDescriptor,AnimationStopMode,AnimationOptions,AnimationController,DrawableDescriptorLoadedResult,LayeredDrawableDescriptor,PictureDrawableDescriptor,PixelMapDrawableDescriptor,HdrCompositionConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor()
```

Creates a new DrawableDescriptor.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## getPixelMap

```TypeScript
getPixelMap(): image.PixelMap
```

获取PixelMap实例。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | PixelMap |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 111002 | The native memory referenced by  the drawableDescriptor has been released. [since 26.0.0] |

## invalidate

```TypeScript
invalidate(): void
```

重新绘制DrawableDescriptor。当前仅支持 [PictureDrawableDescriptor](arkts-picturedrawabledescriptor-c.md#PictureDrawableDescriptor)类型，其他DrawableDescriptor子类型触 发后无效果。若DrawableDescriptor未绑定任何组件，则不会执行任何操作。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isReleased

```TypeScript
isReleased(): boolean
```

查询DrawableDescriptor是否已被释放。返回true表示已释放，此时调用 [getPixelMap](arkts-drawabledescriptor-c.md#getPixelMap)、 [getForeground](arkts-layereddrawabledescriptor-c.md#getForeground)、 [getBackground](arkts-layereddrawabledescriptor-c.md#getBackground)、 [getMask](arkts-layereddrawabledescriptor-c.md#getMask)、 [loadSync](arkts-drawabledescriptor-c.md#loadSync)、 [load](arkts-drawabledescriptor-c.md#load)等接口会抛出111002错误；返回false表示未释放，对象可正 常使用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | DrawableDescriptor是否已被释放。true表示已释放，false表示未释放。 |

## load

```TypeScript
load(): Promise<DrawableDescriptorLoadedResult>
```

发起图片资源的异步加载，并返回加载结果。使用Promise异步回调。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DrawableDescriptorLoadedResult> | 图片资源的加载结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 111001 | resource loading failed. |
| 111002 | The native memory referenced by  the drawableDescriptor has been released. [since 26.0.0] |

## loadSync

```TypeScript
loadSync(): DrawableDescriptorLoadedResult
```

发起图片资源的同步加载，并返回加载结果。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DrawableDescriptorLoadedResult | 图片资源的加载结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 111001 | resource loading failed. |
| 111002 | The native memory referenced by  the drawableDescriptor has been released. [since 26.0.0] |

## release

```TypeScript
release(): void
```

释放DrawableDescriptor持有的资源。调用release后，该对象将不可用，再调用 [getPixelMap](arkts-drawabledescriptor-c.md#getPixelMap)、 [getForeground](arkts-layereddrawabledescriptor-c.md#getForeground)、 [getBackground](arkts-layereddrawabledescriptor-c.md#getBackground)、 [getMask](arkts-layereddrawabledescriptor-c.md#getMask)、 [loadSync](arkts-drawabledescriptor-c.md#loadSync)、 [load](arkts-drawabledescriptor-c.md#load)等接口会抛出111002错误。重复调用release不会崩溃。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

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

