# video_processing_types.h

## Overview

Type definitions for video processing.

**Library**: libvideo_processing.so

**System capability**: SystemCapability.Multimedia.VideoProcessingEngine

**Since**: 12

**Related module**: [VideoProcessing](capi-videoprocessing.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [VideoProcessing_ColorSpaceInfo](capi-videoprocessing-videoprocessing-colorspaceinfo.md) | VideoProcessing_ColorSpaceInfo | Video color space information structure of querying if video color space conversion is supported. |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md) | OH_VideoProcessing | Define the video processing object.Define a null pointer of OH_VideoProcessing and call {@link OH_VideoProcessing_Create} to create a video processinginstance. The pointer should be null before creating instance.User can create multiple video processing instances for different processing types. |
| [NativeWindow](capi-videoprocessing-nativewindow.md) | OHNativeWindow | Forward declaration of NativeWindow. |
| [OH_AVFormat](capi-videoprocessing-oh-avformat.md) | OH_AVFormat | Forward declaration of OH_AVFormat. |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md) | VideoProcessing_Callback | Video processing asynchronous callback object type.Define a null pointer of VideoProcessing_Callback and call {@link OH_VideoProcessingCallback_Create} to create acallback object. The pointer should be null before creating the callback object.Register the callback to a video processing instance by calling {@link OH_VideoProcessing_RegisterCallback}. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [VideoDetailEnhancer_QualityLevel](#videodetailenhancer_qualitylevel) | VideoDetailEnhancer_QualityLevel | The quality level is used for detail enhancement.It is the value of the key parameter {@link VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL}. |
| [VideoMetadataGeneratorStyleControl](#videometadatageneratorstylecontrol) | VideoMetadataGeneratorStyleControl | The style control is used for video metadata generator.It is the value of the key parameter {@link VIDEO_METADATA_GENERATOR_STYLE_CONTROL}. |
| [VideoProcessing_ErrorCode](#videoprocessing_errorcode) | VideoProcessing_ErrorCode | Video processing error code. |
| [VideoProcessing_State](#videoprocessing_state) | VideoProcessing_State | Video processing states.The state is reported to user by callback function {@link OH_VideoProcessing_OnState}. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_VideoProcessingCallback_OnError)(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData)](#oh_videoprocessingcallback_onerror) | OH_VideoProcessingCallback_OnError | The callback function pointer definition for reporting error during video processing.Errors: <br> [VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-video-processing-types-h.md#videoprocessing_errorcode), the processing is not supported. For example, thecolor space conversion according to the source and destination videos' properties is not supported. <br> [VIDEO_PROCESSING_ERROR_INVALID_VALUE](capi-video-processing-types-h.md#videoprocessing_errorcode), some property of the video is invalid. For example, the color space ofthe video is invalid. <br> [VIDEO_PROCESSING_ERROR_NO_MEMORY](capi-video-processing-types-h.md#videoprocessing_errorcode), out of memory. <br> [VIDEO_PROCESSING_ERROR_PROCESS_FAILED](capi-video-processing-types-h.md#videoprocessing_errorcode), some processing error occurs. <br> For more errors, see [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode). |
| [typedef void (\*OH_VideoProcessingCallback_OnState)(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData)](#oh_videoprocessingcallback_onstate) | OH_VideoProcessingCallback_OnState | The callback function pointer definition for reporting video processing state.The state will be [VIDEO_PROCESSING_STATE_RUNNING](capi-video-processing-types-h.md#videoprocessing_state) after {@link OH_VideoProcessing_Start} is calledsuccessfully.The state will be [VIDEO_PROCESSING_STATE_STOPPED](capi-video-processing-types-h.md#videoprocessing_state) after all the buffers cached before{@link OH_VideoProcessing_Stop} is called are processed. |
| [typedef void (\*OH_VideoProcessingCallback_OnNewOutputBuffer)(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData)](#oh_videoprocessingcallback_onnewoutputbuffer) | OH_VideoProcessingCallback_OnNewOutputBuffer | The callback function pointer definition for reporting a new output buffer is filled with processed data.Every new output buffer's index will report to user once the buffer is filled with processed data. Then call{@link OH_VideoProcessing_RenderOutputBuffer} with the buffer's index to send the output buffer out.If this function is not registered, the output buffer is sent out as soon as the buffer is filled with processeddata without reporting. |

### Variable

| Name | Description |
| -- | -- |
| const int32_t VIDEO_PROCESSING_TYPE_COLOR_SPACE_CONVERSION | Used to create a video processing instance for color space conversion.Some capabilities are supported by vendor. Use {@link OH_VideoProcessing_IsColorSpaceConversionSupported} to query ifthe conversion is supported.<br>**Since**: 12<br>**System capability**: SystemCapability.Multimedia.VideoProcessingEngine |
| const int32_t VIDEO_PROCESSING_TYPE_METADATA_GENERATION | Used to create a video processing instance for metadata generation.Generate HDR vivid metadata for video. The capability is supported by vendor. If the capability is not supported,{@link OH_VideoProcessing_Create} returns [VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-video-processing-types-h.md#videoprocessing_errorcode).<br>**Since**: 12 |
| const int32_t VIDEO_PROCESSING_TYPE_DETAIL_ENHANCER | Used to create an video processing instance of detail enhancement.Scale or resize video with the specified quality or just enhance details for rendering without changing itsresolution.<br>**Since**: 12 |
| const char * VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL | The key is used to specify the quality level for video detail enhancement.See [VideoDetailEnhancer_QualityLevel](capi-video-processing-types-h.md#videodetailenhancer_qualitylevel) for its values.Use {@link OH_VideoProcessing_SetParameter} to set the quality level.Use {@link OH_VideoProcessing_GetParameter} to get the current quality level.<br>**Since**: 12 |
| const char * VIDEO_METADATA_GENERATOR_STYLE_CONTROL | The key is used to specify the style control for video metadata generator.See [VideoMetadataGeneratorStyleControl](capi-video-processing-types-h.md#videometadatageneratorstylecontrol) for its values.Use {@link OH_AVFormat_SetIntValue} to set the mode value into AVFormat parameter.Use {@link OH_VideoProcessing_SetParameter} to set parameter into video processing instance.Use {@link OH_VideoProcessing_GetParameter} to get the current mode.<br>**Since**: 22 |

## Enum type description

### VideoDetailEnhancer_QualityLevel

```c
enum VideoDetailEnhancer_QualityLevel
```

**Description**

The quality level is used for detail enhancement.It is the value of the key parameter {@link VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL}.

**Since**: 12

| Enum item | Description |
| -- | -- |
| VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_NONE | No detail enhancement |
| VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_LOW | A low level of detail enhancement quality but with a fast speed. It's the default level |
| VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_MEDIUM | A medium level of detail enhancement quality. Its speed is between the low setting and high setting |
| VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_HIGH | A high level of detail enhancement quality but with a relatively slow speed |

**Reference**:

OH_VideoProcessing_SetParameter
OH_VideoProcessing_GetParameter


### VideoMetadataGeneratorStyleControl

```c
enum VideoMetadataGeneratorStyleControl
```

**Description**

The style control is used for video metadata generator.It is the value of the key parameter {@link VIDEO_METADATA_GENERATOR_STYLE_CONTROL}.

**Since**: 22

| Enum item | Description |
| -- | -- |
| VIDEO_METADATA_GENERATOR_CONTRAST_MODE = 0 | Style Control into contrast mode |
| VIDEO_METADATA_GENERATOR_BRIGHT_MODE = 1 | Style Control into bright mode |

**Reference**:

OH_AVFormat_SetIntValue
OH_VideoProcessing_SetParameter
OH_VideoProcessing_GetParameter


### VideoProcessing_ErrorCode

```c
enum VideoProcessing_ErrorCode
```

**Description**

Video processing error code.

**Since**: 12

| Enum item | Description |
| -- | -- |
| VIDEO_PROCESSING_SUCCESS | @error Operation is successful. |
| VIDEO_PROCESSING_ERROR_INVALID_PARAMETER = 401 | Input parameter is invalid. This error is returned for all of the following error conditions:1 - Invalid input or output video buffer - The video buffer is null.2 - Invalid parameter - The parameter is null.3 - Invalid type - The type passed in the create function does not exist. |
| VIDEO_PROCESSING_ERROR_UNKNOWN = 29210001 | @error Some unknown error occurred, such as GPU calculation failure or memcpy failure. |
| VIDEO_PROCESSING_ERROR_INITIALIZE_FAILED | The global environment initialization for video processing failed, such as failure to initializethe GPU environment. |
| VIDEO_PROCESSING_ERROR_CREATE_FAILED | Failed to create video processing instance. For example,the number of instances exceeds the upper limit. |
| VIDEO_PROCESSING_ERROR_PROCESS_FAILED | @error Failed to process video buffer. For example, the processing times out. |
| VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING | The processing is not supported. You may call OH_VideoProcessing_IsXXXSupportedto check whether the capability is supported. |
| VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED | @error The operation is not permitted. This may be caused by incorrect status. |
| VIDEO_PROCESSING_ERROR_NO_MEMORY | @error Out of memory. |
| VIDEO_PROCESSING_ERROR_INVALID_INSTANCE | @error The video processing instance is invalid. This may be caused by null instance. |
| VIDEO_PROCESSING_ERROR_INVALID_VALUE | Input value is invalid. This error is returned for all of the following error conditions:1 - Invalid input or output video buffer - The video buffer width(height)is too large or colorspace is incorrect.2 - Invalid parameter - The parameter does not contain valid information,such as detail enhancer level is incorrect. |

### VideoProcessing_State

```c
enum VideoProcessing_State
```

**Description**

Video processing states.The state is reported to user by callback function {@link OH_VideoProcessing_OnState}.

**Since**: 12

| Enum item | Description |
| -- | -- |
| VIDEO_PROCESSING_STATE_RUNNING | Video processing is running |
| VIDEO_PROCESSING_STATE_STOPPED | Video processing is stopped |


## Function description

### OH_VideoProcessingCallback_OnError()

```c
typedef void (*OH_VideoProcessingCallback_OnError)(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData)
```

**Description**

The callback function pointer definition for reporting error during video processing.Errors: <br> [VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-video-processing-types-h.md#videoprocessing_errorcode), the processing is not supported. For example, thecolor space conversion according to the source and destination videos' properties is not supported. <br> [VIDEO_PROCESSING_ERROR_INVALID_VALUE](capi-video-processing-types-h.md#videoprocessing_errorcode), some property of the video is invalid. For example, the color space ofthe video is invalid. <br> [VIDEO_PROCESSING_ERROR_NO_MEMORY](capi-video-processing-types-h.md#videoprocessing_errorcode), out of memory. <br> [VIDEO_PROCESSING_ERROR_PROCESS_FAILED](capi-video-processing-types-h.md#videoprocessing_errorcode), some processing error occurs. <br> For more errors, see [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_VideoProcessing\* videoProcessor | The video processing instance. |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) error | Error code reporting to user. |
| void\* userData | User's custom data. |

### OH_VideoProcessingCallback_OnState()

```c
typedef void (*OH_VideoProcessingCallback_OnState)(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData)
```

**Description**

The callback function pointer definition for reporting video processing state.The state will be [VIDEO_PROCESSING_STATE_RUNNING](capi-video-processing-types-h.md#videoprocessing_state) after {@link OH_VideoProcessing_Start} is calledsuccessfully.The state will be [VIDEO_PROCESSING_STATE_STOPPED](capi-video-processing-types-h.md#videoprocessing_state) after all the buffers cached before{@link OH_VideoProcessing_Stop} is called are processed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_VideoProcessing\* videoProcessor | The video processing instance. |
| [VideoProcessing_State](capi-video-processing-types-h.md#videoprocessing_state) state | see [VideoProcessing_State](capi-video-processing-types-h.md#videoprocessing_state). |
| void\* userData | User's custom data. |

### OH_VideoProcessingCallback_OnNewOutputBuffer()

```c
typedef void (*OH_VideoProcessingCallback_OnNewOutputBuffer)(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData)
```

**Description**

The callback function pointer definition for reporting a new output buffer is filled with processed data.Every new output buffer's index will report to user once the buffer is filled with processed data. Then call{@link OH_VideoProcessing_RenderOutputBuffer} with the buffer's index to send the output buffer out.If this function is not registered, the output buffer is sent out as soon as the buffer is filled with processeddata without reporting.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_VideoProcessing\* videoProcessor | The video processing instance. |
| uint32_t index | The index of the new output buffer. |
| void\* userData | The user's custom data. |


