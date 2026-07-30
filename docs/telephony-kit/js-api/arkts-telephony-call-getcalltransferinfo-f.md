# getCallTransferInfo

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## getCallTransferInfo

```TypeScript
function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>
```

Obtains call transfer information with the phone number.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_CALL_TRANSFER_INFO

<!--Device-call-function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>--><!--Device-call-function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [CallTransferType](arkts-telephony-call-calltransfertype-e-sys.md) | Yes | Type of call transfer to be obtained. |
| number | string | Yes | Phone number whose call transfer status is to be obtained.Whether the SIM card exists will be checked. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CallTransferResult&gt; | - Call transfer status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.* |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8401002](../errorcode-telephony.md#8401002-incorrect-number) | Invalid input call number. |
| [8401003](../errorcode-telephony.md#8401003-frequent-operations) | Operation too frequent.* |

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

