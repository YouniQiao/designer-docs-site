# requestAutoSave

## requestAutoSave

```TypeScript
export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void
```

请求保存表单数据。使用callback异步回调。 如果当前表单没有提供表单切换的功能，可以通过此接口保存历史表单输入数据，保存请求完成时会触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | UIContext | Yes | UI context in which the auto-save operation will be performed. |
| callback | AutoSaveCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes: 1. Get instance id failed;  2. Parse instance id failed; 3. The second parameter is not of type callback. |
| 16000050 | Internal error. |

