# hasOperatorPrivileges

## hasOperatorPrivileges

```TypeScript
function hasOperatorPrivileges(slotId: int, callback: AsyncCallback<boolean>): void
```

Checks whether your application (the caller) has been granted the operator permissions.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;boolean> | Yes | Indicates the callback of hasOperatorPrivileges.  Returns {@code true} if your application has been granted the operator permissions; returns {@code false} otherwise.  If no SIM card is inserted or the SIM card is deactivated will be return {@code false}. |

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

sim.hasOperatorPrivileges(0, (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## hasOperatorPrivileges

```TypeScript
function hasOperatorPrivileges(slotId: int): Promise<boolean>
```

Checks whether your application (the caller) has been granted the operator permissions.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if your application has been granted the operator permissions;  returns {@code false} otherwise. If no SIM card is inserted or the SIM card is deactivated will be  return {@code false}. |

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

sim.hasOperatorPrivileges(0).then((data: boolean) => {
    console.info(`hasOperatorPrivileges success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`hasOperatorPrivileges failed, promise: err->${JSON.stringify(err)}`);
});

```

