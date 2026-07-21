# getState

## Modules to Import

```TypeScript
import { manager } from '@kit.ConnectivityKit';
```

<a id="getstate"></a>
## getState

```TypeScript
function getState(): NearlinkState
```

Gets the NearLink state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-manager-function getState(): NearlinkState--><!--Device-manager-function getState(): NearlinkState-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [NearlinkState](arkts-connectivity-manager-nearlinkstate-e.md) | Returns the NearLink state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

