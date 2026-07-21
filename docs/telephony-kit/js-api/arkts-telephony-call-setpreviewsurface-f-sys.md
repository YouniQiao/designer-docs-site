# setPreviewSurface (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="setpreviewsurface"></a>
## setPreviewSurface

```TypeScript
function setPreviewSurface(callId: number, surfaceId: string): Promise<void>
```

Set preview surface when video call.

**Since:** 11

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function setPreviewSurface(callId: int, surfaceId: string): Promise<void>--><!--Device-call-function setPreviewSurface(callId: int, surfaceId: string): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | number | Yes | Indicates the identifier of the call. |
| surfaceId | string | Yes | Indicates the identifier of the preview surface id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the setPreviewWindow. |

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

call.setPreviewSurface(1, "surfaceId1").then(() => {
    console.info(`setPreviewSurface success.`);
}).catch((err: BusinessError) => {
    console.error(`setPreviewSurface fail, promise: err->${JSON.stringify(err)}`);
});

```

