# AsyncCallback

The ResourceManager callback.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [base:AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback)

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@ohos.resourceManager';
```

## constructor

```TypeScript
(err: Error, data: T): void
```

Defines an asynchronous callback that carries an error parameter and asynchronous return value.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [base:AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback)

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | Error | Yes | Error message returned when the API fails to be called. |
| data | T | Yes | Callback invoked when the API is called. |

