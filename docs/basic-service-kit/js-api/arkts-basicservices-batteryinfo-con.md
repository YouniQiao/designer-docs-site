# Constants

## batteryCapacityLevel

```TypeScript
const batteryCapacityLevel: BatteryCapacityLevel
```

Battery level of the device.

**Since:** 9

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## batterySOC

```TypeScript
const batterySOC: number
```

Battery state of charge (SoC) of the device, in unit of percentage, which ranges from 0 to 100.

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## batteryTemperature

```TypeScript
const batteryTemperature: number
```

Battery temperature of the device, in unit of 0.1°C.

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## chargingStatus

```TypeScript
const chargingStatus: BatteryChargeState
```

Battery charging state of the current device.

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## healthStatus

```TypeScript
const healthStatus: BatteryHealthState
```

Battery health status of the device.

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## isBatteryPresent

```TypeScript
const isBatteryPresent: boolean
```

Whether the battery is supported or present. The value **true** means that the battery is supported or present; **false** means the opposite. Default value: **false**.

**Since:** 7

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## nowCurrent

```TypeScript
const nowCurrent: number
```

Battery current of the device, in unit of mA.

**Since:** 12

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## pluggedType

```TypeScript
const pluggedType: BatteryPluggedType
```

Charger type of the device.

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## technology

```TypeScript
const technology: string
```

Battery technology of the device.

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## voltage

```TypeScript
const voltage: number
```

Battery voltage of the device, in unit of microvolt.

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

