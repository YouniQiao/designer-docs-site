# OnSelectCallback

```TypeScript
declare type OnSelectCallback = (index: number, selectStr: string) => void
```

下拉菜单选中某一项时触发的回调函数类型定义。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 选中项的索引，索引值从0开始。 |
| selectStr | string | Yes | 选中项的值。 |

