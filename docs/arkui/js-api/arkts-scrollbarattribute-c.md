# ScrollBarAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** ScrollBarAttributeextends: CommonMethod<ScrollBarAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableNestedScroll

```TypeScript
enableNestedScroll(enabled: Optional<boolean>)
```

设置滚动条是否嵌套滚动。 > **说明：** > > 滚动条使能嵌套滚动时，滚动条的滚动偏移量会先发送给绑定的内层滚动组件，内层滚动组件再根据设置的嵌套滚动优先级依次传递给外层父滚动组件。 > > WaterFlow组件的布局模式为移动窗口式（[WaterFlowLayoutMode.SLIDING_WINDOW](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#waterflowlayoutmode12)）时，不支持嵌套滚动。 > > 设置嵌套滚动模式为[PARALLEL](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#nestedscrollmode10)时，父子组件同时滚动，需要开发者在[onScrollFrameBegin](docroot://reference/apis-arkui/arkui-ts/ts-container-scroll.md#onscrollframebegin9)中按照所需逻辑，自行设置父子组件滚动顺序。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 是否执行嵌套滚动。设置为true执行嵌套滚动，设置为false不嵌套滚动。 默认值：false |

## scrollBarColor

```TypeScript
scrollBarColor(color: Optional<ColorMetrics>)
```

设置滚动条滑块的颜色，仅滚动条不放置子组件时生效。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics> | Yes | 滚动条的颜色。 默认值：ColorMetrics.numeric(0x66182431) |

