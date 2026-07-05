# ProtocolType

```TypeScript
enum ProtocolType
```

Define different protocol capability

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## TYPE_LOCAL

```TypeScript
TYPE_LOCAL = 0
```

The default cast type "local", media can be routed on the same device, including internal speakers or audio jack on the device itself, A2DP devices.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## TYPE_CAST_PLUS_MIRROR

```TypeScript
TYPE_CAST_PLUS_MIRROR = 1
```

Cast+ mirror capability

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## TYPE_CAST_PLUS_STREAM

```TypeScript
TYPE_CAST_PLUS_STREAM = 2
```

The Cast+ Stream indicating the media is presenting on a different device the application need get an AVCastController to control remote playback.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## TYPE_DLNA

```TypeScript
TYPE_DLNA = 4
```

The DLNA type indicates the device supports DLNA protocol, the application needs to get an AVCastController to control remote playback.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## TYPE_CAST_PLUS_AUDIO

```TypeScript
TYPE_CAST_PLUS_AUDIO = 8
```

This type indicates the device supports audio casting with high definition to get a better sound quality.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

