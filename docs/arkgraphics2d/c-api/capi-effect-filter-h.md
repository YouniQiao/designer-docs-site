# effect_filter.h

## Overview

This file declares the APIs of an image effect filter.

**Library**: libnative_effect.so

**System capability**: SystemCapability.Multimedia.Image.Core

**Since**: 12

**Related module**: [effectKit](capi-effectkit.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [EffectErrorCode OH_Filter_CreateEffect(OH_PixelmapNative* pixelmap, OH_Filter** filter)](#oh_filter_createeffect) | Creates an **OH_Filter** object. |
| [EffectErrorCode OH_Filter_Release(OH_Filter* filter)](#oh_filter_release) | Releases an **OH_Filter** object. |
| [EffectErrorCode OH_Filter_Blur(OH_Filter* filter, float radius)](#oh_filter_blur) | Creates the frosted glass effect and adds it to a filter. |
| [EffectErrorCode OH_Filter_BlurWithTileMode(OH_Filter* filter, float radius, EffectTileMode tileMode)](#oh_filter_blurwithtilemode) | Creates the frosted glass effect and adds it to a filter. It supports the tiling mode of the shader effect. |
| [EffectErrorCode OH_Filter_Brighten(OH_Filter* filter, float brightness)](#oh_filter_brighten) | Creates the brightening effect and adds it to a filter. |
| [EffectErrorCode OH_Filter_GrayScale(OH_Filter* filter)](#oh_filter_grayscale) | Creates the grayscale effect and adds it to a filter. |
| [EffectErrorCode OH_Filter_Invert(OH_Filter* filter)](#oh_filter_invert) | Creates the inverted color effect and adds it to a filter. |
| [EffectErrorCode OH_Filter_SetColorMatrix(OH_Filter* filter, OH_Filter_ColorMatrix* matrix)](#oh_filter_setcolormatrix) | Creates a custom effect through a matrix and adds it to a filter. |
| [EffectErrorCode OH_Filter_GetEffectPixelMap(OH_Filter* filter, OH_PixelmapNative** pixelmap)](#oh_filter_geteffectpixelmap) | Obtains the PixelMap with the filter effect. |

## Function description

### OH_Filter_CreateEffect()

```c
EffectErrorCode OH_Filter_CreateEffect(OH_PixelmapNative* pixelmap, OH_Filter** filter)
```

**Description**

Creates an **OH_Filter** object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PixelmapNative](capi-effectkit-oh-pixelmapnative.md)* pixelmap | [in] Pointer to the PixelMap. Cannot be NULL. |
| [OH_Filter](capi-effectkit-oh-filter.md)** filter | [out] Double pointer to the filter created. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if pixelmap or filter is NULL.</li><br>         </ul> |

### OH_Filter_Release()

```c
EffectErrorCode OH_Filter_Release(OH_Filter* filter)
```

**Description**

Releases an **OH_Filter** object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_Blur()

```c
EffectErrorCode OH_Filter_Blur(OH_Filter* filter, float radius)
```

**Description**

Creates the frosted glass effect and adds it to a filter.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |
| float radius | [in] Blur radius of the frosted glass effect, in px. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_BlurWithTileMode()

```c
EffectErrorCode OH_Filter_BlurWithTileMode(OH_Filter* filter, float radius, EffectTileMode tileMode)
```

**Description**

Creates the frosted glass effect and adds it to a filter. It supports the tiling mode of the shader effect.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |
| float radius | [in] Blur radius of the frosted glass effect, in px. |
| [EffectTileMode](capi-effect-types-h.md#effecttilemode) tileMode | [in] Tile mode of the shader effect. For details about the available options,see [EffectTileMode](capi-effect-types-h.md#effecttilemode). |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_Brighten()

```c
EffectErrorCode OH_Filter_Brighten(OH_Filter* filter, float brightness)
```

**Description**

Creates the brightening effect and adds it to a filter.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |
| float brightness | [in] Brightness value of the brightening effect, ranging from 0 to 1.When the value is 0, the image brightness remains unchanged.When the value is 1, the image becomes fully brightened. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_GrayScale()

```c
EffectErrorCode OH_Filter_GrayScale(OH_Filter* filter)
```

**Description**

Creates the grayscale effect and adds it to a filter.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_Invert()

```c
EffectErrorCode OH_Filter_Invert(OH_Filter* filter)
```

**Description**

Creates the inverted color effect and adds it to a filter.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter is NULL.</li><br>         </ul> |

### OH_Filter_SetColorMatrix()

```c
EffectErrorCode OH_Filter_SetColorMatrix(OH_Filter* filter, OH_Filter_ColorMatrix* matrix)
```

**Description**

Creates a custom effect through a matrix and adds it to a filter.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |
| [OH_Filter_ColorMatrix](capi-effectkit-oh-filter-colormatrix.md)* matrix | [in] Custom [OH_Filter_ColorMatrix](capi-effectkit-oh-filter-colormatrix.md) used to create the filter. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter or matrix is NULL.</li><br>         </ul> |

### OH_Filter_GetEffectPixelMap()

```c
EffectErrorCode OH_Filter_GetEffectPixelMap(OH_Filter* filter, OH_PixelmapNative** pixelmap)
```

**Description**

Obtains the PixelMap with the filter effect.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Filter](capi-effectkit-oh-filter.md)* filter | [in] Pointer to the filter. Cannot be NULL. |
| [OH_PixelmapNative](capi-effectkit-oh-pixelmapnative.md)** pixelmap | [out] Double pointer to the PixelMap obtained. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| [EffectErrorCode](capi-effect-types-h.md#effecterrorcode) | <ul><br>         <li>{@link EffectErrorCode#EFFECT_SUCCESS} if the operation is successful.</li><br>         <li>{@link EffectErrorCode#EFFECT_BAD_PARAMETER} if filter or pixelmap is NULL.</li><br>         </ul> |


