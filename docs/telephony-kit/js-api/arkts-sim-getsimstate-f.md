# getSimState

## getSimState

```TypeScript
function getSimState(slotId: int, callback: AsyncCallback<SimState>): void
```

Obtains the state of the SIM card in a specified slot.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;SimState> | Yes | Indicates the callback for getting one of the following SIM card states:   {@code SimState#SIM_STATE_UNKNOWN}  {@code SimState#SIM_STATE_NOT_PRESENT}  {@code SimState#SIM_STATE_LOCKED}  {@code SimState#SIM_STATE_NOT_READY}  {@code SimState#SIM_STATE_READY}  {@code SimState#SIM_STATE_LOADED} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimState(0, (err: BusinessError, data: sim.SimState) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getSimState

```TypeScript
function getSimState(slotId: int): Promise<SimState>
```

Obtains the state of the SIM card in a specified slot.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SimState> | Returns one of the following SIM card states:   {@code SimState#SIM_STATE_UNKNOWN}  {@code SimState#SIM_STATE_NOT_PRESENT}  {@code SimState#SIM_STATE_LOCKED}  {@code SimState#SIM_STATE_NOT_READY}  {@code SimState#SIM_STATE_READY}  {@code SimState#SIM_STATE_LOADED} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimState(0).then((data: sim.SimState) => {
    console.info(`getSimState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSimState failed, promise: err->${JSON.stringify(err)}`);
});

```

