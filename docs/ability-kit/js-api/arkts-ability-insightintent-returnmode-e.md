# ReturnMode

Enumerates the modes that define how the execution result of an intent is returned to the intent initiator.

**Since:** 23

<!--Device-insightIntent-enum ReturnMode--><!--Device-insightIntent-enum ReturnMode-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CALLBACK

```TypeScript
CALLBACK = 0
```

The intent execution result is returned through the [onExecuteInUIAbilityForegroundMode](@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage))or [onExecuteInUIExtensionAbility](@ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession))API in the [intent execution base class](arkts-ability-app-ability-insightintentexecutor-insightintentexecutor-c.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ReturnMode-CALLBACK = 0--><!--Device-ReturnMode-CALLBACK = 0-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## FUNCTION

```TypeScript
FUNCTION = 1
```

The intent execution result is returned after the [sendExecuteResult](arkts-ability-insightintentprovider-sendexecuteresult-f.md#sendexecuteresult-1) or [sendIntentResult](arkts-ability-insightintentprovider-sendintentresult-f.md#sendintentresult-1) API in [intent provider management](arkts-app-ability-insightintentprovider.md) is called.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ReturnMode-FUNCTION = 1--><!--Device-ReturnMode-FUNCTION = 1-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

