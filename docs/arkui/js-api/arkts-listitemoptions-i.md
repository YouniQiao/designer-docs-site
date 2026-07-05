# ListItemOptions

ListItem组件参数。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: ListItemStyle
```

设置List组件卡片样式。 默认值：ListItemStyle.NONE 设置为ListItemStyle.NONE时无样式。 设置为ListItemStyle.CARD时，建议配合ListItemGroup的ListItemGroupStyle.CARD同时使用，显示默认卡片样式。 卡片样式下，ListItem默认规格：高度48vp，宽度100%，左右内边距8vp。如果需要实现ListItem高度自适应，可以把height设置为undefined。 卡片样式下，为卡片内的列表选项提供了默认的focus、hover、press、selected和disable样式。 当设置为ListItemStyle.CARD时，List的listDirection属性值须为Axis.Vertical，如果设置为Axis.Horizontal，会导致显示混乱； List属性alignListItem默认为ListItemAlign.Center，居中对齐显示。

**Type:** ListItemStyle

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

