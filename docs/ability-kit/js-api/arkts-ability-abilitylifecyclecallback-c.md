# AbilityLifecycleCallback

The ability lifecycle callback.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { AbilityLifecycleCallback } from '@ohos.app.ability.AbilityLifecycleCallback';
```

## onAbilityBackground

```TypeScript
onAbilityBackground(ability: UIAbility): void
```

Called back when the state of an ability changes to background.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityContinue

```TypeScript
onAbilityContinue(ability: UIAbility): void
```

Called back when an ability prepares to continue.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityCreate

```TypeScript
onAbilityCreate(ability: UIAbility): void
```

Called back when an ability is started for initialization.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityDestroy

```TypeScript
onAbilityDestroy(ability: UIAbility): void
```

Called back when an ability is destroyed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityForeground

```TypeScript
onAbilityForeground(ability: UIAbility): void
```

Called back when the state of an ability changes to foreground.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilitySaveState

```TypeScript
onAbilitySaveState?(ability: UIAbility): void
```

Called back when the ability has called onSaveState.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillBackground

```TypeScript
onAbilityWillBackground?(ability: UIAbility): void
```

Called back before the state of an ability changes to background.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillContinue

```TypeScript
onAbilityWillContinue?(ability: UIAbility): void
```

Called back when the ability prepares to call onContinue.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillCreate

```TypeScript
onAbilityWillCreate?(ability: UIAbility): void
```

Called back before an ability is started for initialization.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillDestroy

```TypeScript
onAbilityWillDestroy?(ability: UIAbility): void
```

Called back before an ability is destroyed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillForeground

```TypeScript
onAbilityWillForeground?(ability: UIAbility): void
```

Called back before the state of an ability changes to foreground.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillSaveState

```TypeScript
onAbilityWillSaveState?(ability: UIAbility): void
```

Called back when the ability prepares to call onSaveState.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onNewWant

```TypeScript
onNewWant?(ability: UIAbility): void
```

Called back after the UIAbility called onNewWant.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWillNewWant

```TypeScript
onWillNewWant?(ability: UIAbility): void
```

Called back before the UIAbility will called onNewWant.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageActive

```TypeScript
onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when a window stage is active.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to active |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageCreate

```TypeScript
onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when a window stage is created.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to create |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when a window stage is destroyed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to destroy |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageInactive

```TypeScript
onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when a window stage is inactive.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to inactive |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageRestore

```TypeScript
onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when the ability has called onWindowStageRestore.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to restore. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillCreate

```TypeScript
onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back before a window stage is created.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to create |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back before a window stage is destroyed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to destroy |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillRestore

```TypeScript
onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called back when the ability prepares to call onWindowStageRestore.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | window stage to restore. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

