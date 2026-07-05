# TextController

Text组件的控制器。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeSelectionMenu

```TypeScript
closeSelectionMenu(): void
```

关闭自定义选择菜单或系统默认选择菜单。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getLayoutManager

```TypeScript
getLayoutManager(): LayoutManager
```

获取布局管理器对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LayoutManager | 布局管理器对象。 |

## setStyledString

```TypeScript
setStyledString(value: StyledString): void
```

触发绑定或更新属性字符串。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | StyledString | Yes | 属性字符串。 说明： StyledString的子类  [MutableStyledString]MutableStyledString也可以作为入参值。 |

## setTextSelection

```TypeScript
setTextSelection(selectionStart: number | undefined, selectionEnd: number | undefined,
                   options?: SelectionOptions): void
```

设置文本选择区域并高亮显示。 > **说明：** > > 当[copyOption](arkts-textattribute-c.md#copyOption)设置为CopyOptions.None时，设置setTextSelection不生效。 > > 当[textOverflow](arkts-textattribute-c.md#textOverflow)设置为TextOverflow.MARQUEE时，设置setTextSelection不生效。 > > 当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。 > > 当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。截断为false时，超出父组件的文本选中区域生效。 > > 如果设备为PC/2in1，即使options被赋值为MenuPolicy.SHOW，调用setTextSelection也不弹出菜单。 > > 当emoji表情被选中区域截断时，若表情的起始位置包含在设置的文本选中区域内，该表情就会被选中。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number \| undefined | Yes | 文本选择区域起始位置。 取值范围：[0, +∞），值为负数或undefined时按0处理。 |
| selectionEnd | number \| undefined | Yes | 文本选择区域结束位置。 取值范围：[0, +∞），值为负数或undefined时按0处理。 |
| options | SelectionOptions | No |  |

