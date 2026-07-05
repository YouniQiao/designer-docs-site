# LightPaintingPhotoSession

LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect Implements a light painting photo session, which sets the parameters of the light painting photo mode and saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera. It inherits from [Session]camera.Session.

**Inheritance:** LightPaintingPhotoSessionextends: Session, Flash, Focus, Zoom, ColorEffect.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getLightPaintingType

```TypeScript
getLightPaintingType(): LightPaintingType
```

Obtains the type of light painting shutter mode in use.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| LightPaintingType | The light painting type in use. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getLightPaintingType(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): camera.LightPaintingType {
  let type: camera.LightPaintingType = lightPaintingPhotoSession.getLightPaintingType();
  return type;
}

```

## getSupportedLightPaintingTypes

```TypeScript
getSupportedLightPaintingTypes(): Array<LightPaintingType>
```

Obtains the supported types of light painting shutter mode.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LightPaintingType> | List of light painting types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
function getSupportedLightPaintingTypes(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): Array<camera.LightPaintingType> {
  let types: Array<camera.LightPaintingType> = lightPaintingPhotoSession.getSupportedLightPaintingTypes();
  return types
}

```

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from HighResolutionPhotoSession error events.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. |
| callback | ErrorCallback | No | Callback used to return the result. This parameter is optional. If this  parameter is specified, the subscription to the specified event on('error') with the specified callback  is canceled. (The callback object cannot be an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
function unregisterSessionError(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.off('error');
}

```

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | No | Callback used to return the result. This parameter is optional.  If this parameter is specified, the subscription to the specified event on('focusStateChange') with the  specified callback is canceled. (The callback object cannot be an anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
function unregisterFocusStateChange(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.off('focusStateChange');
}

```

## off('smoothZoomInfoAvailable')

```TypeScript
off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from smooth zoom state change events.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at 'smoothZoomInfoAvailable'. The  event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo> | No | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event  on('smoothZoomInfoAvailable') with the specified callback is canceled. (The callback object cannot be an  anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
function unregisterSmoothZoomInfo(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.off('smoothZoomInfoAvailable');
}

```

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

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

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## offSmoothZoomInfoAvailable

```TypeScript
offSmoothZoomInfoAvailable(callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from zoom info event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SmoothZoomInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to HighResolutionPhotoSession error events. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as  [beginConfig]camera.Session.beginConfig,  [commitConfig]camera.Session.commitConfig(), and  [addInput]camera.Session.addInput. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError): void {
  console.error(`LightPaintingPhotoSession error code: ${err.code}`);
}

function registerSessionError(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.on('error', callback);
}

```

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  auto focus mode. |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to return the focus state change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, focusState: camera.FocusState): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`Focus state: ${focusState}`);
}

function registerFocusStateChange(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.on('focusStateChange', callback);
}

```

## on('smoothZoomInfoAvailable')

```TypeScript
on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void
```

Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at 'smoothZoomInfoAvailable'. The  event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo> | Yes | Callback used to return the smooth zoom state change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(err: BusinessError, smoothZoomInfo: camera.SmoothZoomInfo): void {
  if (err !== undefined && err.code !== 0) {
    console.error(`Callback Error, errorCode: ${err.code}`);
    return;
  }
  console.info(`The duration of smooth zoom: ${smoothZoomInfo.duration}`);
}

function registerSmoothZoomInfo(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  lightPaintingPhotoSession.on('smoothZoomInfoAvailable', callback);
}

```

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback used to get the capture session errors. |

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

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to get the focus state change. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## onSmoothZoomInfoAvailable

```TypeScript
onSmoothZoomInfoAvailable(callback: AsyncCallback<SmoothZoomInfo>): void
```

Subscribes zoom info event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SmoothZoomInfo> | Yes | Callback used to get the zoom info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## setLightPaintingType

```TypeScript
setLightPaintingType(type: LightPaintingType): void
```

Sets the type of light painting shutter mode.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | LightPaintingType | Yes | Light painting type to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function setLightPaintingType(lightPaintingPhotoSession: camera.LightPaintingPhotoSession): void {
  try {
    let type: camera.LightPaintingType = camera.LightPaintingType.TRAFFIC_TRAILS;
    lightPaintingPhotoSession.setLightPaintingType(type);
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
    let err = error as BusinessError;
    console.error(`The setLightPaintingType call failed. error code: ${err.code}`);
  }
}

```

