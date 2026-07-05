# VibrateAttribute

Describes the vibration attribute.

**Since:** 9

**System capability:** SystemCapability.Sensors.MiscDevice

## Modules to Import

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
```

## systemUsage

```TypeScript
systemUsage?: boolean
```

Indicates whether to bypass system management switches.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Sensors.MiscDevice

**System API:** This is a system API.

## usage

```TypeScript
usage: Usage
```

Vibration scenario. The default value is **unknown**. The value must be an enum defined in [Usage]vibrator.Usage.

**Type:** Usage

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.MiscDevice

## id

```TypeScript
id?: int
```

Vibrator ID. The default value is **0**.

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Sensors.MiscDevice

## deviceId

```TypeScript
deviceId?: int
```

Device ID. The default value is **-1**, indicating the local device. Since API version 19, you can use [getVibratorInfoSync]vibrator.getVibratorInfoSync or [on]vibrator.on to query the device ID. This API can be used in atomic services since API version 19.

**Type:** int

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Sensors.MiscDevice

