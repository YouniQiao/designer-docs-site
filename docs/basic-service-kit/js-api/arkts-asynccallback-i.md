# AsyncCallback

通用回调函数，携带错误参数和异步返回值，用于在异步操作完成时同时回传错误信息或成功数据。错误参数为[BusinessError](arkts-businesserror-i.md#BusinessError)类型的信息。 异步返回值的类型由开发者自定义，回调将返回对应类型。

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback,BusinessError,ErrorCallback,AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(err: BusinessError<E>, data: T): void
```

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | BusinessError&lt;E> | Yes | 接口调用失败的公共错误信息。接口调用成功时，此参数返回null |
| data | T | Yes | 接口调用成功时的异步返回数据，类型由开发者自定义。接口调用失败时，此参数不可用。 |

