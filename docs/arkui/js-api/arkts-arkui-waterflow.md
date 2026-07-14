# WaterFlow

The **WaterFlow** component is a water flow container that consists of cells formed by rows and columns and arranges items of different sizes from top to bottom according to the preset rules. > **NOTE** > The **WaterFlow** component supports the waterfall layout but does not support the edit mode or dragging of child > elements. > > The component has been bound with gestures to implement functions such as following the finger. If you need to add > custom gestures, refer to [Enhanced Gesture Interception]{@link common}.

## WaterFlow

```TypeScript
WaterFlow(options?: WaterFlowOptions)
```

Creates a **WaterFlow** component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

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
