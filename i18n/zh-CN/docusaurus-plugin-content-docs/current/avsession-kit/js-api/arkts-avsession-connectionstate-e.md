# ConnectionState

```TypeScript
enum ConnectionState
```

Define the device connection state.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## STATE_CONNECTING

```TypeScript
STATE_CONNECTING = 0
```

A connection state indicating the device is in the process of connecting.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## STATE_CONNECTED

```TypeScript
STATE_CONNECTED = 1
```

A connection state indicating the device is connected.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## STATE_DISCONNECTED

```TypeScript
STATE_DISCONNECTED = 6
```

The default connection state indicating the device is disconnected.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## STATE_AUTHENTICATING

```TypeScript
STATE_AUTHENTICATING = 10
```

Authenticating with a remote device.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## STATE_MIRROR_TO_STREAM

```TypeScript
STATE_MIRROR_TO_STREAM = 11
```

Mirroring to the stream.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## STATE_STREAM_TO_MIRROR

```TypeScript
STATE_STREAM_TO_MIRROR = 12
```

Streaming to the mirror.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

