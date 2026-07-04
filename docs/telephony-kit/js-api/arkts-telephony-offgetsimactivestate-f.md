# offGetSimActiveState

## Modules to Import

```TypeScript
import { observer } from '@ohos.telephony.observer';
```

## offGetSimActiveState

```TypeScript
function offGetSimActiveState(callback?: Callback<boolean>): void
```

Cancel callback when the sim active state is updated.

**Since:** 23

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.StateRegistry

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | No | Indicates the callback to unsubscribe from the simActiveStateChange event. |

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

let simActiveState: Callback<boolean> = (isSimActive: boolean) => {
    console.info(`simActiveState slotId ${JSON.stringify(isSimActive)}`);
}
observer.offGetSimActiveState(simActiveState);

```

