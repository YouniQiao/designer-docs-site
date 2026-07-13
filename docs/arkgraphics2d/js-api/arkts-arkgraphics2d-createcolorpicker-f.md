# createColorPicker

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## createColorPicker

```TypeScript
function createColorPicker(source: image.PixelMap): Promise<ColorPicker>
```

Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | PixelMap instance created by the image module. An instance can beobtained by decoding an image or directly created. For details, see Image Overview. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColorPicker&gt; | - Promise used to return the ColorPicker instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";
import { BusinessError } from "@kit.BasicServicesKit";

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
  effectKit.createColorPicker(pixelMap).then(colorPicker => {
    console.info("color picker=" + colorPicker);
  }).catch( (reason : BusinessError) => {
    console.error("error=" + reason.message);
  })
})

```


## createColorPicker

```TypeScript
function createColorPicker(source: image.PixelMap, region: Array<number>): Promise<ColorPicker>
```

Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return the
result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | PixelMap instance created by the image module. An instance can be obtained bydecodingan image or directly created. For details, see Image Overview. |
| region | Array&lt;number&gt; | Yes | Region of the image from which the color is picked.The array consists of four elements, representing the left, top, right, and bottom positions of the image,respectively.The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the imagecorrespond to 0,and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater thanthe first element,and the fourth element must be greater than the second element. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColorPicker&gt; | - Promise used to return the ColorPicker instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";
import { BusinessError } from "@kit.BasicServicesKit";

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
  effectKit.createColorPicker(pixelMap, [0, 0, 1, 1]).then(colorPicker => {
    console.info("color picker=" + colorPicker);
  }).catch( (reason : BusinessError) => {
    console.error("error=" + reason.message);
  })
})

```


## createColorPicker

```TypeScript
function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void
```

Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | PixelMap instance created by the image module. An instance can be obtained bydecoding an image or directly created. For details, see Image Overview. |
| callback | AsyncCallback&lt;ColorPicker&gt; | Yes | the callback of createColorPicker. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. |

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
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
    }
  })
})

```


## createColorPicker

```TypeScript
function createColorPicker(source: image.PixelMap, region: Array<number>, callback: AsyncCallback<ColorPicker>): void
```

Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous callback
to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | PixelMap instance created by the image module. An instance can be obtained bydecoding an image or directly created. For details, see Image Overview. |
| region | Array&lt;number&gt; | Yes | Region of the image from which the color is picked.The array consists of four elements, representing the left, top, right, and bottom positions of the image,respectively.The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the imagecorrespond to 0,and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater thanthe first element,and the fourth element must be greater than the second element. |
| callback | AsyncCallback&lt;ColorPicker&gt; | Yes | Callback used to return the ColorPicker instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. |

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
  effectKit.createColorPicker(pixelMap, [0, 0, 1, 1], (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
    }
  })
})

```

