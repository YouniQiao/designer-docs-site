# GridObjectSortComponentItem

Provides data item configuration for the **GridObjectSortComponent** component.

**Since:** 11

<!--Device-unnamed-export interface GridObjectSortComponentItem--><!--Device-unnamed-export interface GridObjectSortComponentItem-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { GridObjectSortComponentType, GridObjectSortComponentOptions, GridObjectSortComponent, GridObjectSortComponentItem } from '@kit.ArkUI';
```

## id

```TypeScript
id: number | string
```

Data ID, which must be unique.

The default value is an empty string.

**Type:** number | string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponentItem-id: number | string--><!--Device-GridObjectSortComponentItem-id: number | string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## order

```TypeScript
order: number
```

Sequence number.

The value must be greater than or equal to 0.

Default value: **0**.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponentItem-order: number--><!--Device-GridObjectSortComponentItem-order: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected: boolean
```

Whether the grid object has been added. The value **true** means that the grid object has been added, and **false** means the opposite.

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponentItem-selected: boolean--><!--Device-GridObjectSortComponentItem-selected: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStyle

```TypeScript
symbolStyle?: SymbolGlyphModifier
```

Symbol resource of the image. Required when **GridObjectSortComponentType** is set to **IMAGE_TEXT**. The priority of this property is higher than that of **url**.

**Type:** SymbolGlyphModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-GridObjectSortComponentItem-symbolStyle?: SymbolGlyphModifier--><!--Device-GridObjectSortComponentItem-symbolStyle?: SymbolGlyphModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text: ResourceStr
```

Text information.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponentItem-text: ResourceStr--><!--Device-GridObjectSortComponentItem-text: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## url

```TypeScript
url?: ResourceStr
```

URL of the image. Required when **GridObjectSortComponentType** is set to **IMAGE_TEXT**.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-GridObjectSortComponentItem-url?: ResourceStr--><!--Device-GridObjectSortComponentItem-url?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

