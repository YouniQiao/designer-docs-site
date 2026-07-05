# AsyncCallback

The ResourceManager callback.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.base:AsyncCallback

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
(err: Error, data: T): void
```

异步回调函数，携带错误参数和异步返回值。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.base:AsyncCallback

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | Error | Yes | 接口调用失败的错误信息。 |
| data | T | Yes | 接口调用时的回调信息。 |

