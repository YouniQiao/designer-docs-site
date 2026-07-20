# offCCallStateChange

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

## offCCallStateChange

```TypeScript
function offCCallStateChange(callback?: Callback<CCallStateInfo>): void
```

Unsubscribes from the callback for listening to the carrier call state.

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_CALL_FOR_DEVICES

<!--Device-observer-function offCCallStateChange(callback?: Callback<CCallStateInfo>): void--><!--Device-observer-function offCCallStateChange(callback?: Callback<CCallStateInfo>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CCallStateInfo> | No | Indicates the callback to unsubscribe from. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [8800001](../errorcode-telephony.md#8800001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8800002](../errorcode-telephony.md#8800002-service-connection-error) | Service connection failed. |
| [8800003](../errorcode-telephony.md#8800003-system-internal-error) | System internal error. |
| [8800999](../errorcode-telephony.md#8800999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { call, observer } from '@kit.TelephonyKit';

let callback: (data: observer.CCallStateInfo) => void = (data: observer.CCallStateInfo) => {
    console.info("onCCallStateChange, data:" + JSON.stringify(data));
}

observer.offCCallStateChange(callback);
observer.offCCallStateChange();

```

