# PhotoViewPicker

Provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.

**起始版本：** 12

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## select

```TypeScript
select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>
```

Starts a **photoPicker** page for the user to select one or more images or videos. This API uses a promise to return the result. You can pass in **PhotoSelectOptions** to specify the type and maximum number of the files to select. A **PhotoSelectResult** object is returned. > **NOTE** > > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used > only by calling > [photoAccessHelper.getAssets](arkts-photoaccesshelper-photoaccesshelper-i.md#getAssets) > . For details, see > [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PhotoSelectResult> | Promise used to return information about the images or videos selected. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 13900042 | Unknown error |
| 23800151 | Scene parameters validate failed, possible causes:  1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.  Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;  2. An illegal enumeration value was passed to PhotoSelectOptions.assetCompatibleAbility. [since 12] |

## select

```TypeScript
select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | PhotoSelectOptions | 是 | represents the options provided in select mode. |
| callback | AsyncCallback&lt;PhotoSelectResult> | 是 | Returns the PhotoSelectResult by photo picker |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 13900042 | Unknown error |
| 23800151 | Scene parameters validate failed, possible causes:  1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.  Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration; |

## select

```TypeScript
select(callback: AsyncCallback<PhotoSelectResult>): void
```

Pull up the photo picker based on the selection mode.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PhotoSelectResult> | 是 | Returns the PhotoSelectResult by photo picker |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 13900042 | Unknown error |

