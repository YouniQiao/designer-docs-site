# AbilityLifecycleCallback

[UIAbility]./@ohos.app.ability.UIAbility从创建到销毁过程其生命周期是动态变化的。 AbilityLifecycleCallback模块提供监听[UIAbility]./@ohos.app.ability.UIAbility生命周期变化的能力， 可用于统计每个UIAbility的运行时长、执行与UIAbility业务逻辑解耦的数据加载等场景。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## 导入模块

```TypeScript
import { AbilityLifecycleCallback } from '@kit.AbilityKit';
```

## onAbilityBackground

```TypeScript
onAbilityBackground(ability: UIAbility): void
```

在UIAbility的[onBackground]./@ohos.app.ability.UIAbility:UIAbility#onBackground触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityContinue

```TypeScript
onAbilityContinue(ability: UIAbility): void
```

在UIAbility的[onContinue]./@ohos.app.ability.UIAbility:UIAbility#onContinue触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityCreate

```TypeScript
onAbilityCreate(ability: UIAbility): void
```

在UIAbility的[onCreate]./@ohos.app.ability.UIAbility:UIAbility#onCreate触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityDestroy

```TypeScript
onAbilityDestroy(ability: UIAbility): void
```

在UIAbility的[onDestroy]./@ohos.app.ability.UIAbility:UIAbility.onDestroy触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityForeground

```TypeScript
onAbilityForeground(ability: UIAbility): void
```

在UIAbility的[onForeground]./@ohos.app.ability.UIAbility:UIAbility#onForeground触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilitySaveState

```TypeScript
onAbilitySaveState?(ability: UIAbility): void
```

在UIAbility的[onSaveState]./@ohos.app.ability.UIAbility:UIAbility.onSaveState触发后回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillBackground

```TypeScript
onAbilityWillBackground?(ability: UIAbility): void
```

在UIAbility的[onBackground]./@ohos.app.ability.UIAbility:UIAbility#onBackground触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillContinue

```TypeScript
onAbilityWillContinue?(ability: UIAbility): void
```

在UIAbility的[onContinue]./@ohos.app.ability.UIAbility:UIAbility#onContinue触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillCreate

```TypeScript
onAbilityWillCreate?(ability: UIAbility): void
```

在UIAbility的[onCreate]./@ohos.app.ability.UIAbility:UIAbility#onCreate触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillDestroy

```TypeScript
onAbilityWillDestroy?(ability: UIAbility): void
```

在UIAbility的[onDestroy]./@ohos.app.ability.UIAbility:UIAbility.onDestroy触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillForeground

```TypeScript
onAbilityWillForeground?(ability: UIAbility): void
```

在UIAbility的[onForeground]./@ohos.app.ability.UIAbility:UIAbility#onForeground触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onAbilityWillSaveState

```TypeScript
onAbilityWillSaveState?(ability: UIAbility): void
```

在UIAbility的[onSaveState]./@ohos.app.ability.UIAbility:UIAbility.onSaveState触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onNewWant

```TypeScript
onNewWant?(ability: UIAbility): void
```

在UIAbility的[onNewWant]./@ohos.app.ability.UIAbility:UIAbility#onNewWant触发后回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onWillNewWant

```TypeScript
onWillNewWant?(ability: UIAbility): void
```

在UIAbility的[onNewWant]./@ohos.app.ability.UIAbility:UIAbility#onNewWant触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |

## onWindowStageActive

```TypeScript
onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility主窗获焦时触发回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageCreate

```TypeScript
onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageCreate]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageDestroy]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy触发后回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageInactive

```TypeScript
onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility主窗失焦时触发回调。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageRestore

```TypeScript
onWindowStageRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageRestore]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore触发后回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageWillCreate

```TypeScript
onWindowStageWillCreate?(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageCreate]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy?(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageDestroy]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onWindowStageWillRestore

```TypeScript
onWindowStageWillRestore?(ability: UIAbility, windowStage: window.WindowStage): void
```

在UIAbility的[onWindowStageRestore]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore触发前回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | UIAbility | 是 | 回调事件对应的UIAbility对象。 |
| windowStage | window.WindowStage | 是 | 回调事件对应的UIAbility主窗管理器。 |

## onAbilityWillSaveState

```TypeScript
onAbilityWillSaveState?: OnAbilityWillSaveStateFn
```

在UIAbility的[onSaveState]./@ohos.app.ability.UIAbility:UIAbility.onSaveState触发前回调。

**类型：** OnAbilityWillSaveStateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilitySaveState

```TypeScript
onAbilitySaveState?: OnAbilitySaveStateFn
```

在UIAbility的[onSaveState]./@ohos.app.ability.UIAbility:UIAbility.onSaveState触发后回调。

**类型：** OnAbilitySaveStateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillDestroy

```TypeScript
onWindowStageWillDestroy?: OnWindowStageWillDestroyFn
```

在UIAbility的[onWindowStageDestroy]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageDestroy触发前回调。

**类型：** OnWindowStageWillDestroyFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onNewWant

```TypeScript
onNewWant?: OnNewWantFn
```

在UIAbility的[onNewWant]./@ohos.app.ability.UIAbility:UIAbility#onNewWant触发后回调。

**类型：** OnNewWantFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillCreate

```TypeScript
onWindowStageWillCreate?: OnWindowStageWillCreateFn
```

在UIAbility的[onWindowStageCreate]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate触发前回调。

**类型：** OnWindowStageWillCreateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillDestroy

```TypeScript
onAbilityWillDestroy?: OnAbilityWillDestroyFn
```

在UIAbility的[onDestroy]./@ohos.app.ability.UIAbility:UIAbility.onDestroy触发前回调。

**类型：** OnAbilityWillDestroyFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillBackground

```TypeScript
onAbilityWillBackground?: OnAbilityWillBackgroundFn
```

在UIAbility的[onBackground]./@ohos.app.ability.UIAbility:UIAbility#onBackground触发前回调。

**类型：** OnAbilityWillBackgroundFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillCreate

```TypeScript
onAbilityWillCreate?: OnAbilityWillCreateFn
```

在UIAbility的[onCreate]./@ohos.app.ability.UIAbility:UIAbility#onCreate触发前回调。

**类型：** OnAbilityWillCreateFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageRestore

```TypeScript
onWindowStageRestore?: OnWindowStageRestoreFn
```

在UIAbility的[onWindowStageRestore]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore触发后回调。

**类型：** OnWindowStageRestoreFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillContinue

```TypeScript
onAbilityWillContinue?: OnAbilityWillContinueFn
```

在UIAbility的[onContinue]./@ohos.app.ability.UIAbility:UIAbility#onContinue触发前回调。

**类型：** OnAbilityWillContinueFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onAbilityWillForeground

```TypeScript
onAbilityWillForeground?: OnAbilityWillForegroundFn
```

在UIAbility的[onForeground]./@ohos.app.ability.UIAbility:UIAbility#onForeground触发前回调。

**类型：** OnAbilityWillForegroundFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWindowStageWillRestore

```TypeScript
onWindowStageWillRestore?: OnWindowStageWillRestoreFn
```

在UIAbility的[onWindowStageRestore]./@ohos.app.ability.UIAbility:UIAbility#onWindowStageRestore触发前回调。

**类型：** OnWindowStageWillRestoreFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## onWillNewWant

```TypeScript
onWillNewWant?: OnWillNewWantFn
```

在UIAbility的[onNewWant]./@ohos.app.ability.UIAbility:UIAbility#onNewWant触发前回调。

**类型：** OnWillNewWantFn

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

