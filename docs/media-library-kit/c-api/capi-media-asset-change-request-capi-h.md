# media_asset_change_request_capi.h

## Overview

Defines APIs related to media asset change request.Provides the ability to change assets.

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)](#oh_mediaassetchangerequest_create) | Create a [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, char* fileUri)](#oh_mediaassetchangerequest_addresourcewithuri) | Add resource of the asset using file uri. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)](#oh_mediaassetchangerequest_addresourcewithbuffer) | Add resource of the asset using ArrayBuffer. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest, int32_t* fd)](#oh_mediaassetchangerequest_getwritecachehandler) | Get write cache handler. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ImageFileType imageFileType)](#oh_mediaassetchangerequest_savecameraphoto) | Save the photo asset captured by camera. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)](#oh_mediaassetchangerequest_discardcameraphoto) | Discard the photo asset captured by camera. |
| [MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)](#oh_mediaassetchangerequest_release) | Release the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |

## Function description

### OH_MediaAssetChangeRequest_Create()

```c
OH_MediaAssetChangeRequest* OH_MediaAssetChangeRequest_Create(OH_MediaAsset* mediaAsset)
```

**Description**

Create a [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest*](capi-mediaassetmanager-oh-mediaassetchangerequest.md) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAssetChangeRequest_AddResourceWithUri()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithUri(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, char* fileUri)
```

**Description**

Add resource of the asset using file uri.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |
| [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) resourceType | the [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) of the resource to add. |
| char* fileUri | the file uri. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_NO_SUCH_FILE](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if file does not exist.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported. |

### OH_MediaAssetChangeRequest_AddResourceWithBuffer()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_AddResourceWithBuffer(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ResourceType resourceType, uint8_t* buffer, uint32_t length)
```

**Description**

Add resource of the asset using ArrayBuffer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |
| [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) resourceType | the [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) of the resource to add. |
| uint8_t* buffer | the data buffer to add. |
| uint32_t length | the length of the data buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported. |

### OH_MediaAssetChangeRequest_GetWriteCacheHandler()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_GetWriteCacheHandler(OH_MediaAssetChangeRequest* changeRequest, int32_t* fd)
```

**Description**

Get write cache handler.

**Required permission**: ohos.permission.WRITE_IMAGEVIDEO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |
| int32_t* fd | the write cache handler. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported. |

### OH_MediaAssetChangeRequest_SaveCameraPhoto()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_SaveCameraPhoto(OH_MediaAssetChangeRequest* changeRequest, MediaLibrary_ImageFileType imageFileType)
```

**Description**

Save the photo asset captured by camera.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |
| [MediaLibrary_ImageFileType](capi-media-asset-base-capi-h.md#medialibrary_imagefiletype) imageFileType | The [MediaLibrary_ImageFileType](capi-media-asset-base-capi-h.md#medialibrary_imagefiletype) of photo to be saved. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported. |

### OH_MediaAssetChangeRequest_DiscardCameraPhoto()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_DiscardCameraPhoto(OH_MediaAssetChangeRequest* changeRequest)
```

**Description**

Discard the photo asset captured by camera.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error.<br>         [MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if operation is not supported. |

### OH_MediaAssetChangeRequest_Release()

```c
MediaLibrary_ErrorCode OH_MediaAssetChangeRequest_Release(OH_MediaAssetChangeRequest* changeRequest)
```

**Description**

Release the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed. |


