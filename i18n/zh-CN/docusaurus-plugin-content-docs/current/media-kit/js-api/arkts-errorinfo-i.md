# ErrorInfo

错误信息。

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.SoundPool

## soundId

```TypeScript
soundId?: int
```

发生错误的资源ID，load方法能够获取soundId。

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.SoundPool

## streamId

```TypeScript
streamId?: int
```

发生错误的音频流ID，play方法能够获取streamId。

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.SoundPool

## errorType

```TypeScript
errorType?: ErrorType
```

表示错误发生阶段。

**类型：** ErrorType

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.SoundPool

## errorCode

```TypeScript
errorCode: T
```

错误码。errorCode的类型T为[BusinessError](docroot://reference/apis-basic-services-kit/js-apis-base.md)类型。

**类型：** T

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Media.SoundPool

