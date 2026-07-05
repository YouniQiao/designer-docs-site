# onGetSimActiveState

## onGetSimActiveState

```TypeScript
function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void
```

Subscribe to sim active state change events using a callback-based approach as an asynchronous method.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of the target card slot. |
| callback | Callback&lt;boolean> | Yes | Indicates the callback for sim active state |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

let sislotId = 0;
let simActiveState: Callback<boolean> = (isSimActive: boolean) => {
    console.info(`simActiveState slotId ${JSON.stringify(isSimActive)}`);
}
observer.onGetSimActiveState(sislotId, simActiveState);

```

