# MediaAssetManager

The MediaAssetManager class is used for manipulating the read and write operations of media assets.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## cancelRequest

```TypeScript
static cancelRequest(context: Context, requestId: string): Promise<void>
```

Cancels a request for the asset, the callback of which has not been triggered yet.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| requestId | string | Yes | ID of the request to cancel. It is a valid request ID returned by requestImage. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail@static |

## loadMovingPhoto

```TypeScript
static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>
```

Load moving photo

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | AbilityContext or UIExtensionContext instance. |
| imageFileUri | string | Yes | image file uri of the moving photo to be loaded |
| videoFileUri | string | Yes | video file uri of the moving photo to be loaded |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MovingPhoto&gt; | Returns moving photo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error@static |

## quickRequestImage

```TypeScript
static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>
```

Requests an image quickly.

**Since:** 13

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| asset | PhotoAsset | Yes | Image to request. |
| requestOptions | RequestOptions | Yes | Options for requesting the image. |
| dataHandler | QuickImageDataHandler&lt;image.Picture&gt; | Yes | Media asset handler,<br>which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns request id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error@static |

## requestImage

```TypeScript
static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>
```

Request image

**Since:** 11

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| asset | PhotoAsset | Yes | Image to request. |
| requestOptions | RequestOptions | Yes | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;image.ImageSource&gt; | Yes | Media asset handler,<br>which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns request id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail@static |

## requestImageData

```TypeScript
static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>
```

Requests image data.

**Since:** 11

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| asset | PhotoAsset | Yes | Image to request. |
| requestOptions | RequestOptions | Yes | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;ArrayBuffer&gt; | Yes | Media asset handler,<br>which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns request id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail@static |

## requestMovingPhoto

```TypeScript
static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>
```

Requests a moving photo object, which can be used to request the asset data of the moving photo.

**Since:** 18

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| asset | PhotoAsset | Yes | Image to request. |
| requestOptions | RequestOptions | Yes | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;MovingPhoto&gt; | Yes | Media asset handler,<br>which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns request id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 14000011 | System inner fail@static |

## requestVideoFile

```TypeScript
static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>
```

Request video file

**Since:** 15

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability instance. |
| asset | PhotoAsset | Yes | Image to request. |
| requestOptions | RequestOptions | Yes | Options for requesting the video asset. |
| fileUri | string | Yes | the destination file uri to save the video data |
| dataHandler | MediaAssetDataHandler&lt;boolean&gt; | Yes | Media asset handler.<br>When the requested video is written to the specified directory, a callback is triggered. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns request id |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| 14000011 | System inner fail@static |

