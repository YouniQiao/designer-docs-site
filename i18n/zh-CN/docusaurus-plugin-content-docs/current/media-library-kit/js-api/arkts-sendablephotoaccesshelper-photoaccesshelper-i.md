# PhotoAccessHelper

Helper functions to access photos and albums.

**继承实现关系：** PhotoAccessHelper继承自：lang.ISendable。

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## createAsset

```TypeScript
createAsset(displayName: string): Promise<PhotoAsset>
```

Creates an asset with the specified file name. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | File name of the asset to create. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PhotoAsset> | Returns the newly created asset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | Internal system error |

## createAsset

```TypeScript
createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>
```

Create a photo asset

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayName | string | 是 | Asset name |
| options | photoAccessHelper.PhotoCreateOptions | 是 | Create operation |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PhotoAsset> | Returns the newly created asset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by non-system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | Internal system error |

## createAsset

```TypeScript
createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>
```

Creates an image or video asset with the specified file type, file name extension, and options. This API uses a promise to return the result. If the caller does not have the ohos.permission.WRITE_IMAGEVIDEO permission, you can create a media asset by using a security component. For details, see Creating a Media Asset Using a Security Component.

**起始版本：** 12

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| photoType | PhotoType | 是 | Type of the file to create, which can be IMAGE or VIDEO. |
| extension | string | 是 | File name extension, for example, 'jpg'. The value contains 1 to 255 characters. |
| options | photoAccessHelper.CreateOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the uri of the newly created asset |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getAlbums

```TypeScript
getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>
```

Obtains albums. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | - Returns the fetch result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getAlbums

```TypeScript
getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>
```

Obtains albums based on the specified options and album type. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AlbumType | 是 | Type of the albums to obtain. |
| subtype | AlbumSubtype | 是 | Subtype of the album. |
| options | photoAccessHelper.FetchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | - Returns the fetch result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getAssets

```TypeScript
getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Obtains media assets. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | 是 | Options for fetching the media assets. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getBurstAssets

```TypeScript
getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>
```

Obtains burst assets. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| burstKey | string | 是 | Burst asset options. |
| options | photoAccessHelper.FetchOptions | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;PhotoAsset>> | Returns the fetch result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getHiddenAlbums

```TypeScript
getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode,
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>
```

Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | photoAccessHelper.HiddenPhotosDisplayMode | 是 | Display mode of hidden albums. |
| options | photoAccessHelper.FetchOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;FetchResult&lt;Album>> | Returns fetchResult of albums containing hidden assets. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

## getPhotoAssets

```TypeScript
getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>
```

Get PhotoAsset objects from ValuesBucket record info.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetsData | photoAccessHelper.ValuesBucket[] | 是 | Array of asset records. Each element in the array  contains the asset's column names and their values. The array size cannot exceed 500. Each element in the  array must contain the following asset column information: file_id, data, display_name, media_type, and  subtype. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PhotoAsset[]> | Returns an array of PhotoAsset objects (may be empty). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | The scenario parameter verification fails. Possible causes:  1. Invalid value type in ValuesBucket;  2. Missing required column in ValuesBucket;  3. Array size exceeds 500. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

## getSharedPhotoAssets

```TypeScript
getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>
```

Fetch shared photo assets.

**起始版本：** 14

**需要权限：** 

 ohos.permission.ACCESS_MEDIALIB_THUMB_DB

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | photoAccessHelper.FetchOptions | 是 | Fetch options. |

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

## release

```TypeScript
release(): Promise<void>
```

Releases this PhotoAccessHelper instance. This API uses a promise to return the result. Call this API when the APIs of the PhotoAccessHelper instance are no longer used.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | Internal system error |

