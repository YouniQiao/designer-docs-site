# WidgetParamCallback (System API)

```TypeScript
type WidgetParamCallback = (challenge: Uint8Array) => WidgetParam
```

Called to get the information presented on the user authentication page for remote authentication.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-userAuth-type WidgetParamCallback = (challenge: Uint8Array) => WidgetParam--><!--Device-userAuth-type WidgetParamCallback = (challenge: Uint8Array) => WidgetParam-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | Challenge value, which can be passed in Uint8Array([]) format.  |

**Return value:**

| Type | Description |
| --- | --- |
| [WidgetParam](arkts-userauthentication-userauth-widgetparam-i-sys.md) | widgetParam - Parameters on the user authentication page.  |

