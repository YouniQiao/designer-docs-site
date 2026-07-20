# Callback

Defines a common callback. You can set **data** to customize the data type of the information returned by the callback.

**Since:** 6

<!--Device-unnamed-export interface Callback<T>--><!--Device-unnamed-export interface Callback<T>-End-->

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback, BusinessError, ErrorCallback, AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(data: T): void
```

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-Callback-(data: T): void--><!--Device-Callback-(data: T): void-End-->

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T | Yes | Common callback information. The type is defined by the developer.The callback is used to return data of the corresponding type. |

