# ListOptions

用于设置List组件参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## initialIndex

```TypeScript
initialIndex?: number
```

Set initialIndex.

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scroller

```TypeScript
scroller?: Scroller
```

Set scroller.

**Type:** Scroller

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## spaceWidth

```TypeScript
spaceWidth?: Dimension
```

沿着主轴的列表项之间的间距。 <p><strong>注意</strong> <br>如果设置为负数或大于或等于列表长度的值 内容区域，使用默认值。 <br>如果设置的值小于列表分割线的宽度，则列表分割线的宽度 作为间距。 <br><em>ListItemGroup</em>的子组件，其<em>可见性</em>属性设置为<em>无</em> 不显示，但它们上下的间距仍然有效。 <br>如果同时设置了spaceWidth和space，则spaceWidth优先。 </p>

**Type:** Dimension

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## space

```TypeScript
space?: number | string
```

子组件主轴方向的间隔。 <br/>默认值：0 <br/>参数类型为number时单位为vp。 <br/>**说明：** <br/>设置为负数或者大于等于List内容区长度时，按默认值显示。 <br/>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。 <br/>List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。<br/>

**Type:** number | string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

