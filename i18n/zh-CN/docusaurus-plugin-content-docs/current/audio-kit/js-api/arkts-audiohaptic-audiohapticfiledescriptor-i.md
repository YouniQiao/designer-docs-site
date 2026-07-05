# AudioHapticFileDescriptor

Describes the audio-haptic file descriptor. > **NOTE** > > Ensure that **fd** is an available file descriptor and the values of **offset** and **length** are correct.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## 导入模块

```TypeScript
import { audioHaptic } from '@kit.AudioKit';
```

## offset

```TypeScript
offset?: long
```

Offset for reading data from the file, in bytes. By default, the offset is 0.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## length

```TypeScript
length?: long
```

Number of bytes to read. By default, the length is the number of bytes remaining in the file from the offset position.

**类型：** long

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## fd

```TypeScript
fd: int
```

File descriptor of the audio-haptic file, which is generally greater than or equal to 0.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

