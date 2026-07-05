# media_access_helper_capi.h

## Overview

Defines APIs related to media access helper.Provides the ability to create photo albums, as well as access and modify media data information in the albums.

**Library**: libmedia_asset_manager.so

**System capability**: SystemCapability.FileManagement.PhotoAccessHelper.Core

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [MediaLibrary_ErrorCode OH_MediaAccessHelper_ApplyChanges(OH_MediaAssetChangeRequest* changeRequest)](#oh_mediaaccesshelper_applychanges) | Apply the change request of asset or album. |

## Function description

### OH_MediaAccessHelper_ApplyChanges()

```c
MediaLibrary_ErrorCode OH_MediaAccessHelper_ApplyChanges(OH_MediaAssetChangeRequest* changeRequest)
```

**Description**

Apply the change request of asset or album.

**Required permission**: ohos.permission.WRITE_IMAGEVIDEO

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md)* changeRequest | the [OH_MediaAssetChangeRequest](capi-mediaassetmanager-oh-mediaassetchangerequest.md) instance to be applied. |

**Returns**:

| Type | Description |
| -- | -- |
| [MediaLibrary_ErrorCode](capi-media-asset-base-capi-h.md#medialibrary_errorcode) | [MEDIA_LIBRARY_OK](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if the method call succeeds.<br>         [MEDIA_LIBRARY_PARAMETER_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Parameter error. Possible causes:<br>                                                1. Mandatory parameters are left unspecified.<br>                                                2. Incorrect parameter types.<br>                                                3. Parameter verification failed.<br>         [MEDIA_LIBRARY_PERMISSION_DENIED](capi-media-asset-base-capi-h.md#medialibrary_errorcode) Permission is denied.<br>         [MEDIA_LIBRARY_INTERNAL_SYSTEM_ERROR](capi-media-asset-base-capi-h.md#medialibrary_errorcode) if internal system error. |


