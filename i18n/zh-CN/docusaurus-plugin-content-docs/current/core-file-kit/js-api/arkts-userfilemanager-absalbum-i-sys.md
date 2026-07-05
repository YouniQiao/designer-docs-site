# AbsAlbum

Defines the AbsAlbum.

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<FileAsset>>): void
```

Obtains files in an album. This method uses an asynchronous callback to return the files.

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.getAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Retrieval options. |
| callback | AsyncCallback&lt;FetchResult&lt;FileAsset>> | 是 | Callback used to return the files in the format of a FetchResult instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

## getPhotoAssets

```TypeScript
getPhotoAssets(options: FetchOptions): Promise<FetchResult<FileAsset>>
```

Obtains files in an album. This method uses a promise to return the files.

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.getAssets

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | FetchOptions | 是 | Retrieval options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;FileAsset>> | A Promise instance used to return the files in the format of a FetchResult instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 13900020 | if type options is not FetchOptions |

## albumName

```TypeScript
albumName: string
```

Album name.

**类型：** string

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumName

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## albumSubType

```TypeScript
readonly albumSubType: AlbumSubType
```

Album subtype

**类型：** AlbumSubType

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumSubType

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## albumType

```TypeScript
readonly albumType: AlbumType
```

Album type

**类型：** AlbumType

**起始版本：** 10

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumType

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## count

```TypeScript
readonly count: number
```

File count for the album

**类型：** number

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.count

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## dateModified

```TypeScript
readonly dateModified: number
```

Time when the album was modified. Unit: ms, The value must be an integer greater than or equal to 0.

**类型：** number

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.Album.dateModified

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## albumUri

```TypeScript
readonly albumUri: string
```

Album uri.

**类型：** string

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.albumUri

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## coverUri

```TypeScript
coverUri: string
```

CoverUri for the album

**类型：** string

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.AbsAlbum.coverUri

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

