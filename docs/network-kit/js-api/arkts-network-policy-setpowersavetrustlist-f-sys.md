# setPowerSaveTrustlist (System API)

## Modules to Import

```TypeScript
import { policy } from '@kit.NetworkKit';
```

## setPowerSaveTrustlist

```TypeScript
function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void
```

Set the list of uids that are allowed to access the Internet in power saving mode.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void--><!--Device-policy-function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uids | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | The specified uids of application. |
| isAllowed | boolean | Yes | Whether to allow Uids in the list to access the Internet. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of setPowerSaveTrustlist. |

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

**Required permissions:** ohos.permission.MANAGE_NET_STRATEGY

<!--Device-policy-function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean): Promise<void>--><!--Device-policy-function setPowerSaveTrustlist(uids: Array<number>, isAllowed: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uids | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | The specified uids of application. |
| isAllowed | boolean | Yes | Whether to allow Uids in the list to access the Internet. |

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

policy
  .setPowerSaveTrustlist([11111, 22222], true)
  .then(() => {
    console.info('setPowerSaveTrustlist success');
  })
  .catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
  });

```

