# getUidsByPolicy

## getUidsByPolicy

```TypeScript
function getUidsByPolicy(policy: NetUidPolicy, callback: AsyncCallback<Array<number>>): void
```

Query the application UIDs of the specified policy.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | NetUidPolicy | Yes | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |
| callback | AsyncCallback&lt;Array&lt;number>> | Yes | the callback of getUidsByPolicy. |

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

policy.getUidsByPolicy(11111, (error: BusinessError, data: number[]) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## getUidsByPolicy

```TypeScript
function getUidsByPolicy(policy: NetUidPolicy): Promise<Array<number>>
```

Query the application UIDs of the specified policy.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | NetUidPolicy | Yes | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number>> | The promise returned by the function. |

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
  .getUidsByPolicy(11111)
  .then((data: object) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

