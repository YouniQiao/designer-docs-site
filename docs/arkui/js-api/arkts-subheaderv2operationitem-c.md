# SubHeaderV2OperationItem

Declare the SubHeaderV2OperationItem

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SubHeaderV2Select,SubHeaderV2,SubHeaderV2IconType,SubHeaderV2OperationItemType,SubHeaderV2OperationType,SubHeaderV2Title,SubHeaderV2OperationItem } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: SubHeaderV2OperationItemOptions)
```

The constructor of SubHeaderV2OperationItem

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubHeaderV2OperationItemOptions | Yes |  |

## action

```TypeScript
@Trace action?: SubHeaderV2OperationItemAction
```

callback function when operate the text or icon.

**Type:** SubHeaderV2OperationItemAction

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for SubHeaderV2OperationItem.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
@Trace accessibilityLevel?: string
```

The accessibilityLevel of this text or icon.

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
@Trace defaultFocus?: boolean
```

Sets the default focus state of the text or icon.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
@Trace accessibilityText?: ResourceStr
```

The accessibilityText of this text or icon.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@Trace content: SubHeaderV2OperationItemType
```

The content of text or the address of icon.

**Type:** SubHeaderV2OperationItemType

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
@Trace accessibilityDescription?: ResourceStr
```

The accessibilityDescription of this text or icon.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

