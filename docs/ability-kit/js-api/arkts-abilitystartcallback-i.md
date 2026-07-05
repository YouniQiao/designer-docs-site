# AbilityStartCallback

定义拉起UIExtensionAbility执行结果的回调。

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onError

```TypeScript
onError(code: int, name: string, message: string): void
```

拉起UIExtensionAbility执行失败的回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 拉起UIExtensionAbility执行失败时返回的结果码。 |
| name | string | Yes | 拉起UIExtensionAbility执行失败时返回的名称。 |
| message | string | Yes | 拉起UIExtensionAbility执行失败时返回的错误信息。 |

## onResult

```TypeScript
onResult?(parameter: AbilityResult): void
```

拉起UIExtensionAbility终止时的回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | 当调用  [terminateSelfWithResult]./UIExtensionContext:UIExtensionContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback)  方法终止UIExtensionAbility时返回的结果。 |

## completionHandler

```TypeScript
completionHandler?: CompletionHandlerForAbilityStartCallback
```

用于返回拉起指定类型的Ability组件的回调结果。

**Type:** CompletionHandlerForAbilityStartCallback

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

