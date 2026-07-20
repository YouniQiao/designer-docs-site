# createEffect

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## createEffect

```TypeScript
function createEffect(source: image.PixelMap): Filter
```

Creates a Filter instance based on a pixel map.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-effectKit-function createEffect(source: image.PixelMap): Filter--><!--Device-effectKit-function createEffect(source: image.PixelMap): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | PixelMap instance created by the image module. An instance can be obtained by decoding an image or directly created. For details, see Image Overview. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Head node of the filter linked list without any effect. If the operation fails, null is returned. |

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

