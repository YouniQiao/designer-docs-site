# getBackgroundPolicyByUid (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## getBackgroundPolicyByUid

```TypeScript
function getBackgroundPolicyByUid(uid: number, callback: AsyncCallback<NetBackgroundPolicy>): void
```

Get the background network policy for the specified uid.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function getBackgroundPolicyByUid(uid: number, callback: AsyncCallback<NetBackgroundPolicy>): void--><!--Device-policy-function getBackgroundPolicyByUid(uid: number, callback: AsyncCallback<NetBackgroundPolicy>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | The specified UID of application. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<NetBackgroundPolicy> | Yes | the callback of getBackgroundPolicyByUid. |

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

policy.getBackgroundPolicyByUid(11111, (error: BusinessError, data: policy.NetBackgroundPolicy) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


## getBackgroundPolicyByUid

```TypeScript
function getBackgroundPolicyByUid(uid: number): Promise<NetBackgroundPolicy>
```

Get the background network policy for the specified uid.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function getBackgroundPolicyByUid(uid: number): Promise<NetBackgroundPolicy>--><!--Device-policy-function getBackgroundPolicyByUid(uid: number): Promise<NetBackgroundPolicy>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | The specified UID of application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NetBackgroundPolicy> | The promise returned by the function. |

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
  .getBackgroundPolicyByUid(11111)
  .then((data: policy.NetBackgroundPolicy) => {
    console.info(JSON.stringify(data));
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

