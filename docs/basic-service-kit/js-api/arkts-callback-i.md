# Callback

通用回调函数，用于在异步操作完成时回传处理结果。类型由开发者自定义。

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback,BusinessError,ErrorCallback,AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(data: T): void
```

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T | Yes | 接口调用时的公共回调信息。类型由开发者自定义，回调将返回对应类型的数据。 |

