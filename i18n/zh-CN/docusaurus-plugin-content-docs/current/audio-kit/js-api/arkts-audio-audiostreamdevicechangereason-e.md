# AudioStreamDeviceChangeReason

```TypeScript
enum AudioStreamDeviceChangeReason
```

Enumerates the reasons for audio stream device changes.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_UNKNOWN

```TypeScript
REASON_UNKNOWN = 0
```

Unknown reason.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_NEW_DEVICE_AVAILABLE

```TypeScript
REASON_NEW_DEVICE_AVAILABLE = 1
```

A new device is available.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_OLD_DEVICE_UNAVAILABLE

```TypeScript
REASON_OLD_DEVICE_UNAVAILABLE = 2
```

The old device is unavailable. When this reason is reported, consider pausing audio playback.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_OVERRODE

```TypeScript
REASON_OVERRODE = 3
```

Forcibly selected.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_SESSION_ACTIVATED

```TypeScript
REASON_SESSION_ACTIVATED = 4
```

The audio session has been activated.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REASON_STREAM_PRIORITY_CHANGED

```TypeScript
REASON_STREAM_PRIORITY_CHANGED = 5
```

An audio stream with higher priority appears.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Device

