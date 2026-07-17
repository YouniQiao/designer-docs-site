# UpgradePolicy (System API)

Represents an update policy.

**Since:** 9

<!--Device-update-export interface UpgradePolicy--><!--Device-update-export interface UpgradePolicy-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { update } from '@kit.BasicServicesKit';
```

## autoUpgradePeriods

```TypeScript
autoUpgradePeriods: Array<UpgradePeriod>
```

Automatic update period.

**Type:** Array<UpgradePeriod>

**Since:** 9

<!--Device-UpgradePolicy-autoUpgradePeriods: Array<UpgradePeriod>--><!--Device-UpgradePolicy-autoUpgradePeriods: Array<UpgradePeriod>-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## autoUpgradeStrategy

```TypeScript
autoUpgradeStrategy: boolean
```

Automatic update policy.

The value **true** indicates that automatic update is supported, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 9

<!--Device-UpgradePolicy-autoUpgradeStrategy: boolean--><!--Device-UpgradePolicy-autoUpgradeStrategy: boolean-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

## downloadStrategy

```TypeScript
downloadStrategy: boolean
```

Automatic download policy.

The value **true** indicates that automatic download is supported, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 9

<!--Device-UpgradePolicy-downloadStrategy: boolean--><!--Device-UpgradePolicy-downloadStrategy: boolean-End-->

**System capability:** SystemCapability.Update.UpdateService

**System API:** This is a system API.

