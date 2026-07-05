# AutoFillExtensionContext

AutoFillExtensionContext模块是AutoFillExtensionAbility的上下文环境，继承自 [ExtensionContext](arkts-extensioncontext-c.md#ExtensionContext)。

**Inheritance:** AutoFillExtensionContextextends: ExtensionContext.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## reloadInModal

```TypeScript
reloadInModal(customData: CustomData): Promise<void>
```

拉起模态页面。使用Promise异步回调。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customData | CustomData | Yes | 拉起模态页面时的自定义信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | If the input parameter is not valid parameter. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

