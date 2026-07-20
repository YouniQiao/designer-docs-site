# InputFilterParams

Defines the InputFilter parameters.

**Since:** 18

<!--Device-unnamed-export interface InputFilterParams--><!--Device-unnamed-export interface InputFilterParams-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SearchParams, AtomicServiceSearch, SearchButtonParams, OperationParams, SelectParams, InputFilterParams, MenuAlignParams } from '@kit.ArkUI';
```

## error

```TypeScript
error?: Callback<string>
```

If the regular expression matching fails, the filtered content is returned.

**Type:** Callback<string>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-InputFilterParams-error?: Callback<string>--><!--Device-InputFilterParams-error?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## inputFilterValue

```TypeScript
inputFilterValue: ResourceStr
```

Regular expression.

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-InputFilterParams-inputFilterValue: ResourceStr--><!--Device-InputFilterParams-inputFilterValue: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

