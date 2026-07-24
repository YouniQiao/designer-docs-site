# ReactiveComponentContent

ReactiveComponentContent is inherited from [Content](../../../reference/apis-arkui/js-apis-arkui-Content.md#content-1) and is a container component used to dynamically bear and reuse UI content. It uses the @Builder function to build the UI and uses [ReactiveBuilderNode](arkts-arkui-buildernode-reactivebuildernode-c.md) to generate and manage the component tree. The core value of this component is to provide complete lifecycle management for dynamic content so that it can be integrated into the ArkUI component reuse system. This component is especially suitable for scenarios that require high-performance rendering, such as long lists.

**Inheritance/Implementation:** ReactiveComponentContent extends [Content](arkts-arkui-content-c.md)

**Since:** 22

<!--Device-unnamed-export class ReactiveComponentContent<T extends Object[]> extends Content--><!--Device-unnamed-export class ReactiveComponentContent<T extends Object[]> extends Content-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T)
```

Constructor of ReactiveComponentContent.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T)--><!--Device-ReactiveComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<T>, config: BuildOptions, ...args: T)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context required for creating a node. |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;T&gt; | Yes | Encapsulates the WrappedBuilder object of the @Builder function with parameters. |
| config | [BuildOptions](arkts-arkui-buildernode-buildoptions-i.md) | Yes | Configures the build behavior of the builder. All attributes in BuildOptions are optional. The default value is the corresponding default value in BuildOptions. |
| args | T | Yes | Parameters of the builder function encapsulated in the **WrappedBuilder** object. Transfers external data to the WrappedBuilder<T&gt and build functions specified in the constructor. Multiple input parameters are supported. The default value is **undefined**. |

## dispose

```TypeScript
dispose(): void
```

Immediately releases the reference relationship between this **ReactiveComponentContent** object and its [entity node](../../../ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving **ReactiveComponentContent** unbinding, see [Canceling the Reference to the Entity Node](../../../ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
> **NOTE**  
>  
> After calling **dispose**, the **ReactiveComponentContent** object cancels its reference to the backend entity  
> node. If the frontend object **ReactiveComponentContent** cannot be released, memory leaks may occur. To avoid  
> this, be sure to call **dispose** on the **ReactiveComponentContent** object when you no longer need it. This  
> reduces the complexity of reference relationships and lowers the risk of memory leaks.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-dispose(): void--><!--Device-ReactiveComponentContent-dispose(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## flushState

```TypeScript
flushState(): void
```

Updates **ReactiveComponentContent**. If the bound parameters used in the **builder** function encapsulated by the [WrappedBuilder](../../../ui/state-management/arkts-wrapBuilder.md) object in **ReactiveComponentContent** are class instances decorated by the V1 decorator (such as @Observed), you need to manually call this API to update data after the data of this class changes. If the bound parameters are class instances decorated by the V2decorator (such as @ObservedV2), the data can be automatically updated without manual calling.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-flushState(): void--><!--Device-ReactiveComponentContent-flushState(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## inheritFreezeOptions

```TypeScript
inheritFreezeOptions(enabled: boolean): void
```

Checks whether this **ReactiveComponentContent** object inherits the [freeze policy](../arkts-components/arkts-arkui-componentoptions-i.md) from its parent component's custom components. When inheritance is disabled (set to **false**), the **ReactiveComponentContent** object's freeze policy is set to **false**, which means its associated node remains unfrozen even in an inactive state.
> **NOTE**  
>  
> When **inheritFreezeOptions** is set to **true** for a **ReactiveComponentContent** object, and its parent  
> component is a custom component, **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or  
> **ReactiveComponentContent**, it will inherit the parent component's freeze policy. If the child component is a  
> custom component, its freeze policy is not transferred to the child component.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-inheritFreezeOptions(enabled: boolean): void--><!--Device-ReactiveComponentContent-inheritFreezeOptions(enabled: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the **ReactiveComponentContent** object inherits the freeze policy from its parent component's custom components.<br>The value **true** means to inherit the freeze policy from the parent component's custom components, and **false** means the opposite. |

## isDisposed

```TypeScript
isDisposed(): boolean
```

Checks whether this **ReactiveComponentContent** object has released its reference to its backend entity node.Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-isDisposed(): boolean--><!--Device-ReactiveComponentContent-isDisposed(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the reference to the backend node is released.<br>The value **true** means that the reference to backend node is released, and **false** means the opposite. |

## isTransferred

```TypeScript
isTransferred(): boolean
```

Returns a flag indicating whether the current ReactiveComponentContent was obtained through dynamic-static conversion, includes conversions in both directions: dynamic-to-static and static-to-dynamic.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-ReactiveComponentContent-isTransferred(): boolean--><!--Device-ReactiveComponentContent-isTransferred(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns true if the ReactiveComponentContent was converted between dynamic and static states, otherwise, returns false. |

## recycle

```TypeScript
recycle(): void
```

Recycles the custom component in ReactiveComponentContent. Component recycling is part of the component reuse mechanism. For details, see [@Reusable Decorator: Reusing V1 Components](../../../ui/state-management/arkts-reusable.md). Since API version 26.0.0, custom components in **ReactiveComponentContent** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](../../../ui/state-management/arkts-new-reusableV2.md).

**ReactiveComponentContent** completes the reuse event transfer between internal and external custom components through [reuse](arkts-arkui-componentcontent-c.md#reuse) and **recycle**. For specific usage scenarios, see [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](../../../ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-recycle(): void--><!--Device-ReactiveComponentContent-recycle(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reuse

```TypeScript
reuse(param?: Object): void
```

Triggers component reuse for custom components under this **ReactiveComponentContent**. For details about component reuse, see [@Reusable Decorator: Reusing V1 Components](../../../ui/state-management/arkts-reusable.md). For details about the scenarios involving **ReactiveComponentContent** unbinding, see [Canceling the Reference to the Entity Node](../../../ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).Since API version 26.0.0, custom components in **ReactiveComponentContent** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](../../../ui/state-management/arkts-new-reusableV2.md).

**ReactiveComponentContent** completes the reuse event transfer between internal and external custom components through **reuse** and [recycle](arkts-arkui-componentcontent-c.md#recycle). For specific usage scenarios, see [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](../../../ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-reuse(param?: Object): void--><!--Device-ReactiveComponentContent-reuse(param?: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | Object | No | Parameter used to reuse [ReactiveComponentContent](arkts-arkui-buildernode-reactivebuildernode-c.md). This parameter is directly used for reusing all top-level custom components in **ReactiveComponentContent**. It should contain the content required by the constructor parameters of each custom component. Otherwise, undefined behavior may occur. Calling this method synchronously triggers the [aboutToReuse](../../../reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)lifecycle callback of internal custom components, with this parameter as the callback input. The default value is undefined. In this case, the custom component in ReactiveComponentContent directly uses the data source during construction. |

## updateConfiguration

```TypeScript
updateConfiguration(): void
```

Updates the configuration of the entire node by passing in a [system environment change](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-configuration-configuration-i.md) event. This event can be used to notify the object of the update. Whether the system environment used by the object is updated depends on the current system environment change of the application.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ReactiveComponentContent-updateConfiguration(): void--><!--Device-ReactiveComponentContent-updateConfiguration(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

