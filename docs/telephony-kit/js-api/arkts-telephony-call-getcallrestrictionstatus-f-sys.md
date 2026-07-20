# getCallRestrictionStatus (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## getCallRestrictionStatus

```TypeScript
function getCallRestrictionStatus(slotId: number, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void
```

Get call barring status.

**Since:** 8

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-call-function getCallRestrictionStatus(slotId: int, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void--><!--Device-call-function getCallRestrictionStatus(slotId: int, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| type | [CallRestrictionType](arkts-telephony-call-callrestrictiontype-e-sys.md) | Yes | Indicates which type of call restriction to obtain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<RestrictionStatus> | Yes | Indicates the callback for getting the call restriction status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallRestrictionStatus(0, 1, (err: BusinessError, data: call.RestrictionStatus) => {
    if (err) {
        console.error(`getCallRestrictionStatus fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getCallRestrictionStatus success, data->${JSON.stringify(data)}`);
    }
});

```


## getCallRestrictionStatus

```TypeScript
function getCallRestrictionStatus(slotId: number, type: CallRestrictionType): Promise<RestrictionStatus>
```

Get call barring status.

**Since:** 8

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-call-function getCallRestrictionStatus(slotId: int, type: CallRestrictionType): Promise<RestrictionStatus>--><!--Device-call-function getCallRestrictionStatus(slotId: int, type: CallRestrictionType): Promise<RestrictionStatus>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| type | [CallRestrictionType](arkts-telephony-call-callrestrictiontype-e-sys.md) | Yes | Indicates which type of call restriction to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<RestrictionStatus> | Returns the call restriction status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2. Incorrect parameters types; |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Operation failed. Cannot connect to service. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallRestrictionStatus(0, 1).then((data: call.RestrictionStatus) => {
    console.info(`getCallRestrictionStatus success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallRestrictionStatus fail, promise: err->${JSON.stringify(err)}`);
});

```

