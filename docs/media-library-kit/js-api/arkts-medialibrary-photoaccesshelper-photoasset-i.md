# PhotoAsset

PhotoAsset provides APIs for encapsulating file asset attributes.

**Since:** 10

<!--Device-photoAccessHelper-interface PhotoAsset--><!--Device-photoAccessHelper-interface PhotoAsset-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="clone"></a>
## clone

```TypeScript
clone(title: string): Promise<PhotoAsset>
```

Clones a media asset. The file name can be set, but the file type cannot be changed. This API uses a promise to return the result.

**Since:** 14

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

<!--Device-PhotoAsset-clone(title: string): Promise<PhotoAsset>--><!--Device-PhotoAsset-clone(title: string): Promise<PhotoAsset>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | Title of the cloned asset. The title must meet the following requirements:<br>- It must not contain a file name extension.<br>- The string length ranges from 1 to 255. (The asset file name is in the format of title + file name extension.)<br>- It must not contain any invalid characters, which are:\ / : * ? " ' ` < > \| { } [ ] |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PhotoAsset&gt; | Promise used to return the [PhotoAsset](arkts-file-photoaccesshelper.md) instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 14000011 | Internal system error. It is recommended to retry and check the logs.<br>Possible causes:<br>1. Database corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

<a id="close"></a>
## close

```TypeScript
close(fd: number, callback: AsyncCallback<void>): void
```

Closes the current file. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** close

