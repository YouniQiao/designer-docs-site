# setDeviceDirection

## setDeviceDirection

```TypeScript
function setDeviceDirection(callId: int, deviceDirection: DeviceDirection): Promise<void>
```

Set device direction when video call.

**Since:** 11

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| deviceDirection | DeviceDirection | Yes | Indicates the identifier of the direction for the display. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setDeviceDirection. |

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

call.setDeviceDirection(1, 0).then(() => {
    console.info(`setDeviceDirection success.`);
}).catch((err: BusinessError) => {
    console.error(`setDeviceDirection fail, promise: err->${JSON.stringify(err)}`);
});

```

