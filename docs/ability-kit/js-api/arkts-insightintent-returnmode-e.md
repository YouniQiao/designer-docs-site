# ReturnMode

```TypeScript
enum ReturnMode
```

意图执行结果返回给意图拉起方的返回形式。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CALLBACK

```TypeScript
CALLBACK = 0
```

表示意图执行结果将由[意图执行基类](arkts-insightintentexecutor-c.md#InsightIntentExecutor)中的 [onExecuteInUIAbilityForegroundMode]@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage) 接口或 [onExecuteInUIExtensionAbility]@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession) 接口返回。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## FUNCTION

```TypeScript
FUNCTION = 1
```

表示意图执行结果会延迟返回，直到开发者主动调用[意图提供方管理能力](arkts-app-ability-insightintentprovider.md#insightIntentProvider)中的 [sendExecuteResult](arkts-insightintentprovider-sendexecuteresult-f.md#sendExecuteResult-1)接口或 [sendIntentResult](arkts-insightintentprovider-sendintentresult-f.md#sendIntentResult-1)接口返回意图执行结 果。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

