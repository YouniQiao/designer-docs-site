# StreamVolumeEvent

Describes the event received by the application when the audio stream volume is changed.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## volume

```TypeScript
volume: int
```

Volume.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

## previousVolume

```TypeScript
previousVolume?: int
```

Volume level before change.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

## streamUsage

```TypeScript
streamUsage: StreamUsage
```

Audio stream for which the volume changes.

**Type:** StreamUsage

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

## updateUi

```TypeScript
updateUi: boolean
```

Whether to show the volume change in UI. **true** to show, **false** otherwise.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

