# VideoSession

VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement Implements a video session, which sets the parameters of the normal video mode and saves all [CameraInput](arkts-camera-camera-camerainput-i.md) and [CameraOutput](arkts-camera-camera-cameraoutput-i.md)instances required to run the camera. It inherits from [Session](arkts-camera-camera-session-i.md).

**Inheritance/Implementation:** VideoSession extends [Session](arkts-camera-camera-session-i.md), [Flash](arkts-camera-camera-flash-i.md), [AutoExposure](arkts-camera-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-camera-whitebalance-i-sys.md), [Focus](arkts-camera-camera-focus-i.md), [Zoom](arkts-camera-camera-zoom-i.md), [Stabilization](arkts-camera-camera-stabilization-i.md), [ColorManagement](arkts-camera-camera-colormanagement-i.md), [ControlCenter](arkts-camera-camera-controlcenter-i.md), [AutoDeviceSwitch](arkts-camera-camera-autodeviceswitch-i.md), [Macro](arkts-camera-camera-macro-i-sys.md), [ManualExposure](arkts-camera-camera-manualexposure-i-sys.md), [ManualFocus](arkts-camera-camera-manualfocus-i-sys.md), [ManualIso](arkts-camera-camera-manualiso-i-sys.md), [OIS](arkts-camera-camera-ois-i.md), [Aperture](arkts-camera-camera-aperture-i-sys.md)

**Since:** 11

<!--Device-camera-interface VideoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization,    ColorManagement, ControlCenter, AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS,    Aperture--><!--Device-camera-interface VideoSession extends Session, Flash, AutoExposure, WhiteBalance, Focus, Zoom, Stabilization,    ColorManagement, ControlCenter, AutoDeviceSwitch, Macro, ManualExposure, ManualFocus, ManualIso, OIS,    Aperture-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="canpreconfig"></a>
## canPreconfig

```TypeScript
canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean
```

Checks whether this session supports a preconfigured resolution.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean--><!--Device-VideoSession-canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | [PreconfigType](arkts-camera-camera-preconfigtype-e.md) | Yes | Resolution type. |
| preconfigRatio | [PreconfigRatio](arkts-camera-camera-preconfigratio-e.md) | No | Aspect ratio. The default value is 16:9. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true**: The preconfigured resolution is supported.<br>**false**: The preconfigured resolution is not supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="off"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from **PhotoSession** error events. This API uses a callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-off(type: 'error', callback?: ErrorCallback): void--><!--Device-VideoSession-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a session is created. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-1"></a>
## off('focusStateChange')

```TypeScript
off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void
```

Unsubscribes from focus state change events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void--><!--Device-VideoSession-off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FocusState&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-2"></a>
## off('smoothZoomInfoAvailable')

```TypeScript
off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void
```

Unsubscribes from smooth zoom state change events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void--><!--Device-VideoSession-off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SmoothZoomInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-3"></a>
## off('controlCenterEffectStatusChange')

```TypeScript
off(type: 'controlCenterEffectStatusChange', callback?: AsyncCallback<ControlCenterStatusInfo>): void
```

