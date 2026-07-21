# createMessage

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

<a id="createmessage"></a>
## createMessage

```TypeScript
function createMessage(pdu: Array<number>, specification: string, callback: AsyncCallback<ShortMessage>): void
```

Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.

<p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol.

**Since:** 6

<!--Device-sms-function createMessage(pdu: Array<int>, specification: string, callback: AsyncCallback<ShortMessage>): void--><!--Device-sms-function createMessage(pdu: Array<int>, specification: string, callback: AsyncCallback<ShortMessage>): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pdu | Array&lt;number&gt; | Yes | Indicates the original data, which is obtained from the received SMS. |
| specification | string | Yes | Indicates the SMS protocol type. The value {@code 3gpp} indicates GSM/UMTS/LTE SMS, and the value {@code 3gpp2} indicates CDMA/LTE SMS. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ShortMessage&gt; | Yes | Indicates the callback for getting an SMS message instance;returns {@code null} if {@code pdu} is empty or {@code specification} is not supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

const specification: string = '3gpp';
// Display PDUs in array format. The type is number.
const pdu: Array<number> = [0x01, 0x00, 0x05, 0x81, 0x01, 0x80, 0xF6, 0x00, 0x00, 0x05, 0xE8, 0x32, 0x9B, 0xFD, 0x06];
sms.createMessage(pdu, specification, (err: BusinessError, data: sms.ShortMessage) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


<a id="createmessage-1"></a>
## createMessage

```TypeScript
function createMessage(pdu: Array<number>, specification: string): Promise<ShortMessage>
```

Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol.

<p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol.

**Since:** 6

<!--Device-sms-function createMessage(pdu: Array<int>, specification: string): Promise<ShortMessage>--><!--Device-sms-function createMessage(pdu: Array<int>, specification: string): Promise<ShortMessage>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pdu | Array&lt;number&gt; | Yes | Indicates the original data, which is obtained from the received SMS. |
| specification | string | Yes | Indicates the SMS protocol type. The value {@code 3gpp} indicates GSM/UMTS/LTE SMS, and the value {@code 3gpp2} indicates CDMA/LTE SMS. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ShortMessage&gt; | Returns an SMS message instance;returns {@code null} if {@code pdu} is empty or {@code specification} is not supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

const specification: string = '3gpp';
// Display PDUs in array format. The type is number.
const pdu: Array<number> = [0x01, 0x00, 0x05, 0x81, 0x01, 0x80, 0xF6, 0x00, 0x00, 0x05, 0xE8, 0x32, 0x9B, 0xFD, 0x06];
sms.createMessage(pdu, specification).then((data: sms.ShortMessage) => {
    console.info(`createMessage success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`createMessage failed, promise: err->${JSON.stringify(err)}`);
});

```

