# setDefaultCellularDataSlotId (System API)

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## setDefaultCellularDataSlotId

```TypeScript
function setDefaultCellularDataSlotId(slotId: number, callback: AsyncCallback<void>): void
```

Switch cellular data services to another card, without changing the default settings.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-data-function setDefaultCellularDataSlotId(slotId: int, callback: AsyncCallback<void>): void--><!--Device-data-function setDefaultCellularDataSlotId(slotId: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the ID of the target card slot.The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of setDefaultCellularDataSlotId. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |
| [8301001](../errorcode-telephony.md#8301001-sim-card-not-activated) | SIM card is not activated. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.setDefaultCellularDataSlotId(0, (err: BusinessError) => {
    if(err) {
        console.error(`setDefaultCellularDataSlotId fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`setDefaultCellularDataSlotId success`);
    }
});

```


## setDefaultCellularDataSlotId

```TypeScript
function setDefaultCellularDataSlotId(slotId: number): Promise<void>
```

Switch cellular data services to another card, without changing the default settings.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-data-function setDefaultCellularDataSlotId(slotId: int): Promise<void>--><!--Device-data-function setDefaultCellularDataSlotId(slotId: int): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the ID of the target card slot.The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the setDefaultCellularDataSlotId. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |
| [8301001](../errorcode-telephony.md#8301001-sim-card-not-activated) | SIM card is not activated. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.setDefaultCellularDataSlotId(0).then(() => {
    console.info(`setDefaultCellularDataSlotId success.`);
}).catch((err: BusinessError) => {
    console.error(`setDefaultCellularDataSlotId fail. code: ${err.code}, message: ${err.message}`);
});

```

