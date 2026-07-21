# CustomComponentLifecycleObserver

Observes lifecycle status changes of a custom component,and triggers the lifecycle callback in the listener when detecting lifecycle status changes.

**Since:** 23

<!--Device-unnamed-export declare interface CustomComponentLifecycleObserver--><!--Device-unnamed-export declare interface CustomComponentLifecycleObserver-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

<a id="abouttoappear"></a>
## aboutToAppear

```TypeScript
aboutToAppear?(): void
```

Called after a new instance of the custom component is created and before its **build()** function is executed.You can modify the status variables in this phase.Its function is similar to that of [aboutToAppear](../arkts-components/arkts-arkui-basecustomcomponent-c.md#abouttoappear-1),but it is triggered under the constraints of the custom component state machine.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CustomComponentLifecycleObserver-aboutToAppear?(): void--><!--Device-CustomComponentLifecycleObserver-aboutToAppear?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttodisappear"></a>
## aboutToDisappear

```TypeScript
aboutToDisappear?(): void
```

Called before the custom component is destroyed. You are advised not to change state variables in the **aboutToDisappear** function. Modifying the **@Link** decorated variable may lead to unstable application behavior. This function is similar to the earlier **aboutToDisappear** function, which is triggered under the constraints of the custom component state machine. Therefore, this function is added for compatibility.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CustomComponentLifecycleObserver-aboutToDisappear?(): void--><!--Device-CustomComponentLifecycleObserver-aboutToDisappear?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttorecycle"></a>
## aboutToRecycle

```TypeScript
aboutToRecycle?(): void
```

Called after necessary component recycling operations defined in the application are performed.Then, the component is frozen to prevent UI updates when the component is in the recycling pool.At last, the **aboutToRecycle** function recursively traverses all child components,and the **aboutToRecycle** function in each recycled child component will be called.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CustomComponentLifecycleObserver-aboutToRecycle?(): void--><!--Device-CustomComponentLifecycleObserver-aboutToRecycle?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttoreuse"></a>
## aboutToReuse

```TypeScript
aboutToReuse?(params?: Record<string, Object | undefined | null>): void
```

Called when a reusable custom component is re-added to the node tree from the cache to receive the component constructors. The value of **params** is not **undefined** in the reuse callback of the V1 component. The value of **params** is **undefined** in the reuse callback of the V2 component.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CustomComponentLifecycleObserver-aboutToReuse?(params?: Record<string, Object | undefined | null>): void--><!--Device-CustomComponentLifecycleObserver-aboutToReuse?(params?: Record<string, Object | undefined | null>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object \| undefined \| null&gt; | No | The value is not **undefined** in the reuse callback of the V1 component and is **undefined** in the reuse callback of the V2 component. |

<a id="ondidbuild"></a>
## onDidBuild

```TypeScript
onDidBuild?(): void
```

Called after a new instance of the custom component is created and its **build()** function is executed.You can use this callback for actions that do not affect the UI, such as event data reporting.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CustomComponentLifecycleObserver-onDidBuild?(): void--><!--Device-CustomComponentLifecycleObserver-onDidBuild?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

