# setSmscAddr

## setSmscAddr

```TypeScript
function setSmscAddr(slotId: int, smscAddr: string, callback: AsyncCallback<void>): void
```

Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of the slot holding the SIM card for sending SMS messages. |
| smscAddr | string | Yes | Indicates the SMSC address. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setSmscAddr. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let smscAddr: string = '+861xxxxxxxxxx';
sms.setSmscAddr(slotId, smscAddr, (err: BusinessError) => {
      console.info(`callback: err->${JSON.stringify(err)}`);
});

```

## setSmscAddr

```TypeScript
function setSmscAddr(slotId: int, smscAddr: string): Promise<void>
```

Sets the address for the Short Message Service Center (SMSC) based on a specified slot ID.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of the slot holding the SIM card for sending SMS messages. |
| smscAddr | string | Yes | Indicates the SMSC address. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setSmscAddr. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let smscAddr: string = '+861xxxxxxxxxx';
sms.setSmscAddr(slotId, smscAddr).then(() => {
    console.info(`setSmscAddr success.`);
}).catch((err: BusinessError) => {
    console.error(`setSmscAddr failed, promise: err->${JSON.stringify(err)}`);
});

```

