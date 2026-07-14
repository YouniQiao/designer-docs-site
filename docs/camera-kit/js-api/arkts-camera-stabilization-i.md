# Stabilization

**Stabilization** inherits from [StabilizationQuery](arkts-camera-stabilizationquery-i.md). It provides APIs to set video stabilization. Video stabilization can be set only when the session has a recording stream ( [VideoOutput](arkts-camera-videooutput-i.md)). Among the enums of [VideoStabilizationMode](arkts-camera-videostabilizationmode-e.md), the **HIGH** mode only takes effect when the resolution set in [Profile](arkts-camera-profile-i.md) is 1920×1080.

**Inheritance/Implementation:** Stabilization extends [StabilizationQuery](arkts-camera-stabilizationquery-i.md)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getActiveVideoStabilizationMode

```TypeScript
getActiveVideoStabilizationMode(): VideoStabilizationMode
```

Obtains the video stabilization mode in use.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| VideoStabilizationMode | Video stabilization mode obtained. If the API call fails, undefined isreturned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## setVideoStabilizationMode

```TypeScript
setVideoStabilizationMode(mode: VideoStabilizationMode): void
```

Sets a video stabilization mode. Before the setting, call [isVideoStabilizationModeSupported](arkts-camera-stabilizationquery-i.md#isvideostabilizationmodesupported-1) to check whether the target video stabilization mode is supported. It is recommended that you set the video stabilization mode between [commitConfig](arkts-camera-session-i.md#commitconfig-2) and [Start](arkts-camera-session-i.md#start-2).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | VideoStabilizationMode | Yes | Video stabilization mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

