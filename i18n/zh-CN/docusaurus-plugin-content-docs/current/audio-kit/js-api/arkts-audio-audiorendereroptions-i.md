# AudioRendererOptions

Describes audio renderer configurations.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## rendererInfo

```TypeScript
rendererInfo: AudioRendererInfo
```

Describes audio renderer information.

**类型：** AudioRendererInfo

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## originalAppIdInfo

```TypeScript
originalAppIdInfo?: AppIdInfo
```

Indicates the original app ID of the audio stream.

**类型：** AppIdInfo

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## streamInfo

```TypeScript
streamInfo: AudioStreamInfo
```

Describes audio stream information.

**类型：** AudioStreamInfo

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## privacyType

```TypeScript
privacyType?: AudioPrivacyType
```

Whether the audio stream can be recorded by other applications. The default value is **0**.

**类型：** AudioPrivacyType

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

