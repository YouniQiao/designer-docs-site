# WidgetParamCallback

```TypeScript
type WidgetParamCallback = (challenge: Uint8Array) => WidgetParam
```

调用以获取远程身份验证的用户身份验证页面上显示的信息。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | 挑战值，可以以Uint8Array([])格式传递。 |

**Return value:**

| Type | Description |
| --- | --- |
| WidgetParam | widgetParam -用户认证页面参数。 |

