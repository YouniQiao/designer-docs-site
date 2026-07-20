# getSimSpn

## Modules to Import

```TypeScript
import { sim } from '@kit.TelephonyKit';
```

## getSimSpn

```TypeScript
function getSimSpn(slotId: number, callback: AsyncCallback<string>): void
```

Obtains the service provider name (SPN) of the SIM card in a specified slot.

<p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network with which the SIM card is currently registered.

**Since:** 6

<!--Device-sim-function getSimSpn(slotId: int, callback: AsyncCallback<string>): void--><!--Device-sim-function getSimSpn(slotId: int, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Indicates the callback for getting the SPN;returns an empty string if no SIM card is inserted or no EFSPN file in the SIM card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimSpn(0, (err: BusinessError, data: string) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```


## getSimSpn

```TypeScript
function getSimSpn(slotId: number): Promise<string>
```

Obtains the service provider name (SPN) of the SIM card in a specified slot.

<p>The value is recorded in the EFSPN file of the SIM card and is irrelevant to the network with which the SIM card is currently registered.

**Since:** 6

<!--Device-sim-function getSimSpn(slotId: int): Promise<string>--><!--Device-sim-function getSimSpn(slotId: int): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the SPN; returns an empty string if no SIM card is inserted or no EFSPN file in the SIM card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300004](../errorcode-telephony.md#8300004-sim-card-not-detected) | No SIM card found. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.getSimSpn(0).then((data: string) => {
    console.info(`getSimSpn success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSimSpn failed, promise: err->${JSON.stringify(err)}`);
});

```

