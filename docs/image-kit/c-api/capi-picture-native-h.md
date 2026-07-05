# picture_native.h

## Overview

The file declares the APIs for obtaining picture data and information.

**Library**: libpicture.so

**System capability**: SystemCapability.Multimedia.Image.Core

**Since**: 13

**Related module**: [Image_NativeModule](capi-image-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_PictureNative_AuxiliaryPictureCopyItem](capi-image-nativemodule-oh-picturenative-auxiliarypicturecopyitem.md) | OH_PictureNative_AuxiliaryPictureCopyItem | This structure is used to specify an auxiliary picture copy rule when creating a deep copy of aPictureNative object. It describes how to copy an auxiliary picture from one type to another. |
| [OH_PictureNative_MetadataCopyItem](capi-image-nativemodule-oh-picturenative-metadatacopyitem.md) | OH_PictureNative_MetadataCopyItem | This structure is used to specify a metadata copy rule when creating a deep copy of a PictureNative object.It describes how to copy metadata from one type to another. |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) | - | The struct is used to perform operations related to the picture. |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) | - | The struct describes the auxiliary picture, which is used to perform operations related to the auxiliarypicture. |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) | - | The struct describes the auxiliary picture information, which is used to perform operations related to theauxiliary picture information. |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) | OH_ComposeOptions | **OH_ComposeOptions** is the HDR composition option struct encapsulated at the native layer. It is used tospecify parameters used for HDR composition, such as the target pixel format. |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) | OH_DecomposeOptions | **OH_DecomposeOptions** is the HDR decomposition option struct encapsulated at the native layer. It isused to specify parameters used for HDR decomposition, such as the target pixel format. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [Image_AuxiliaryPictureType](#image_auxiliarypicturetype) | Image_AuxiliaryPictureType | Type of the auxiliary picture. |

### Function

| Name | Description |
| -- | -- |
| [Image_ErrorCode OH_ComposeOptions_Create(OH_ComposeOptions **options)](#oh_composeoptions_create) | Creates an **OH_ComposeOptions** instance. |
| [Image_ErrorCode OH_ComposeOptions_SetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT desiredPixelFormat)](#oh_composeoptions_setdesiredpixelformat) | Sets the pixel format in **OH_ComposeOptions**. |
| [Image_ErrorCode OH_ComposeOptions_GetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT *desiredPixelFormat)](#oh_composeoptions_getdesiredpixelformat) | Obtains the pixel format in **OH_ComposeOptions**. |
| [Image_ErrorCode OH_ComposeOptions_Release(OH_ComposeOptions *options)](#oh_composeoptions_release) | Releases the pointer to **OH_ComposeOptions**. |
| [Image_ErrorCode OH_PictureNative_CreatePicture(OH_PixelmapNative *mainPixelmap, OH_PictureNative **picture)](#oh_picturenative_createpicture) | Creates the pointer to an OH_PictureNative object. |
| [Image_ErrorCode OH_PictureNative_GetMainPixelmap(OH_PictureNative *picture, OH_PixelmapNative **mainPixelmap)](#oh_picturenative_getmainpixelmap) | Obtains the pointer to the OH_PixelmapNative object of a main picture. |
| [Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmap(OH_PictureNative *picture, OH_PixelmapNative **hdrPixelmap)](#oh_picturenative_gethdrcomposedpixelmap) | Obtains the pointer to the OH_PixelmapNative object of an HDR picture. |
| [Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmapWithOptions(OH_PictureNative *picture, OH_ComposeOptions *options, OH_PixelmapNative **hdrPixelmap)](#oh_picturenative_gethdrcomposedpixelmapwithoptions) | Obtains the pointer to **OH_PixelmapNative** of an HDR picture based on **OH_ComposeOptions**. |
| [Image_ErrorCode OH_PictureNative_GetGainmapPixelmap(OH_PictureNative *picture, OH_PixelmapNative **gainmapPixelmap)](#oh_picturenative_getgainmappixelmap) | Obtains the pointer to the OH_PixelmapNative object of a gain map. |
| [Image_ErrorCode OH_PictureNative_SetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative *auxiliaryPicture)](#oh_picturenative_setauxiliarypicture) | Sets an auxiliary picture. |
| [Image_ErrorCode OH_PictureNative_GetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)](#oh_picturenative_getauxiliarypicture) | Obtains an auxiliary picture by type. |
| [Image_ErrorCode OH_PictureNative_GetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)](#oh_picturenative_getmetadata) | Obtains the metadata of a main picture. |
| [Image_ErrorCode OH_PictureNative_SetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)](#oh_picturenative_setmetadata) | Sets the metadata for a main picture. |
| [Image_ErrorCode OH_PictureNative_GetAuxiliaryPictureCount(OH_PictureNative *picture, uint32_t *count)](#oh_picturenative_getauxiliarypicturecount) | Obtains the number of auxiliary pictures in a Picture object. |
| [Image_ErrorCode OH_PictureNative_GetAuxiliaryPictureTypes(OH_PictureNative *picture, Image_AuxiliaryPictureType *auxiliaryPictureTypes, uint32_t *count)](#oh_picturenative_getauxiliarypicturetypes) | Obtains the types of auxiliary pictures in a Picture object. |
| [Image_ErrorCode OH_PictureNative_GetMetadataCount(OH_PictureNative *picture, uint32_t *count)](#oh_picturenative_getmetadatacount) | Obtains the number of metadata entries in a Picture object. |
| [Image_ErrorCode OH_PictureNative_GetMetadataTypes(OH_PictureNative *picture, Image_MetadataType *metadataTypes, uint32_t *count)](#oh_picturenative_getmetadatatypes) | Obtains the types of metadata in a Picture object. |
| [Image_ErrorCode OH_PictureNative_RemoveAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type)](#oh_picturenative_removeauxiliarypicture) | Removes an auxiliary picture from a Picture object. |
| [Image_ErrorCode OH_PictureNative_RemoveMetadata(OH_PictureNative *picture, Image_MetadataType type)](#oh_picturenative_removemetadata) | Removes metadata from a Picture object. |
| [Image_ErrorCode OH_PictureNative_DeepCopyWithItems(OH_PictureNative *source, const OH_PictureNative_AuxiliaryPictureCopyItem *auxiliaryPictureCopyItems, uint32_t auxiliaryPictureCopyCount, const OH_PictureNative_MetadataCopyItem *metadataCopyItems, uint32_t metadataCopyCount, Image_AuxiliaryPictureType *sourceAuxPictureAsMainPixelMap, OH_PictureNative **picture)](#oh_picturenative_deepcopywithitems) | Creates a deep copy of a PictureNative object with specified auxiliary pictures and metadata copied tospecified destination types. |
| [Image_ErrorCode OH_PictureNative_Release(OH_PictureNative *picture)](#oh_picturenative_release) | Releases the pointer to an OH_PictureNative object. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_Create(uint8_t *data, size_t dataLength, Image_Size *size, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)](#oh_auxiliarypicturenative_create) | Creates the pointer to an OH_AuxiliaryPictureNative object. This API supports only continuous pixel datawhose {@link pixel format} is BGRA_8888 and creates an auxiliary picture in RGBA_8888 format. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_CreateUsingAllocator(uint8_t *data, uint32_t dataLength, OH_AuxiliaryPictureInfo *info, IMAGE_ALLOCATOR_MODE allocator, OH_AuxiliaryPictureNative **auxiliaryPicture)](#oh_auxiliarypicturenative_createusingallocator) | Creates an OH_AuxiliaryPictureNative object with a specified memory type. By default, the system selectsthe memory type based on the image type, image size, platform capability, and other factors. When processing theauxiliary picture returned by this API, always consider the impact of stride. If **data** is null or **dataLengthis less than or equal to 0, the auxiliary picture will not be initialized. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_WritePixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *source, size_t bufferSize)](#oh_auxiliarypicturenative_writepixels) | Reads pixels in the buffer and writes the result to an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_ReadPixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *destination, size_t *bufferSize)](#oh_auxiliarypicturenative_readpixels) | Reads pixels of an auxiliary picture and writes the result to the buffer. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_GetType(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_AuxiliaryPictureType *type)](#oh_auxiliarypicturenative_gettype) | Obtains the type of an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_GetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo **info)](#oh_auxiliarypicturenative_getinfo) | Obtains the information of an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_SetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo *info)](#oh_auxiliarypicturenative_setinfo) | Sets the information for an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_GetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)](#oh_auxiliarypicturenative_getmetadata) | Obtains the metadata of an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_SetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)](#oh_auxiliarypicturenative_setmetadata) | Sets the metadata for an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_AcquirePixelmap(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_PixelmapNative **pixelmap)](#oh_auxiliarypicturenative_acquirepixelmap) | Obtains the OH_PixelmapNative object of an auxiliary picture. |
| [Image_ErrorCode OH_AuxiliaryPictureNative_Release(OH_AuxiliaryPictureNative *picture)](#oh_auxiliarypicturenative_release) | Releases the pointer to an OH_AuxiliaryPictureNative object. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_Create(OH_AuxiliaryPictureInfo **info)](#oh_auxiliarypictureinfo_create) | Creates an OH_AuxiliaryPictureInfo object. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_GetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType *type)](#oh_auxiliarypictureinfo_gettype) | Obtains the auxiliary picture type in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_SetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType type)](#oh_auxiliarypictureinfo_settype) | Sets the auxiliary picture type in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_GetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)](#oh_auxiliarypictureinfo_getsize) | Obtains the image size in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_SetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)](#oh_auxiliarypictureinfo_setsize) | Sets the image size in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_GetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t *rowStride)](#oh_auxiliarypictureinfo_getrowstride) | Obtains the row stride in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_SetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t rowStride)](#oh_auxiliarypictureinfo_setrowstride) | Sets the row stride in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_GetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT *pixelFormat)](#oh_auxiliarypictureinfo_getpixelformat) | Obtains the pixel format in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_SetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT pixelFormat)](#oh_auxiliarypictureinfo_setpixelformat) | Sets the pixel format in **OH_AuxiliaryPictureInfo**. |
| [Image_ErrorCode OH_AuxiliaryPictureInfo_Release(OH_AuxiliaryPictureInfo *info)](#oh_auxiliarypictureinfo_release) | Releases the pointer to an OH_AuxiliaryPictureInfo object. |
| [Image_ErrorCode OH_DecomposeOptions_Create(OH_DecomposeOptions **outOwnedOptions)](#oh_decomposeoptions_create) | Creates an OH_DecomposeOptions object. |
| [Image_ErrorCode OH_DecomposeOptions_SetIsFullSizeGainmap(OH_DecomposeOptions *options, bool isFullSizeGainmap)](#oh_decomposeoptions_setisfullsizegainmap) | Sets whether to generate a full-size gainmap. |
| [Image_ErrorCode OH_DecomposeOptions_GetIsFullSizeGainmap(OH_DecomposeOptions *options, bool *isFullSizeGainmap)](#oh_decomposeoptions_getisfullsizegainmap) | Gets whether to generate a full-size gainmap. |
| [Image_ErrorCode OH_DecomposeOptions_SetDesiredPixelFormat(OH_DecomposeOptions *options, int32_t desiredPixelFormat)](#oh_decomposeoptions_setdesiredpixelformat) | Sets the desired pixel format of the SDR pixel map generated after HDR decomposition. |
| [Image_ErrorCode OH_DecomposeOptions_GetDesiredPixelFormat(OH_DecomposeOptions *options, int32_t *desiredPixelFormat)](#oh_decomposeoptions_getdesiredpixelformat) | Gets the desired pixel format of the SDR pixel map generated after HDR decomposition. |
| [Image_ErrorCode OH_DecomposeOptions_Release(OH_DecomposeOptions *options)](#oh_decomposeoptions_release) | Releases an OH_DecomposeOptions object. |
| [Image_ErrorCode OH_PictureNative_DecomposeToPicture(OH_PixelmapNative *hdrPixelmap, OH_DecomposeOptions *options, OH_PictureNative **outOwnedPicture)](#oh_picturenative_decomposetopicture) | Decomposes an HDR pixel map into a Picture object which contains an SDR pixel map and a gainmap. |

## Enum type description

### Image_AuxiliaryPictureType

```c
enum Image_AuxiliaryPictureType
```

**Description**

Type of the auxiliary picture.

**Since**: 13

| Enum item | Description |
| -- | -- |
| AUXILIARY_PICTURE_TYPE_GAINMAP = 1 | Gainmap |
| AUXILIARY_PICTURE_TYPE_DEPTH_MAP = 2 | Depth map |
| AUXILIARY_PICTURE_TYPE_UNREFOCUS_MAP = 3 | Unrefocus map |
| AUXILIARY_PICTURE_TYPE_LINEAR_MAP = 4 | Linear map |
| AUXILIARY_PICTURE_TYPE_FRAGMENT_MAP = 5 | Fragment map |
| AUXILIARY_PICTURE_TYPE_SNAP_MAP = 6 |  |
| AUXILIARY_PICTURE_TYPE_SNAP_GAINMAP = 7 |  |
| AUXILIARY_PICTURE_TYPE_PAN_MAP = 8 |  |
| AUXILIARY_PICTURE_TYPE_PAN_GAINMAP = 9 |  |


## Function description

### OH_ComposeOptions_Create()

```c
Image_ErrorCode OH_ComposeOptions_Create(OH_ComposeOptions **options)
```

**Description**

Creates an **OH_ComposeOptions** instance.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) **options | Pointer to **OH_ComposeOptions**. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr. |

### OH_ComposeOptions_SetDesiredPixelFormat()

```c
Image_ErrorCode OH_ComposeOptions_SetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT desiredPixelFormat)
```

**Description**

Sets the pixel format in **OH_ComposeOptions**.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) *options | Pointer to **OH_ComposeOptions**. |
| PIXEL_FORMAT desiredPixelFormat | Pixel format. The RGBA_1010102, YCBCR_P010, and YCRCB_P010 formats are supported. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr, or desiredPixelFormat is not supported. |

### OH_ComposeOptions_GetDesiredPixelFormat()

```c
Image_ErrorCode OH_ComposeOptions_GetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT *desiredPixelFormat)
```

**Description**

Obtains the pixel format in **OH_ComposeOptions**.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) *options | Pointer to **OH_ComposeOptions**. |
| PIXEL_FORMAT *desiredPixelFormat | Pixel format in the composition options. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr,or desiredPixelFormat is nullptr. |

### OH_ComposeOptions_Release()

```c
Image_ErrorCode OH_ComposeOptions_Release(OH_ComposeOptions *options)
```

**Description**

Releases the pointer to **OH_ComposeOptions**.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) *options | Pointer to **OH_ComposeOptions**. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr. |

### OH_PictureNative_CreatePicture()

```c
Image_ErrorCode OH_PictureNative_CreatePicture(OH_PixelmapNative *mainPixelmap, OH_PictureNative **picture)
```

**Description**

Creates the pointer to an OH_PictureNative object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) *mainPixelmap | Pointer to the OH_PixelmapNative object of the main picture. |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) **picture | Double pointer to the OH_PictureNative object created. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) mainPixelmap is nullptr, or picture is nullptr. |

### OH_PictureNative_GetMainPixelmap()

```c
Image_ErrorCode OH_PictureNative_GetMainPixelmap(OH_PictureNative *picture, OH_PixelmapNative **mainPixelmap)
```

**Description**

Obtains the pointer to the OH_PixelmapNative object of a main picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) **mainPixelmap | Double pointer to the OH_PixelmapNative object obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or mainPixelmap is nullptr. |

### OH_PictureNative_GetHdrComposedPixelmap()

```c
Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmap(OH_PictureNative *picture, OH_PixelmapNative **hdrPixelmap)
```

**Description**

Obtains the pointer to the OH_PixelmapNative object of an HDR picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) **hdrPixelmap | Double pointer to the OH_PixelmapNative object of the HDR picture. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or hdrPixelmap is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_OPERATION](capi-image-common-h.md#image_errorcode) Unsupported operation, e.g. the picture does not has a gainmap. |

### OH_PictureNative_GetHdrComposedPixelmapWithOptions()

```c
Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmapWithOptions(OH_PictureNative *picture, OH_ComposeOptions *options, OH_PixelmapNative **hdrPixelmap)
```

**Description**

Obtains the pointer to **OH_PixelmapNative** of an HDR picture based on **OH_ComposeOptions**.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [OH_ComposeOptions](capi-image-nativemodule-oh-composeoptions.md) *options | Pointer to **OH_ComposeOptions**. |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) **hdrPixelmap | Pointer to **OH_PixelmapNative** of the obtained HDR picture. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or hdrPixelmap is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_OPERATION](capi-image-common-h.md#image_errorcode) Unsupported operation, e.g. the picture does not has a gainmap. |

### OH_PictureNative_GetGainmapPixelmap()

```c
Image_ErrorCode OH_PictureNative_GetGainmapPixelmap(OH_PictureNative *picture, OH_PixelmapNative **gainmapPixelmap)
```

**Description**

Obtains the pointer to the OH_PixelmapNative object of a gain map.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) **gainmapPixelmap | Double pointer to the OH_PixelmapNative object of the gain map. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or gainmapPixelmap is nullptr. |

### OH_PictureNative_SetAuxiliaryPicture()

```c
Image_ErrorCode OH_PictureNative_SetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative *auxiliaryPicture)
```

**Description**

Sets an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) type | Type of the auxiliary picture. |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or auxiliaryPicture is nullptr, or the type is invalid. |

### OH_PictureNative_GetAuxiliaryPicture()

```c
Image_ErrorCode OH_PictureNative_GetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)
```

**Description**

Obtains an auxiliary picture by type.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) type | Type of the auxiliary picture. |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) **auxiliaryPicture | Double pointer to the OH_AuxiliaryPictureNative object obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or auxiliaryPicture is nullptr, or the type is invalid. |

### OH_PictureNative_GetMetadata()

```c
Image_ErrorCode OH_PictureNative_GetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)
```

**Description**

Obtains the metadata of a main picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) metadataType | Metadata type. |
| [OH_PictureMetadata](capi-image-nativemodule-oh-picturemetadata.md) **metadata | Double pointer to the metadata. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or metadata is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_METADATA](capi-image-common-h.md#image_errorcode) unsupported metadata type. |

### OH_PictureNative_SetMetadata()

```c
Image_ErrorCode OH_PictureNative_SetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)
```

**Description**

Sets the metadata for a main picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) metadataType | Metadata type. |
| [OH_PictureMetadata](capi-image-nativemodule-oh-picturemetadata.md) *metadata | Pointer to the metadata. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or metadata is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_METADATA](capi-image-common-h.md#image_errorcode) unsupported metadata type. |

### OH_PictureNative_GetAuxiliaryPictureCount()

```c
Image_ErrorCode OH_PictureNative_GetAuxiliaryPictureCount(OH_PictureNative *picture, uint32_t *count)
```

**Description**

Obtains the number of auxiliary pictures in a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| uint32_t *count | Pointer to the number of auxiliary pictures. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture or count is nullptr, or fail to get the picture.</li><br>         </ul> |

### OH_PictureNative_GetAuxiliaryPictureTypes()

```c
Image_ErrorCode OH_PictureNative_GetAuxiliaryPictureTypes(OH_PictureNative *picture, Image_AuxiliaryPictureType *auxiliaryPictureTypes, uint32_t *count)
```

**Description**

Obtains the types of auxiliary pictures in a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) *auxiliaryPictureTypes | Pointer to the array that receives the auxiliary picture types. |
| uint32_t *count | On input, the size of auxiliaryPictureTypes array.On output, the actual number of auxiliary pictures. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture, auxiliaryPictureTypes, or count is nullptr,<br>         or fail to get the picture, or count is smaller than required.</li><br>         </ul> |

### OH_PictureNative_GetMetadataCount()

```c
Image_ErrorCode OH_PictureNative_GetMetadataCount(OH_PictureNative *picture, uint32_t *count)
```

**Description**

Obtains the number of metadata entries in a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| uint32_t *count | Pointer to the number of metadata entries. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture or count is nullptr, or fail to get the picture.</li><br>         </ul> |

### OH_PictureNative_GetMetadataTypes()

```c
Image_ErrorCode OH_PictureNative_GetMetadataTypes(OH_PictureNative *picture, Image_MetadataType *metadataTypes, uint32_t *count)
```

**Description**

Obtains the types of metadata in a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) *metadataTypes | Pointer to the array that receives the metadata types. |
| uint32_t *count | On input, the size of metadataTypes array.On output, the actual number of metadata entries. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture, metadataTypes, or count is nullptr,<br>         or fail to get the picture, or count is smaller than required.</li><br>         </ul> |

### OH_PictureNative_RemoveAuxiliaryPicture()

```c
Image_ErrorCode OH_PictureNative_RemoveAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type)
```

**Description**

Removes an auxiliary picture from a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) type | Type of the auxiliary picture to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the auxiliary picture was successfully removed or did not exist.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or fail to get the picture,<br>         or the type is invalid.</li><br>         </ul> |

### OH_PictureNative_RemoveMetadata()

```c
Image_ErrorCode OH_PictureNative_RemoveMetadata(OH_PictureNative *picture, Image_MetadataType type)
```

**Description**

Removes metadata from a Picture object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) type | Type of the metadata to remove. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the metadata was successfully removed or did not exist.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr, or fail to get the picture.</li><br>         <li>[IMAGE_UNSUPPORTED_METADATA](capi-image-common-h.md#image_errorcode) unsupported metadata type.</li><br>         </ul> |

### OH_PictureNative_DeepCopyWithItems()

```c
Image_ErrorCode OH_PictureNative_DeepCopyWithItems(OH_PictureNative *source, const OH_PictureNative_AuxiliaryPictureCopyItem *auxiliaryPictureCopyItems, uint32_t auxiliaryPictureCopyCount, const OH_PictureNative_MetadataCopyItem *metadataCopyItems, uint32_t metadataCopyCount, Image_AuxiliaryPictureType *sourceAuxPictureAsMainPixelMap, OH_PictureNative **picture)
```

**Description**

Creates a deep copy of a PictureNative object with specified auxiliary pictures and metadata copied tospecified destination types.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *source | The source PictureNative object to be copied. Must not be NULL. |
| [const OH_PictureNative_AuxiliaryPictureCopyItem](capi-image-nativemodule-oh-picturenative-auxiliarypicturecopyitem.md) *auxiliaryPictureCopyItems | An array describing the auxiliary pictures to copy,including source and destination auxiliary picture types. Can be NULL ifauxiliaryPictureCopyCount is 0. |
| uint32_t auxiliaryPictureCopyCount | The number of items in auxiliaryPictureCopyItems. |
| [const OH_PictureNative_MetadataCopyItem](capi-image-nativemodule-oh-picturenative-metadatacopyitem.md) *metadataCopyItems | An array describing the metadata entries to copy,including source and destination metadata types. Can be NULL ifmetadataCopyCount is 0. |
| uint32_t metadataCopyCount | The number of items in metadataCopyItems. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) *sourceAuxPictureAsMainPixelMap | Specifies an auxiliary picture type in the sourcepicture to be used as the main pixel map in the copied picture. Can be NULL ifthe original main pixel map should be used. |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) **picture | Output parameter used to receive the newly created PictureNative object.The caller is responsible for releasing it when it is no longer needed. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) if source or picture is nullptr, or counts mismatch,<br>         or fail to get the source picture, or Count is not zero but corresponding array is nullptr.</li><br>         <li>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory allocation failed.</li><br>         </ul> |

### OH_PictureNative_Release()

```c
Image_ErrorCode OH_PictureNative_Release(OH_PictureNative *picture)
```

**Description**

Releases the pointer to an OH_PictureNative object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) *picture | Pointer to an OH_PictureNative object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr. |

### OH_AuxiliaryPictureNative_Create()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_Create(uint8_t *data, size_t dataLength, Image_Size *size, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)
```

**Description**

Creates the pointer to an OH_AuxiliaryPictureNative object. This API supports only continuous pixel datawhose {@link pixel format} is BGRA_8888 and creates an auxiliary picture in RGBA_8888 format.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint8_t *data | Pointer to the image data. |
| size_t dataLength | Length of the image data. |
| [Image_Size](capi-image-nativemodule-image-size.md) *size | Pointer to the size of the auxiliary picture. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) type | Type of the auxiliary picture. |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) **auxiliaryPicture | Double pointer to the OH_AuxiliaryPictureNative object created. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) data is nullptr, or dataLength is invalid, or size is nullptr, or the type<br>         is invalid, or auxiliaryPicture is nullptr. |

### OH_AuxiliaryPictureNative_CreateUsingAllocator()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_CreateUsingAllocator(uint8_t *data, uint32_t dataLength, OH_AuxiliaryPictureInfo *info, IMAGE_ALLOCATOR_MODE allocator, OH_AuxiliaryPictureNative **auxiliaryPicture)
```

**Description**

Creates an OH_AuxiliaryPictureNative object with a specified memory type. By default, the system selectsthe memory type based on the image type, image size, platform capability, and other factors. When processing theauxiliary picture returned by this API, always consider the impact of stride. If **data** is null or **dataLengthis less than or equal to 0, the auxiliary picture will not be initialized.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint8_t *data | Pointer to the image data. |
| uint32_t dataLength | Length of the image data. |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the basic information of the auxiliary picture. |
| [IMAGE_ALLOCATOR_MODE](capi-image-common-h.md#image_allocator_mode) allocator | Memory type used by the auxiliary picture. For details about the available options, see[IMAGE_ALLOCATOR_MODE](capi-image-common-h.md#image_errorcode). |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) **auxiliaryPicture | Double pointer to the OH_AuxiliaryPictureNative object created. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) info or auxiliaryPicture is nullptr, or allocator is invalid,<br>         or the size is invalid, or the type is unsupported, or dataLength is smaller than required.</li><br>         <li>[IMAGE_SOURCE_UNSUPPORTED_ALLOCATOR_TYPE](capi-image-common-h.md#image_errorcode) unsupported allocator type,<br>         e.g., use share memory create a gainmap as only DMA supported hdr metadata.</li><br>         <li>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory allocation failed.</li><br>         </ul> |

### OH_AuxiliaryPictureNative_WritePixels()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_WritePixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *source, size_t bufferSize)
```

**Description**

Reads pixels in the buffer and writes the result to an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| uint8_t *source | Pixels to be written. |
| size_t bufferSize | Buffer size. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or source is nullptr, or the bufferSize is invalid.<br>     <br>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory alloc failed.<br>     <br>[IMAGE_COPY_FAILED](capi-image-common-h.md#image_errorcode) memory copy failed. |

### OH_AuxiliaryPictureNative_ReadPixels()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_ReadPixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *destination, size_t *bufferSize)
```

**Description**

Reads pixels of an auxiliary picture and writes the result to the buffer.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| uint8_t *destination | Pointer to the buffer to which the pixels of the auxiliary data will be written. |
| size_t *bufferSize | Pointer to the buffer size. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or destination is nullptr,<br>         or the bufferSize is invalid.<br>     <br>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory alloc failed.<br>     <br>[IMAGE_COPY_FAILED](capi-image-common-h.md#image_errorcode) memory copy failed. |

### OH_AuxiliaryPictureNative_GetType()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_GetType(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_AuxiliaryPictureType *type)
```

**Description**

Obtains the type of an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) *type | Pointer to the auxiliary picture type. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or type is nullptr. |

### OH_AuxiliaryPictureNative_GetInfo()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_GetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo **info)
```

**Description**

Obtains the information of an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) **info | Double pointer to the auxiliary picture information. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or info is nullptr. |

### OH_AuxiliaryPictureNative_SetInfo()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_SetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo *info)
```

**Description**

Sets the information for an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the auxiliary picture information. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or info is nullptr. |

### OH_AuxiliaryPictureNative_GetMetadata()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_GetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)
```

**Description**

Obtains the metadata of an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) metadataType | Metadata type. |
| [OH_PictureMetadata](capi-image-nativemodule-oh-picturemetadata.md) **metadata | Double pointer to the metadata. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or metadata is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_METADATA](capi-image-common-h.md#image_errorcode) unsupported metadata type, or the metadata type does not match the<br>         auxiliary picture type. |

### OH_AuxiliaryPictureNative_SetMetadata()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_SetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)
```

**Description**

Sets the metadata for an auxiliary picture.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [Image_MetadataType](capi-image-common-h.md#image_metadatatype) metadataType | Metadata type. |
| [OH_PictureMetadata](capi-image-nativemodule-oh-picturemetadata.md) *metadata | Pointer to the metadata. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or metadata is nullptr.<br>     <br>[IMAGE_UNSUPPORTED_METADATA](capi-image-common-h.md#image_errorcode) unsupported metadata type, or the metadata type does not match the<br>         auxiliary picture type. |

### OH_AuxiliaryPictureNative_AcquirePixelmap()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_AcquirePixelmap(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_PixelmapNative **pixelmap)
```

**Description**

Obtains the OH_PixelmapNative object of an auxiliary picture.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *auxiliaryPicture | Pointer to an OH_AuxiliaryPictureNative object. |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) **pixelmap | Double pointer to the OH_PixelmapNative object obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) auxiliaryPicture is nullptr, or pixelmap is nullptr.</li><br>         <li>[IMAGE_GET_IMAGE_DATA_FAILED](capi-image-common-h.md#image_errorcode) fail to get the auxiliary picture or its pixelmap content.</li><br>         <li>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory allocation failed.</li><br>         </ul> |

### OH_AuxiliaryPictureNative_Release()

```c
Image_ErrorCode OH_AuxiliaryPictureNative_Release(OH_AuxiliaryPictureNative *picture)
```

**Description**

Releases the pointer to an OH_AuxiliaryPictureNative object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureNative](capi-image-nativemodule-oh-auxiliarypicturenative.md) *picture | Pointer to an OH_AuxiliaryPictureNative object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) picture is nullptr. |

### OH_AuxiliaryPictureInfo_Create()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_Create(OH_AuxiliaryPictureInfo **info)
```

**Description**

Creates an OH_AuxiliaryPictureInfo object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) **info | Double pointer to the OH_AuxiliaryPictureInfo object created. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr. |

### OH_AuxiliaryPictureInfo_GetType()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_GetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType *type)
```

**Description**

Obtains the auxiliary picture type in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) *type | Pointer to the type of the auxiliary picture. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or type is nullptr. |

### OH_AuxiliaryPictureInfo_SetType()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_SetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType type)
```

**Description**

Sets the auxiliary picture type in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| [Image_AuxiliaryPictureType](capi-picture-native-h.md#image_auxiliarypicturetype) type | Type of the auxiliary picture. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or type is invalid. |

### OH_AuxiliaryPictureInfo_GetSize()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_GetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)
```

**Description**

Obtains the image size in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| [Image_Size](capi-image-nativemodule-image-size.md) *size | Pointer to the size. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or size is nullptr. |

### OH_AuxiliaryPictureInfo_SetSize()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_SetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)
```

**Description**

Sets the image size in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| [Image_Size](capi-image-nativemodule-image-size.md) *size | Pointer to the size. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or size is nullptr. |

### OH_AuxiliaryPictureInfo_GetRowStride()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_GetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t *rowStride)
```

