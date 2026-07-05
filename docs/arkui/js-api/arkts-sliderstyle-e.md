# SliderStyle

```TypeScript
declare enum SliderStyle
```

滑动条滑块在滑轨上显示的样式，具体样式请参考[Slider组件滑块与滑轨是如何对齐的](docroot://ui/arkts-select-component-faq.md#slider组件滑块与滑轨是如何对齐的)。 > **说明：** > > - Slider无默认padding。 > > - 当Slider为水平滑动条时，默认高度为40vp，宽度为父容器的宽度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，左右间距分别为9vp，即为 > [blockSize](arkts-sliderattribute-c.md#blockSize)宽度的一半，当滑动条的style为SliderStyle.InSet时，左右间距分别为6vp，若设置padding，padding不会覆盖左右 > 间距。 > > - 当Slider为竖直滑动条时，默认宽度为40vp，高度为父容器的高度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，上下间距分别为10vp，当滑动条的style为 > SliderStyle.InSet时，上下间距分别为6vp，若设置padding，padding不会覆盖上下间距。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OutSet

```TypeScript
OutSet
```

滑块在滑轨上。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## InSet

```TypeScript
InSet
```

滑块在滑轨内。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## NONE

```TypeScript
NONE
```

无滑块

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

