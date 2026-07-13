# WhiteBalance (System API)

**WhiteBalance** inherits from [WhiteBalanceQuery](arkts-camera-whitebalancequery-i.md).
It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance
value.

**Inheritance/Implementation:** WhiteBalance extends [WhiteBalanceQuery](arkts-camera-whitebalancequery-i.md)

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getWhiteBalance

```TypeScript
getWhiteBalance(): number
```

Obtains the current white balance value.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | White balance value, in units of K (Kelvin) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## getWhiteBalanceMode

```TypeScript
getWhiteBalanceMode(): WhiteBalanceMode
```

Obtains the white balance mode in use.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| WhiteBalanceMode | White balance mode in use. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## setWhiteBalance

```TypeScript
setWhiteBalance(whiteBalance: number): void
```

Sets a white balance value.
Before the setting, run
[getWhiteBalanceRange](arkts-camera-whitebalancequery-i-sys.md#getwhitebalancerange-1) to check the
white balance value range supported by the device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| whiteBalance | number | Yes | White balance value, in units of K (Kelvin) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## setWhiteBalanceMode

```TypeScript
setWhiteBalanceMode(mode: WhiteBalanceMode): void
```

Sets a white balance mode. Before the setting, run
[isWhiteBalanceModeSupported](arkts-camera-whitebalancequery-i-sys.md#iswhitebalancemodesupported-1)
to check whether the device supports the specified white balance mode.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | WhiteBalanceMode | Yes | White balance mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

