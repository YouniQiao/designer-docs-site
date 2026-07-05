# AVMetricsEvent

Describes the information of an Metrics Event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## timeStamp

```TypeScript
timeStamp: long
```

Absolute timestamp when the event occurred.

**类型：** long

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## playbackPosition

```TypeScript
playbackPosition: int
```

The playback progress position when the event occurs.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## details

```TypeScript
details: Record<string, Object>
```

The detailed information of the event.

**类型：** Record<string, Object>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## event

```TypeScript
event: AVMetricsEventType
```

Type of the metrics event.

**类型：** AVMetricsEventType

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

