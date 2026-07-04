# setNROptionMode (System API)

## Modules to Import

```TypeScript
import { radio } from '@ohos.telephony.radio';
```

## setNROptionMode

```TypeScript
function setNROptionMode(slotId: number, mode: NROptionMode, callback: AsyncCallback<void>): void
```

Set the NR option mode.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot indexnumber supported by the device. |
| mode | NROptionMode | Yes | Indicates the nr option mode to be set. |
| callback | AsyncCallback&lt;void&gt; | Yes | Indicates the callback for getting the option result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.NROptionMode = radio.NROptionMode.NR_OPTION_NSA_ONLY;
radio.setNROptionMode(slotId, mode, (err: BusinessError) => {
    if (err) {
        console.error(`setNROptionMode failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`setNROptionMode success.`);
});

```


## setNROptionMode

```TypeScript
function setNROptionMode(slotId: number, mode: NROptionMode): Promise<void>
```

Set the NR option mode.

**Since:** 10

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot indexnumber supported by the device. |
| mode | NROptionMode | Yes | Indicates the nr option mode to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns option result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.NROptionMode = radio.NROptionMode.NR_OPTION_NSA_ONLY;
radio.setNROptionMode(slotId, mode).then(() => {
    console.info(`setNROptionMode success`);
}).catch((err: BusinessError) => {
    console.error(`setNROptionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

