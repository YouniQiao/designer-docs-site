# getNetworkSearchInformation (System API)

## Modules to Import

```TypeScript
import { radio } from '@ohos.telephony.radio';
```

## getNetworkSearchInformation

```TypeScript
function getNetworkSearchInformation(slotId: number, callback: AsyncCallback<NetworkSearchResult>): void
```

Get network search information.

**Since:** 6

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slotindex number supported by the device. |
| callback | AsyncCallback&lt;NetworkSearchResult&gt; | Yes | Indicates the callback for gettingthe search results of the network. |

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

radio.getNetworkSearchInformation(0, (err: BusinessError, data: radio.NetworkSearchResult) => {
    if (err) {
        console.error(`getNetworkSearchInformation failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkSearchInformation success, callback: data->${JSON.stringify(data)}`);
});

```


## getNetworkSearchInformation

```TypeScript
function getNetworkSearchInformation(slotId: number): Promise<NetworkSearchResult>
```

Get network search information.

**Since:** 6

**Required permissions:** ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slotindex number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkSearchResult&gt; | Returns the search results of the network. |

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

radio.getNetworkSearchInformation(0).then((data: radio.NetworkSearchResult) => {
    console.info(`getNetworkSearchInformation success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkSearchInformation failed, promise: err->${JSON.stringify(err)}`);
});

```

