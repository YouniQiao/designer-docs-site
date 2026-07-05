# OnSelectedIndexesChange

```TypeScript
export type OnSelectedIndexesChange = (selectedIndexes: number[]) => void
```

多选分段按钮选中项变更时调用的回调函数类型。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndexes | number[] | Yes | 分段按钮选项下标集合。 |

