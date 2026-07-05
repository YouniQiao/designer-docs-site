# ConnectOptionsCollections

[globalConnect]PersistenceV2.globalConnect<T extends CollectionType<S>, S extends object>( type: ConnectOptionsCollections<T, S> | ConnectOptions<T> ) 接口参数类型，ConnectOptionsCollections继承自[ConnectOptions\<T\>](arkts-connectoptions-c.md#ConnectOptions)。当开发者需要持久化容器类型数据（如`Array<S>`）时，需要使用 `ConnectOptionsCollections`入参。 如下展示`StorageDefaultCreator<T>`和`StorageDefaultCreator<S>`示例：

**Inheritance:** ConnectOptionsCollectionsextends: ConnectOptions<T>.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## defaultCreator

```TypeScript
defaultCreator?: StorageDefaultCreator<T>
```

用于持久化容器类型数据，当提供默认`defaultSubCreator`时，则需要同时提供默认创建器`defaultCreator`，不提供默认创建器，会导致无法持久化容器类型数据。集合项类型`S`必须与 `defaultSubCreator`的返回类型相同。如果提供defaultSubCreator，没有提供defaultCreator，会导致持久化失败。

**Type:** StorageDefaultCreator<T>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultSubCreator

```TypeScript
defaultSubCreator?: StorageDefaultCreator<S>
```

使用该集合项默认构造函数，用于持久化容器类数据。如果defaultSubCreator返回的是`undefined`或`null`，会导致持久化失败。 当持久化用户自定义class类集合（如`Array<ClassA>`）时， `defaultCreator`中的泛型类型`T`为`Array<ClassA>`，则`defaultSubCreator`中的泛型类型`S`为`ClassA`。

**Type:** StorageDefaultCreator<S>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

