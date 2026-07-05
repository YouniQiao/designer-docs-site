# WindowStageCallbackFn

```TypeScript
type WindowStageCallbackFn = (ability: Any, windowStage: window.WindowStage) => void
```

The callback was called when both ability and window stage are registered for listening.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | Any | 是 | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | 是 | Indicates the window stage to register for listening. |

