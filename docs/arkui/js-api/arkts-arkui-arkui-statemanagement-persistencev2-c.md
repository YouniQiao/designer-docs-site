# PersistenceV2

Inherits from [AppStorageV2](arkts-arkui-arkui-statemanagement-appstoragev2-c.md). For details, see [PersistenceV2: Persisting Application State](../../../../ui/state-management/arkts-new-persistencev2.md).

**Inheritance/Implementation:** PersistenceV2 extends [AppStorageV2](arkts-arkui-arkui-statemanagement-appstoragev2-c.md)

**Since:** 12

<!--Device-unnamed-export declare class PersistenceV2 extends AppStorageV2--><!--Device-unnamed-export declare class PersistenceV2 extends AppStorageV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

## globalConnect

```TypeScript
static globalConnect<T extends object>(
    type: ConnectOptions<T>
  ): T | undefined
```

Stores key-value pair data on the application disk. If the given key already exists in [PersistenceV2](../../../../ui/state-management/arkts-new-persistencev2.md), the corresponding value is returned.Otherwise, a default value is constructed using the default value constructor and returned. If **globalConnect** is used for an [\@ObservedV2](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) decorated object,changes to the object's [\@Trace](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) properties will trigger automatic refresh of the associated object, while changes to non-@Trace properties will not. If necessary,the [PersistenceV2.save](arkts-arkui-arkui-statemanagement-persistencev2-c.md#save-1) API can be called to store the data manually.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-PersistenceV2-static globalConnect<T extends object>(
    type: ConnectOptions<T>
  ): T | undefined--><!--Device-PersistenceV2-static globalConnect<T extends object>(
    type: ConnectOptions<T>
  ): T | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [ConnectOptions](../../apis-ability-kit/arkts-apis/arkts-ability-ability-connectoptions-t.md)<T> | Yes | Connection settings. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the data if creation or acquisition is successful; otherwise, returns **undefined**. |

## globalConnect

```TypeScript
static globalConnect<T extends CollectionType<S>, S extends object>(
    type: ConnectOptionsCollections<T, S> | ConnectOptions<T>
  ): T | undefined
```

Stores key-value pair data on the application disk. Supports the persistence of the following collection types:[Array, Map, Set, Date, collections.Array, collections.Map, and collections.Set](../../../../ui/state-management/arkts-new-persistencev2.md#types-supported-by-globalconnect).Note that when persisting data of the **Array\<ClassA>** type, you need to call [makeObserved](arkts-arkui-arkui-statemanagement-uiutils-c.md#makeobserved-1) to make the returned object observed. Multi-level nested sets are not supported. For example, **Array<Array\<ClassA>>** persistence is not supported.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-PersistenceV2-static globalConnect<T extends CollectionType<S>, S extends object>(
    type: ConnectOptionsCollections<T, S> | ConnectOptions<T>
  ): T | undefined--><!--Device-PersistenceV2-static globalConnect<T extends CollectionType<S>, S extends object>(
    type: ConnectOptionsCollections<T, S> | ConnectOptions<T>
  ): T | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [ConnectOptionsCollections](arkts-arkui-arkui-statemanagement-connectoptionscollections-c.md)<T, S> \| ConnectOptions<T> | Yes | Passed **globalConnect** parameters. For details, see the description of **ConnectOptions** and **ConnectOptionsCollections**.<br>If **defaultSubCreator** is provided in **ConnectOptionsCollections**, **defaultCreator** must be provided.Otherwise, the persistence fails. The collection item type S must be the same as the return type of **defaultSubCreator**. If the return types are inconsistent, an error will be reported during compilation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the data if creation or acquisition is successful; otherwise, returns **undefined**. |

## notifyOnError

```TypeScript
static notifyOnError(callback: PersistenceErrorCallback | undefined): void
```

Called when persistence fails.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PersistenceV2-static notifyOnError(callback: PersistenceErrorCallback | undefined): void--><!--Device-PersistenceV2-static notifyOnError(callback: PersistenceErrorCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PersistenceErrorCallback \| undefined | Yes | Callback called when persistence fails. |

## save

```TypeScript
static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void
```

Persists the specified key-value pair data once.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PersistenceV2-static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void--><!--Device-PersistenceV2-static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOrType | string \| TypeConstructorWithArgs<T> | Yes | Key to be persisted. If a type is specified, the key for persistence is the name of the type. |

