# PasteButtonAttribute

不支持通用属性，仅继承[安全控件通用属性]./security_component。 不支持通用事件，仅支持以下事件。

**Inheritance:** PasteButtonAttributeextends: SecurityComponentMethod<PasteButtonAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClick

```TypeScript
onClick(event: PasteButtonCallback)
```

点击粘贴控件触发该回调，回调返回授权结果。授权成功后应用可临时获取读取剪贴板权限。 > **说明** > - 为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PasteButtonCallback | Yes | 点击事件的回调函数，用于处理粘贴控件点击后的授权结果。  从API version 18开始，统一使用[PasteButtonCallback](arkts-pastebuttoncallback-t.md#PasteButtonCallback)，可额外获取error信息。 [since 18] |

