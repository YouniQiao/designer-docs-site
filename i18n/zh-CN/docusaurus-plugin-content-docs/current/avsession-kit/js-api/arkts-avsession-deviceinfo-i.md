# DeviceInfo

Device Information Definition

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## deviceType

```TypeScript
deviceType: DeviceType
```

device type.

**类型：** DeviceType

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## supportedDrmCapabilities

```TypeScript
supportedDrmCapabilities?: Array<string>
```

The drm capability supported by current device, each drm is represented by uuid.

**类型：** Array<string>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## hiPlayDeviceInfo

```TypeScript
hiPlayDeviceInfo?: HiPlayDeviceInfo
```

HiPlayDeviceInfo is used to obtain device-specific information for HiPlay. transmit info during casting.

**类型：** HiPlayDeviceInfo

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## isLegacy

```TypeScript
isLegacy?: boolean
```

Indicates the current device is legacy or not.

**类型：** boolean

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## mediumTypes

```TypeScript
mediumTypes?: int
```

Medium types used to discover devices. 1: BLE 2: COAP

**类型：** int

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## audioCapabilities

```TypeScript
audioCapabilities?: AudioCapabilities
```

Audio capabilities supported by the device.

**类型：** AudioCapabilities

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## ipAddress

```TypeScript
ipAddress?: string
```

device ip address if available.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## castCategory

```TypeScript
castCategory: AVCastCategory
```

The playback type supported by the device. See {@link AVCastCategory}

**类型：** AVCastCategory

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## supportedProtocols

```TypeScript
supportedProtocols?: int
```

The protocols supported by current device, can be union of {@link ProtocolType}.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## deviceName

```TypeScript
deviceName: string
```

Device name. The length of the deviceName array is greater than 1 if output to multiple devices at the same time.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## deviceId

```TypeScript
deviceId: string
```

Audio device id.The length of the audioDeviceId array is greater than 1 if output to multiple devices at the same time.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## manufacturer

```TypeScript
manufacturer?: string
```

Device manufacturer.

**类型：** string

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## modelName

```TypeScript
modelName?: string
```

Device model name.

**类型：** string

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## providerId

```TypeScript
providerId?: int
```

device provider which supplies the route capability.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## networkId

```TypeScript
networkId?: string
```

Network id.

**类型：** string

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## authenticationStatus

```TypeScript
authenticationStatus?: int
```

Define different authentication status. 0: Device not authenticated. 1: Device already authenticated.

**类型：** int

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## supportedPullClients

```TypeScript
supportedPullClients?: Array<int>
```

Whether the device supports pull-end playback, including a collection of pull-end client IDs.

**类型：** Array<int>

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

