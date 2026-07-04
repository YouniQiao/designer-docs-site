# OhosImageSourceProperty

```c
struct OhosImageSourceProperty {...}
```

## Overview

Defines the property string (in key-value format) of the image source.It is used in [OH_ImageSource_GetImageProperty](capi-image-source-mdk-h.md#oh_imagesource_getimageproperty) and [OH_ImageSource_ModifyImageProperty](capi-image-source-mdk-h.md#oh_imagesource_modifyimageproperty).

**Since**: 10

**Related module**: [Image](capi-image.md)

**Header file**: [image_source_mdk.h](capi-image-source-mdk-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* value = nullptr | Image source property key and value string head. |
| size_t size = 0 | Image source property key and value string size. |


