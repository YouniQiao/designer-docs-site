# ModuleType

```TypeScript
export enum ModuleType
```

标识模块类型。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## ENTRY

```TypeScript
ENTRY = 1
```

应用的主模块，作为应用的入口，提供了应用的基础功能。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## FEATURE

```TypeScript
FEATURE = 2
```

应用的动态特性模块，作为应用能力的扩展，可以根据用户的需求和设备类型进行选择性安装。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SHARED

```TypeScript
SHARED = 3
```

应用的[动态共享库](docroot://quick-start/in-app-hsp.md)模块。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

