# PhotoAsset

Defines the photo asset

**Inheritance:** PhotoAssetextends: lang.ISendable.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Commits the modification on the file metadata to the database. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## convertToPhotoAsset

```TypeScript
convertToPhotoAsset(): photoAccessHelper.PhotoAsset
```

Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| photoAccessHelper.PhotoAsset | Returns the instance if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 14000011 | Internal system error |

## get

```TypeScript
get(member: string): photoAccessHelper.MemberType
```

Obtains a PhotoAsset member parameter.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the member parameter to obtain.  Except 'uri', 'media_type', 'subtype', and 'display_name', you must pass in PhotoKeys in fetchColumns.  For example, to obtain the title, pass in fetchColumns: ['title']. |

**Return value:**

| Type | Description |
| --- | --- |
| photoAccessHelper.MemberType | Returns the value of the specified photo asset member |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getAnalysisData

```TypeScript
getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>
```

Get analysis data of the asset.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| analysisType | photoAccessHelper.AnalysisType | Yes | Analysis type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns analysis info into a json string |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | Returns the thumbnail's pixelMap. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## requestSource

```TypeScript
requestSource(): Promise<number>
```

Opens the source file to obtain the file descriptor (FD). This API uses a promise to return the result.

**Since:** 12

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Returns opened source asset fd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 14000011 | Internal system error |

## set

```TypeScript
set(member: string, value: string): void
```

Sets a PhotoAsset member parameter.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the parameter to set, for example, PhotoKeys.TITLE.  The value contains 1 to 255 characters. |
| value | string | Yes | Value to set. Only the value of PhotoKeys. TITLE can be changed.  The title must meet the following requirements:  - It does not contain a file name extension.  - The file name, which is in the format of title+file name extension, does not exceed 255 characters.  - The title does not contain any of the following characters:\ / :  ? " ' ` \| { } [ ] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## displayName

```TypeScript
readonly displayName: string
```

Display name (with a file name extension) of the asset.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoType

```TypeScript
readonly photoType: PhotoType
```

Photo type, image or video

**Type:** PhotoType

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
readonly uri: string
```

uri of the asset.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

