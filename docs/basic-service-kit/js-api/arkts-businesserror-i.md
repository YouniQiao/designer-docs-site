# BusinessError

错误参数。

**Inheritance:** BusinessErrorextends: Error.

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback,BusinessError,ErrorCallback,AsyncCallback } from '@kit.BasicServicesKit';
```

## code

```TypeScript
code: number
```

接口调用失败返回的错误码信息。

**Type:** number

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Base

## data

```TypeScript
data?: T
```

接口调用失败时返回的附加错误信息。如果不填，则错误对象不包含附加数据。

**Type:** T

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Base

