# media_asset_manager_capi.h

## Overview

Defines the media asset manager APIs.Uses the Native APIs provided by Media Asset Managerto request media source.

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_MediaAssetManager* OH_MediaAssetManager_Create(void)](#oh_mediaassetmanager_create) | Create a media asset manager. |
| [MediaLibrary_RequestId OH_MediaAssetManager_RequestImageForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)](#oh_mediaassetmanager_requestimageforpath) | Request image source with dest path. |
| [MediaLibrary_RequestId OH_MediaAssetManager_RequestVideoForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)](#oh_mediaassetmanager_requestvideoforpath) | Request video source with dest path. |
| [bool OH_MediaAssetManager_CancelRequest(OH_MediaAssetManager* manager, const MediaLibrary_RequestId requestId)](#oh_mediaassetmanager_cancelrequest) | Cancel request by request id. |
| [MediaLibrary_ErrorCode OH_MediaAssetManager_RequestMovingPhoto(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnMovingPhotoDataPrepared callback)](#oh_mediaassetmanager_requestmovingphoto) | Request moving photo object. |
| [MediaLibrary_ErrorCode OH_MediaAssetManager_RequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnImageDataPrepared callback)](#oh_mediaassetmanager_requestimage) | Request image resources based on different strategy modes. |
| [MediaLibrary_ErrorCode OH_MediaAssetManager_Release(OH_MediaAssetManager* manager)](#oh_mediaassetmanager_release) | Release the [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance. |
| [MediaLibrary_ErrorCode OH_MediaAssetManager_QuickRequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnQuickImageDataPrepared callback)](#oh_mediaassetmanager_quickrequestimage) | Request image quickly resources based on different strategy modes. |

## Function description

### OH_MediaAssetManager_Create()

```c
OH_MediaAssetManager* OH_MediaAssetManager_Create(void)
```

**Description**

Create a media asset manager.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [OH_MediaAssetManager*](capi-mediaassetmanager-oh-mediaassetmanager.md) | Returns a pointer to an OH_MediaAssetManager instance. |

### OH_MediaAssetManager_RequestImageForPath()

```c
MediaLibrary_RequestId OH_MediaAssetManager_RequestImageForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)
```

**Description**

Request image source with dest path.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | Pointer to an OH_MediaAssetManager instance. |
| const char* uri | The uri of the requested image resource. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) requestOptions | Options model for requesting resource. |
| const char* destPath | Destination address of the requested resource. |
| [OH_MediaLibrary_OnDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_ondataprepared) callback | Called when a requested source is prepared. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) | Return Request id. |

### OH_MediaAssetManager_RequestVideoForPath()

```c
MediaLibrary_RequestId OH_MediaAssetManager_RequestVideoForPath(OH_MediaAssetManager* manager, const char* uri, MediaLibrary_RequestOptions requestOptions, const char* destPath, OH_MediaLibrary_OnDataPrepared callback)
```

**Description**

Request video source with dest path.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | Pointer to an OH_MediaAssetManager instance. |
| const char* uri | The uri of the requested video resource. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) requestOptions | Options model for requesting resource. |
| const char* destPath | Destination address of the requested resource. |
| [OH_MediaLibrary_OnDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_ondataprepared) callback | Called when a requested source is prepared. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) | Return Request id. |

### OH_MediaAssetManager_CancelRequest()

```c
bool OH_MediaAssetManager_CancelRequest(OH_MediaAssetManager* manager, const MediaLibrary_RequestId requestId)
```

**Description**

Cancel request by request id.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | Pointer to an OH_MediaAssetManager instance. |
| [const MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) requestId | The request id to be canceled. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns true if the request is canceled successfully; returns false otherwise. |

### OH_MediaAssetManager_RequestMovingPhoto()

```c
MediaLibrary_ErrorCode OH_MediaAssetManager_RequestMovingPhoto(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnMovingPhotoDataPrepared callback)
```

**Description**

Request moving photo object.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | the pointer to [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance. |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance of media file object to be requested. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) requestOptions | the [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) for image request strategy mode. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md)* requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request, which is an output parameter. |
| [OH_MediaLibrary_OnMovingPhotoDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onmovingphotodataprepared) callback | the [OH_MediaLibrary_OnMovingPhotoDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onmovingphotodataprepared) that will be calledwhen the requested source is prepared. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAssetManager_RequestImage()

```c
MediaLibrary_ErrorCode OH_MediaAssetManager_RequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnImageDataPrepared callback)
```

**Description**

Request image resources based on different strategy modes.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | the pointer to [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance. |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance of media file object to be requested. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) requestOptions | the [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) for image request strategy mode. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md)* requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request, which is an output parameter. |
| [OH_MediaLibrary_OnImageDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onimagedataprepared) callback | the [OH_MediaLibrary_OnImageDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onimagedataprepared) that will be calledwhen the requested source is prepared. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAssetManager_Release()

```c
MediaLibrary_ErrorCode OH_MediaAssetManager_Release(OH_MediaAssetManager* manager)
```

**Description**

Release the [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | the [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed. |

### OH_MediaAssetManager_QuickRequestImage()

```c
MediaLibrary_ErrorCode OH_MediaAssetManager_QuickRequestImage(OH_MediaAssetManager* manager, OH_MediaAsset* mediaAsset, MediaLibrary_RequestOptions requestOptions, MediaLibrary_RequestId* requestId, OH_MediaLibrary_OnQuickImageDataPrepared callback)
```

**Description**

Request image quickly resources based on different strategy modes.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md)* manager | the pointer to [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) instance. |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance of media file object to be requested. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) requestOptions | the [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) for image request strategy mode. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md)* requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request, which is an output parameter. |
| [OH_MediaLibrary_OnQuickImageDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onquickimagedataprepared) callback | the [OH_MediaLibrary_OnQuickImageDataPrepared](capi-media-asset-base-capi-h.md#oh_medialibrary_onquickimagedataprepared) that will be calledwhen the requested source is prepared. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |


