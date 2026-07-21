# ListItemGroup properties/events

In addition to the universal attributes, the following attributes are supported.

**Inheritance/Implementation:** ListItemGroupAttribute extends [CommonMethod<ListItemGroupAttribute>](CommonMethod<ListItemGroupAttribute>)

**Since:** 9

<!--Device-unnamed-declare class ListItemGroupAttribute extends CommonMethod<ListItemGroupAttribute>--><!--Device-unnamed-declare class ListItemGroupAttribute extends CommonMethod<ListItemGroupAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="childrenmainsize"></a>
## childrenMainSize

```TypeScript
childrenMainSize(value: ChildrenMainSize)
```

Sets the size information of the child components of a **ListItemGroup** component along the main axis.

> **NOTE**  
>  
> - The **childrenMainSize** attribute of the **List** component must be set at the same time for the attribute to  
> take effect.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ListItemGroupAttribute-childrenMainSize(value: ChildrenMainSize): ListItemGroupAttribute--><!--Device-ListItemGroupAttribute-childrenMainSize(value: ChildrenMainSize): ListItemGroupAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ChildrenMainSize](arkts-arkui-childrenmainsize-c.md) | Yes | Size information of child components in the main axis direction. |

<a id="divider"></a>
## divider

```TypeScript
divider(
    value: ListDividerOptions | null,
  )
```

Sets the style of the divider for the list items. By default, there is no divider.

strokeWidth, startMargin, and endMargin cannot be set in percentage.

When a list item has polymorphic styles applied, the dividers above and below the pressed child component are not rendered.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ListItemGroupAttribute-divider(
    value: ListDividerOptions | null,
  ): ListItemGroupAttribute--><!--Device-ListItemGroupAttribute-divider(
    value: ListDividerOptions | null,
  ): ListItemGroupAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ListDividerOptions](arkts-arkui-listdivideroptions-i.md) \| null | Yes | [since 18] |

