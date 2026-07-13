# ListItemGroup

The **ListItemGroup** component is used to display list item groups. It must be used with the [List]{@link list}
component. Unless specified otherwise, it spans the entire width of the **List** component.

Lazy loading of **ListItemGroup** loads the child components in the visible area as required. Compared with full
loading, lazy loading can improve the application startup speed and reduce the memory usage. The lazy loading
capabilities vary when the **ListItemGroup** component is used together with
[ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).

- When **ListItemGroup** is used together with **ForEach**, all child nodes are created at a time. The nodes within
the screen range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen
range are not removed from the tree, and the nodes that are within the screen range are laid out and rendered.
- When **ListItemGroup** is used together with **LazyForEach**, all nodes within the screen range are created, laid
out, and rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the
tree, and the nodes that are within the screen range are created, laid out, and rendered.
- When the **ListItemGroup** component is used together with **Repeat** with
[virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
**LazyForEach**. When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the
lazy loading behavior is the same as that of **ForEach**.

Preloading in **ListItemGroup** refers to loading not only the visible child components within the display area but
also some invisible child components outside the display area during idle time. Preloading can reduce frame loss
during scrolling and improve smoothness. Preloading takes effect only when lazy loading is used. The preloading
capabilities vary when the **ListItemGroup** component is used together with
[ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).

- When the **ListItemGroup** component is used together with **ForEach** and
[cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to laying out child components
within the display area, child components within the range of **cachedCount** outside the display area are pre-laid
out during idle time based on the **cachedCount** attribute of the **List** component.
- When the **ListItemGroup** component is used together with **LazyForEach** and
[cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to creating and laying out child
components within the display area, child components within the range of **cachedCount** outside the display area are
created and pre-laid out during idle time based on the **cachedCount** attribute of the **List** component.
- When the **ListItemGroup** component is used together with **Repeat** with
[virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the preloading
behavior is the same as that of **ForEach**.

> **NOTE**

> - This component can be used only as a child of [List]{@link list}.
>
> - The **ListItemGroup** component does not support the universal attribute
> [aspectRatio]{@link CommonMethod#aspectRatio}.
>
> - If the parent **List** component of **ListItemGroup** has its [listDirection]{@link ListAttribute#listDirection}
> attribute set to **Axis.Vertical**, setting the
> [universal attribute height]{@link CommonMethod#height(value: Length)} has no effect. In this case, the height of
> the **ListItemGroup** component is fixed at the sum of the component's header height, footer height, and total
> height of the list items.
>
> - If the parent **List** component of **ListItemGroup** has its **listDirection** attribute set to
> **Axis.Horizontal**, setting the [universal attribute width]{@link CommonMethod#width(value: Length)} has no
> effect. In this case, the width of the **ListItemGroup** component is fixed at the sum of the component's header
> width, footer width, and total width of the list items.
>
> - The list items in the **ListItemGroup** component cannot be edited or dragged. This means that their
> [editable]{@link ListItemAttribute#editable} attribute does not take effect.
>
> - The **ListItemGroup** ignores the **direction** attribute for setting the layout direction; instead, it adopts
> the layout direction of its parent **List** component.


## ListItemGroup

```TypeScript
ListItemGroup(options?: ListItemGroupOptions)
```

Creates a **ListItemGroup** component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ListItemGroupOptions | No | Parameters of the list item group. |

## Summary

- [ListItemGroupOptions](arkts-arkui-listitemgroup-listitemgroupoptions-i.md)
- [ListItemGroupHeaderFooterStyle](arkts-arkui-listitemgroup-listitemgroupheaderfooterstyle-e.md)
- [ListItemGroupStyle](arkts-arkui-listitemgroup-listitemgroupstyle-e.md)
