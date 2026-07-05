# OnAISessionCallback

```TypeScript
type OnAISessionCallback = (state: AISessionResultType, content: string) => void
```

AI会话操作结果回调函数类型。用于报告会话创建或执行的结果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AISessionResultType | Yes | The current result state. |
| content | string | Yes | The detailed result or response content. |

