# offCCallStateChange

## offCCallStateChange

```TypeScript
function offCCallStateChange(callback?: Callback<CCallStateInfo>): void
```

Unsubscribes from the callback for listening to the carrier call state.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_CALL_FOR_DEVICES

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CCallStateInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 8800001 | Invalid parameter value. |
| 8800002 | Service connection failed. |
| 8800003 | System internal error. |
| 8800999 | Unknown error. |

**Example**

```TypeScript
import { call, observer } from '@kit.TelephonyKit';

let callback: (data: observer.CCallStateInfo) => void = (data: observer.CCallStateInfo) => {
    console.info("onCCallStateChange, data:" + JSON.stringify(data));
}

observer.offCCallStateChange(callback);
observer.offCCallStateChange();

```

