# ProcessMode

```TypeScript
export enum ProcessMode
```

UIAbility启动后的进程模式。 ProcessMode作为[StartOptions](arkts-startoptions-c.md#StartOptions)的一个属性，仅在 [UIAbilityContext.startAbility]./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>) 中生效，用来指定目标UIAbility的进程模式。 该功能仅在2in1和Tablet设备上生效，在其他设备中返回801错误码。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## NEW_PROCESS_ATTACH_TO_PARENT

```TypeScript
NEW_PROCESS_ATTACH_TO_PARENT = 1
```

创建一个新进程，并在该进程上启动UIAbility。该进程会跟随父进程退出。 **约束：** 使用此模式时，要求目标UIAbility跟调用方是在同一个应用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM

```TypeScript
NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM = 2
```

创建一个新进程，在该进程上启动UIAbility，并绑定该进程到状态栏图标上。 **约束：** 使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ATTACH_TO_STATUS_BAR_ITEM

```TypeScript
ATTACH_TO_STATUS_BAR_ITEM = 3
```

启动UIAbility，并绑定该UIAbility所在进程到状态栏图标上。 **约束：** 使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

