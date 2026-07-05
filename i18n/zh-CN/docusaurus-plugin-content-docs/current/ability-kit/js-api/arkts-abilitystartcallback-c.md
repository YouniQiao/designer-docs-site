# AbilityStartCallback

The module describes the callback invoked to return the UIExtensionAbility startup result.

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## onError

```TypeScript
onError(code: int, name: string, message: string): void
```

Called when the UIExtensionAbility fails to start.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | int | 是 | Result code returned when the UIExtensionAbility fails to start. |
| name | string | 是 | Name returned when the UIExtensionAbility fails to start. |
| message | string | 是 | Error information returned when the UIExtensionAbility fails to start. |

## onResult

```TypeScript
onResult?(parameter: AbilityResult): void
```

Called when the UIExtensionAbility is terminated.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | AbilityResult | 是 | Result returned when  [terminateSelfWithResult]./UIExtensionContext:UIExtensionContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback)  is called to terminate the UIExtensionAbility. |

## completionHandler

```TypeScript
completionHandler?: CompletionHandlerForAbilityStartCallback
```

Callback invoked when the ability of a specified type is started.

**类型：** CompletionHandlerForAbilityStartCallback

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

