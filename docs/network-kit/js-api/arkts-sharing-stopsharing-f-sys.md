# stopSharing

## stopSharing

```TypeScript
function stopSharing(type: SharingIfaceType, callback: AsyncCallback<void>): void
```

Stop network sharing for given type.

**Since:** 9

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SharingIfaceType | Yes | Enumeration of shareable interface types. |
| callback | AsyncCallback&lt;void> | Yes | the callback of startSharing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2202004 | Try to share an unavailable iface. |
| 2202005 | WiFi sharing failed. |
| 2202006 | Bluetooth sharing failed. |
| 2202011 | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing.stopSharing(SHARING_WIFI, (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

## stopSharing

```TypeScript
function stopSharing(type: SharingIfaceType): Promise<void>
```

Stop network sharing for given type.

**Since:** 9

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SharingIfaceType | Yes | Enumeration of shareable interface types. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2202004 | Try to share an unavailable iface. |
| 2202005 | WiFi sharing failed. |
| 2202006 | Bluetooth sharing failed. |
| 2202011 | Cannot get network sharing configuration. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let SHARING_WIFI = 0;
sharing
  .stopSharing(SHARING_WIFI)
  .then(() => {
    console.info('stop wifi sharing successful');
  })
  .catch((error: BusinessError) => {
    console.error('stop wifi sharing failed');
  });

```

