# enableEthernetInterface

## enableEthernetInterface

```TypeScript
function enableEthernetInterface(): Promise<void>
```

Enable the ethernet interface.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned when the ethernet interface is enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |

