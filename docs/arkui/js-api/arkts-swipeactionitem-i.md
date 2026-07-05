# SwipeActionItem

List垂直布局，ListItem向右滑动时，item左边的长距离滑动删除选项。向左滑动时，item右边的长距离滑动删除选项。 List水平布局，ListItem向上滑动时，item下边的长距离滑动删除选项。向下滑动时，item上边的长距离滑动删除选项。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onEnterActionArea

```TypeScript
onEnterActionArea?: () => void
```

在滑动条目进入删除区域时调用，只触发一次，当再次进入时仍触发。

**Type:** () => void

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onExitActionArea

```TypeScript
onExitActionArea?: () => void
```

当滑动条目退出删除区域时调用，只触发一次，当再次退出时仍触发。

**Type:** () => void

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onAction

```TypeScript
onAction?: () => void
```

组件进入长距删除区后抬手时触发。 滑动后松手的位置超过或等于设置的距离阈值，并且设置的距离阈值有效时才会触发。

**Type:** () => void

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## builderComponent

```TypeScript
builderComponent?: ComponentContent
```

当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。 该参数的优先级高于参数builder。即同时设置builder和builderComponent时，以builderComponent设置的值为准。 同一个builderComponent不推荐同时给不同的start/end使用，否则会导致显示问题。

**Type:** ComponentContent

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## actionAreaDistance

```TypeScript
actionAreaDistance?: Length
```

设置组件长距离滑动删除距离阈值。即划出组件被完全滑进视窗后，继续滑动触发删除的距离阈值。 不支持设置百分比。 删除距离阈值大于item宽度减去划出组件宽度，或删除距离阈值小于等于0就不会设置删除区域。

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## builder

```TypeScript
builder?: CustomBuilder
```

当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。

**Type:** CustomBuilder

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onStateChange

```TypeScript
onStateChange?: (state: SwipeActionState) => void
```

当列表项滑动状态变化时候触发。

**Type:** (state: SwipeActionState) => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

