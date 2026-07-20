# WaterFlow

The **WaterFlow** component is a water flow container that consists of cells formed by rows and columns and arranges
items of different sizes from top to bottom according to the preset rules.

> **NOTE**

> The **WaterFlow** component supports the waterfall layout but does not support the edit mode or dragging of child
> elements.
>
> The component has been bound with gestures to implement functions such as following the finger. If you need to add
> custom gestures, refer to [Enhanced Gesture Interception]{@link common}.

## Child Components

Only the [FlowItem]{@link flow_item} child component and custom components are supported. When a custom component is used in **WaterFlow**, you are advised to use **FlowItem** as the top-level component of the custom component. You are not advised to set attributes and event methods for the custom component.

Child components can be dynamically generated using rendering control types [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),[ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md). **LazyForEach** or **Repeat** is recommended to optimize performance.

> **NOTE**  
>  
> When the **visibility** attribute of a child component of **WaterFlow** is set to **None**, this child component is  
> not displayed in the container, but its **columnsGap**, **rowsGap**, and **margin** settings are still effective.  
> > If there are a large number of child components, you are advised to adopt methods such as lazy loading, data  
> caching, component reuse, fixed dimensions, and layout optimization to improve performance and reduce memory usage.  
> For best practices, see  
> [Optimizing Frame Loss for Waterfall Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-waterflow-performance-optimization).  
>  
> In vertical layout mode, **WaterFlow** calculates the cumulative height of child components in each column and  
> places new child components in the column with the smallest cumulative height to maintain a compact overall layout.  
>  
> If the heights of multiple columns are the same, the leftmost column is prioritized. In RTL mode, the rightmost  
> column is prioritized.  
>  
> Starting from API version 21, the maximum width or height for a single child component inside a **WaterFlow**  
> container is 16,777,216 px. In API version 20 and earlier versions, the limit was 1,000,000 px. If a child  
> component exceeds the applicable size limit, scrolling or display behavior may become abnormal.

## WaterFlow

```TypeScript
WaterFlow(options?: WaterFlowOptions)
```

Creates a **WaterFlow** component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WaterFlowInterface-(options?: WaterFlowOptions): WaterFlowAttribute--><!--Device-WaterFlowInterface-(options?: WaterFlowOptions): WaterFlowAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | WaterFlowOptions | No | Parameters of the **WaterFlow** component. |

## Summary

- [UIWaterFlowEvent](arkts-arkui-waterflow-uiwaterflowevent-i.md)
- [WaterFlowOptions](arkts-arkui-waterflow-waterflowoptions-i.md)
- [GetItemMainSizeByIndex](arkts-arkui-waterflow-getitemmainsizebyindex-t.md)
- [OnWaterFlowScrollIndexCallback](arkts-arkui-waterflow-onwaterflowscrollindexcallback-t.md)
- [WaterFlowLayoutMode](arkts-arkui-waterflow-waterflowlayoutmode-e.md)
