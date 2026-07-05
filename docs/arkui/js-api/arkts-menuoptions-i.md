# MenuOptions

菜单项的信息，继承自[ContextMenuOptions](arkts-contextmenuoptions-i.md#ContextMenuOptions)。

**Inheritance:** MenuOptionsextends: ContextMenuOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

菜单标题。 **说明：** 仅在content设置为Array<[MenuElement](arkts-menuelement-i.md#MenuElement)> 时生效。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

是否在子窗口显示菜单。 true：在子窗口显示菜单；false：不在子窗显示菜单。 默认值：2in1设备上为true，其他设备为false。 **说明：** 仅对2in1设备生效。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

