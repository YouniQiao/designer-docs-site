# createImageSource

## Modules to Import

```TypeScript
import { sendableImage } from '@ohos.multimedia.sendableImage';
```

## createImageSource

```TypeScript
function createImageSource(uri: string): ImageSource
```

Creates an ImageSource instance based on a given URI. Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-pixelmap-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Image path. Currently, only the application sandbox path is supported.<br>The following formats are supported: .jpg, .png, .gif, .bmp, .webp, .dng[SVG](../../../../reference/apis-image-kit/arkts-apis-image-f.md#svg-tags), and ico. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | ImageSource instance. If the operation fails, undefined is returned. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';

async function Demo(context : Context) {
  const path: string = context.cacheDir + "/test.jpg";
  const sendableImageSourceObj: sendableImage.ImageSource = sendableImage.createImageSource(path);
}

```


## createImageSource

```TypeScript
function createImageSource(fd: number): ImageSource
```

Creates an ImageSource instance based on a given file descriptor. Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-pixelmap-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | ImageSource instance. If the operation fails, undefined is returned. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { fileIo } from '@kit.CoreFileKit';

async function Demo(context : Context) {
  const path: string = context.cacheDir + "/test.jpg";
  let file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
  const sendableImageSourceObj: sendableImage.ImageSource = sendableImage.createImageSource(file.fd);
}

```


## createImageSource

```TypeScript
function createImageSource(buf: ArrayBuffer): ImageSource
```

Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call [sendableImage.createPixelMap](arkts-image-createpixelmap-f.md#createpixelmap-1). Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-pixelmap-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | Array of image buffers. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageSource | ImageSource instance. If the operation fails, undefined is returned. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';

async function Demo() {
  const buf: ArrayBuffer = new ArrayBuffer(96); // 96 is the size of the pixel buffer to create. The value is calculated as follows: height * width *4.
  const sendableImageSourceObj: sendableImage.ImageSource = sendableImage.createImageSource(buf);
}

```

