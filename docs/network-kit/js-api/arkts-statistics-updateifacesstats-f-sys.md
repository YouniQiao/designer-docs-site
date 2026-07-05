# updateIfacesStats

## updateIfacesStats

```TypeScript
function updateIfacesStats(iface: string, start: int, end: int, stats: NetStatsInfo): Promise<void>
```

Updates network interface statistics data.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Network interface name. |
| start | int | Yes | Start timestamp for the statistics data to update. |
| end | int | Yes | End timestamp for the statistics data to update. |
| stats | NetStatsInfo | Yes | Network statistics information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

