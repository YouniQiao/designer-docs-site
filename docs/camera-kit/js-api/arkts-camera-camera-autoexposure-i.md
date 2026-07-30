# AutoExposure

AutoExposure inherits from [AutoExposureQuery](arkts-camera-camera-autoexposurequery-i.md).It provides APIs related to auto exposure.

**Inheritance/Implementation:** AutoExposure extends [AutoExposureQuery](arkts-camera-camera-autoexposurequery-i.md)

**Since:** 11

<!--Device-camera-interface AutoExposure extends AutoExposureQuery--><!--Device-camera-interface AutoExposure extends AutoExposureQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposureMode

```TypeScript
getExposureMode(): ExposureMode
```

Obtains the exposure mode in use.
> **NOTE**  
>  
> This API directly returns an invalid value if you have not set the exposure mode using  
> [setExposureMode](arkts-camera-camera-autoexposure-i.md#setexposuremode).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-getExposureMode(): ExposureMode--><!--Device-AutoExposure-getExposureMode(): ExposureMode-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ExposureMode](arkts-camera-camera-exposuremode-e.md) | Exposure mode obtained. If the operation fails, undefined is returned and an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## getExposureValue

```TypeScript
getExposureValue(): number
```

Obtains the exposure value in use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-getExposureValue(): double--><!--Device-AutoExposure-getExposureValue(): double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this parameter is set to 1.2, the EV that takes effect is 1.0.<br>If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## getMeteringPoint

```TypeScript
getMeteringPoint(): Point
```

Obtains the metering point of the camera device.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-getMeteringPoint(): Point--><!--Device-AutoExposure-getMeteringPoint(): Point-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Point](../../apis-test-kit/arkts-apis/arkts-test-uitest-point-i.md) | Metering point obtained. If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## offExposureStateChange

```TypeScript
offExposureStateChange(callback?: Callback<ExposureState>): void
```

Unregisters the callback used to listen for exposure state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AutoExposure-offExposureStateChange(callback?: Callback<ExposureState>): void--><!--Device-AutoExposure-offExposureStateChange(callback?: Callback<ExposureState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ExposureState&gt; | No | Callback used to get the exposure state change. |

## onExposureStateChange

```TypeScript
onExposureStateChange(callback: Callback<ExposureState>): void
```

Registers a callback to listen for exposure state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AutoExposure-onExposureStateChange(callback: Callback<ExposureState>): void--><!--Device-AutoExposure-onExposureStateChange(callback: Callback<ExposureState>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ExposureState&gt; | Yes | Callback used to get the exposure state change. |

## setExposureBias

```TypeScript
setExposureBias(exposureBias: number): void
```

Sets an exposure compensation value (EV).Before the setting, you are advised to use [getExposureBiasRange](arkts-camera-camera-autoexposurequery-i.md#getexposurebiasrange) to obtain the supported values.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-setExposureBias(exposureBias: double): void--><!--Device-AutoExposure-setExposureBias(exposureBias: double): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposureBias | number | Yes | EV. The supported EV range can be obtained by calling [getExposureBiasRange](arkts-camera-camera-autoexposurequery-i.md#getexposurebiasrange). If the value passed is not within the supported range, the nearest critical point is used.<br>Exposure compensation is adjusted in steps, and the step size may vary across devices due to hardware differences. For example, if the step size is 0.5, setting a value of 1.2 would result in an actual effective exposure compensation value of 1.0.<br>If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 and later |

## setExposureMode

```TypeScript
setExposureMode(aeMode: ExposureMode): void
```

Sets an exposure mode. Before the setting, call [isExposureModeSupported](arkts-camera-camera-autoexposurequery-i.md#isexposuremodesupported) to check whether the exposure mode is supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-setExposureMode(aeMode: ExposureMode): void--><!--Device-AutoExposure-setExposureMode(aeMode: ExposureMode): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aeMode | [ExposureMode](arkts-camera-camera-exposuremode-e.md) | Yes | Exposure mode. If the input parameter is null or undefined, it is treated as 0and exposure is locked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 19 and later |

## setMeteringPoint

```TypeScript
setMeteringPoint(point: Point): void
```

Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}.

The coordinate system is based on the horizontal device direction with the device's charging port on the right.If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AutoExposure-setMeteringPoint(point: Point): void--><!--Device-AutoExposure-setMeteringPoint(point: Point): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](../../apis-test-kit/arkts-apis/arkts-test-uitest-point-i.md) | Yes | Metering point. The value range of x and y must be within [0, 1]. If a value less than 0is passed, the value **0** is used. If a value greater than **1** is passed, the value **1** is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

