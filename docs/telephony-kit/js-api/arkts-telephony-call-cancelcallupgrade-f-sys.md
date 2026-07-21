# cancelCallUpgrade (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="cancelcallupgrade"></a>
## cancelCallUpgrade

```TypeScript
function cancelCallUpgrade(callId: number): Promise<void>
```

Cancel call upgrade when voice call upgrade to video call.

**Since:** 11

**Required permissions:** ohos.permission.PLACE_CALL

<!--Device-call-function cancelCallUpgrade(callId: int): Promise<void>--><!--Device-call-function cancelCallUpgrade(callId: int): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | number | Yes | Indicates the identifier of the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the cancelCallUpgrade. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.cancelCallUpgrade(1).then(() => {
    console.info(`cancelCallUpgrade success.`);
}).catch((err: BusinessError) => {
    console.error(`cancelCallUpgrade fail, promise: err->${JSON.stringify(err)}`);
});

```

