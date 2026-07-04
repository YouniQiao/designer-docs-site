# OnDestroyAISession

```TypeScript
type OnDestroyAISession = (id: string) => void
```

Triggered when an AI session is destroyed. Used for cleaning up resources associated with custom AI models.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | The session task ID. |

