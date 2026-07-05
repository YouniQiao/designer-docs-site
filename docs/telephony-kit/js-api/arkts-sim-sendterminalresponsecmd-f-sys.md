# sendTerminalResponseCmd

## sendTerminalResponseCmd

```TypeScript
function sendTerminalResponseCmd(slotId: int, cmd: string, callback: AsyncCallback<void>): void
```

Send terminal response command to SIM card.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| cmd | string | Yes | Indicates sending command. |
| callback | AsyncCallback&lt;void> | Yes | The callback of sendTerminalResponseCmd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.sendTerminalResponseCmd(0, "ls", (err: BusinessError) => {
    console.info(`callback: err->${JSON.stringify(err)}`);
});

```

## sendTerminalResponseCmd

```TypeScript
function sendTerminalResponseCmd(slotId: int, cmd: string): Promise<void>
```

Send terminal response command to SIM card.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| cmd | string | Yes | Indicates sending command. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the sendTerminalResponseCmd. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.sendTerminalResponseCmd(0, "ls").then(() => {
    console.info(`sendTerminalResponseCmd success.`);
}).catch((err: BusinessError) => {
    console.error(`sendTerminalResponseCmd failed, promise: err->${JSON.stringify(err)}`);
});

```

