# ConnectOptionsCollections

Defines the parameter type for the [globalConnect](PersistenceV2.globalConnect<T extends CollectionType<S>, S extends object>( type: ConnectOptionsCollections<T, S> | ConnectOptions<T> )) API. **ConnectOptionsCollections** is inherited from [ConnectOptions\<T\>](arkts-arkui-connectoptions-c.md). You can use the **ConnectOptionsCollections** input parameter to persist container data (such as **Array\<S>**). The following shows the examples of **StorageDefaultCreator\<T>** and **StorageDefaultCreator\<S>**:

**Inheritance/Implementation:** ConnectOptionsCollections extends [ConnectOptions<T>](ConnectOptions<T>)

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

## defaultCreator

```TypeScript
defaultCreator?: StorageDefaultCreator<T>
```

Persists container data. **defaultSubCreator** should be provided together with **defaultCreator**; otherwise, the container data cannot be persisted. The collection item type **S** must be the same as the return type of **defaultSubCreator**. If **defaultSubCreator** is provided but **defaultCreator** is not, the persistence fails.

**Type:** StorageDefaultCreator<T>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultSubCreator

```TypeScript
defaultSubCreator?: StorageDefaultCreator<S>
```

Persists container data. If the return value of **defaultSubCreator** is **undefined** or **null**, the persistence fails. When a user-defined class collection (such as **Array<ClassA>**) is persisted, the generic type **T** in **defaultCreator** is **Array<ClassA>**, and **S** in **defaultSubCreator** is **ClassA**.

**Type:** StorageDefaultCreator<S>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

