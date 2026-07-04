# LazyVGridLayout properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following events are supported.

**Inheritance/Implementation:** LazyVGridLayoutAttribute extends [LazyGridLayoutAttribute<LazyVGridLayoutAttribute>](LazyGridLayoutAttribute<LazyVGridLayoutAttribute>)

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsTemplate

```TypeScript
columnsTemplate(value: string)
```

Sets the number of columns, fixed column width, or minimum column width of the grid. If this attribute is not set, one column will be used. For example, **'1fr 1fr 2fr'** indicates three columns, with the first column taking up 1/4 of the parent component's full width, the second column 1/4, and the third column 2/4. **columnsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of columns and their actual widths while respecting the minimum column width specified by **track-size**. **columnsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of columns based on the fixed column width specified by **track-size**. **columnsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **columnsGap** to define the minimum gap between columns and automatically calculates the number of columns and the actual gap size based on the fixed column width specified by **track-size**. **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the column width, in units of px, vp (default), %, or any valid numeric value. The value must be greater than or equal to a valid column width. In auto-fit and auto-stretch modes, only a valid column width value is supported for **track-size**. Additionally, in auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support percentage (%). The auto-fill mode supports one or more valid column widths, for example: columnsTemplate('repeat(auto-fill, 20)') or columnsTemplate('repeat(auto-fill, 20 80px)'). If this attribute is set to **'0fr'**, the column width is 0, and child components are not displayed. If this attribute is set to an invalid value, the child components are displayed in a fixed column.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Number of columns or minimum column width of the grid. |

