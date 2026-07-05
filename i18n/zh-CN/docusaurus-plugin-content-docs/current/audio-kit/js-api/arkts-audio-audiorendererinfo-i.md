# AudioRendererInfo

Describes audio renderer information.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## rendererFlags

```TypeScript
rendererFlags: int
```

Flags that control the renderer behavior. Set this parameter to **0**.

**类型：** int

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## usage

```TypeScript
usage: StreamUsage
```

Audio stream usage.

**类型：** StreamUsage

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## content

```TypeScript
content?: ContentType
```

Audio content type.

**类型：** ContentType

**起始版本：** 8

**废弃版本：** 10

**替代接口：** ohos.multimedia.audio.AudioRendererInfo#usage

**系统能力：** SystemCapability.Multimedia.Audio.Core

## volumeMode

```TypeScript
volumeMode?: AudioVolumeMode
```

Audio volume mode config. If volumeMode is set to {@link AudioVolumeMode.APP_INDIVIDUAL}, this audio renderer will be affected by app volume percentage set by {@link setAppVolumePercentage}

**类型：** AudioVolumeMode

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Volume

