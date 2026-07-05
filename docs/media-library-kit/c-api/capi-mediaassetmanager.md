# MediaAssetManager

## Overview

Provides APIs of request capability for Media Source.

**Since**: 13
## Files

| Name | Description |
| -- | -- |
| [moving_photo_capi.h](capi-moving-photo-capi-h.md) | Defines APIs related to moving photo.Provides the ability to obtain moving photo information. |
| [media_asset_manager_capi.h](capi-media-asset-manager-capi-h.md) | Defines the media asset manager APIs.Uses the Native APIs provided by Media Asset Managerto request media source. |
| [media_access_helper_capi.h](capi-media-access-helper-capi-h.md) | Defines APIs related to media access helper.Provides the ability to create photo albums, as well as access and modify media data information in the albums. |
| [media_asset_change_request_capi.h](capi-media-asset-change-request-capi-h.md) | Defines APIs related to media asset change request.Provides the ability to change assets. |
| [media_asset_capi.h](capi-media-asset-capi-h.md) | Defines APIs related to media asset.Provides the ability to obtain image or video information. |
| [media_asset_base_capi.h](capi-media-asset-base-capi-h.md) | Defines the structure and enumeration for Media Asset Manager.OH_MediaAssetManager structure: This structure provides the ability to request resources from a media library. <br> MediaLibrary_RequestId type: This type is returned when requesting a media library resource.The request ID is used to cancel the request. <br> MediaLibrary_DeliveryMode enumeration: This enumeration defines the delivery mode of the requested resources. <br> OH_MediaLibrary_OnDataPrepared function pointer: This function is called when the requested source is prepared. <br> MediaLibrary_RequestOptions structure: This structure provides options for requesting media library resources. <br> |
