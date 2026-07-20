# isNewCallAllowed (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## isNewCallAllowed

```TypeScript
function isNewCallAllowed(callback: AsyncCallback<boolean>): void
```

Judge whether to allow another new call.

**Since:** 8

<!--Device-call-function isNewCallAllowed(callback: AsyncCallback<boolean>): void--><!--Device-call-function isNewCallAllowed(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | The callback of isNewCallAllowed. Returns {@code true} if the device currently allows new calls; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.isNewCallAllowed((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`isNewCallAllowed fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`isNewCallAllowed success, data->${JSON.stringify(data)}`);
    }
});

```


## isNewCallAllowed

```TypeScript
function isNewCallAllowed(): Promise<boolean>
```

Judge whether to allow another new call.

**Since:** 8

<!--Device-call-function isNewCallAllowed(): Promise<boolean>--><!--Device-call-function isNewCallAllowed(): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Returns {@code true} If the device currently allows new calls.Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.isNewCallAllowed().then((data: boolean) => {
    console.info(`isNewCallAllowed success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isNewCallAllowed fail, promise: err->${JSON.stringify(err)}`);
});

```

