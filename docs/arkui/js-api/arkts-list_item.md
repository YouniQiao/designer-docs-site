# list_item

ListItem组件实例。

## list_item

```TypeScript
list_item(value?: ListItemOptions)
```

创建ListItem组件。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ListItemOptions | No |  |

```TypeScript
list_item(value?: string)
```

创建ListItem组件。

**Since:** 7

**Deprecated since:** 10

**Substitute:** listItem/ListItemInterface

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ListItemAttribute](arkts-listitemattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |
| [ListItemSwipeActionManager](arkts-listitemswipeactionmanager-c.md) | ListItem划出菜单的管理器。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ListItemInterface](arkts-listiteminterface-i.md) | 用来展示列表具体item，必须配合[List]{@link list}来使用。 > **说明：** > > * > > * 该组件的父组件只能是[List]{@link list}或者[ListItemGroup]{@link list_item_group}。 > > * 当ListItem配合LazyForEach使用时，ListItem子组件在ListItem创建时创建。配合if/else、ForEach使用时，或父组件为List/ListItemGroup时，ListItem子组件在ListItem布局时创建。 |
| [ListItemOptions](arkts-listitemoptions-i.md) | ListItem组件参数。 |
| [SwipeActionItem](arkts-swipeactionitem-i.md) | List垂直布局，ListItem向右滑动时，item左边的长距离滑动删除选项。向左滑动时，item右边的长距离滑动删除选项。 List水平布局，ListItem向上滑动时，item下边的长距离滑动删除选项。向下滑动时，item上边的长距离滑动删除选项。 |
| [SwipeActionOptions](arkts-swipeactionoptions-i.md) | start和end对应的@builder函数中顶层必须是单个组件，否则会引发未定义行为。 如果@builder函数中顶层是if/else、ForEach等语句，那么需要保证if/else、ForEach等语句必须能生成单个组件。 滑动手势只在listItem区域上，如果子组件划出ListItem区域外，在ListItem以外部分不会响应划动手势。 所以在多列模式下，建议不要将划出组件设置太宽。 |

### Enums

| Name | Description |
| --- | --- |
| [EditMode](arkts-editmode-e.md) | ListItem元素编辑模式枚举。 |
| [ListItemStyle](arkts-listitemstyle-e.md) | List组件卡片样式枚举。 |
| [ListItemSwipeActionDirection](arkts-listitemswipeactiondirection-e.md) | ListItem划出菜单的展开方向。 |
| [Sticky](arkts-sticky-e.md) | ListItem吸顶效果枚举。 |
| [SwipeActionState](arkts-swipeactionstate-e.md) | 列表项滑动状态枚举。 |
| [SwipeEdgeEffect](arkts-swipeedgeeffect-e.md) | 滑动效果枚举 |

### Constants

| Name | Description |
| --- | --- |
| [ListItem](arkts-list-item-con.md#ListItem) | 用来展示列表具体item，必须配合[List]{@link list}来使用。 > **说明：** > > * > > * 该组件的父组件只能是[List]{@link list}或者[ListItemGroup]{@link list_item_group}。 > > * 当ListItem配合LazyForEach使用时，ListItem子组件在ListItem创建时创建。配合if/else、ForEach使用时，或父组件为List/ListItemGroup时，ListItem子组件在ListItem布局时创建。 ###### 子组件 可以包含单个子组件。 |
| [ListItemInstance](arkts-list-item-con.md#ListItemInstance) | ListItem组件实例。 |

