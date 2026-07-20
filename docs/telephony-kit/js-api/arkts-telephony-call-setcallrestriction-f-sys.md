# setCallRestriction (System API)

## Modules to Import

```TypeScript
import { call } from '@kit.TelephonyKit';
```

## setCallRestriction

```TypeScript
function setCallRestriction(slotId: number, info: CallRestrictionInfo, callback: AsyncCallback<void>): void
```

Set call barring status.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function setCallRestriction(slotId: int, info: CallRestrictionInfo, callback: AsyncCallback<void>): void--><!--Device-call-function setCallRestriction(slotId: int, info: CallRestrictionInfo, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| info | [CallRestrictionInfo](arkts-telephony-call-callrestrictioninfo-i-sys.md) | Yes | Indicates the set call restriction information. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The callback of setCallRestriction. |

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

let callRestrictionInfo: call.CallRestrictionInfo = {
    type: call.CallRestrictionType.RESTRICTION_TYPE_ALL_OUTGOING,
    password: "123456",
    mode: call.CallRestrictionMode.RESTRICTION_MODE_ACTIVATION
}
call.setCallRestriction(0, callRestrictionInfo, (err: BusinessError) => {
    if (err) {
        console.error(`setCallRestriction fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setCallRestriction success.`);
    }
});

```


## setCallRestriction

```TypeScript
function setCallRestriction(slotId: number, info: CallRestrictionInfo): Promise<void>
```

Set call barring status.

**Since:** 8

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

<!--Device-call-function setCallRestriction(slotId: int, info: CallRestrictionInfo): Promise<void>--><!--Device-call-function setCallRestriction(slotId: int, info: CallRestrictionInfo): Promise<void>-End-->

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| info | [CallRestrictionInfo](arkts-telephony-call-callrestrictioninfo-i-sys.md) | Yes | Indicates the set call restriction information. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the setCallRestriction. |

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

let callRestrictionInfo: call.CallRestrictionInfo = {
    type: call.CallRestrictionType.RESTRICTION_TYPE_ALL_INCOMING,
    password: "123456",
    mode: call.CallRestrictionMode.RESTRICTION_MODE_ACTIVATION
}
call.setCallRestriction(0, callRestrictionInfo).then(() => {
    console.info(`setCallRestriction success.`);
}).catch((err: BusinessError) => {
    console.error(`setCallRestriction fail, promise: err->${JSON.stringify(err)}`);
});

```

