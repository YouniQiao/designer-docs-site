# CustomComponentLifecycle

CustomComponentLifecycle用于监控自定义组件生命周期的变化。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## addObserver

```TypeScript
addObserver(observer: CustomComponentLifecycleObserver): void
```

addObserver函数用于注册自定义组件生命周期监听器。当自定义组件的生命周期发生变化时，会触发监听器中相应的生命周期回调函数。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | CustomComponentLifecycleObserver | Yes | 监听自定义组件的监听器。 |

## getCurrentState

```TypeScript
getCurrentState(): CustomComponentLifecycleState
```

getCurrentState函数用于获得自定义组件当前的生命周期状态。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| CustomComponentLifecycleState | - 自定义组件当前的生命周期状态。 |

## removeObserver

```TypeScript
removeObserver(observer: CustomComponentLifecycleObserver): void
```

removeObserver函数用于移除自定义组件生命周期监听器。解除注册后，即使自定义组件的生命周期状态发生变化，也不会触发监听器中相应的生命周期回调函数。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observer | CustomComponentLifecycleObserver | Yes | 监听自定义组件的监听器。 |

