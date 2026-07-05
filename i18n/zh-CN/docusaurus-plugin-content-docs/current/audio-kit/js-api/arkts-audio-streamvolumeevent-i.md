# StreamVolumeEvent

Describes the event received by the application when the audio stream volume is changed.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## volume

```TypeScript
volume: int
```

Volume.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## previousVolume

```TypeScript
previousVolume?: int
```

Volume level before change.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## streamUsage

```TypeScript
streamUsage: StreamUsage
```

Audio stream for which the volume changes.

**类型：** StreamUsage

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## updateUi

```TypeScript
updateUi: boolean
```

Whether to show the volume change in UI. **true** to show, **false** otherwise.

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

