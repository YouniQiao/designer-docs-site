# OnSubmitCallback

```TypeScript
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void
```

提交回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enterKey | EnterKeyType | Yes | 输入法回车键类型。 |
| event | SubmitEvent | Yes | 提交事件。可以控制是否收起键盘。 |

