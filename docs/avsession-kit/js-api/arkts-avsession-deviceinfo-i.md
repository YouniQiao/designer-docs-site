# DeviceInfo

Device Information Definition

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## deviceType

```TypeScript
deviceType: DeviceType
```

device type.

**Type:** DeviceType

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## supportedDrmCapabilities

```TypeScript
supportedDrmCapabilities?: Array<string>
```

The drm capability supported by current device, each drm is represented by uuid.

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## hiPlayDeviceInfo

```TypeScript
hiPlayDeviceInfo?: HiPlayDeviceInfo
```

HiPlayDeviceInfo is used to obtain device-specific information for HiPlay. transmit info during casting.

**Type:** HiPlayDeviceInfo

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## isLegacy

```TypeScript
isLegacy?: boolean
```

Indicates the current device is legacy or not.

**Type:** boolean

**Since:** 13

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## mediumTypes

```TypeScript
mediumTypes?: int
```

Medium types used to discover devices. 1: BLE 2: COAP

**Type:** int

**Since:** 13

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## audioCapabilities

```TypeScript
audioCapabilities?: AudioCapabilities
```

Audio capabilities supported by the device.

**Type:** AudioCapabilities

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## ipAddress

```TypeScript
ipAddress?: string
```

device ip address if available.

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## castCategory

```TypeScript
castCategory: AVCastCategory
```

The playback type supported by the device. See {@link AVCastCategory}

**Type:** AVCastCategory

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## supportedProtocols

```TypeScript
supportedProtocols?: int
```

The protocols supported by current device, can be union of {@link ProtocolType}.

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## deviceName

```TypeScript
deviceName: string
```

Device name. The length of the deviceName array is greater than 1 if output to multiple devices at the same time.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## deviceId

```TypeScript
deviceId: string
```

Audio device id.The length of the audioDeviceId array is greater than 1 if output to multiple devices at the same time.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## manufacturer

```TypeScript
manufacturer?: string
```

Device manufacturer.

**Type:** string

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## modelName

```TypeScript
modelName?: string
```

Device model name.

**Type:** string

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## providerId

```TypeScript
providerId?: int
```

device provider which supplies the route capability.

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## networkId

```TypeScript
networkId?: string
```

Network id.

**Type:** string

**Since:** 13

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## authenticationStatus

```TypeScript
authenticationStatus?: int
```

Define different authentication status. 0: Device not authenticated. 1: Device already authenticated.

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

## supportedPullClients

```TypeScript
supportedPullClients?: Array<int>
```

Whether the device supports pull-end playback, including a collection of pull-end client IDs.

**Type:** Array<int>

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

