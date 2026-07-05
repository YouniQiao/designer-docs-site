# setMagnificationState (System API)

## Modules to Import

```TypeScript
import { config } from '@ohos.accessibility.config';
```

## setMagnificationState

```TypeScript
function setMagnificationState(state: boolean): void
```

Sets the magnification state. Ensure that magnification is enabled before calling this API.

**Since:** 20

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | boolean | Yes | Whether to trigger or disable the magnification feature.<br>- **true**: to trigger themagnification feature.<br>- **false**: to disable the magnification feature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [9300007](../errorcode-accessibility.md#9300007-failed-to-trigger-amplification) | Trigger magnification failed. |

