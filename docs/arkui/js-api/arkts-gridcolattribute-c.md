# GridColAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**Inheritance:** GridColAttributeextends: CommonMethod<GridColAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gridColOffset

```TypeScript
gridColOffset(value: number | GridColColumnOption)
```

设置相对于前一个栅格子组件偏移的列数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| GridColColumnOption | Yes | 相对于前一个栅格子组件偏移的列数。 取值为非负整数，默认值：0 非法值：按默认值处理。 |

## order

```TypeScript
order(value: number | GridColColumnOption)
```

设置栅格子组件的序号，根据序号从小到大对栅格子组件进行排序。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| GridColColumnOption | Yes | 元素的序号，根据栅格子组件的序号，从小到大对栅格子组件做排序。 取值为非负整数，默认值：0 非法值：按默认值处  理。 |

## span

```TypeScript
span(value: number | GridColColumnOption)
```

设置占用列数。span为0，意味着该元素不参与布局计算，即不会被渲染。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| GridColColumnOption | Yes | 占用列数。 取值为非负整数，默认值为1。 非法值：按默认值处理。 |

