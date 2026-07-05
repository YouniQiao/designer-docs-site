# cancelCallUpgrade

## cancelCallUpgrade

```TypeScript
function cancelCallUpgrade(callId: int): Promise<void>
```

Cancel call upgrade when voice call upgrade to video call.

**Since:** 11

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the cancelCallUpgrade. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.cancelCallUpgrade(1).then(() => {
    console.info(`cancelCallUpgrade success.`);
}).catch((err: BusinessError) => {
    console.error(`cancelCallUpgrade fail, promise: err->${JSON.stringify(err)}`);
});

```

