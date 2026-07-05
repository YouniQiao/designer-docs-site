# getBatteryStats

## getBatteryStats

```TypeScript
function getBatteryStats(): Promise<Array<BatteryStatsInfo>>
```

获取耗电信息列表。使用Promise异步回调。

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BatteryStatsInfo>> | Promise对象，返回耗电信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4600101 | Failed to connect to the service. |

**Example**

```TypeScript
batteryStats.getBatteryStats()
.then((data: batteryStats.BatteryStatsInfo[]) => {
    console.info('battery statistics info: ' + data);
})
.catch((err: Error) => {
    console.error('get battery statistics failed, err: ' + err);
});

```

## getBatteryStats

```TypeScript
function getBatteryStats(callback: AsyncCallback<Array<BatteryStatsInfo>>): void
```

获取耗电信息列表。使用callback异步回调。

**Since:** 8

**System capability:** SystemCapability.PowerManager.BatteryStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;BatteryStatsInfo>> | Yes | 回调函数。当获取耗电信息列表成功，err为undefined，data为获取到的Array>；否则为错误对象；AsyncCallback封装了一个BatteryStatsInfo类型的接口。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4600101 | Failed to connect to the service. |

**Example**

```TypeScript
batteryStats.getBatteryStats((err: Error, data : batteryStats.BatteryStatsInfo[]) => {
    if (typeof err === 'undefined') {
        console.info('battery statistics info: ' + data);
    } else {
        console.error('get battery statistics failed, err: ' + err);
    }
});

```

