# ListItem properties/events

In addition to the universal attributes, the following attributes are supported.

**Inheritance/Implementation:** ListItemAttribute extends [CommonMethod<ListItemAttribute>](CommonMethod<ListItemAttribute>)

**Since:** 7

<!--Device-unnamed-declare class ListItemAttribute extends CommonMethod<ListItemAttribute>--><!--Device-unnamed-declare class ListItemAttribute extends CommonMethod<ListItemAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="editable"></a>
## editable

```TypeScript
editable(value: boolean | EditMode)
```

Sets whether to enable edit mode, where the list item can be deleted or moved.

**Since:** 7

**Deprecated since:** 9

<!--Device-ListItemAttribute-editable(value: boolean | EditMode): ListItemAttribute--><!--Device-ListItemAttribute-editable(value: boolean | EditMode): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| EditMode | Yes |  |

<a id="onselect"></a>
## onSelect

```TypeScript
onSelect(event: (isSelected: boolean) => void)
```

Triggered when the selected state of the list item for multiselect changes.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ListItemAttribute-onSelect(event: (isSelected: boolean) => void): ListItemAttribute--><!--Device-ListItemAttribute-onSelect(event: (isSelected: boolean) => void): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (isSelected: boolean) =&gt; void | Yes |  |

<a id="selectable"></a>
## selectable

```TypeScript
selectable(value: boolean)
```

Sets whether the list item is selectable for multiselect.This attribute takes effect only when mouse frame selection is enabled for the parent List container.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ListItemAttribute-selectable(value: boolean): ListItemAttribute--><!--Device-ListItemAttribute-selectable(value: boolean): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

<a id="selected"></a>
## selected

```TypeScript
selected(value: boolean)
```

Sets whether the list item is selected. This attribute supports two-way binding through $$.This attribute must be used before the polymorphic style is set.Otherwise, the style settings will not take effect.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

<!--Device-ListItemAttribute-selected(value: boolean): ListItemAttribute--><!--Device-ListItemAttribute-selected(value: boolean): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the list item is selected. |

<a id="sticky"></a>
## sticky

```TypeScript
sticky(value: Sticky)
```

Sets the sticky effect of the list item.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** sticky

<!--Device-ListItemAttribute-sticky(value: Sticky): ListItemAttribute--><!--Device-ListItemAttribute-sticky(value: Sticky): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Sticky](arkts-arkui-sticky-e.md) | Yes |  |

<a id="swipeaction"></a>
## swipeAction

```TypeScript
swipeAction(value: SwipeActionOptions)
```

Sets the swipe action item displayed when the list item is swiped out from the screen edge.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ListItemAttribute-swipeAction(value: SwipeActionOptions): ListItemAttribute--><!--Device-ListItemAttribute-swipeAction(value: SwipeActionOptions): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SwipeActionOptions](arkts-arkui-swipeactionoptions-i.md) | Yes | Swipe action item displayed when the list item is swiped out from the screen edge. |

