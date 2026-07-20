# getAddressesByName

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getAddressesByName

```TypeScript
function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void
```

Resolves the host name to obtain all IP addresses based on the default data network.

**Since:** 8

**Required permissions:** ohos.permission.INTERNET

<!--Device-connection-function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void--><!--Device-connection-function getAddressesByName(host: string, callback: AsyncCallback<Array<NetAddress>>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<NetAddress>> | Yes | Returns the NetAddress list. |

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

connection.getAddressesByName("xxxx", (error: BusinessError, data: connection.NetAddress[]) => {
  if (error) {
    console.error(`Failed to get addresses. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```


## getAddressesByName

```TypeScript
function getAddressesByName(host: string): Promise<Array<NetAddress>>
```

Resolves the host name to obtain all IP addresses based on the default data network.

**Since:** 8

**Required permissions:** ohos.permission.INTERNET

<!--Device-connection-function getAddressesByName(host: string): Promise<Array<NetAddress>>--><!--Device-connection-function getAddressesByName(host: string): Promise<Array<NetAddress>>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<NetAddress>> | The promise returned by the function. |

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

connection.getAddressesByName("xxxx").then((data: connection.NetAddress[]) => {
  console.info("Succeeded to get data: " + JSON.stringify(data));
});

```

