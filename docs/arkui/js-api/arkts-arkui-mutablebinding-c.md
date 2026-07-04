# MutableBinding

Represents a generic class for mutable data binding, which allows the read and write operations on the bound value and provides complete **get** and **set** accessors.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@ohos.arkui.StateManagement';
```

## value

```TypeScript
set value(newValue: T)
```

Provides the **set** accessor to set a new value for the current bound value. The **set** accessor must be provided when the **MutableBinding** class instance is constructed. Otherwise, a runtime error will be thrown when the **set** accessor is triggered.

**Type:** T

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

