# TypeConstructorWithArgs

Represents a class constructor that accepts arbitrary arguments.

**Since:** 12

<!--Device-unnamed-export interface TypeConstructorWithArgs<T>--><!--Device-unnamed-export interface TypeConstructorWithArgs<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
new(...args: any): T
```

Creates and returns an instance of the specified type T.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TypeConstructorWithArgs-new(...args: any): T--><!--Device-TypeConstructorWithArgs-new(...args: any): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | any | Yes | Function arguments. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Instance of the T type. |

