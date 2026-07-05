# OnCreateAISession

```TypeScript
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean
```

AI会话创建回调函数类型。允许自定义模型初始化和结果处理。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

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
| boolean | - `true`表示使用自定义逻辑，跳过系统默认行为；`false`表示继续执行系统默认逻辑。 |

