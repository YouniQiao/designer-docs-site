# AbilityLifecycleCallback

The lifecycle of a [UIAbility](arkts-app-ability-uiability.md) dynamically changes from creation to
destruction.
The AbilityLifecycleCallback module provides the capability to listen for these lifecycle changes, which can be used
for scenarios such as tracking the runtime duration of each UIAbility and performing data loading decoupled from the
service logic of UIAbility.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { AbilityLifecycleCallback } from '@kit.AbilityKit';
```

## onAbilityBackground

```TypeScript
onAbilityBackground(ability: UIAbility): void
```

Called after the [onBackground](arkts-ability-uiability-c.md#onbackground-1) callback of the
UIAbility is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityContinue

```TypeScript
onAbilityContinue(ability: UIAbility): void
```

Called after the [onContinue](arkts-ability-uiability-c.md#oncontinue-1) callback of the UIAbility
is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityCreate

```TypeScript
onAbilityCreate(ability: UIAbility): void
```

Called after the [onCreate](arkts-ability-uiability-c.md#oncreate-1) callback of the UIAbility is
triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityDestroy

```TypeScript
onAbilityDestroy(ability: UIAbility): void
```

Called after the [onDestroy](arkts-ability-uiability-c.md#ondestroy-1) callback of the UIAbility
is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityForeground

```TypeScript
onAbilityForeground(ability: UIAbility): void
```

Called after the [onForeground](arkts-ability-uiability-c.md#onforeground-1) callback of the
UIAbility is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilitySaveState

```TypeScript
onAbilitySaveState?(ability: UIAbility): void
```

Called after the [onSaveState](arkts-ability-uiability-c.md#onsavestate-1) callback of the
UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillBackground

```TypeScript
onAbilityWillBackground?(ability: UIAbility): void
```

Called before the [onBackground](arkts-ability-uiability-c.md#onbackground-1) callback of the
UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillContinue

```TypeScript
onAbilityWillContinue?(ability: UIAbility): void
```

Called before the [onContinue](arkts-ability-uiability-c.md#oncontinue-1) callback of the UIAbility
is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillCreate

```TypeScript
onAbilityWillCreate?(ability: UIAbility): void
```

Called before the [onCreate](arkts-ability-uiability-c.md#oncreate-1) callback of the UIAbility is
triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillDestroy

```TypeScript
onAbilityWillDestroy?(ability: UIAbility): void
```

Called before the [onDestroy](arkts-ability-uiability-c.md#ondestroy-1) callback of the UIAbility
is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillForeground

```TypeScript
onAbilityWillForeground?(ability: UIAbility): void
```

Called before the [onForeground](arkts-ability-uiability-c.md#onforeground-1) callback of the
UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onAbilityWillSaveState

```TypeScript
onAbilityWillSaveState?(ability: UIAbility): void
```

Called before the [onSaveState](arkts-ability-uiability-c.md#onsavestate-1) callback of the
UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onNewWant

```TypeScript
onNewWant?(ability: UIAbility): void
```

Called after the [onNewWant](arkts-ability-uiability-c.md#onnewwant-1) callback of the UIAbility
is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWillNewWant

```TypeScript
onWillNewWant?(ability: UIAbility): void
```

Called before the [onNewWant](arkts-ability-uiability-c.md#onnewwant-1) callback of the UIAbility
is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageActive

```TypeScript
onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void
```

Called when the main window of the UIAbility gains focus.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageCreate

```TypeScript
onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void
```

Called after the [onWindowStageCreate](arkts-ability-uiability-c.md#onwindowstagecreate-1) callback of
the UIAbility is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void
```

Called after the [onWindowStageDestroy](arkts-ability-uiability-c.md#onwindowstagedestroy-1)
callback of the UIAbility is triggered.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageInactive

```TypeScript
onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void
```

Called when the main window of the UIAbility loses focus.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageRestore

```TypeScript
onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called after the [onWindowStageRestore](arkts-ability-uiability-c.md#onwindowstagerestore-1)
callback of the UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillCreate

```TypeScript
onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called before the [onWindowStageCreate](arkts-ability-uiability-c.md#onwindowstagecreate-1)
callback of the UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called before the [onWindowStageDestroy](arkts-ability-uiability-c.md#onwindowstagedestroy-1)
callback of the UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

## onWindowStageWillRestore

```TypeScript
onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

Called before the [onWindowStageRestore](arkts-ability-uiability-c.md#onwindowstagerestore-1)
callback of the UIAbility is triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | UIAbility object associated with the callback event. |
| windowStage | window.WindowStage | Yes | Main window manager of the UIAbility associated with the callback event. |

**Example**

For details, see [AbilityLifecycleCallback Usage Example](#abilitylifecyclecallback-usage-example).

