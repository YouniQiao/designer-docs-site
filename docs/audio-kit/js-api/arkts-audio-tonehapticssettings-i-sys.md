# ToneHapticsSettings (System API)

Haptics settings in tone scenario.

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemSoundManager } from '@ohos.multimedia.systemSoundManager';
```

## hapticsUri

```TypeScript
hapticsUri?: string
```

Haptics uri. Users can set/get this parameter when {@link ToneHapticsSettings#mode} is {@link ToneHapticsMode#NON_SYC}. In other cases, this uri is useless and should be ignored.

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## mode

```TypeScript
mode: ToneHapticsMode
```

Haptics mode.

**Type:** ToneHapticsMode

**Since:** 14

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

