# MediaAssetManager

The MediaAssetManager class is used for manipulating the read and write operations of media assets.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## cancelRequest

```TypeScript
static cancelRequest(context: Context, requestId: string): Promise<void>
```

Cancels a request for the asset, the callback of which has not been triggered yet.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| requestId | string | 是 | ID of the request to cancel. It is a valid request ID returned by requestImage. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

## loadMovingPhoto

```TypeScript
static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>
```

Load moving photo

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | AbilityContext or UIExtensionContext instance. |
| imageFileUri | string | 是 | image file uri of the moving photo to be loaded |
| videoFileUri | string | 是 | video file uri of the moving photo to be loaded |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MovingPhoto> | Returns moving photo |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error  @static |

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

**起始版本：** 13

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| asset | PhotoAsset | 是 | Image to request. |
| requestOptions | RequestOptions | 是 | Options for requesting the image. |
| dataHandler | QuickImageDataHandler&lt;image.Picture> | 是 | Media asset handler,  which invokes a callback to return the image when the requested image is ready. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns request id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error  @static |

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| asset | PhotoAsset | 是 | Image to request. |
| requestOptions | RequestOptions | 是 | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;image.ImageSource> | 是 | Media asset handler,  which invokes a callback to return the image when the requested image is ready. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns request id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| asset | PhotoAsset | 是 | Image to request. |
| requestOptions | RequestOptions | 是 | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;ArrayBuffer> | 是 | Media asset handler,  which invokes a callback to return the image when the requested image is ready. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns request id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail  @static |

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

**起始版本：** 18

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| asset | PhotoAsset | 是 | Image to request. |
| requestOptions | RequestOptions | 是 | Options for requesting the image. |
| dataHandler | MediaAssetDataHandler&lt;MovingPhoto> | 是 | Media asset handler,  which invokes a callback to return the image when the requested image is ready. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns request id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14000011 | System inner fail  @static |

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

**起始版本：** 15

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the ability instance. |
| asset | PhotoAsset | 是 | Image to request. |
| requestOptions | RequestOptions | 是 | Options for requesting the video asset. |
| fileUri | string | 是 | the destination file uri to save the video data |
| dataHandler | MediaAssetDataHandler&lt;boolean> | 是 | Media asset handler.  When the requested video is written to the specified directory, a callback is triggered. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns request id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14000011 | System inner fail  @static |

