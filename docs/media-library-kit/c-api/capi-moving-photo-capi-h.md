# moving_photo_capi.h

## Overview

Defines APIs related to moving photo.Provides the ability to obtain moving photo information.

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 13

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [MediaLibrary_ErrorCode OH_MovingPhoto_GetUri(OH_MovingPhoto* movingPhoto, const char** uri)](#oh_movingphoto_geturi) | Get uri of the moving photo. |
| [MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithUris(OH_MovingPhoto* movingPhoto, char* imageUri, char* videoUri)](#oh_movingphoto_requestcontentwithuris) | Request the image and video content of the moving photo and write to destination uri. |
| [MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithUri(OH_MovingPhoto* movingPhoto, MediaLibrary_ResourceType resourceType, char* uri)](#oh_movingphoto_requestcontentwithuri) | Request the image or video content of the moving photo and write to destination uri. |
| [MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithBuffer(OH_MovingPhoto* movingPhoto, MediaLibrary_ResourceType resourceType, const uint8_t** buffer, uint32_t* size)](#oh_movingphoto_requestcontentwithbuffer) | Request data of the moving photo. |
| [MediaLibrary_ErrorCode OH_MovingPhoto_Release(OH_MovingPhoto* movingPhoto)](#oh_movingphoto_release) | Release the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |

## Function description

### OH_MovingPhoto_GetUri()

```c
MediaLibrary_ErrorCode OH_MovingPhoto_GetUri(OH_MovingPhoto* movingPhoto, const char** uri)
```

**Description**

Get uri of the moving photo.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)* movingPhoto | the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |
| const char** uri | the uri of the moving photo. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MovingPhoto_RequestContentWithUris()

```c
MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithUris(OH_MovingPhoto* movingPhoto, char* imageUri, char* videoUri)
```

**Description**

Request the image and video content of the moving photo and write to destination uri.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)* movingPhoto | the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |
| char* imageUri | the destination file uri to save the image data. |
| char* videoUri | the destination file uri to save the video data. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MovingPhoto_RequestContentWithUri()

```c
MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithUri(OH_MovingPhoto* movingPhoto, MediaLibrary_ResourceType resourceType, char* uri)
```

**Description**

Request the image or video content of the moving photo and write to destination uri.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)* movingPhoto | the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |
| [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) resourceType | the [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) of the moving photo content to request. |
| char* uri | the destination file uri to save the data. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MovingPhoto_RequestContentWithBuffer()

```c
MediaLibrary_ErrorCode OH_MovingPhoto_RequestContentWithBuffer(OH_MovingPhoto* movingPhoto, MediaLibrary_ResourceType resourceType, const uint8_t** buffer, uint32_t* size)
```

**Description**

Request data of the moving photo.

**Required permission**: ohos.permission.READ_IMAGEVIDEO

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)* movingPhoto | the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |
| [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) resourceType | the [MediaLibrary_ResourceType](capi-media-asset-base-capi-h.md#medialibrary_resourcetype) of the moving photo content to request. |
| const uint8_t** buffer | the buffer of the content. |
| uint32_t* size | the size of the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MovingPhoto_Release()

```c
MediaLibrary_ErrorCode OH_MovingPhoto_Release(OH_MovingPhoto* movingPhoto)
```

**Description**

Release the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)* movingPhoto | the [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed. |


