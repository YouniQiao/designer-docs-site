# VibratorInfoParam

Defines the vibrator parameters. If **VibratorInfoParam** is left unspecified, an API applies to all vibrators of the local device by default.

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

## 导入模块

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## vibratorId

```TypeScript
vibratorId?: int
```

Vibrator ID. The default value is **0**, which indicates all vibrators of the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the vibrator ID.

**类型：** int

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is **-1**, indicating the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the device ID.

**类型：** int

**起始版本：** 19

**系统能力：** SystemCapability.Sensors.MiscDevice

