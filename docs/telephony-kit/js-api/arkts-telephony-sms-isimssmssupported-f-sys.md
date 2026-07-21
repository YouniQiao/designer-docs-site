# isImsSmsSupported (System API)

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

<a id="isimssmssupported"></a>
## isImsSmsSupported

```TypeScript
function isImsSmsSupported(slotId: number, callback: AsyncCallback<boolean>): void
```

SMS over IMS is supported if IMS is registered and SMS is supported on IMS.

**Since:** 8

<!--Device-sms-function isImsSmsSupported(slotId: int, callback: AsyncCallback<boolean>): void--><!--Device-sms-function isImsSmsSupported(slotId: int, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the default SIM card for Ims Sms. The value {@code 0} indicates card slot 1,and the value {@code 1} indicates card slot 2. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Indicates the callback of isImsSmsSupported.Returns {@code true} if SMS over IMS is supported, {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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
sms.isImsSmsSupported(slotId, (err: BusinessError, data: boolean) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


<a id="isimssmssupported-1"></a>
## isImsSmsSupported

```TypeScript
function isImsSmsSupported(slotId: number): Promise<boolean>
```

SMS over IMS is supported if IMS is registered and SMS is supported on IMS.

**Since:** 8

<!--Device-sms-function isImsSmsSupported(slotId: int): Promise<boolean>--><!--Device-sms-function isImsSmsSupported(slotId: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the default SIM card for Ims Sms. The value {@code 0} indicates card slot 1,and the value {@code 1} indicates card slot 2. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if SMS over IMS is supported, {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
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
let promise = sms.isImsSmsSupported(slotId);
promise.then((data: boolean) => {
    console.info(`isImsSmsSupported success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isImsSmsSupported failed, promise: err->${JSON.stringify(err)}`);
});

```

