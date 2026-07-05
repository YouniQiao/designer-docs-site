# LaunchMode

```TypeScript
export enum LaunchMode
```

> **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [bundleManager.LaunchType](arkts-bundlemanager-launchtype-e.md#LaunchType)替代。 Ability组件的启动模式。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.bundle.bundleManager:bundleManager.LaunchType

**System capability:** SystemCapability.BundleManager.BundleFramework

## SINGLETON

```TypeScript
SINGLETON = 0
```

Ability只有一个实例。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.LaunchType#SINGLETON

**System capability:** SystemCapability.BundleManager.BundleFramework

## STANDARD

```TypeScript
STANDARD = 1
```

Ability有多个实例。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.LaunchType#MULTITON

**System capability:** SystemCapability.BundleManager.BundleFramework

