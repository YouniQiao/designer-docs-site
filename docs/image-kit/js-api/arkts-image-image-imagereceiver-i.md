# ImageReceiver

The **ImageReceiver** class provides APIs to obtain the surface ID of a component, read the latest image, read the next image, and release the ImageReceiver instance. The ImageReceiver acts as the receiver and consumer of images.Its parameter properties do not actually affect the received images. The configuration of image properties should be done on the sending side (the producer), such as when creating a camera preview stream with [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-camera-cameramanager-i.md#createpreviewoutput-1).Before calling any APIs in ImageReceiver, you must use [image.createImageReceiver](arkts-image-image-createimagereceiver-f.md#createimagereceiver-2)to create an ImageReceiver instance.Since API version 23, you are advised to use [image.createImageReceiver](arkts-image-image-createimagereceiver-f.md#createimagereceiver-2) to create an **ImageReceiver** instance based on the passed [ImageReceiverOptions](arkts-image-image-imagereceiveroptions-i.md).Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call [release](arkts-image-image-imagereceiver-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 9

<!--Device-image-interface ImageReceiver--><!--Device-image-interface ImageReceiver-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## getReceivingSurfaceId

```TypeScript
getReceivingSurfaceId(callback: AsyncCallback<string>): void
```

Obtains a surface ID for the camera or other components. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-ImageReceiver-getReceivingSurfaceId(callback: AsyncCallback<string>): void--><!--Device-ImageReceiver-getReceivingSurfaceId(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the surface ID obtained. Otherwise, **err** is an error object. |

## getReceivingSurfaceId

```TypeScript
getReceivingSurfaceId(): Promise<string>
```

Obtains a surface ID for the camera or other components. This API uses a promise to return the result.

**Since:** 9

<!--Device-ImageReceiver-getReceivingSurfaceId(): Promise<string>--><!--Device-ImageReceiver-getReceivingSurfaceId(): Promise<string>-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the surface ID. |

## off('imageArrival')

```TypeScript
off(type: 'imageArrival', callback?: AsyncCallback<void>): void
```

Unregisters the callback function that is triggered when the buffer is released. This API uses an asynchronous callback to return the result.

**Since:** 13

<!--Device-ImageReceiver-off(type: 'imageArrival', callback?: AsyncCallback<void>): void--><!--Device-ImageReceiver-off(type: 'imageArrival', callback?: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imageArrival' | Yes | Type of event, which is **'imageArrival'**. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | No | Callback to unregister. |

## on('imageArrival')

```TypeScript
on(type: 'imageArrival', callback: AsyncCallback<void>): void
```

Listens for image arrival events. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-ImageReceiver-on(type: 'imageArrival', callback: AsyncCallback<void>): void--><!--Device-ImageReceiver-on(type: 'imageArrival', callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'imageArrival' | Yes | Type of event to listen for. The value is fixed at **'imageArrival'**, which is triggered when an image is received. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

## readLatestImage

```TypeScript
readLatestImage(callback: AsyncCallback<Image>): void
```

Reads the latest image from the ImageReceiver instance. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> This API can be called to receive data only after the  
> [on](arkts-image-image-imagereceiver-i.md#on-1) callback is triggered.  
> When the [Image](arkts-image-image-image-i.md) object returned by this API is no longer needed, call  
> [release](arkts-image-image-image-i.md#release-1) to release the  
> object. New data can be received only after the release.

**Since:** 9

<!--Device-ImageReceiver-readLatestImage(callback: AsyncCallback<Image>): void--><!--Device-ImageReceiver-readLatestImage(callback: AsyncCallback<Image>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Image> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the latest image obtained; otherwise, **err** is an error object. |

## readLatestImage

```TypeScript
readLatestImage(): Promise<Image>
```

Reads the latest image from the ImageReceiver instance. This API uses a promise to return the result.

> **NOTE**  
>  
> This API can be called to receive data only after the  
> [on](arkts-image-image-imagereceiver-i.md#on-1) callback is triggered.  
> When the [Image](arkts-image-image-image-i.md) object returned by this API is no longer needed, call  
> [release](arkts-image-image-image-i.md#release-1) to release the  
> object. New data can be received only after the release.

**Since:** 9

<!--Device-ImageReceiver-readLatestImage(): Promise<Image>--><!--Device-ImageReceiver-readLatestImage(): Promise<Image>-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Image> | Promise used to return the latest image. |

## readNextImage

```TypeScript
readNextImage(callback: AsyncCallback<Image>): void
```

Reads the next image from the ImageReceiver instance. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> This API can be called to receive data only after the  
> [on](arkts-image-image-imagereceiver-i.md#on-1) callback is triggered.  
> When the [Image](arkts-image-image-image-i.md) object returned by this API is no longer needed, call  
> [release](arkts-image-image-image-i.md#release-1) to release the  
> object. New data can be received only after the release.

**Since:** 9

<!--Device-ImageReceiver-readNextImage(callback: AsyncCallback<Image>): void--><!--Device-ImageReceiver-readNextImage(callback: AsyncCallback<Image>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Image> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the next image obtained. Otherwise, **err** is an error object. |

## readNextImage

```TypeScript
readNextImage(): Promise<Image>
```

Reads the next image from the ImageReceiver instance. This API uses a promise to return the result.

> **NOTE**  
>  
> This API can be called to receive data only after the  
> [on](arkts-image-image-imagereceiver-i.md#on-1) callback is triggered.  
> When the [Image](arkts-image-image-image-i.md) object returned by this API is no longer needed, call  
> [release](arkts-image-image-image-i.md#release-1) to release the  
> object. New data can be received only after the release.

**Since:** 9

<!--Device-ImageReceiver-readNextImage(): Promise<Image>--><!--Device-ImageReceiver-readNextImage(): Promise<Image>-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Image> | Promise used to return the next image. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this ImageReceiver instance. This API uses an asynchronous callback to return the result.

Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call this API to free the memory promptly.

Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 9

<!--Device-ImageReceiver-release(callback: AsyncCallback<void>): void--><!--Device-ImageReceiver-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases this ImageReceiver instance. This API uses a promise to return the result.

Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call this API to free the memory promptly.

Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 9

<!--Device-ImageReceiver-release(): Promise<void>--><!--Device-ImageReceiver-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## capacity

```TypeScript
readonly capacity: number
```

Maximum number of images that can be accessed at the same time. This parameter is used only as an expected value.The actual capacity is determined by the device hardware.

**Type:** number

**Since:** 9

<!--Device-ImageReceiver-readonly capacity: int--><!--Device-ImageReceiver-readonly capacity: int-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## format

```TypeScript
readonly format: ImageFormat
```

Image format. The value is an enum value of [ImageFormat](arkts-image-image-imageformat-e.md). (Currently, only **ImageFormat:JPEG** is supported. The format actually returned depends on the producer, for example, camera.)

**Type:** ImageFormat

**Since:** 9

<!--Device-ImageReceiver-readonly format: ImageFormat--><!--Device-ImageReceiver-readonly format: ImageFormat-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## size

```TypeScript
readonly size: Size
```

Image size. This parameter does not affect the size of the received image. The actual returned size is determined by the producer, for example, the camera.

**Type:** Size

**Since:** 9

<!--Device-ImageReceiver-readonly size: Size--><!--Device-ImageReceiver-readonly size: Size-End-->

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

