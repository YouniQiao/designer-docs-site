# UIObserver

Provides APIs for listening for UI component behavior changes. > **NOTE** > > - The initial APIs of this class are supported since API version 11. > > - In the following API examples, you must first use [getUIObserver()](arkts-arkui-uicontext-c.md#getuiobserver-1) in > **UIContext** to obtain a **UIObserver** instance, and then call the APIs using the obtained instance. > > - UIObserver can only listen for relevant information within the current process and does not support obtaining > information in cross-process scenarios<!--Del--> such as [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md)<!-- > DelEnd-->.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## addGlobalGestureListener

```TypeScript
addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void
```

Registers a callback to listen for gesture triggering information.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | GestureListenerType | Yes | Type of gesture to listen for. |
| option | GestureObserverConfigs | Yes | Configuration options for binding the global listener. |
| callback | GestureListenerCallback | Yes | Callback triggered when the gesture state updates. |

## off('navDestinationUpdate')

```TypeScript
off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdate'. |
| options | { navigationId: ResourceStr } | Yes | The options object. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type andnavigation ID will be removed. |

## off('navDestinationUpdate')

```TypeScript
off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdate'. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event typewill be removed. |

## off('navDestinationUpdateByUniqueId')

```TypeScript
off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdateByUniqueId' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdateByUniqueId'. |
| navigationUniqueId | number | Yes | The uniqueId of the navigation. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event typewill be removed. |

## off('scrollEvent')

```TypeScript
off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | Callback&lt;observer.ScrollEventInfo&gt; | No | The callback function to remove. If not provided, allcallbacks for the given event type andscroll ID will be removed. |

## off('scrollEvent')

```TypeScript
off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| callback | Callback&lt;observer.ScrollEventInfo&gt; | No | The callback function to remove. If not provided, allcallbacks for the given event typewill be removed. |

## off('routerPageUpdate')

```TypeScript
off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | The type of event to remove the listener for. Must be 'routerPageUpdate'. |
| callback | Callback&lt;observer.RouterPageInfo&gt; | No | The callback function to remove. If not provided, allcallbacks for the given event typewill be removed. |

## off('densityUpdate')

```TypeScript
off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void
```

Unregisters the listener for screen pixel density changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | Event type. The value **'densityUpdate'** indicates the pixel density changes ofthe screen. |
| callback | Callback&lt;observer.DensityInfo&gt; | No | Target listener to unregister. If no parameter is provided,all screen pixel density change listeners for the current [UIContext](arkts-arkui-uicontext.md) are removed. |

## off('willDraw')

```TypeScript
off(type: 'willDraw', callback?: Callback<void>): void
```

Unregisters the listener for drawing instruction dispatch in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | Event event. The value **'willDraw'** indicates whether drawing is about to occur. |
| callback | Callback&lt;void&gt; | No | Target listener to unregister. If no parameter is provided, all drawinginstruction dispatch listeners are unregistered. |

## off('didLayout')

```TypeScript
off(type: 'didLayout', callback?: Callback<void>): void
```

Unregisters the listener for layout completion status in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | Event type. The value **'didLayout'** indicates whether the layout has beencompleted. |
| callback | Callback&lt;void&gt; | No | Target listener to unregister. If no parameter is provided, all layoutcompletion listeners are unregistered. |

## off('navDestinationSwitch')

```TypeScript
off(
    type: 'navDestinationSwitch',
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to remove the listener for. Must be 'navDestinationSwitch'. |
| callback | Callback&lt;observer.NavDestinationSwitchInfo&gt; | No | The callback function to remove. If notprovided,all callbacks for the given event type will be removed. |

## off('navDestinationSwitch')

```TypeScript
off(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to remove the listener for. Must be 'navDestinationSwitch'. |
| observerOptions | observer.NavDestinationSwitchObserverOptions | Yes | Options. |
| callback | Callback&lt;observer.NavDestinationSwitchInfo&gt; | No | The callback function to remove. If notprovided,all callbacks for the given event type will be removed. |

## off('willClick')

```TypeScript
off(type: 'willClick', callback?: ClickEventListenerCallback): void
```

Removes a callback function to be called before clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to remove the listener for. |
| callback | ClickEventListenerCallback | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## off('didClick')

```TypeScript
off(type: 'didClick', callback?: ClickEventListenerCallback): void
```

Removes a callback function to be called after clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to remove the listener for. |
| callback | ClickEventListenerCallback | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## off('willClick')

```TypeScript
off(type: 'willClick', callback?: GestureEventListenerCallback): void
```

Removes a callback function to be called before tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to remove the listener for. |
| callback | GestureEventListenerCallback | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## off('didClick')

```TypeScript
off(type: 'didClick', callback?: GestureEventListenerCallback): void
```

Removes a callback function to be called after tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to remove the listener for. |
| callback | GestureEventListenerCallback | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## off('beforePanStart')

```TypeScript
off(type: 'beforePanStart', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) pre-execution events, canceling callbacks registered via [on('beforePanStart')](arkts-arkui-uiobserver-c.md#on-16).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanStart' | Yes | Event type. The value is fixed at **'beforePanStart'**, indicating commanddispatch before the execution of the pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1)event. |
| callback | PanListenerCallback | No | Target listener to unregister. If no parameter is provided, allcallback listeners for command dispatch before the execution of the pan gesture[onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event will be removed. |

## off('beforePanEnd')

```TypeScript
off(type: 'beforePanEnd', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) pre-execution events, canceling callbacks registered via [on('beforePanEnd')](arkts-arkui-uiobserver-c.md#on-17).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatchbefore the execution of the pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. |
| callback | PanListenerCallback | No | Target listener to unregister. If no parameter is provided, allcallback listeners for command dispatch before the execution of the pan gesture[onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event will be removed. |

## off('afterPanStart')

```TypeScript
off(type: 'afterPanStart', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) post-execution events, canceling callbacks registered via [on('afterPanStart')](arkts-arkui-uiobserver-c.md#on-18).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanStart' | Yes | Event type. The value is fixed at **'afterPanStart'**, indicating commanddispatch after the execution of the pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. |
| callback | PanListenerCallback | No | Target listener to unregister. If no parameter is provided, allcallback listeners for command dispatch after the execution of the pan gesture[onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event will be removed. |

## off('afterPanEnd')

```TypeScript
off(type: 'afterPanEnd', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) post-execution events, canceling callbacks registered via [on('afterPanEnd')](arkts-arkui-uiobserver-c.md#on-19).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanEnd' | Yes | Event type. The value is fixed at **'afterPanEnd'**, indicating command dispatchafter the execution of the pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. |
| callback | PanListenerCallback | No | Target listener to unregister. If no parameter is provided, allcallback listeners for command dispatch after the execution of the pan gesture[onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event will be removed. |

## off('tabContentUpdate')

```TypeScript
off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to remove the listener for. Must be 'tabContentUpdate'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | Callback&lt;observer.TabContentInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type and Tabs ID will be removed. |

## off('tabContentUpdate')

```TypeScript
off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to remove the listener for. Must be 'tabContentUpdate'. |
| callback | Callback&lt;observer.TabContentInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type and Tabs ID will be removed. |

## off('tabChange')

```TypeScript
off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to remove the listener for. Must be 'tabChange'. |
| config | observer.ObserverOptions | Yes | The config object. Includes the observed component id. |
| callback | Callback&lt;observer.TabContentInfo&gt; | No | The callback function to remove.If not provided, all callbacks for the given event type and Tabs ID will be removed. |

## off('tabChange')

```TypeScript
off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to remove the listener for. Must be 'tabChange'. |
| callback | Callback&lt;observer.TabContentInfo&gt; | No | The callback function to remove.If not provided, all callbacks for the given event type will be removed. |

## off('windowSizeLayoutBreakpointChange')

```TypeScript
off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void
```

Unregisters previously registered window size layout breakpoint change listeners. If no callback is specified, all listeners for the current UI context are removed. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeLayoutBreakpointChange' | Yes | Event type. The value is fixed at**'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes. |
| callback | Callback&lt;observer.WindowSizeLayoutBreakpointInfo&gt; | No | Target listener to unregister. If noparameter is provided, all window size layout breakpoint change listeners for the current[UIContext](arkts-arkui-uicontext.md) are removed. |

## off('nodeRenderState')

```TypeScript
off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void
```

Unregisters the callback for listening for node rendering state changes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nodeRenderState' | Yes | Event type. The value is fixed at **'nodeRenderState'**. |
| nodeIdentity | NodeIdentity | Yes | Node ID. |
| callback | NodeRenderStateChangeCallback | No | Target listener to unregister. If no parameter is provided,all node rendering state change listeners are unregistered. |

## off('textChange')

```TypeScript
off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to remove the listener for. Must be 'textChange'. |
| callback | Callback&lt;observer.TextChangeEventInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## off('textChange')

```TypeScript
off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to remove the listener for. Must be 'textChange'. |
| identity | observer.ObserverOptions | Yes | Identity options. |
| callback | Callback&lt;observer.TextChangeEventInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## offNavDestinationSizeChange

```TypeScript
offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void
```

Removes the listener callback registered using the **onNavDestinationSizeChange** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | No | Callback to be removed. If no parameter is passed,all callbacks are removed. |

## offNavDestinationSizeChangeByUniqueId

```TypeScript
offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with 'onNavDestinationSizeChangeByUniqueId()'.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navigationUniqueId | number | Yes | The uniqueId of the Navigation to which NavDestination belongs. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

## offRouterPageSizeChange

```TypeScript
offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void
```

Removes the listener callback registered using the **onRouterPageSizeChange** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;observer.RouterPageInfo&gt; | No | Callback to be removed. If no parameter is passed, allcallbacks are removed. |

## offSwiperContentUpdate

```TypeScript
offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void
```

Unregister the listener for content switching events of the **Swiper** component.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SwiperContentInfo&gt; | No | Target listener to unregister. If no parameter is provided, alllisteners for the **Swiper** component are unregistered. |

## offSwiperContentUpdate

```TypeScript
offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void
```

Unregister the listener for content switching events of a specific **Swiper** component identified by its ID.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | observer.ObserverOptions | Yes | Information about the target **Swiper** component. |
| callback | Callback&lt;SwiperContentInfo&gt; | No | Target listener to unregister. If no parameter is provided, alllisteners for the **Swiper** component are unregistered. |

## on('navDestinationUpdate')

```TypeScript
on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void
```

Subscribes to status changes of this **NavDestination** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | Event type.The value is fixed at **'navDestinationUpdate'**, which indicates the state change event<br>of the **NavDestination** component. |
| options | { navigationId: ResourceStr } | Yes | ID of the target **NavDestination** component. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return the current<br>state of the **NavDestination** component. |

## on('navDestinationUpdate')

```TypeScript
on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void
```

Subscribes to status changes of this **NavDestination** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | Event type.The value is fixed at **'navDestinationUpdate'**,<br>which indicates the state change event of the **NavDestination** component. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return the current state of<br>the **NavDestination** component. |

## on('navDestinationUpdateByUniqueId')

```TypeScript
on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void
```

Registers a callback function to be called when the navigation destination is updated.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdateByUniqueId' | Yes | The type of event to listen for. Must be 'navDestinationUpdateByUniqueId'. |
| navigationUniqueId | number | Yes | The uniqueId of the navigation. |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | Yes | The callback function to be called when the navigation destination is updated. |

## on('scrollEvent')

```TypeScript
on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | Callback&lt;observer.ScrollEventInfo&gt; | Yes | The callback function to be called when the scroll event start or stop. |

## on('scrollEvent')

```TypeScript
on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| callback | Callback&lt;observer.ScrollEventInfo&gt; | Yes | The callback function to be called when the scroll eventstart or stop. |

## on('routerPageUpdate')

```TypeScript
on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void
```

Unsubscribes to state changes of the page in the router.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | Event type.<br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router. |
| callback | Callback&lt;observer.RouterPageInfo&gt; | Yes | Callback to be unregistered. |

## on('densityUpdate')

```TypeScript
on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void
```

Listens for screen pixel density changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | Event type. The value **'densityUpdate'** indicates the pixel density changes ofthe screen. |
| callback | Callback&lt;observer.DensityInfo&gt; | Yes | Callback used to return the updated screen pixel density usinga [DensityInfo](arkts-arkui-densityinfo-c.md#densityinfo) object. |

## on('willDraw')

```TypeScript
on(type: 'willDraw', callback: Callback<void>): void
```

Listens for drawing instruction dispatch in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | Event event. The value **'willDraw'** indicates whether drawing is about to occur. |
| callback | Callback&lt;void&gt; | Yes | Callback used to return the result. |

## on('didLayout')

```TypeScript
on(type: 'didLayout', callback: Callback<void>): void
```

Listens for layout completion status in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | Event type. The value **'didLayout'** indicates whether the layout has beencompleted. |
| callback | Callback&lt;void&gt; | Yes | Callback used to return the result. |

## on('navDestinationSwitch')

```TypeScript
on(
    type: 'navDestinationSwitch',
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void
```

Registers a callback function to be called when the navigation switched to a new navDestination.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to listen for. Must be 'navDestinationSwitch'. |
| callback | Callback&lt;observer.NavDestinationSwitchInfo&gt; | Yes | The callback function to be called whenthe navigation switched to a new navDestination. |

## on('navDestinationSwitch')

```TypeScript
on(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void
```

Registers a callback function to be called when the navigation switched to a new navDestination.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to listen for. Must be 'navDestinationSwitch'. |
| observerOptions | observer.NavDestinationSwitchObserverOptions | Yes | Options. |
| callback | Callback&lt;observer.NavDestinationSwitchInfo&gt; | Yes | The callback function to be called when thenavigation switched to a new navDestination. |

## on('willClick')

```TypeScript
on(type: 'willClick', callback: ClickEventListenerCallback): void
```

Registers a callback function to be called before clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to listen for. |
| callback | ClickEventListenerCallback | Yes | The callback function to be calledwhen the clickEvent will be trigger or after. |

## on('didClick')

```TypeScript
on(type: 'didClick', callback: ClickEventListenerCallback): void
```

Registers a callback function to be called after clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to listen for. |
| callback | ClickEventListenerCallback | Yes | The callback function to be calledwhen the clickEvent will be trigger or after. |

## on('willClick')

```TypeScript
on(type: 'willClick', callback: GestureEventListenerCallback): void
```

Registers a callback function to be called before tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to listen for. |
| callback | GestureEventListenerCallback | Yes | The callback function to be calledwhen the clickEvent will be trigger or after. |

## on('didClick')

```TypeScript
on(type: 'didClick', callback: GestureEventListenerCallback): void
```

Registers a callback function to be called after tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to listen for. |
| callback | GestureEventListenerCallback | Yes | The callback function to be calledwhen the clickEvent will be trigger or after. |

## on('beforePanStart')

```TypeScript
on(type: 'beforePanStart', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) pre-execution events, executing the callback before the actual [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanStart' | Yes | Event type. The value is fixed at **'beforePanStart'**, indicating commanddispatch before the execution of the pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1)event. The registered callback is triggered before **onActionStart** is executed. |
| callback | PanListenerCallback | Yes | Callback used to return the result. It provides[GestureEvent](../arkts-components/arkts-arkui-gestureevent-i.md#gestureevent), [GestureRecognizer](../arkts-components/arkts-arkui-gesturerecognizer-c.md#gesturerecognizer), and the target component's[FrameNode](arkts-arkui-framenode-c.md#framenode) information. |

## on('beforePanEnd')

```TypeScript
on(type: 'beforePanEnd', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) pre-execution events, executing the callback before the actual [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatchbefore the execution of the pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. Theregistered callback is triggered before **onActionEnd** is executed. |
| callback | PanListenerCallback | Yes | Callback used to return the result. It provides[GestureEvent](../arkts-components/arkts-arkui-gestureevent-i.md#gestureevent), [GestureRecognizer](../arkts-components/arkts-arkui-gesturerecognizer-c.md#gesturerecognizer), and the target component's[FrameNode](arkts-arkui-framenode-c.md#framenode) information. |

## on('afterPanStart')

```TypeScript
on(type: 'afterPanStart', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) post-execution events, executing the callback after the actual [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanStart' | Yes | Event type. The value is fixed at **'afterPanStart'**, indicating commanddispatch after the execution of the pan gesture [onActionStart](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionstart-1) event.The registered callback is triggered after **onActionStart** is executed. |
| callback | PanListenerCallback | Yes | Callback used to return the result. It provides[GestureEvent](../arkts-components/arkts-arkui-gestureevent-i.md#gestureevent), [GestureRecognizer](../arkts-components/arkts-arkui-gesturerecognizer-c.md#gesturerecognizer), and the target component's[FrameNode](arkts-arkui-framenode-c.md#framenode) information. |

## on('afterPanEnd')

```TypeScript
on(type: 'afterPanEnd', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) post-execution events, executing the callback after the actual [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatchafter the execution of the pan gesture [onActionEnd](../arkts-components/arkts-arkui-pangestureinterface-i.md#onactionend-1) event. Theregistered callback is triggered after **onActionEnd** is executed. |
| callback | PanListenerCallback | Yes | Callback used to return the result. It provides[GestureEvent](../arkts-components/arkts-arkui-gestureevent-i.md#gestureevent), [GestureRecognizer](../arkts-components/arkts-arkui-gesturerecognizer-c.md#gesturerecognizer), and the target component's[FrameNode](arkts-arkui-framenode-c.md#framenode) information. |

## on('tabContentUpdate')

```TypeScript
on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to listen for. Must be 'tabContentUpdate'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | Callback&lt;observer.TabContentInfo&gt; | Yes | The callback function to be calledwhen the tabContent show or hide. |

## on('tabContentUpdate')

```TypeScript
on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to listen for. Must be 'tabContentUpdate'. |
| callback | Callback&lt;observer.TabContentInfo&gt; | Yes | The callback function to be calledwhen the tabContent is showed or hidden. |

## on('tabChange')

```TypeScript
on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden. Include the cases when the first tab content shows and when the tab changes current index.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to listen for. Must be 'tabChange'. |
| config | observer.ObserverOptions | Yes | The options object. Includes the observed component id. |
| callback | Callback&lt;observer.TabContentInfo&gt; | Yes | The callback function to be calledwhen when the tabContent is showed or hidden. |

## on('tabChange')

```TypeScript
on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden. Include the cases when the first tab content shows and when the tab changes current index.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to listen for. Must be 'tabChange'. |
| callback | Callback&lt;observer.TabContentInfo&gt; | Yes | The callback function to be calledwhen the tabContent is showed or hidden. |

## on('windowSizeLayoutBreakpointChange')

```TypeScript
on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void
```

Registers a callback for window size layout breakpoint changes. This enables adaptive UI layout adjustments based on window size variations. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeLayoutBreakpointChange' | Yes | Event type. The value is fixed at**'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes. |
| callback | Callback&lt;observer.WindowSizeLayoutBreakpointInfo&gt; | Yes | Callback used to return the result. Itprovides window width and height layout breakpoint enumerations using a **WindowSizeLayoutBreakpointinfo**object. |

## on('nodeRenderState')

```TypeScript
on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void
```

Registers a callback to be invoked when the rendering state of a specific node changes. This callback is executed immediately once upon successful registration. Be mindful of node quantity limitations. For performance reasons, registering too many nodes within a single UI instance will throw an exception. Typically, a **RENDER_OUT** notification is received when a component moves off-screen. However, in certain scenarios, a **RENDER_OUT** notification might not be triggered even if a component has moved off-screen. For example, components with caching capabilities like [Swiper](../arkts-components/arkts-arkui-swiper.md) will not trigger **RENDER_OUT** notifications even when the **isShown** parameter in the [cachedCount](SwiperAttribute#cachedCount(count: number, isShown: boolean)) attribute is set to **true**.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nodeRenderState' | Yes | Event type. The value is fixed at **'nodeRenderState'**, indicating renderingstate changes. |
| nodeIdentity | NodeIdentity | Yes | Node ID. |
| callback | NodeRenderStateChangeCallback | Yes | Callback used to return the result. It provides the[NodeRenderState](arkts-arkui-noderenderstate-e.md#noderenderstate) of the node rendering state change event and the component's[FrameNode](arkts-arkui-framenode-c.md#framenode). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [161001](../errorcode-node-render-monitor.md#161001-number-of-nodes-listening-for-render-state-exceeds-the-limit) | The count of nodes monitoring render state is over the limitation. |

## on('textChange')

```TypeScript
on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void
```

Registers a callback function to be called when text field's content is changed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to listen for. Must be 'textChange'. |
| callback | Callback&lt;observer.TextChangeEventInfo&gt; | Yes | The callback function to be called whentext field's content is changed. |

## on('textChange')

```TypeScript
on(type: 'textChange', identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void
```

Registers a callback function to be called when text field's content is changed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to listen for. Must be 'textChange'. |
| identity | observer.ObserverOptions | Yes | Identity options. |
| callback | Callback&lt;observer.TextChangeEventInfo&gt; | Yes | The callback function to be called when thetext field's content is changed. |

## onNavDestinationSizeChange

```TypeScript
onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void
```

Registers a callback that is triggered when the size of the visible navigation destination changes. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return navigation destinationinformation. |

## onNavDestinationSizeChangeByUniqueId

```TypeScript
onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void
```

Removes the listener callback registered using the **onNavDestinationSizeChangeByUniqueId** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navigationUniqueId | number | Yes | Unique ID of the **Navigation** component to which the **NavDestination**component to be listened belongs, which can be obtained through[queryNavigationInfo](../arkts-components/arkts-arkui-basecustomcomponent-c.md#querynavigationinfo-1). |
| callback | Callback&lt;observer.NavDestinationInfo&gt; | Yes | Callback to be removed. If no parameter is passed,all callbacks with the same **navigationUniqueId** setting are removed. |

## onRouterPageSizeChange

```TypeScript
onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void
```

Registers a callback that is triggered when the size of the visible router page changes. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;observer.RouterPageInfo&gt; | Yes | Callback used to return the information about the routerpage. |

## onSwiperContentUpdate

```TypeScript
onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void
```

Listens for content switching events of the **Swiper** component. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SwiperContentInfo&gt; | Yes | Callback used to return the result. It provides the **Swiper**content switching information using a **SwiperContentInfo** object. |

## onSwiperContentUpdate

```TypeScript
onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void
```

Listens for content switching events of a specific **Swiper** component identified by its ID. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | observer.ObserverOptions | Yes | Information about the target **Swiper** component. |
| callback | Callback&lt;SwiperContentInfo&gt; | Yes | Callback used to return the result. It provides the **Swiper**content switching information using a **SwiperContentInfo** object. |

## removeGlobalGestureListener

```TypeScript
removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void
```

Unregisters the specified global gesture listener.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | GestureListenerType | Yes | Event type. |
| callback | GestureListenerCallback | No | Callback to unregister. If this parameter is not specified, thisAPI unregisters all callbacks for this gesture type. |

