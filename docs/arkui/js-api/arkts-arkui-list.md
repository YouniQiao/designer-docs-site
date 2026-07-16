# List

The **List** component provides a list container that presents a series of list items arranged in a column with the
same width. It supports presentations of the same type of data in a multiple and coherent row style, for example,
images or text.

Lazy loading of **List** loads the child components in the visible area as required. Compared with full loading, lazy
loading can improve the app startup speed and reduce the memory usage. The lazy loading capabilities vary when the
**List** component is used together with
[ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).

- When **List** is used together with **ForEach**, all child nodes are created at a time. The nodes within the screen
range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen range are not
removed from the tree, and the nodes that are within the screen range are laid out and rendered.
- When **List** is used together with **LazyForEach**, all nodes within the screen range are created, laid out, and
rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the tree, and the
nodes that are within the screen range are created, laid out, and rendered.
- When the **List** component is used together with **Repeat** with
[virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
**LazyForEach**. When the **List** component is used together with **Repeat** without **virtualScroll**, the lazy
loading behavior is the same as that of **ForEach**.

If a scrollable component is nested in a **List** component, their scrolling directions are the same, and the main
axis size is not set for the **List** component, the **List** component loads all child components. As a result, lazy
loading does not take effect. In this scenario, you are advised to use the [ListItemGroup]{@link list_item_group}
component to optimize the performance.

Preloading in **List** refers to loading not only the visible child components within the display area but also some
invisible child components outside the display area during idle time. Preloading can reduce frame loss during
scrolling and improve smoothness. Preloading takes effect only when lazy loading is used. You can set the number of
components to be preloaded for the **List** component using
[cachedCount]{@link ListAttribute#cachedCount(value: number)}. By default, child components equivalent to one screen
above and below the visible area are preloaded (up to a maximum of 16 rows). The preloading capabilities vary when
the **List** component is used together with
[ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).

- When the **List** component is used together with **ForEach** and **cachedCount** is set, in addition to laying out
child components within the visible area, child components within the range of **cachedCount** outside the visible
area are pre-laid out during idle time.
- When the **List** component is used together with **LazyForEach** and **cachedCount** is set, in addition to
creating and laying out child components within the display area, child components within the range of
**cachedCount** outside the display area are pre-created and pre-laid out during idle time.
- When the **List** component is used together with **Repeat** with
[virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
When the **List** component is used together with **Repeat** without **virtualScroll**, the preloading behavior is
the same as that of **ForEach**.

> **NOTE**

> The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
> custom gestures, refer to [Gesture Blocking Enhancement]{@link common}.


## List

```TypeScript
List(options?: ListOptions)
```

Creates a list container.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ListOptions | No | Options of the **List** component. |

## Summary

- [ChainAnimationOptions](arkts-arkui-list-chainanimationoptions-i-sys.md)
- [CloseSwipeActionOptions](arkts-arkui-list-closeswipeactionoptions-i.md)
- [ListBackPressBehavior](arkts-arkui-list-listbackpressbehavior-i.md)
- [ListDividerOptions](arkts-arkui-list-listdivideroptions-i.md)
- [ListOptions](arkts-arkui-list-listoptions-i.md)
- [UIListEvent](arkts-arkui-list-uilistevent-i.md)
- [VisibleListContentInfo](arkts-arkui-list-visiblelistcontentinfo-i.md)
- [OnListScrollIndexCallback](arkts-arkui-list-onlistscrollindexcallback-t.md)
- [OnScrollVisibleContentChangeCallback](arkts-arkui-list-onscrollvisiblecontentchangecallback-t.md)
- [ChainEdgeEffect](arkts-arkui-list-chainedgeeffect-e-sys.md)
- [ListItemAlign](arkts-arkui-list-listitemalign-e.md)
- [ListItemGroupArea](arkts-arkui-list-listitemgrouparea-e.md)
- [ScrollSnapAlign](arkts-arkui-list-scrollsnapalign-e.md)
- [ScrollSnapAnimationSpeed](arkts-arkui-list-scrollsnapanimationspeed-e.md)
- [ScrollState](arkts-arkui-list-scrollstate-e.md)
- [StickyStyle](arkts-arkui-list-stickystyle-e.md)
