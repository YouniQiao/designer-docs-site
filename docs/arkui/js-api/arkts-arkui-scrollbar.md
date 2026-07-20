# ScrollBar

The **ScrollBar** component is designed to be used together with scrollable components such as
[ArcList]{@link @ohos.arkui.ArcList}, [List]{@link list}, [Grid]{@link grid}, [Scroll]{@link scroll}, and
[WaterFlow]{@link water_flow}.

> **NOTE**
>
> - This component is supported since API version 8. Updates will be marked with a superscript to indicate their
> earliest API version.
>
> - If the size of the main axis direction is not set for **ScrollBar**, the **maxSize** value in the
> [layout constraints]{@link FrameNode:LayoutConstraint} of the parent component is used. If the parent component of
> the **ScrollBar** component contains a scrollable component, such as [ArcList]{@link @ohos.arkui.ArcList},
> [List]{@link list}, [Grid]{@link grid}, [Scroll]{@link scroll}, or [WaterFlow]{@link water_flow}, you are advised
> to set the size in the main axis direction of the **ScrollBar**; otherwise, the size in the main axis direction of
> **ScrollBar** may become infinite.

## Child Components

This component can contain a single child component.

## Example 1: Implementing a ScrollBar Component with Child Components

This example illustrates the style of a **ScrollBar** component with child components.

```ts
// xxx.ets
@Entry
@Component
struct ScrollBarExample {
private scroller: Scroller = new Scroller();
private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
build() {
Column() {
Stack({ alignContent: Alignment.End }) {
Scroll(this.scroller) {
Flex({ direction: FlexDirection.Column }) {
ForEach(this.arr, (item: number) => {
Row() {
Text(item.toString())
.width('80%')
.height(60)
.backgroundColor('#3366CC')
.borderRadius(15)
.fontSize(16)
.textAlign(TextAlign.Center)
.margin({ top: 5 })
}
}, (item: number) => item.toString())
}.margin({ right: 15 })
}
.width('90%')
.scrollBar(BarState.Off)
.scrollable(ScrollDirection.Vertical)
ScrollBar({ scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto }) {
Text()
.width(20)
.height(100)
.borderRadius(10)
.backgroundColor('#C0C0C0')
}.width(20).backgroundColor('#ededed')
}
}
}
}
```

![en-us_image_0000001232775585](figures/en-us_image_0000001232775585.gif)

## Example 2: Implementing a ScrollBar Component Without Child Components

This example illustrates the style of a **ScrollBar** component without child components. The [scrollBarColor]{@link ScrollBarAttribute#scrollBarColor} attribute is added since API version 20.

```ts
import { ColorMetrics } from '@kit.ArkUI'
@Entry
@Component
struct ScrollBarExample {
private scroller: Scroller = new Scroller();
private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
@State scrollBarColor: ColorMetrics = ColorMetrics.rgba(24, 35, 48, 0.4);
build() {
Column() {
Stack({ alignContent: Alignment.End }) {
Scroll(this.scroller) {
Flex({ direction: FlexDirection.Column }) {
ForEach(this.arr, (item: number) => {
Row() {
Text(item.toString())
.width('80%')
.height(60)
.backgroundColor('#3366CC')
.borderRadius(15)
.fontSize(16)
.textAlign(TextAlign.Center)
.margin({ top: 5 })
}
}, (item: number) => item.toString())
}.margin({ right: 15 })
}
.width('90%')
.scrollBar(BarState.Off)
.scrollable(ScrollDirection.Vertical)
ScrollBar({ scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto })
.scrollBarColor(this.scrollBarColor)
}
}
}
}
```

![en-us_image_scrollbar](figures/en-us_image_scrollbar.gif)

## Example 3: Enabling Nested Scrolling

This example demonstrates how to enable nested scrolling for a **ScrollBar** component using the [enableNestedScroll]{@link ScrollBarAttribute#enableNestedScroll} attribute. This feature is available from API version 20.

```ts
import { ColorMetrics } from '@kit.ArkUI'
@Entry
@Component
struct StickyNestedScroll {
listScroller: Scroller = new Scroller();
@State array: number[] = [];
@State scrollBarColor: ColorMetrics = ColorMetrics.rgba(24, 35, 48, 0.4);
@Styles
listCard() {
.backgroundColor(Color.White)
.height(72)
.width('100%')
.borderRadius(12)
}
build() {
Stack() {
Scroll() {
Column() {
Text('Scroll Area')
.width('100%')
.height('40%')
.backgroundColor('#0080DC')
.textAlign(TextAlign.Center)
List({ space: 10, scroller: this.listScroller }) {
ForEach(this.array, (item: number) => {
ListItem() {
Text('item' + item)
.fontSize(16)
}
.listCard()
}, (item: number) => item.toString())
}
.scrollBar(BarState.Off)
.nestedScroll({
scrollForward: NestedScrollMode.PARENT_FIRST,
scrollBackward: NestedScrollMode.SELF_FIRST
})
.height('100%')
}
.width('100%')
}
.edgeEffect(EdgeEffect.Spring)
.backgroundColor('#DCDCDC')
.scrollBar(BarState.Off)
.width('100%')
.height('100%')
ScrollBar({ scroller: this.listScroller })
.position({ right: 0 })
.enableNestedScroll(true)
.scrollBarColor(this.scrollBarColor)
}
}
aboutToAppear() {
for (let i = 0; i < 15; i++) {
this.array.push(i);
}
}
}
```

![EnableNestedScroll](figures/EnableNestedScroll.gif)

## ScrollBar

```TypeScript
ScrollBar(value: ScrollBarOptions)
```

Creates a scroll bar.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollBarInterface-(value: ScrollBarOptions): ScrollBarAttribute--><!--Device-ScrollBarInterface-(value: ScrollBarOptions): ScrollBarAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScrollBarOptions | Yes | Parameters of the **ScrollBar** component. |

## Summary

- [ScrollBarOptions](arkts-arkui-scrollbar-scrollbaroptions-i.md)
- [ScrollBarDirection](arkts-arkui-scrollbar-scrollbardirection-e.md)
