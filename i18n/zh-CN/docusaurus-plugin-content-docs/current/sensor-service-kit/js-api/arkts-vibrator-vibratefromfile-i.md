# VibrateFromFile

Represents a custom vibration pattern. It is supported only by certain devices. An error code will be returned if a device does not support this vibration mode. You can pass **VibrateFromFile** to [VibrateEffect9+]vibrator.VibrateEffect to specify a custom vibration pattern when calling [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>) or [vibrator.startVibration9+]vibrator.startVibration(effect: VibrateEffect, attribute: VibrateAttribute).

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## hapticFd

```TypeScript
hapticFd: HapticFileDescriptor
```

File descriptor (FD) of the vibration configuration file.

**类型：** HapticFileDescriptor

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

## type

```TypeScript
type: 'file'
```

The value **file** means vibration according to a vibration configuration file.

**类型：** 'file'

**起始版本：** 10

**系统能力：** SystemCapability.Sensors.MiscDevice

