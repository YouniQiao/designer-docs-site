# menu

Defines Menu Component instance.

## menu

```TypeScript
menu()
```

作为菜单的固定容器，无参数。 > **说明：** > > - 菜单和菜单项宽度计算规则： > > > > - 布局过程中，期望每个菜单项的宽度一致。若子组件设置了宽度，则以[constraintSize]{@link CommonMethod#constraintSize}为准。 > > > > - Menu不设置宽度的情况：Menu会对子组件MenuItem、MenuItemGroup设置默认2栅格的宽度，若菜单项内容区比2栅格宽，则会自适应撑开。 > > > > - Menu设置宽度的情况：Menu会对子组件MenuItem、MenuItemGroup设置减去padding后的固定宽度。 > > > > - Menu支持设置的最小宽度为64vp。 > > - Menu不支持的通用属性：[外描边设置]{@link common}下的属性、 > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [MenuAttribute](arkts-menuattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [MenuInterface](arkts-menuinterface-i.md) | 以垂直列表形式显示的菜单。 > **说明：** > - Menu组件需和 > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或 > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)} > 方法配合使用，不支持作为普通组件单独使用。 |

### Enums

| Name | Description |
| --- | --- |
| [SubMenuExpandingMode](arkts-submenuexpandingmode-e.md) | Menu子菜单展开样式枚举。 |

### Constants

| Name | Description |
| --- | --- |
| [Menu](arkts-menu-con.md#Menu) | 以垂直列表形式显示的菜单。 > **说明：** > - Menu组件需和 > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或 > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)} > 方法配合使用，不支持作为普通组件单独使用。 ###### 子组件 包含[MenuItem]{@link menu_item}、[MenuItemGroup]{@link menu_item_group}子组件。 |
| [MenuInstance](arkts-menu-con.md#MenuInstance) | Defines Menu Component instance. |

