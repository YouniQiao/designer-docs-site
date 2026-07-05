# AVMetricsEvent

Describes the information of an Metrics Event.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## details

```TypeScript
details: Record<string, Object>
```

The detailed information of the event.

**Type:** Record<string, Object>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## event

```TypeScript
event: AVMetricsEventType
```

Type of the metrics event.

**Type:** AVMetricsEventType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## playbackPosition

```TypeScript
playbackPosition: number
```

The playback progress position when the event occurs, in ms.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## timeStamp

```TypeScript
timeStamp: number
```

Absolute timestamp when the event occurred, in ms.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

