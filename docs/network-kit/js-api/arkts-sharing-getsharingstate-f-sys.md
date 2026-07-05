# getSharingState

## getSharingState

```TypeScript
function getSharingState(type: SharingIfaceType, callback: AsyncCallback<SharingIfaceState>): void
```

Obtains the network sharing state for given type.

**Since:** 9

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SharingIfaceType | Yes | Is the enumeration of shareable interface types. |
| callback | AsyncCallback&lt;SharingIfaceState> | Yes | the callback of getSharingState. {@code SharingIfaceState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing.getSharingState(SHARING_WIFI, (error: BusinessError, data: sharing.SharingIfaceState) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## getSharingState

```TypeScript
function getSharingState(type: SharingIfaceType): Promise<SharingIfaceState>
```

Obtains the network sharing state for given type.

**Since:** 9

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SharingIfaceType | Yes | Is the enumeration of shareable interface types. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SharingIfaceState> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing
  .getSharingState(SHARING_WIFI)
  .then((data: sharing.SharingIfaceState) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

