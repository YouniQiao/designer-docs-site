# FocusTrackingInfo

Describes the focus tracking information, which is obtained by calling VideoSessionForSys. [on('focusTrackingInfoAvailable')]camera.VideoSession.on(type: 'focusTrackingInfoAvailable', callback: Callback<FocusTrackingInfo>).

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## trackingRegion

```TypeScript
trackingRegion: Rect
```

Tracking region.

**Type:** Rect

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## trackingMode

```TypeScript
trackingMode: FocusTrackingMode
```

Tracing mode.

**Type:** FocusTrackingMode

**Since:** 15

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

