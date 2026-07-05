# QuickShotPhotoSession

Quick shot photo session object.

**Inheritance:** QuickShotPhotoSessionextends: Session, AutoExposure, ColorEffect, ColorManagement, EffectSuggestion, Flash, Focus, Zoom, Beauty.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
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

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

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

## offEffectSuggestionChange

```TypeScript
offEffectSuggestionChange(callback?: AsyncCallback<EffectSuggestionType>): void
```

Unsubscribes from effect suggestion change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EffectSuggestionType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

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

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

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

## onEffectSuggestionChange

```TypeScript
onEffectSuggestionChange(callback: AsyncCallback<EffectSuggestionType>): void
```

Subscribes to effect suggestion change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EffectSuggestionType> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

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

