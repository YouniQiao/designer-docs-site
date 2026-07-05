# ListItemAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** ListItemAttributeextends: CommonMethod<ListItemAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## editable

```TypeScript
editable(value: boolean | EditMode)
```

设置当前ListItem元素是否可编辑，进入编辑模式后可删除或移动列表项。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| EditMode | Yes |  |

## onSelect

```TypeScript
onSelect(event: (isSelected: boolean) => void)
```

ListItem元素被鼠标框选的状态改变时触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (isSelected: boolean) => void | Yes |  |

## selectable

```TypeScript
selectable(value: boolean)
```

设置当前ListItem元素是否可以被鼠标框选。外层List容器的鼠标框选开启时，ListItem的框选才生效。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## selected

```TypeScript
selected(value: boolean)
```

设置当前ListItem选中状态。该属性支持$$双向绑定变量。 该属性需要在设置多态样式前使用才能生效选中态样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当前ListItem选中状态。设置为true时为选中状态，设置为false时为默认状态。默认值：false |

## sticky

```TypeScript
sticky(value: Sticky)
```

设置ListItem吸顶效果。

**Since:** 7

**Deprecated since:** 9

**Substitute:** list/List#sticky

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Sticky | Yes |  |

## swipeAction

```TypeScript
swipeAction(value: SwipeActionOptions)
```

用于设置ListItem的划出组件。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SwipeActionOptions | Yes | ListItem的划出组件。 |

