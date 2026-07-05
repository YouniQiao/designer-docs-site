# PrepareTermination

```TypeScript
export enum PrepareTermination
```

应用准备关闭时返回的动作，该类型为枚举。需要配合[AbilityStage](arkts-abilitystage-c.md#AbilityStage)的 [onPrepareTermination](arkts-abilitystage-c.md#onPrepareTermination)或者 [onPrepareTerminationAsync](arkts-abilitystage-c.md#onPrepareTerminationAsync)方法使用。

**起始版本：** 15

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## TERMINATE_IMMEDIATELY

```TypeScript
TERMINATE_IMMEDIATELY = 0
```

表示立即执行结束动作，默认值。

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## CANCEL

```TypeScript
CANCEL = 1
```

表示取消结束动作。

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

