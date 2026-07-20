# AsyncCallback

The ResourceManager callback.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [base:AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)

<!--Device-resourceManager-export interface AsyncCallback<T>--><!--Device-resourceManager-export interface AsyncCallback<T>-End-->

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
(err: Error, data: T): void
```

Defines an asynchronous callback that carries an error parameter and asynchronous return value.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [base:AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)

<!--Device-AsyncCallback-(err: Error, data: T): void--><!--Device-AsyncCallback-(err: Error, data: T): void-End-->

**System capability:** SystemCapability.Global.ResourceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| err | [Error](../../apis-na/arkts-apis/arkts-na-lib-es5-error-i.md) | Yes | Error message returned when the API fails to be called. |
| data | T | Yes | Callback invoked when the API is called. |

