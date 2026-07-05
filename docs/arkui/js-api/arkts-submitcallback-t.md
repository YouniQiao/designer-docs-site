# SubmitCallback

```TypeScript
declare type SubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void
```

软键盘按下回车键时的回调事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enterKey | EnterKeyType | Yes | 软键盘输入法回车键类型。具体类型见EnterKeyType枚举说明。 |
| event | SubmitEvent | Yes | 当提交的时候，提供保持组件编辑状态的方法。EnterKeyType指定为NEW_LINE时，默认保持编辑态。 |

