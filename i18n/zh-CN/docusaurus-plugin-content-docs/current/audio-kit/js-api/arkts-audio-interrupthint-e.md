# InterruptHint

```TypeScript
enum InterruptHint
```

Enumerates the hints provided along with audio interruption. The hint is obtained when an [InterruptEvent](arkts-audio-interruptevent-i.md#InterruptEvent) is received. The hint specifies the operation (such as audio pause or volume adjustment) to be performed on audio streams based on the focus strategy. You can determine whether the operation is forcibly performed by the system based on [InterruptForceType]audio.InterruptForceType in **InterruptEvent**. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**起始版本：** 7

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_NONE

```TypeScript
INTERRUPT_HINT_NONE = 0
```

None.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_RESUME

```TypeScript
INTERRUPT_HINT_RESUME = 1
```

A hint is displayed, indicating that the audio stream is restored. The application can proactively trigger operations related to rendering or recording. This operation cannot be forcibly performed by the system, and the corresponding [InterruptForceType]audio.InterruptForceType must be **INTERRUPT_SHARE**.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_PAUSE

```TypeScript
INTERRUPT_HINT_PAUSE = 2
```

A hint is displayed, indicating that the audio stream is paused and the audio focus is lost temporarily. When the audio focus is available, the **INTERRUPT_HINT_RESUME** event is received.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_STOP

```TypeScript
INTERRUPT_HINT_STOP = 3
```

A hint is displayed, indicating that the audio stream stops and the audio focus is lost.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_DUCK

```TypeScript
INTERRUPT_HINT_DUCK = 4
```

A hint is displayed, indicating that audio ducking starts and the audio is played at a lower volume.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_UNDUCK

```TypeScript
INTERRUPT_HINT_UNDUCK = 5
```

A hint is displayed, indicating that audio ducking ends and the audio is played at the normal volume.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_MUTE

```TypeScript
INTERRUPT_HINT_MUTE = 6
```

A hint is displayed, indicating that the audio is muted.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## INTERRUPT_HINT_UNMUTE

```TypeScript
INTERRUPT_HINT_UNMUTE = 7
```

A hint is displayed, indicating that the audio is unmuted.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

