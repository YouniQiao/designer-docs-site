# @ohos.batteryStatistics

The **batteryStatistics** module provides APIs for querying software and hardware power consumption statistics.

> **NOTE**
>
> - The APIs provided by this module are system APIs.

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { batteryStats } from '@kit.BasicServicesKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getAppPowerPercent](arkts-basicservices-getapppowerpercent-f-sys.md#getapppowerpercent-1) | Obtains the proportion of the power consumption of an application. |
| [getAppPowerValue](arkts-basicservices-getapppowervalue-f-sys.md#getapppowervalue-1) | Obtains the power consumption of an application, in unit of mAh. |
| [getBatteryStats](arkts-basicservices-getbatterystats-f-sys.md#getbatterystats-1) | Obtains the power consumption information list. This API uses a promise to return the result. |
| [getBatteryStats](arkts-basicservices-getbatterystats-f-sys.md#getbatterystats-2) | Obtains the power consumption information list. This API uses an asynchronous callback to return the result. |
| [getHardwareUnitPowerPercent](arkts-basicservices-gethardwareunitpowerpercent-f-sys.md#gethardwareunitpowerpercent-1) | Obtains the proportion of the power consumption of a hardware unit according to the power consumption type. |
| [getHardwareUnitPowerValue](arkts-basicservices-gethardwareunitpowervalue-f-sys.md#gethardwareunitpowervalue-1) | Obtains the power consumption of a hardware unit according to the consumption type, in unit of mAh. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BatteryStatsInfo](arkts-basicservices-batterystatsinfo-i-sys.md) | Describes the device power consumption information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ConsumptionType](arkts-basicservices-consumptiontype-e-sys.md) | Enumerates power consumption types. |
<!--DelEnd-->

