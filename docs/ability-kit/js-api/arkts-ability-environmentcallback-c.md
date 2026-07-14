# EnvironmentCallback

The EnvironmentCallback module provides capabilities to listen for system environment changes.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { EnvironmentCallback } from '@kit.AbilityKit';
```

## onConfigurationUpdated

```TypeScript
onConfigurationUpdated(config: Configuration): void
```

Called when the system configuration changes, after [a listener has been registered for such events](arkts-ability-applicationcontext-c.md#on-2) .

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | Configuration object after the change. |

**Example**

See [Usage of EnvironmentCallback](#usage-of-environmentcallback).

## onMemoryLevel

```TypeScript
onMemoryLevel(level: AbilityConstant.MemoryLevel): void
```

Called when the system memory level changes, after [a listener has been registered for such events](arkts-ability-applicationcontext-c.md#on-2) .

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | AbilityConstant.MemoryLevel | Yes | Memory level, indicating the available memory of the entire device. |

**Example**

See [Usage of EnvironmentCallback](#usage-of-environmentcallback).

