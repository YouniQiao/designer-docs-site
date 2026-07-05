# LazyGridLayoutAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** LazyGridLayoutAttributeextends: CommonMethod<T>.

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsGap

```TypeScript
columnsGap(value: LengthMetrics)
```

设置列与列的间距。设置为小于0的值时，按默认值显示。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes |  |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined)
```

设置LazyVGridLayout的尾部组件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | 尾部组件构建函数。  传入undefined时移除尾部组件。 |

## header

```TypeScript
header(builder: CustomBuilder | undefined)
```

设置LazyVGridLayout的头部组件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | Yes | 头部组件构建函数。  传入undefined时移除头部组件。 |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined)
```

设置onVisibleIndexesChange回调函数。当LazyVGridLayout可视区域内子组件的索引值发生变化时触发回调，返回可视区域内子组件的起始索引值和结束索引值。使用callback异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnVisibleIndexesChangeCallback \| undefined | Yes | onVisibleIndexesChange事件的回调函数。  传入undefined时取消监听。 |

## rowsGap

```TypeScript
rowsGap(value: LengthMetrics)
```

设置行与行的间距。设置为小于0的值时，按默认值显示。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes |  |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined)
```

设置头部和尾部组件的吸顶吸底样式。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sticky | StickyStyle \| undefined | Yes | 头部和尾部组件的吸顶吸底样式。 |

