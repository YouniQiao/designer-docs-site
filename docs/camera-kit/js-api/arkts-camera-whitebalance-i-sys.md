# WhiteBalance

WhiteBalance** inherits from [WhiteBalanceQuery]camera.WhiteBalanceQuery. It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value.

**Inheritance:** WhiteBalanceextends: WhiteBalanceQuery.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getColorTint

```TypeScript
getColorTint(): int
```

Gets current color tint.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | The current color tint. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## getWhiteBalance

```TypeScript
getWhiteBalance(): int
```

Obtains the current white balance value.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | White balance value, in units of K (Kelvin) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config. |

## getWhiteBalanceMode

```TypeScript
getWhiteBalanceMode(): WhiteBalanceMode
```

Obtains the white balance mode in use.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| WhiteBalanceMode | White balance mode in use. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400103 | Session not config. |

## setColorTint

```TypeScript
setColorTint(colorTint: int): void
```

Sets color tint.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorTint | int | Yes | Color tint, the supported range can be obtained by calling  [getColorTintRange]camera.WhiteBalanceQuery.getColorTintRange. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setWhiteBalance

```TypeScript
setWhiteBalance(whiteBalance: int): void
```

Sets a white balance value. Before the setting, run [getWhiteBalanceRange]camera.WhiteBalanceQuery.getWhiteBalanceRange to check the white balance value range supported by the device.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| whiteBalance | int | Yes | White balance value, in units of K (Kelvin) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

## setWhiteBalanceMode

```TypeScript
setWhiteBalanceMode(mode: WhiteBalanceMode): void
```

Sets a white balance mode. Before the setting, run [isWhiteBalanceModeSupported]camera.WhiteBalanceQuery.isWhiteBalanceModeSupported to check whether the device supports the specified white balance mode.

**Since:** 12

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WhiteBalanceMode | Yes | White balance mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 19] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

