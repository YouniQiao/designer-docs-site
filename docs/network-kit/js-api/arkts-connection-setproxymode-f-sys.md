# setProxyMode

## setProxyMode

```TypeScript
function setProxyMode(mode: ProxyMode): Promise<void>
```

Set the proxy mode {@link ProxyMode}.

**Since:** 20

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | ProxyMode | Yes | Indicates the proxy mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |

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

