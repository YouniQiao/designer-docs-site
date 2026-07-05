# getAppPowerValue

## getAppPowerValue

```TypeScript
function getAppPowerValue(uid: int): double
```

获取应用的耗电量，单位毫安时。

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 应用的UID。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | UID对应应用的耗电量，单位毫安时。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4600101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    let value = batteryStats.getAppPowerValue(10021);
    console.info('battery statistics value of app is: ' + value);
} catch(err) {
    console.error('get battery statistics value of app failed, err: ' + err);
}

```

