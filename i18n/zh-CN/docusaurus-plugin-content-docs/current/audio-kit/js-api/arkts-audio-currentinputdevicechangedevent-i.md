# CurrentInputDeviceChangedEvent

Describes the event indicating that the input device changes.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## changeReason

```TypeScript
changeReason: AudioStreamDeviceChangeReason
```

Audio input device change reason.

**类型：** AudioStreamDeviceChangeReason

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Core

## devices

```TypeScript
devices: AudioDeviceDescriptors
```

Audio input device descriptors after change.

**类型：** AudioDeviceDescriptors

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Core

