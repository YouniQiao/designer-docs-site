# cancelMuted (System API)

## Modules to Import

```TypeScript
import { call } from '@ohos.telephony.call';
```

## cancelMuted

```TypeScript
function cancelMuted(callback: AsyncCallback<void>): void
```

Unmute during a call.

**Since:** 8

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of cancelMuted. |

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

call.cancelMuted((err: BusinessError) => {
    if (err) {
        console.error(`cancelMuted fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`cancelMuted success.`);
    }
});

```


## cancelMuted

```TypeScript
function cancelMuted(): Promise<void>
```

Unmute during a call.

**Since:** 8

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the cancelMuted. |

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

call.cancelMuted().then(() => {
    console.info(`cancelMuted success.`);
}).catch((err: BusinessError) => {
    console.error(`cancelMuted fail, promise: err->${JSON.stringify(err)}`);
});

```

