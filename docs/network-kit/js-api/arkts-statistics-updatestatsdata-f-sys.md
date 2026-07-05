# updateStatsData

## updateStatsData

```TypeScript
function updateStatsData(): Promise<void>
```

Updates network statistics data.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

