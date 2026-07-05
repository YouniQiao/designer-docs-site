# getActiveSimAccountInfoList

## getActiveSimAccountInfoList

```TypeScript
function getActiveSimAccountInfoList(callback: AsyncCallback<Array<IccAccountInfo>>): void
```

Get the list of active SIM card account information.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;IccAccountInfo>> | Yes | The callback is used to  return the array of {@link IccAccountInfo}. The ICCID and phone number will be null  if has no ohos.permission.GET_TELEPHONY_STATE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getActiveSimAccountInfoList((err: BusinessError, data: Array<sim.IccAccountInfo>) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getActiveSimAccountInfoList

```TypeScript
function getActiveSimAccountInfoList(): Promise<Array<IccAccountInfo>>
```

Get the list of active SIM card account information.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;IccAccountInfo>> | Returns the array of {@link IccAccountInfo}. The ICCID  and phone number will be null if has no ohos.permission.GET_TELEPHONY_STATE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getActiveSimAccountInfoList().then((data: Array<sim.IccAccountInfo>) => {
    console.info(`getActiveSimAccountInfoList success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getActiveSimAccountInfoList failed, promise: err->${JSON.stringify(err)}`);
});

```

