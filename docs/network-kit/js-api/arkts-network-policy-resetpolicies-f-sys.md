# resetPolicies (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

<a id="resetpolicies"></a>
## resetPolicies

```TypeScript
function resetPolicies(simId: string, callback: AsyncCallback<void>): void
```

Reset network policies\rules\quota policies\firewall rules.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function resetPolicies(simId: string, callback: AsyncCallback<void>): void--><!--Device-policy-function resetPolicies(simId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | string | Yes | Specify the matched simId of quota policy. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of resetPolicies. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy.resetPolicies('1', (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```


<a id="resetpolicies-1"></a>
## resetPolicies

```TypeScript
function resetPolicies(simId: string): Promise<void>
```

Reset network policies\rules\quota policies\firewall rules.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function resetPolicies(simId: string): Promise<void>--><!--Device-policy-function resetPolicies(simId: string): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | string | Yes | Specify the matched simId of quota policy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

policy
  .resetPolicies('1')
  .then(() => {
    console.info('resetPolicies success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

