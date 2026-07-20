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

<!--Device-cloudData-function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void--><!--Device-cloudData-function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AutoSyncTriggerInfo> | No | Callback for automatic synchronization trigger interception. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
function autoSyncTriggerObserver(info: cloudData.AutoSyncTriggerInfo) {
  console.info(`Auto sync triggered, mode: ${info.mode}`);
}

// Subscribe to an observer.
cloudData.onAutoSyncTrigger(autoSyncTriggerObserver);

// Unsubscribe from a specified observer.
cloudData.offAutoSyncTrigger(autoSyncTriggerObserver);

// Unsubscribe from all observers.
cloudData.offAutoSyncTrigger();

```

