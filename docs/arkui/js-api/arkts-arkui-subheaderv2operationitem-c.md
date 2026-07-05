# SubHeaderV2OperationItem

Declare the SubHeaderV2OperationItem

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SubHeaderV2Select, SubHeaderV2, SubHeaderV2IconType, SubHeaderV2OperationItemType, SubHeaderV2OperationType, SubHeaderV2Title, SubHeaderV2OperationItem } from '@ohos.arkui.advanced.SubHeaderV2';
```

## constructor

```TypeScript
constructor(options: SubHeaderV2OperationItemOptions)
```

The constructor of SubHeaderV2OperationItem

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SubHeaderV2OperationItemOptions | Yes |  |

## accessibilityDescription

```TypeScript
@Trace accessibilityDescription?: ResourceStr
```

The accessibilityDescription of this text or icon.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
@Trace accessibilityLevel?: string
```

The accessibilityLevel of this text or icon.

**Type:** string

**Default:** "auto".The options are as follows:<br/>
"auto":The value is converted to "yes" or "no" based on the component.
"yes": the current component is selectable for the accessibility service.
"no": The current component is not selectable for the accessibility service.
"no-hide-descendants":The current component and all its child components are not selectable<br/>
for the accessibility service.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
@Trace accessibilityText?: ResourceStr
```

The accessibilityText of this text or icon.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
@Trace action?: SubHeaderV2OperationItemAction
```

callback function when operate the text or icon.

**Type:** SubHeaderV2OperationItemAction

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
@Trace content: SubHeaderV2OperationItemType
```

The content of text or the address of icon.

**Type:** SubHeaderV2OperationItemType

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
@Trace defaultFocus?: boolean
```

Sets the default focus state of the text or icon.

**Type:** boolean

**Default:** false

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for SubHeaderV2OperationItem.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

