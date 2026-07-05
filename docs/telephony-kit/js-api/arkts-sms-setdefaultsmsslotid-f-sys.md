# setDefaultSmsSlotId

## setDefaultSmsSlotId

```TypeScript
function setDefaultSmsSlotId(slotId: int, callback: AsyncCallback<void>): void
```

Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the default SIM card for sending SMS messages. The value {@code 0} indicates  card slot 1, and the value {@code 1} indicates card slot 2. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setDefaultSmsSlotId. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.setDefaultSmsSlotId(0, (err: BusinessError) => {
    console.info(`callback: err->${JSON.stringify(err)}.`);
});

```

## setDefaultSmsSlotId

```TypeScript
function setDefaultSmsSlotId(slotId: int): Promise<void>
```

Sets the default SIM card for sending SMS messages. You can obtain the default SIM card by using {@code getDefaultSmsSlotId}.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the default SIM card for sending SMS messages. The value {@code 0} indicates  card slot 1, and the value {@code 1} indicates card slot 2. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setDefaultSmsSlotId. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300004 | Do not have sim card. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.setDefaultSmsSlotId(0).then(() => {
    console.info(`setDefaultSmsSlotId success.`);
}).catch((err: BusinessError) => {
    console.error(`setDefaultSmsSlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

