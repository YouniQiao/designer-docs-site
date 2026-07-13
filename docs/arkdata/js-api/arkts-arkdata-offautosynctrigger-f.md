# offAutoSyncTrigger

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## offAutoSyncTrigger

```TypeScript
function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void
```

Describes unsubscribing from the device-cloud automatic synchronization trigger mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;AutoSyncTriggerInfo&gt; | No | Callback for automatic synchronization trigger interception. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

