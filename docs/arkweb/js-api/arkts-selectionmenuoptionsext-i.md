# SelectionMenuOptionsExt

自定义菜单扩展项。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## preview

```TypeScript
preview?: CustomBuilder
```

自定义选择菜单的预览内容样式，未配置时无预览内容。

**Type:** CustomBuilder

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## onDisappear

```TypeScript
onDisappear?: Callback<void>
```

自定义选择菜单关闭时回调。

**Type:** Callback<void>

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## onMenuHide

```TypeScript
onMenuHide?: Callback<void>
```

自定义选择菜单隐藏时回调。

**Type:** Callback<void>

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## onMenuShow

```TypeScript
onMenuShow?: Callback<void>
```

自定义选择菜单显示时回调。

**Type:** Callback<void>

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## menuType

```TypeScript
menuType?: MenuType
```

自定义选择菜单类型。 默认值：`MenuType.SELECTION_MENU`。 从API version 20起，`MenuType.PREVIEW_MENU`支持超链接预览。

**Type:** MenuType

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## onAppear

```TypeScript
onAppear?: Callback<void>
```

自定义选择菜单弹出时回调。

**Type:** Callback<void>

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

## previewMenuOptions

```TypeScript
previewMenuOptions?: PreviewMenuOptions
```

自定义选择预览菜单选项。

**Type:** PreviewMenuOptions

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

