# ImageReceiver

Image receiver class. You can use it to obtain the surface ID of a component, read the latest image and the next
image, and release **ImageReceiver** instances.

Before calling any APIs in ImageReceiver, you must create an ImageReceiver instance.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## Modules to Import

```TypeScript
import { sendableImage } from '@kit.ImageKit';
```

## getReceivingSurfaceId

```TypeScript
getReceivingSurfaceId(): Promise<string>
```

Obtains a surface ID for the camera or other components. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Asynchronously returns the surface ID. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

async function Demo() {
  let size: image.Size = {
    height: 8192,
    width: 8
  }
  let receiver: sendableImage.ImageReceiver = sendableImage.createImageReceiver(size, image.ImageFormat.JPEG, 8);
  receiver.getReceivingSurfaceId().then((id: string) => {
    console.info('Succeeded in getting the ReceivingSurfaceId.');
  }).catch((error: BusinessError) => {
    console.error(`Failed to get the ReceivingSurfaceId.code ${error.code}, message is ${error.message}`);
  })
}

```

## on('imageArrival')

```TypeScript
on(type: 'imageArrival', callback: AsyncCallback<void>): void
```

Listens for image arrival events. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imageArrival' | Yes | Type of event to listen for. The value is fixed at **'imageArrival'**, which istriggered when an image is received. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked for the event. |

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
  receiver.on('imageArrival', () => {
    // Implement the callback logic when an image is received.
  })
}

```

## readLatestImage

```TypeScript
readLatestImage(): Promise<Image>
```

Reads the latest image from the ImageReceiver instance. This API uses a promise to return the result.

> **NOTE**
>
> This API can be called to receive data only after the [on](sendableImage.ImageReceiver.on) callback is
> triggered. When the [Image](arkts-image-imagesource-i.md) object returned by this API is no longer needed,
> call [release](arkts-image-pixelmap-i.md#release-1) to release the object. New data can be received only after
> the release.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Image&gt; | Promise used to return the latest image. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

async function Demo() {
  let size: image.Size = {
    height: 8192,
    width: 8
  }
  let receiver: sendableImage.ImageReceiver = sendableImage.createImageReceiver(size, image.ImageFormat.JPEG, 8);
  receiver.readLatestImage().then((img: sendableImage.Image) => {
    console.info('readLatestImage succeeded.');
  }).catch((error: BusinessError) => {
    console.error(`readLatestImage failed. code ${error.code}, message is ${error.message}`);
  })
}

```

## readNextImage

```TypeScript
readNextImage(): Promise<Image>
```

Reads the next image from the ImageReceiver instance. This API uses a promise to return the result.

> **NOTE**
>
> This API can be called to receive data only after the [on](sendableImage.ImageReceiver.on) callback is
> triggered. When the [Image](arkts-image-imagesource-i.md) object returned by this API is no longer needed,
> call [release](arkts-image-pixelmap-i.md#release-1) to release the object. New data can be received only after
> the release.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Image&gt; | Promise used to return the next image. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

async function Demo() {
  let size: image.Size = {
    height: 8192,
    width: 8
  }
  let receiver: sendableImage.ImageReceiver = sendableImage.createImageReceiver(size, image.ImageFormat.JPEG, 8);
  receiver.readNextImage().then((img: sendableImage.Image) => {
    console.info('readNextImage succeeded.');
  }).catch((error: BusinessError) => {
    console.error(`readNextImage failed. code ${error.code}, message is ${error.message}`);
  })
}

```

## release

```TypeScript
release(): Promise<void>
```

Releases this ImageReceiver instance. This API uses a promise to return the result.
Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call this API to free
the memory promptly.
Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
and the instance is no longer needed.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Example**

```TypeScript
import { sendableImage } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

async function Demo() {
  let size: image.Size = {
    height: 8192,
    width: 8
  }
  let receiver: sendableImage.ImageReceiver = sendableImage.createImageReceiver(size, image.ImageFormat.JPEG, 8);
  receiver.release().then(() => {
    console.info('release succeeded.');
  }).catch((error: BusinessError) => {
    console.error(`release failed. code ${error.code}, message is ${error.message}`);
  })
}

```

## capacity

```TypeScript
readonly capacity: number
```

Maximum number of images that can be accessed at the same time. This parameter is used only as an expected value.

The actual capacity is determined by the device hardware.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## format

```TypeScript
readonly format: image.ImageFormat
```

Image format.

**Type:** image.ImageFormat

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## size

```TypeScript
readonly size: image.Size
```

Image size.

**Type:** image.Size

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

