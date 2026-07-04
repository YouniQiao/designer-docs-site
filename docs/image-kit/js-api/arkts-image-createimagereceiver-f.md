# createImageReceiver

## Modules to Import

```TypeScript
import { sendableImage } from '@ohos.multimedia.sendableImage';
```

## createImageReceiver

```TypeScript
function createImageReceiver(size: image.Size, format: image.ImageFormat, capacity: number): ImageReceiver
```

Creates an ImageReceiver instance based on the specified image size, format, and capacity. Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call [release](arkts-image-pixelmap-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | Yes | Default size of the image. |
| format | image.ImageFormat | Yes | Image format, which is a constant of **image.ImageFormat**. (Currently, only**ImageFormat:JPEG** is supported.) |
| capacity | number | Yes | Maximum number of images that can be accessed at the same time. This parameter is usedonly as an expected value. The actual capacity is determined by the device hardware. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageReceiver | ImageReceiver instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { image } from '@kit.ImageKit';

async function Demo() {
    let size: image.Size = {
        height: 8192,
        width: 8
    } 
    let receiver: sendableImage.ImageReceiver = sendableImage.createImageReceiver(size, image.ImageFormat.JPEG, 8);
}

```

