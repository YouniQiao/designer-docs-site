# AudioCapturerMicInData

Describes audio capturer data that contains processed audio data and microphone input (mic-in) audio data before any processing.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## micInData

```TypeScript
micInData: ArrayBuffer
```

Microphone input audio data buffer.

**类型：** ArrayBuffer

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## ecData

```TypeScript
ecData?: ArrayBuffer
```

Echo reference audio data buffer. If capturer config does not set ecStreamInfo, this buffer will be null. See {@link #AudioCapturerMicInConfig} for details.

**类型：** ArrayBuffer

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## data

```TypeScript
data: ArrayBuffer
```

Processed audio data buffer.

**类型：** ArrayBuffer

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

