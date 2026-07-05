# VolumeEvent

Describes the event received by the application when the volume is changed.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## volume

```TypeScript
volume: int
```

Volume to set. The value range can be obtained by calling **getMinVolume** and **getMaxVolume**.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## volumeType

```TypeScript
volumeType: AudioVolumeType
```

Audio volume type.

**类型：** AudioVolumeType

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## percentage

```TypeScript
percentage?: int
```

Volume percentage, which is an integer ranging from [0, 100].

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

## volumeGroupId

```TypeScript
volumeGroupId: int
```

volumeGroup id

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

## updateUi

```TypeScript
updateUi: boolean
```

Whether to show the volume change in UI. **true** to show, **false** otherwise.

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## networkId

```TypeScript
networkId: string
```

Device network id

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

## volumeMode

```TypeScript
volumeMode?: AudioVolumeMode
```

Audio volume mode. The default value is **SYSTEM_GLOBAL**.

**类型：** AudioVolumeMode

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Volume

