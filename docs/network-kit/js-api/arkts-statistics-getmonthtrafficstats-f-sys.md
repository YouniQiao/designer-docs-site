# getMonthTrafficStats

## getMonthTrafficStats

```TypeScript
function getMonthTrafficStats(simId: int): Promise<long>
```

Get this month traffic data of the cellular network.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | int | Yes | The id of the specified sim card. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | The statistics of the simId in this month. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |

