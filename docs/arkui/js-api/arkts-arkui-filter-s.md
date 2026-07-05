# Filter

Declare Filter.The Filter is used in scenarios where multi-dimensional filtering is required.

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { FilterType, Filter, FilterParams, FilterResult } from '@ohos.arkui.advanced.Filter';
```

## additionFilters

```TypeScript
@Prop additionFilters?: FilterParams
```

FilterParams, Additional filter item parameter. The filter item name is displayed and can be deselected.

**Type:** FilterParams

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## container

```TypeScript
@BuilderParam container: () => void
```

Container in the user-defined filtering result display area.

**Type:** () => void

**Since:** 22

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## filterType

```TypeScript
@Prop filterType?: FilterType
```

FilterType, Filter display style type.

**Type:** FilterType

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## multiFilters

```TypeScript
@Prop multiFilters: Array<FilterParams>
```

Multi-dimensional filtering parameters.

**Type:** Array<FilterParams>

**Since:** 22

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onFilterChanged

```TypeScript
onFilterChanged: (filterResults: Array<FilterResult>) => void
```

FilterParams, Callback method after a user clicks a filter item.

**Type:** (filterResults: Array<FilterResult>) => void

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

