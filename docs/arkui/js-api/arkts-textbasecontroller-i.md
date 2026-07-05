# TextBaseController

文本选择控制器。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeSelectionMenu

```TypeScript
closeSelectionMenu(): void
```

关闭自定义选择菜单或系统默认选择菜单。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

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

## setSelection

```TypeScript
setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

支持设置组件内的内容选中，选中部分背板高亮。 selectionStart和selectionEnd均为-1时表示全选。 未获焦时调用该接口不产生选中效果。 从API version 12开始，在2in1设备中，无论options取何值，调用setSelection接口都不会弹出菜单，此外，如果组件中已经存在菜单，调用setSelection接口会关闭菜单。 在非2in1设备中，options取值为MenuPolicy.DEFAULT时，遵循以下规则： 1. 组件内有手柄菜单时，接口调用后不关闭菜单，并且调整菜单位置。 2. 组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。 3. 组件内无菜单时，接口调用后也无菜单显示。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | 选中开始位置。 取值小于0时，按0处理。 |
| selectionEnd | number | Yes | 选中结束位置。 取值大于文本长度时，按当前文本长度处理。 |
| options | SelectionOptions | No |  |

