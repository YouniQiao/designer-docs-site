# PhotoAsset

Defines the photo asset

**继承实现关系：** PhotoAsset继承自：lang.ISendable。

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

Commits the modification on the file metadata to the database. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## convertToPhotoAsset

```TypeScript
convertToPhotoAsset(): photoAccessHelper.PhotoAsset
```

Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| photoAccessHelper.PhotoAsset | Returns the instance if the operation is successful. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## get

```TypeScript
get(member: string): photoAccessHelper.MemberType
```

Obtains a PhotoAsset member parameter.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| member | string | 是 | Name of the member parameter to obtain.  Except 'uri', 'media_type', 'subtype', and 'display_name', you must pass in PhotoKeys in fetchColumns.  For example, to obtain the title, pass in fetchColumns: ['title']. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| photoAccessHelper.MemberType | Returns the value of the specified photo asset member |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getAnalysisData

```TypeScript
getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>
```

Get analysis data of the asset.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| analysisType | photoAccessHelper.AnalysisType | 是 | Analysis type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns analysis info into a json string |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getThumbnail

```TypeScript
getThumbnail(size?: image.Size): Promise<image.PixelMap>
```

Obtains the file thumbnail of the given size. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | image.Size | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Returns the thumbnail's pixelMap. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## requestSource

```TypeScript
requestSource(): Promise<number>
```

Opens the source file to obtain the file descriptor (FD). This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Returns opened source asset fd. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 14000011 | Internal system error |

## set

```TypeScript
set(member: string, value: string): void
```

Sets a PhotoAsset member parameter.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| member | string | 是 | Name of the parameter to set, for example, PhotoKeys.TITLE.  The value contains 1 to 255 characters. |
| value | string | 是 | Value to set. Only the value of PhotoKeys. TITLE can be changed.  The title must meet the following requirements:  - It does not contain a file name extension.  - The file name, which is in the format of title+file name extension, does not exceed 255 characters.  - The title does not contain any of the following characters:\ / :  ? " ' ` \| { } [ ] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## displayName

```TypeScript
readonly displayName: string
```

Display name (with a file name extension) of the asset.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoType

```TypeScript
readonly photoType: PhotoType
```

Photo type, image or video

**类型：** PhotoType

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
readonly uri: string
```

uri of the asset.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

