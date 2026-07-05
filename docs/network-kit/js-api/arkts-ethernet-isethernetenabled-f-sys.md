# isEthernetEnabled

## isEthernetEnabled

```TypeScript
function isEthernetEnabled(): boolean
```

Check whether the global ethernet switch is enabled.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if ethernet is globally enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | Internal error. |

