# image_processing.h

## Overview

Declare image processing functions.Provides SDR content processing for images, including color space conversion, metadata generationand image scaling.

**Library**: libimage_processing.so

**System capability**: SystemCapability.Multimedia.VideoProcessingEngine

**Since**: 13

**Related module**: [ImageProcessing](capi-imageprocessing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [ImageProcessing_ErrorCode OH_ImageProcessing_InitializeEnvironment(void)](#oh_imageprocessing_initializeenvironment) | Initialize global environment for image processing.This function is optional. <br> Typically, this function is called once when the host process is started to initialize the global environment forimage processing, which can reduce the time of [OH_ImageProcessing_Create](capi-image-processing-h.md#oh_imageprocessing_create). <br> To deinitialize global environment, call [OH_ImageProcessing_DeinitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_deinitializeenvironment). |
| [ImageProcessing_ErrorCode OH_ImageProcessing_DeinitializeEnvironment(void)](#oh_imageprocessing_deinitializeenvironment) | Deinitialize global environment for image processing.This function is required if [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment) is called. Typically, thisfunction is called when the host process is about to exit to deinitialize the global environment, which isinitialized by calling [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment). <br> If there is some image processing instance existing, this function should not be called. <br> If the [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment) is not called, this function should not be called. |
| [bool OH_ImageProcessing_IsColorSpaceConversionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo)](#oh_imageprocessing_iscolorspaceconversionsupported) | Query whether the image color space conversion is supported. |
| [bool OH_ImageProcessing_IsCompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* sourceGainmapInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo)](#oh_imageprocessing_iscompositionsupported) | Query whether the image composition is supported. |
| [bool OH_ImageProcessing_IsDecompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo, const ImageProcessing_ColorSpaceInfo* destinationGainmapInfo)](#oh_imageprocessing_isdecompositionsupported) | Query whether the image decomposition is supported. |
| [bool OH_ImageProcessing_IsMetadataGenerationSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo)](#oh_imageprocessing_ismetadatagenerationsupported) | Query whether the image metadata generation is supported. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_Create(OH_ImageProcessing** imageProcessor, int32_t type)](#oh_imageprocessing_create) | Create an image processing instance. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_Destroy(OH_ImageProcessing* imageProcessor)](#oh_imageprocessing_destroy) | Destroy the image processing instance. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_SetParameter(OH_ImageProcessing* imageProcessor, const OH_AVFormat* parameter)](#oh_imageprocessing_setparameter) | Set parameter for image processing.Add parameter identified by the specified parameter key. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_GetParameter(OH_ImageProcessing* imageProcessor, OH_AVFormat* parameter)](#oh_imageprocessing_getparameter) | Get parameter of image processing.Get parameter identified by the specified parameter key. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_ConvertColorSpace(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)](#oh_imageprocessing_convertcolorspace) | Conversion between single-layer images.The function generate the destinationImage from sourceImage. It include the colorspace conversion fromHDR image to SDR image, SDR image to HDR image, SDR image to SDR image and HDR image to HDR image. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_Compose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* sourceGainmap, OH_PixelmapNative* destinationImage)](#oh_imageprocessing_compose) | Composition from dual-layer HDR images to single-layer HDR images.The function generate the destinationImage from sourceImage and sourceGainmap. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_Decompose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage, OH_PixelmapNative* destinationGainmap)](#oh_imageprocessing_decompose) | Decomposition from single-layer HDR images to dual-layer HDR images.The function generate the destinationImage and destinationGainmap from sourceImage. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_GenerateMetadata(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage)](#oh_imageprocessing_generatemetadata) | Metadata Generation for HDR images.The function generate metadata for the sourceImage. |
| [ImageProcessing_ErrorCode OH_ImageProcessing_EnhanceDetail(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)](#oh_imageprocessing_enhancedetail) | Clarity enhancement for images.The function generate the destinationImage from sourceImage with necessary scaling operation according to the sizepreset in the sourceImage and destinationImage. Different levels of scaling methonds are provided to balanceperformance and image quality. |

## Function description

### OH_ImageProcessing_InitializeEnvironment()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_InitializeEnvironment(void)
```

**Description**

Initialize global environment for image processing.This function is optional. <br> Typically, this function is called once when the host process is started to initialize the global environment forimage processing, which can reduce the time of [OH_ImageProcessing_Create](capi-image-processing-h.md#oh_imageprocessing_create). <br> To deinitialize global environment, call [OH_ImageProcessing_DeinitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_deinitializeenvironment).

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if initialization is successful. <br> [IMAGE_PROCESSING_ERROR_INITIALIZE_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if initialization is failed. <br> You can check if the device GPU is working properly. |

### OH_ImageProcessing_DeinitializeEnvironment()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_DeinitializeEnvironment(void)
```

**Description**

Deinitialize global environment for image processing.This function is required if [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment) is called. Typically, thisfunction is called when the host process is about to exit to deinitialize the global environment, which isinitialized by calling [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment). <br> If there is some image processing instance existing, this function should not be called. <br> If the [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment) is not called, this function should not be called.

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if deinitialization is successful. <br> [IMAGE_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-image-processing-types-h.md#imageprocessing_errorcode) if some image processing instance is not destroyed or<br> [OH_ImageProcessing_InitializeEnvironment](capi-image-processing-h.md#oh_imageprocessing_initializeenvironment) is not called. |

### OH_ImageProcessing_IsColorSpaceConversionSupported()

```c
bool OH_ImageProcessing_IsColorSpaceConversionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo)
```

**Description**

Query whether the image color space conversion is supported.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* sourceImageInfo | Input image color space information pointer. |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* destinationImageInfo | Output image color space information pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the color space conversion is supported. <br> <b>false</b> if the the color space conversion is unsupported. |

### OH_ImageProcessing_IsCompositionSupported()

```c
bool OH_ImageProcessing_IsCompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* sourceGainmapInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo)
```

**Description**

Query whether the image composition is supported.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* sourceImageInfo | Input image color space information pointer. |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* sourceGainmapInfo | Input gainmap color space information pointer. |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* destinationImageInfo | Output image color space information pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the image composition is supported. <br> <b>false</b> if the image composition is unsupported. |

### OH_ImageProcessing_IsDecompositionSupported()

```c
bool OH_ImageProcessing_IsDecompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo, const ImageProcessing_ColorSpaceInfo* destinationGainmapInfo)
```

**Description**

Query whether the image decomposition is supported.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* sourceImageInfo | Input image color space information pointer. |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* destinationImageInfo | Output image color space information pointer. |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* destinationGainmapInfo | Output gainmap information pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the image decomposition is supported. <br> <b>false</b> if the image decomposition is unsupported. |

### OH_ImageProcessing_IsMetadataGenerationSupported()

```c
bool OH_ImageProcessing_IsMetadataGenerationSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo)
```

**Description**

Query whether the image metadata generation is supported.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ImageProcessing_ColorSpaceInfo](capi-imageprocessing-imageprocessing-colorspaceinfo.md)* sourceImageInfo | Input image color space information pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the image metadata generation is supported.. <br> <b>false</b> if the image metadata generation is unsupported. |

### OH_ImageProcessing_Create()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_Create(OH_ImageProcessing** imageProcessor, int32_t type)
```

**Description**

Create an image processing instance.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)** imageProcessor | Output parameter. The *imageProcessor points to a new image processing object.The *imageProcessor must be null before passed in. |
| int32_t type | Use IMAGE_PROCESSING_TYPE_XXX to specify the processing type. The processing type of the instance can notbe changed. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if creating an image processing successfully. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the type is not supported. For example, if metadata<br> generation is not supported by vendor, it returns unsupported processing. <br> [IMAGE_PROCESSING_ERROR_CREATE_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if failed to create an image processing. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or <b></b>instance is <b>not</b> null. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if type is invalid. |

### OH_ImageProcessing_Destroy()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_Destroy(OH_ImageProcessing* imageProcessor)
```

**Description**

Destroy the image processing instance.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. It is recommended setting theinstance pointer to null after the instance is destroyed. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if the instance is destroyed successfully. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. |

### OH_ImageProcessing_SetParameter()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_SetParameter(OH_ImageProcessing* imageProcessor, const OH_AVFormat* parameter)
```

**Description**

Set parameter for image processing.Add parameter identified by the specified parameter key.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. |
| [const OH_AVFormat](capi-imageprocessing-oh-avformat.md)* parameter | The parameter for image processing. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if setting parameter is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the parameter is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of the parameter is invalid. For example, the parameter<br> contains unsupported parameter key or value. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |

### OH_ImageProcessing_GetParameter()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_GetParameter(OH_ImageProcessing* imageProcessor, OH_AVFormat* parameter)
```

**Description**

Get parameter of image processing.Get parameter identified by the specified parameter key.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. |
| [OH_AVFormat](capi-imageprocessing-oh-avformat.md)* parameter | The parameter used by the image processing instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if getting parameter is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the parameter is null. |

### OH_ImageProcessing_ConvertColorSpace()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_ConvertColorSpace(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)
```

**Description**

Conversion between single-layer images.The function generate the destinationImage from sourceImage. It include the colorspace conversion fromHDR image to SDR image, SDR image to HDR image, SDR image to SDR image and HDR image to HDR image.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. The instance should be created withtype {@link IMAGE_PROCESSING_TYPE_COLOR_SPACE_CONVERSION}. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceImage | Input image pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* destinationImage | Output image pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing image is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the image is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of image is invalid. For example, the color space<br> of the image is unsupported. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the processing is not supported. <br> [IMAGE_PROCESSING_ERROR_PROCESS_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing error occurs. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |

### OH_ImageProcessing_Compose()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_Compose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* sourceGainmap, OH_PixelmapNative* destinationImage)
```

**Description**

Composition from dual-layer HDR images to single-layer HDR images.The function generate the destinationImage from sourceImage and sourceGainmap.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. The instance should be created withtype {@link IMAGE_PROCESSING_TYPE_COMPOSITION}. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceImage | Input image pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceGainmap | Input gainmap pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* destinationImage | Output image pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing image is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the image is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of image is invalid. For example, the color space<br> of the image is unsupported. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the processing is not supported. <br> [IMAGE_PROCESSING_ERROR_PROCESS_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing error occurs. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |

### OH_ImageProcessing_Decompose()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_Decompose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage, OH_PixelmapNative* destinationGainmap)
```

**Description**

Decomposition from single-layer HDR images to dual-layer HDR images.The function generate the destinationImage and destinationGainmap from sourceImage.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. The instance should be created withtype {@link IMAGE_PROCESSING_TYPE_DECOMPOSITION}. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceImage | Input image pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* destinationImage | Output image pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* destinationGainmap | Output gainmap pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing image is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the image is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of image is invalid. For example, the color space<br> of the image is unsupported. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the processing is not supported. <br> [IMAGE_PROCESSING_ERROR_PROCESS_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing error occurs. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |

### OH_ImageProcessing_GenerateMetadata()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_GenerateMetadata(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage)
```

**Description**

Metadata Generation for HDR images.The function generate metadata for the sourceImage.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. The instance should be created withtype {@link IMAGE_PROCESSING_TYPE_METADATA_GENERATION}. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceImage | Input image pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing image is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the image is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of image is invalid. For example, the color space<br> of the image is unsupported. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the processing is not supported. <br> [IMAGE_PROCESSING_ERROR_PROCESS_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing error occurs. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |

### OH_ImageProcessing_EnhanceDetail()

```c
ImageProcessing_ErrorCode OH_ImageProcessing_EnhanceDetail(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)
```

**Description**

Clarity enhancement for images.The function generate the destinationImage from sourceImage with necessary scaling operation according to the sizepreset in the sourceImage and destinationImage. Different levels of scaling methonds are provided to balanceperformance and image quality.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ImageProcessing](capi-imageprocessing-oh-imageprocessing.md)* imageProcessor | An image processing instance pointer. The instance should be created withtype {@link IMAGE_PROCESSING_TYPE_DETAIL_ENHANCER}. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* sourceImage | Input image pointer. |
| [OH_PixelmapNative](capi-imageprocessing-oh-pixelmapnative.md)* destinationImage | Output image pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ImageProcessing_ErrorCode](capi-image-processing-types-h.md#imageprocessing_errorcode) | [IMAGE_PROCESSING_SUCCESS](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing image is successful. <br> [IMAGE_PROCESSING_ERROR_INVALID_INSTANCE](capi-image-processing-types-h.md#imageprocessing_errorcode) if instance is null or not an image processing instance. <br> [IMAGE_PROCESSING_ERROR_INVALID_PARAMETER](capi-image-processing-types-h.md#imageprocessing_errorcode) if the image is null. <br> [IMAGE_PROCESSING_ERROR_INVALID_VALUE](capi-image-processing-types-h.md#imageprocessing_errorcode) if some property of image is invalid. For example, the color space<br> of the image is unsupported. <br> [IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-image-processing-types-h.md#imageprocessing_errorcode) if the processing is not supported. <br> [IMAGE_PROCESSING_ERROR_PROCESS_FAILED](capi-image-processing-types-h.md#imageprocessing_errorcode) if processing error occurs. <br> [IMAGE_PROCESSING_ERROR_NO_MEMORY](capi-image-processing-types-h.md#imageprocessing_errorcode) if memory allocation failed. |


