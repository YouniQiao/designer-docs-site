# Grid properties/events

In addition to [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) and [scrollable component common attributes](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#attributes), the following attributes are also supported.

In addition to [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) and [scrollable component common events](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#events), the following events are also supported.

**Inheritance/Implementation:** GridAttribute extends [ScrollableCommonMethod<GridAttribute>](ScrollableCommonMethod<GridAttribute>)

**Since:** 7

<!--Device-unnamed-declare class GridAttribute extends ScrollableCommonMethod<GridAttribute>--><!--Device-unnamed-declare class GridAttribute extends ScrollableCommonMethod<GridAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="alignitems"></a>
## alignItems

```TypeScript
alignItems(alignment: Optional<GridItemAlignment>)
```

Sets the alignment mode of grid items in the grid. For details about the usage, see [Example 9](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-9-setting-grid-item-heights-based-on-the-tallest-item-in-the-current-row).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridAttribute-alignItems(alignment: Optional<GridItemAlignment>): GridAttribute--><!--Device-GridAttribute-alignItems(alignment: Optional<GridItemAlignment>): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignment | [Optional](arkts-arkui-optional-t.md)&lt;GridItemAlignment&gt; | Yes | Alignment mode of grid items in the grid.<br>Default value:**GridItemAlignment.DEFAULT** |

<a id="cachedcount"></a>
## cachedCount

```TypeScript
cachedCount(value: number)
```

Sets the number of grid items to be cached (preloaded). It works only in [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with the [virtualScroll](../arkts-apis/arkts-arkui-repeatattribute-c.md#virtualscroll-1) option enabled. <!--Del-->For details, see [Minimizing White Blocks During Swiping](docroot://performance/arkts-performance-improvement-recommendation.md#minimizing-white-blocks-during-swiping).<!--DelEnd-->

The number of the grid items to be cached before and after the currently displayed one equals the value of **cachedCount** multiplied by the number of columns.

[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with [virtualScroll](../arkts-apis/arkts-arkui-repeatattribute-c.md#virtualscroll-1) enabled will release **GridItem** components that are outside the display and cache range.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-cachedCount(value: number): GridAttribute--><!--Device-GridAttribute-cachedCount(value: number): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Number of grid items to be cached (preloaded).<br>Default value: the number of rows visible on the screen for vertical scrolling, or the number of columns visible on the screen for horizontal scrolling. The maximum value is 16.<br>Value range:[0, +∞).<br>Values less than 0 are treated as **1**.<br>When **value** is updated using a state variable,the **Grid** component does not trigger a layout update.The number of cached nodes is updated only during the next layout. |

<a id="cachedcount-1"></a>
## cachedCount

```TypeScript
cachedCount(count: number, show: boolean)
```

Sets the number of grid items to be cached (preloaded) and specifies whether to display the preloaded nodes.

The number of the grid items to be cached before and after the currently displayed one equals the value of **cachedCount** multiplied by the number of columns. This attribute can be combined with the [clip](arkts-arkui-commonmethod-c.md#clip-1) or [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14) attributes to display the preloaded nodes.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-GridAttribute-cachedCount(count: number, show: boolean): GridAttribute--><!--Device-GridAttribute-cachedCount(count: number, show: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | Number of grid items to be cached (preloaded).<br>Default value: the number of rows visible on the screen for vertical scrolling, or the number of columns visible on the screen for horizontal scrolling. The maximum value is 16.<br>Value range:[0, +∞).<br>Values less than 0 are treated as **1**.<br>When the count value is updated using the state variable,the **Grid** component does not trigger a layout update.The number of cached nodes is updated only during the next layout. |
| show | boolean | Yes | Whether to display the preloaded nodes. If this parameter is set to **true**, the preloaded **GridItem** is displayed. If this parameter is set to **false**, the preloaded **GridItem** is not displayed.<br> Default value: **false** |

<a id="celllength"></a>
## cellLength

```TypeScript
cellLength(value: number)
```

Sets the height per row or width per column.

When **layoutDirection** is **Row** or **RowReverse**, the value indicates the height per row.

When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the width per column.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-cellLength(value: number): GridAttribute--><!--Device-GridAttribute-cellLength(value: number): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Height per row or width per column.<br>Default value: size of the first element<br>Unit:vp<br>Value range: (0, +∞). If the value is less than or equal to 0, the default value is used. |

<a id="columnsgap"></a>
## columnsGap

```TypeScript
columnsGap(value: Length)
```

Sets the gap between columns. A value less than 0 evaluates to the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-columnsGap(value: Length): GridAttribute--><!--Device-GridAttribute-columnsGap(value: Length): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Gap between columns.<br>Default value: **0**<br>Value range: [0, +∞). |

<a id="columnstemplate"></a>
## columnsTemplate

```TypeScript
columnsTemplate(value: string)
```

This parameter specifies the number of columns in the current grid layout.

**columnsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of columns and the actual column width, while adhering to the minimum column width specified with **track-size**.

**columnsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of columns based on the fixed column width specified with **track-size**.

**columnsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **columnsGap** to define the minimum gap between columns and automatically calculates the number of columns and the actual gap size based on the fixed column width specified by **track-size**.

**repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the column width, in the unit of px, vp (default), %, or any valid digit. The value must be greater than or equal to one valid column width.In auto-fit and auto-stretch modes, only a valid column width value is supported for **track-size**. Additionally,in auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support percentage (%). The auto-fill mode supports one or more valid column widths, for example,columnsTemplate('repeat(auto-fill, 20)') or columnsTemplate('repeat(auto-fill, 20 80px)').

If this attribute is set to **'0fr'**, the column width is 0, and grid item in the column is not displayed. If this attribute is set to any other invalid value, the grid item is displayed as one column.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-columnsTemplate(value: string): GridAttribute--><!--Device-GridAttribute-columnsTemplate(value: string): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes |  |

<a id="columnstemplate-1"></a>
## columnsTemplate

```TypeScript
columnsTemplate(value: string | ItemFillPolicy)
```

Number of columns in the current grid layout. If this attribute is not set, one column will be used.

When the value is of the string type, refer to [columnsTemplate(value: string)](GridAttribute#columnsTemplate(value: string | ItemFillPolicy)) for the usage.

When the value is of the **ItemFillPolicy** type, the number of columns is determined based on the [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the width of the **Grid** component.

For example, the **ItemFillPolicy.BREAKPOINT_DEFAULT** component displays two columns when the component width falls within the sm or smaller breakpoint range, three columns for the md breakpoint range, and five columns for the lg or larger breakpoint range, with each column being 1 fr.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-GridAttribute-columnsTemplate(value: string | ItemFillPolicy): GridAttribute--><!--Device-GridAttribute-columnsTemplate(value: string | ItemFillPolicy): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| ItemFillPolicy | Yes | Number of columns in the current grid layout. |

<a id="edgeeffect"></a>
## edgeEffect

```TypeScript
edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions)
```

Sets the effect used when the scroll boundary is reached.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): GridAttribute--><!--Device-GridAttribute-edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [EdgeEffect](../arkts-apis/arkts-arkui-edgeeffect-e.md) | Yes | Effect used when the scroll boundary is reached. The spring and shadow effects are supported.<br>Default value: **EdgeEffect.None** |
| options | [EdgeEffectOptions](arkts-arkui-edgeeffectoptions-i.md) | No | Whether to enable the scroll effect when the component content is smaller than the component itself. The value **{ alwaysEnabled: true }** means to enable the scroll effect, and **{ alwaysEnabled: false }** means the opposite.<br>Default value: **{ alwaysEnabled: false }**<br>**Since:** 11 |

<a id="editmode"></a>
## editMode

```TypeScript
editMode(value: boolean)
```

Sets whether to enable edit mode. In edit mode, the user can drag the [grid items](arkts-arkui-griditem.md) in the **Grid** component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-editMode(value: boolean): GridAttribute--><!--Device-GridAttribute-editMode(value: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable edit mode. If this parameter is set to **true**, the **Grid** component is in edit mode. If this parameter is set to **false**, the **Grid** component is not in edit mode.<br>Default value: **false** |

<a id="editmodeoptions"></a>
## editModeOptions

```TypeScript
editModeOptions(options?: EditModeOptions)
```

Sets the options of the edit mode.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-GridAttribute-editModeOptions(options?: EditModeOptions): GridAttribute--><!--Device-GridAttribute-editModeOptions(options?: EditModeOptions): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [EditModeOptions](arkts-arkui-editmodeoptions-i.md) | No | Edit mode options. |

<a id="enableeditmode"></a>
## enableEditMode

```TypeScript
enableEditMode(enabled: boolean | undefined)
```

Sets whether to enable the edit mode for the **Grid** component. After the edit mode is enabled, you can swipe to select multiple [GridItem](arkts-arkui-griditem.md) components in the **Grid** component. If this API is not called, the edit mode is not enabled.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-GridAttribute-enableEditMode(enabled: boolean | undefined): GridAttribute--><!--Device-GridAttribute-enableEditMode(enabled: boolean | undefined): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean \| undefined | Yes | Whether to enable the edit mode. **true** means to enable the edit mode and swiping to select multiple items is supported; **false** or **undefined** means to disable the edit mode and swiping to select multiple items is not supported. |

<a id="enablescrollinteraction"></a>
## enableScrollInteraction

```TypeScript
enableScrollInteraction(value: boolean)
```

Sets whether to support the scrolling gesture.

> **NOTE**  
>  
> The component cannot be scrolled through mouse press-and-drag operations.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-enableScrollInteraction(value: boolean): GridAttribute--><!--Device-GridAttribute-enableScrollInteraction(value: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to support scroll gestures. With the value **true**, scrolling via finger or mouse is enabled. With the value **false**, scrolling via finger or mouse is disabled, but this does not affect the scrolling APIs of the [Scroller](arkts-arkui-scroller-c.md).<br>Default value: **true** |

<a id="focuswrapmode"></a>
## focusWrapMode

```TypeScript
focusWrapMode(mode: Optional<FocusWrapMode>)
```

Sets the focus wrap mode for cross-axis arrow keys.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-GridAttribute-focusWrapMode(mode: Optional<FocusWrapMode>): GridAttribute--><!--Device-GridAttribute-focusWrapMode(mode: Optional<FocusWrapMode>): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [Optional](arkts-arkui-optional-t.md)&lt;FocusWrapMode&gt; | Yes | Focus wrap mode for cross-axis arrow keys.<br>Default value:**FocusWrapMode.DEFAULT**<br>**NOTE**<br>Abnormal values are treated as the default value, meaning that cross-axis arrow keys cannot wrap. |

<a id="friction"></a>
## friction

```TypeScript
friction(value: number | Resource)
```

Sets the friction coefficient. It applies only to gestures in the scrolling area, and it affects only indirectly the scroll chaining during the inertial scrolling process.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-friction(value: number | Resource): GridAttribute--><!--Device-GridAttribute-friction(value: number | Resource): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | Friction coefficient.<br>Default value: **0.9** for wearable devices and **0.6** for non-wearable devices<br>Since API version 11, the default value for non-wearable devices is **0.7**.<br>Since API version 12, the default value for non-wearable devices is **0.75**.<br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used. |

<a id="layoutdirection"></a>
## layoutDirection

```TypeScript
layoutDirection(value: GridDirection)
```

Sets the main axis layout direction of the grid.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-layoutDirection(value: GridDirection): GridAttribute--><!--Device-GridAttribute-layoutDirection(value: GridDirection): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [GridDirection](arkts-arkui-griddirection-e.md) | Yes | Main axis layout direction of the grid.<br>Default value: **GridDirection.Row** |

<a id="maxcount"></a>
## maxCount

```TypeScript
maxCount(value: number)
```

Sets the maximum number of rows or columns that can be displayed. A value less than 1 evaluates to the default value.

When **layoutDirection** is **Row** or **RowReverse**, the value indicates the maximum number of columns that can be displayed.

When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the maximum number of rows that can be displayed.

If the value of **maxCount** is smaller than that of **minCount**, the default values of **maxCount** and **minCount** are used.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-maxCount(value: number): GridAttribute--><!--Device-GridAttribute-maxCount(value: number): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of rows or columns that can be displayed.<br>Default value: **Infinity** |

<a id="mincount"></a>
## minCount

```TypeScript
minCount(value: number)
```

Sets the minimum number of rows or columns that can be displayed. A value less than 1 evaluates to the default value.

When **layoutDirection** is **Row** or **RowReverse**, the value indicates the minimum number of columns that can be displayed.

When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the minimum number of rows that can be displayed.

If the value of **minCount** is greater than that of **maxCount**, both **minCount** and **maxCount** are treated as using their default values.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-minCount(value: number): GridAttribute--><!--Device-GridAttribute-minCount(value: number): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Minimum number of rows or columns that can be displayed.<br>Default value: **1** |

<a id="multiselectable"></a>
## multiSelectable

```TypeScript
multiSelectable(value: boolean)
```

Sets whether to enable multiselect. After multiselect is enabled, you can use **GridItem**'s **selected** attribute and **onSelect** event to obtain the selection state of **GridItem**. Additionally, you can set the selected state style of **GridItem** using [Polymorphic Style](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) (by default, **GridItem** has no selected state style).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-multiSelectable(value: boolean): GridAttribute--><!--Device-GridAttribute-multiSelectable(value: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable multiselect.<br>Default value: **false**<br>**false**: Multiselect is disabled. **true**: Multiselect is enabled. |

<a id="nestedscroll"></a>
## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions)
```

Sets the nested scrolling options. Sets the nested scrolling modes for both forward and backward directions to achieve scrolling linkage with the parent component. When the component content is smaller than the component itself and **options** of [edgeEffect](GridAttribute#edgeEffect) is set to **{ alwaysEnabled: false }**, the component's own swipe gesture will not be triggered, and the nested scroll property will not take effect. If its parent scrollable component has a swipe gesture, this swipe gesture will be triggered instead.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-nestedScroll(value: NestedScrollOptions): GridAttribute--><!--Device-GridAttribute-nestedScroll(value: NestedScrollOptions): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [NestedScrollOptions](arkts-arkui-nestedscrolloptions-i.md) | Yes | Nested scrolling options. |

<a id="oneditmodechange"></a>
## onEditModeChange

```TypeScript
onEditModeChange(callback: Callback<boolean> | undefined)
```

Triggered when the editing mode status changes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-GridAttribute-onEditModeChange(callback: Callback<boolean> | undefined): GridAttribute--><!--Device-GridAttribute-onEditModeChange(callback: Callback<boolean> | undefined): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;boolean&gt; \| undefined | Yes | Callback triggered when editing mode status changes.<br>Passing undefined will unregister the callback. |

<a id="onitemdragenter"></a>
## onItemDragEnter

```TypeScript
onItemDragEnter(event: (event: ItemDragInfo) => void)
```

Triggered when the dragged item enters the drop target of the grid.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute--><!--Device-GridAttribute-onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: ItemDragInfo) =&gt; void | Yes | Information about the drag point. |

<a id="onitemdragleave"></a>
## onItemDragLeave

```TypeScript
onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void)
```

After binding, a callback is triggered when the component is dragged out of the component range.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute--><!--Device-GridAttribute-onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: ItemDragInfo, itemIndex: number) =&gt; void | Yes |  |

<a id="onitemdragmove"></a>
## onItemDragMove

```TypeScript
onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void)
```

After binding, a callback is triggered when the drag moves within the range of a placeable component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute--><!--Device-GridAttribute-onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: ItemDragInfo, itemIndex: number, insertIndex: number) =&gt; void | Yes |  |

<a id="onitemdragstart"></a>
## onItemDragStart

```TypeScript
onItemDragStart(event: OnItemDragStartCallback)
```

Triggered when a grid item starts to be dragged.

This event is triggered when the user long presses a grid item.

Drag gesture recognition is also initiated by a long press, and the event processing mechanism prioritizes child component events. Therefore, when the grid item is bound to the [LongPressGesture](../arkts-apis/arkts-arkui-longpressgestureinterface-i.md), it cannot be dragged. In light of this, if both long press and drag operations are required on the grid item, you can use the universal drag event.

The floating grid element being dragged can move within the application window. If it is necessary to restrict its movement range, this can be achieved through custom gestures. For details, see [Example 16: Customizing the Drag Effect for GridItem](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-16-customizing-the-drag-effect-for-griditem).

Automatic scrolling is not supported when a grid item is dragged to the edge of the grid. You can use the universal drag event to implement this function. For details, see [Example 17: Dragging GridItem Components with Drag Events](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-17-dragging-grid-items-with-drag-events).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onItemDragStart(event: OnItemDragStartCallback): GridAttribute--><!--Device-GridAttribute-onItemDragStart(event: OnItemDragStartCallback): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [OnItemDragStartCallback](arkts-arkui-onitemdragstartcallback-t.md) | Yes | Callback triggered when the dragging of a grid element starts.<br>In API version 22 and earlier versions, the parameter type is **(event: ItemDragInfo, itemIndex: number) => (() => any) \| void**. For details about the **event** and **itemIndex** parameters, see [OnItemDragStartCallback](arkts-arkui-onitemdragstartcallback-t.md).<br>**Since:** 23 |

<a id="onitemdrop"></a>
## onItemDrop

```TypeScript
onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  )
```

The component bound to this event can be used as the drag release target.This callback is triggered when the drag behavior is stopped within the scope of the component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute--><!--Device-GridAttribute-onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) =&gt; void | Yes |  |

<a id="onreachend"></a>
## onReachEnd

```TypeScript
onReachEnd(event: () => void)
```

Triggered when the grid reaches the end position. This callback is triggered when the content does not fill a full screen and the end of the last child component is within the **Grid** component.

If the edge effect is set to a spring effect, this event is triggered once when the swipe passes the end position,and triggered again when the swipe rebounds back to the end position.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onReachEnd(event: () => void): GridAttribute--><!--Device-GridAttribute-onReachEnd(event: () => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the grid reaches the end position. |

<a id="onreachstart"></a>
## onReachStart

```TypeScript
onReachStart(event: () => void)
```

Triggered when the grid reaches the start position.

This event is triggered once when the grid is initialized and once when the grid scrolls to the start position. If the edge effect is set to a spring effect, this event is triggered once when the swipe passes the initial position,and triggered again when the swipe rebounds back to the initial position.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onReachStart(event: () => void): GridAttribute--><!--Device-GridAttribute-onReachStart(event: () => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback triggered when the grid reaches the start position. |

<a id="onscroll"></a>
## onScroll

```TypeScript
onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void)
```

Called When sliding the grid.

**Since:** 10

**Deprecated since:** 12

**Substitutes:** onDidScroll

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute--><!--Device-GridAttribute-onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (scrollOffset: number, scrollState: ScrollState) =&gt; void | Yes | callback of grid scroll,scrollOffset: Offset relative to the previous frame.The offset is positive when the **Grid** component is scrolled up and negative when it is scrolled down.<br>Unit: vp scrollState: Current scroll state. |

<a id="onscrollbarupdate"></a>
## onScrollBarUpdate

```TypeScript
onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute)
```

Triggered at the end of each frame layout in the grid.You can use the callback to set the position and length of the scrollbar.This API is intended solely for setting the scroll position of the grid.Avoid implementing service logic within this API.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute--><!--Device-GridAttribute-onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (index: number, offset: number) =&gt; ComputedBarAttribute | Yes | callback of grid scroll,index: Index of the first item of the grid.offset: Offset of the displayed first item relative to the start position of the grid, in vp.return ComputedBarAttribute to update scrollbar position and height. |

<a id="onscrollframebegin"></a>
## onScrollFrameBegin

```TypeScript
onScrollFrameBegin(event: OnScrollFrameBeginCallback)
```

When this API is called back, the event parameter passes the scroll offset that is about to occur. The event processing function can calculate the actually required scroll offset based on the application scenario and return it as the return value. The grid will then scroll according to this returned actual scroll offset.

This event is triggered when either of the following conditions is met:

1. Scrolling is initiated by user interaction (for example, finger swipe, keyboard, or mouse operation).2. The **Grid** component scrolls by inertia.3. Call the [fling](arkts-arkui-scroller-c.md#fling-1) API to trigger scrolling.

This event is not triggered in the following scenarios:

1. A scroll control API other than [fling](arkts-arkui-scroller-c.md#fling-1) is called.2. The out-of-bounds bounce effect is active.3. The scrollbar is dragged.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScrollFrameBegin(event: OnScrollFrameBeginCallback): GridAttribute--><!--Device-GridAttribute-onScrollFrameBegin(event: OnScrollFrameBeginCallback): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [OnScrollFrameBeginCallback](arkts-arkui-onscrollframebegincallback-t.md) | Yes | Callback triggered when each frame scrolling starts.<br>**Since:** 20 |

<a id="onscrollindex"></a>
## onScrollIndex

```TypeScript
onScrollIndex(event: (first: number, last: number) => void)
```

Called when the first or last item displayed in the grid changes.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScrollIndex(event: (first: number, last: number) => void): GridAttribute--><!--Device-GridAttribute-onScrollIndex(event: (first: number, last: number) => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (first: number, last: number) =&gt; void | Yes | of grid scroll,first is the index of the first item displayed in the grid,last is the index of the last item displayed in the grid. |

<a id="onscrollstart"></a>
## onScrollStart

```TypeScript
onScrollStart(event: () => void)
```

Triggered when the grid starts scrolling initiated by the user's finger dragging the grid or its scrollbar. This event is also triggered when the animation contained in the scrolling triggered by [Scroller](arkts-arkui-scroller-c.md)starts.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScrollStart(event: () => void): GridAttribute--><!--Device-GridAttribute-onScrollStart(event: () => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback invoked when the grid starts scrolling. |

<a id="onscrollstop"></a>
## onScrollStop

```TypeScript
onScrollStop(event: () => void)
```

Triggered when the grid stops scrolling after the user's finger leaves the screen. This event is also triggered when the animation contained in the scrolling triggered by [Scroller](arkts-arkui-scroller-c.md) stops.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-onScrollStop(event: () => void): GridAttribute--><!--Device-GridAttribute-onScrollStop(event: () => void): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback when the grid stops scrolling. |

<a id="rowsgap"></a>
## rowsGap

```TypeScript
rowsGap(value: Length)
```

Sets the gap between rows. A value less than 0 evaluates to the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-rowsGap(value: Length): GridAttribute--><!--Device-GridAttribute-rowsGap(value: Length): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Gap between rows.<br>Default value: **0**<br>Value range: [0, +∞). |

<a id="rowstemplate"></a>
## rowsTemplate

```TypeScript
rowsTemplate(value: string)
```

Lets you set the number of rows in the current grid layout,

**rowsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of rows and the actual row height, while adhering to the minimum row height specified with **track-size**.

**rowsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of rows based on the fixed row height specified with **track-size**.

**rowsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **rowsGap** to define the minimum gap between rows and automatically calculates the number of rows and the actual gap size based on the fixed row height specified by **track-size**.

**repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the row height, in the unit of px, vp (default), %, or any valid digit. The value must be greater than or equal to one valid row height.In auto-fit and auto-stretch modes, only a valid row height value is supported for **track-size**. Additionally,in auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support percentage (%). The auto-fill mode supports one or more valid row heights, for example,rowsTemplate('repeat(auto-fill, 20)') or rowsTemplate('repeat(auto-fill, 20 80px)').

If this attribute is set to **'0fr'**, the row height is 0, and grid item in the row is not displayed. If this attribute is set to any other invalid value, the grid item is displayed as one row.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-rowsTemplate(value: string): GridAttribute--><!--Device-GridAttribute-rowsTemplate(value: string): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes |  |

<a id="scrollbar"></a>
## scrollBar

```TypeScript
scrollBar(value: BarState)
```

Sets the scrollbar state.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-scrollBar(value: BarState): GridAttribute--><!--Device-GridAttribute-scrollBar(value: BarState): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BarState](../arkts-apis/arkts-arkui-barstate-e.md) | Yes | Scrollbar state.<br>Default value: **BarState.Auto**<br>**NOTE**<br>In API version 9and earlier versions, the default value is **BarState.Off**. Since API version 10, the default value is **BarState.Auto**. |

<a id="scrollbarcolor"></a>
## scrollBarColor

```TypeScript
scrollBarColor(value: Color | number | string)
```

Sets the scrollbar color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-scrollBarColor(value: Color | number | string): GridAttribute--><!--Device-GridAttribute-scrollBarColor(value: Color | number | string): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) \| number \| string | Yes | Scrollbar color.<br>Default value: **'#182431'** (40% opacity)<br>A number value indicates a HEX color in RGB or ARGB format, for example, **0xffffff**.<br>A string value indicates a color in RGB or ARGB format, for example, **'#ffffff'**. |

<a id="scrollbarcolor-1"></a>
## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string | Resource)
```

Sets the scrollbar color. Compared with [scrollBarColor](GridAttribute#scrollBarColor(value: Color | number | string)), the parameter name is changed to **color** and the Resource type is supported.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-GridAttribute-scrollBarColor(color: Color | number | string | Resource): GridAttribute--><!--Device-GridAttribute-scrollBarColor(color: Color | number | string | Resource): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) \| number \| string \| Resource | Yes | Scrollbar color.<br>Default value: **'#182431'** (40% opacity)<br>A number value indicates a HEX color in RGB or ARGB format, for example, **0xffffff**. A string value indicates a color in RGB or ARGB format, for example, **'#ffffff'**. |

<a id="scrollbarwidth"></a>
## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string)
```

Sets the scrollbar width. This attribute cannot be set in percentage. After the width is set, the scrollbar is displayed with the set width in normal state and pressed state. If the set width exceeds the height of the **Grid** component on the main axis, the scrollbar reverts to the default width.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-scrollBarWidth(value: number | string): GridAttribute--><!--Device-GridAttribute-scrollBarWidth(value: number | string): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Scrollbar width.<br>Default value: **4**<br>Unit: vp<br>If this parameter is set to a value less than or equal to 0, the default value is used. The value **0** means not to show the scrollbar. |

<a id="scrollbarwidth-1"></a>
## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string | Resource)
```

Sets the scrollbar width. This attribute cannot be set in percentage. After the width is set, the scrollbar is displayed with the set width in normal state and pressed state. If the set width exceeds the height of the **Grid** component on the main axis, the scrollbar reverts to 4 vp. The **Resource** type is supported.

If this attribute is not set, the scrollbar width is 4 vp.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-GridAttribute-scrollBarWidth(value: number | string | Resource): GridAttribute--><!--Device-GridAttribute-scrollBarWidth(value: number | string | Resource): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Scrollbar width.<br>Unit: vp<br>The value range is [0, +∞). If this parameter is set to a value less than 0, **4vp** is used.The value **0** means not to show the scrollbar. |

<a id="supportanimation"></a>
## supportAnimation

```TypeScript
supportAnimation(value: boolean)
```

Sets whether to enable animation. Currently, the grid item drag animation is supported. Animation is supported only in scrolling mode (only **rowsTemplate** or **columnsTemplate** is set).

Drag animations are only supported in grids with fixed size rules; scenarios involving spanning across rows or columns are not supported.

For details about the **supportAnimation** animation effect, see [Example 5: Implementing Dragging in a Grid](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-5-implementing-dragging-in-a-grid).For other animation effects, customize the drag effect.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-GridAttribute-supportAnimation(value: boolean): GridAttribute--><!--Device-GridAttribute-supportAnimation(value: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable animation. If this parameter is set to **true**, the drag animation of **GridItem** is supported. If this parameter is set to **false**, the drag animation of **GridItem** is not supported.<br>Default value: **false** |

<a id="supportemptybranchinlazyloading"></a>
## supportEmptyBranchInLazyLoading

```TypeScript
supportEmptyBranchInLazyLoading(supported: boolean | undefined)
```

Sets whether the current **Grid** component supports the use of the if/else rendering syntax in **LazyForEach** or **Repeat** to generate an empty branch node that contains no child component. If this attribute is not set, empty branch nodes are not supported. This attribute cannot be updated after being set. Therefore, you cannot switch between the behavior of supporting empty branches and the behavior of not supporting empty branches after setting this attribute.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-GridAttribute-supportEmptyBranchInLazyLoading(supported: boolean | undefined): GridAttribute--><!--Device-GridAttribute-supportEmptyBranchInLazyLoading(supported: boolean | undefined): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supported | boolean \| undefined | Yes | Whether the current **Grid** component supports the use of the [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) rendering syntax in [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to generate an empty branch node that contains no child component.<br>**true**: yes; **false**: no<br>If the value is **undefined**, it is processed as **false**. |

<a id="syncload"></a>
## syncLoad

```TypeScript
syncLoad(enable: boolean)
```

Sets whether to synchronously load all child components in the grid.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-GridAttribute-syncLoad(enable: boolean): GridAttribute--><!--Device-GridAttribute-syncLoad(enable: boolean): GridAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to synchronously load all child components in the grid.<br> **true**: yes;**false**: no Default value: **true**<br> **NOTE**<br>When this parameter is set to **false**, in the first display or **scrollToIndex** jumps without animation, if the time consumed by the frame layout exceeds 50 ms,the child components that have not been laid out in the grid are delayed to the next frame for layout. |

