# DeviceType

```TypeScript
enum DeviceType
```

Enumerates the device types.

**起始版本：** 7

**系统能力：** SystemCapability.Multimedia.Audio.Device

## INVALID

```TypeScript
INVALID = 0
```

Invalid device.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## EARPIECE

```TypeScript
EARPIECE = 1
```

Built-in earpiece.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## SPEAKER

```TypeScript
SPEAKER = 2
```

Built-in speaker.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## WIRED_HEADSET

```TypeScript
WIRED_HEADSET = 3
```

Wired headset with a microphone.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## WIRED_HEADPHONES

```TypeScript
WIRED_HEADPHONES = 4
```

Wired headset without a microphone.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## BLUETOOTH_SCO

```TypeScript
BLUETOOTH_SCO = 7
```

Bluetooth device using Synchronous Connection Oriented (SCO) links.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## BLUETOOTH_A2DP

```TypeScript
BLUETOOTH_A2DP = 8
```

Bluetooth device using Advanced Audio Distribution Profile (A2DP) links.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## MIC

```TypeScript
MIC = 15
```

Built-in microphone.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## USB_HEADSET

```TypeScript
USB_HEADSET = 22
```

USB Type-C headset.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## DISPLAY_PORT

```TypeScript
DISPLAY_PORT = 23
```

Display port (DP), which is used to connect to external devices.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REMOTE_CAST

```TypeScript
REMOTE_CAST = 24
```

Remote cast device.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## USB_DEVICE

```TypeScript
USB_DEVICE = 25
```

USB device (excluding USB headsets).

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Device

## ACCESSORY

```TypeScript
ACCESSORY = 26
```

Accessory devices, such as the mic on remote control.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## HDMI

```TypeScript
HDMI = 27
```

HDMI device (such as HDMI, ARC, and eARC).

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Device

## LINE_DIGITAL

```TypeScript
LINE_DIGITAL = 28
```

Wired digital device (such as S/PDIF)

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Device

## REMOTE_DAUDIO

```TypeScript
REMOTE_DAUDIO = 29
```

Distributed device.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## HEARING_AID

```TypeScript
HEARING_AID = 30
```

Hearing aid audio device. Note: This original device type can be obtained after it is declared via {@link AudioRoutingManager#declareDeviceTypesCompatibility}.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Device

## NEARLINK

```TypeScript
NEARLINK = 31
```

Nearlink device. Note: This original device type can be obtained after it is declared via {@link AudioRoutingManager#declareDeviceTypesCompatibility}.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Device

## BLUETOOTH_SPP

```TypeScript
BLUETOOTH_SPP = 33
```

Bluetooth device using the spp profile.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## NEARLINK_PORT

```TypeScript
NEARLINK_PORT = 34
```

Nearlink port.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## SYSTEM_PRIVATE

```TypeScript
SYSTEM_PRIVATE = 200
```

System private device. (This device is a private device within the system, and applications can ignore it.)

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Device

## DEFAULT

```TypeScript
DEFAULT = 1000
```

Default device type.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

