# SubHeaderV2Title

Declare the SubHeaderV2Title

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SubHeaderV2Select, SubHeaderV2, SubHeaderV2IconType, SubHeaderV2OperationItemType, SubHeaderV2OperationType, SubHeaderV2Title, SubHeaderV2OperationItem } from '@ohos.arkui.advanced.SubHeaderV2';
```

## constructor

```TypeScript
constructor(options: SubHeaderV2TitleOptions)
```

The constructor of SubHeaderV2Title

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubHeaderV2TitleOptions | Yes |  |

## id

```TypeScript
id?: string
```

Set the id of the title.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitle

```TypeScript
@Trace primaryTitle?: ResourceStr
```

The first line text of content area.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitleModifier

```TypeScript
@Trace primaryTitleModifier?: TextModifier
```

Text modifier for primary title.

**Type:** TextModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitle

```TypeScript
@Trace secondaryTitle?: ResourceStr
```

The secondary line text of content area.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitleModifier

```TypeScript
@Trace secondaryTitleModifier?: TextModifier
```

Text modifier for secondary title.

**Type:** TextModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## titleAccessibilityText

```TypeScript
@Trace titleAccessibilityText?: ResourceStr
```

The accessibility text for broadcasting the title.

**Type:** ResourceStr

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

