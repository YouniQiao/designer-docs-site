# onAutoSyncTrigger

## Modules to Import

```TypeScript
import { cloudData } from '@ohos.data.cloudData';
```

## onAutoSyncTrigger

```TypeScript
function onAutoSyncTrigger(observer: Callback<AutoSyncTriggerInfo>): void
```

Describes the triggering method for automatic device-cloud synchronization subscription.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | Callback&lt;AutoSyncTriggerInfo&gt; | Yes | Callback for automatic synchronization trigger interception. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

