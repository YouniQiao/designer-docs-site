# MonitorOptions

Defines the optional parameters for [addMonitor](arkts-arkui-uiutils-c.md#addmonitor-1), which are used to configure the callback type and whether to enable the wildcard capability.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@ohos.arkui.StateManagement';
```

## enableWildcard

```TypeScript
enableWildcard?: boolean
```

Whether to enable the wildcard capability for this **addMonitor**. **true** to enable the wildcard capability, and **false** means the opposite. The default value is **false**. If the wildcard capability is disabled but the path contains wildcards, the path is considered invalid.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isSynchronous

```TypeScript
isSynchronous?: boolean
```

Whether the current callback is a synchronous callback. **true**: The current callback is a synchronous callback. **false** (default value): The current callback is an asynchronous callback.

**Type:** boolean

**Default:** false

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

