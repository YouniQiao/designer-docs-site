# WhiteBalanceQuery (System API)

WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported.

**Since:** 20

<!--Device-camera-interface WhiteBalanceQuery--><!--Device-camera-interface WhiteBalanceQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getWhiteBalanceRange

```TypeScript
getWhiteBalanceRange(): Array<number>
```

Obtains the range of white balance values in manual white balance mode.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-WhiteBalanceQuery-getWhiteBalanceRange(): Array<int>--><!--Device-WhiteBalanceQuery-getWhiteBalanceRange(): Array<int>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Range of white balance values, for example, [2800, ...,10000], in units of K (Kelvin).The actual value depends on the bottom-layer capability. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

## isWhiteBalanceGainsSupported

```TypeScript
isWhiteBalanceGainsSupported(): boolean
```

Checks whether the RGB gain is supported.

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WhiteBalanceQuery-isWhiteBalanceGainsSupported(): boolean--><!--Device-WhiteBalanceQuery-isWhiteBalanceGainsSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the RGB gain. **true** if supported, **false** otherwise. If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## isWhiteBalanceModeSupported

```TypeScript
isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean
```

Checks whether a white balance mode is supported.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-WhiteBalanceQuery-isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean--><!--Device-WhiteBalanceQuery-isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [WhiteBalanceMode](arkts-camera-camera-whitebalancemode-e-sys.md) | Yes | White balance mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the white balance mode. **true** if supported, **false** otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 19 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

