# Grid

The **Grid** component consists of cells formed by rows and columns. You can specify the cells where items are located to form various layouts. > **NOTE** > > The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add > custom gestures, refer to [Gesture Blocking Enhancement]{@link common}.

## Grid

```TypeScript
Grid(scroller?: Scroller, layoutOptions?: GridLayoutOptions)
```

Creates a **Grid** component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scroller | Scroller | No | Controller, which can be bound to scrollable components.<br>**NOTE**<br>It cannot bebound to the same scrolling control object as other scrollable components, such as[ArcList]{@link @ohos.arkui.ArcList}, [List]{@link list}, [Grid]{@link grid}, [Scroll]{@link scroll}, and[WaterFlow]{@link water_flow}. |
| layoutOptions | GridLayoutOptions | No | Grid layout options. |

## Summary

- [ComputedBarAttribute](arkts-arkui-grid-computedbarattribute-i.md)
- [GridLayoutOptions](arkts-arkui-grid-gridlayoutoptions-i.md)
- [StartLineInfo](arkts-arkui-grid-startlineinfo-i-sys.md)
- [UIGridEvent](arkts-arkui-grid-uigridevent-i.md)
- [OnGetStartIndexByIndexCallback](arkts-arkui-grid-ongetstartindexbyindexcallback-t-sys.md)
- [OnGetStartIndexByOffsetCallback](arkts-arkui-grid-ongetstartindexbyoffsetcallback-t-sys.md)
- [OnGridScrollIndexCallback](arkts-arkui-grid-ongridscrollindexcallback-t.md)
- [GridDirection](arkts-arkui-grid-griddirection-e.md)
- [GridItemAlignment](arkts-arkui-grid-griditemalignment-e.md)
