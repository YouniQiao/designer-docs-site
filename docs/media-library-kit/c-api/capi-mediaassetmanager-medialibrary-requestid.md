# MediaLibrary_RequestId

```c
typedef struct MediaLibrary_RequestId {...} MediaLibrary_RequestId
```

## Overview

Define MediaLibrary_RequestIdThis type is returned when requesting a media library resource.The request id is used to cancel the request.The value is all zero like "00000000-0000-0000-0000-000000000000" if the request fails.

**Since**: 12

**Related module**: [MediaAssetManager](capi-mediaassetmanager.md)

**Header file**: [media_asset_base_capi.h](capi-media-asset-base-capi-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char requestId[UUID_STR_MAX_LENGTH] | request id |


