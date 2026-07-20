# SelectOptions

Declare type SelectOption

**Since:** 18

<!--Device-unnamed-export declare class SelectOptions--><!--Device-unnamed-export declare class SelectOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectOptions, OperationOption, SubHeader, OperationType, SymbolOptions } from '@kit.ArkUI';
```

## defaultFocus

```TypeScript
defaultFocus?: boolean
```

Sets the default focus state of select.

**Type:** boolean

**Default:** { false }

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectOptions-defaultFocus?: boolean--><!--Device-SelectOptions-defaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## id

```TypeScript
id?: string
```

Set the id for the select.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-SelectOptions-id?: string--><!--Device-SelectOptions-id?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSelect

```TypeScript
onSelect?: (index: number, value?: string) => void
```

Callback when the select is selected.

**Type:** (index: number, value?: string) => void

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectOptions-onSelect?: (index: number, value?: string) => void--><!--Device-SelectOptions-onSelect?: (index: number, value?: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: Array<SelectOption>
```

SubOption array of the select.

**Type:** Array<SelectOption>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectOptions-options: Array<SelectOption>--><!--Device-SelectOptions-options: Array<SelectOption>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: number
```

The default selected index.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectOptions-selected?: number--><!--Device-SelectOptions-selected?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: ResourceStr
```

The default text value.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SelectOptions-value?: ResourceStr--><!--Device-SelectOptions-value?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