Unsubscribes from events indicating that the camera controller effect status changes.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-VideoSession-off(type: 'controlCenterEffectStatusChange', callback?: AsyncCallback<ControlCenterStatusInfo>): void--><!--Device-VideoSession-off(type: 'controlCenterEffectStatusChange', callback?: AsyncCallback<ControlCenterStatusInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'controlCenterEffectStatusChange' | Yes | Event type. The value is fixed at **'controlCenterEffectStatusChange'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ControlCenterStatusInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-4"></a>
## off('autoDeviceSwitchStatusChange')

```TypeScript
off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Unsubscribes from automatic camera switch status change events.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void--><!--Device-VideoSession-off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AutoDeviceSwitchStatus&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-5"></a>
## off('systemPressureLevelChange')

```TypeScript
off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void
```

Unsubscribes from system pressure level change events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-VideoSession-off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void--><!--Device-VideoSession-off(type: 'systemPressureLevelChange', callback?: AsyncCallback<SystemPressureLevel>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at **'systemPressureLevelChange'**.The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SystemPressureLevel&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="offexposureinfochange"></a>
## offExposureInfoChange

```TypeScript
offExposureInfoChange(callback?: Callback<ExposureInfo>): void
```

Unsubscribes exposure info change event callback. Invoke this method after finishing camera operations.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoSession-offExposureInfoChange(callback?: Callback<ExposureInfo>): void--><!--Device-VideoSession-offExposureInfoChange(callback?: Callback<ExposureInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ExposureInfo&gt; | No | Callback used to get the exposure value change.Callback listening for canceling exposure information. |

<a id="offisoinfochange"></a>
## offIsoInfoChange

```TypeScript
offIsoInfoChange(callback?: Callback<IsoInfo>): void
```

Unsubscribes from ISO info change event callback.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-VideoSession-offIsoInfoChange(callback?: Callback<IsoInfo>): void--><!--Device-VideoSession-offIsoInfoChange(callback?: Callback<IsoInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;IsoInfo&gt; | No | Callback used to get the ISO info change. |

<a id="on"></a>
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

<!--Device-VideoSession-on(type: 'error', callback: ErrorCallback): void--><!--Device-VideoSession-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a session is created. This event is triggered and the error message is returned when an error occurs during the calling of a session-related API such as [beginConfig](arkts-camera-camera-session-i.md#beginconfig-1),[commitConfig](arkts-camera-camera-session-i.md#commitconfig-1), and [addInput](arkts-camera-camera-session-i.md#addinput-1). |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback used to return an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

<a id="on-1"></a>
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

<!--Device-VideoSession-on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void--><!--Device-VideoSession-on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusStateChange' | Yes | Event type. The value is fixed at **'focusStateChange'**. The event can be listened for when a session is created. This event is triggered only when the camera focus state changes in autofocus mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FocusState&gt; | Yes | Callback used to return the focus state change. |

<a id="on-2"></a>
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

<!--Device-VideoSession-on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void--><!--Device-VideoSession-on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'smoothZoomInfoAvailable' | Yes | Event type. The value is fixed at **'smoothZoomInfoAvailable'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SmoothZoomInfo&gt; | Yes | Callback used to return the smooth zoom state change. |

<a id="on-3"></a>
## on('controlCenterEffectStatusChange')

```TypeScript
on(type: 'controlCenterEffectStatusChange', callback: AsyncCallback<ControlCenterStatusInfo>): void
```

Subscribes to events indicating that the camera controller effect status changes. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-VideoSession-on(type: 'controlCenterEffectStatusChange', callback: AsyncCallback<ControlCenterStatusInfo>): void--><!--Device-VideoSession-on(type: 'controlCenterEffectStatusChange', callback: AsyncCallback<ControlCenterStatusInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'controlCenterEffectStatusChange' | Yes | Event type. The value is fixed at **'controlCenterEffectStatusChange'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ControlCenterStatusInfo&gt; | Yes | Callback used to return the effect status of the current controller. |

<a id="on-4"></a>
## on('autoDeviceSwitchStatusChange')

```TypeScript
on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void
```

Subscribes to automatic camera switch status change events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void--><!--Device-VideoSession-on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'autoDeviceSwitchStatusChange' | Yes | Event type. The value is fixed at **'autoDeviceSwitchStatusChange'**. The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AutoDeviceSwitchStatus&gt; | Yes | Callback function, which is used to obtain the status of automatic camera switch. |

<a id="on-5"></a>
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

<!--Device-VideoSession-on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void--><!--Device-VideoSession-on(type: 'systemPressureLevelChange', callback: AsyncCallback<SystemPressureLevel>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemPressureLevelChange' | Yes | Event type. The value is fixed at **'systemPressureLevelChange'**.The event can be listened for when a session is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SystemPressureLevel&gt; | Yes | Callback used to return the current system pressure level. |

<a id="onexposureinfochange"></a>
## onExposureInfoChange

```TypeScript
onExposureInfoChange(callback: Callback<ExposureInfo>): void
```

Subscribes exposure info change event callback.After exposure parameters are changed, the system will returns the updated exposure infos.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoSession-onExposureInfoChange(callback: Callback<ExposureInfo>): void--><!--Device-VideoSession-onExposureInfoChange(callback: Callback<ExposureInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ExposureInfo&gt; | Yes | Callback used to get the exposure value change Exposure information callback listening. |

<a id="onisoinfochange"></a>
## onIsoInfoChange

```TypeScript
onIsoInfoChange(callback: Callback<IsoInfo>): void
```

Subscribes ISO info change event callback.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-VideoSession-onIsoInfoChange(callback: Callback<IsoInfo>): void--><!--Device-VideoSession-onIsoInfoChange(callback: Callback<IsoInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;IsoInfo&gt; | Yes | Callback used to get the ISO info change. |

<a id="preconfig"></a>
## preconfig

```TypeScript
preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void
```

Preconfigures this session.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void--><!--Device-VideoSession-preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preconfigType | [PreconfigType](arkts-camera-camera-preconfigtype-e.md) | Yes | Resolution type. |
| preconfigRatio | [PreconfigRatio](arkts-camera-camera-preconfigratio-e.md) | No | Aspect ratio. The default value is 16:9. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="setqualityprioritization"></a>
## setQualityPrioritization

```TypeScript
setQualityPrioritization(quality: QualityPrioritization): void
```

Sets the priority level for video recording quality.

> **NOTE**  
>  
> - The default value is **HIGH_QUALITY**. Switching to **POWER_BALANCE** will compromise video recording quality  
> to achieve lower power usage. The extent of power conservation achieved varies depending on the platform.  
>  
> - It is recommended that this API be called between  
> [commitConfig](arkts-camera-camera-session-i.md#commitconfig-1) and  
> [start](arkts-camera-camera-session-i.md#start-1).

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoSession-setQualityPrioritization(quality: QualityPrioritization): void--><!--Device-VideoSession-setQualityPrioritization(quality: QualityPrioritization): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| quality | [QualityPrioritization](arkts-camera-camera-qualityprioritization-e.md) | Yes | Priority level to set. The default value is **HIGH_QUALITY**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;3. Parameter verification failed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. The session has not been committed or configured. |

