# SearchSubmitCallback

```TypeScript
declare type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void
```

点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchContent | string | Yes | 当前搜索框中输入的文本内容。 |
| event | SubmitEvent | no |  |

