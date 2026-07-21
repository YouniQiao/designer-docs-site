# onStateChange

## Modules to Import

```TypeScript
import { manager } from '@kit.ConnectivityKit';
```

<a id="onstatechange"></a>
## onStateChange

```TypeScript
function onStateChange(callback: Callback<NearlinkState>): void
```

Subscribes to state change events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-manager-function onStateChange(callback: Callback<NearlinkState>): void--><!--Device-manager-function onStateChange(callback: Callback<NearlinkState>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;NearlinkState&gt; | Yes | Callback used to listen for the state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

