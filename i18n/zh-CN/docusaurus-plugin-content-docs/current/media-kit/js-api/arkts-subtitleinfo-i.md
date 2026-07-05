# SubtitleInfo

Provides subtitle information. When a subtitle update event is subscribed to, the information about the external subtitle is returned through a callback. Can be synchronized to the time reported by AVPlayer#timeUpdate event

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.Core

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## duration

```TypeScript
duration?: int
```

Duration of the text to be displayed, as milliseconds.

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## startTime

```TypeScript
startTime?: int
```

Display start time of the text, as milliseconds.

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

## text

```TypeScript
text?: string
```

Text information of current update event.

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

