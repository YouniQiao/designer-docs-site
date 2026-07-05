# CurrentOutputDeviceChangedEvent

Describes the event indicating that the output device changes.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## changeReason

```TypeScript
changeReason: AudioStreamDeviceChangeReason
```

Audio device change reason.

**Type:** AudioStreamDeviceChangeReason

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Core

## devices

```TypeScript
devices: AudioDeviceDescriptors
```

Audio device descriptors after change.

**Type:** AudioDeviceDescriptors

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Core

## preDevices

```TypeScript
preDevices?: AudioDeviceDescriptors
```

Audio device descriptors before change.

**Type:** AudioDeviceDescriptors

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

## recommendedAction

```TypeScript
recommendedAction: OutputDeviceChangeRecommendedAction
```

Recommend action when device change.

**Type:** OutputDeviceChangeRecommendedAction

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Core

