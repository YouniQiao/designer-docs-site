# getVoiceMailIdentifier

## getVoiceMailIdentifier

```TypeScript
function getVoiceMailIdentifier(slotId: int, callback: AsyncCallback<string>): void
```

Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;string> | Yes | Indicates the callback for getting the voice mailbox alpha identifier;  returns an empty string if no voice mailbox alpha identifier is written into the SIM card. |

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

sim.getVoiceMailIdentifier(0, (err: BusinessError, data: string) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getVoiceMailIdentifier

```TypeScript
function getVoiceMailIdentifier(slotId: int): Promise<string>
```

Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from {@code 0} to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the voice mailbox alpha identifier;  returns an empty string if no voice mailbox alpha identifier is written into the SIM card. |

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

sim.getVoiceMailIdentifier(0).then((data: string) => {
    console.info(`getVoiceMailIdentifier success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getVoiceMailIdentifier failed, promise: err->${JSON.stringify(err)}`);
});

```

