# LazyVGridLayoutAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** LazyVGridLayoutAttributeextends: LazyGridLayoutAttribute<LazyVGridLayoutAttribute>.

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsTemplate

```TypeScript
columnsTemplate(value: string): LazyVGridLayoutAttribute
```

设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。 例如，'1fr&nbsp;1fr&nbsp;2fr'&nbsp;是将父组件分3列，将父组件允许的宽分为4等份，第一列占1份，第二列占1份，第三列占2份。 columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。 columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。 columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap为最小列间距，自动计算列数和实际列间距。 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包含一个有效列宽。 auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效列 宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。 设置为'0fr'时，该列的列宽为0，不显示子组件。设置为其他非法值时，子组件显示为固定1列。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 当前网格布局列的数量或最小列宽值。 |

**Return value:**

| Type | Description |
| --- | --- |
| LazyVGridLayoutAttribute |  |

