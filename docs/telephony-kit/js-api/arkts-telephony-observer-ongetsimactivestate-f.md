# onGetSimActiveState

## Modules to Import

```TypeScript
import { observer } from '@kit.TelephonyKit';
```

<a id="ongetsimactivestate"></a>
## onGetSimActiveState

```TypeScript
function onGetSimActiveState(slotId: number, callback: Callback<boolean>): void
```

Subscribe to sim active state change events using a callback-based approach as an asynchronous method.

**Since:** 23

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-observer-function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void--><!--Device-observer-function onGetSimActiveState(slotId: int, callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the ID of the target card slot. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | Yes | Indicates the callback for sim active state |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

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

