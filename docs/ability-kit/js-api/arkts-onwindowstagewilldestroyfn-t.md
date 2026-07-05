# OnWindowStageWillDestroyFn

```TypeScript
type OnWindowStageWillDestroyFn = (ability: UIAbility, windowStage: window.WindowStage) => void
```

注册监听应用上下文的生命周期后，在UIAbility的onWindowStageDestroy触发前回调。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | UIAbility | Yes | 当前Ability对象。 |
| windowStage | window.WindowStage | Yes | 当前WindowStage对象。 |

