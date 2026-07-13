# ErrorCallback

Defines a common callback that carries an error parameter. The information returned by the callback is of
the [BusinessError](arkts-basicservices-businesserror-i.md) type.

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback, BusinessError, ErrorCallback, AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(err: T): void
```

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | T | Yes | Common error message returned when the API fails to be called. |

