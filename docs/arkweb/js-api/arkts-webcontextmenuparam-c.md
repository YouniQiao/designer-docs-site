# WebContextMenuParam

定义上下文菜单参数，关联{@link WebContextMenuParam}方法。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

WebContextMenuParam的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## existsImageContents

```TypeScript
existsImageContents(): boolean
```

长按菜单所在位置是否包含图片内容。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回当前上下文菜单位置是否存在图片内容。 |

## getContextMenuMediaType

```TypeScript
getContextMenuMediaType(): ContextMenuDataMediaType
```

返回上下文节点的类型。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ContextMenuDataMediaType | 返回上下文节点的类型。 |

## getEditStateFlags

```TypeScript
getEditStateFlags(): number
```

返回上下文可编辑状态标记 {@link ContextMenuEditStateFlags}。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## getInputFieldType

```TypeScript
getInputFieldType(): ContextMenuInputFieldType
```

若上下文菜单在输入框上触发，则返回输入框类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ContextMenuInputFieldType | 输入框上触发菜单时返回输入框类型。 |

## getLinkUrl

```TypeScript
getLinkUrl(): string
```

若长按位置为链接，则返回经过安全校验的链接 URL。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 关联链接时返回链接地址，否则返回 null。 |

## getMediaType

```TypeScript
getMediaType(): ContextMenuMediaType
```

返回上下文节点的类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ContextMenuMediaType | 返回上下文节点的类型。 |

## getPreviewHeight

```TypeScript
getPreviewHeight(): number
```

返回选择菜单预览高度。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 预览菜单高度。单位：像素。 |

## getPreviewWidth

```TypeScript
getPreviewWidth(): number
```

返回选择菜单预览宽度。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 菜单预览宽度。单位：像素。 |

## getSelectionText

```TypeScript
getSelectionText(): string
```

返回选中的文本内容。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回选中文本，未选中任何文本时返回 null。 |

## getSourceType

```TypeScript
getSourceType(): ContextMenuSourceType
```

返回上下文菜单的来源类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ContextMenuSourceType |  |

## getSourceUrl

```TypeScript
getSourceUrl(): string
```

若选中元素包含 SRC 属性，则返回其资源地址 URL。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 若当前上下文菜单源自元素 src 属性，则返回资源链接地址，否则返回 null。 |

## getUnfilteredLinkUrl

```TypeScript
getUnfilteredLinkUrl(): string
```

若长按位置为链接，则返回该链接的原始 URL。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 关联链接时返回未过滤的链接地址，否则返回 null。 |

## isEditable

```TypeScript
isEditable(): boolean
```

返回当前上下文是否可编辑。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## x

```TypeScript
x(): number
```

菜单在Web组件内的水平偏移坐标。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 上下文菜单X坐标。  正常情况下返回非负整数，否则返回 -1。  单位：像素。 |

## y

```TypeScript
y(): number
```

菜单在Web组件内的垂直偏移坐标。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 上下文菜单Y坐标。  正常情况下返回非负整数，否则返回 -1。  单位：像素。 |