**Description**

Obtains the row stride in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| uint32_t *rowStride | Pointer to the row stride, which is the number of bytes from one row of pixels in memory to thenext row of pixels in memory. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or rowStride is nullptr. |

### OH_AuxiliaryPictureInfo_SetRowStride()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_SetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t rowStride)
```

**Description**

Sets the row stride in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| uint32_t rowStride | Row stride, which is the number of bytes from one row of pixels in memory to the next row of pixelsin memory. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or rowStride is nullptr. |

### OH_AuxiliaryPictureInfo_GetPixelFormat()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_GetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT *pixelFormat)
```

**Description**

Obtains the pixel format in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| PIXEL_FORMAT *pixelFormat | Pointer to the pixel format obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr, or pixelFormat is nullptr. |

### OH_AuxiliaryPictureInfo_SetPixelFormat()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_SetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT pixelFormat)
```

**Description**

Sets the pixel format in **OH_AuxiliaryPictureInfo**.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |
| PIXEL_FORMAT pixelFormat | Pixel format. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr. |

### OH_AuxiliaryPictureInfo_Release()

```c
Image_ErrorCode OH_AuxiliaryPictureInfo_Release(OH_AuxiliaryPictureInfo *info)
```

**Description**

Releases the pointer to an OH_AuxiliaryPictureInfo object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AuxiliaryPictureInfo](capi-image-nativemodule-oh-auxiliarypictureinfo.md) *info | Pointer to the OH_AuxiliaryPictureInfo object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | [IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.<br>     <br>[IMAGE_BAD_PARAMETER](capi-image-common-h.md#image_errorcode) info is nullptr. |

### OH_DecomposeOptions_Create()

```c
Image_ErrorCode OH_DecomposeOptions_Create(OH_DecomposeOptions **outOwnedOptions)
```

**Description**

Creates an OH_DecomposeOptions object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) **outOwnedOptions | The pointer to an OH_DecomposeOptions object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) outOwnedOptions is nullptr.</li><br>         <li>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory allocation failed.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_DecomposeOptions_SetIsFullSizeGainmap()

```c
Image_ErrorCode OH_DecomposeOptions_SetIsFullSizeGainmap(OH_DecomposeOptions *options, bool isFullSizeGainmap)
```

**Description**

Sets whether to generate a full-size gainmap.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | The pointer to an OH_DecomposeOptions object. |
| bool isFullSizeGainmap | Whether to generate a full-size gainmap. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_DecomposeOptions_GetIsFullSizeGainmap()

```c
Image_ErrorCode OH_DecomposeOptions_GetIsFullSizeGainmap(OH_DecomposeOptions *options, bool *isFullSizeGainmap)
```

**Description**

Gets whether to generate a full-size gainmap.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | The pointer to an OH_DecomposeOptions object. |
| bool *isFullSizeGainmap | Pointer to the value indicating whether to generate a full-size gainmap. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) options or isFullSizeGainmap is nullptr.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_DecomposeOptions_SetDesiredPixelFormat()

```c
Image_ErrorCode OH_DecomposeOptions_SetDesiredPixelFormat(OH_DecomposeOptions *options, int32_t desiredPixelFormat)
```

**Description**

Sets the desired pixel format of the SDR pixel map generated after HDR decomposition.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | The pointer to an OH_DecomposeOptions object. |
| int32_t desiredPixelFormat | The desired pixel format of the generated SDR pixel map, which can be set toRGBA_8888, NV12, or NV21. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr.</li><br>         <li>[IMAGE_UNSUPPORTED_OPERATION](capi-image-common-h.md#image_errorcode) desiredPixelFormat is not supported.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_DecomposeOptions_GetDesiredPixelFormat()

```c
Image_ErrorCode OH_DecomposeOptions_GetDesiredPixelFormat(OH_DecomposeOptions *options, int32_t *desiredPixelFormat)
```

**Description**

Gets the desired pixel format of the SDR pixel map generated after HDR decomposition.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | The pointer to an OH_DecomposeOptions object. |
| int32_t *desiredPixelFormat | Pointer to the desired pixel format of the generated SDR pixel map. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) options or desiredPixelFormat is nullptr.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_DecomposeOptions_Release()

```c
Image_ErrorCode OH_DecomposeOptions_Release(OH_DecomposeOptions *options)
```

**Description**

Releases an OH_DecomposeOptions object.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | The pointer to an OH_DecomposeOptions object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) options is nullptr.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |

### OH_PictureNative_DecomposeToPicture()

```c
Image_ErrorCode OH_PictureNative_DecomposeToPicture(OH_PixelmapNative *hdrPixelmap, OH_DecomposeOptions *options, OH_PictureNative **outOwnedPicture)
```

**Description**

Decomposes an HDR pixel map into a Picture object which contains an SDR pixel map and a gainmap.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PixelmapNative](capi-image-nativemodule-oh-pixelmapnative.md) *hdrPixelmap | The HDR pixel map to be decomposed. |
| [OH_DecomposeOptions](capi-image-nativemodule-oh-decomposeoptions.md) *options | Options used to control HDR decomposition. This parameter is mandatory. |
| [OH_PictureNative](capi-image-nativemodule-oh-picturenative.md) **outOwnedPicture | Pointer to the created Picture object. |

**Returns**:

| Type | Description |
| -- | -- |
| [Image_ErrorCode](capi-image-common-h.md#image_errorcode) | <ul><br>         <li>[IMAGE_SUCCESS](capi-image-common-h.md#image_errorcode) if the execution is successful.</li><br>         <li>[IMAGE_INVALID_PARAMETER](capi-image-common-h.md#image_errorcode) hdrPixelmap, options, or outOwnedPicture is nullptr.</li><br>         <li>[IMAGE_UNSUPPORTED_OPERATION](capi-image-common-h.md#image_errorcode) the pixel map is not supported for decomposition.</li><br>         <li>{@link IMAGE_DECOMPOSE_FAILED} the decomposition process failed.</li><br>         <li>[IMAGE_ALLOC_FAILED](capi-image-common-h.md#image_errorcode) memory allocation failed.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         </ul> |


