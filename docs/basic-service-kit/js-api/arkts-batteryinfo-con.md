# Constants

## batterySOC

```TypeScript
const batterySOC: number
```

表示当前设备剩余电池电量百分比，取值范围是[0，100]。

**Since:** 6

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## chargingStatus

```TypeScript
const chargingStatus: BatteryChargeState
```

表示当前设备电池的充电状态。

**Since:** 6

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## healthStatus

```TypeScript
const healthStatus: BatteryHealthState
```

表示当前设备电池的健康状态。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## pluggedType

```TypeScript
const pluggedType: BatteryPluggedType
```

表示当前设备连接的充电器类型。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## voltage

```TypeScript
const voltage: number
```

表示当前设备电池的电压，单位微伏。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## technology

```TypeScript
const technology: string
```

表示当前设备电池的技术型号。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## batteryTemperature

```TypeScript
const batteryTemperature: number
```

表示当前设备电池的温度，单位0.1摄氏度。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## isBatteryPresent

```TypeScript
const isBatteryPresent: boolean
```

表示当前设备是否支持电池或者电池是否在位。true表示支持电池或电池在位，false表示不支持电池或电池不在位，默认为false。

**Since:** 7

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## batteryCapacityLevel

```TypeScript
const batteryCapacityLevel: BatteryCapacityLevel
```

表示当前设备电池电量的等级。

**Since:** 9

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## nowCurrent

```TypeScript
const nowCurrent: number
```

表示当前设备电池的电流，单位毫安。

**Since:** 12

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