<!--Device-PhotoAsset-close(fd: number, callback: AsyncCallback<void>): void--><!--Device-PhotoAsset-close(fd: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | FD of the file to close. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback function. If the current file is closed successfully, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail |

<a id="close-1"></a>
## close

```TypeScript
close(fd: number): Promise<void>
```

Closes the current file. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** close

<!--Device-PhotoAsset-close(fd: number): Promise<void>--><!--Device-PhotoAsset-close(fd: number): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | FD of the file to close. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="commitmodify"></a>
## commitModify

```TypeScript
commitModify(callback: AsyncCallback<void>): void
```

Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PhotoAsset-commitModify(callback: AsyncCallback<void>): void--><!--Device-PhotoAsset-commitModify(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback function. If the file metadata is modified successfully,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied<br>**Applicable version:** 11 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900012 | Permission denied<br>**Applicable version:** 10 and later |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

<a id="commitmodify-1"></a>
## commitModify

```TypeScript
commitModify(): Promise<void>
```

Commits the modification on the file metadata to the database. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PhotoAsset-commitModify(): Promise<void>--><!--Device-PhotoAsset-commitModify(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied<br>**Applicable version:** 11 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900012 | Permission denied<br>**Applicable version:** 10 and later |
| 13900020 | Invalid argument |
| 14000001 | Invalid display name |
| 14000011 | System inner fail |

<a id="get"></a>
## get

```TypeScript
get(member: string): MemberType
```

Obtains a **PhotoAsset** member parameter.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PhotoAsset-get(member: string): MemberType--><!--Device-PhotoAsset-get(member: string): MemberType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the member parameter to obtain. Except **'uri'**, **'media_type'**,**'subtype'**, and **'display_name'**, you need to pass in [PhotoKeys](arkts-medialibrary-photoaccesshelper-photokeys-e.md) in **fetchColumns**. For example,to obtain the title, pass in **fetchColumns: ['title']**. |

**Return value:**

| Type | Description |
| --- | --- |
| [MemberType](arkts-medialibrary-photoaccesshelper-membertype-t.md) | **PhotoAsset** member parameter obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 14000014 | The provided member must be a property name of PhotoKey. |

<a id="getreadonlyfd"></a>
## getReadOnlyFd

```TypeScript
getReadOnlyFd(callback: AsyncCallback<number>): void
```

Opens this file in read-only mode. This API uses an asynchronous callback to return the result.

The returned FD must be closed when it is not required.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** open

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-PhotoAsset-getReadOnlyFd(callback: AsyncCallback<number>): void--><!--Device-PhotoAsset-getReadOnlyFd(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback function. If the current file is opened successfully,**err** is **undefined**, and **data** is the file descriptor. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail. Possible causes:<br>1. The database is corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

<a id="getreadonlyfd-1"></a>
## getReadOnlyFd

```TypeScript
getReadOnlyFd(): Promise<number>
```

Opens this file in read-only mode. This API uses a promise to return the result.

The returned FD must be closed when it is not required.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** open

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

<!--Device-PhotoAsset-getReadOnlyFd(): Promise<number>--><!--Device-PhotoAsset-getReadOnlyFd(): Promise<number>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the FD of the file opened. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900020 | Invalid argument |
| 14000011 | System inner fail. Possible causes:<br>1. The database is corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

<a id="getthumbnail"></a>
## getThumbnail

```TypeScript
getThumbnail(callback: AsyncCallback<image.PixelMap>): void
```

Obtains the thumbnail of a file. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-PhotoAsset-getThumbnail(callback: AsyncCallback<image.PixelMap>): void--><!--Device-PhotoAsset-getThumbnail(callback: AsyncCallback<image.PixelMap>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;image.PixelMap&gt; | Yes | Callback function. If the thumbnail of a file is successfully obtained, **err** is **undefined**, and **data** is the PixelMap of the thumbnail. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getthumbnail-1"></a>
## getThumbnail

```TypeScript
getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void
```

Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-PhotoAsset-getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void--><!--Device-PhotoAsset-getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | Yes | Size of the thumbnail. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;image.PixelMap&gt; | Yes | Callback function. If the thumbnail of a file is successfully obtained, **err** is **undefined**, and **data** is the PixelMap of the thumbnail. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="getthumbnail-2"></a>
## getThumbnail

```TypeScript
getThumbnail(size?: image.Size): Promise<image.PixelMap>
```

Obtains the file thumbnail of the given size. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-PhotoAsset-getThumbnail(size?: image.Size): Promise<image.PixelMap>--><!--Device-PhotoAsset-getThumbnail(size?: image.Size): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | No | Size of the thumbnail. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Promise used to return the PixelMap of the thumbnail. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 14000011 | System inner fail |

<a id="set"></a>
## set

```TypeScript
set(member: string, value: string): void
```

Sets a **PhotoAsset** member parameter.

**Since:** 10

<!--Device-PhotoAsset-set(member: string, value: string): void--><!--Device-PhotoAsset-set(member: string, value: string): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the member parameter to set, for example,[PhotoKeys](arkts-medialibrary-photoaccesshelper-photokeys-e.md).TITLE. The string length ranges from 1 to 255. |
| value | string | Yes | Value of the member parameter to set. Only the value of [PhotoKeys](arkts-medialibrary-photoaccesshelper-photokeys-e.md).TITLE can be changed. The title must meet the following requirements:<br>- It must not contain a file name extension.<br>- The string length ranges from 1 to 255. (The asset file name is in the format of title + file name extension.)<br>- It must not contain any invalid characters, which are:\ / : * ? " ' ` < > \| { } [ ] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| 13900020 | Invalid argument |
| 14000014 | The provided member must be a property name of PhotoKey. |

## displayName

```TypeScript
readonly displayName: string
```

File name, including the file name extension, to display. The string length ranges from 1 to 255.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PhotoAsset-readonly displayName: string--><!--Device-PhotoAsset-readonly displayName: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoType

```TypeScript
readonly photoType: PhotoType
```

Type of the file.

**Type:** PhotoType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PhotoAsset-readonly photoType: PhotoType--><!--Device-PhotoAsset-readonly photoType: PhotoType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
readonly uri: string
```

Media asset URI, for example, **file://media/Photo/1/IMG_datetime_0001/displayName.jpg**. For details, see [Media File URI](docroot://file-management/user-file-uri-intro.md#media-file-uri).

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PhotoAsset-readonly uri: string--><!--Device-PhotoAsset-readonly uri: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

