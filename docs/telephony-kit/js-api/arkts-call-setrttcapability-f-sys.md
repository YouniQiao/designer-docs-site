# setRttCapability

## setRttCapability

```TypeScript
function setRttCapability(accountId: int, isEnable: boolean): Promise<void>
```

Set rtt capability.

**Since:** 22

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accountId | int | Yes | Indicates the identifier of the account to set rtt capability. |
| isEnable | boolean | Yes | Indicates whether Rtt capability is enabled. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setRttCapability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

