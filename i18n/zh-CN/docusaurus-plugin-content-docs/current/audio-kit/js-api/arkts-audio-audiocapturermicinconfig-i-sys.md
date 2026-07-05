# AudioCapturerMicInConfig

Describes audio capturer configuration that can capture microphone input (mic-in) audio data before any processing.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## ecStreamInfo

```TypeScript
ecStreamInfo?: AudioStreamInfo
```

Stream information that describes echo reference signal. If not set this attribute, the capturer will only record Mic-In audio stream.

**类型：** AudioStreamInfo

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## micInStreamInfo

```TypeScript
micInStreamInfo: AudioStreamInfo
```

Stream information that describes Mic-In audio stream.

**类型：** AudioStreamInfo

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## capturerInfo

```TypeScript
capturerInfo: AudioCapturerInfo
```

Capturer attribute information.

**类型：** AudioCapturerInfo

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## processedStreamInfo

```TypeScript
processedStreamInfo?: AudioStreamInfo
```

Stream information that describes the processed audio stream.

**类型：** AudioStreamInfo

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

