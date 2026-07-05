# media_asset_capi.h

## Overview

Defines APIs related to media asset.Provides the ability to obtain image or video information.

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetUri(OH_MediaAsset* mediaAsset, const char** uri)](#oh_mediaasset_geturi) | Get the uri of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetMediaType(OH_MediaAsset* mediaAsset, MediaLibrary_MediaType* mediaType)](#oh_mediaasset_getmediatype) | Get the media file type of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetMediaSubType(OH_MediaAsset* mediaAsset, MediaLibrary_MediaSubType* mediaSubType)](#oh_mediaasset_getmediasubtype) | Get the subtype of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDisplayName(OH_MediaAsset* mediaAsset, const char** displayName)](#oh_mediaasset_getdisplayname) | Get the display name of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetSize(OH_MediaAsset* mediaAsset, uint32_t* size)](#oh_mediaasset_getsize) | Get the file size of the media asset |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDateAdded(OH_MediaAsset* mediaAsset, uint32_t* dateAdded)](#oh_mediaasset_getdateadded) | Get the date of asset creation. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDateModified(OH_MediaAsset* mediaAsset, uint32_t* dateModified)](#oh_mediaasset_getdatemodified) | Get the modified date of the asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDateTaken(OH_MediaAsset* mediaAsset, uint32_t* dateTaken)](#oh_mediaasset_getdatetaken) | Get the date taken of the asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDateAddedMs(OH_MediaAsset* mediaAsset, uint32_t* dateAddedMs)](#oh_mediaasset_getdateaddedms) | Get the creation time of the asset in milliseconds. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDateModifiedMs(OH_MediaAsset* mediaAsset, uint32_t* dateModifiedMs)](#oh_mediaasset_getdatemodifiedms) | Get the modified time of the asset in milliseconds. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetDuration(OH_MediaAsset* mediaAsset, uint32_t* duration)](#oh_mediaasset_getduration) | Get the duration of the media asset in milliseconds. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetWidth(OH_MediaAsset* mediaAsset, uint32_t* width)](#oh_mediaasset_getwidth) | Get the image width(in pixels) of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetHeight(OH_MediaAsset* mediaAsset, uint32_t* height)](#oh_mediaasset_getheight) | Get the image height(in pixels) of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetOrientation(OH_MediaAsset* mediaAsset, uint32_t* orientation)](#oh_mediaasset_getorientation) | Get the orientation of the image. |
| [MediaLibrary_ErrorCode OH_MediaAsset_IsFavorite(OH_MediaAsset* mediaAsset, uint32_t* favorite)](#oh_mediaasset_isfavorite) | Get the favorite state of the asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_GetTitle(OH_MediaAsset* mediaAsset, const char** title)](#oh_mediaasset_gettitle) | Get the title of the media asset. |
| [MediaLibrary_ErrorCode OH_MediaAsset_Release(OH_MediaAsset* mediaAsset)](#oh_mediaasset_release) | Release the media asset |

## Function description

### OH_MediaAsset_GetUri()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetUri(OH_MediaAsset* mediaAsset, const char** uri)
```

**Description**

Get the uri of the media asset.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| const char** uri | the uri of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetMediaType()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetMediaType(OH_MediaAsset* mediaAsset, MediaLibrary_MediaType* mediaType)
```

**Description**

Get the media file type of the media asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| [MediaLibrary_MediaType](capi-media-asset-base-capi-h.md#medialibrary_mediatype)* mediaType | the media file type of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetMediaSubType()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetMediaSubType(OH_MediaAsset* mediaAsset, MediaLibrary_MediaSubType* mediaSubType)
```

**Description**

Get the subtype of the media asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| [MediaLibrary_MediaSubType](capi-media-asset-base-capi-h.md#medialibrary_mediasubtype)* mediaSubType | the subtype of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDisplayName()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDisplayName(OH_MediaAsset* mediaAsset, const char** displayName)
```

**Description**

Get the display name of the media asset.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| const char** displayName | the display name of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetSize()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetSize(OH_MediaAsset* mediaAsset, uint32_t* size)
```

**Description**

Get the file size of the media asset

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* size | the file size(in bytes) of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDateAdded()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDateAdded(OH_MediaAsset* mediaAsset, uint32_t* dateAdded)
```

**Description**

Get the date of asset creation.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* dateAdded | the creation date of the asset.The value is the number of seconds elapsed since the Epoch time (00:00:00 UTC on January 1, 1970). |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDateModified()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDateModified(OH_MediaAsset* mediaAsset, uint32_t* dateModified)
```

**Description**

Get the modified date of the asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* dateModified | the modified date of the asset.The value is the number of seconds elapsed since the Epoch time. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDateTaken()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDateTaken(OH_MediaAsset* mediaAsset, uint32_t* dateTaken)
```

**Description**

Get the date taken of the asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* dateTaken | the date taken of the asset.The value is the number of seconds elapsed since the Epoch time. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDateAddedMs()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDateAddedMs(OH_MediaAsset* mediaAsset, uint32_t* dateAddedMs)
```

**Description**

Get the creation time of the asset in milliseconds.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* dateAddedMs | the creation time of the asset in milliseconds. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDateModifiedMs()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDateModifiedMs(OH_MediaAsset* mediaAsset, uint32_t* dateModifiedMs)
```

**Description**

Get the modified time of the asset in milliseconds.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* dateModifiedMs | the modified time of the asset in milliseconds. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetDuration()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetDuration(OH_MediaAsset* mediaAsset, uint32_t* duration)
```

**Description**

Get the duration of the media asset in milliseconds.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* duration | the duration of the media asset in milliseconds. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetWidth()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetWidth(OH_MediaAsset* mediaAsset, uint32_t* width)
```

**Description**

Get the image width(in pixels) of the media asset.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* width | the image width(in pixels) of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetHeight()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetHeight(OH_MediaAsset* mediaAsset, uint32_t* height)
```

**Description**

Get the image height(in pixels) of the media asset.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* height | the image height(in pixels) of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetOrientation()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetOrientation(OH_MediaAsset* mediaAsset, uint32_t* orientation)
```

**Description**

Get the orientation of the image.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* orientation | the orientation of the image. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_IsFavorite()

```c
MediaLibrary_ErrorCode OH_MediaAsset_IsFavorite(OH_MediaAsset* mediaAsset, uint32_t* favorite)
```

**Description**

Get the favorite state of the asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| uint32_t* favorite | the favorite state of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_GetTitle()

```c
MediaLibrary_ErrorCode OH_MediaAsset_GetTitle(OH_MediaAsset* mediaAsset, const char** title)
```

**Description**

Get the title of the media asset.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |
| const char** title | the title of the media asset. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |

### OH_MediaAsset_Release()

```c
MediaLibrary_ErrorCode OH_MediaAsset_Release(OH_MediaAsset* mediaAsset)
```

**Description**

Release the media asset

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md)* mediaAsset | the [OH_MediaAsset](capi-mediaassetmanager-oh-mediaasset.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed. |


