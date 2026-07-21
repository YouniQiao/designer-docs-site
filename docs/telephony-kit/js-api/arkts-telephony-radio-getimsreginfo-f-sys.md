# getImsRegInfo (System API)

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="getimsreginfo"></a>
## getImsRegInfo

```TypeScript
function getImsRegInfo(slotId: number, imsType: ImsServiceType, callback: AsyncCallback<ImsRegInfo>): void
```

Get the IMS registration state info of specified IMS service type.

**Since:** 9

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-radio-function getImsRegInfo(slotId: int, imsType: ImsServiceType, callback: AsyncCallback<ImsRegInfo>): void--><!--Device-radio-function getImsRegInfo(slotId: int, imsType: ImsServiceType, callback: AsyncCallback<ImsRegInfo>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | [ImsServiceType](arkts-telephony-radio-imsservicetype-e-sys.md) | Yes | Indicates the ims service type of the {@link ImsServiceType}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ImsRegInfo&gt; | Yes | Indicates an instance of the {@link ImsRegInfo} class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.getImsRegInfo(slotId, mode, (err: BusinessError, data: radio.ImsRegInfo) => {
    if (err) {
        console.error(`getImsRegInfo failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getImsRegInfo success, callback: data->${JSON.stringify(data)}`);
});

```


<a id="getimsreginfo-1"></a>
## getImsRegInfo

```TypeScript
function getImsRegInfo(slotId: number, imsType: ImsServiceType): Promise<ImsRegInfo>
```

Get the IMS registration state info of specified IMS service type.

**Since:** 9

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

<!--Device-radio-function getImsRegInfo(slotId: int, imsType: ImsServiceType): Promise<ImsRegInfo>--><!--Device-radio-function getImsRegInfo(slotId: int, imsType: ImsServiceType): Promise<ImsRegInfo>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| imsType | [ImsServiceType](arkts-telephony-radio-imsservicetype-e-sys.md) | Yes | Indicates the ims service type of the {@link ImsServiceType}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ImsRegInfo&gt; | Returns an instance of the {@link ImsRegInfo} class. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
let mode: radio.ImsServiceType = radio.ImsServiceType.TYPE_VIDEO;
radio.getImsRegInfo(slotId, mode).then((data: radio.ImsRegInfo) => {
    console.info(`getImsRegInfo success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getImsRegInfo failed, promise: err->${JSON.stringify(err)}`);
});

```

