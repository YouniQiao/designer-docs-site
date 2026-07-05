# getNetworkSearchInformation

## getNetworkSearchInformation

```TypeScript
function getNetworkSearchInformation(slotId: int, callback: AsyncCallback<NetworkSearchResult>): void
```

Get network search information.

**Since:** 6

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;NetworkSearchResult> | Yes | Indicates the callback for getting  the search results of the network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

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
function getNetworkSearchInformation(slotId: int): Promise<NetworkSearchResult>
```

Get network search information.

**Since:** 6

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkSearchResult> | Returns the search results of the network. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getNetworkSearchInformation(0).then((data: radio.NetworkSearchResult) => {
    console.info(`getNetworkSearchInformation success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkSearchInformation failed, promise: err->${JSON.stringify(err)}`);
});

```

