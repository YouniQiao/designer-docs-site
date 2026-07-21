# ErrorCallback

Defines a common callback that carries an error parameter. The information returned by the callback is of the [BusinessError](arkts-basicservices-base-businesserror-i.md) type.

**Since:** 6

<!--Device-unnamed-export interface ErrorCallback<T extends Error = BusinessError>--><!--Device-unnamed-export interface ErrorCallback<T extends Error = BusinessError>-End-->

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback, BusinessError, ErrorCallback, AsyncCallback } from '@kit.BasicServicesKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
(err: T): void
```

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ErrorCallback-(err: T): void--><!--Device-ErrorCallback-(err: T): void-End-->

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | T | Yes | Common error message returned when the API fails to be called. |

