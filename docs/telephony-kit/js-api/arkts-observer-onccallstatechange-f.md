# onCCallStateChange

## onCCallStateChange

```TypeScript
function onCCallStateChange(callback: Callback<CCallStateInfo>, options?: ObserverOptions): void
```

Called when the carrier call state changes.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_CALL_FOR_DEVICES

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CCallStateInfo> | Yes | Indicates the callback for getting the carrier call state. |
| options | ObserverOptions | No |  |

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
let options: observer.ObserverOptions = {
    slotId: 0
}

observer.onCCallStateChange(callback, options);
observer.onCCallStateChange(callback);

```

