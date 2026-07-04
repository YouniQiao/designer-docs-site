# DRM_MediaKeyRequest

```c
typedef struct DRM_MediaKeyRequest {...} DRM_MediaKeyRequest
```

## Overview

Media key request.

**Since**: 11

**Related module**: [Drm](capi-drm.md)

**Header file**: [native_drm_common.h](capi-native-drm-common-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [DRM_MediaKeyRequestType](capi-native-drm-common-h.md#drm_mediakeyrequesttype) type | Media key request type. |
| int32_t dataLen | Media key request data len. |
| uint8_t data[MAX_MEDIA_KEY_REQUEST_DATA_LEN] | Media key request data sent to media key server. |
| char defaultUrl[MAX_DEFAULT_URL_LEN] | Media key server URL. |


