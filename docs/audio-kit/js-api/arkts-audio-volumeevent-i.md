# VolumeEvent

Describes the event received by the application when the volume is changed.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## volume

```TypeScript
volume: int
```

Volume to set. The value range can be obtained by calling **getMinVolume** and **getMaxVolume**.

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## volumeType

```TypeScript
volumeType: AudioVolumeType
```

Audio volume type.

**Type:** AudioVolumeType

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## percentage

```TypeScript
percentage?: int
```

Volume percentage, which is an integer ranging from [0, 100].

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

## volumeGroupId

```TypeScript
volumeGroupId: int
```

volumeGroup id

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

## updateUi

```TypeScript
updateUi: boolean
```

Whether to show the volume change in UI. **true** to show, **false** otherwise.

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## networkId

```TypeScript
networkId: string
```

Device network id

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

## volumeMode

```TypeScript
volumeMode?: AudioVolumeMode
```

Audio volume mode. The default value is **SYSTEM_GLOBAL**.

**Type:** AudioVolumeMode

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

