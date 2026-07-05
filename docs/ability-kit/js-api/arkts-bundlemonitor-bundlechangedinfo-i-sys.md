# BundleChangedInfo

应用变更信息。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { bundleMonitor } from '@kit.AbilityKit';
```

## appIndex

```TypeScript
readonly appIndex: int
```

应用状态发生变化的应用分身索引。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName: string
```

应用状态发生变化的应用Bundle名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## userId

```TypeScript
readonly userId: int
```

应用状态发生变化的用户ID，可以通过getOsAccountLocalId接口获取。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

