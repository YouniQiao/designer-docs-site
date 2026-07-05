# LightStatus

```TypeScript
enum LightStatus
```

Enumerates the camera light statuses, which are obtained by calling VideoSessionForSys. [on('lightStatusChange')]camera.VideoSession.on(type: 'lightStatusChange', callback: AsyncCallback<LightStatus>).

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## NORMAL

```TypeScript
NORMAL = 0
```

Normal lighting conditions.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## INSUFFICIENT

```TypeScript
INSUFFICIENT = 1
```

Insufficient lighting (too dark).

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

