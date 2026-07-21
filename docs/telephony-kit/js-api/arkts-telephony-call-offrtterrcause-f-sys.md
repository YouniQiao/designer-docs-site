# offRttErrCause (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="offrtterrcause"></a>
## offRttErrCause

```TypeScript
function offRttErrCause(callback?: Callback<RttErrorInfo>): void
```

Unsubscribe from the rtt error report event.

**Since:** 22

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function offRttErrCause(callback?: Callback<RttErrorInfo>): void--><!--Device-call-function offRttErrCause(callback?: Callback<RttErrorInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;RttErrorInfo&gt; | No | Indicates the callback for getting the rtt error report. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| 8400001 | Invalid parameter value. |
| 8400002 | Operation failed. Cannot connect to service. |
| 8400003 | System internal error. |
| 8400999 | Unknown error code. |

