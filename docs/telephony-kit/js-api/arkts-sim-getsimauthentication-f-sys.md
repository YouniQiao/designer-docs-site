# getSimAuthentication

## getSimAuthentication

```TypeScript
function getSimAuthentication(slotId: int, authType: AuthType, authData: string): Promise<SimAuthenticationResponse>
```

Performs SIM card authentication.

**Since:** 14

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Sim slot id. |
| authType | AuthType | Yes | The authentication type. |
| authData | string | Yes | Ser password or other authentication information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SimAuthenticationResponse> | A string the response of authentication.This value will be null in  the following cases: Authentication error, incorrect MAC Authentication error, security context not supported Key  freshness failure Authentication error, no memory space available Authentication error, no memory space available  in EFMUK. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card. |
| 8300999 | Unknown error. |
| 8301002 | An error occurred when operating the SIM card. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimAuthentication(0, sim.AuthType.SIM_AUTH_EAP_SIM_TYPE, "test").then(() => {
    console.info(`getSimAuthentication success.`);
}).catch((err: BusinessError) => {
    console.error(`getSimAuthentication failed, promise: err->${JSON.stringify(err)}`);
});

```

