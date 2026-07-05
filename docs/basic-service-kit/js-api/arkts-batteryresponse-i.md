# BatteryResponse

包含充电状态及剩余电量的对象。

**Since:** 3

**Deprecated since:** 6

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## Modules to Import

```TypeScript
import { GetStatusOptions,BatteryResponse } from '@kit.BasicServicesKit';
```

## level

```TypeScript
level: number
```

当前电池的电量百分比，取值范围：0.00~1.00。 **说明：** 除Lite Wearable外，从API Version 6开始不再维护，建议使用 [`batteryInfo.batterySOC`](docroot://reference/apis-basic-services-kit/js-apis-battery-info.md#常量)替代。

**Type:** number

**Since:** 3

**Deprecated since:** 6

**Substitute:** @ohos.batteryInfo:batteryInfo.batterySOC

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

## charging

```TypeScript
charging: boolean
```

当前电池是否在充电中。true表示在充电，false表示没有充电，默认为false。 **说明：** 除Lite Wearable外，从API Version 6开始不再维护，建议使用 [`batteryInfo.chargingStatus`](docroot://reference/apis-basic-services-kit/js-apis-battery-info.md#常量)替代。

**Type:** boolean

**Since:** 3

**Deprecated since:** 6

**Substitute:** @ohos.batteryInfo:batteryInfo.chargingStatus

**System capability:** SystemCapability.PowerManager.BatteryManager.Lite

