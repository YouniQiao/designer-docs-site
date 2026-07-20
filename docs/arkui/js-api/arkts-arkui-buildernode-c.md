# BuilderNode

class BuilderNode\<Args extends Object[]>

Implements a BuilderNode, which can create a component tree through the stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) and hold the root node of the component tree. A BuilderNode cannot be defined as a state variable. The FrameNode held in the BuilderNode is only used to mount the BuilderNode to other FrameNodes as a child node. Undefined behavior may occur if you set attributes or perform operations on subnodes of the FrameNode held by the BuilderNode. Therefore, after you have obtained a [RenderNode](arkts-arkui-rendernode-c.md) through the [getFrameNode](arkts-arkui-buildernode-c.md#getframenode-1) method of the BuilderNode and the [getRenderNode](arkts-arkui-framenode-c.md#getrendernode-1) method of the [FrameNode](arkts-arkui-framenode-c.md), avoid setting the attributes or operating the subnodes through APIs of [RenderNode](arkts-arkui-rendernode-c.md).

**Since:** 11

<!--Device-unnamed-export class BuilderNode<Args extends Object[]>--><!--Device-unnamed-export class BuilderNode<Args extends Object[]>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## build

```TypeScript
build(builder: WrappedBuilder<Args>, arg?: Object): void
```

Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) has at most one root node.

Custom components are allowed.

> **NOTE**

