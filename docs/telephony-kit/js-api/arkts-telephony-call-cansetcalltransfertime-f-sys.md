# canSetCallTransferTime (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

<a id="cansetcalltransfertime"></a>
## canSetCallTransferTime

```TypeScript
function canSetCallTransferTime(slotId: number, callback: AsyncCallback<boolean>): void
```

Checks whether can set call transfer time.

The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-call-function canSetCallTransferTime(slotId: int, callback: AsyncCallback<boolean>): void--><!--Device-call-function canSetCallTransferTime(slotId: int, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Returns {@code true} if the device can set call transfer time;returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.canSetCallTransferTime(slotId, (err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`canSetCallTransferTime fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`canSetCallTransferTime success, data->${JSON.stringify(data)}`);
    }
});

```


<a id="cansetcalltransfertime-1"></a>
## canSetCallTransferTime

```TypeScript
function canSetCallTransferTime(slotId: number): Promise<boolean>
```

Checks whether can set call transfer time.

The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.

**Since:** 10

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-call-function canSetCallTransferTime(slotId: int): Promise<boolean>--><!--Device-call-function canSetCallTransferTime(slotId: int): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if the device can set call transfer time;returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.canSetCallTransferTime(slotId).then((data: boolean) => {
    console.info(`canSetCallTransferTime success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`canSetCallTransferTime fail, promise: err->${JSON.stringify(err)}`);
});

```

