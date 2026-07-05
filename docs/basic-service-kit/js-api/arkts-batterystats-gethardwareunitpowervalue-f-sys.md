# getHardwareUnitPowerValue

## getHardwareUnitPowerValue

```TypeScript
function getHardwareUnitPowerValue(type: ConsumptionType): double
```

根据耗电类型获取硬件单元的耗电量，单位毫安时。

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ConsumptionType | Yes | 电量消耗类型；该参数类型是枚举类。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 电量消耗类型对应硬件的耗电量，单位毫安时。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4600101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    let value = batteryStats.getHardwareUnitPowerValue(batteryStats.ConsumptionType.CONSUMPTION_TYPE_SCREEN);
    console.info('battery statistics value of hardware is: ' + value);
} catch(err) {
    console.error('get battery statistics percent of hardware failed, err: ' + err);
}

```

