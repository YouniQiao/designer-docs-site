# media_asset_base_capi.h

## Overview

Defines the structure and enumeration for Media Asset Manager.OH_MediaAssetManager structure: This structure provides the ability to request resources from a media library. <br> MediaLibrary_RequestId type: This type is returned when requesting a media library resource.The request ID is used to cancel the request. <br> MediaLibrary_DeliveryMode enumeration: This enumeration defines the delivery mode of the requested resources. <br> OH_MediaLibrary_OnDataPrepared function pointer: This function is called when the requested source is prepared. <br> MediaLibrary_RequestOptions structure: This structure provides options for requesting media library resources. <br>

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) | MediaLibrary_RequestId | Define MediaLibrary_RequestIdThis type is returned when requesting a media library resource.The request id is used to cancel the request.The value is all zero like "00000000-0000-0000-0000-000000000000" if the request fails. |
| [MediaLibrary_RequestOptions](capi-mediaassetmanager-medialibrary-requestoptions.md) | MediaLibrary_RequestOptions | Request OptionsThis structure provides options for requesting media library resources. |
| [OH_MediaAssetManager](capi-mediaassetmanager-oh-mediaassetmanager.md) | OH_MediaAssetManager | Define Media Asset ManagerThis structure provides the ability to request media library resources.Null pointer is returned if the creation fails. |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) | OH_MediaAssetChangeRequest | Define Media Asset Change RequestThis structure provides the ability to handle a media asset change request. |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) | OH_MovingPhoto | Define Moving PhotoThis structure provides the ability to obtain information about moving photo. |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) | OH_MediaAsset | Define Media AssetThis structure provides the ability to encapsulate file asset attributes. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [MediaLibrary_ErrorCode](#medialibrary_errorcode) | MediaLibrary_ErrorCode | Enum for media library error code. |
| [MediaLibrary_DeliveryMode](#medialibrary_deliverymode) | MediaLibrary_DeliveryMode | Delivery ModeThis enumeration defines the delivery mode of the requested resources.The delivery mode can be set to fast mode, high quality mode, or balanced mode. |
| [MediaLibrary_MediaType](#medialibrary_mediatype) | MediaLibrary_MediaType | Enum for media type. |
| [MediaLibrary_MediaSubType](#medialibrary_mediasubtype) | MediaLibrary_MediaSubType | Enum for media asset subtype. |
| [MediaLibrary_ResourceType](#medialibrary_resourcetype) | MediaLibrary_ResourceType | Enum for resource types. |
| [MediaLibrary_ImageFileType](#medialibrary_imagefiletype) | MediaLibrary_ImageFileType | Enum for image file Type. |
| [MediaLibrary_MediaQuality](#medialibrary_mediaquality) | MediaLibrary_MediaQuality | Enum for media quality. |
| [MediaLibrary_MediaContentType](#medialibrary_mediacontenttype) | MediaLibrary_MediaContentType | Enum for media content type. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_MediaLibrary_OnDataPrepared)(int32_t result, MediaLibrary_RequestId requestId)](#oh_medialibrary_ondataprepared) | OH_MediaLibrary_OnDataPrepared | Called when a requested source is prepared.This function is called when the requested source is prepared. |
| [typedef void (\*OH_MediaLibrary_OnImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative* imageSourceNative)](#oh_medialibrary_onimagedataprepared) | OH_MediaLibrary_OnImageDataPrepared | Called when a requested image source is prepared.This function is called when the requested image source is prepared. |
| [typedef void (\*OH_MediaLibrary_OnMovingPhotoDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_MovingPhoto* movingPhoto)](#oh_medialibrary_onmovingphotodataprepared) | OH_MediaLibrary_OnMovingPhotoDataPrepared | Called when a requested moving photo is prepared.This function is called when the requested moving photo is prepared. |
| [typedef void (\*OH_MediaLibrary_OnQuickImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative* imageSourceNative, OH_PictureNative* pictureNative)](#oh_medialibrary_onquickimagedataprepared) | OH_MediaLibrary_OnQuickImageDataPrepared | Called when a requested quickly image is prepared.This function is called when the requested quickly image is prepared.When there is an image buffer in the system,a picture object will be returned, reducing the decoding time. |

### Variable

| Name | Description |
| -- | -- |
| static const int32_t UUID_STR_MAX_LENGTH = 37 | Define UUID max lengthThis constant defines the maximum length of a UUID string.<br>**Since**: 12<br>**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core |

## Enum type description

### MediaLibrary_ErrorCode

```c
enum MediaLibrary_ErrorCode
```

**Description**

Enum for media library error code.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_OK = 0 | Media library result is ok. |
| MEDIA_LIBRARY_PERMISSION_DENIED = 201 | Permission is denied. |
| MEDIA_LIBRARY_PARAMETER_ERROR = 401 | Mandatory parameters are left unspecifiedor incorrect parameter types or parameter verification failed. |
| MEDIA_LIBRARY_NO_SUCH_FILE = 23800101 | File does not exist. |
| MEDIA_LIBRARY_INVALID_DISPLAY_NAME = 23800102 | Invalid display name. |
| MEDIA_LIBRARY_INVALID_ASSET_URI = 23800103 | Invalid asset uri. |
| MEDIA_LIBRARY_INVALID_PHOTO_KEY = 23800104 | Member is not a valid PhotoKey. |
| MEDIA_LIBRARY_OPERATION_NOT_SUPPORTED = 23800201 | Operation is not supported. |
| MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR = 23800301 | Internal system error.It is recommended to retry and check the logs.Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out. |

### MediaLibrary_DeliveryMode

```c
enum MediaLibrary_DeliveryMode
```

**Description**

Delivery ModeThis enumeration defines the delivery mode of the requested resources.The delivery mode can be set to fast mode, high quality mode, or balanced mode.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_FAST_MODE = 0 | delivery fast mode |
| MEDIA_LIBRARY_HIGH_QUALITY_MODE = 1 | delivery high quality mode |
| MEDIA_LIBRARY_BALANCED_MODE = 2 | delivery balanced mode |

### MediaLibrary_MediaType

```c
enum MediaLibrary_MediaType
```

**Description**

Enum for media type.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_IMAGE = 1 | image asset |
| MEDIA_LIBRARY_VIDEO = 2 | video asset |

### MediaLibrary_MediaSubType

```c
enum MediaLibrary_MediaSubType
```

**Description**

Enum for media asset subtype.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_DEFAULT = 0 | default Photo Type |
| MEDIA_LIBRARY_MOVING_PHOTO = 3 | moving Photo Type |
| MEDIA_LIBRARY_BURST = 4 | burst Photo Type |

### MediaLibrary_ResourceType

```c
enum MediaLibrary_ResourceType
```

**Description**

Enum for resource types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_IMAGE_RESOURCE = 1 | image resource |
| MEDIA_LIBRARY_VIDEO_RESOURCE = 2 | video resource |

### MediaLibrary_ImageFileType

```c
enum MediaLibrary_ImageFileType
```

**Description**

Enum for image file Type.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_IMAGE_JPEG = 1 | JPEG type |
| MEDIA_LIBRARY_IMAGE_HEIF = 2 | HEIF type<br>**Since**: 23 |
| MEDIA_LIBRARY_FILE_VIDEO = 3 | MPEG type<br>**Since**: 19 |

### MediaLibrary_MediaQuality

```c
enum MediaLibrary_MediaQuality
```

**Description**

Enum for media quality.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_QUALITY_FAST = 1 | fast quality |
| MEDIA_LIBRARY_QUALITY_FULL = 2 | full quality |

### MediaLibrary_MediaContentType

```c
enum MediaLibrary_MediaContentType
```

**Description**

Enum for media content type.

**Since**: 12

| Enum item | Description |
| -- | -- |
| MEDIA_LIBRARY_COMPRESSED = 1 | compressed media content type |
| MEDIA_LIBRARY_PICTURE_OBJECT = 2 | picture object media content type |


## Function description

### OH_MediaLibrary_OnDataPrepared()

```c
typedef void (*OH_MediaLibrary_OnDataPrepared)(int32_t result, MediaLibrary_RequestId requestId)
```

**Description**

Called when a requested source is prepared.This function is called when the requested source is prepared.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int32_t result | Results of the processing of the requested resources. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) requestId | Request ID. |

### OH_MediaLibrary_OnImageDataPrepared()

```c
typedef void (*OH_MediaLibrary_OnImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative* imageSourceNative)
```

**Description**

Called when a requested image source is prepared.This function is called when the requested image source is prepared.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (MediaLibrary_ErrorCode result | results [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) of the processing of the requested resources. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request. |
| [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) mediaQuality | the [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) of the requested source. |
| [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) type | the [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) of the requested source. |
| OH_ImageSourceNative\* imageSourceNative | it used to obtain [OH_ImageSourceNative](../ImageKit/capi-image-nativemodule-oh-imagesourcenative.md) information when image source is prepared. |

### OH_MediaLibrary_OnMovingPhotoDataPrepared()

```c
typedef void (*OH_MediaLibrary_OnMovingPhotoDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_MovingPhoto* movingPhoto)
```

**Description**

Called when a requested moving photo is prepared.This function is called when the requested moving photo is prepared.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| (MediaLibrary_ErrorCode result | results [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) of the processing of the requested resources. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request. |
| [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) mediaQuality | the [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) of the requested source. |
| [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) type | the [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) of the requested source. |
| [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md)\* movingPhoto | it used to obtain [OH_MovingPhoto](capi-mediaassetmanager-oh-movingphoto.md) information when the data is prepared. |

### OH_MediaLibrary_OnQuickImageDataPrepared()

```c
typedef void (*OH_MediaLibrary_OnQuickImageDataPrepared)(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId, MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative* imageSourceNative, OH_PictureNative* pictureNative)
```

**Description**

Called when a requested quickly image is prepared.This function is called when the requested quickly image is prepared.When there is an image buffer in the system,a picture object will be returned, reducing the decoding time.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| (MediaLibrary_ErrorCode result | results [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) of the processing of the requested resources. |
| [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) requestId | indicates the [MediaLibrary_RequestId](capi-mediaassetmanager-medialibrary-requestid.md) of the request. |
| [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) mediaQuality | the [MediaLibrary_MediaQuality](capi-media-asset-base-capi-h.md#medialibrary_mediaquality) of the requested source. |
| [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) type | the [MediaLibrary_MediaContentType](capi-media-asset-base-capi-h.md#medialibrary_mediacontenttype) of the requested source. |
| OH_ImageSourceNative\* imageSourceNative | it is used to obtain [OH_ImageSourceNative](../ImageKit/capi-image-nativemodule-oh-imagesourcenative.md) information when image file is prepared,otherwise imageSourceNative is null. |
| [OH_PictureNative](../ImageKit/capi-image-nativemodule-oh-picturenative.md)\* pictureNative | it is used to obtain [OH_PictureNative](../ImageKit/capi-image-nativemodule-oh-picturenative.md) information when image source is prepared,otherwise OH_PictureNative is null. |


