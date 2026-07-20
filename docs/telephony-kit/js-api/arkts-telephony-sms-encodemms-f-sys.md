# encodeMms (System API)

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## encodeMms

```TypeScript
function encodeMms(mms: MmsInformation, callback: AsyncCallback<Array<number>>): void
```

Encode the message content.

**Since:** 8

<!--Device-sms-function encodeMms(mms: MmsInformation, callback: AsyncCallback<Array<int>>): void--><!--Device-sms-function encodeMms(mms: MmsInformation, callback: AsyncCallback<Array<int>>): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mms | [MmsInformation](arkts-telephony-sms-mmsinformation-i-sys.md) | Yes | Indicates MMS messages. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<number>> | Yes | Indicates the callback for getting the result of MMS encoding. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3. Parameter verification failed. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let mmsAcknowledgeInd: sms.MmsAcknowledgeInd = {
    transactionId: "100",
    version: sms.MmsVersionType.MMS_VERSION_1_0,
    reportAllowed: sms.ReportType.MMS_YES
};
let mmsInformation: sms.MmsInformation = {
    messageType: sms.MessageType.TYPE_MMS_ACKNOWLEDGE_IND,
    mmsType: mmsAcknowledgeInd
};
sms.encodeMms(mmsInformation, (err: BusinessError, data: number[]) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## encodeMms

```TypeScript
function encodeMms(mms: MmsInformation): Promise<Array<number>>
```

Encode the message content.

**Since:** 8

<!--Device-sms-function encodeMms(mms: MmsInformation): Promise<Array<int>>--><!--Device-sms-function encodeMms(mms: MmsInformation): Promise<Array<int>>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mms | [MmsInformation](arkts-telephony-sms-mmsinformation-i-sys.md) | Yes | Indicates MMS messages. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<number>> | Returns the result of MMS encoding. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3. Parameter verification failed. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let mmsAcknowledgeInd: sms.MmsAcknowledgeInd = {
    transactionId: "100",
    version: sms.MmsVersionType.MMS_VERSION_1_0,
    reportAllowed: sms.ReportType.MMS_YES
};
let mmsInformation: sms.MmsInformation = {
    messageType: sms.MessageType.TYPE_MMS_ACKNOWLEDGE_IND,
    mmsType: mmsAcknowledgeInd
};
sms.encodeMms(mmsInformation).then((data: number[]) => {
    console.info(`encodeMms success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`encodeMms failed, promise: err->${JSON.stringify(err)}`);
});

```

