# AudioLatencyType

```TypeScript
enum AudioLatencyType
```

Enumerates the audio latency types.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Core

## LATENCY_TYPE_ALL

```TypeScript
LATENCY_TYPE_ALL = 0
```

Type to get latency of all audio processing units, including software and hardware.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## LATENCY_TYPE_SOFTWARE

```TypeScript
LATENCY_TYPE_SOFTWARE = 1
```

Type to get latency of software part, including audio effects in software.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## LATENCY_TYPE_HARDWARE

```TypeScript
LATENCY_TYPE_HARDWARE = 2
```

Type to get latency of hardware part, including audio effects in hal, driver and hardware.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

