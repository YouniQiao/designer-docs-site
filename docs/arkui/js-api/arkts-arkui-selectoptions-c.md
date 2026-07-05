# SelectOptions

Declare type SelectOption

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectOptions, OperationOption, SubHeader, OperationType, SymbolOptions } from '@ohos.arkui.advanced.SubHeader';
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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

