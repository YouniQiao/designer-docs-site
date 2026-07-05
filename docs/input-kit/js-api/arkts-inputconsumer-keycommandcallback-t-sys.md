# KeyCommandCallback

```TypeScript
type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void
```

按键命令回调函数类型，当快捷键注册条件满足时触发的回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOptions | KeyOptions | Yes | 触发回调时的组合键选项。 |
| keyEvent | KeyEvent | Yes | 按键事件对象，包含按键详细信息。 |

