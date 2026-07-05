# AudioDeviceDescriptor

Describes an audio device.

**Since:** 7

**System capability:** SystemCapability.Multimedia.Audio.Device

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## channelMasks

```TypeScript
readonly channelMasks: Array<int>
```

Supported channel masks.

**Type:** Array<int>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## deviceType

```TypeScript
readonly deviceType: DeviceType
```

Device type.

**Type:** DeviceType

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## deviceRole

```TypeScript
readonly deviceRole: DeviceRole
```

Device role.

**Type:** DeviceRole

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## capabilities

```TypeScript
readonly capabilities?: Array<AudioStreamInfo>
```

Audio stream capabilities supported by the device.

**Type:** Array<AudioStreamInfo>

**Since:** 22

**System capability:** SystemCapability.Multimedia.Audio.Device

## address

```TypeScript
readonly address: string
```

Static MAC address of the device. For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## spatializationSupported

```TypeScript
readonly spatializationSupported?: boolean
```

Whether the device supports spatial audio rendering. **true** if supported, **false** otherwise.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

## displayName

```TypeScript
readonly displayName: string
```

Display name of the device.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## volumeGroupId

```TypeScript
readonly volumeGroupId: int
```

Volume group id

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

## interruptGroupId

```TypeScript
readonly interruptGroupId: int
```

Interrupt group id

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

## encodingTypes

```TypeScript
readonly encodingTypes?: Array<AudioEncodingType>
```

Supported encoding types.

**Type:** Array<AudioEncodingType>

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## sampleRates

```TypeScript
readonly sampleRates: Array<int>
```

Supported sampling rates. SystemCapability.Multimedia.Audio.Device

**Type:** Array<int>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## dmDeviceInfo

```TypeScript
readonly dmDeviceInfo?: string
```

Extended information for distributed device, includes whether the device supports stereo, Device SN, etc.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## highQualityRecordingSupported

```TypeScript
readonly highQualityRecordingSupported?: boolean
```

whether supports high-quality recording.

**Type:** boolean

**Since:** 21

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## channelCounts

```TypeScript
readonly channelCounts: Array<int>
```

Number of channels supported.

**Type:** Array<int>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## name

```TypeScript
readonly name: string
```

Device name. For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## model

```TypeScript
readonly model?: string
```

Model of the device.

**Type:** string

**Since:** 22

**System capability:** SystemCapability.Multimedia.Audio.Device

## networkId

```TypeScript
readonly networkId: string
```

Device network id

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**System API:** This is a system API.

## id

```TypeScript
readonly id: int
```

Audio device id.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Device

## dmDeviceType

```TypeScript
readonly dmDeviceType?: int
```

Only {@link DeviceType.SPEAKER} with networkId、{@link DeviceType.REMOTE_CAST} or {@link DeviceType.REMOTE_DAUDIO} has dmDeviceType which indicated deviceTypeId.

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

