# ErrorCallback

通用回调函数，携带错误参数，用于在接口调用失败时回传错误信息。回调返回的信息为[BusinessError](arkts-businesserror-i.md#BusinessError)类型的错误参数。

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback,BusinessError,ErrorCallback,AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(err: T): void
```

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | T | Yes | 接口调用失败的公共错误信息，类型默认为BusinessError，包含错误码（code）和可选附加数据（data）。 |

