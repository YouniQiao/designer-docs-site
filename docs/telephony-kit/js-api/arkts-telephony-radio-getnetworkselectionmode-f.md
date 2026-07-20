# getNetworkSelectionMode

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## getNetworkSelectionMode

```TypeScript
function getNetworkSelectionMode(slotId: number, callback: AsyncCallback<NetworkSelectionMode>): void
```

Obtains the network search mode of the SIM card in a specified slot.

**Since:** 6

<!--Device-radio-function getNetworkSelectionMode(slotId: int, callback: AsyncCallback<NetworkSelectionMode>): void--><!--Device-radio-function getNetworkSelectionMode(slotId: int, callback: AsyncCallback<NetworkSelectionMode>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<NetworkSelectionMode> | Yes | Indicates the callback for getting the network search mode of the SIM card. Available values are as follows:&lt;ul&gt;&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL}&lt;ul&gt; |

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
radio.getNetworkSelectionMode(slotId, (err: BusinessError, data: radio.NetworkSelectionMode) => {
    if (err) {
        console.error(`getNetworkSelectionMode failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkSelectionMode success, callback: data->${JSON.stringify(data)}`);
});

```


## getNetworkSelectionMode

```TypeScript
function getNetworkSelectionMode(slotId: number): Promise<NetworkSelectionMode>
```

Obtains the network search mode of the SIM card in a specified slot.

**Since:** 6

<!--Device-radio-function getNetworkSelectionMode(slotId: int): Promise<NetworkSelectionMode>--><!--Device-radio-function getNetworkSelectionMode(slotId: int): Promise<NetworkSelectionMode>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NetworkSelectionMode> | Returns the network search mode of the SIM card.Available values are as follows:&lt;ul&gt;&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}&lt;li&gt;{@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL}&lt;ul&gt; |

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
radio.getNetworkSelectionMode(slotId).then((data: radio.NetworkSelectionMode) => {
    console.info(`getNetworkSelectionMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkSelectionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

