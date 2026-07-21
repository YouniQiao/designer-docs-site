# getSignalInformation

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="getsignalinformation"></a>
## getSignalInformation

```TypeScript
function getSignalInformation(slotId: number, callback: AsyncCallback<Array<SignalInformation>>): void
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**Since:** 7

<!--Device-radio-function getSignalInformation(slotId: int, callback: AsyncCallback<Array<SignalInformation>>): void--><!--Device-radio-function getSignalInformation(slotId: int, callback: AsyncCallback<Array<SignalInformation>>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;SignalInformation&gt;&gt; | Yes | Indicates the callback for getting the instance list of the child classes derived from {@link SignalInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getSignalInformation(slotId, (err: BusinessError, data: Array<radio.SignalInformation>) => {
    if (err) {
        console.error(`getSignalInformation failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getSignalInformation success, callback: data->${JSON.stringify(data)}`);
});

```


<a id="getsignalinformation-1"></a>
## getSignalInformation

```TypeScript
function getSignalInformation(slotId: number): Promise<Array<SignalInformation>>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**Since:** 7

<!--Device-radio-function getSignalInformation(slotId: int): Promise<Array<SignalInformation>>--><!--Device-radio-function getSignalInformation(slotId: int): Promise<Array<SignalInformation>>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SignalInformation&gt;&gt; | Returns the callback for getting the instance list of the child classes derived from {@link SignalInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getSignalInformation(slotId).then((data: Array<radio.SignalInformation>) => {
    console.info(`getSignalInformation success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSignalInformation failed, promise: err->${JSON.stringify(err)}`);
});

```

