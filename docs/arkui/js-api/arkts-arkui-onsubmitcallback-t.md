# OnSubmitCallback

```TypeScript
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void
```

Defines the callback for submission.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void--><!--Device-unnamed-declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enterKey | EnterKeyType | Yes | Type of the Enter key. |
| event | SubmitEvent | Yes | Submit event. It can be used to control whether to dismiss the keyboard. |

