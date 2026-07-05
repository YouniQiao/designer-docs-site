# LaunchType

```TypeScript
export enum LaunchType
```

标识组件的[启动模式](docroot://application-models/uiability-launch-type.md)。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SINGLETON

```TypeScript
SINGLETON = 0
```

UIAbility的启动模式，表示单实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## MULTITON

```TypeScript
MULTITON = 1
```

UIAbility的启动模式，表示普通多实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

## SPECIFIED

```TypeScript
SPECIFIED = 2
```

UIAbility的启动模式，表示该UIAbility内部根据业务自己指定多实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

