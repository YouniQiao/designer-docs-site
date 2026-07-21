# setPolicyByUid (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

<a id="setpolicybyuid"></a>
## setPolicyByUid

```TypeScript
function setPolicyByUid(uid: number, policy: NetUidPolicy, callback: AsyncCallback<void>): void
```

Set the policy for the specified UID.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function setPolicyByUid(uid: number, policy: NetUidPolicy, callback: AsyncCallback<void>): void--><!--Device-policy-function setPolicyByUid(uid: number, policy: NetUidPolicy, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | the specified UID of application. |
| policy | [NetUidPolicy](arkts-network-policy-netuidpolicy-e-sys.md) | Yes | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of setPolicyByUid. |

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

policy.setPolicyByUid(11111, policy.NetUidPolicy.NET_POLICY_NONE, (error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```


<a id="setpolicybyuid-1"></a>
## setPolicyByUid

```TypeScript
function setPolicyByUid(uid: number, policy: NetUidPolicy): Promise<void>
```

Set the policy for the specified UID.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function setPolicyByUid(uid: number, policy: NetUidPolicy): Promise<void>--><!--Device-policy-function setPolicyByUid(uid: number, policy: NetUidPolicy): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | the specified UID of application. |
| policy | [NetUidPolicy](arkts-network-policy-netuidpolicy-e-sys.md) | Yes | the policy of the current UID of application.For details, see {@link NetUidPolicy}. |

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
  .setPolicyByUid(11111, policy.NetUidPolicy.NET_POLICY_NONE)
  .then(() => {
    console.info('setPolicyByUid success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

