# getEuiccProfileInfoList

## getEuiccProfileInfoList

```TypeScript
function getEuiccProfileInfoList(slotId: int): Promise<GetEuiccProfileInfoListResult>
```

Returns a list of all eUICC profile information.

**Since:** 18

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GetEuiccProfileInfoListResult> | Return a list of eUICC profile information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.getEuiccProfileInfoList(1).then((data: eSIM.GetEuiccProfileInfoListResult) => {
    console.info(`getEuiccProfileInfoList, GetEuiccProfileInfoListResult: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError<void>) => {
    console.error(`getEuiccProfileInfoList, GetEuiccProfileInfoListResult: err->${JSON.stringify(err)}`);
});

```

