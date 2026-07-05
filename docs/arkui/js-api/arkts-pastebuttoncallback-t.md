# PasteButtonCallback

```TypeScript
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void
```

点击粘贴控件触发该回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | 点击事件对象，包含点击位置、时间戳、输入设备等信息。 |
| result | PasteButtonOnClickResult | Yes | 剪贴板权限的授权结果。  返回SUCCESS表示已获得当前剪贴板内容的临时读取权限，可以继续执行读取操作；返回TEMPORARY_AUTHORIZATION_FAILED表示本次授权未成功，不应继续读取剪贴板内容。 |
| error | BusinessError&lt;void> | no |  |

