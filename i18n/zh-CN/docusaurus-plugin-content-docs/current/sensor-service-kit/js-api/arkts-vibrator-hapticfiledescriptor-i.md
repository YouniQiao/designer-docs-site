# HapticFileDescriptor

Describes the FD of a custom vibration configuration file. Ensure that the file is available, and the parameters in it can be obtained from the sandbox path through the [fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen) API or from the HAP resource through the [getRawFd](../../apis-localization-kit/arkts-apis/arkts-resourcemanager-resourcemanager-i.md#getRawFd) API. The application scenario is as follows: The vibration sequence is stored in a file and vibration needs to be triggered based on the offset and length. For details about the storage format of the vibration sequence, see [Vibration Effect Description](docroot://device/sensor/vibrator-guidelines.md#vibration-effect-description).

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## offset

```TypeScript
offset?: long
```

Offset from the start position of the file, in bytes. The default value is the start position of the file, and the value cannot exceed the valid range of the file.

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

## length

```TypeScript
length?: long
```

Resource length, in bytes. The default value is the length from the offset position to the end of the file, and the value cannot exceed the valid range of the file.

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

## fd

```TypeScript
fd: int
```

FD of the custom vibration configuration file.

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

