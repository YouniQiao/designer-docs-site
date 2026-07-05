# @ohos.batteryStatistics

该模块提供软硬件耗电统计信息的查询接口。 > **说明：** > > - 本模块接口为系统接口。

**起始版本：** 8

**系统能力：** SystemCapability.PowerManager.BatteryStatistics

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { batteryStats } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getAppPowerPercent](arkts-batterystats-getapppowerpercent-f-sys.md#getAppPowerPercent-1) | 获取应用的耗电百分比。 |
| <!--DelRow-->[getAppPowerValue](arkts-batterystats-getapppowervalue-f-sys.md#getAppPowerValue-1) | 获取应用的耗电量，单位毫安时。 |
| <!--DelRow-->[getBatteryStats](arkts-batterystats-getbatterystats-f-sys.md#getBatteryStats-1) | 获取耗电信息列表。使用Promise异步回调。 |
| <!--DelRow-->[getBatteryStats](arkts-batterystats-getbatterystats-f-sys.md#getBatteryStats-2) | 获取耗电信息列表。使用callback异步回调。 |
| <!--DelRow-->[getHardwareUnitPowerPercent](arkts-batterystats-gethardwareunitpowerpercent-f-sys.md#getHardwareUnitPowerPercent-1) | 根据耗电类型获取硬件单元的耗电百分比。 |
| <!--DelRow-->[getHardwareUnitPowerValue](arkts-batterystats-gethardwareunitpowervalue-f-sys.md#getHardwareUnitPowerValue-1) | 根据耗电类型获取硬件单元的耗电量，单位毫安时。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BatteryStatsInfo](arkts-batterystats-batterystatsinfo-i-sys.md) | 设备的耗电信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ConsumptionType](arkts-batterystats-consumptiontype-e-sys.md) | 表示电量消耗类型的枚举值。 |

