# setVoiceMailInfo

## setVoiceMailInfo

```TypeScript
function setVoiceMailInfo(slotId: int, mailName: string, mailNumber: string, callback: AsyncCallback<void>): void
```

Sets the voice mail information.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |
| mailName | string | Yes | Indicates the name of voice mail. |
| mailNumber | string | Yes | Indicates the number of voice mail. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setVoiceMailInfo. |

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
| 8301002 | The SIM card failed to read or update data. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.setVoiceMailInfo(0, "mail", "xxx@xxx.com", (err: BusinessError) => {
    console.info(`callback: err->${JSON.stringify(err)}`);
});

```

## setVoiceMailInfo

```TypeScript
function setVoiceMailInfo(slotId: int, mailName: string, mailNumber: string): Promise<void>
```

Sets the voice mail information.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |
| mailName | string | Yes | Indicates the name of voice mail. |
| mailNumber | string | Yes | Indicates the number of voice mail. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setVoiceMailInfo. |

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
| 8301002 | The SIM card failed to read or update data. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.setVoiceMailInfo(0, "mail", "xxx@xxx.com").then(() => {
    console.info(`setVoiceMailInfo success.`);
}).catch((err: BusinessError) => {
    console.error(`setVoiceMailInfo failed, promise: err->${JSON.stringify(err)}`);
});

```

