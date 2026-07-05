# TextPickerAttribute

除支持[通用属性]./common外，还支持以下属性： 除支持[通用事件]./common外，还支持以下事件：

**Inheritance:** TextPickerAttributeextends: CommonMethod<TextPickerAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## canLoop

```TypeScript
canLoop(value: boolean)
```

设置是否可循环滚动。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否可循环滚动。 - true：可循环。 - false：不可循环。 默认值：true |

## canLoop

```TypeScript
canLoop(isLoop: Optional<boolean>)
```

设置是否可循环滚动。 与[canLoop<sup>10+</sup>](arkts-textpickerattribute-c.md#canLoop)相比，isLoop参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLoop | Optional&lt;boolean> | Yes | 是否可循环滚动。 - true：可循环。 - false：不可循环。  默认值：true 当isLoop的值为undefined时，使用默认值。 |

## defaultPickerItemHeight

```TypeScript
defaultPickerItemHeight(value: number | string)
```

设置选择项的高度。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | 选择项的高度。 取值范围： number类型：  [0, +∞)，单位为vp。 string类型：仅支持number类型取值的字符串形式，例如"56"。  默认值：选中项56vp，非选中项36vp。 说明： 设置该参数后，选中项与非选中项的高度均为所设置的值。 |

## defaultPickerItemHeight

```TypeScript
defaultPickerItemHeight(height: Optional<number | string>)
```

设置选择项的高度。 与[defaultPickerItemHeight](arkts-textpickerattribute-c.md#defaultPickerItemHeight)相比， height参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Optional&lt;number \| string> | Yes | 选择项的高度。 取值范围： number类型：  [0, +∞)，单位为vp。 string类型：仅支持number类型取值的字符串形式，例如"56"。  默认值：选中项56vp，非选中项36vp。 说明： 1. 设置该参数后，选中项与非选中项的高度均为所设置的值。  2. 当height的值为undefined时，维持上次取值。 |

## defaultTextStyle

```TypeScript
defaultTextStyle(style: TextPickerTextStyle)
```

设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。 仅当[disableTextStyleAnimation](arkts-textpickerattribute-c.md#disableTextStyleAnimation)为true时生效。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | TextPickerTextStyle | Yes | 设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。  默认值：与[Text]./text组件默认值相同。 |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)
```

设置表冠灵敏度。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | Yes | 表冠响应灵敏度。 默认值：CrownSensitivity.MEDIUM，响应速度适中。 |

## disableTextStyleAnimation

```TypeScript
disableTextStyleAnimation(disabled: boolean)
```

设置是否关闭滑动过程中文本样式变化的动效。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | boolean | Yes | 是否关闭滑动过程中文本样式变化的动效。 - true：关闭文本样式变化动效。  - false：不关闭文本样式变化动效。 默认值：false  说明： 设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为  [defaultTextStyle](arkts-textpickerattribute-c.md#defaultTextStyle)属性设置的样式。如未设置  [defaultTextStyle](arkts-textpickerattribute-c.md#defaultTextStyle)，则显示为[Text]./text组件默认样式。 |

## disappearTextStyle

```TypeScript
disappearTextStyle(value: PickerTextStyle)
```

设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 边缘项的文本颜色、字号、字体粗细。 默认值： { color: '#ff182431',  font: { size: '14fp', weight: FontWeight.Regular } } |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle>)
```

设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。与 [disappearTextStyle<sup>10+</sup>](arkts-textpickerattribute-c.md#disappearTextStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 边缘项的文本颜色、字号、字体粗细。 默认值： { color:  '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }  当style的值为undefined时，使用默认值。 |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与 [disappearTextStyle](arkts-textpickerattribute-c.md#disappearTextStyle)<sup>18+</sup> 相比，style参数新增了对[TextPickerTextStyle](arkts-textpickertextstyle-i.md#TextPickerTextStyle)类型的支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle \| TextPickerTextStyle> | Yes | 边缘项的文本颜色、字号、字体粗细、最大字号、最小字号、  超长文本截断方式。 默认值： { color: '#ff182431', font: { size: '14fp', weight:  FontWeight.Regular }, minFontSize: 0, maxFontSize: 0, overflow: TextOverflow.Clip }  当style的值为undefined时，使用默认值。 |

## divider

```TypeScript
divider(value: DividerOptions | null)
```

设置分割线样式，不设置该属性则按“默认值”展示分割线。 [DividerOptions](arkts-divideroptions-i.md#DividerOptions)中startMargin + endMargin 超过组件宽度后，startMargin和endMargin会被置0。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DividerOptions \| null | Yes |  |

## divider

```TypeScript
divider(textDivider: Optional<DividerOptions | null>)
```

设置分割线样式，不设置该属性则按“默认值”展示分割线。与 [divider<sup>12+</sup>](arkts-textpickerattribute-c.md#divider)相比，textDivider参数新增了对 undefined类型的支持。 [DividerOptions](arkts-divideroptions-i.md#DividerOptions)中startMargin + endMargin 超过组件宽度后，startMargin和endMargin会被置0。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textDivider | Optional&lt;DividerOptions \| null> | Yes | 默认值： { strokeWidth: '2px', startMargin: 0,  endMargin: 0, color: '#33000000' } 1. 当textDivider的值为undefined时，使用默认值。  2. 当textDivider设置为有效的[DividerOptions](arkts-divideroptions-i.md#DividerOptions)时，按设置的样式显示分割线。  3. 当textDivider设置为null时，不显示分割线。 |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enable: Optional<boolean>)
```

设置是否开启触控反馈。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | 设置是否开启触控反馈。 - true：开启触控反馈。 - false：不开启触控反馈。  默认值：true 设置为true后，其生效情况取决于系统的硬件是否支持。 |

## gradientHeight

```TypeScript
gradientHeight(value: Dimension)
```

设置渐隐效果的高度。若未设置该属性，则显示默认渐隐效果。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | 内容区上下边缘的渐隐高度。 默认值：36vp 取值范围：  [0, +∞)，支持百分比。 说明： 1. value设置为百分比时，100%为TextPicker高度的一半。  2. value设置为0时不显示渐隐效果。 3. value设置为数字且超过TextPicker高度的一半时，使用默认值。  4. 当value的值为负数时，使用默认值。 |

## gradientHeight

```TypeScript
gradientHeight(height: Optional<Dimension>)
```

设置渐隐效果的高度。若未设置该属性，则显示默认渐隐效果。与 [gradientHeight<sup>12+</sup>](arkts-textpickerattribute-c.md#gradientHeight)相比， height参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Optional&lt;Dimension> | Yes | 内容区上下边缘的渐隐高度。 默认值：36vp 取值范围：  [0, +∞)，支持百分比。 说明： 1. height设置为百分比时，100%为TextPicker高度的一半。  2. height设置为0时不显示渐隐效果。 3. height设置为数字且超过TextPicker高度的一半时，使用默认值。  4. 当height的值为undefined或负数时，使用默认值。 |

## onAccept

```TypeScript
onAccept(callback: (value: string, index: number) => void)
```

点击弹窗中的“确定”按钮时触发该回调。该事件仅在[文本滑动选择器弹窗]./text_picker中生效。 从API version 8开始支持，从API version 10开始废弃，无替代接口。

**Since:** 8

**Deprecated since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string, index: number) => void | Yes |  |

## onCancel

```TypeScript
onCancel(callback: () => void)
```

点击弹窗中的“取消”按钮时触发该回调。该事件仅在[文本滑动选择器弹窗]./text_picker中生效。 从API version 8开始支持，从API version 10开始废弃，无替代接口。

**Since:** 8

**Deprecated since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes |  |

## onChange

```TypeScript
onChange(callback: (value: string | string[], index: number | number[]) => void)
```

滑动TextPicker文本内容后，选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。当显示文本或图片加文本列表时， value值为选中项中的文本值，当显示图片列表时，value值为空。 回调会在滑动动画结束后触发，如果需要快速获取索引值变化， 建议使用[onEnterSelectedArea](arkts-textpickerattribute-c.md#onEnterSelectedArea)接口。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string \| string[], index: number \| number[]) => void | Yes |  |

## onChange

```TypeScript
onChange(callback: Optional<OnTextPickerChangeCallback>)
```

滑动TextPicker文本内容后，选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。当显示文本或图片加文本列表时， value值为选中项中的文本值，当显示图片列表时，value值为空。与 [onChange](arkts-textpickerattribute-c.md#onChange)相比，callback参数新增了对undefined类型的支持。 回调会在滑动动画结束后触发，如果需要快速获取索引值变化， 建议使用[onEnterSelectedArea](arkts-textpickerattribute-c.md#onEnterSelectedArea)接口。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnTextPickerChangeCallback> | Yes | 滑动选中TextPicker文本内容后，触发的回调。  当callback的值为undefined时，不使用回调函数。 |

## onEnterSelectedArea

```TypeScript
onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback)
```

滑动TextPicker过程中，选项进入分割线区域内（当前列的滑动距离超过选中项高度的一半）时，触发该回调。 > **说明：** > > - 与[onChange] > {@link TextPickerAttribute#onChange(callback:(value: string | string[], index: number | number[]) => void)}事件 > 的差别在于，该事件的触发时机早于[onChange] > {@link TextPickerAttribute#onChange(callback:(value: string | string[], index: number | number[]) => void)}事件。 > > - 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动， > 因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。 > > - 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TextPickerEnterSelectedAreaCallback | Yes | 滑动TextPicker过程中，选项进入分割线区域时触发的回调。 |

## onScrollStop

```TypeScript
onScrollStop(callback: TextPickerScrollStopCallback)
```

文本选择器的选项列滑动停止时触发该事件。 手指拖动选项列触发的滑动，手指离开屏幕且滑动停止时会触发该事件。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TextPickerScrollStopCallback | Yes | 文本选择器的选项列滑动停止时触发该事件。 |

## onScrollStop

```TypeScript
onScrollStop(callback: Optional<TextPickerScrollStopCallback>)
```

文本选择器的选项列滑动停止时触发该事件。与 [onScrollStop<sup>14+</sup>](arkts-textpickerattribute-c.md#onScrollStop)相比， callback参数新增了对undefined类型的支持。 手指拖动选项列触发的滑动，手指离开屏幕且滑动停止时会触发该事件。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;TextPickerScrollStopCallback> | Yes | 文本选择器的选项列滑动停止时触发该事件。  当callback的值为undefined时，不使用回调函数。 |

## selectedBackgroundStyle

```TypeScript
selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>)
```

设置选中项的背景样式。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerBackgroundStyle> | Yes | 选中项背景的颜色和边框圆角半径，多列模式时会同时设置所有列的选中项背景  的颜色和圆角半径。 默认值： { color: $r('sys.color.comp_background_tertiary'),  borderRadius: $r('sys.float.corner_radius_level12') } |

## selectedIndex

```TypeScript
selectedIndex(value: number | number[])
```

设置选中项在数据选择列表中的索引值，优先级高于[TextPickerOptions](arkts-textpickeroptions-i.md#TextPickerOptions)中的"value"属性。 单列数据选择器使用number类型。多列数据选择器使用number[]类型。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| number[] | Yes | 选中项在数据选择列表中的索引值，索引从0开始。 默认值：0  当value的值为负数或者超过数据选择列表的最大索引值时，使用默认值。 |

## selectedIndex

```TypeScript
selectedIndex(index: Optional<number | number[]>)
```

设置选中项在数据选择列表中的索引值，优先级高于[TextPickerOptions](arkts-textpickeroptions-i.md#TextPickerOptions)中的"value"属性。 单列数据选择器使用number类型，多列数据选择器使用number[]类型。与[selectedIndex<sup>10+</sup>] {@link TextPickerAttribute#selectedIndex(value: number | number[])}相比，index参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Optional&lt;number \| number[]> | Yes | 选中项在数据选择列表中的索引值，索引从0开始。 默认值：0  当index的值为undefined时，使用[TextPickerOptions](arkts-textpickeroptions-i.md#TextPickerOptions)中的selected值。  当index的值为负数或者超过数据选择列表的最大索引值时，使用默认值。 |

## selectedTextStyle

```TypeScript
selectedTextStyle(value: PickerTextStyle)
```

设置选中项的文本颜色、字号、字体粗细。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 选中项的文本颜色、字号、字体粗细。 默认值： { color: '#ff007dff',  font: { size: '20fp', weight: FontWeight.Medium } } |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle>)
```

设置选中项的文本颜色、字号、字体粗细。与 [selectedTextStyle<sup>10+</sup>](arkts-textpickerattribute-c.md#selectedTextStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 选中项的文本颜色、字号、字体粗细。 默认值： { color:  '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }  当style的值为undefined时，使用默认值。 |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

设置选中项的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与 [selectedTextStyle](arkts-textpickerattribute-c.md#selectedTextStyle)<sup>18+</sup> 相比，style参数新增了对[TextPickerTextStyle](arkts-textpickertextstyle-i.md#TextPickerTextStyle)类型的支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle \| TextPickerTextStyle> | Yes | 选中项的文本颜色、字号、字体粗细、最大字号、最小字号、  超长文本截断方式。 默认值： { color: '#ff007dff', font: { size: '20fp', weight:  FontWeight.Medium }, minFontSize: 0, maxFontSize: 0, overflow: TextOverflow.Clip }  当style的值为undefined时，使用默认值。 |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | 待选项的文本颜色、字号、字体粗细。 默认值： { color: '#ff182431',  font: { size: '16fp', weight: FontWeight.Regular } } |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。与 [textStyle<sup>10+</sup>](arkts-textpickerattribute-c.md#textStyle)相比， style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle> | Yes | 待选项的文本颜色、字号、字体粗细。 默认值： { color:  '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }  当style的值为undefined时，使用默认值。 |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与 [textStyle](arkts-textpickerattribute-c.md#textStyle)<sup>18+</sup>相比， style参数新增了对[TextPickerTextStyle](arkts-textpickertextstyle-i.md#TextPickerTextStyle)类型的支持。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle \| TextPickerTextStyle> | Yes | 待选项的文本颜色、字号、字体粗细、最大字号、最小字号、  超长文本截断方式。 默认值： { color: '#ff182431', font: { size: '16fp', weight:  FontWeight.Regular }, minFontSize: 0, maxFontSize: 0, overflow: TextOverflow.Clip }  当style的值为undefined时，使用默认值。 |

