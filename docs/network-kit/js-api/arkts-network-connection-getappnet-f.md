# getAppNet

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getappnet"></a>
## getAppNet

```TypeScript
function getAppNet(callback: AsyncCallback<NetHandle>): void
```

Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.

**Since:** 9

<!--Device-connection-function getAppNet(callback: AsyncCallback<NetHandle>): void--><!--Device-connection-function getAppNet(callback: AsyncCallback<NetHandle>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetHandle&gt; | Yes | Returns the {@link NetHandle} bound to the process;returns {@code null} if no {@link NetHandle} is bound to the process.For details, see {@link NetHandle}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getAppNet((error: BusinessError, data: connection.NetHandle) => {
  if (error) {
    console.error(`Failed to get App net. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
})

```


<a id="getappnet-1"></a>
## getAppNet

```TypeScript
function getAppNet(): Promise<NetHandle>
```

Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.

**Since:** 9

<!--Device-connection-function getAppNet(): Promise<NetHandle>--><!--Device-connection-function getAppNet(): Promise<NetHandle>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetHandle&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getAppNet().then((data: connection.NetHandle) => {
  console.info(JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.info(JSON.stringify(error));
});

```

