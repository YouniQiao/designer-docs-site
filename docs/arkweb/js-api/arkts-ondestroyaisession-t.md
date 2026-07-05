# OnDestroyAISession

```TypeScript
type OnDestroyAISession = (id: string) => void
```

AI会话销毁回调函数类型。用于清理与自定义AI模型关联的资源。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 会话任务ID。 |

