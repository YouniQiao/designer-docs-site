# ListItemGroupAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** ListItemGroupAttributeextends: CommonMethod<ListItemGroupAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## childrenMainSize

```TypeScript
childrenMainSize(value: ChildrenMainSize)
```

设置ListItemGroup组件的子组件在主轴方向的大小信息。 > **说明：** > > - 必须同时给所在的List组件设置childrenMainSize属性才可以正常生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ChildrenMainSize | Yes | 该对象用来维护子组件在主轴方向的大小信息。 |

## divider

```TypeScript
divider(
    value: ListDividerOptions | null,
  )
```

设置ListItem分割线样式，默认无分割线。 strokeWidth，startMargin和endMargin不支持设置百分比。 ListItem设置[多态样式]common时，被按压的子组件上下的分割线不绘制。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ListDividerOptions \| null | Yes | ListItem分割线样式。 默认值：null [since 18] |

