# native_drm_err.h

## Overview

Defines the Drm errors.

**Library**: libnative_drm.so

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

**Related module**: [Drm](capi-drm.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [Drm_ErrCode](#drm_errcode) | Drm_ErrCode | DRM error code |

## Enum type description

### Drm_ErrCode

```c
enum Drm_ErrCode
```

**Description**

DRM error code

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

| Enum item | Description |
| -- | -- |
| DRM_ERR_OK = 0 | the operation completed successfully. |
| DRM_CAPI_ERR_BASE = 24700500 | DRM CAPI ERROR BASE. |
| DRM_ERR_NO_MEMORY = DRM_CAPI_ERR_BASE + 1 | no memory. |
| DRM_ERR_OPERATION_NOT_PERMITTED = DRM_CAPI_ERR_BASE + 2 | operation not be permitted. |
| DRM_ERR_INVALID_VAL = DRM_CAPI_ERR_BASE + 3 | invalid argument. |
| DRM_ERR_IO = DRM_CAPI_ERR_BASE + 4 | IO error. |
| DRM_ERR_TIMEOUT = DRM_CAPI_ERR_BASE + 5 | network timeout. |
| DRM_ERR_UNKNOWN = DRM_CAPI_ERR_BASE + 6 | unknown error. |
| DRM_ERR_SERVICE_DIED = DRM_CAPI_ERR_BASE + 7 | drm service died. |
| DRM_ERR_INVALID_STATE = DRM_CAPI_ERR_BASE + 8 | not support this operation in this state. |
| DRM_ERR_UNSUPPORTED = DRM_CAPI_ERR_BASE + 9 | unsupported interface. |
| DRM_ERR_MAX_SYSTEM_NUM_REACHED = DRM_CAPI_ERR_BASE + 10 | Meet max MediaKeySystem num limit. |
| DRM_ERR_MAX_SESSION_NUM_REACHED = DRM_CAPI_ERR_BASE + 11 | Meet max MediaKeySession num limit. |
| DRM_ERR_EXTEND_START  = DRM_CAPI_ERR_BASE + 100 | extend err start. |


