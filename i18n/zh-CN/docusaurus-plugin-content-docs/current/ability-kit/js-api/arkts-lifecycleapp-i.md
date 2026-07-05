# LifecycleApp

interface of app lifecycle.

**起始版本：** 7

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onActive

```TypeScript
onActive?(): void
```

Called back when an ability enters the <b>ACTIVE</b> state.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onCompleteContinuation

```TypeScript
onCompleteContinuation?(result: number): void
```

Called back when a local ability migration is complete. <p>You can define the processing logic after the migration is complete. For example, you can display a prompt to notify the user of the successful migration and then exit the local ability.</p>

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | number | 是 | Indicates the migration result code. The value {@code 0} indicates that the migration is  successful, and {@code -1} indicates that the migration fails. |

## onCreate

```TypeScript
onCreate?(): void
```

Called back when an ability is started for initialization.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onDestroy

```TypeScript
onDestroy?(): void
```

Called back before an ability is destroyed.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onHide

```TypeScript
onHide?(): void
```

Called back when an ability enters the <b>BACKGROUND</b> state.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onInactive

```TypeScript
onInactive?(): void
```

Called back when an ability enters the <b>INACTIVE</b> state (an ability in this state is not interactive and may change to the <b>BACKGROUND</b> or <b>ACTIVE</b> state).

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onMemoryLevel

```TypeScript
onMemoryLevel?(level: number): void
```

Called when the system has determined to trim the memory, for example, when the ability is running in the background and there is no enough memory for running as many background processes as possible.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| level | number | 是 | Indicates the memory trim level, which shows the current memory usage status. |

## onNewWant

```TypeScript
onNewWant?(want: Want): void
```

Called when the launch mode of an ability is set to singleton.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the new {@code want} containing information about the ability. |

## onRemoteTerminated

```TypeScript
onRemoteTerminated?(): void
```

Called to notify the local device when a running ability on the remote device is destroyed after a reversible migration is performed for the ability from the local device to the remote device.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onRestoreAbilityState

```TypeScript
onRestoreAbilityState?(inState: PacMap): void
```

This method is called if an ability was destroyed at a certain time due to resource reclaim or was unexpectedly destroyed and the {@link #onSaveAbilityState(PacMap)} method was called to save its user data and states. Generally, this method is called after the {@link #onStart(Want)} method.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inState | PacMap | 是 | Indicates the {@code PacMap} object used for storing data and states. This  parameter can not be null. |

## onRestoreData

```TypeScript
onRestoreData?(data: Object): void
```

Restores the user data saved during the migration for an ability on the remote device immediately after the ability is created on the remote device. Lifecycle scheduling for the ability starts only after the user data is restored.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Object | 是 | Indicates the user data to restore. |

## onSaveAbilityState

```TypeScript
onSaveAbilityState?(outState: PacMap): void
```

This method is called when the system determines that the ability may be destroyed in an unexpected situation, for example, when the screen orientation changes or the user touches the Home key. Generally, this method is used only to save temporary states.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outState | PacMap | 是 | Indicates the {@code PacMap} object used for storing user data and states. This  parameter cannot be null. |

## onSaveData

```TypeScript
onSaveData?(data: Object): boolean
```

Saves the user data of a local ability generated during runtime. After the migration is triggered and the local ability is ready, this method is called when the Distributed Scheduler Service requests data from the local ability.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Object | 是 | Indicates the user data to save. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the data is successfully saved; returns {@code false} otherwise. |

## onShow

```TypeScript
onShow?(): void
```

Called back when the state of an ability changes from <b>BACKGROUND</b> to <b>INACTIVE</b>.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

## onStartContinuation

```TypeScript
onStartContinuation?(): boolean
```

Asks a user whether to start the migration.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the user allows the migration; returns {@code false} otherwise. |

## onWindowDisplayModeChanged

```TypeScript
onWindowDisplayModeChanged?(isShownInMultiWindow: boolean, newConfig: resourceManager.Configuration): void
```

Called when the window display mode of this ability changes, for example, from fullscreen mode to multi-window mode or from multi-window mode to fullscreen mode.

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.FAModel

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isShownInMultiWindow | boolean | 是 | Specifies whether this ability is currently in multi-window mode.The  value {@code true} indicates the multi-window mode, and {@code false}  indicates another mode. |
| newConfig | resourceManager.Configuration | 是 | Indicates the new configuration information about Page ability. |

