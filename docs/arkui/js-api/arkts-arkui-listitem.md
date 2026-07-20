# ListItem

The ListItem component displays specific items in the list. It must be used together with List.

> **NOTE**
>
> - This component is supported since API version 7. Updates will be marked with a superscript to indicate
> their earliest API version.
>
> - The parent of this component can only be List or ListItemGroup.
>
> - When this component is used with LazyForEach, its child components are created when it is created.
> When this component is used with if/else or ForEach, or when the parent component is List or ListItemGroup,
> its child components are created when it is laid out.

## Child Components

This component can contain a single child component.

## ListItem

```TypeScript
ListItem(value?: ListItemOptions)
```

Creates a ListItem component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

<!--Device-ListItemInterface-(value?: ListItemOptions): ListItemAttribute--><!--Device-ListItemInterface-(value?: ListItemOptions): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ListItemOptions | No |  |

## ListItem

```TypeScript
ListItem(value?: string)
```

Creates a ListItem component.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** <!--SUBSTITUTE_API-->listItem/ListItemInterface<!--/SUBSTITUTE_API-->

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ListItemInterface-(value?: string): ListItemAttribute--><!--Device-ListItemInterface-(value?: string): ListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | No |  |

## Summary

- [ListItemOptions](arkts-arkui-listitem-listitemoptions-i.md)
- [SwipeActionItem](arkts-arkui-listitem-swipeactionitem-i.md)
- [SwipeActionOptions](arkts-arkui-listitem-swipeactionoptions-i.md)
- [EditMode](arkts-arkui-listitem-editmode-e.md)
- [ListItemStyle](arkts-arkui-listitem-listitemstyle-e.md)
- [ListItemSwipeActionDirection](arkts-arkui-listitem-listitemswipeactiondirection-e.md)
- [Sticky](arkts-arkui-listitem-sticky-e.md)
- [SwipeActionState](arkts-arkui-listitem-swipeactionstate-e.md)
- [SwipeEdgeEffect](arkts-arkui-listitem-swipeedgeeffect-e.md)
