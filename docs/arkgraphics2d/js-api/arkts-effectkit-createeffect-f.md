# createEffect

## createEffect

```TypeScript
function createEffect(source: image.PixelMap): Filter
```

通过传入的PixelMap创建Filter实例。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | image模块创建的PixelMap实例。可通过图片解码或直接创建获得，具体可见  [Image Kit简介](docroot://media/image/image-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Filter | 返回不带任何效果的Filter链表头节点，失败时返回null。 |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts : image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  let headFilter = effectKit.createEffect(pixelMap);
})

```

