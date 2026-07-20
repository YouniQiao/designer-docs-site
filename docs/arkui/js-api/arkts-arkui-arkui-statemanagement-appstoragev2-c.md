# AppStorageV2

For details about how to use AppStorageV2, see [AppStorageV2: Storing Application-wide UI State](../../../../ui/state-management/arkts-new-appstoragev2.md).

**Since:** 12

<!--Device-unnamed-export declare class AppStorageV2--><!--Device-unnamed-export declare class AppStorageV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

## connect

```TypeScript
static connect<T extends object>(
    type: TypeConstructorWithArgs<T>,
    keyOrDefaultCreator?: string | StorageDefaultCreator<T>,
    defaultCreator?: StorageDefaultCreator<T>
  ): T | undefined
```

Stores key-value pair data in the application memory. If the given key already exists in [AppStorageV2](../../../../ui/state-management/arkts-new-appstoragev2.md), the corresponding value is returned.Otherwise, a default value is constructed using the default value constructor and returned.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AppStorageV2-static connect<T extends object>(
    type: TypeConstructorWithArgs<T>,
    keyOrDefaultCreator?: string | StorageDefaultCreator<T>,
    defaultCreator?: StorageDefaultCreator<T>
  ): T | undefined--><!--Device-AppStorageV2-static connect<T extends object>(
    type: TypeConstructorWithArgs<T>,
    keyOrDefaultCreator?: string | StorageDefaultCreator<T>,
    defaultCreator?: StorageDefaultCreator<T>
  ): T | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [TypeConstructorWithArgs](arkts-arkui-arkui-statemanagement-typeconstructorwithargs-i.md)<T> | Yes | Type. If no key is specified, the name of the type is used as the key. |
| keyOrDefaultCreator | string \| StorageDefaultCreator<T> | No | Key, or constructor for obtaining the default value. The default value is **undefined**. |
| defaultCreator | [StorageDefaultCreator](arkts-arkui-storagedefaultcreator-t.md)<T> | No | Constructor for obtaining the default value. The default value is **undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns data if the creation or data acquisition from AppStorageV2 is successful;returns **undefined** otherwise. |

## keys

```TypeScript
static keys(): Array<string>
```

Obtains all keys in [AppStorageV2](../../../../ui/state-management/arkts-new-appstoragev2.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AppStorageV2-static keys(): Array<string>--><!--Device-AppStorageV2-static keys(): Array<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | All keys stored in AppStorageV2. |

## remove

```TypeScript
static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void
```

Removes the specified key-value pair from [AppStorageV2](../../../../ui/state-management/arkts-new-appstoragev2.md).If the specified key does not exist in AppStorageV2, the removal will fail.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AppStorageV2-static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void--><!--Device-AppStorageV2-static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOrType | string \| TypeConstructorWithArgs<T> | Yes | Key to be removed. If a type is specified, the key to be removed is the name of that type. |

