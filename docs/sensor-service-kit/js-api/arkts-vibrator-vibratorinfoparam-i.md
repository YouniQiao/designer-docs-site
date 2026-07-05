# VibratorInfoParam

Defines the vibrator parameters. If **VibratorInfoParam** is left unspecified, an API applies to all vibrators of the local device by default.

**Since:** 19

**System capability:** SystemCapability.Sensors.MiscDevice

## Modules to Import

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## vibratorId

```TypeScript
vibratorId?: int
```

Vibrator ID. The default value is **0**, which indicates all vibrators of the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the vibrator ID.

**Type:** int

**Since:** 19

**System capability:** SystemCapability.Sensors.MiscDevice

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is **-1**, indicating the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the device ID.

**Type:** int

**Since:** 19

**System capability:** SystemCapability.Sensors.MiscDevice

