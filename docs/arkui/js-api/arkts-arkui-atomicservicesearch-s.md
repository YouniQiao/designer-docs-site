# AtomicServiceSearch

Defines AtomicServiceSearch.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SearchParams, AtomicServiceSearch, SearchButtonParams, OperationParams, SelectParams, InputFilterParams, MenuAlignParams } from '@kit.ArkUI';
```

## controller

```TypeScript
controller?: SearchController
```

Set the Search component controller.

**Type:** SearchController

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operation

```TypeScript
operation?: OperationParams
```

Function settings in the selection area (right).

**Type:** OperationParams

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## placeholder

```TypeScript
placeholder?: ResourceStr
```

Indicates default prompt text displayed in the search box.
The default value is Search, which supports globalization.

**Type:** ResourceStr

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## search

```TypeScript
search?: SearchParams
```

Events and styles supported by the search area.

**Type:** SearchParams

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## select

```TypeScript
select?: SelectParams
```

Contents, events, and styles of the select area.

**Type:** SelectParams

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: ResourceStr
```

Sets the search text content that is currently displayed.

**Type:** ResourceStr

**Since:** 18

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

