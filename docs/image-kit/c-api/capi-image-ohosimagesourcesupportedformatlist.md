# OhosImageSourceSupportedFormatList

```c
struct OhosImageSourceSupportedFormatList {...}
```

## Overview

Defines the format string list supported by the image source.It is obtained by calling [OH_ImageSource_GetSupportedFormats](capi-image-source-mdk-h.md#oh_imagesource_getsupportedformats).

**Since**: 10

**Related module**: [Image](capi-image.md)

**Header file**: [image_source_mdk.h](capi-image-source-mdk-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| struct [OhosImageSourceSupportedFormat**](capi-image-ohosimagesourcesupportedformat.md) supportedFormatList = nullptr | Image source supported format string list head. |
| size_t size = 0 | Image source supported format string list size. |


