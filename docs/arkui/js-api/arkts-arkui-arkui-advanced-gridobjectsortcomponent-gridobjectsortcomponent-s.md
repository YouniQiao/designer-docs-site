# GridObjectSortComponent

**GridObjectSortComponent** is a grid object organizer that you can use to edit, drag to sort, add, and delete grid objects.

> **NOTE**  
>  
> - This component can be used only in the stage model.  
>  
> - If the **GridObjectSortComponent** component has [universal attributes](./@internal/component/ets/common)  
> and [universal events](./@internal/component/ets/common) configured, the compiler toolchain automatically  
> generates an additional **__Common__** node and mounts the universal attributes and universal events on this node  
> rather than the **GridObjectSortComponent** component itself. As a result, the configured universal attributes and  
> universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes  
> and events with the **GridObjectSortComponent** component.

**Since:** 11

<!--Device-unnamed-export declare struct GridObjectSortComponent--><!--Device-unnamed-export declare struct GridObjectSortComponent-End-->

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

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponent-build(): void--><!--Device-GridObjectSortComponent-build(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dataList

```TypeScript
dataList: Array<GridObjectSortComponentItem>
```

Data to pass. The maximum data length is 50 characters. If it is exceeded, only the first 50 characters are used.

**Type:** Array<GridObjectSortComponentItem>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponent-dataList: Array<GridObjectSortComponentItem>--><!--Device-GridObjectSortComponent-dataList: Array<GridObjectSortComponentItem>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCancel

```TypeScript
onCancel: () => void
```

Callback invoked when changes are canceled.

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponent-onCancel: () => void--><!--Device-GridObjectSortComponent-onCancel: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSave

```TypeScript
onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void
```

Callback invoked when changes are saved. The data after the changes is returned.

**Type:** (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponent-onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void--><!--Device-GridObjectSortComponent-onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: GridObjectSortComponentOptions
```

Component configuration.

**Type:** GridObjectSortComponentOptions

**Since:** 11

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponent-options: GridObjectSortComponentOptions--><!--Device-GridObjectSortComponent-options: GridObjectSortComponentOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

