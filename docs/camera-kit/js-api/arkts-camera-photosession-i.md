# PhotoSession

Implements a photo session, which sets the parameters of the normal photo mode and saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera. It inherits from [Session]camera.Session.

**Inheritance:** PhotoSessionextends: Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS, Aperture, Notification.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## canPreconfig

```TypeScript
canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean
```

Checks whether this session supports a preconfigured resolution.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | PreconfigType | Yes | Resolution type. |
| preconfigRatio | PreconfigRatio | No | Aspect ratio. The default value is 4:3. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a preconfigured resolution is supported. true if supported, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getSessionConflictFunctions

```TypeScript
getSessionConflictFunctions(): Array<PhotoConflictFunctions>
```

Gets session conflict functions.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PhotoConflictFunctions> | List of session conflict functions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## getSessionFunctions

```TypeScript
getSessionFunctions(outputCapability: CameraOutputCapability): Array<PhotoFunctions>
```

Gets session functions.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outputCapability | CameraOutputCapability | Yes | CameraOutputCapability to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;PhotoFunctions> | List of session functions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from **PhotoSession** error events. This API uses a callback to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('smoothZoomInfoAvailable')

```TypeScript
off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from smooth zoom state change events.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at 'smoothZoomInfoAvailable'. The  event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('macroStatusChanged')

```TypeScript
off(type: 'macroStatusChanged', callback?: AsyncCallback<boolean>): void
```

Unsubscribes from macro state change events.

**Since:** 11

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'macroStatusChanged' | Yes | Event type. The value is fixed at 'macroStatusChanged'. The event can  be listened for when a session is created. |
| callback | AsyncCallback&lt;boolean> | No | Callback used to return the result. If this parameter is specified,  the subscription to the specified event with the specified callback is canceled. (The callback object cannot  be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 19] |

## off('featureDetection')

```TypeScript
off(type: 'featureDetection', featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void
```

Unsubscribe from camera feature detection status change events.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'featureDetection' | Yes | Event type. The value is fixed at 'featureDetection'. The event can be  listened for when a session is created. |
| featureType | SceneFeatureType | Yes | Scene feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult> | No | Callback used to return the result. This  parameter is optional. If this parameter is specified, the subscription to the specified event  on('featureDetection') with the specified callback is canceled. (The callback object cannot be an  anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
function unregisterFeatureDetectionStatus(photoSession: camera.PhotoSession, featureType: camera.SceneFeatureType): void {
  photoSession.off('featureDetection', featureType);
}

```

## off('effectSuggestionChange')

```TypeScript
off(type: 'effectSuggestionChange', callback?: AsyncCallback<EffectSuggestionType>): void
```

Unsubscribes from effect suggestion event callback.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'effectSuggestionChange' | Yes | Event type. |
| callback | AsyncCallback&lt;EffectSuggestionType> | No | Callback used to return the result. |

## off('autoDeviceSwitchStatusChange')

```TypeScript
off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Unsubscribes from automatic camera switch status change events.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at  'autoDeviceSwitchStatusChange'. The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus> | No | Callback used to return the result. If this parameter  is specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('lcdFlashStatus')

```TypeScript
off(type: 'lcdFlashStatus', callback?: AsyncCallback<LcdFlashStatus>): void
```

Unsubscribes from LCD flash status change events.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'lcdFlashStatus' | Yes | Event type. The value is fixed at 'lcdFlashStatus'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;LcdFlashStatus> | No | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event on('lcdFlashStatus')  with the specified callback is canceled. (The callback object cannot be an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
function unregisterLcdFlashStatus(photoSession: camera.PhotoSession): void {
  photoSession.off('lcdFlashStatus');
}

```

## off('systemPressureLevelChange')

```TypeScript
off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void
```

Unsubscribes from system pressure level change events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at 'systemPressureLevelChange'.  The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SystemPressureLevel> | No |  |

## offAutoDeviceSwitchStatusChange

```TypeScript
offAutoDeviceSwitchStatusChange(callback?: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Unsubscribes to auto device switch status event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus> | No |  |

## offEffectSuggestionChange

```TypeScript
offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void
```

Unsubscribes from effect suggestion event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EffectSuggestionType> | No |  |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offExposureInfoChange

```TypeScript
offExposureInfoChange(callback?: Callback<ExposureInfo>): void
```

Unsubscribes exposure info change event callback. Invoke this method after finishing camera operations.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureInfo> | No |  |

## offFeatureDetection

```TypeScript
offFeatureDetection(featureType: SceneFeatureType, callback?: AsyncCallback<SceneFeatureDetectionResult>): void
```

Unsubscribes from feature detection result.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureType | SceneFeatureType | Yes | Feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offFocusStateChange

```TypeScript
offFocusStateChange(callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | No |  |

## offIsoInfoChange

```TypeScript
offIsoInfoChange(callback?: Callback<IsoInfo>): void
```

Unsubscribes from ISO info change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IsoInfo> | No |  |

## offLcdFlashStatus

```TypeScript
offLcdFlashStatus(callback?: AsyncCallback<LcdFlashStatus>): void
```

Unsubscribes from lcd flash status.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;LcdFlashStatus> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offMacroStatusChanged

```TypeScript
offMacroStatusChanged(callback?: AsyncCallback<boolean>): void
```

Unsubscribes camera macro status event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | No |  |

## offSmoothZoomInfoAvailable

```TypeScript
offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from zoom info event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SmoothZoomInfo> | No |  |

## offSystemPressureLevelChange

```TypeScript
offSystemPressureLevelChange(callback?: AsyncCallback<SystemPressureLevel>): void
```

Unsubscribes to system pressure level event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SystemPressureLevel> | No |  |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to **PhotoSession** error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as  [beginConfig]camera.Session.beginConfig,  [commitConfig]camera.Session.commitConfig(callback: AsyncCallback), and  [addInput]camera.Session.addInput. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  autofocus mode. |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to return the focus state change. |

## on('smoothZoomInfoAvailable')

```TypeScript
on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void
```

Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at 'smoothZoomInfoAvailable'. The  event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo> | Yes | Callback used to return the smooth zoom state change. |

## on('macroStatusChanged')

```TypeScript
on(type: 'macroStatusChanged', callback: AsyncCallback<boolean>): void
```

Subscribes to macro state change events. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'macroStatusChanged' | Yes | Event type. The value is fixed at 'macroStatusChanged'. The event can  be listened for when a session is created. |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the macro state. true if enabled,  false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 11 - 19] |

## on('featureDetection')

```TypeScript
on(type: 'featureDetection', featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void
```

Subscribe to scene feature detection status change events. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'featureDetection' | Yes | Event type. The value is fixed at 'featureDetection'. The event can be  listened for when a photo session is created. |
| featureType | SceneFeatureType | Yes | Scene feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult> | Yes | Callback used to return the status of the scene  feature detection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, result: camera.SceneFeatureDetectionResult): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`feature type: ${result.featureType}`);
  console.info(`feature status: ${result.detected}`);
}

function registerFeatureDetectionStatus(photoSession: camera.PhotoSession, featureType: camera.SceneFeatureType): void {
  photoSession.on('featureDetection', featureType, callback);
}

```

## on('effectSuggestionChange')

```TypeScript
on(type: 'effectSuggestionChange', callback: AsyncCallback<EffectSuggestionType>): void
```

Subscribes to effect suggestion event callback.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'effectSuggestionChange' | Yes | Event type. |
| callback | AsyncCallback&lt;EffectSuggestionType> | Yes | Callback used to return the result. |

## on('autoDeviceSwitchStatusChange')

```TypeScript
on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Subscribes to automatic camera switch status change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at  'autoDeviceSwitchStatusChange'. The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus> | Yes | Callback function, which is used to obtain the status  of automatic camera switch. |

## on('lcdFlashStatus')

```TypeScript
on(type: 'lcdFlashStatus', callback: AsyncCallback<LcdFlashStatus>): void
```

Subscribes to LCD flash status change events. This API uses an asynchronous callback to return the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'lcdFlashStatus' | Yes | Event type. The value is fixed at 'lcdFlashStatus'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;LcdFlashStatus> | Yes | Callback used to return the LCD flash status change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, lcdFlashStatus: camera.LcdFlashStatus): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`isLcdFlashNeeded: ${lcdFlashStatus.isLcdFlashNeeded}`);
  console.info(`lcdCompensation: ${lcdFlashStatus.lcdCompensation}`);
}

function registerLcdFlashStatus(photoSession: camera.PhotoSession): void {
  photoSession.on('lcdFlashStatus', callback);
}

```

## on('systemPressureLevelChange')

```TypeScript
on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void
```

Subscribes to system pressure level change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at 'systemPressureLevelChange'.  The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SystemPressureLevel> | Yes | Callback used to return the current system pressure  level. |

## onAutoDeviceSwitchStatusChange

```TypeScript
onAutoDeviceSwitchStatusChange(callback: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Subscribes to auto device switch status event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus> | Yes | Callback used to return the result. |

## onEffectSuggestionChange

```TypeScript
onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void
```

Subscribes to effect suggestion event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EffectSuggestionType> | Yes | Callback used to return the result. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback used to get the capture session errors. |

## onExposureInfoChange

```TypeScript
onExposureInfoChange(callback: Callback<ExposureInfo>): void
```

Subscribes exposure info change event callback. After exposure parameters are changed, the system will returns the updated exposure infos.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureInfo> | Yes | Callback used to get the exposure value change.  Exposure information callback listening. |

## onFeatureDetection

```TypeScript
onFeatureDetection(featureType: SceneFeatureType, callback: AsyncCallback<SceneFeatureDetectionResult>): void
```

Subscribes to feature detection results.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| featureType | SceneFeatureType | Yes | Feature type. |
| callback | AsyncCallback&lt;SceneFeatureDetectionResult> | Yes | Callback used to get the detection result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onFocusStateChange

```TypeScript
onFocusStateChange(callback: AsyncCallback<FocusState>): void
```

Subscribes focus state change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to get the focus state change. |

## onIsoInfoChange

```TypeScript
onIsoInfoChange(callback: Callback<IsoInfo>): void
```

Subscribes ISO info change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IsoInfo> | Yes | Callback used to get the ISO info change. |

## onLcdFlashStatus

```TypeScript
onLcdFlashStatus(callback: AsyncCallback<LcdFlashStatus>): void
```

Subscribes to lcd flash status.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;LcdFlashStatus> | Yes | Callback used to get the lcd flash status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onMacroStatusChanged

```TypeScript
onMacroStatusChanged(callback: AsyncCallback<boolean>): void
```

Subscribes camera macro status event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return macro detection result,  true indicating macro scene is detected and can be enabled, false indicating no macro scene is detected,  and macro should be disabled. |

## onSmoothZoomInfoAvailable

```TypeScript
onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void
```

Subscribes zoom info event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SmoothZoomInfo> | Yes | Callback used to get the zoom info. |

## onSystemPressureLevelChange

```TypeScript
onSystemPressureLevelChange(callback: AsyncCallback<SystemPressureLevel>): void
```

Subscribes to system pressure level event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SystemPressureLevel> | Yes | Callback used to return the result. |

## preconfig

```TypeScript
preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void
```

Preconfigures this session.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | PreconfigType | Yes | Resolution type. |
| preconfigRatio | PreconfigRatio | No | Aspect ratio. The default value is 4:3. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

