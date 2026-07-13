# PhotoSession

Implements a photo session, which sets the parameters of the normal photo mode and saves all
[CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md)
instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md).

**Inheritance/Implementation:** PhotoSession extends [Session](arkts-camera-session-i.md), [Flash](arkts-camera-flash-i.md), [AutoExposure](arkts-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-whitebalance-i.md), [Focus](arkts-camera-focus-i.md), [Zoom](arkts-camera-zoom-i.md), [ColorManagement](arkts-camera-colormanagement-i.md), [AutoDeviceSwitch](arkts-camera-autodeviceswitch-i.md), [Macro](arkts-camera-macro-i-sys.md), [ManualExposure](arkts-camera-manualexposure-i.md), [ManualFocus](arkts-camera-manualfocus-i-sys.md), [ManualIso](arkts-camera-manualiso-i-sys.md), [OIS](arkts-camera-ois-i.md), [Aperture](arkts-camera-aperture-i-sys.md)

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

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | PreconfigType | Yes | Resolution type. |
| preconfigRatio | PreconfigRatio | No | Aspect ratio. The default value is 4:3. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a preconfigured resolution is supported. **true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from **PhotoSession** error events. This API uses a callback to return the result.

**Since:** 11

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

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can belistened for when a session is created. |
| callback | AsyncCallback&lt;FocusState&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('smoothZoomInfoAvailable')

```TypeScript
off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from smooth zoom state change events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at **'smoothZoomInfoAvailable'**. Theevent can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('autoDeviceSwitchStatusChange')

```TypeScript
off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Unsubscribes from automatic camera switch status change events.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at**'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus&gt; | No | Callback used to return the result. If this parameteris specified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('systemPressureLevelChange')

```TypeScript
off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void
```

Unsubscribes from system pressure level change events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at **'systemPressureLevelChange'**.The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SystemPressureLevel&gt; | No | Callback used to return the result. If this parameteris specified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## offExposureInfoChange

```TypeScript
offExposureInfoChange(callback?: Callback<ExposureInfo>): void
```

Unsubscribes exposure info change event callback. Invoke this method after finishing camera operations.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureInfo&gt; | No | Callback used to get the exposure value change.<br>Callback listening for canceling exposure information. |

## offIsoInfoChange

```TypeScript
offIsoInfoChange(callback?: Callback<IsoInfo>): void
```

Unsubscribes from ISO info change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IsoInfo&gt; | No | Callback used to get the ISO info change. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to **PhotoSession** error events. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when asession is created. This event is triggered and the error message is returned when an error occurs during thecalling of a session-related API such as[beginConfig](arkts-camera-session-i.md#beginconfig-1),[commitConfig](arkts-camera-session-i.md#commitconfig-1), and[addInput](arkts-camera-session-i.md#addinput-1). |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

## on('focusStateChange')

```TypeScript
on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void
```

Subscribes to focus state change events. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can belistened for when a session is created. This event is triggered only when the camera focus state changes inautofocus mode. |
| callback | AsyncCallback&lt;FocusState&gt; | Yes | Callback used to return the focus state change. |

## on('smoothZoomInfoAvailable')

```TypeScript
on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void
```

Subscribes to smooth zoom state change events. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at **'smoothZoomInfoAvailable'**. Theevent can be listened for when a session is created. |
| callback | AsyncCallback&lt;SmoothZoomInfo&gt; | Yes | Callback used to return the smooth zoom state change. |

## on('autoDeviceSwitchStatusChange')

```TypeScript
on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Subscribes to automatic camera switch status change events. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at**'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;AutoDeviceSwitchStatus&gt; | Yes | Callback function, which is used to obtain the statusof automatic camera switch. |

## on('systemPressureLevelChange')

```TypeScript
on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void
```

Subscribes to system pressure level change events. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at **'systemPressureLevelChange'**.The event can be listened for when a session is created. |
| callback | AsyncCallback&lt;SystemPressureLevel&gt; | Yes | Callback used to return the current system pressurelevel. |

## onExposureInfoChange

```TypeScript
onExposureInfoChange(callback: Callback<ExposureInfo>): void
```

Subscribes exposure info change event callback.
After exposure parameters are changed, the system will returns the updated exposure infos.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureInfo&gt; | Yes | Callback used to get the exposure value change.<br>Exposure information callback listening. |

## onIsoInfoChange

```TypeScript
onIsoInfoChange(callback: Callback<IsoInfo>): void
```

Subscribes ISO info change event callback.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IsoInfo&gt; | Yes | Callback used to get the ISO info change. |

## preconfig

```TypeScript
preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void
```

Preconfigures this session.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | PreconfigType | Yes | Resolution type. |
| preconfigRatio | PreconfigRatio | No | Aspect ratio. The default value is 4:3. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

