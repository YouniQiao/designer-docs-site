# OnPrepareMenuCallback

```TypeScript
type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>
```

当文本选择区域变化后显示菜单之前触发该回调，可在该回调中进行菜单数据设置。入参和返回值只包含一级菜单项，不包含二级菜单项。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| menuItems | Array&lt;TextMenuItem> | Yes | 将要显示的菜单项。 说明： 对默认菜单项的名称、图标、快捷键提示修改不生效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextMenuItem> | 处理后的菜单项。 |

