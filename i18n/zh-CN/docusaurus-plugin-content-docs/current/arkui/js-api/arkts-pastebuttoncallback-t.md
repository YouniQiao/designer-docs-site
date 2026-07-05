# PasteButtonCallback

```TypeScript
type PasteButtonCallback = (event: ClickEvent, result: PasteButtonOnClickResult, error?: BusinessError<void>) => void
```

点击粘贴控件触发该回调。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | ClickEvent | 是 | 点击事件对象，包含点击位置、时间戳、输入设备等信息。 |
| result | PasteButtonOnClickResult | 是 | 剪贴板权限的授权结果。  返回SUCCESS表示已获得当前剪贴板内容的临时读取权限，可以继续执行读取操作；返回TEMPORARY_AUTHORIZATION_FAILED表示本次授权未成功，不应继续读取剪贴板内容。 |
| error | BusinessError&lt;void> | 否 |  |

