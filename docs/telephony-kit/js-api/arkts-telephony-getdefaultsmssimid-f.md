# getDefaultSmsSimId

## Modules to Import

```TypeScript
import { sms } from '@ohos.telephony.sms';
```

## getDefaultSmsSimId

```TypeScript
function getDefaultSmsSimId(callback: AsyncCallback<number>): void
```

Obtains the default SIM ID for sending SMS messages.

**Since:** 10

**System capability:** SystemCapability.Telephony.SmsMms

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Returns the SIM ID of the default sms sim andSIM ID will increase from 1. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | Do not have sim card. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |
| [8301001](../errorcode-telephony.md#8301001-sim-card-not-activated) | SIM card is not activated. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getDefaultSmsSimId((err: BusinessError, data: number) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getDefaultSmsSimId

```TypeScript
function getDefaultSmsSimId(): Promise<number>
```

Obtains the default SIM ID for sending SMS messages.

**Since:** 10

**System capability:** SystemCapability.Telephony.SmsMms

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the SIM ID of the default sms sim andSIM ID will increase from 1. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | Do not have sim card. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |
| [8301001](../errorcode-telephony.md#8301001-sim-card-not-activated) | SIM card is not activated. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let promise = sms.getDefaultSmsSimId();
promise.then((data: number) => {
    console.info(`getDefaultSmsSimId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getDefaultSmsSimId failed, promise: err->${JSON.stringify(err)}`);
});

```

