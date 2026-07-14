# ScrollBar

The **ScrollBar** component is designed to be used together with scrollable components such as [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link list}, [Grid]{@link grid}, [Scroll]{@link scroll}, and [WaterFlow]{@link water_flow}. > **NOTE** > > - This component is supported since API version 8. Updates will be marked with a superscript to indicate their > earliest API version. > > - If the size of the main axis direction is not set for **ScrollBar**, the **maxSize** value in the > [layout constraints]{@link FrameNode:LayoutConstraint} of the parent component is used. If the parent component of > the **ScrollBar** component contains a scrollable component, such as [ArcList]{@link @ohos.arkui.ArcList}, > [List]{@link list}, [Grid]{@link grid}, [Scroll]{@link scroll}, or [WaterFlow]{@link water_flow}, you are advised > to set the size in the main axis direction of the **ScrollBar**; otherwise, the size in the main axis direction of > **ScrollBar** may become infinite.

## ScrollBar

```TypeScript
ScrollBar(value: ScrollBarOptions)
```

Creates a scroll bar.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScrollBarOptions | Yes | Parameters of the **ScrollBar** component. |

## Summary

- [ScrollBarOptions](arkts-arkui-scrollbar-scrollbaroptions-i.md)
- [ScrollBarDirection](arkts-arkui-scrollbar-scrollbardirection-e.md)
