# PersistenceV2

继承自[AppStorageV2](arkts-appstoragev2-c.md#AppStorageV2)，PersistenceV2具体UI使用说明，详见 [PersistenceV2(持久化存储UI状态)](docroot://ui/state-management/arkts-new-persistencev2.md)。

**Inheritance:** PersistenceV2extends: AppStorageV2.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## globalConnect

```TypeScript
static globalConnect<T extends object>(
    type: ConnectOptions<T>
  ): T | undefined
```

将键值对数据储存在应用磁盘中。如果给定的key已经存在于[PersistenceV2](docroot://ui/state-management/arkts-new-persistencev2.md)中，返回对应的值；否则，会通 过获取默认值的构造器构造默认值，并返回。如果globalConnect的是 [\@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)对象，该对象 [\@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)属性的变化，会触发整个关联对象的自动刷新；非\@Trace属性变化则不会，如有必 要，可调用[PersistenceV2.save](arkts-persistencev2-c.md#save)接口手动存储。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ConnectOptions&lt;T> | Yes | 传入的connect参数，详细说明见ConnectOptions参数说明。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the data if creation or acquisition is successful; otherwise, returns  undefined. |

## globalConnect

```TypeScript
static globalConnect<T extends CollectionType<S>, S extends object>(
    type: ConnectOptionsCollections<T, S> | ConnectOptions<T>
  ): T | undefined
```

将键值对数据储存在应用磁盘中。支持集合类型 [`Array`，`Map`，`Set`，`Date`，`collections.Array`, `collections.Map`, `collections.Set`类型的持久化](docroot://ui/state-management/arkts-new-persistencev2.md#globalconnect支持集合的类型)。 注意在持久化`Array<ClassA>`类型的数据时，需要调用[`makeObserved`](arkts-uiutils-c.md#makeObserved)使返回的对象被观察到。不支持多个嵌套集合，例如不支持 `Array<Array<ClassA>>`的持久化。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | ConnectOptionsCollections&lt;T, S> \| ConnectOptions&lt;T> | Yes | 传入的globalConnect参数，详细说明见ConnectOptions和  ConnectOptionsCollections参数说明。 当开发者在ConnectOptionsCollections中提供默认defaultSubCreator时，则需要同时提供默认创建器  defaultCreator，如果不提供，会导致持久化失败。且集合项类型S必须与defaultSubCreator的返回类型相同。如果返回类型不一致，编译会报错。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the data if creation or acquisition is successful; otherwise, returns  undefined. |

## notifyOnError

```TypeScript
static notifyOnError(callback: PersistenceErrorCallback | undefined): void
```

在持久化失败时调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PersistenceErrorCallback \| undefined | Yes | 持久化失败时调用。 |

## save

```TypeScript
static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void
```

将指定的键值对数据持久化一次。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOrType | string \| TypeConstructorWithArgs&lt;T> | Yes | 需要持久化的key；如果指定的是type类型，持久化的key为type的name。 |

