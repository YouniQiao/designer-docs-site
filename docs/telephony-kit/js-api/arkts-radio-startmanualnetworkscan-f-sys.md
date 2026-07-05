# startManualNetworkScan

## startManualNetworkScan

```TypeScript
function startManualNetworkScan(slotId: int, callback: Callback<NetworkSearchRealTimeResult>): void
```

start ManualNetworkScan , Real-time report.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |
| callback | Callback&lt;NetworkSearchRealTimeResult> | Yes | Indicates the callback for manual network scan |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

