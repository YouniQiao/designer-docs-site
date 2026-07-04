# SubHeader

Declare struct SubHeader

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectOptions, OperationOption, SubHeader, OperationType, SymbolOptions } from '@ohos.arkui.advanced.SubHeader';
```

## contentMargin

```TypeScript
@Prop contentMargin?: LocalizedMargin
```

Set the content margin.

**Type:** LocalizedMargin

**Default:** {start: LengthMetrics.resource($r('sys.float.margin_left')),
<br> end: LengthMetrics.resource($r('sys.float.margin_right'))}

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentPadding

```TypeScript
@Prop contentPadding?: LocalizedPadding
```

Set the content padding.

**Type:** LocalizedPadding

**Default:** set different default values according to the width of the subHeader:
<br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
<br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
@Prop icon?: ResourceStr
```

Icon resource of content area.

**Type:** ResourceStr

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconSymbolOptions

```TypeScript
iconSymbolOptions?: SymbolOptions
```

Attributes of Symbol icon.

**Type:** SymbolOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operationItem

```TypeScript
operationItem?: Array<OperationOption>
```

operation item.

**Type:** Array<OperationOption>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operationSymbolOptions

```TypeScript
operationSymbolOptions?: Array<SymbolOptions>
```

Attributes of Symbol icons in operation area.

**Type:** Array<SymbolOptions>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operationType

```TypeScript
@Prop operationType?: OperationType
```

Operation style of SubHeader.

**Type:** OperationType

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitle

```TypeScript
@Prop primaryTitle?: ResourceStr
```

The first line text of content area.

**Type:** ResourceStr

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitleModifier

```TypeScript
primaryTitleModifier?: TextModifier
```

Text modifier for primary title.

**Type:** TextModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitle

```TypeScript
@Prop secondaryTitle?: ResourceStr
```

The secondary line text of content area.

**Type:** ResourceStr

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitleModifier

```TypeScript
secondaryTitleModifier?: TextModifier
```

Text modifier for secondary title.

**Type:** TextModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## select

```TypeScript
select?: SelectOptions
```

Select option of content area.

**Type:** SelectOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleAccessibilityText

```TypeScript
@Prop titleAccessibilityText?: ResourceStr
```

Set the ability to customize the broadcast of the title.

**Type:** ResourceStr

**Since:** 23

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleBuilder

```TypeScript
@BuilderParam titleBuilder?: () => void
```

Set the title content.

**Type:** () => void

**Since:** 18

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleId

```TypeScript
titleId?: string
```

Set the titleId for title.

**Type:** string

**Since:** 24

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

