# BusinessError

Defines the error parameter.

**Inheritance/Implementation:** BusinessError extends [Error](../../apis-na/arkts-apis/arkts-na-error-i.md#error)

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback, BusinessError, ErrorCallback, AsyncCallback } from '@ohos.base';
```

## code

```TypeScript
code: number
```

Error code returned when the API fails to be called.

**Type:** number

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Base

## data

```TypeScript
data?: T
```

Error message returned when the API fails to be called. If this parameter is left empty, the error object does not contain additional data.

**Type:** T

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Base

