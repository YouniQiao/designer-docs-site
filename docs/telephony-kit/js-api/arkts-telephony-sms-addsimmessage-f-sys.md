# addSimMessage (System API)

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

<a id="addsimmessage"></a>
## addSimMessage

```TypeScript
function addSimMessage(options: SimMessageOptions, callback: AsyncCallback<void>): void
```

Add an SMS Message to SIM card.

**Since:** 7

**Required permissions:** ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES

<!--Device-sms-function addSimMessage(options: SimMessageOptions, callback: AsyncCallback<void>): void--><!--Device-sms-function addSimMessage(options: SimMessageOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SimMessageOptions](arkts-telephony-sms-simmessageoptions-i-sys.md) | Yes | Indicates SIM message options. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of addSimMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
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

let simMessageOptions: sms.SimMessageOptions = {
    slotId: 0,
    smsc: "test",
    pdu: "xxxxxx",
    status: sms.SimMessageStatus.SIM_MESSAGE_STATUS_READ
};
sms.addSimMessage(simMessageOptions, (err: BusinessError) => {
      console.info(`callback: err->${JSON.stringify(err)}`);
});

```


<a id="addsimmessage-1"></a>
## addSimMessage

```TypeScript
function addSimMessage(options: SimMessageOptions): Promise<void>
```

Add an SMS Message to SIM card.

**Since:** 7

**Required permissions:** ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES

<!--Device-sms-function addSimMessage(options: SimMessageOptions): Promise<void>--><!--Device-sms-function addSimMessage(options: SimMessageOptions): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SimMessageOptions](arkts-telephony-sms-simmessageoptions-i-sys.md) | Yes | Indicates SIM message options. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the addSimMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
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

let simMessageOptions: sms.SimMessageOptions = {
    slotId: 0,
    smsc: "test",
    pdu: "xxxxxx",
    status: sms.SimMessageStatus.SIM_MESSAGE_STATUS_READ
};
sms.addSimMessage(simMessageOptions).then(() => {
    console.info(`addSimMessage success.`);
}).catch((err: BusinessError) => {
    console.error(`addSimMessage failed, promise: err->${JSON.stringify(err)}`);
});

```

