# video_processing.h

## Overview

Declare video processing functions.Provides SDR content processing for videos, including color space conversion, metadata generationand video scaling.

**Library**: libvideo_processing.so

**System capability**: SystemCapability.Multimedia.VideoProcessingEngine

**Since**: 12

**Related module**: [VideoProcessing](capi-videoprocessing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [VideoProcessing_ErrorCode OH_VideoProcessing_InitializeEnvironment(void)](#oh_videoprocessing_initializeenvironment) | Initialize global environment for video processing.This function is optional. <br> Typically, this function is called once when the host process is started to initialize the global environment forvideo processing, which can reduce the time of [OH_VideoProcessing_Create](capi-video-processing-h.md#oh_videoprocessing_create). <br> To deinitialize global environment, call [OH_VideoProcessing_DeinitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_deinitializeenvironment). |
| [VideoProcessing_ErrorCode OH_VideoProcessing_DeinitializeEnvironment(void)](#oh_videoprocessing_deinitializeenvironment) | Deinitialize global environment for video processing.This function is required if [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment) is called. Typically, thisfunction is called when the host process is about to exit to deinitialize the global environment, which isinitialized by calling [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment). <br> If there is some video processing instance existing, this function should not be called. <br> If the [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment) is not called, this function should not be called. |
| [bool OH_VideoProcessing_IsColorSpaceConversionSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo, const VideoProcessing_ColorSpaceInfo* destinationVideoInfo)](#oh_videoprocessing_iscolorspaceconversionsupported) | Query if the video color space conversion is supported. |
| [bool OH_VideoProcessing_IsMetadataGenerationSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo)](#oh_videoprocessing_ismetadatagenerationsupported) | Query if the video metadata generation is supported. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_Create(OH_VideoProcessing** videoProcessor, int type)](#oh_videoprocessing_create) | Create a video processing instance. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_Destroy(OH_VideoProcessing* videoProcessor)](#oh_videoprocessing_destroy) | Destroy the video processing instance.Stop the instance before destroying it. see [OH_VideoProcessing_Stop](capi-video-processing-h.md#oh_videoprocessing_stop). <br> |
| [VideoProcessing_ErrorCode OH_VideoProcessing_RegisterCallback(OH_VideoProcessing* videoProcessor, const VideoProcessing_Callback* callback, void* userData)](#oh_videoprocessing_registercallback) | Register callback object.Register the callback object before starting video processing. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_SetSurface(OH_VideoProcessing* videoProcessor, const OHNativeWindow* window)](#oh_videoprocessing_setsurface) | Set the output surface for video processing.Set the output surface before starting video processing. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_GetSurface(OH_VideoProcessing* videoProcessor, OHNativeWindow** window)](#oh_videoprocessing_getsurface) | Create an input surface.Create the input surface before starting video processing.Call {@link OH_NativeWindow_DestroyNativeWindow} to destroy the input surface. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_SetParameter(OH_VideoProcessing* videoProcessor, const OH_AVFormat* parameter)](#oh_videoprocessing_setparameter) | Set parameter for video processing.Add parameter identified by the specified parameter key. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_GetParameter(OH_VideoProcessing* videoProcessor, OH_AVFormat* parameter)](#oh_videoprocessing_getparameter) | Get parameter of video processing.Get parameter identified by the specified parameter key. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_Start(OH_VideoProcessing* videoProcessor)](#oh_videoprocessing_start) | Start video processing instance.After successfully calling this function, the state [VIDEO_PROCESSING_STATE_RUNNING](capi-video-processing-types-h.md#videoprocessing_state) is reported by callbackfunction [OH_VideoProcessingCallback_OnState](capi-video-processing-types-h.md#oh_videoprocessingcallback_onstate). |
| [VideoProcessing_ErrorCode OH_VideoProcessing_Stop(OH_VideoProcessing* videoProcessor)](#oh_videoprocessing_stop) | To stop video processing instance.After the video processing instance is stopped successfully, the state [VIDEO_PROCESSING_STATE_STOPPED](capi-video-processing-types-h.md#videoprocessing_state) isreported by callback function {@link OH_VideoProcessing_OnState}. |
| [VideoProcessing_ErrorCode OH_VideoProcessing_RenderOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index)](#oh_videoprocessing_renderoutputbuffer) | Send the output buffer out.If the callback function [OH_VideoProcessingCallback_OnNewOutputBuffer](capi-video-processing-types-h.md#oh_videoprocessingcallback_onnewoutputbuffer) is set, the buffer's index is reportedto user by the callback function when an output buffer is ready. |
| [VideoProcessing_ErrorCode OH_VideoProcessingCallback_Create(VideoProcessing_Callback** callback)](#oh_videoprocessingcallback_create) | Create a video processing callback object. |
| [VideoProcessing_ErrorCode OH_VideoProcessingCallback_Destroy(VideoProcessing_Callback* callback)](#oh_videoprocessingcallback_destroy) | Destroy the callback object.The callback object can be destroyed after it is registered to video processing instance. |
| [VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnError(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnError onError)](#oh_videoprocessingcallback_bindonerror) | Bind the [OH_VideoProcessingCallback_OnError](capi-video-processing-types-h.md#oh_videoprocessingcallback_onerror) callback function to callback object. |
| [VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnState(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnState onState)](#oh_videoprocessingcallback_bindonstate) | Bind the [OH_VideoProcessingCallback_OnState](capi-video-processing-types-h.md#oh_videoprocessingcallback_onstate) callback function to callback object. |
| [VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnNewOutputBuffer(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnNewOutputBuffer onNewOutputBuffer)](#oh_videoprocessingcallback_bindonnewoutputbuffer) | Bind the [OH_VideoProcessingCallback_OnNewOutputBuffer](capi-video-processing-types-h.md#oh_videoprocessingcallback_onnewoutputbuffer) callback function to callback object. |

## Function description

### OH_VideoProcessing_InitializeEnvironment()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_InitializeEnvironment(void)
```

**Description**

Initialize global environment for video processing.This function is optional. <br> Typically, this function is called once when the host process is started to initialize the global environment forvideo processing, which can reduce the time of [OH_VideoProcessing_Create](capi-video-processing-h.md#oh_videoprocessing_create). <br> To deinitialize global environment, call [OH_VideoProcessing_DeinitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_deinitializeenvironment).

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if initialization is successful. <br> [VIDEO_PROCESSING_ERROR_INITIALIZE_FAILED](capi-video-processing-types-h.md#videoprocessing_errorcode) if initialization is failed. <br> You can check if the device GPU is working properly. |

### OH_VideoProcessing_DeinitializeEnvironment()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_DeinitializeEnvironment(void)
```

**Description**

Deinitialize global environment for video processing.This function is required if [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment) is called. Typically, thisfunction is called when the host process is about to exit to deinitialize the global environment, which isinitialized by calling [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment). <br> If there is some video processing instance existing, this function should not be called. <br> If the [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment) is not called, this function should not be called.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if deinitialization is successful. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if some video processing instance is not destroyed or<br> [OH_VideoProcessing_InitializeEnvironment](capi-video-processing-h.md#oh_videoprocessing_initializeenvironment) is not called. |

### OH_VideoProcessing_IsColorSpaceConversionSupported()

```c
bool OH_VideoProcessing_IsColorSpaceConversionSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo, const VideoProcessing_ColorSpaceInfo* destinationVideoInfo)
```

**Description**

Query if the video color space conversion is supported.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const VideoProcessing_ColorSpaceInfo](capi-videoprocessing-videoprocessing-colorspaceinfo.md)* sourceVideoInfo | Source video color space information. |
| [const VideoProcessing_ColorSpaceInfo](capi-videoprocessing-videoprocessing-colorspaceinfo.md)* destinationVideoInfo | Destination video color space information. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the video color space conversion is supported. <br> <b>false</b> if the video color space conversion is not supported. |

### OH_VideoProcessing_IsMetadataGenerationSupported()

```c
bool OH_VideoProcessing_IsMetadataGenerationSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo)
```

**Description**

Query if the video metadata generation is supported.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const VideoProcessing_ColorSpaceInfo](capi-videoprocessing-videoprocessing-colorspaceinfo.md)* sourceVideoInfo | Source video color space information. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | <b>true</b> if the video metadata generation is supported. <br> <b>false</b> if the video metadata generation is not supported. |

### OH_VideoProcessing_Create()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_Create(OH_VideoProcessing** videoProcessor, int type)
```

**Description**

Create a video processing instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)** videoProcessor | Output parameter. The *videoProcessor points to a new video processing object.The *videoProcessor must be null before passed in. |
| int type | Use VIDEO_PROCESSING_TYPE_XXX to specify the processing type. The processing type of the instance can notbe changed. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if creating a video processing instance successfully. <br> [VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING](capi-video-processing-types-h.md#videoprocessing_errorcode) if the type is not supported. For example, if metadata<br> generation is not supported by vendor, it returns unsupported processing. <br> [VIDEO_PROCESSING_ERROR_CREATE_FAILED](capi-video-processing-types-h.md#videoprocessing_errorcode) if failed to create a video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or <b></b>instance is <b>not</b> null. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if type is invalid. |

### OH_VideoProcessing_Destroy()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_Destroy(OH_VideoProcessing* videoProcessor)
```

**Description**

Destroy the video processing instance.Stop the instance before destroying it. see [OH_VideoProcessing_Stop](capi-video-processing-h.md#oh_videoprocessing_stop). <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | The video processing instance pointer to be destroyed. It is recommended setting theinstance pointer to null after the instance is destroyed. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the instance is destroyed successfully . <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if the instance is still running. |

### OH_VideoProcessing_RegisterCallback()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_RegisterCallback(OH_VideoProcessing* videoProcessor, const VideoProcessing_Callback* callback, void* userData)
```

**Description**

Register callback object.Register the callback object before starting video processing.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |
| [const VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)* callback | Callback pointer to be registered. |
| void* userData | User's custom data pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback is registered successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback is null. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if video processing instance is running. |

### OH_VideoProcessing_SetSurface()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_SetSurface(OH_VideoProcessing* videoProcessor, const OHNativeWindow* window)
```

**Description**

Set the output surface for video processing.Set the output surface before starting video processing.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |
| [const OHNativeWindow](capi-videoprocessing-nativewindow.md)* window | The output surface pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if setting output surface successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if window is null. |

### OH_VideoProcessing_GetSurface()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_GetSurface(OH_VideoProcessing* videoProcessor, OHNativeWindow** window)
```

**Description**

Create an input surface.Create the input surface before starting video processing.Call {@link OH_NativeWindow_DestroyNativeWindow} to destroy the input surface.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |
| [OHNativeWindow](capi-videoprocessing-nativewindow.md)** window | The input surface pointer. For example, it is the output surface of a video decoder. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if operation is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if window is null or <b></b>window is <b>not</b> null. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if creating surface failed, input surface is already created<br> or video processing instance is running. |

### OH_VideoProcessing_SetParameter()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_SetParameter(OH_VideoProcessing* videoProcessor, const OH_AVFormat* parameter)
```

**Description**

Set parameter for video processing.Add parameter identified by the specified parameter key.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | An video processing instance pointer. |
| [const OH_AVFormat](capi-videoprocessing-oh-avformat.md)* parameter | The parameter for video processing. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if setting parameter is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not an video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if the parameter is null. <br> [VIDEO_PROCESSING_ERROR_INVALID_VALUE](capi-video-processing-types-h.md#videoprocessing_errorcode) if some property of the parameter is invalid. For example, the parameter<br> contains unsupported parameter key or value. <br> [VIDEO_PROCESSING_ERROR_NO_MEMORY](capi-video-processing-types-h.md#videoprocessing_errorcode) if memory allocation failed. |

### OH_VideoProcessing_GetParameter()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_GetParameter(OH_VideoProcessing* videoProcessor, OH_AVFormat* parameter)
```

**Description**

Get parameter of video processing.Get parameter identified by the specified parameter key.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | An video processing instance pointer. |
| [OH_AVFormat](capi-videoprocessing-oh-avformat.md)* parameter | The parameter used by the video processing instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if getting parameter is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not an video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if the parameter is null. |

### OH_VideoProcessing_Start()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_Start(OH_VideoProcessing* videoProcessor)
```

**Description**

Start video processing instance.After successfully calling this function, the state [VIDEO_PROCESSING_STATE_RUNNING](capi-video-processing-types-h.md#videoprocessing_state) is reported by callbackfunction [OH_VideoProcessingCallback_OnState](capi-video-processing-types-h.md#oh_videoprocessingcallback_onstate).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the operation is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if output surface is not set, input surface is not created or<br> instance is already running. |

### OH_VideoProcessing_Stop()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_Stop(OH_VideoProcessing* videoProcessor)
```

**Description**

To stop video processing instance.After the video processing instance is stopped successfully, the state [VIDEO_PROCESSING_STATE_STOPPED](capi-video-processing-types-h.md#videoprocessing_state) isreported by callback function {@link OH_VideoProcessing_OnState}.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the operation is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is already stopped. |

### OH_VideoProcessing_RenderOutputBuffer()

```c
VideoProcessing_ErrorCode OH_VideoProcessing_RenderOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index)
```

**Description**

Send the output buffer out.If the callback function [OH_VideoProcessingCallback_OnNewOutputBuffer](capi-video-processing-types-h.md#oh_videoprocessingcallback_onnewoutputbuffer) is set, the buffer's index is reportedto user by the callback function when an output buffer is ready.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_VideoProcessing](capi-videoprocessing-oh-videoprocessing.md)* videoProcessor | A video processing instance pointer. |
| uint32_t index | The output buffer's index. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the operation is successful. <br> [VIDEO_PROCESSING_ERROR_INVALID_INSTANCE](capi-video-processing-types-h.md#videoprocessing_errorcode) if instance is null or not a video processing instance. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if index is invalid. <br> [VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback {@link OH_VideoProcessing_OnNewOutputBuffer} is<br> not set or instance is stopped. |

### OH_VideoProcessingCallback_Create()

```c
VideoProcessing_ErrorCode OH_VideoProcessingCallback_Create(VideoProcessing_Callback** callback)
```

**Description**

Create a video processing callback object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)** callback | Output parameter. The *callback points to a new callback object. The *callback should be null beforecreating the callback object. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback object is created successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback is null or <b></b>callback is <b>not</b> null. <br> [VIDEO_PROCESSING_ERROR_NO_MEMORY](capi-video-processing-types-h.md#videoprocessing_errorcode) if out of memory. |

### OH_VideoProcessingCallback_Destroy()

```c
VideoProcessing_ErrorCode OH_VideoProcessingCallback_Destroy(VideoProcessing_Callback* callback)
```

**Description**

Destroy the callback object.The callback object can be destroyed after it is registered to video processing instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)* callback | The callback object pointer. It is recommended setting the callback pointer to null after thecallback object is destroyed. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback is successfully destroyed. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if callback is null. |

### OH_VideoProcessingCallback_BindOnError()

```c
VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnError(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnError onError)
```

**Description**

Bind the [OH_VideoProcessingCallback_OnError](capi-video-processing-types-h.md#oh_videoprocessingcallback_onerror) callback function to callback object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)* callback | A callback object pointer. |
| [OH_VideoProcessingCallback_OnError](capi-video-processing-types-h.md#oh_videoprocessingcallback_onerror) onError | The callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the function is bound to callback object successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if the callback is null or onError is null. |

### OH_VideoProcessingCallback_BindOnState()

```c
VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnState(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnState onState)
```

**Description**

Bind the [OH_VideoProcessingCallback_OnState](capi-video-processing-types-h.md#oh_videoprocessingcallback_onstate) callback function to callback object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)* callback | A callback object pointer. |
| [OH_VideoProcessingCallback_OnState](capi-video-processing-types-h.md#oh_videoprocessingcallback_onstate) onState | The callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the function is bound to callback object successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if the callback is null or onState is null. |

### OH_VideoProcessingCallback_BindOnNewOutputBuffer()

```c
VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnNewOutputBuffer(VideoProcessing_Callback* callback, OH_VideoProcessingCallback_OnNewOutputBuffer onNewOutputBuffer)
```

**Description**

Bind the [OH_VideoProcessingCallback_OnNewOutputBuffer](capi-video-processing-types-h.md#oh_videoprocessingcallback_onnewoutputbuffer) callback function to callback object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [VideoProcessing_Callback](capi-videoprocessing-videoprocessing-callback.md)* callback | A callback object pointer. |
| [OH_VideoProcessingCallback_OnNewOutputBuffer](capi-video-processing-types-h.md#oh_videoprocessingcallback_onnewoutputbuffer) onNewOutputBuffer | The callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| [VideoProcessing_ErrorCode](capi-video-processing-types-h.md#videoprocessing_errorcode) | [VIDEO_PROCESSING_SUCCESS](capi-video-processing-types-h.md#videoprocessing_errorcode) if the function is bound to callback object successfully. <br> [VIDEO_PROCESSING_ERROR_INVALID_PARAMETER](capi-video-processing-types-h.md#videoprocessing_errorcode) if the callback is null. |


