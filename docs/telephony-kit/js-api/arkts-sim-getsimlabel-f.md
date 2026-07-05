# getSimLabel

## getSimLabel

```TypeScript
function getSimLabel(slotId: int, callback: AsyncCallback<SimLabel>): void
```

Obtains the SIM card label.

**Since:** 20

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | SIM card slot ID. |
| callback | AsyncCallback&lt;SimLabel> | Yes | Callback used to return the SIM card label. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimLabel(0, (err: BusinessError, data: sim.SimLabel) => {
  console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getSimLabel

```TypeScript
function getSimLabel(slotId: int): Promise<SimLabel>
```

Obtains the SIM card label.

**Since:** 20

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | SIM card slot ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SimLabel> | Promise used to return the SIM card label. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimLabel(0).then((data: sim.SimLabel) => {
  console.info(`getSimLabel success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getSimState failed, promise: err->${JSON.stringify(err)}`);
});

```

