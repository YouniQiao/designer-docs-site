# CurrentOutputDeviceChangedEvent

Describes the event indicating that the output device changes.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## recommendedAction

```TypeScript
recommendedAction: OutputDeviceChangeRecommendedAction
```

Recommend action when device change.

**类型：** OutputDeviceChangeRecommendedAction

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## changeReason

```TypeScript
changeReason: AudioStreamDeviceChangeReason
```

Audio device change reason.

**类型：** AudioStreamDeviceChangeReason

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## devices

```TypeScript
devices: AudioDeviceDescriptors
```

Audio device descriptors after change.

**类型：** AudioDeviceDescriptors

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## preDevices

```TypeScript
preDevices?: AudioDeviceDescriptors
```

Audio device descriptors before change.

**类型：** AudioDeviceDescriptors

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

