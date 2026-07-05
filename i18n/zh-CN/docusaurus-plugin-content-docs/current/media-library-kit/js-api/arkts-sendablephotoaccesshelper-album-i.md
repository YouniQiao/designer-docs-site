# Album

Defines the album.

**继承实现关系：** Album继承自：AbsAlbum。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Commits the modification on the album attributes to the database. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## convertToPhotoAlbum

```TypeScript
convertToPhotoAlbum(): photoAccessHelper.Album
```

Converts this Sendable album to a non-Sendable album.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| photoAccessHelper.Album | Returns the instance if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## getFaceId

```TypeScript
getFaceId(): Promise<string>
```

Obtains the face identifier on the cover of a portrait album or group photo album.

**起始版本：** 13

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns tag_id if portrait album, Returns group_tag if group photo album,  Returns empty if not found. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 14000011 | Internal system error |

## videoCount

```TypeScript
readonly videoCount?: number
```

Number of video assets in the album

**类型：** number

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## imageCount

```TypeScript
readonly imageCount?: number
```

Number of image assets in the album

**类型：** number

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

