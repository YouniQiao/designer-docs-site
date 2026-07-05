# OnExecuteAIAction

```TypeScript
type OnExecuteAIAction = (id: string, params: string, result: OnAISessionCallback) => void
```

AI会话执行操作回调函数类型。用于自定义实现AI模型执行。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 会话任务ID。 |
| params | string | Yes | 执行期间传递的上下文数据（以JSON字符串格式）。 |
| result | OnAISessionCallback | Yes | 通知执行结果的回调函数。 |

