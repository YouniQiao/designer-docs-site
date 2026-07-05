# createColorPicker

## createColorPicker

```TypeScript
function createColorPicker(source: image.PixelMap): Promise<ColorPicker>
```

通过传入的PixelMap创建ColorPicker实例，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColorPicker> | - Promise对象。返回创建的ColorPicker实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 输入参数错误。 |

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
function createColorPicker(source: image.PixelMap, region: Array<double>): Promise<ColorPicker>
```

通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用Promise异步回调。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。 |
| region | Array&lt;double> | Yes | 指定图片的取色区域。 数组第三个元素需大于第一个元素，第四个元素需大于第二个元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ColorPicker> | - Promise对象。返回创建的ColorPicker实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 输入参数错误。 |

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

通过传入的PixelMap创建ColorPicker实例，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。 |
| callback | AsyncCallback&lt;ColorPicker> | Yes | 回调函数。返回创建的ColorPicker实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 输入参数错误。 |

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
function createColorPicker(source: image.PixelMap, region: Array<double>, callback: AsyncCallback<ColorPicker>): void
```

通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用callback异步回调。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | image.PixelMap | Yes | image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。 |
| region | Array&lt;double> | Yes | 指定图片的取色区域。 数组第三个元素需大于第一个元素，第四个元素需大于第二个元素。 |
| callback | AsyncCallback&lt;ColorPicker> | Yes | 回调函数。返回创建的ColorPicker实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 输入参数错误。 |

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

