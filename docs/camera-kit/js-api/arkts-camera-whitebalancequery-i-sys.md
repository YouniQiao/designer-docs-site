# WhiteBalanceQuery

WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorTintRange

```TypeScript
getColorTintRange(): Array<int>
```

Query the color tint range.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | The array of color tint range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## getWhiteBalanceRange

```TypeScript
getWhiteBalanceRange(): Array<int>
```

Obtains the range of white balance values in manual white balance mode.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | Range of white balance values, for example, [2800, ...,10000], in units of K (Kelvin).  The actual value depends on the bottom-layer capability. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config, only throw in session usage. |

## isWhiteBalanceModeSupported

```TypeScript
isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean
```

Checks whether a white balance mode is supported.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WhiteBalanceMode | Yes | White balance mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the white balance mode. true if supported, false  otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config, only throw in session usage. |

