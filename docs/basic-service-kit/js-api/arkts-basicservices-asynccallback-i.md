# AsyncCallback

Defines a common callback that carries an error parameter and asynchronous return value.The error parameter is of the [BusinessError](arkts-basicservices-businesserror-i.md) type. The type of the asynchronous return value is defined by the developer.

**Since:** 6

**System capability:** SystemCapability.Base

## Modules to Import

```TypeScript
import { Callback, BusinessError, ErrorCallback, AsyncCallback } from '@kit.BasicServicesKit';
```

## constructor

```TypeScript
(err: BusinessError<E>, data: T): void
```

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | BusinessError&lt;E&gt; | Yes | Common error message returned when the API fails to be called. |
| data | T | Yes | Data returned asynchronously when the API is successfully called. The data type is defined bythe developer. This parameter is unavailable when the API fails to be called. |

