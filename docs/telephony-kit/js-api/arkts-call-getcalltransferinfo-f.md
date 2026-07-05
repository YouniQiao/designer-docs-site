# getCallTransferInfo

## getCallTransferInfo

```TypeScript
function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>
```

Obtains call transfer information with the phone number.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_CALL_TRANSFER_INFO

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | CallTransferType | Yes | Type of call transfer to be obtained. |
| number | string | Yes | Phone number whose call transfer status is to be obtained.  Whether the SIM card exists will be checked. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CallTransferResult> | - Call transfer status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8401002 | Invalid input call number. |
| 8401003 | Operation too frequent. |

**Example**

```TypeScript
import { call } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let type: call.CallTransferType = call.CallTransferType.TRANSFER_TYPE_UNCONDITIONAL;
let number: string = "138xxxxxxxx";

call.getCallTransferInfo(type, number)
    .then((data: call.CallTransferResult) => {
        console.info(`getCallTransferInfo success, data->${JSON.stringify(data)}`);
    })
    .catch((err:BusinessError) => {
        console.error(`getCallTransferInfo fail, err->${JSON.stringify(err)}`);
    });

```

