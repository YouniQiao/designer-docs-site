# Column

Defines the Column Component.

## Column

```TypeScript
Column(options?: ColumnOptions)
```

Creates a vertical linear layout container. You can set the spacing between child components. > **NOTE** > > Excessive component nesting (either too deep a hierarchy or too many nested components) incurs significant > performance overhead. For performance purposes, you are advised to remove redundant nodes to simplify the > component tree, use layout boundaries to reduce redundant layout calculations, properly apply rendering control > syntax and layout component methods to minimize unnecessary re-renders and computations. For details about the > best practices, see > [Layout Optimization](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve-layout-performance) > .

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ColumnOptions | No | Vertical spacing between two adjacent child components. The value can be ofthe number or string type. |

## Column

```TypeScript
Column(options?: ColumnOptions | ColumnOptionsV2)
```

Creates a vertical linear layout container. You can set the spacing between child components.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ColumnOptions \| ColumnOptionsV2 | No | Vertical spacing between two adjacent child components. Thevalue can be of the number, string, or Resource type. |

## Summary

- [ColumnOptions](arkts-arkui-column-columnoptions-i.md)
- [ColumnOptionsV2](arkts-arkui-column-columnoptionsv2-i.md)
- [SpaceType](arkts-arkui-column-spacetype-t.md)
