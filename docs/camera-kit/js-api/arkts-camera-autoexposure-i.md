# AutoExposure

AutoExposure inherits from [AutoExposureQuery]camera.AutoExposureQuery. It provides APIs related to auto exposure.

**Inheritance:** AutoExposureextends: AutoExposureQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposureMeteringMode

```TypeScript
getExposureMeteringMode(): ExposureMeteringMode
```

Gets current exposure metering mode.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| ExposureMeteringMode | The current exposure metering mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400103 | Session not config, only throw in session usage. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## getExposureMode

```TypeScript
getExposureMode(): ExposureMode
```

Obtains the exposure mode in use. > **NOTE** > > This API directly returns an invalid value if you have not set the exposure mode using > [setExposureMode]camera.AutoExposure.setExposureMode.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| ExposureMode | Exposure mode obtained. If the operation fails, undefined is returned and an error code  defined in [CameraErrorCode]camera.CameraErrorCode is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getExposureValue

```TypeScript
getExposureValue(): double
```

Obtains the exposure value in use.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| double | Exposure value obtained. There is a step for EV. For example, if the step is 0.5 and this  parameter is set to 1.2, the EV that takes effect is 1.0.  If the operation fails, an error code defined in [CameraErrorCode]camera.CameraErrorCode is  returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getMeteringPoint

```TypeScript
getMeteringPoint(): Point
```

Obtains the metering point of the camera device.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Point | Metering point obtained. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## offExposureStateChange

```TypeScript
offExposureStateChange(callback?: Callback<ExposureState>): void
```

Unregisters the callback used to listen for exposure state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureState> | No |  |

## onExposureStateChange

```TypeScript
onExposureStateChange(callback: Callback<ExposureState>): void
```

Registers a callback to listen for exposure state changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ExposureState> | Yes | Callback used to get the exposure state change. |

## setExposureBias

```TypeScript
setExposureBias(exposureBias: double): void
```

Sets an exposure compensation value (EV). Before the setting, you are advised to use [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange to obtain the supported values.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposureBias | double | Yes | EV. The supported EV range can be obtained by calling  [getExposureBiasRange]camera.AutoExposureQuery.getExposureBiasRange. If the  value passed is not within the supported range, the nearest critical point is used. Exposure compensation  is adjusted in steps, and the step size may vary across devices due to hardware differences. For example, if  the step size is 0.5, setting a value of 1.2 would result in an actual effective exposure compensation value  of 1.0. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

## setExposureMeteringMode

```TypeScript
setExposureMeteringMode(aeMeteringMode: ExposureMeteringMode): void
```

Sets exposure metering mode.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aeMeteringMode | ExposureMeteringMode | Yes | Exposure metering mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 23] |
| 7400103 | Session not config, only throw in session usage. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setExposureMode

```TypeScript
setExposureMode(aeMode: ExposureMode): void
```

Sets an exposure mode. Before the setting, call [isExposureModeSupported]camera.AutoExposureQuery.isExposureModeSupported to check whether the exposure mode is supported.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aeMode | ExposureMode | Yes | Exposure mode. If the input parameter is null or undefined, it is treated as 0  and exposure is locked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 19] |

## setMeteringPoint

```TypeScript
setMeteringPoint(point: Point): void
```

Sets the metering point, which is the center point of the metering rectangle. The metering point must be in the coordinate system (0-1), where the top-left corner is {0, 0} and the bottom-right corner is {1, 1}. The coordinate system is based on the horizontal device direction with the device's charging port on the right. If the layout of the preview screen of an application is based on the vertical direction with the charging port on the lower side, the layout width and height are {w, h}, and the touch point is {x, y}, then the coordinate point after conversion is {y/h, 1-x/w}.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | Metering point. The value range of x and y must be within [0, 1]. If a value less than 0  is passed, the value 0 is used. If a value greater than 1 is passed, the value 1 is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

