# onPickupChange (System API)

## Modules to Import

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

<a id="onpickupchange"></a>
## onPickupChange

```TypeScript
function onPickupChange(callback: Callback<PickupEvent>): void
```

Subscribe to pick up sensor event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-motion-function onPickupChange(callback: Callback<PickupEvent>): void--><!--Device-motion-function onPickupChange(callback: Callback<PickupEvent>): void-End-->

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;PickupEvent&gt; | Yes | The callback to receive pickup status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited<br> device capabilities. |
| [31500001](../../apis-multimodalawareness-kit/errorcode-motion.md#31500001-service-exception) | Service exception. Possible causes: 1. A system error, such as null pointer,<br> container-related exception; 2. N-API invocation exception, invalid N-API status. |

