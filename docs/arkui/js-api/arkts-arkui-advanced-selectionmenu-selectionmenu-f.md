# SelectionMenu

## SelectionMenu

```TypeScript
export declare function SelectionMenu(options: SelectionMenuOptions): void
```

入参为空时，文本选择菜单组件SelectionMenu内容区大小及组件大小为零。表现例如，富文本组件[RichEditor]rich_editor使用 [bindSelectionMenu]RichEditorAttribute#bindSelectionMenu接口绑定一个SelectionMenu的右键菜单，则右键富文本组件区域时无任何菜单弹出。

**Since:** 11

**Decorator:** @Builder

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SelectionMenuOptions | Yes | 文本选择菜单可选项。 |

