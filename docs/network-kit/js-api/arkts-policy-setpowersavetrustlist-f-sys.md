# setPowerSaveTrustlist

## setPowerSaveTrustlist

```TypeScript
function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void
```

Set the list of uids that are allowed to access the Internet in power saving mode.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uids | Array&lt;number> | Yes | The specified uids of application. |
| isAllowed | boolean | Yes | Whether to allow Uids in the list to access the Internet. |
| callback | AsyncCallback&lt;void> | Yes | the callback of setPowerSaveTrustlist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy.setPowerSaveTrustlist([11111, 22222], true, (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

## setPowerSaveTrustlist

```TypeScript
function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean): Promise<void>
```

Set the list of uids that are allowed to access the Internet in power saving mode.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uids | Array&lt;number> | Yes | The specified uids of application. |
| isAllowed | boolean | Yes | Whether to allow Uids in the list to access the Internet. |

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
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy
  .setPowerSaveTrustlist([11111, 22222], true)
  .then(() => {
    console.info('setPowerSaveTrustlist success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

