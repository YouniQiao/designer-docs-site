# setSimLabelIndex

## setSimLabelIndex

```TypeScript
function setSimLabelIndex(simId: int, simLabelIndex: int): Promise<void>
```

Set the SIM card labelIndex.

**Since:** 23

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | int | Yes | Indicates the sim Id for card from sim account information.  Value range:[1,500] |
| simLabelIndex | int | Yes | Indicates the simlabel index for card. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setSimLabelIndex. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.setSimLabelIndex(1,  0).then(() => {
    console.info(`setSimLabelIndex success.`);
}).catch((err: BusinessError) => {
    console.error(`setSimLabelIndex failed, promise: err->${JSON.stringify(err)}`);
});

```

