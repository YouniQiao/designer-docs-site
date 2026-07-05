# AudioDeviceDescriptor

Describes an audio device.

**起始版本：** 7

**系统能力：** SystemCapability.Multimedia.Audio.Device

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## channelMasks

```TypeScript
readonly channelMasks: Array<int>
```

Supported channel masks.

**类型：** Array<int>

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## deviceType

```TypeScript
readonly deviceType: DeviceType
```

Device type.

**类型：** DeviceType

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## deviceRole

```TypeScript
readonly deviceRole: DeviceRole
```

Device role.

**类型：** DeviceRole

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## capabilities

```TypeScript
readonly capabilities?: Array<AudioStreamInfo>
```

Audio stream capabilities supported by the device.

**类型：** Array<AudioStreamInfo>

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Device

## address

```TypeScript
readonly address: string
```

Static MAC address of the device. For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## spatializationSupported

```TypeScript
readonly spatializationSupported?: boolean
```

Whether the device supports spatial audio rendering. **true** if supported, **false** otherwise.

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

## displayName

```TypeScript
readonly displayName: string
```

Display name of the device.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## volumeGroupId

```TypeScript
readonly volumeGroupId: int
```

Volume group id

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## interruptGroupId

```TypeScript
readonly interruptGroupId: int
```

Interrupt group id

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## encodingTypes

```TypeScript
readonly encodingTypes?: Array<AudioEncodingType>
```

Supported encoding types.

**类型：** Array<AudioEncodingType>

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## sampleRates

```TypeScript
readonly sampleRates: Array<int>
```

Supported sampling rates. SystemCapability.Multimedia.Audio.Device

**类型：** Array<int>

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## dmDeviceInfo

```TypeScript
readonly dmDeviceInfo?: string
```

Extended information for distributed device, includes whether the device supports stereo, Device SN, etc.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## highQualityRecordingSupported

```TypeScript
readonly highQualityRecordingSupported?: boolean
```

whether supports high-quality recording.

**类型：** boolean

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## channelCounts

```TypeScript
readonly channelCounts: Array<int>
```

Number of channels supported.

**类型：** Array<int>

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## name

```TypeScript
readonly name: string
```

Device name. For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## model

```TypeScript
readonly model?: string
```

Model of the device.

**类型：** string

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Device

## networkId

```TypeScript
readonly networkId: string
```

Device network id

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**系统接口：** 此接口为系统接口。

## id

```TypeScript
readonly id: int
```

Audio device id.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Device

## dmDeviceType

```TypeScript
readonly dmDeviceType?: int
```

Only {@link DeviceType.SPEAKER} with networkId、{@link DeviceType.REMOTE_CAST} or {@link DeviceType.REMOTE_DAUDIO} has dmDeviceType which indicated deviceTypeId.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

