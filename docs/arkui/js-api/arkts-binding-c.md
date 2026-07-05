# Binding

只读数据绑定的泛型类，可以绑定任意类型的数据。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## value

```TypeScript
get value(): T
```

提供get访问器，用于获取绑定的值。

**Type:** T

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

