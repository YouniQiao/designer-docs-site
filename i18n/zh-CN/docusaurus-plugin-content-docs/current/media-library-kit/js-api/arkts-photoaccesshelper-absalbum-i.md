# AbsAlbum

Defines the abstract interface of albums.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getAssets

```TypeScript
getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void
```

Obtains image and video assets. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Options for fetching the image and video assets. |
| callback | AsyncCallback&lt;FetchResult&lt;PhotoAsset>> | 是 | Callback used to return the image and video assets obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getAssets

```TypeScript
getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Fetch assets in an album.

**起始版本：** 20

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Fetch options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets in an album.

**起始版本：** 13

**需要权限：** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Fetch options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;SharedPhotoAsset> | Returns the shared photo assets |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## changeTime

```TypeScript
readonly changeTime?: long
```

The change time of album Unit: second, The value must be greater than or equal to 0.

**类型：** long

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumName

```TypeScript
albumName: string
```

Album name.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## hidden

```TypeScript
readonly hidden?: boolean
```

The hidden state of album

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## lpath

```TypeScript
readonly lpath?: string
```

Lpath for the album, one album has a virtual path

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumType

```TypeScript
readonly albumType: AlbumType
```

Album type

**类型：** AlbumType

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverUriSource

```TypeScript
readonly coverUriSource?: CoverUriSource
```

Album cover uri source

**类型：** CoverUriSource

**起始版本：** 20

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## count

```TypeScript
readonly count: int
```

Number of assets in the album

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uploadStatus

```TypeScript
readonly uploadStatus: boolean
```

Album upload status, true means the albim and its assets will upload to cloud or hdc ,false means the albim and its assets will not upload to cloud or hdc

**类型：** boolean

**起始版本：** 22

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## albumUri

```TypeScript
readonly albumUri: string
```

Album uri.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## coverUri

```TypeScript
readonly coverUri: string
```

Cover uri for the album

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumSubtype

```TypeScript
readonly albumSubtype: AlbumSubtype
```

Album subtype

**类型：** AlbumSubtype

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

