# AVDataSrcDescriptor

Defines the descriptor of an audio and video file, which is used in DataSource playback mode. Use scenario: An application can create a playback instance and start playback before it finishes downloading the audio and video resources.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## fileSize

```TypeScript
fileSize: long
```

Size of the file, -1 means the file size is unknown, in this case, in byte, seek and setSpeed can't be executed, loop can't be set, and can't replay.

**类型：** long

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## callback

```TypeScript
callback: (buffer: ArrayBuffer, length: long, pos?: long) => int
```

Callback function implemented by users, which is used to fill data. buffer - The buffer need to fill. length - The stream length player want to get, in byte. pos - The stream position player want get start, and is an optional parameter. When fileSize set to -1, this parameter is not used. Returns length of the data to be filled, Return -1 to indicate that the end of the stream is reached, Return -2 to indicate that an unrecoverable error has been encountered.

**类型：** (buffer: ArrayBuffer, length: long, pos?: long) => int

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

