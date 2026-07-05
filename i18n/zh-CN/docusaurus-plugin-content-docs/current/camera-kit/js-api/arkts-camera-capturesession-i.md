# CaptureSession

Implements a capture session, which saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera and requests the camera to complete shooting or video recording.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.VideoSession

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addInput

```TypeScript
addInput(cameraInput: CameraInput): void
```

Adds a [CameraInput]camera.CameraInput instance to this session.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.addInput

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraInput | CameraInput | 是 | CameraInput instance to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## addOutput

```TypeScript
addOutput(cameraOutput: CameraOutput): void
```

Adds a [CameraOutput]camera.CameraOutput instance to this session.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.addOutput

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | 是 | CameraOutput instance to add. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## beginConfig

```TypeScript
beginConfig(): void
```

Starts configuration for the session.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.beginConfig

**系统能力：** SystemCapability.Multimedia.Camera.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400105 | Session config locked. |

## commitConfig

```TypeScript
commitConfig(callback: AsyncCallback<void>): void
```

Commits the configuration for this session. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.commitConfig(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the configuration is  successfully committed, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## commitConfig

```TypeScript
commitConfig(): Promise<void>
```

Commits the configuration for this session. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.commitConfig()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getActiveVideoStabilizationMode

```TypeScript
getActiveVideoStabilizationMode(): VideoStabilizationMode
```

Obtains the video stabilization mode in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Stabilization.getActiveVideoStabilizationMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VideoStabilizationMode | Video stabilization mode obtained. If the operation fails, an error code  defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getBeauty

```TypeScript
getBeauty(type: BeautyType): number
```

Obtains the level of the beauty type in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Beauty.getBeauty

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | BeautyType | 是 | Beauty type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | the beauty effect in use. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

**示例：**

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

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposureQuery.getExposureBiasRange

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;number> | Array of compensation values. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getExposureMode

```TypeScript
getExposureMode(): ExposureMode
```

Obtains the exposure mode in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.getExposureMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ExposureMode | Exposure mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getExposureValue

```TypeScript
getExposureValue(): number
```

Obtains the exposure value in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.getExposureValue

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this  parameter is set to 1.2, the EV that takes effect is 1.0. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getFlashMode

```TypeScript
getFlashMode(): FlashMode
```

Obtains the flash mode in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Flash.getFlashMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FlashMode | Flash mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getFocalLength

```TypeScript
getFocalLength(): number
```

Obtains the focal length of the camera device.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Focus.getFocalLength

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Focal length obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getFocusMode

```TypeScript
getFocusMode(): FocusMode
```

Obtains the focus mode in use.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Focus.getFocusMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FocusMode | Focus mode obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getFocusPoint

```TypeScript
getFocusPoint(): Point
```

Obtains the focal point of the camera device.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Focus.getFocusPoint

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Point | Focal point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getMeteringPoint

```TypeScript
getMeteringPoint(): Point
```

Obtains the metering point of the camera device.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.getMeteringPoint

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Point | Metering point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getSupportedBeautyRange

```TypeScript
getSupportedBeautyRange(type: BeautyType): Array<number>
```

Obtains the levels that can be set a beauty type. The beauty levels vary according to the device type. The following table is only an example. | Input Parameter | Example Return Value | Return Value Description | | ----------------| ---- | ---------| | AUTO | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] |Beauty levels supported when **type** is set to **AUTO**. The value **0** means that beauty mode is disabled, and other positive values mean the corresponding automatic beauty levels. | | SKIN_SMOOTH | [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | Beauty levels supported when **type** is set to **SKIN_SMOOTH**. The value **0** means that the skin smoothing feature is disabled, and other positive values mean the corresponding skin smoothing levels. | | FACE_SLENDER | [0, 1, 2, 3, 4, 5] | Beauty levels supported when **type** is set to **FACE_SLENDER**. The value **0** means that the face slimming feature is disabled, and other positive values mean the corresponding face slimming levels. | | SKIN_TONE | [-1, 16242611] | Beauty levels supported when **type** is set to **SKIN_TONE**. The value **-1** means that the skin tone perfection feature is disabled. Other non-negative values mean the skin tone perfection levels represented by RGB,<br> for example, 16242611, which is 0xF7D7B3 in hexadecimal format, where F7, D7, and B3 represent the values of the R channel, G channel, and B channel, respectively. |

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.BeautyQuery.getSupportedBeautyRange

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | BeautyType | 是 | Beauty type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;number> | Array of levels supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

**示例：**

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

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.BeautyQuery.getSupportedBeautyTypes

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;BeautyType> | Array of beauty types supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

**示例：**

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

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Zoom.getZoomRatio

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Zoom ratio obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## getZoomRatioRange

```TypeScript
getZoomRatioRange(): Array<number>
```

Obtains the supported zoom ratio range.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.ZoomQuery.getZoomRatioRange

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;number> | Array containing the minimum and maximum zoom ratios. If the operation fails, an error  code defined in [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## hasFlash

```TypeScript
hasFlash(): boolean
```

Checks whether the camera device has flash.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.FlashQuery.hasFlash

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the camera device has flash. true if it has flash, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## isExposureModeSupported

```TypeScript
isExposureModeSupported(aeMode: ExposureMode): boolean
```

Checks whether an exposure mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposureQuery.isExposureModeSupported

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMode | ExposureMode | 是 | Exposure mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the exposure mode. true if supported, false  otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## isFlashModeSupported

```TypeScript
isFlashModeSupported(flashMode: FlashMode): boolean
```

Checks whether the flash mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.FlashQuery.isFlashModeSupported

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flashMode | FlashMode | 是 | Flash mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the flash mode. true if supported, false otherwise.  If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## isFocusModeSupported

```TypeScript
isFocusModeSupported(afMode: FocusMode): boolean
```

Checks whether a focus mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.FocusQuery.isFocusModeSupported

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| afMode | FocusMode | 是 | Focus mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the focus mode. true if supported, false otherwise.  If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## isVideoStabilizationModeSupported

```TypeScript
isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean
```

Checks whether a video stabilization mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.StabilizationQuery.isVideoStabilizationModeSupported

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| vsMode | VideoStabilizationMode | 是 | Video stabilization mode. If the input parameter is null or undefined,  it is treated as 0 and video stabilization is disabled. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the video stabilization mode. true if supported,  false otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.VideoSession.off(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusStateChange' | 是 | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | 否 | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from CaptureSession error events. This API uses a callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.VideoSession.off(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. |
| callback | ErrorCallback | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.VideoSession.on(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusStateChange' | 是 | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  auto focus mode. |
| callback | AsyncCallback&lt;FocusState> | 是 | Callback used to return the focus state change. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to CaptureSession error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.VideoSession.on(type:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as [beginConfig]camera.CaptureSession.beginConfig,  [commitConfig]camera.CaptureSession.commitConfig(), and  [addInput]camera.CaptureSession.addInput. |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this session. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.release(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session is released  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases this session. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.release()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## removeInput

```TypeScript
removeInput(cameraInput: CameraInput): void
```

Removes a [CameraInput]camera.CameraInput instance from this session.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.removeInput

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraInput | CameraInput | 是 | CameraInput instance to remove. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## removeOutput

```TypeScript
removeOutput(cameraOutput: CameraOutput): void
```

Removes a [CameraOutput]camera.CameraOutput instance from this session.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.removeOutput

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | 是 | CameraOutput instance to remove. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |

## setBeauty

```TypeScript
setBeauty(type: BeautyType, value: number): void
```

Sets a beauty type and its level. Beauty mode is turned off only when all the [beauty types]camera.BeautyType obtained through [getSupportedBeautyTypes]camera.CaptureSession.getSupportedBeautyTypes are disabled.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Beauty.setBeauty

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | BeautyType | 是 | Beauty type. |
| value | number | 是 | Beauty level, which is obtained through  [getSupportedBeautyRange]camera.CaptureSession.getSupportedBeautyRange. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

**示例：**

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

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.setExposureBias

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposureBias | number | 是 | EV. The supported EV range can be obtained by calling  [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange. If the  value passed is not within the supported range, the nearest critical point is used. There is a step for EV.  For example, if the step is 0.5 and this parameter is set to 1.2, the EV that takes effect is 1.0. If the  operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. If the input parameter  is null or undefined, the EV is set to 0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setExposureMode

```TypeScript
setExposureMode(aeMode: ExposureMode): void
```

Sets an exposure mode. Before the setting, call [isExposureModeSupported]camera.CaptureSession.isExposureModeSupported to check whether the target exposure mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.setExposureMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMode | ExposureMode | 是 | Exposure mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setFlashMode

```TypeScript
setFlashMode(flashMode: FlashMode): void
```

Sets a flash mode. Before the setting, do the following checks: 1. Use [hasFlash]camera.CaptureSession.hasFlash to check whether the camera device has flash. 2. Use [isFlashModeSupported]camera.CaptureSession.isFlashModeSupported to check whether the camera device supports the flash mode.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Flash.setFlashMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flashMode | FlashMode | 是 | Flash mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setFocusMode

```TypeScript
setFocusMode(afMode: FocusMode): void
```

Sets a focus mode. Before the setting, call [isFocusModeSupported]camera.CaptureSession.isFocusModeSupported to check whether the focus mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Focus.setFocusMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| afMode | FocusMode | 是 | Focus mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setFocusPoint

```TypeScript
setFocusPoint(point: Point): void
```

Sets the focal point. The focal point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Focus.setFocusPoint

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Focal point. The value range of x and y must be within [0,1]. If a value less than 0 is  passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setMeteringPoint

```TypeScript
setMeteringPoint(point: Point): void
```

Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.AutoExposure.setMeteringPoint

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| point | Point | 是 | Metering point. The value range of x and y must be within [0,1]. If a value less than 0  is passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setVideoStabilizationMode

```TypeScript
setVideoStabilizationMode(mode: VideoStabilizationMode): void
```

Sets a video stabilization mode. Before the setting, call [isVideoStabilizationModeSupported]camera.CaptureSession.isVideoStabilizationModeSupported to check whether the target video stabilization mode is supported.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Stabilization.setVideoStabilizationMode

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | VideoStabilizationMode | 是 | Video stabilization mode. If the input parameter is null or undefined,  it is treated as 0 and video stabilization is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setZoomRatio

```TypeScript
setZoomRatio(zoomRatio: number): void
```

Sets a zoom ratio, with a maximum precision of two decimal places.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Zoom.setZoomRatio

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zoomRatio | number | 是 | Zoom ratio. The supported zoom ratio range can be obtained by calling  [getZoomRatioRange]camera.ZoomQuery.getZoomRatioRange. If the value passed in  is not within the supported range, the value within the precision range is retained. If the input parameter  is null or undefined, it is treated as 0 and the minimum zoom ratio is used. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this session. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.start(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session starts successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(): Promise<void>
```

Starts this session. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.start()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this session. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.stop(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the session stops successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this session. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.stop()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

