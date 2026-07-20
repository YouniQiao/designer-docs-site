# setNetworkAccessPolicy (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## setNetworkAccessPolicy

```TypeScript
function setNetworkAccessPolicy(uid: number, policy: NetworkAccessPolicy, isReconfirmed?: boolean): Promise<void>
```

Set the policy to access the network of the specified application.

**Since:** 12

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function setNetworkAccessPolicy(uid: number, policy: NetworkAccessPolicy, isReconfirmed?: boolean): Promise<void>--><!--Device-policy-function setNetworkAccessPolicy(uid: number, policy: NetworkAccessPolicy, isReconfirmed?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | The specified UID of application. |
| policy | [NetworkAccessPolicy](arkts-network-policy-networkaccesspolicy-i-sys.md) | Yes | The network access policy of application. For details, see {@link NetworkAccessPolicy}. |
| isReconfirmed | boolean | No | Whether this operation is reconfirmed by user or not. Default false. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

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

let accessPolicy: policy.NetworkAccessPolicy = {
  allowWiFi: false,
  allowCellular: true,
}
policy
  .setNetworkAccessPolicy(11111, accessPolicy)
  .then(() => {
    console.info('setNetworkAccessPolicy success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

