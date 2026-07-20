# getProxyMode (System API)

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getProxyMode

```TypeScript
function getProxyMode(): Promise<ProxyMode>
```

Obtain the proxy mode {@link ProxyMode}.

**Since:** 20

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-connection-function getProxyMode(): Promise<ProxyMode>--><!--Device-connection-function getProxyMode(): Promise<ProxyMode>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ProxyMode> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getProxyMode().then(mode => {
    console.info("Current proxy mode:", mode);
}).catch((error: BusinessError) => {
    console.error("Error getting proxy mode:", error);
});

```

