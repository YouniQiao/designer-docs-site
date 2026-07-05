# CaptureSession

Implements a capture session, which saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera and requests the camera to complete shooting or video recording.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.VideoSession

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addInput

```TypeScript
addInput(cameraInput: CameraInput): void
```

Adds a [CameraInput]camera.CameraInput instance to this session.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.addInput

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | CameraInput | Yes | CameraInput instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## addOutput

```TypeScript
addOutput(cameraOutput: CameraOutput): void
```

Adds a [CameraOutput]camera.CameraOutput instance to this session.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.addOutput

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | Yes | CameraOutput instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## beginConfig

```TypeScript
beginConfig(): void
```

Starts configuration for the session.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.beginConfig

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400105 | Session config locked. |

## commitConfig

```TypeScript
commitConfig(callback: AsyncCallback<void>): void
```

Commits the configuration for this session. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.commitConfig(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the configuration is  successfully committed, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## commitConfig

```TypeScript
commitConfig(): Promise<void>
```

Commits the configuration for this session. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.commitConfig()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getActiveVideoStabilizationMode

```TypeScript
getActiveVideoStabilizationMode(): VideoStabilizationMode
```

Obtains the video stabilization mode in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Stabilization.getActiveVideoStabilizationMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| VideoStabilizationMode | Video stabilization mode obtained. If the operation fails, an error code  defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getBeauty

```TypeScript
getBeauty(type: BeautyType): number
```

Obtains the level of the beauty type in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Beauty.getBeauty

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BeautyType | Yes | Beauty type. |

**Return value:**

| Type | Description |
| --- | --- |
| number | the beauty effect in use. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getBeauty(captureSession: camera.CaptureSession): number {
  const invalidValue: number = -1;
  let beautyTypes: Array<camera.BeautyType> = captureSession.getSupportedBeautyTypes();
  if (beautyTypes === undefined || beautyTypes.length <= 0) {
    return invalidValue;
  }
  let beautyLevels: Array<number> = captureSession.getSupportedBeautyRange(beautyTypes[0]);
  if (beautyLevels === undefined || beautyLevels.length <= 0) {
    return invalidValue;
  }
  captureSession.setBeauty(beautyTypes[0], beautyLevels[0]);
  let beautyLevel: number = captureSession.getBeauty(beautyTypes[0]);
  return beautyLevel;
}

```

## getExposureBiasRange

```TypeScript
getExposureBiasRange(): Array<number>
```

Obtains the exposure compensation values of the camera device.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposureQuery.getExposureBiasRange

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number> | Array of compensation values. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getExposureMode

```TypeScript
getExposureMode(): ExposureMode
```

Obtains the exposure mode in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.getExposureMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| ExposureMode | Exposure mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getExposureValue

```TypeScript
getExposureValue(): number
```

Obtains the exposure value in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.getExposureValue

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this  parameter is set to 1.2, the EV that takes effect is 1.0. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFlashMode

```TypeScript
getFlashMode(): FlashMode
```

Obtains the flash mode in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Flash.getFlashMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| FlashMode | Flash mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocalLength

```TypeScript
getFocalLength(): number
```

Obtains the focal length of the camera device.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Focus.getFocalLength

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Focal length obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocusMode

```TypeScript
getFocusMode(): FocusMode
```

Obtains the focus mode in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Focus.getFocusMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| FocusMode | Focus mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getFocusPoint

```TypeScript
getFocusPoint(): Point
```

Obtains the focal point of the camera device.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Focus.getFocusPoint

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Point | Focal point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getMeteringPoint

```TypeScript
getMeteringPoint(): Point
```

Obtains the metering point of the camera device.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.getMeteringPoint

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Point | Metering point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getSupportedBeautyRange

```TypeScript
getSupportedBeautyRange(type: BeautyType): Array<number>
```

Obtains the levels that can be set a beauty type. The beauty levels vary according to the device type. The following table is only an example. | Input Parameter | Example Return Value | Return Value Description | | ----------------| ---- | ---------| | AUTO | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] |Beauty levels supported when **type** is set to **AUTO**. The value **0** means that beauty mode is disabled, and other positive values mean the corresponding automatic beauty levels. | | SKIN_SMOOTH | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | Beauty levels supported when **type** is set to **SKIN_SMOOTH**. The value **0** means that the skin smoothing feature is disabled, and other positive values mean the corresponding skin smoothing levels. | | FACE_SLENDER | [0, 1, 2, 3, 4, 5] | Beauty levels supported when **type** is set to **FACE_SLENDER**. The value **0** means that the face slimming feature is disabled, and other positive values mean the corresponding face slimming levels. | | SKIN_TONE | [-1, 16242611] | Beauty levels supported when **type** is set to **SKIN_TONE**. The value **-1** means that the skin tone perfection feature is disabled. Other non-negative values mean the skin tone perfection levels represented by RGB,<br> for example, 16242611, which is 0xF7D7B3 in hexadecimal format, where F7, D7, and B3 represent the values of the R channel, G channel, and B channel, respectively. |

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.BeautyQuery.getSupportedBeautyRange

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BeautyType | Yes | Beauty type. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number> | Array of levels supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getSupportedBeautyRange(captureSession: camera.CaptureSession): Array<number> {
  let beautyTypes: Array<camera.BeautyType> = captureSession.getSupportedBeautyTypes();
  if (beautyTypes === undefined || beautyTypes.length <= 0) {
    return [];
  }
  let beautyLevels: Array<number> = captureSession.getSupportedBeautyRange(beautyTypes[0]);
  return beautyLevels;
}

```

## getSupportedBeautyTypes

```TypeScript
getSupportedBeautyTypes(): Array<BeautyType>
```

Obtains the supported beauty types.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.BeautyQuery.getSupportedBeautyTypes

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;BeautyType> | Array of beauty types supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getSupportedBeautyTypes(captureSession: camera.CaptureSession): Array<camera.BeautyType> {
  let beautyTypes: Array<camera.BeautyType> = captureSession.getSupportedBeautyTypes();
  return beautyTypes;
}

```

## getZoomRatio

```TypeScript
getZoomRatio(): number
```

Obtains the zoom ratio in use.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Zoom.getZoomRatio

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Zoom ratio obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getZoomRatioRange

```TypeScript
getZoomRatioRange(): Array<number>
```

Obtains the supported zoom ratio range.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.ZoomQuery.getZoomRatioRange

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number> | Array containing the minimum and maximum zoom ratios. If the operation fails, an error  code defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## hasFlash

```TypeScript
hasFlash(): boolean
```

Checks whether the camera device has flash.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.FlashQuery.hasFlash

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the camera device has flash. true if it has flash, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## isExposureModeSupported

```TypeScript
isExposureModeSupported(aeMode: ExposureMode): boolean
```

Checks whether an exposure mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposureQuery.isExposureModeSupported

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aeMode | ExposureMode | Yes | Exposure mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the exposure mode. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## isFlashModeSupported

```TypeScript
isFlashModeSupported(flashMode: FlashMode): boolean
```

Checks whether the flash mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.FlashQuery.isFlashModeSupported

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flashMode | FlashMode | Yes | Flash mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the flash mode. true if supported, false otherwise.  If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## isFocusModeSupported

```TypeScript
isFocusModeSupported(afMode: FocusMode): boolean
```

Checks whether a focus mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.FocusQuery.isFocusModeSupported

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| afMode | FocusMode | Yes | Focus mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus mode. true if supported, false otherwise.  If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## isVideoStabilizationModeSupported

```TypeScript
isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean
```

Checks whether a video stabilization mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.StabilizationQuery.isVideoStabilizationModeSupported

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vsMode | VideoStabilizationMode | Yes | Video stabilization mode. If the input parameter is null or undefined,  it is treated as 0 and video stabilization is disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the video stabilization mode. true if supported,  false otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.VideoSession.off(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from CaptureSession error events. This API uses a callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.VideoSession.off(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.VideoSession.on(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  auto focus mode. |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to return the focus state change. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to CaptureSession error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.VideoSession.on(type:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as [beginConfig]camera.CaptureSession.beginConfig,  [commitConfig]camera.CaptureSession.commitConfig(), and  [addInput]camera.CaptureSession.addInput. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this session. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.release(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session is released  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases this session. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.release()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## removeInput

```TypeScript
removeInput(cameraInput: CameraInput): void
```

Removes a [CameraInput]camera.CameraInput instance from this session.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.removeInput

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | CameraInput | Yes | CameraInput instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## removeOutput

```TypeScript
removeOutput(cameraOutput: CameraOutput): void
```

Removes a [CameraOutput]camera.CameraOutput instance from this session.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.removeOutput

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | Yes | CameraOutput instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## setBeauty

```TypeScript
setBeauty(type: BeautyType, value: number): void
```

Sets a beauty type and its level. Beauty mode is turned off only when all the [beauty types]camera.BeautyType obtained through [getSupportedBeautyTypes]camera.CaptureSession.getSupportedBeautyTypes are disabled.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Beauty.setBeauty

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | BeautyType | Yes | Beauty type. |
| value | number | Yes | Beauty level, which is obtained through  [getSupportedBeautyRange]camera.CaptureSession.getSupportedBeautyRange. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

**Example**

```TypeScript
function setBeauty(captureSession: camera.CaptureSession): void {
  let beautyTypes: Array<camera.BeautyType> = captureSession.getSupportedBeautyTypes();
  if (beautyTypes === undefined || beautyTypes.length <= 0) {
    return;
  }
  let beautyLevels: Array<number> = captureSession.getSupportedBeautyRange(beautyTypes[0]);
  if (beautyLevels === undefined || beautyLevels.length <= 0) {
    return;
  }
  captureSession.setBeauty(beautyTypes[0], beautyLevels[0]);
}

```

## setExposureBias

```TypeScript
setExposureBias(exposureBias: number): void
```

Sets an exposure compensation value (EV). Before the setting, you are advised to use [getExposureBiasRange]camera.CaptureSession.getExposureBiasRange to obtain the supported values.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.setExposureBias

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposureBias | number | Yes | EV. The supported EV range can be obtained by calling  [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange. If the  value passed is not within the supported range, the nearest critical point is used. There is a step for EV.  For example, if the step is 0.5 and this parameter is set to 1.2, the EV that takes effect is 1.0. If the  operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. If the input parameter  is null or undefined, the EV is set to 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setExposureMode

```TypeScript
setExposureMode(aeMode: ExposureMode): void
```

Sets an exposure mode. Before the setting, call [isExposureModeSupported]camera.CaptureSession.isExposureModeSupported to check whether the target exposure mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.setExposureMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aeMode | ExposureMode | Yes | Exposure mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setFlashMode

```TypeScript
setFlashMode(flashMode: FlashMode): void
```

Sets a flash mode. Before the setting, do the following checks: 1. Use [hasFlash]camera.CaptureSession.hasFlash to check whether the camera device has flash. 2. Use [isFlashModeSupported]camera.CaptureSession.isFlashModeSupported to check whether the camera device supports the flash mode.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Flash.setFlashMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flashMode | FlashMode | Yes | Flash mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setFocusMode

```TypeScript
setFocusMode(afMode: FocusMode): void
```

Sets a focus mode. Before the setting, call [isFocusModeSupported]camera.CaptureSession.isFocusModeSupported to check whether the focus mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Focus.setFocusMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| afMode | FocusMode | Yes | Focus mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setFocusPoint

```TypeScript
setFocusPoint(point: Point): void
```

Sets the focal point. The focal point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Focus.setFocusPoint

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | Focal point. The value range of x and y must be within [0,1]. If a value less than 0 is  passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setMeteringPoint

```TypeScript
setMeteringPoint(point: Point): void
```

Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.AutoExposure.setMeteringPoint

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | Metering point. The value range of x and y must be within [0,1]. If a value less than 0  is passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setVideoStabilizationMode

```TypeScript
setVideoStabilizationMode(mode: VideoStabilizationMode): void
```

Sets a video stabilization mode. Before the setting, call [isVideoStabilizationModeSupported]camera.CaptureSession.isVideoStabilizationModeSupported to check whether the target video stabilization mode is supported.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Stabilization.setVideoStabilizationMode

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | VideoStabilizationMode | Yes | Video stabilization mode. If the input parameter is null or undefined,  it is treated as 0 and video stabilization is disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setZoomRatio

```TypeScript
setZoomRatio(zoomRatio: number): void
```

Sets a zoom ratio, with a maximum precision of two decimal places.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Zoom.setZoomRatio

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| zoomRatio | number | Yes | Zoom ratio. The supported zoom ratio range can be obtained by calling  [getZoomRatioRange]camera.ZoomQuery.getZoomRatioRange. If the value passed in  is not within the supported range, the value within the precision range is retained. If the input parameter  is null or undefined, it is treated as 0 and the minimum zoom ratio is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this session. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.start(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session starts successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(): Promise<void>
```

Starts this session. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.start()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this session. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.stop(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session stops successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this session. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.stop()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

