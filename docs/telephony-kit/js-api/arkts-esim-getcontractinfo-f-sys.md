# getContractInfo

## getContractInfo

```TypeScript
function getContractInfo(slotId: int, requestData: ContractRequestData) : Promise<string>
```

Get contract info

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |
| requestData | ContractRequestData | Yes | request infomation required to get contract infomation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the contract info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
try {
    let request: eSIM.ContractRequestData = {
        publicKey: "",
        nonce: "",
        pkid: ""
    }
    let contractInfo: string = await eSIM.getContractInfo(1, request);
    console.info(`contract info is:` + contractInfo);
} catch (err) {
    console.error(`getContractInfo, promise: err->${JSON.stringify(err)}`)
}

```

