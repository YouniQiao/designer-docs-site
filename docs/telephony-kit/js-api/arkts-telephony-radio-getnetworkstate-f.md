# getNetworkState

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

<a id="getnetworkstate"></a>
## getNetworkState

```TypeScript
function getNetworkState(slotId: number, callback: AsyncCallback<NetworkState>): void
```

Obtains the network state of the registered network.

**Since:** 6

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getNetworkState(slotId: int, callback: AsyncCallback<NetworkState>): void--><!--Device-radio-function getNetworkState(slotId: int, callback: AsyncCallback<NetworkState>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetworkState&gt; | Yes | Indicates the callback for getting network registration state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNetworkState(slotId, (err: BusinessError, data: radio.NetworkState) => {
    if (err) {
        console.error(`getNetworkState failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkState success, callback: data->${JSON.stringify(data)}`);
});

```


<a id="getnetworkstate-1"></a>
## getNetworkState

```TypeScript
function getNetworkState(slotId?: number): Promise<NetworkState>
```

Obtains the network state of the registered network.

**Since:** 6

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getNetworkState(slotId?: int): Promise<NetworkState>--><!--Device-radio-function getNetworkState(slotId?: int): Promise<NetworkState>-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | No | Indicates the card slot index number,ranging from 0 to the maximum card slot index number supported by the device.if no slotId is provided, the default slotId is 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkState&gt; | Returns the NetworkState object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNetworkState(slotId).then((data: radio.NetworkState) => {
    console.info(`getNetworkState success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkState failed, promise: err->${JSON.stringify(err)}`);
});

```


<a id="getnetworkstate-2"></a>
## getNetworkState

```TypeScript
function getNetworkState(callback: AsyncCallback<NetworkState>): void
```

Obtains the network state of the registered network.

**Since:** 6

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-radio-function getNetworkState(callback: AsyncCallback<NetworkState>): void--><!--Device-radio-function getNetworkState(callback: AsyncCallback<NetworkState>): void-End-->

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetworkState&gt; | Yes | Indicates the callback for getting network registration state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getNetworkState((err: BusinessError, data: radio.NetworkState) => {
    if (err) {
        console.error(`getNetworkState failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkState success, callback: data->${JSON.stringify(data)}`);
});

```

