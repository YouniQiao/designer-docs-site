# InterruptForceType

```TypeScript
enum InterruptForceType
```

Enumerates the types of force that causes audio interruption. The force type is obtained when an [InterruptEvent](arkts-audio-interruptevent-i.md#InterruptEvent) is received. This type specifies whether audio interruption is forcibly performed by the system. The operation information (such as audio pause or stop) can be obtained through [InterruptHint]audio.InterruptHint. For details about the audio interruption policy, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_FORCE

```TypeScript
INTERRUPT_FORCE = 0
```

The operation is forcibly performed by the system.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_SHARE

```TypeScript
INTERRUPT_SHARE = 1
```

The operation will not be performed by the system. [InterruptHint]audio.InterruptHint is used to provide recommended operations for the application, and the application can determine the next processing mode.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

