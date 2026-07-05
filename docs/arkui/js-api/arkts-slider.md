# slider

Defines Slider Component instance.

## slider

```TypeScript
slider(options?: SliderOptions)
```

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SliderOptions | No | 配置滑动条的参数。若不传入，则使用SliderOptions中各属性的默认值。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ColorMetricsLinearGradient](arkts-colormetricslineargradient-c.md) | 滑轨轨道的线性渐变背景颜色。 |
| [SliderAttribute](arkts-sliderattribute-c.md) | 支持除触摸热区以外的[通用属性]{@link common}。 除支持[通用事件]{@link common}外，还支持以下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorMetricsStop](arkts-colormetricsstop-i.md) | 线性渐变颜色断点类型，用于描述渐进色颜色断点。 |
| [SlideRange](arkts-sliderange-i.md) | 定义SlideRange中使用的回调类型。 > **说明：** > > - 当前仅当min<=from<=to<=max时该接口生效(min和max不依赖于其设置的值，而取决于其实际生效的值)。 > > - 可只设置from或者to，也可以同时设置from和to。 > > - 当接口生效且设置的from处于紧邻的step整数倍的值之间，则from实际取左区间step整数倍的那个值或者min作为修正后的值。 > > - 当接口生效且设置的to处于紧邻的step整数倍的值之间，则to实际取右区间step整数倍的那个值或者MAX作为修正后的值。 > > - 在from和to取修正值后， 当value是undefined或null时，其取值与from一致; 当value是数值型且value <= from，则取from; 当value > to，则取to。 |
| [SliderBlockStyle](arkts-sliderblockstyle-i.md) | Slider组件滑块形状参数。 |
| [SliderConfiguration](arkts-sliderconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [SliderCustomContentOptions](arkts-slidercustomcontentoptions-i.md) | Slider前后缀组件无障碍信息参数。 |
| [SliderInterface](arkts-sliderinterface-i.md) | 滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。 > **说明： |
| [SliderOptions](arkts-slideroptions-i.md) | 滑动条的信息。 |
| [SliderPrefixOptions](arkts-sliderprefixoptions-i.md) | Slider前缀组件无障碍信息参数。 |
| [SliderShowStepOptions](arkts-slidershowstepoptions-i.md) | Slider刻度点的无障碍文本信息映射集。 |
| [SliderStepItemAccessibility](arkts-sliderstepitemaccessibility-i.md) | Slider刻度点的无障碍文本信息。 |
| [SliderSuffixOptions](arkts-slidersuffixoptions-i.md) | Slider后缀组件无障碍信息参数。 |

### Enums

| Name | Description |
| --- | --- |
| [SliderBlockType](arkts-sliderblocktype-e.md) | Slider组件滑块形状枚举。 | 名称 | 值 | 说明 | | ------- | -- | ---------------------- | | DEFAULT | 0 | 使用默认滑块（圆形）。 | | IMAGE | 1 | 使用图片资源作为滑块。 | | SHAPE | 2 | 使用自定义形状作为滑块。 | |
| [SliderChangeMode](arkts-sliderchangemode-e.md) | 滑块的状态值。包括按下、拖动、离开以及点击滑动条使滑块位置时。 |
| [SliderInteraction](arkts-sliderinteraction-e.md) | 用户与滑动条组件交互方式。 | 名称 | 值 |说明 | | ------ | -- | ----------------------------- | | SLIDE_AND_CLICK | 0 | 用户可拖拽滑块或者点击滑轨使滑块移动，鼠标或手指按下即发生移动。| | SLIDE_ONLY | 1 | 禁止用户通过点击滑轨使滑块移动。| | SLIDE_AND_CLICK_UP | 2 |用户可拖拽滑块或者点击滑轨使滑块移动，当鼠标或手指抬起时，若与屏幕按压位置一致，则触发移动。| |
| [SliderStyle](arkts-sliderstyle-e.md) | 滑动条滑块在滑轨上显示的样式，具体样式请参考[Slider组件滑块与滑轨是如何对齐的](docroot://ui/arkts-select-component-faq.md#slider组件滑块与滑轨是如何对齐的)。 > **说明：** > > - Slider无默认padding。 > > - 当Slider为水平滑动条时，默认高度为40vp，宽度为父容器的宽度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，左右间距分别为9vp，即为 > [blockSize]{@link SliderAttribute#blockSize}宽度的一半，当滑动条的style为SliderStyle.InSet时，左右间距分别为6vp，若设置padding，padding不会覆盖左右 > 间距。 > > - 当Slider为竖直滑动条时，默认宽度为40vp，高度为父容器的高度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，上下间距分别为10vp，当滑动条的style为 > SliderStyle.InSet时，上下间距分别为6vp，若设置padding，padding不会覆盖上下间距。 |

### Types

| Name | Description |
| --- | --- |
| [SliderTriggerChangeCallback](arkts-slidertriggerchangecallback-t.md) | 定义SliderConfiguration中使用的回调类型。 |

### Constants

| Name | Description |
| --- | --- |
| [Slider](arkts-slider-con.md#Slider) | 滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。 > **说明：** ###### 子组件 无 |
| [SliderInstance](arkts-slider-con.md#SliderInstance) | Defines Slider Component instance. |

