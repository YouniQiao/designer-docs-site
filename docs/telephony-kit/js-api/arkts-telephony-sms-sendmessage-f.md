# sendMessage

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

<a id="sendmessage"></a>
## sendMessage

```TypeScript
function sendMessage(options: SendMessageOptions): void
```

Sends a text or data SMS message.

<p>This method checks whether the length of an SMS message exceeds the maximum length. If the maximum length is exceeded, the SMS message is split into multiple parts and sent separately.

**Since:** 6

**Deprecated since:** 10

**Substitutes:** sendShortMessage

**Required permissions:** ohos.permission.SEND_MESSAGES

<!--Device-sms-function sendMessage(options: SendMessageOptions): void--><!--Device-sms-function sendMessage(options: SendMessageOptions): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SendMessageOptions](../../apis-arkui/arkts-apis/arkts-arkui-featureability-sendmessageoptions-i.md) | Yes | Indicates the parameters and callback for sending the SMS message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';

let sendCallback: AsyncCallback<sms.ISendShortMessageCallback> = (err: BusinessError, data: sms.ISendShortMessageCallback) => {
    console.info(`sendCallback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`); 
};
let deliveryCallback: AsyncCallback<sms.IDeliveryShortMessageCallback> = (err: BusinessError, data: sms.IDeliveryShortMessageCallback) => {
    console.info(`deliveryCallback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`); 
};
let options: sms.SendMessageOptions = {
    slotId: 0,
    content: 'SMS message content',
    destinationHost: '+861xxxxxxxxxx',
    serviceCenter: '+861xxxxxxxxxx',
    destinationPort: 1000,
    sendCallback: sendCallback,
    deliveryCallback: deliveryCallback
};
sms.sendMessage(options);

```

