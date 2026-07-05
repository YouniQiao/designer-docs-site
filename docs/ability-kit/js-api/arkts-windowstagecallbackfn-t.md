# WindowStageCallbackFn

```TypeScript
type WindowStageCallbackFn = (ability: Any, windowStage: window.WindowStage) => void
```

The callback was called when both ability and window stage are registered for listening.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | Any | Yes | Indicates the ability to register for listening. |
| windowStage | window.WindowStage | Yes | Indicates the window stage to register for listening. |

