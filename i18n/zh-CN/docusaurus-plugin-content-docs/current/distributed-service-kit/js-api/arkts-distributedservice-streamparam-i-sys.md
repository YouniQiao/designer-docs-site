# StreamParam（系统接口）

Streaming configuration parameters.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## bitrate

```TypeScript
bitrate?: number
```

This value indicates video bitrate, default 80(kbps). Only valid on the sender side.

**类型：** number

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## colorSpaceConversionTarget

```TypeScript
colorSpaceConversionTarget?: colorSpaceManager.ColorSpace
```

The target color space for conversion. Currently, only BT709_LIMIT is supported. If the video format on the sender side is HDR and needs to be converted to SDR during transmission, this parameter should be set.

**类型：** colorSpaceManager.ColorSpace

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## name

```TypeScript
name: string
```

Stream name, the receive end must be consistent with the transmit end.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

## role

```TypeScript
role: StreamRole
```

Stream transmission role, which can be a receive stream or a transmit stream.

**类型：** StreamRole

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**系统接口：** 此接口为系统接口。

