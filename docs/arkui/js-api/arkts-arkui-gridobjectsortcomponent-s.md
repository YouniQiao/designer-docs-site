# GridObjectSortComponent

Declare struct GridObjectSortComponent.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { GridObjectSortComponentType, GridObjectSortComponentOptions, GridObjectSortComponent, GridObjectSortComponentItem } from '@kit.ArkUI';
```

## build

```TypeScript
build(): void
```

Build function of GridObjectSortComponent.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dataList

```TypeScript
dataList: Array<GridObjectSortComponentItem>
```

Data list of GridObjectSortComponent.

**Type:** Array<GridObjectSortComponentItem>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCancel

```TypeScript
onCancel: () => void
```

Cancel callback for saving data.

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSave

```TypeScript
onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void
```

Callback when Obtain edited data.

**Type:** (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: GridObjectSortComponentOptions
```

Component types and parameters of the GridObjectSortComponent.

**Type:** GridObjectSortComponentOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

