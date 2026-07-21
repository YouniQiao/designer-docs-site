# FocusQuery

Provides the API to check whether the focus assist is supported.

**Since:** 12

<!--Device-camera-interface FocusQuery--><!--Device-camera-interface FocusQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="isfocusmodesupported"></a>
## isFocusModeSupported

```TypeScript
isFocusModeSupported(afMode: FocusMode): boolean
```

Checks whether a focus mode is supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-FocusQuery-isFocusModeSupported(afMode: FocusMode): boolean--><!--Device-FocusQuery-isFocusModeSupported(afMode: FocusMode): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| afMode | [FocusMode](arkts-camera-camera-focusmode-e.md) | Yes | Focus mode. If the input parameter is null or undefined, it is treated as 0 and manual focus is used. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the focus mode. **true** if supported, **false** otherwise.If the operation fails, undefined is returned and an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

<a id="islockfocustrackingsupported"></a>
## isLockFocusTrackingSupported

```TypeScript
isLockFocusTrackingSupported(): boolean
```

Checks whether lock focus tracking is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-FocusQuery-isLockFocusTrackingSupported(): boolean--><!--Device-FocusQuery-isLockFocusTrackingSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is the lock focus tracking supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

