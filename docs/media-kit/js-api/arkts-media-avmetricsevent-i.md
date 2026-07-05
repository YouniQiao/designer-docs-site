# AVMetricsEvent

Describes the information of an Metrics Event.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## timeStamp

```TypeScript
timeStamp: long
```

Absolute timestamp when the event occurred.

**Type:** long

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## playbackPosition

```TypeScript
playbackPosition: int
```

The playback progress position when the event occurs.

**Type:** int

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## details

```TypeScript
details: Record<string, Object>
```

The detailed information of the event.

**Type:** Record<string, Object>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## event

```TypeScript
event: AVMetricsEventType
```

Type of the metrics event.

**Type:** AVMetricsEventType

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

