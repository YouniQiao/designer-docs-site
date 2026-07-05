# delSimMessage (System API)

## Modules to Import

```TypeScript
import { sms } from '@ohos.telephony.sms';
```

## delSimMessage

```TypeScript
function delSimMessage(slotId: number, msgIndex: number, callback: AsyncCallback<void>): void
```

Delete an SMS Message from the SIM card.

**Since:** 7

**Required permissions:** ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot indexnumber supported by the device. |
| msgIndex | number | Yes | Indicates the message index. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of delSimMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let msgIndex: number = 1;
sms.delSimMessage(slotId, msgIndex, (err: BusinessError) => {
      console.info(`callback: err->${JSON.stringify(err)}`);
});

```


## delSimMessage

```TypeScript
function delSimMessage(slotId: number, msgIndex: number): Promise<void>
```

Delete an SMS Message from the SIM card.

**Since:** 7

**Required permissions:** ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot indexnumber supported by the device. |
| msgIndex | number | Yes | Indicates the message index. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the delSimMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let msgIndex: number = 1;
let promise = sms.delSimMessage(slotId, msgIndex);
promise.then(() => {
    console.info(`delSimMessage success.`);
}).catch((err: BusinessError) => {
    console.error(`delSimMessage failed, promise: err->${JSON.stringify(err)}`);
});

```

