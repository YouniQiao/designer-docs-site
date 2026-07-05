# ColumnSplitDividerStyle

设置子组件与上下分割线的距离。 > **说明：** > > 与[RowSplit]row_split相同，ColumnSplit的分割线可调整上下两侧子组件的高度，子组件的高度调整范围受其最大最小高度限制。 > > 支持[clip]CommonMethod#clip(value: boolean)、[margin]CommonMethod#margin等通用属性，未设置clip属性时，其默认值为true。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endMargin

```TypeScript
endMargin?: Dimension
```

子组件与其下方分割线的距离。 默认值：0vp 非法值：按默认值处理，此时 [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9) 接口获取到的属性值为undefined。

**Type:** Dimension

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## startMargin

```TypeScript
startMargin?: Dimension
```

子组件与其上方分割线的距离。 默认值：0vp 非法值：按默认值处理，此时 [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9) 接口获取到的属性值为undefined。

**Type:** Dimension

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

