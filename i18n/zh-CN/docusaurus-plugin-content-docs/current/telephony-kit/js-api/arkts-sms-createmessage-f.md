# createMessage

## createMessage

```TypeScript
function createMessage(pdu: Array<int>, specification: string, callback: AsyncCallback<ShortMessage>): void
```

Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol. <p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pdu | Array&lt;int> | 是 | Indicates the original data, which is obtained from the received SMS. |
| specification | string | 是 | Indicates the SMS protocol type. The value {@code 3gpp} indicates GSM/UMTS/LTE  SMS, and the value {@code 3gpp2} indicates CDMA/LTE SMS. |
| callback | AsyncCallback&lt;ShortMessage> | 是 | Indicates the callback for getting an SMS message instance;  returns {@code null} if {@code pdu} is empty or {@code specification} is not supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

const specification: string = '3gpp';
// 以数组的形式显示协议数据单元(PDU)，类型为number。
const pdu: Array<number> = [0x01, 0x00, 0x05, 0x81, 0x01, 0x80, 0xF6, 0x00, 0x00, 0x05, 0xE8, 0x32, 0x9B, 0xFD, 0x06];
sms.createMessage(pdu, specification, (err: BusinessError, data: sms.ShortMessage) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## createMessage

```TypeScript
function createMessage(pdu: Array<int>, specification: string): Promise<ShortMessage>
```

Creates an SMS message instance based on the protocol data unit (PDU) and the specified SMS protocol. <p>After receiving the original PDU data, the system creates an SMS message instance according to the specified SMS protocol.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pdu | Array&lt;int> | 是 | Indicates the original data, which is obtained from the received SMS. |
| specification | string | 是 | Indicates the SMS protocol type. The value {@code 3gpp} indicates GSM/UMTS/LTE  SMS, and the value {@code 3gpp2} indicates CDMA/LTE SMS. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ShortMessage> | Returns an SMS message instance;  returns {@code null} if {@code pdu} is empty or {@code specification} is not supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

const specification: string = '3gpp';
// 以数组的形式显示协议数据单元(PDU)，类型为number。
const pdu: Array<number> = [0x01, 0x00, 0x05, 0x81, 0x01, 0x80, 0xF6, 0x00, 0x00, 0x05, 0xE8, 0x32, 0x9B, 0xFD, 0x06];
sms.createMessage(pdu, specification).then((data: sms.ShortMessage) => {
    console.info(`createMessage success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`createMessage failed, promise: err->${JSON.stringify(err)}`);
});

```

