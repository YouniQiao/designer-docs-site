# onReceiveRttMessage (System API)

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## onReceiveRttMessage

```TypeScript
function onReceiveRttMessage(callback: Callback<RttMessageInfo>): void
```

Subscribe to the rtt message event.

**Since:** 22

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RttMessageInfo&gt; | Yes | Indicates the callback for getting the rtt message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

