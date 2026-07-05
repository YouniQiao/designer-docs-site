# InteropAbilityMonitor

Provide methods for matching monitored Ability objects that meet specified conditions. The most recently matched Ability objects will be saved in the InteropAbilityMonitor object.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityCreate

```TypeScript
onAbilityCreate?: AbilityCallbackFn
```

Called back when the ability is created.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## abilityName

```TypeScript
abilityName: string
```

The name of the ability to monitor.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageRestore

```TypeScript
onWindowStageRestore?: AbilityCallbackFn
```

Called back when an ability window stage is restored.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityForeground

```TypeScript
onAbilityForeground?: AbilityCallbackFn
```

Called back when the state of the ability changes to foreground.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## moduleName

```TypeScript
moduleName?: string
```

The name of the module to monitor.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy?: AbilityCallbackFn
```

Called back when an ability window stage is destroyed.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageCreate

```TypeScript
onWindowStageCreate?: AbilityCallbackFn
```

Called back when an ability window stage is created.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityDestroy

```TypeScript
onAbilityDestroy?: AbilityCallbackFn
```

Called back before the ability is destroyed.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityBackground

```TypeScript
onAbilityBackground?: AbilityCallbackFn
```

Called back when the state of the ability changes to background.

**类型：** AbilityCallbackFn

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

