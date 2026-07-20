# reportNetConnected

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## reportNetConnected

```TypeScript
function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void
```

Reports the network state is connected.

**Since:** 8

**Required permissions:** ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET

<!--Device-connection-function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void--><!--Device-connection-function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | [NetHandle](arkts-network-connection-nethandle-i.md) | Yes | Indicates the network whose state is to be reported. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of reportNetConnected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  connection.reportNetConnected(netHandle, (error: BusinessError) => {
    console.error(JSON.stringify(error));
  });
});

```


## reportNetConnected

```TypeScript
function reportNetConnected(netHandle: NetHandle): Promise<void>
```

Reports the network state is connected.

**Since:** 8

**Required permissions:** ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET

<!--Device-connection-function reportNetConnected(netHandle: NetHandle): Promise<void>--><!--Device-connection-function reportNetConnected(netHandle: NetHandle): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netHandle | [NetHandle](arkts-network-connection-nethandle-i.md) | Yes | Indicates the network whose state is to be reported. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  connection.reportNetConnected(netHandle).then(() => {
    console.info(`report success`);
  });
});

```

