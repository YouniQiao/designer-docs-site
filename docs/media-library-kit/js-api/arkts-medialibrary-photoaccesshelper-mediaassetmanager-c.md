# MediaAssetManager

The MediaAssetManager class is used for manipulating the read and write operations of media assets.

**Since:** 11

<!--Device-photoAccessHelper-class MediaAssetManager--><!--Device-photoAccessHelper-class MediaAssetManager-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## cancelRequest

```TypeScript
static cancelRequest(context: Context, requestId: string): Promise<void>
```

Cancels a request for the asset, the callback of which has not been triggered yet. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static cancelRequest(context: Context, requestId: string): Promise<void>--><!--Device-MediaAssetManager-static cancelRequest(context: Context, requestId: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| requestId | string | Yes | ID of the request to cancel. It is a valid request ID returned by **requestImage**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail |

## loadMovingPhoto

```TypeScript
static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>
```

Loads a moving photo in the application sandbox. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-MediaAssetManager-static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>--><!--Device-MediaAssetManager-static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | AbilityContext or UIExtensionContext instance. |
| imageFileUri | string | Yes | URI of the image file of the moving photo in the application sandbox.<br>Example: **'file://com.example.temptest/data/storage/el2/base/haps/ImageFile.jpg'**. |
| videoFileUri | string | Yes | URI of the video file of the moving photo in the application sandbox.<br>Example: **'file://com.example.temptest/data/storage/el2/base/haps/VideoFile.mp4'**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<MovingPhoto> | Promise used to return the [MovingPhoto](arkts-file-photoaccesshelper.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error |

## quickRequestImage

```TypeScript
static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>
```

Requests an image quickly. This API uses a promise to return the result.

**Since:** 13

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>--><!--Device-MediaAssetManager-static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| asset | [PhotoAsset](arkts-medialibrary-sendablephotoaccesshelper-photoasset-i.md) | Yes | Image to request. |
| requestOptions | [RequestOptions](arkts-medialibrary-photoaccesshelper-requestoptions-i.md) | Yes | Options for requesting the image. |
| dataHandler | [QuickImageDataHandler](arkts-medialibrary-photoaccesshelper-quickimagedatahandler-i.md)<image.Picture> | Yes | Media asset handler, which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the request ID, which can be used in [cancelRequest](arkts-medialibrary-photoaccesshelper-mediaassetmanager-c.md#cancelrequest-1) to cancel a request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error |

## requestImage

```TypeScript
static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>
```

Requests an image. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>--><!--Device-MediaAssetManager-static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| asset | [PhotoAsset](arkts-medialibrary-sendablephotoaccesshelper-photoasset-i.md) | Yes | Image to request. |
| requestOptions | [RequestOptions](arkts-medialibrary-photoaccesshelper-requestoptions-i.md) | Yes | Options for requesting the image. |
| dataHandler | [MediaAssetDataHandler](arkts-medialibrary-photoaccesshelper-mediaassetdatahandler-i.md)<image.ImageSource> | Yes | Media asset handler, which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the request ID, which can be used in [cancelRequest](arkts-medialibrary-photoaccesshelper-mediaassetmanager-c.md#cancelrequest-1) to cancel a request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail. Possible causes:<br>1. The database is corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

## requestImageData

```TypeScript
static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>
```

Requests image data. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>--><!--Device-MediaAssetManager-static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| asset | [PhotoAsset](arkts-medialibrary-sendablephotoaccesshelper-photoasset-i.md) | Yes | Image to request. |
| requestOptions | [RequestOptions](arkts-medialibrary-photoaccesshelper-requestoptions-i.md) | Yes | Options for requesting the image. |
| dataHandler | [MediaAssetDataHandler](arkts-medialibrary-photoaccesshelper-mediaassetdatahandler-i.md)<ArrayBuffer> | Yes | Media asset handler, which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the request ID, which can be used in [cancelRequest](arkts-medialibrary-photoaccesshelper-mediaassetmanager-c.md#cancelrequest-1) to cancel a request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | System inner fail. Possible causes:<br>1. The database is corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

## requestMovingPhoto

```TypeScript
static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>
```

Requests a moving photo object, which can be used to request the asset data of the moving photo. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>--><!--Device-MediaAssetManager-static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| asset | [PhotoAsset](arkts-medialibrary-sendablephotoaccesshelper-photoasset-i.md) | Yes | Image to request. |
| requestOptions | [RequestOptions](arkts-medialibrary-photoaccesshelper-requestoptions-i.md) | Yes | Options for requesting the image. |
| dataHandler | [MediaAssetDataHandler](arkts-medialibrary-photoaccesshelper-mediaassetdatahandler-i.md)<MovingPhoto> | Yes | Media asset handler, which invokes a callback to return the image when the requested image is ready. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the request ID, which can be used in [cancelRequest](arkts-medialibrary-photoaccesshelper-mediaassetmanager-c.md#cancelrequest-1) to cancel a request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |
| 14000011 | System inner fail |

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

Requests a video and saves it to the specified sandbox directory. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-MediaAssetManager-static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>--><!--Device-MediaAssetManager-static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Context of the ability instance. |
| asset | [PhotoAsset](arkts-medialibrary-sendablephotoaccesshelper-photoasset-i.md) | Yes | Image to request. |
| requestOptions | [RequestOptions](arkts-medialibrary-photoaccesshelper-requestoptions-i.md) | Yes | Options for requesting the video asset. |
| fileUri | string | Yes | URI of the sandbox directory, to which the requested video asset is to be saved.Example: **'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.mp4'**. |
| dataHandler | [MediaAssetDataHandler](arkts-medialibrary-photoaccesshelper-mediaassetdatahandler-i.md)<boolean> | Yes | Media asset handler. When the requested video is written to the specified directory, a callback is triggered.<br>If the video is successfully written, **true** is returned. Otherwise, **false** is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the request ID, which can be used in [cancelRequest](arkts-medialibrary-photoaccesshelper-mediaassetmanager-c.md#cancelrequest-1) to cancel a request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 15 and later |
| 14000011 | System inner fail. Possible causes:<br>1. The database is corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

