# OnCreateMenuCallback

```TypeScript
type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>
```

菜单创建时触发。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| menuItems | Array&lt;TextMenuItem> | Yes | 当前显示的菜单项。 说明： 对默认菜单项的名称、图标、快捷键提示修改不生效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextMenuItem> | 处理后的菜单项。 |

