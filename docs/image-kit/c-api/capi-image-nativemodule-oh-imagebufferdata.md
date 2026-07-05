# OH_ImageBufferData

```c
typedef struct OH_ImageBufferData {...} OH_ImageBufferData
```

## Overview

[OH_ImageBufferData](capi-image-nativemodule-oh-imagebufferdata.md) is the image data struct encapsulated at the native layer. To obtain an [OH_ImageBufferData](capi-image-nativemodule-oh-imagebufferdata.md)object, call [OH_ImageNative_GetBufferData](capi-image-native-h.md#oh_imagenative_getbufferdata).The struct stores the shallow copy of the original image data. Once the original data is released, no reador write operations should be performed on the pointers within this struct; otherwise, undefined behaviorwill occur.

**Since**: 23

**Related module**: [Image_NativeModule](capi-image-nativemodule.md)

**Header file**: [image_native.h](capi-image-native-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t *rowStride | rowStride of each component. |
| int32_t *pixelStride | pixelStride of each component. |
| [](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)n[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md)3[](capi-image-nativemodule-oh-imagenative.md)2[](capi-image-nativemodule-oh-imagenative.md)_[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md)n[](capi-image-nativemodule-oh-imagenative.md)u[](capi-image-nativemodule-oh-imagenative.md)m[](capi-image-nativemodule-oh-imagenative.md)S[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md)r[](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)d[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md) | number of strides. |
| [](capi-image-nativemodule-oh-imagenative.md)s[](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)z[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)_[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md)b[](capi-image-nativemodule-oh-imagenative.md)u[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)r[](capi-image-nativemodule-oh-imagenative.md)S[](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)z[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md) | byte length of the buffer |
| [](capi-image-nativemodule-oh-imagenative.md)O[](capi-image-nativemodule-oh-imagenative.md)H[](capi-image-nativemodule-oh-imagenative.md)_[](capi-image-nativemodule-oh-imagenative.md)N[](capi-image-nativemodule-oh-imagenative.md)a[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)v[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)B[](capi-image-nativemodule-oh-imagenative.md)u[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)r[](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md) [](capi-image-nativemodule-oh-imagenative.md)*[](capi-image-nativemodule-oh-imagenative.md)n[](capi-image-nativemodule-oh-imagenative.md)a[](capi-image-nativemodule-oh-imagenative.md)t[](capi-image-nativemodule-oh-imagenative.md)i[](capi-image-nativemodule-oh-imagenative.md)v[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)B[](capi-image-nativemodule-oh-imagenative.md)u[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)f[](capi-image-nativemodule-oh-imagenative.md)e[](capi-image-nativemodule-oh-imagenative.md)r[](capi-image-nativemodule-oh-imagenative.md) | native buffer of the image. |


