# getDefaultHttpProxy

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getDefaultHttpProxy

```TypeScript
function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void
```

Obtains the default {@link HttpProxy} proxy settings.

If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned.

**Since:** 10

<!--Device-connection-function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void--><!--Device-connection-function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<HttpProxy> | Yes | Returns the default {@link HttpProxy} settings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultHttpProxy((error: BusinessError, data: connection.HttpProxy) => {
  if (error) {
    console.error(`Failed to get default http proxy. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data" + JSON.stringify(data));
});

```


## getDefaultHttpProxy

```TypeScript
function getDefaultHttpProxy(): Promise<HttpProxy>
```

Obtains the default {@link HttpProxy} proxy settings.

If an application level proxy is set, the application level proxy parameters are returned.If a global proxy is set, the global proxy parameters are returned.If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned.In other cases, the proxy settings of default network are returned.

**Since:** 10

<!--Device-connection-function getDefaultHttpProxy(): Promise<HttpProxy>--><!--Device-connection-function getDefaultHttpProxy(): Promise<HttpProxy>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<HttpProxy> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultHttpProxy().then((data: connection.HttpProxy) => {
  console.info(JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.info(JSON.stringify(error));
});

```

