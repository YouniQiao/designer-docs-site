# AppStorageV2

AppStorageV2具体UI使用说明，详见[AppStorageV2(应用全局的UI状态存储)](docroot://ui/state-management/arkts-new-appstoragev2.md)。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## connect

```TypeScript
static connect<T extends object>(
    type: TypeConstructorWithArgs<T>,
    keyOrDefaultCreator?: string | StorageDefaultCreator<T>,
    defaultCreator?: StorageDefaultCreator<T>
  ): T | undefined
```

将键值对数据储存在应用内存中。如果给定的key已经存在于[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)中，返回对应的值；否则，通过获取 默认值的构造器构造默认值，并返回。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TypeConstructorWithArgs&lt;T> | Yes | 指定的类型，若未指定key，则使用type的name作为key。 |
| keyOrDefaultCreator | string \| StorageDefaultCreator&lt;T> | No |  |
| defaultCreator | StorageDefaultCreator&lt;T> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns data if the creation or data acquisition from AppStorageV2 is successful;  returns undefined otherwise. |

## keys

```TypeScript
static keys(): Array<string>
```

获取[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)中的所有key。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 所有AppStorageV2中的key。 |

## remove

```TypeScript
static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void
```

将指定的键值对数据从[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)里面删除。如果指定的键值不存在于AppStorageV2中，将删除失 败。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOrType | string \| TypeConstructorWithArgs&lt;T> | Yes | 需要删除的key；如果指定的是type类型，删除的key为type的name。 |

