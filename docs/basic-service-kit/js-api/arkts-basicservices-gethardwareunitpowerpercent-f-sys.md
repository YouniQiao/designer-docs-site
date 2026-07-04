# getHardwareUnitPowerPercent (System API)

## Modules to Import

```TypeScript
import { batteryStats } from '@ohos.batteryStatistics';
```

## getHardwareUnitPowerPercent

```TypeScript
function getHardwareUnitPowerPercent(type: ConsumptionType): number
```

Obtains the proportion of the power consumption of a hardware unit according to the power consumption type.

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ConsumptionType | Yes | Power consumption type. The value must be an enum. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Proportion of the power consumption of the hardware unit corresponding to the power consumptiontype, which ranges from 0.00 to 1.00. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Parameter verification failed. |
| [4600101](../../apis-basic-services-kit/errorcode-batteryStatistics.md#4600101-service-connection-failure) | Failed to connect to the service. |

**Example**

```TypeScript
try {
    let percent = batteryStats.getHardwareUnitPowerPercent(batteryStats.ConsumptionType.CONSUMPTION_TYPE_SCREEN);
    console.info('battery statistics percent of hardware is: ' + percent);
} catch(err) {
    console.error('get battery statistics percent of hardware failed, err: ' + err);
}

```

