# MediaKeySystemInfo

Used to indicate the media key system info of media source.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Drm.Core

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

## pssh

```TypeScript
pssh: Uint8Array
```

PSSH(protection scheme specific header) contain drm info.

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Drm.Core

## uuid

```TypeScript
uuid: string
```

Drm system ID.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Drm.Core

