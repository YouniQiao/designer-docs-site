# DRM_PsshInfo

```c
typedef struct DRM_PsshInfo {...} DRM_PsshInfo
```

## Overview

PSSH info by uuid.

**Since**: 11

**Related module**: [Drm](capi-drm.md)

**Header file**: [native_drm_common.h](capi-native-drm-common-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint8_t uuid[DRM_UUID_LEN] | Uuid. |
| int32_t dataLen | PSSH data len. |
| uint8_t data[MAX_PSSH_DATA_LEN] | uint8_t PSSH data. |


