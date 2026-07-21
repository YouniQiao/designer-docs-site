# createServer

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

<a id="createserver"></a>
## createServer

```TypeScript
function createServer(): Server
```

Creates a SSAP server instance.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-ssap-function createServer(): Server--><!--Device-ssap-function createServer(): Server-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [Server](arkts-connectivity-ssap-server-i.md) | Returns a SSAP server instance {@code Server}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

