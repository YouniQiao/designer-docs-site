# WaterFlowOptions

Provides parameters of the **WaterFlow** component.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## footer

```TypeScript
footer?: CustomBuilder
```

Footer component of the **WaterFlow** component, which is used to display custom content (such as loading prompts and bottom icons) at the end of the waterfall. If this parameter is not set, no footer component is displayed.

**Type:** CustomBuilder

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## footerContent

```TypeScript
footerContent?: ComponentContent
```

Footer of the **WaterFlow** component. This parameter has a higher priority than **footer**. If both **footer** and **footerContent** are set, the component set by **footerContent** will be used.

**Type:** ComponentContent

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutMode

```TypeScript
layoutMode?: WaterFlowLayoutMode
```

Layout mode of the <em>WaterFlow</em> component.

**Type:** WaterFlowLayoutMode

**Default:** ALWAYS_TOP_DOWN

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scroller

```TypeScript
scroller?: Scroller
```

Controller of the scrollable component, bound to the scrollable component. <p><strong>NOTE</strong> <br>The scroller cannot be bound to other scrollable components, such as ArcList, List, Grid, Scroll, or WaterFlow. </p>

**Type:** Scroller

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sections

```TypeScript
sections?: WaterFlowSections
```

Water flow item sections, used to implement mixed layouts with different column counts for each section within the same **WaterFlow** component. This is applicable to scenarios where different numbers of columns are required in different areas. If this parameter is not set, the layout with the same number of columns is used. <p><strong>NOTE</strong> <br>1. When <em>sections</em> is used, the <em>columnsTemplate</em> and <em>rowsTemplate</em> attributes are ignored. <br>2. When <em>sections</em> is used, the footer cannot be set separately. The last section can function as the footer. </p>

**Type:** WaterFlowSections

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

