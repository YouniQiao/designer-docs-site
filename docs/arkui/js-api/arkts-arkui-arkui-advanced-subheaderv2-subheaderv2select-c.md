# SubHeaderV2Select

Declare the SubHeaderV2Select

**Since:** 18

**Decorator:** @ObservedV2

<!--Device-unnamed-export declare class SubHeaderV2Select--><!--Device-unnamed-export declare class SubHeaderV2Select-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SubHeaderV2Select, SubHeaderV2, SubHeaderV2IconType, SubHeaderV2OperationItemType, SubHeaderV2OperationType, SubHeaderV2Title, SubHeaderV2OperationItem } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options: SubHeaderV2SelectOptions)
```

The constructor of SubHeaderV2Select

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SubHeaderV2Select-constructor(options: SubHeaderV2SelectOptions)--><!--Device-SubHeaderV2Select-constructor(options: SubHeaderV2SelectOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SubHeaderV2SelectOptions](arkts-arkui-arkui-advanced-subheaderv2-subheaderv2selectoptions-i.md) | Yes |  |

## defaultFocus

```TypeScript
@Trace defaultFocus?: boolean
```

Sets the default focus state of SubHeaderV2SelectOptions.

**Type:** boolean

**Default:** false

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SubHeaderV2Select-@Trace defaultFocus?: boolean--><!--Device-SubHeaderV2Select-@Trace defaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for the SubHeaderV2Select.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-SubHeaderV2Select-id?: string--><!--Device-SubHeaderV2Select-id?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSelect

```TypeScript
@Trace onSelect?: SubHeaderV2SelectOnSelect
```

Sets the onSelect of the SubHeaderV2SelectOptions.

**Type:** SubHeaderV2SelectOnSelect

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SubHeaderV2Select-@Trace onSelect?: SubHeaderV2SelectOnSelect--><!--Device-SubHeaderV2Select-@Trace onSelect?: SubHeaderV2SelectOnSelect-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
@Trace options: SelectOption[]
```

Sets the options of the SubHeaderV2SelectOptions.

**Type:** SelectOption[]

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SubHeaderV2Select-@Trace options: SelectOption[]--><!--Device-SubHeaderV2Select-@Trace options: SelectOption[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedContent

```TypeScript
@Trace selectedContent?: ResourceStr
```

Sets the selected content of the SubHeaderV2SelectOptions.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SubHeaderV2Select-@Trace selectedContent?: ResourceStr--><!--Device-SubHeaderV2Select-@Trace selectedContent?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndex

```TypeScript
@Trace selectedIndex?: number
```

Sets the selected index of the SubHeaderV2SelectOptions.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SubHeaderV2Select-@Trace selectedIndex?: number--><!--Device-SubHeaderV2Select-@Trace selectedIndex?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

