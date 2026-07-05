# @ohos.batteryInfo

该模块主要提供电池状态和充放电状态的查询接口。

**Since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Core

## Modules to Import

```TypeScript
import { batteryInfo } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getBatteryConfig](arkts-batteryinfo-getbatteryconfig-f-sys.md#getBatteryConfig-1) | 按场景名称查询电池配置。 |
| <!--DelRow-->[isBatteryConfigSupported](arkts-batteryinfo-isbatteryconfigsupported-f-sys.md#isBatteryConfigSupported-1) | 检查是否按场景名称启用电池配置。 |
| <!--DelRow-->[setBatteryConfig](arkts-batteryinfo-setbatteryconfig-f-sys.md#setBatteryConfig-1) | 按场景名称设置电池配置。 |

### Enums

| Name | Description |
| --- | --- |
| [BatteryCapacityLevel](arkts-batteryinfo-batterycapacitylevel-e.md) | 表示电池电量等级的枚举。 |
| [BatteryChargeState](arkts-batteryinfo-batterychargestate-e.md) | 表示电池充电状态的枚举。 |
| [BatteryHealthState](arkts-batteryinfo-batteryhealthstate-e.md) | 表示电池健康状态的枚举。 |
| [BatteryPluggedType](arkts-batteryinfo-batterypluggedtype-e.md) | 表示连接的充电器类型的枚举。 |
| [CommonEventBatteryChangedKey](arkts-batteryinfo-commoneventbatterychangedkey-e.md) | 表示COMMON_EVENT_BATTERY_CHANGED通用事件附加信息的查询键。 |

### Constants

| Name | Description |
| --- | --- |
| [batteryCapacityLevel](arkts-batteryinfo-con.md#batteryCapacityLevel) | 表示当前设备电池电量的等级。 |
| [batterySOC](arkts-batteryinfo-con.md#batterySOC) | 表示当前设备剩余电池电量百分比，取值范围是[0，100]。 |
| [batteryTemperature](arkts-batteryinfo-con.md#batteryTemperature) | 表示当前设备电池的温度，单位0.1摄氏度。 |
| [chargingStatus](arkts-batteryinfo-con.md#chargingStatus) | 表示当前设备电池的充电状态。 |
| <!--DelRow-->[estimatedRemainingChargeTime](arkts-batteryinfo-con-sys.md#estimatedRemainingChargeTime) | 表示当前设备充满电的预估时间，单位毫秒。此接口为系统接口。 |
| [healthStatus](arkts-batteryinfo-con.md#healthStatus) | 表示当前设备电池的健康状态。 |
| [isBatteryPresent](arkts-batteryinfo-con.md#isBatteryPresent) | 表示当前设备是否支持电池或者电池是否在位。true表示支持电池或电池在位，false表示不支持电池或电池不在位，默认为false。 |
| [nowCurrent](arkts-batteryinfo-con.md#nowCurrent) | 表示当前设备电池的电流，单位毫安。 |
| [pluggedType](arkts-batteryinfo-con.md#pluggedType) | 表示当前设备连接的充电器类型。 |
| <!--DelRow-->[remainingEnergy](arkts-batteryinfo-con-sys.md#remainingEnergy) | 表示当前设备电池的剩余容量，单位毫安时。此接口为系统接口。 |
| [technology](arkts-batteryinfo-con.md#technology) | 表示当前设备电池的技术型号。 |
| <!--DelRow-->[totalEnergy](arkts-batteryinfo-con-sys.md#totalEnergy) | 表示当前设备电池的总容量，单位毫安时。此接口为系统接口。 |
| [voltage](arkts-batteryinfo-con.md#voltage) | 表示当前设备电池的电压，单位微伏。 |

