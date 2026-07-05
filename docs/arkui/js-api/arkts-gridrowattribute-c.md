# GridRowAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** GridRowAttributeextends: CommonMethod<GridRowAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignItems

```TypeScript
alignItems(value: ItemAlign)
```

设置GridRow中的GridCol垂直主轴方向对齐方式。GridCol本身也可通过alignSelf([ItemAlign]ItemAlign)设置自身对齐方式。当上述两种对齐方式都设置时，以GridCol自身设 置为准。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ItemAlign | Yes | GridRow中的GridCol垂直主轴方向对齐方式。 默认值：ItemAlign.Start 非法值：按默认值处理。 说明：  ItemAlign支持的枚举：ItemAlign.Start、ItemAlign.Center、ItemAlign.End、ItemAlign.Stretch。 |

## onBreakpointChange

```TypeScript
onBreakpointChange(callback: (breakpoints: string) => void)
```

断点发生变化时触发回调。 > **说明：** > > - 当[断点参照物](arkts-breakpointsreference-e.md#BreakpointsReference)设置为BreakpointsReference.ComponentSize时，不建议在onBreakpointChange回调中动态修改GridRow > 组件的[padding]CommonMethod#padding或[margin]CommonMethod#margin属性值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (breakpoints: string) => void | Yes | breakpoints取值为`"xs"`、`"sm"`、`"md"`、`"lg"`、`"xl"`、`"xxl"`。 |

