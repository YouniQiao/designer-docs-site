# SecureSession

SecureSession** inherits from [Session]camera.Session, [Flash]camera.Flash, [AutoExposure]camera.AutoExposure, [WhiteBalance]camera.WhiteBalance, [Focus]camera.Focus, and [Zoom]camera.Zoom. It implements a secure session, which provides operations on the flash, exposure, white balance, focus, and zoom. You can call [createSession]camera.CameraManager.createSession with [SceneMode]camera.SceneMode set to **SECURE_PHOTO** to create a session in secure mode. The secure mode is designed for applications with high security requirements, such as facial recognition systems and banking services. It must be used together with the <!--RP1-->security TA<!--RP1End--> to support service scenarios where both standard preview streams and security streams are output.<!--RP2--> The security TA can verify the signature of data delivered by the server, sign images, parse and assemble TLV logic , and read, create, and operate keys. It applies to image processing.<!--RP2End-->

**Inheritance:** SecureSessionextends: Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addSecureOutput

```TypeScript
addSecureOutput(previewOutput: PreviewOutput): void
```

Marks a [PreviewOutput]camera.PreviewOutput stream as secure output.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| previewOutput | PreviewOutput | Yes | Preview output stream. An error code is returned if the input parameter  is invalid. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 12 - 17] |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from SecureSession error events.

**Since:** 12

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

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. |
| callback | AsyncCallback&lt;FocusState> | No | Callback used to return the result. If this parameter is  specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

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

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to SecureSession error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  session is created. This event is triggered and the error message is returned when an error occurs during the  calling of a session-related API such as  [beginConfig]camera.Session.beginConfig,  [commitConfig]camera.Session.commitConfig(), and  [addInput]camera.Session.addInput. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at 'focusStateChange'. The event can be  listened for when a session is created. This event is triggered only when the camera focus state changes in  auto focus mode. |
| callback | AsyncCallback&lt;FocusState> | Yes | Callback used to return the focus state change. |

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

