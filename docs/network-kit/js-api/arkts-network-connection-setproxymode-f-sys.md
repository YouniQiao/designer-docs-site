# setProxyMode (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## setProxyMode

```TypeScript
function setProxyMode(mode: ProxyMode): Promise<void>
```

Set the proxy mode {@link ProxyMode}.

**Since:** 20

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-connection-function setProxyMode(mode: ProxyMode): Promise<void>--><!--Device-connection-function setProxyMode(mode: ProxyMode): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [ProxyMode](arkts-network-connection-proxymode-e-sys.md) | Yes | Indicates the proxy mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.setProxyMode(connection.ProxyMode.PROXY_MODE_AUTO).then(() => {
    console.info("Proxy mode set successfully.");
}).catch((error: BusinessError) => {
    console.error("Error setting proxy mode:", error);
});

```

