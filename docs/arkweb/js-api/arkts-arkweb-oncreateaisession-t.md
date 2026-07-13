# OnCreateAISession

```TypeScript
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean
```

Triggered when an AI session is created.
Allows custom model initialization and result handling.
Return `true` to bypass the default system behavior;
return `false` to proceed with the default logic.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | The session task ID. |
| params | string | Yes | Contextual data passed during creation. |
| result | OnAISessionCallback | Yes | Callback function to notify the system of the creation result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Whether to use custom logic. `true` = use custom, `false` = proceed with default. |

