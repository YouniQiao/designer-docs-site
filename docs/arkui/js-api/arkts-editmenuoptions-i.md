# EditMenuOptions

编辑菜单选项

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCreateMenu

```TypeScript
onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>
```

在菜单创建时触发该回调，可在该回调中进行菜单数据设置。入参和返回值只包含一级菜单项，不包含二级菜单项。

**Since:** 12

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

## onMenuItemClick

```TypeScript
onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean
```

菜单项功能函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| menuItem | TextMenuItem | Yes | 菜单项。 说明： 从API version 23开始，对于具备可展开二级菜单能力的一级菜单项，例如自动填充，仅执行系统默认逻辑，不会执  行用户自定义逻辑。 |
| range | TextRange | Yes | 选中的文本信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 菜单项的执行逻辑。 返回为true，拦截系统默认逻辑，仅执行自定义逻辑。 返回为false，先执行自定义逻辑，再执行系统逻辑。 |

## onPrepareMenu

```TypeScript
onPrepareMenu?: OnPrepareMenuCallback
```

当文本选择区域变化后显示菜单之前触发该回调，可在该回调中进行菜单数据设置。 </br>

**Type:** OnPrepareMenuCallback

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