> - When nesting @Builder, ensure that the input objects for the inner and outer @Builder methods are consistent.  
>  
> - The outermost @Builder supports only one input parameter.  
>  
> - The build parameter uses the pass-by-value semantics. To implement state updates, you must explicitly use the  
> [update](arkts-arkui-buildernode-c.md#update-1) API.  
>  
> - To operate objects in a BuilderNode, ensure that the reference to the BuilderNode is not garbage collected.  
> When a BuilderNode object is garbage collected by the virtual machine, the associated  
> [FrameNode](arkts-arkui-framenode-c.md) and [RenderNode](arkts-arkui-rendernode-c.md) objects are also dereferenced from the  
> backend node tree. This means that any FrameNode objects obtained from a BuilderNode will no longer correspond to  
> any actual node if the BuilderNode is garbage collected.  
>  
> - The BuilderNode object maintains references to its underlying entity nodes. When the BuilderNode frontend  
> object is no longer required for managing backend nodes, call the [dispose](arkts-arkui-buildernode-c.md#dispose-1) API to  
> release node references and unbind frontend and backend nodes.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-build(builder: WrappedBuilder<Args>, arg?: Object): void--><!--Device-BuilderNode-build(builder: WrappedBuilder<Args>, arg?: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-common-wrappedbuilder-c.md)<Args> | Yes | Stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) required for creating a component tree. |
| arg | [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | No | Argument of the builder. Only one input parameter is supported, and the type of the input parameter must be consistent with the type defined by @Builder.<br>Default value: **undefined**. |

## build

```TypeScript
build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void
```

Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) has at most one root node.

Custom components are allowed. Compared with the [build(builder: WrappedBuilder\<Args>, arg?: Object)](arkts-arkui-buildernode-c.md) API, this API can use the builder configuration parameters to determine whether @Builder can be nested with @Builder.

> **NOTE**

> - For details about the creation and update using @Builder, see  
> [@Builder](../../../../ui/state-management/arkts-builder.md).  
>  
> - The outermost @Builder supports only one input parameter.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void--><!--Device-BuilderNode-build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [WrappedBuilder](../arkts-components/arkts-arkui-common-wrappedbuilder-c.md)<Args> | Yes | Stateless UI method [@Builder](../../../../ui/state-management/arkts-builder.md) required for creating a component tree. |
| arg | [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Yes | Argument of the builder. Only one input parameter is supported, and the type of the input parameter must be consistent with the type defined by @Builder. |
| options | [BuildOptions](arkts-arkui-buildernode-buildoptions-i.md) | Yes | Build options, which determine whether to support nesting @Builder within @Builder. |

## constructor

```TypeScript
constructor(uiContext: UIContext, options?: RenderOptions)
```

When content generated by BuilderNode is embedded within another RenderNode for display, the **selfIdealSize** parameter in **RenderOptions** must be explicitly specified. Otherwise, the layout constraints for the parent component in Builder default to [0, 0]. In this case, if **selfIdealSize** is not set, the root node of the subtree in BuilderNode will have a size of [0, 0].

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-constructor(uiContext: UIContext, options?: RenderOptions)--><!--Device-BuilderNode-constructor(uiContext: UIContext, options?: RenderOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | [UIContext](../arkts-components/arkts-arkui-uicontext-t.md) | Yes | UI context. For details about how to obtain it, see [Obtaining UI Context](../../../../reference/apis-arkui/js-apis-arkui-node.md#obtaining-ui-context). |
| options | [RenderOptions](arkts-arkui-buildernode-renderoptions-i.md) | No | Parameters for creating a BuilderNode.<br>Default value: **undefined**. |

## dispose

```TypeScript
dispose(): void
```

Immediately releases the reference relationship between this BuilderNode object and its [entity node](../../../../ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving BuilderNode unbinding, see [Canceling the Reference to the Entity Node](../../../../ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).

> **NOTE**  
>  
> After calling **dispose()**, the BuilderNode object cancels its reference to the backend entity node. If the  
> frontend object BuilderNode cannot be released, memory leaks may occur. To avoid this, be sure to call  
> **dispose()** on the BuilderNode when you no longer need it. This reduces the complexity of reference  
> relationships and lowers the risk of memory leaks. For details, see  
> [Memory Leak Caused by Circular Reference Between BuilderNode Frontend and Backend](../../../../ui/arkts-user-defined-node-faq.md#memory-leak-caused-by-circular-reference-between-buildernode-frontend-and-backend).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-dispose(): void--><!--Device-BuilderNode-dispose(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getFrameNode

```TypeScript
getFrameNode(): FrameNode | null
```

Obtains the [FrameNode](arkts-arkui-framenode-c.md) from the BuilderNode. The FrameNode is generated only after the BuilderNode executes the build operation.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-getFrameNode(): FrameNode | null--><!--Device-BuilderNode-getFrameNode(): FrameNode | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](../arkts-components/arkts-arkui-framenode-t.md) | **FrameNode** object. If no such object is held by the **BuilderNode** instance, null is returned. |

## inheritFreezeOptions

```TypeScript
inheritFreezeOptions(enabled: boolean): void
```

Sets whether this **BuilderNode** object inherits the freeze policy from its parent component's custom components.When inheritance is disabled (set to **false**), the object's freeze policy is set to **false**, which means its associated node remains unfrozen even in an inactive state.  
> **NOTE**  
>  
> When **inheritFreezeOptions** is set to **true** for **BuilderNode** and the parent component is a custom  
> component, BuilderNode, ComponentContent, ReactiveBuilderNode, or ReactiveComponentContent, the freeze policy of  
> the parent component is inherited. If the child component is a custom component, its freeze policy is not  
> transferred to the child component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-BuilderNode-inheritFreezeOptions(enabled: boolean): void--><!--Device-BuilderNode-inheritFreezeOptions(enabled: boolean): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the current **BuilderNode** object inherits the freeze policy from its parent component's custom components. The value **true** means to inherit the freeze policy from parent component's custom components, and **false** means the opposite. |

## isDisposed

```TypeScript
isDisposed(): boolean
```

Checks whether this BuilderNode object has released its reference to its backend entity node. Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-BuilderNode-isDisposed(): boolean--><!--Device-BuilderNode-isDisposed(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the reference to the backend node is released. The value **true** means that the reference to backend node is released, and **false** means the opposite. |

## postInputEvent

```TypeScript
postInputEvent(event: InputEventType): boolean
```

Dispatches the specified input event to the target node.

**offsetA** indicates the BuilderNode's offset relative to its parent component, **offsetB** the hit position's offset relative to the BuilderNode, **offsetC** the composite offset (offsetA + offsetB) passed to the window in **postInputEvent**.

![Coordinate conversion example](../../../../reference/apis-arkui/figures/postInputEvent-point.png)

> **NOTE**  
>  
> - The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform  
> such coordinate conversion.  
>  
> - Mouse left-click events are automatically converted to touch events. Avoid binding both touch and mouse events  
> at the outer layer, as this may cause coordinate offsets. This is because the **SourceType** remains unchanged  
> during event conversion. For details, see [onTouch](../arkts-components/arkts-arkui-common-commonmethod-c.md#ontouch-1).  
>  
> - When an [axis event](../arkts-components/arkts-arkui-common-axisevent-i.md) event is injected, it cannot trigger [rotation gestures](arkts-gesture.md),  
> because the axis event does not include rotation axis information.  
>  
> - A forwarded event undergoes touch testing in the target component's subtree and triggers corresponding  
> gestures. The original event also triggers gestures in the source component tree. There is no guaranteed outcome  
> for gesture competition between these two types of gestures.  
>  
> - For developer-constructed events, mandatory fields must be assigned values, such as the **touches** field for  
> touch events and the **scrollStep** field for axis events Ensure the completeness of the event, for example, both  
> **DOWN** and **UP** [TouchType](arkts-arkui-enums-touchtype-e.md) states must be included for a touch event to prevent undefined  
> behavior.  
>  
> - [webview](../../apis-arkweb/arkts-apis/arkts-web-webview.md) has already handled coordinate system transformation, so events can  
> be dispatched.  
>  
> - The **postTouchEvent** API needs to provide the gesture coordinates relative to the local coordinates of the  
> target component, and the **postInputEvent** API needs to provide the gesture coordinates relative to the window  
> coordinates of the target component.  
>  
> - Avoid forwarding a single event multiple times. [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md)  
> is not supported.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-BuilderNode-postInputEvent(event: InputEventType): boolean--><!--Device-BuilderNode-postInputEvent(event: InputEventType): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [InputEventType](arkts-arkui-inputeventtype-t.md) | Yes | Input event to dispatch. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the event is successfully dispatched. Returns **true** if the event is successfully dispatched; returns **false** otherwise. |

## postInputEventWithStrategy

```TypeScript
postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean
```

Posts an event containing a competition strategy to the target UI component node.

Before calling this API, you need to convert the value of **event** to the corresponding event and convert the coordinates in the **window** parameter in **event**. **offsetA** indicates the offset of the builderNode relative to the parent component, **offsetB** indicates the offset of the hit position relative to the builderNode, and **offsetC** is the sum of **offsetA** and **offsetB**. The value of **offsetC** is used as the value of the **window** parameter in **event** and passed to the **postInputEventWithStrategy** method. For details, see the following sample code.

> **NOTE**  
>  
> - The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform  
> such coordinate conversion.  
>  
> - When processing a mouse left-click event, the system converts the event to a touch event. When forwarding the  
> event, do not bind the touch event and mouse event at the outer layer at the same time, as this may cause  
> coordinate offsets. This is because [SourceType](arkts-arkui-enums-touchtype-e.md) does not change during the event conversion.  
> For details about the specifications, see [onTouch](../arkts-components/arkts-arkui-common-commonmethod-c.md#ontouch-1).  
>  
> - When an [axis event](../arkts-components/arkts-arkui-common-axisevent-i.md) event is injected, it cannot trigger [rotation gestures](arkts-gesture.md),  
> because the axis event does not include rotation axis information.  
>  
> - The forwarded event is posted to the target component and its child components for processing, and triggers the  
> corresponding gesture. You can use input parameters to control whether the gestures of the current component and  
> the target component are in a competitive relationship.  
>  
> - If the event is converted to a developer-constructed event, mandatory fields must be assigned values, for  
> example, the **touches** field of a touch event and the **scrollStep** field of an axis event. Ensure the  
> completeness of the event. For example, [TouchType](arkts-arkui-enums-touchtype-e.md) of a touch event must contain both the  
> **DOWN** and **UP** fields to prevent program exceptions or unexpected crashes.  
>  
> - The same event can be forwarded multiple times. This API cannot be called by  
> [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md).

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-BuilderNode-postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean--><!--Device-BuilderNode-postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [InputEventType](arkts-arkui-inputeventtype-t.md) | Yes | Input event used for event posting. |
| competitionStrategy | [CompetitionStrategy](arkts-arkui-enums-competitionstrategy-e.md) | No | Whether the gesture for posting the event is in a competition scenario. By default, the gesture is not in a competition scenario. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the event is successfully dispatched. Returns **true** if the operation is successful;returns **false** otherwise. |

## postTouchEvent

```TypeScript
postTouchEvent(event: TouchEvent): boolean
```

Posts a raw touch event to the FrameNode created by this BuilderNode.

**postTouchEvent** dispatches the event from a middle node in the component tree downwards. To ensure the event is dispatched correctly, it needs to be transformed into the coordinate system of the parent component, as shown in the figure below.

**OffsetA** indicates the offset of the BuilderNode relative to the parent component. You can obtain this offset by calling [getPositionToParent](arkts-arkui-framenode-c.md#getpositiontoparent-1) in the FrameNode. **OffsetB** indicates the offset of the touch point relative to the BuilderNode. You can obtain this offset from the [TouchEvent](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-touchevent-touchevent-i.md) object. **OffsetC** is the sum of **OffsetA** and **OffsetB**. It represents the final offset that you need to pass to **postTouchEvent**.

![postTouchEvent](../../../../reference/apis-arkui/figures/postTouchEvent.PNG)

> **NOTE**  
>  
> - The coordinates you pass in need to be converted to pixel values (px). If the BuilderNode has any affine  
> transformations applied to it, they must be taken into account and combined with the touch event coordinates.  
>  
> - In [Webview](../../apis-arkweb/arkts-apis/arkts-web-webview.md), coordinate system transformations are already handled  
> internally, so you can directly dispatch the touch event without additional adjustments.  
>  
> - The **postTouchEvent** API can be called only once for the same timestamp.  
>  
> - [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md) is not supported.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-postTouchEvent(event: TouchEvent): boolean--><!--Device-BuilderNode-postTouchEvent(event: TouchEvent): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [TouchEvent](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-touchevent-touchevent-i.md) | Yes | Touch event. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the event is successfully dispatched. The value **true** means the event is consumed by a component that responds to the event, and **false** means that no component responds to the event.<br>**NOTE**<br>If the event does not hit the expected component, ensure the following:<br>1. The coordinate system has been correctly transformed<br>2. The component is in an interactive state.<br>3. The event has been bound to the component. |

## recycle

```TypeScript
recycle(): void
```

Triggers recycling of custom components under this BuilderNode. Component recycling is part of the component reuse mechanism. For details, see [@Reusable Decorator: Reusing V1 Components](../../../../ui/state-management/arkts-reusable.md). Since API version 26.0.0, custom components in **BuilderNode** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](../../../../ui/state-management/arkts-new-reusableV2.md).

> **NOTE**  
>  
> The BuilderNode completes the reuse event transfer between internal and external custom components through  
> **reuse** and **recycle**. For specific usage scenarios, see  
> [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](../../../../ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-recycle(): void--><!--Device-BuilderNode-recycle(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reuse

```TypeScript
reuse(param?: Object): void
```

Triggers component reuse for custom components under this BuilderNode. For details about component reuse, see [@Reusable Decorator: Reusing V1 Components](../../../../ui/state-management/arkts-reusable.md). For details about the scenarios involving BuilderNode unbinding, see [Canceling the Reference to the Entity Node](../../../../ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).Since API version 26.0.0, custom components in **BuilderNode** support V2 component reuse. For details, see [@ReusableV2 Decorator: Reusing Components](../../../../ui/state-management/arkts-new-reusableV2.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-reuse(param?: Object): void--><!--Device-BuilderNode-reuse(param?: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | No | Parameter used to reuse the BuilderNode. This parameter is passed to all top-level custom components within the BuilderNode during reuse and must include all required constructor parameters for each component; otherwise, undefined behavior may occur. Calling this method synchronously triggers the [aboutToReuse](../../../../reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)lifecycle callback of internal custom components, with this parameter as the callback input. Default value:**undefined**, in which case the custom components in the BuilderNode will use their original construction data source. |

## update

```TypeScript
update(arg: Object): void
```

Updates this BuilderNode using the provided parameter, which must be of the same type as the input parameter passed to the [build](arkts-arkui-buildernode-c.md) API. When updating a custom component, define the variables used in the component as [@Prop](../../../../ui/state-management/arkts-prop.md) decorated properties.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-update(arg: Object): void--><!--Device-BuilderNode-update(arg: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arg | [Object](../../apis-na/arkts-apis/arkts-na-lib-es5-object-i.md) | Yes | Parameter used to update the BuilderNode. It is of the same type as the parameter passed to the [build](arkts-arkui-buildernode-c.md) API. |

## updateConfiguration

```TypeScript
updateConfiguration(): void
```

Updates the configuration of the entire node by passing in a [system environment change](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-configuration-configuration-i.md) event.

> **NOTE**  
>  
> The **updateConfiguration** API is used to instruct an object to update, with the system environment used for  
> the update being determined by the changes in the application's current system environment.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BuilderNode-updateConfiguration(): void--><!--Device-BuilderNode-updateConfiguration(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

