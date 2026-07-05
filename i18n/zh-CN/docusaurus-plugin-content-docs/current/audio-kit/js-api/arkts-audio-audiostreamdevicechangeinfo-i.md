# AudioStreamDeviceChangeInfo

Describes the event received by the application when the audio stream device is changed.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## changeReason

```TypeScript
changeReason: AudioStreamDeviceChangeReason
```

Audio stream device change reason.

**类型：** AudioStreamDeviceChangeReason

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## devices

```TypeScript
devices: AudioDeviceDescriptors
```

Audio device descriptors after change.

**类型：** AudioDeviceDescriptors

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## preDevices

```TypeScript
preDevices?: AudioDeviceDescriptors
```

Audio device descriptors before change.

**类型：** AudioDeviceDescriptors

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

