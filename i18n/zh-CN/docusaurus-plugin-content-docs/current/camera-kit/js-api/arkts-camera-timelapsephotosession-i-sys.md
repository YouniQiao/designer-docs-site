# TimeLapsePhotoSession

TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect Implements a time-lapse photo session, which sets the parameters of the time-lapse photo mode and saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera. It inherits from [Session]camera.Session.

**继承实现关系：** TimeLapsePhotoSession继承自：Session， Focus， ManualFocus， AutoExposure， ManualExposure， ManualIso， WhiteBalance， Zoom， ColorEffect。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getSupportedTimeLapseIntervalRange

```TypeScript
getSupportedTimeLapseIntervalRange(): Array<int>
```

Obtains the supported time-lapse shooting interval range.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;int> | Interval range, in ms. The value depends on the underlying capability. If the operation  fails, an error code defined in [CameraErrorCode]camera.CameraErrorCode is  returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getSupportedTimeLapseIntervalRange(timeLapsePhotoSession: camera.TimeLapsePhotoSession): Array<number> {
  let intervalRange: Array<number> = [];
  try {
    intervalRange = timeLapsePhotoSession.getSupportedTimeLapseIntervalRange();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getSupportedTimeLapseIntervalRange call failed. error code: ${err.code}`);
  }
  return intervalRange;
}

```

## getTimeLapseInterval

```TypeScript
getTimeLapseInterval(): int
```

Obtains the current time-lapse shooting interval.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Shooting interval, in ms. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getTimeLapseInterval(timeLapsePhotoSession: camera.TimeLapsePhotoSession): number {
  let interval: number = 0;
  try {
    interval = timeLapsePhotoSession.getTimeLapseInterval();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getTimeLapseInterval call failed. error code: ${err.code}`);
  }
  return interval;
}

```

## getTimeLapsePreviewType

```TypeScript
getTimeLapsePreviewType(): TimeLapsePreviewType
```

Obtains the time-lapse preview type.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TimeLapsePreviewType | Preview type. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getTimeLapsePreviewType(timeLapsePhotoSession: camera.TimeLapsePhotoSession): camera.TimeLapsePreviewType {
  let type = camera.TimeLapsePreviewType.DARK;
  try {
    type = timeLapsePhotoSession.getTimeLapsePreviewType();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getTimeLapsePreviewType call failed. error code: ${err.code}`);
  }
  return type;
}

```

## getTimeLapseRecordState

```TypeScript
getTimeLapseRecordState(): TimeLapseRecordState
```

Obtains the time-lapse shooting state.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TimeLapseRecordState | Shooting state. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function getTimeLapseRecordState(timeLapsePhotoSession: camera.TimeLapsePhotoSession): camera.TimeLapseRecordState {
  let state = camera.TimeLapseRecordState.IDLE;
  try {
    state = timeLapsePhotoSession.getTimeLapseRecordState();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getTimeLapseRecordState call failed. error code: ${err.code}`);
  }
  return state;
}

```

## isTryAENeeded

```TypeScript
isTryAENeeded(): boolean
```

Checks whether Try AE is required.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether Try AE is required. true if required, false otherwise. The  error code type is defined in [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isTryAENeeded(timeLapsePhotoSession: camera.TimeLapsePhotoSession): boolean {
  let needed = false;
  try {
    needed = timeLapsePhotoSession.isTryAENeeded();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isTryAENeeded call failed. error code: ${err.code}`);
  }
  return needed;
}

```

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from HighResolutionPhotoSession error events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. |
| callback | ErrorCallback | 否 | Callback used to return the result. This parameter is optional. If this  parameter is specified, the subscription to the specified event on('error') with the specified callback  is canceled. (The callback object cannot be an anonymous function.) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterSessionError(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('error');
}

```

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusStateChange' | 是 | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | 否 | Callback used to return the result. This parameter is optional.  If this parameter is specified, the subscription to the specified event on('focusStateChange') with the  specified callback is canceled. (The callback object cannot be an anonymous function.) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterFocusStateChange(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('focusStateChange');
}

```

## off('isoInfoChange')

```TypeScript
off(type: 'isoInfoChange', callback?: AsyncCallback<IsoInfo>): void
```

Unsubscribes from automatic ISO change events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'isoInfoChange' | 是 | Event type. The value is fixed at 'isoInfoChange'. |
| callback | AsyncCallback&lt;IsoInfo> | 否 | Callback, which is optional and is used to match callback in  on('isoInfoChange'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterIsoInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('isoInfoChange');
}

```

## off('exposureInfoChange')

```TypeScript
off(type: 'exposureInfoChange', callback?: AsyncCallback<ExposureInfo>): void
```

Unsubscribes from exposure information change events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'exposureInfoChange' | 是 | Event type. The value is fixed at 'exposureInfoChange'. |
| callback | AsyncCallback&lt;ExposureInfo> | 否 | Callback, which is optional and is used to match callback  in on('exposureInfoChange'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterExposureInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('exposureInfoChange');
}

```

## off('luminationInfoChange')

```TypeScript
off(type: 'luminationInfoChange', callback?: AsyncCallback<LuminationInfo>): void
```

Unsubscribes from illumination change events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'luminationInfoChange' | 是 | Event type. The value is fixed at 'luminationInfoChange'. |
| callback | AsyncCallback&lt;LuminationInfo> | 否 | Callback, which is optional and is used to match callback  in on('luminationInfoChange'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterLuminationInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('luminationInfoChange');
}

```

## off('tryAEInfoChange')

```TypeScript
off(type: 'tryAEInfoChange', callback?: AsyncCallback<TryAEInfo>): void
```

Unsubscribes from Try AE change events.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'tryAEInfoChange' | 是 | Event type. The value is fixed at 'tryAEInfoChange'. |
| callback | AsyncCallback&lt;TryAEInfo> | 否 | Callback, which is optional and is used to match callback in  on('tryAEInfoChange'). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterTryAEInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.off('tryAEInfoChange');
}

```

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offExposureInfoChange

```TypeScript
offExposureInfoChange(callback?: AsyncCallback<ExposureInfo>): void
```

Unsubscribes from exposure info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ExposureInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offFocusStateChange

```TypeScript
offFocusStateChange(callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offIsoInfoChange

```TypeScript
offIsoInfoChange(callback?: AsyncCallback<IsoInfo>): void
```

Unsubscribes from ISO info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;IsoInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offLuminationInfoChange

```TypeScript
offLuminationInfoChange(callback?: AsyncCallback<LuminationInfo>): void
```

Unsubscribes from lumination info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;LuminationInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offTryAEInfoChange

```TypeScript
offTryAEInfoChange(callback?: AsyncCallback<TryAEInfo>): void
```

Unsubscribes from try AE info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TryAEInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as  [beginConfig]camera.Session.beginConfig,  [commitConfig]camera.Session.commitConfig(), and  [addInput]camera.Session.addInput. |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError): void {
  console.error(`Time lapse photo session error code: ${err.code}`);
}

function registerSessionError(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('error', callback);
}

```

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'focusStateChange' | 是 | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  auto focus mode. |
| callback | AsyncCallback&lt;FocusState> | 是 | Callback used to return the focus state change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, focusState: camera.FocusState): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`Focus state: ${focusState}`);
}

function registerFocusStateChange(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('focusStateChange', callback);
}

```

## on('isoInfoChange')

```TypeScript
on(type: 'isoInfoChange', callback: AsyncCallback<IsoInfo>): void
```

Subscribes to automatic ISO change events to obtain real-time ISO information. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'isoInfoChange' | 是 | Event type. The value is fixed at 'isoInfoChange'. |
| callback | AsyncCallback&lt;IsoInfo> | 是 | Callback used to return the ISO information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isoInfoCallback(err: BusinessError, info: camera.IsoInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`ISO value: ${info.iso}`);
}

function registerIsoInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('isoInfoChange', isoInfoCallback);
}

```

## on('exposureInfoChange')

```TypeScript
on(type: 'exposureInfoChange', callback: AsyncCallback<ExposureInfo>): void
```

Subscribes to exposure information change events to obtain the exposure information. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'exposureInfoChange' | 是 | Event type. The value is fixed at 'exposureInfoChange'. |
| callback | AsyncCallback&lt;ExposureInfo> | 是 | Callback used to return the exposure information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function exposureInfoCallback(err: BusinessError, info: camera.ExposureInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`exposureTimeValue: ${info.exposureTime}`);
}

function registerExposureInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('exposureInfoChange', exposureInfoCallback);
}

```

## on('luminationInfoChange')

```TypeScript
on(type: 'luminationInfoChange', callback: AsyncCallback<LuminationInfo>): void
```

Subscribes to illumination change events to obtain real-time illumination information. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'luminationInfoChange' | 是 | Event type. The value is fixed at 'luminationInfoChange'. |
| callback | AsyncCallback&lt;LuminationInfo> | 是 | Callback used to return the illumination information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function luminationInfoCallback(err: BusinessError, info: camera.LuminationInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`Lumination: ${info.lumination}`);
}

function registerLuminationInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('luminationInfoChange', luminationInfoCallback);
}

```

## on('tryAEInfoChange')

```TypeScript
on(type: 'tryAEInfoChange', callback: AsyncCallback<TryAEInfo>): void
```

Subscribes to Try AE change events to obtain real-time Try AE parameters. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'tryAEInfoChange' | 是 | Event type. The value is fixed at 'tryAEInfoChange'. |
| callback | AsyncCallback&lt;TryAEInfo> | 是 | Callback used to return the Try AE parameters. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function tryAEInfoCallback(err: BusinessError, info: camera.TryAEInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`TryAEInfo: ${info.isTryAEDone}, ${info.isTryAEHintNeeded}, ${info.previewType}, ${info.captureInterval}`);
}

function registerTryAEInfoEvent(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  timeLapsePhotoSession.on('tryAEInfoChange', tryAEInfoCallback);
}

```

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to get the capture session errors. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onExposureInfoChange

```TypeScript
onExposureInfoChange(callback: AsyncCallback<ExposureInfo>): void
```

Subscribes exposure info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ExposureInfo> | 是 | Callback used to get the exposure info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onFocusStateChange

```TypeScript
onFocusStateChange(callback: AsyncCallback<FocusState>): void
```

Subscribes focus state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | 是 | Callback used to get the focus state change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onIsoInfoChange

```TypeScript
onIsoInfoChange(callback: AsyncCallback<IsoInfo>): void
```

Subscribes ISO info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;IsoInfo> | 是 | Callback used to get the ISO info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onLuminationInfoChange

```TypeScript
onLuminationInfoChange(callback: AsyncCallback<LuminationInfo>): void
```

Subscribes lumination info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;LuminationInfo> | 是 | Callback used to get the lumination info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onTryAEInfoChange

```TypeScript
onTryAEInfoChange(callback: AsyncCallback<TryAEInfo>): void
```

Subscribes try AE info event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;TryAEInfo> | 是 | Callback used to get the try AE info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## setTimeLapseInterval

```TypeScript
setTimeLapseInterval(interval: int): void
```

Sets a time-lapse shooting interval.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interval | int | 是 | Shooting interval, in units of ms, the supported range can be obtained by calling  [getSupportedTimeLapseIntervalRange]camera.TimeLapsePhotoSession.getSupportedTimeLapseIntervalRange |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setTimeLapseInterval(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  try {
    let interval: number = 10000;
    timeLapsePhotoSession.setTimeLapseInterval(interval);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setTimeLapseInterval call failed. error code: ${err.code}`);
  }
}

```

## setTimeLapsePreviewType

```TypeScript
setTimeLapsePreviewType(type: TimeLapsePreviewType): void
```

Sets the time-lapse preview type.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TimeLapsePreviewType | 是 | Preview type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setTimeLapsePreviewType(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  try {
    timeLapsePhotoSession.setTimeLapsePreviewType(camera.TimeLapsePreviewType.LIGHT);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setTimeLapsePreviewType call failed. error code: ${err.code}`);
  }
}

```

## setTimeLapseRecordState

```TypeScript
setTimeLapseRecordState(state: TimeLapseRecordState): void
```

Sets the time-lapse shooting state.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | TimeLapseRecordState | 是 | Shooting state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setTimeLapseRecordState(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  try {
    timeLapsePhotoSession.setTimeLapseRecordState(camera.TimeLapseRecordState.RECORDING);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setTimeLapseRecordState call failed. error code: ${err.code}`);
  }
}

```

## startTryAE

```TypeScript
startTryAE(): void
```

Starts to execute Try AE.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function startTryAE(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  try {
    timeLapsePhotoSession.startTryAE();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The startTryAE call failed. error code: ${err.code}`);
  }
}

```

## stopTryAE

```TypeScript
stopTryAE(): void
```

Stops the execution of Try AE.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function stopTryAE(timeLapsePhotoSession: camera.TimeLapsePhotoSession): void {
  try {
    timeLapsePhotoSession.stopTryAE();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The stopTryAE call failed. error code: ${err.code}`);
  }
}

```

