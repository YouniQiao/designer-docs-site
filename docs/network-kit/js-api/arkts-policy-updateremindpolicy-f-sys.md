# updateRemindPolicy

## updateRemindPolicy

```TypeScript
function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType, callback: AsyncCallback<void>): void
```

Update the policy when the quota reaches the upper limit.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netType | NetBearType | Yes | {@link NetBearType}. |
| simId | string | Yes | Specify the matched simId of quota policy when netType is cellular. |
| remindType | RemindType | Yes | {@link RemindType}. |
| callback | AsyncCallback&lt;void> | Yes | the callback of updateRemindPolicy. |

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
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

policy.updateRemindPolicy(
  connection.NetBearType.BEARER_CELLULAR,
  '1',
  policy.RemindType.REMIND_TYPE_WARNING,
  (error: BusinessError) => {
    console.error(JSON.stringify(error));
  }
);

```

## updateRemindPolicy

```TypeScript
function updateRemindPolicy(netType: NetBearType, simId: string, remindType: RemindType): Promise<void>
```

Update the policy when the quota reaches the upper limit.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_NET_STRATEGY

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netType | NetBearType | Yes | {@link NetBearType}. |
| simId | string | Yes | Specify the matched simId of quota policy when netType is cellular. |
| remindType | RemindType | Yes | {@link RemindType}. |

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
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

policy
  .updateRemindPolicy(
    connection.NetBearType.BEARER_CELLULAR,
    '1',
    policy.RemindType.REMIND_TYPE_WARNING
  )
  .then(() => {
    console.info('updateRemindPolicy success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

