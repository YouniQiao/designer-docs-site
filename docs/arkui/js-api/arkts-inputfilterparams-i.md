# InputFilterParams

Defines the InputFilter parameters.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SearchParams,AtomicServiceSearch,SearchButtonParams,OperationParams,SelectParams,InputFilterParams,MenuAlignParams } from '@kit.ArkUI';
```

## inputFilterValue

```TypeScript
inputFilterValue: ResourceStr
```

Regular expression.

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## error

```TypeScript
error?: Callback<string>
```

If the regular expression matching fails, the filtered content is returned.

**Type:** Callback<string>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

