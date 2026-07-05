# ToneHapticsSettings

Haptics settings in tone scenario.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { systemSoundManager } from '@kit.AudioKit';
```

## hapticsUri

```TypeScript
hapticsUri?: string
```

Haptics uri. Users can set/get this parameter when {@link ToneHapticsSettings#mode} is {@link ToneHapticsMode#NON_SYC}. In other cases, this uri is useless and should be ignored.

**类型：** string

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## mode

```TypeScript
mode: ToneHapticsMode
```

Haptics mode.

**类型：** ToneHapticsMode

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

