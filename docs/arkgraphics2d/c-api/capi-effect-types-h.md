# effect_types.h

## Overview

This file declares the data types of the image effect filter.

**Library**: libnative_effect.so

**System capability**: SystemCapability.Multimedia.Image.Core

**Since**: 12

**Related module**: [effectKit](capi-effectkit.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Filter_ColorMatrix](capi-effectkit-oh-filter-colormatrix.md) | OH_Filter_ColorMatrix | Describes a matrix used to create an effect filter. |
| [OH_Filter](capi-effectkit-oh-filter.md) | OH_Filter | Defines a struct for a filter used to generate a filter PixelMap. |
| [OH_PixelmapNative](capi-effectkit-oh-pixelmapnative.md) | OH_PixelmapNative | Defines a pixel map defined by the image framework. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [EffectErrorCode](#effecterrorcode) | EffectErrorCode | Enumerates the status codes that may be used by the effect filter. |
| [EffectTileMode](#effecttilemode) | EffectTileMode | Enumerates the tile modes of the shader effect. |

## Enum type description

### EffectErrorCode

```c
enum EffectErrorCode
```

**Description**

Enumerates the status codes that may be used by the effect filter.

**Since**: 12

| Enum item | Description |
| -- | -- |
| EFFECT_SUCCESS = 0 | Operation successful. |
| EFFECT_BAD_PARAMETER = 401 | Invalid parameter. |
| EFFECT_UNSUPPORTED_OPERATION = 7600201 | Unsupported operation. |
| EFFECT_UNKNOWN_ERROR = 7600901 | Unknown error. |

### EffectTileMode

```c
enum EffectTileMode
```

**Description**

Enumerates the tile modes of the shader effect.

**Since**: 14

| Enum item | Description |
| -- | -- |
| CLAMP = 0 | Replicates the edge color if the shader effect draws outside of its original boundary. |
| REPEAT | Repeats the shader effect in both horizontal and vertical directions. |
| MIRROR | Repeats the shader effect in both horizontal and vertical directions, alternating mirror images. |
| DECAL | Renders the shader effect only within the original boundary. |


