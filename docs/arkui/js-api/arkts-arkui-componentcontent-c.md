# ComponentContent

Inherits from [Content](docroot://reference/apis-arkui/js-apis-arkui-Content.md#content-1).

**Inheritance/Implementation:** ComponentContent extends [Content](arkts-arkui-content-c.md)

**Since:** 12

<!--Device-unnamed-export class ComponentContent<T extends Object> extends Content--><!--Device-unnamed-export class ComponentContent<T extends Object> extends Content-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)
```

A constructor used to create a **ComponentContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[]>)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context required for creating a node. |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[]&gt; | Yes | **WrappedBuilder** object that encapsulates a builder function that has no parameters. |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)
```

A constructor used to create a **ComponentContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context required for creating a node. |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[T]&gt; | Yes | **WrappedBuilder** object that encapsulates a builder function that has parameters. |
| args | T | Yes | Parameters of the builder function encapsulated in the **WrappedBuilder** object. |

<a id="constructor-2"></a>
## constructor

```TypeScript
constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)
```

A constructor used to create a **ComponentContent** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)--><!--Device-ComponentContent-constructor(uiContext: UIContext, builder: WrappedBuilder<[T]>, args: T, options: BuildOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context required for creating a node. |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-wrappedbuilder-c.md)&lt;[T]&gt; | Yes | **WrappedBuilder** object that encapsulates a builder function that has parameters. |
| args | T | Yes | Parameters of the builder function encapsulated in the **WrappedBuilder** object. |
| options | [BuildOptions](arkts-arkui-buildernode-buildoptions-i.md) | Yes | Build options, which determine whether to support the behavior of nesting **@Builder** within **@Builder**. |

<a id="dispose"></a>
## dispose

```TypeScript
dispose(): void
```

Immediately releases the reference relationship between this **ComponentContent** object and its [entity node](docroot://ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving **ComponentContent** unbinding, see [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).

> **NOTE**  
>  
> After calling **dispose()**, the **ComponentContent** object cancels its reference to the backend entity node. If  
> the frontend object **ComponentContent** cannot be released, memory leaks may occur. To avoid this, be sure to  
> call **dispose()** on the **ComponentContent** object when you no longer need it. This reduces the complexity of  
> reference relationships and lowers the risk of memory leaks.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-dispose(): void--><!--Device-ComponentContent-dispose(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="inheritfreezeoptions"></a>
## inheritFreezeOptions

```TypeScript
inheritFreezeOptions(enabled: boolean): void
```

Sets whether this **ComponentContent** object inherits the freeze policy from its parent component's custom components. When inheritance is disabled (set to **false**), the **ComponentContent** object's freeze policy is set to **false**, which means its associated node remains unfrozen even in an inactive state.

> **NOTE**  
>  
> When **inheritFreezeOptions** is set to **true** for **ComponentContent** and the parent component is a custom  
> component, BuilderNode, ComponentContent, ReactiveBuilderNode, or ReactiveComponentContent, the freeze policy of  
> the parent component is inherited. If the child component is a custom component, its freeze policy is not  
> transferred to the child component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComponentContent-inheritFreezeOptions(enabled: boolean): void--><!--Device-ComponentContent-inheritFreezeOptions(enabled: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the current **ComponentContent** object inherits the freeze policy from its parent component's custom components. The value **true** means to inherit the freeze policy from the parent component's custom components, and **false** means the opposite. |

<a id="isdisposed"></a>
## isDisposed

```TypeScript
isDisposed(): boolean
```

Checks whether this **ComponentContent** object has released its reference to its backend entity node. Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComponentContent-isDisposed(): boolean--><!--Device-ComponentContent-isDisposed(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the reference to the backend node is released. The value **true** means that the reference to backend node is released, and **false** means the opposite. |

<a id="istransferred"></a>
## isTransferred

```TypeScript
isTransferred(): boolean
```

Returns a flag indicating whether the current ComponentContent was obtained through dynamic-static conversion,includes conversions in both directions: dynamic-to-static and static-to-dynamic.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-ComponentContent-isTransferred(): boolean--><!--Device-ComponentContent-isTransferred(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns true if the ComponentContent was converted between dynamic and static states,otherwise, returns false. |

<a id="recycle"></a>
## recycle

```TypeScript
recycle(): void
```

- Triggers recycling of custom components under this **ComponentContent**. Component recycling is part of the component reuse mechanism. For details, see [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md).  
- **ComponentContent** completes the reuse event transfer between internal and external custom components through **reuse** and **recycle**. For specific usage scenarios, see [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).Since API version 26.0.0, custom components in **ComponentContent** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-recycle(): void--><!--Device-ComponentContent-recycle(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="reuse"></a>
## reuse

```TypeScript
reuse(param?: Object): void
```

Triggers component reuse for custom components under this **ComponentContent**. For details about component reuse,see [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For details about the scenarios involving **ComponentContent** unbinding, see [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).Since API version 26.0.0, custom components in **ComponentContent** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-reuse(param?: Object): void--><!--Device-ComponentContent-reuse(param?: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | Object | No | Parameters for **ComponentContent** reuse. This parameter is passed to all top-level custom components within the **ComponentContent** during reuse and must include all required constructor parameters for each component; otherwise, undefined behavior may occur. Calling this method synchronously triggers the [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)lifecycle callback of internal custom components, with this parameter as the callback input. The default value is undefined. In this case, the custom component in ComponentContent directly uses the data source during construction. |

<a id="update"></a>
## update

```TypeScript
update(args: T): void
```

Updates the builder function parameters encapsulated by the [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object. The parameter type must be the same as that passed by constructor.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-update(args: T): void--><!--Device-ComponentContent-update(args: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | T | Yes | Updates the builder function parameters encapsulated by the [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md) object. The parameter type must be the same as that passed by constructor. |

<a id="updateconfiguration"></a>
## updateConfiguration

```TypeScript
updateConfiguration(): void
```

Updates the configuration of the entire node by passing in a [system environment change](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-configuration-configuration-i.md) event.

> **NOTE**  
>  
> The updateConfiguration API is used to notify an object of updating the current system environment change.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentContent-updateConfiguration(): void--><!--Device-ComponentContent-updateConfiguration(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

