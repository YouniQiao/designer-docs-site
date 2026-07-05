# OISQuery

OIS (Optical Image Stabilization) query interface.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getCurrentCustomOISBias

```TypeScript
getCurrentCustomOISBias(oisAxis: OISAxes): double
```

Gets the current custom bias value for the specified OIS axis.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oisAxis | OISAxes | Yes | The OIS axis |

**Return value:**

| Type | Description |
| --- | --- |
| double | The current bias value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getCurrentOISMode

```TypeScript
getCurrentOISMode(): OISMode
```

Gets the current OIS mode.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| OISMode | The current OIS mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getSupportedOISBiasRange

```TypeScript
getSupportedOISBiasRange(oisAxis: OISAxes): Array<double>
```

Gets the supported bias range for the specified OIS axis.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oisAxis | OISAxes | Yes | The OIS axis. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;double> | The bias range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getSupportedOISBiasStep

```TypeScript
getSupportedOISBiasStep(oisAxis: OISAxes): double
```

Gets the bias step for the specified OIS axis.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oisAxis | OISAxes | Yes | The OIS axis. |

**Return value:**

| Type | Description |
| --- | --- |
| double | The bias step value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## isOISModeSupported

```TypeScript
isOISModeSupported(mode: OISMode): boolean
```

Checks if the specified OIS mode is supported.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | OISMode | Yes | The OIS mode to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the mode is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

