# SwitchMode

```TypeScript
enum SwitchMode
```

Enumerates the **selectTrack** modes for video playback. SwitchMode can be passed as a parameter through the **selectTrack** method. Currently, both DASH and HLS video tracks support this extended parameter. (HLS video tracks support this extended parameter since API version 24.)

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.Core

## SMOOTH

```TypeScript
SMOOTH = 0
```

Smooth playback is ensured after the switching. This mode has a delay, that is, the switching does not take effect immediately.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## SEGMENT

```TypeScript
SEGMENT = 1
```

The playback starts from the start position of the current segment after the switching. In this mode, the switching takes effect immediately and repeated playback may occur.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## CLOSEST

```TypeScript
CLOSEST = 2
```

The playback starts from the frame closest to the current playback time. In this mode, the switching takes effect immediately, and the playback is suspended for 3s to 5s and then resumed.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

