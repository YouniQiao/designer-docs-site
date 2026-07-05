# MonitorOptions

[addMonitor](arkts-uiutils-c.md#addMonitor)的可选参数，用于配置回调类型以及是否使能通配符能力。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## enableWildcard

```TypeScript
enableWildcard?: boolean
```

配置当前addMonitor是否使能通配符能力。true为使能通配符能力，false为关闭通配符能力。默认值为false，即关闭通配符能力。当关闭通配符能力，但路径中含有通配符时，该路径将视为不合法路径。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isSynchronous

```TypeScript
isSynchronous?: boolean
```

配置当前回调函数是否为同步回调。true为同步回调。默认值为false，即异步回调。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

