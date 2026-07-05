# Stabilization

Stabilization** inherits from [StabilizationQuery]camera.StabilizationQuery. It provides APIs to set video stabilization. Video stabilization can be set only when the session has a recording stream ( [VideoOutput]camera.VideoOutput). Among the enums of [VideoStabilizationMode]camera.VideoStabilizationMode, the **HIGH** mode only takes effect when the resolution set in [Profile]camera.Profile is 1920×1080.

**Inheritance:** Stabilizationextends: StabilizationQuery.

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

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| VideoStabilizationMode | Video stabilization mode obtained. If the API call fails, undefined is  returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## setVideoStabilizationMode

```TypeScript
setVideoStabilizationMode(mode: VideoStabilizationMode): void
```

Sets a video stabilization mode. Before the setting, call [isVideoStabilizationModeSupported]camera.StabilizationQuery.isVideoStabilizationModeSupported to check whether the target video stabilization mode is supported. It is recommended that you set the video stabilization mode between [commitConfig]camera.Session.commitConfig() and [Start]camera.Session.start().

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | VideoStabilizationMode | Yes | Video stabilization mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

