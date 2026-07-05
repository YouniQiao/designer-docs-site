# startRtt

## startRtt

```TypeScript
function startRtt(callId: int, type: ImsRttMode): Promise<void>
```

Start rtt.

**Since:** 22

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| type | ImsRttMode | Yes | Indicates the type of operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the startRtt. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

