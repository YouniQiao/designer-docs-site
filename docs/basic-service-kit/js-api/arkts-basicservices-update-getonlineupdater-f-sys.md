# getOnlineUpdater (System API)

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## getOnlineUpdater

```TypeScript
function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater
```

Obtains an **OnlineUpdater** object.

**Since:** 9

<!--Device-update-function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater--><!--Device-update-function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| upgradeInfo | [UpgradeInfo](arkts-basicservices-update-upgradeinfo-i-sys.md) | Yes | **OnlineUpdater** object information. |

**Return value:**

| Type | Description |
| --- | --- |
| [Updater](arkts-basicservices-update-updater-i-sys.md) | **OnlineUpdater** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
  // Define an UpgradeInfo object.
  const upgradeInfo: update.UpgradeInfo = {
    upgradeApp: 'com.ohos.ota.updateclient',  // App package name
    businessType: {
      vendor: update.BusinessVendor.PUBLIC, // Vendor type
      subType: update.BusinessSubType.FIRMWARE // The update type is firmware.
    }
  };  
  // Obtain an OnlineUpdater object.
  let onlineUpdater = update.getOnlineUpdater(upgradeInfo);

```

