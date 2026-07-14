# SecureSession

**SecureSession** inherits from [Session](arkts-camera-session-i.md), [Flash](arkts-camera-flash-i.md), [AutoExposure](arkts-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-whitebalance-i.md), [Focus](arkts-camera-focus-i.md), and [Zoom](arkts-camera-zoom-i.md). It implements a secure session, which provides operations on the flash, exposure, white balance, focus, and zoom. You can call [createSession](arkts-camera-cameramanager-i.md#createsession-1) with [SceneMode](arkts-camera-scenemode-e.md) set to **SECURE_PHOTO** to create a session in secure mode. The secure mode is designed for applications with high security requirements, such as facial recognition systems and banking services. It must be used together with the <!--RP1-->security TA<!--RP1End--> to support service scenarios where both standard preview streams and security streams are output.<!--RP2--> The security TA can verify the signature of data delivered by the server, sign images, parse and assemble TLV logic , and read, create, and operate keys. It applies to image processing.<!--RP2End-->

**Inheritance/Implementation:** SecureSession extends [Session](arkts-camera-session-i.md), [Flash](arkts-camera-flash-i.md), [AutoExposure](arkts-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-whitebalance-i.md), [Focus](arkts-camera-focus-i.md), [Zoom](arkts-camera-zoom-i.md)

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

Marks a [PreviewOutput](arkts-camera-previewoutput-i.md) stream as secure output.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| previewOutput | PreviewOutput | Yes | Preview output stream. An error code is returned if the input parameteris invalid. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 12 - 17 |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from SecureSession error events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when asession is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, thesubscription to the specified event with the specified callback is canceled. (The callback object cannot bean anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can belistened for when a session is created. |
| callback | AsyncCallback&lt;FocusState&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to SecureSession error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when asession is created. This event is triggered and the error message is returned when an error occurs during thecalling of a session-related API such as[beginConfig](arkts-camera-session-i.md#beginconfig-1),[commitConfig](arkts-camera-session-i.md#commitconfig-2), and[addInput](arkts-camera-session-i.md#addinput-1). |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can belistened for when a session is created. This event is triggered only when the camera focus state changes inauto focus mode. |
| callback | AsyncCallback&lt;FocusState&gt; | Yes | Callback used to return the focus state change. |

