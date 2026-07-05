# InteropAbilityLifecycleCallback

The interop ability lifecycle callback.

**起始版本：** 23

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## 导入模块

```TypeScript
import { InteropAbilityLifecycleCallback } from '@kit.AbilityKit';
```

## onAbilityWillSaveState

```TypeScript
onAbilityWillSaveState?: AbilityCallbackFn
```

Called back when the ability prepares to call onSaveState.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillCreate

```TypeScript
onAbilityWillCreate?: AbilityCallbackFn
```

Called back before an ability is started for initialization.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillContinue

```TypeScript
onAbilityWillContinue?: AbilityCallbackFn
```

Called back when the ability prepares to call onContinue.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityForeground

```TypeScript
onAbilityForeground: AbilityCallbackFn
```

Called back when the state of an ability changes to foreground.

**类型：** AbilityCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityContinue

```TypeScript
onAbilityContinue?: AbilityCallbackFn
```

Called back when an ability prepares to continue.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageCreate

```TypeScript
onWindowStageCreate: WindowStageCallbackFn
```

Called back when a window stage is created.

**类型：** WindowStageCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillForeground

```TypeScript
onAbilityWillForeground?: AbilityCallbackFn
```

Called back before the state of an ability changes to foreground.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillRestore

```TypeScript
onWindowStageWillRestore?: WindowStageCallbackFn
```

Called back when the ability has called onWindowStageWillRestore.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWillNewWant

```TypeScript
onWillNewWant?: AbilityCallbackFn
```

Called back before the UIAbility will called onNewWant.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityBackground

```TypeScript
onAbilityBackground: AbilityCallbackFn
```

Called back when the state of an ability changes to background.

**类型：** AbilityCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilitySaveState

```TypeScript
onAbilitySaveState?: AbilityCallbackFn
```

Called back when the ability has called onSaveState.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy?: WindowStageCallbackFn
```

Called back before a window stage is destroyed.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityCreate

```TypeScript
onAbilityCreate: AbilityCallbackFn
```

Called back when an ability is started for initialization.

**类型：** AbilityCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onNewWant

```TypeScript
onNewWant?: AbilityCallbackFn
```

Called back after the UIAbility called onNewWant.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageInactive

```TypeScript
onWindowStageInactive?: WindowStageCallbackFn
```

Called back when a window stage is inactive.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillCreate

```TypeScript
onWindowStageWillCreate?: WindowStageCallbackFn
```

Called back before a window stage is created.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillDestroy

```TypeScript
onAbilityWillDestroy?: AbilityCallbackFn
```

Called back before an ability is destroyed.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillBackground

```TypeScript
onAbilityWillBackground?: AbilityCallbackFn
```

Called back before the state of an ability changes to background.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageRestore

```TypeScript
onWindowStageRestore?: WindowStageCallbackFn
```

Called back when the ability has called onWindowStageRestore.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy: WindowStageCallbackFn
```

Called back when a window stage is destroyed.

**类型：** WindowStageCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityDestroy

```TypeScript
onAbilityDestroy: AbilityCallbackFn
```

Called back when an ability is destroyed.

**类型：** AbilityCallbackFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageActive

```TypeScript
onWindowStageActive?: WindowStageCallbackFn
```

Called back when a window stage is active.

**类型：** WindowStageCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

