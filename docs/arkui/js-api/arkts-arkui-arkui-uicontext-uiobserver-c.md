# UIObserver

Provides APIs for listening for UI component behavior changes.

> **NOTE**  
>  
> - The initial APIs of this class are supported since API version 11.  
>  
> - In the following API examples, you must first use [getUIObserver()](arkts-arkui-arkui-uicontext-uicontext-c.md#getuiobserver-1) in  
> **UIContext** to obtain a **UIObserver** instance, and then call the APIs using the obtained instance.  
>  
> - UIObserver can only listen for relevant information within the current process and does not support obtaining  
> information in cross-process scenarios<!--Del--> such as [UIExtensionComponent](../arkts-components/arkts-arkui-uiextensioncomponent.md)<!--  
> DelEnd-->.

**Since:** 11

<!--Device-unnamed-export class UIObserver--><!--Device-unnamed-export class UIObserver-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="addglobalgesturelistener"></a>
## addGlobalGestureListener

```TypeScript
addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void
```

Registers a callback to listen for gesture triggering information.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void--><!--Device-UIObserver-addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [GestureListenerType](arkts-arkui-arkui-uicontext-gesturelistenertype-e.md) | Yes | Type of gesture to listen for. |
| option | [GestureObserverConfigs](arkts-arkui-arkui-uicontext-gestureobserverconfigs-i.md) | Yes | Configuration options for binding the global listener. |
| callback | [GestureListenerCallback](arkts-arkui-gesturelistenercallback-t.md) | Yes | Callback triggered when the gesture state updates. |

<a id="off"></a>
## off('navDestinationUpdate')

```TypeScript
off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdate'. |
| options | { navigationId: ResourceStr } | Yes | The options object. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type and navigation ID will be removed. |

<a id="off-1"></a>
## off('navDestinationUpdate')

```TypeScript
off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdate'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type will be removed. |

<a id="off-2"></a>
## off('navDestinationUpdateByUniqueId')

```TypeScript
off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdateByUniqueId' | Yes | The type of event to remove the listener for. Must be 'navDestinationUpdateByUniqueId'. |
| navigationUniqueId | number | Yes | The uniqueId of the navigation. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type will be removed. |

<a id="off-3"></a>
## off('scrollEvent')

```TypeScript
off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void--><!--Device-UIObserver-off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.ScrollEventInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type and scroll ID will be removed. |

<a id="off-4"></a>
## off('scrollEvent')

```TypeScript
off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void--><!--Device-UIObserver-off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.ScrollEventInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type will be removed. |

<a id="off-5"></a>
## off('routerPageUpdate')

```TypeScript
off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void--><!--Device-UIObserver-off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | The type of event to remove the listener for. Must be 'routerPageUpdate'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.RouterPageInfo&gt; | No | The callback function to remove. If not provided, all callbacks for the given event type will be removed. |

<a id="off-6"></a>
## off('densityUpdate')

```TypeScript
off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void
```

Unregisters the listener for screen pixel density changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void--><!--Device-UIObserver-off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | Event type. The value **'densityUpdate'** indicates the pixel density changes of the screen. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.DensityInfo&gt; | No | Target listener to unregister. If no parameter is provided,all screen pixel density change listeners for the current [UIContext](arkts-arkui-uicontext.md) are removed. |

<a id="off-7"></a>
## off('willDraw')

```TypeScript
off(type: 'willDraw', callback?: Callback<void>): void
```

Unregisters the listener for drawing instruction dispatch in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'willDraw', callback?: Callback<void>): void--><!--Device-UIObserver-off(type: 'willDraw', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | Event event. The value **'willDraw'** indicates whether drawing is about to occur. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | Target listener to unregister. If no parameter is provided, all drawing instruction dispatch listeners are unregistered. |

<a id="off-8"></a>
## off('didLayout')

```TypeScript
off(type: 'didLayout', callback?: Callback<void>): void
```

Unregisters the listener for layout completion status in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'didLayout', callback?: Callback<void>): void--><!--Device-UIObserver-off(type: 'didLayout', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | Event type. The value **'didLayout'** indicates whether the layout has been completed. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | Target listener to unregister. If no parameter is provided, all layout completion listeners are unregistered. |

<a id="off-9"></a>
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

<!--Device-UIObserver-off(
    type: 'navDestinationSwitch',
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void--><!--Device-UIObserver-off(
    type: 'navDestinationSwitch',
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to remove the listener for. Must be 'navDestinationSwitch'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationSwitchInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-10"></a>
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

<!--Device-UIObserver-off(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void--><!--Device-UIObserver-off(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to remove the listener for. Must be 'navDestinationSwitch'. |
| observerOptions | observer.NavDestinationSwitchObserverOptions | Yes | Options. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationSwitchInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-11"></a>
## off('willClick')

```TypeScript
off(type: 'willClick', callback?: ClickEventListenerCallback): void
```

Removes a callback function to be called before clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'willClick', callback?: ClickEventListenerCallback): void--><!--Device-UIObserver-off(type: 'willClick', callback?: ClickEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to remove the listener for. |
| callback | [ClickEventListenerCallback](arkts-arkui-clickeventlistenercallback-t.md) | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-12"></a>
## off('didClick')

```TypeScript
off(type: 'didClick', callback?: ClickEventListenerCallback): void
```

Removes a callback function to be called after clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'didClick', callback?: ClickEventListenerCallback): void--><!--Device-UIObserver-off(type: 'didClick', callback?: ClickEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to remove the listener for. |
| callback | [ClickEventListenerCallback](arkts-arkui-clickeventlistenercallback-t.md) | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-13"></a>
## off('willClick')

```TypeScript
off(type: 'willClick', callback?: GestureEventListenerCallback): void
```

Removes a callback function to be called before tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'willClick', callback?: GestureEventListenerCallback): void--><!--Device-UIObserver-off(type: 'willClick', callback?: GestureEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to remove the listener for. |
| callback | [GestureEventListenerCallback](arkts-arkui-gestureeventlistenercallback-t.md) | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-14"></a>
## off('didClick')

```TypeScript
off(type: 'didClick', callback?: GestureEventListenerCallback): void
```

Removes a callback function to be called after tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'didClick', callback?: GestureEventListenerCallback): void--><!--Device-UIObserver-off(type: 'didClick', callback?: GestureEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to remove the listener for. |
| callback | [GestureEventListenerCallback](arkts-arkui-gestureeventlistenercallback-t.md) | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-15"></a>
## off('beforePanStart')

```TypeScript
off(type: 'beforePanStart', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) pre-execution events, canceling callbacks registered via [on('beforePanStart')](UIObserver#on(type: 'beforePanStart', callback: PanListenerCallback)).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-off(type: 'beforePanStart', callback?: PanListenerCallback): void--><!--Device-UIObserver-off(type: 'beforePanStart', callback?: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanStart' | Yes | Event type. The value is fixed at **'beforePanStart'**, indicating command dispatch before the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1)event. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | No | Target listener to unregister. If no parameter is provided, all callback listeners for command dispatch before the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event will be removed. |

<a id="off-16"></a>
## off('beforePanEnd')

```TypeScript
off(type: 'beforePanEnd', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) pre-execution events,canceling callbacks registered via [on('beforePanEnd')](UIObserver#on(type: 'beforePanEnd', callback: PanListenerCallback)).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-off(type: 'beforePanEnd', callback?: PanListenerCallback): void--><!--Device-UIObserver-off(type: 'beforePanEnd', callback?: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch before the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | No | Target listener to unregister. If no parameter is provided, all callback listeners for command dispatch before the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event will be removed. |

<a id="off-17"></a>
## off('afterPanStart')

```TypeScript
off(type: 'afterPanStart', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) post-execution events, canceling callbacks registered via [on('afterPanStart')](UIObserver#on(type: 'afterPanStart', callback: PanListenerCallback)).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-off(type: 'afterPanStart', callback?: PanListenerCallback): void--><!--Device-UIObserver-off(type: 'afterPanStart', callback?: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanStart' | Yes | Event type. The value is fixed at **'afterPanStart'**, indicating command dispatch after the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | No | Target listener to unregister. If no parameter is provided, all callback listeners for command dispatch after the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event will be removed. |

<a id="off-18"></a>
## off('afterPanEnd')

```TypeScript
off(type: 'afterPanEnd', callback?: PanListenerCallback): void
```

Unregisters the listener for pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) post-execution events, canceling callbacks registered via [on('afterPanEnd')](UIObserver#on(type: 'afterPanEnd', callback: PanListenerCallback)).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-off(type: 'afterPanEnd', callback?: PanListenerCallback): void--><!--Device-UIObserver-off(type: 'afterPanEnd', callback?: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanEnd' | Yes | Event type. The value is fixed at **'afterPanEnd'**, indicating command dispatch after the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | No | Target listener to unregister. If no parameter is provided, all callback listeners for command dispatch after the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event will be removed. |

<a id="off-19"></a>
## off('tabContentUpdate')

```TypeScript
off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to remove the listener for. Must be 'tabContentUpdate'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type and Tabs ID will be removed. |

<a id="off-20"></a>
## off('tabContentUpdate')

```TypeScript
off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to remove the listener for. Must be 'tabContentUpdate'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type and Tabs ID will be removed. |

<a id="off-21"></a>
## off('tabChange')

```TypeScript
off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to remove the listener for. Must be 'tabChange'. |
| config | observer.ObserverOptions | Yes | The config object. Includes the observed component id. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | No | The callback function to remove.If not provided, all callbacks for the given event type and Tabs ID will be removed. |

<a id="off-22"></a>
## off('tabChange')

```TypeScript
off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to remove the listener for. Must be 'tabChange'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | No | The callback function to remove.If not provided, all callbacks for the given event type will be removed. |

<a id="off-23"></a>
## off('windowSizeLayoutBreakpointChange')

```TypeScript
off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void
```

Unregisters previously registered window size layout breakpoint change listeners. If no callback is specified, all listeners for the current UI context are removed. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void--><!--Device-UIObserver-off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeLayoutBreakpointChange' | Yes | Event type. The value is fixed at **'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.WindowSizeLayoutBreakpointInfo&gt; | No | Target listener to unregister. If no parameter is provided, all window size layout breakpoint change listeners for the current [UIContext](arkts-arkui-uicontext.md) are removed. |

<a id="off-24"></a>
## off('nodeRenderState')

```TypeScript
off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void
```

Unregisters the callback for listening for node rendering state changes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void--><!--Device-UIObserver-off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nodeRenderState' | Yes | Event type. The value is fixed at **'nodeRenderState'**. |
| nodeIdentity | [NodeIdentity](arkts-arkui-nodeidentity-t.md) | Yes | Node ID. |
| callback | [NodeRenderStateChangeCallback](arkts-arkui-noderenderstatechangecallback-t.md) | No | Target listener to unregister. If no parameter is provided,all node rendering state change listeners are unregistered. |

<a id="off-25"></a>
## off('textChange')

```TypeScript
off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void--><!--Device-UIObserver-off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to remove the listener for. Must be 'textChange'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TextChangeEventInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="off-26"></a>
## off('textChange')

```TypeScript
off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void--><!--Device-UIObserver-off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to remove the listener for. Must be 'textChange'. |
| identity | observer.ObserverOptions | Yes | Identity options. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TextChangeEventInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="offnavdestinationsizechange"></a>
## offNavDestinationSizeChange

```TypeScript
offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void
```

Removes the listener callback registered using the **onNavDestinationSizeChange** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | No | Callback to be removed. If no parameter is passed,all callbacks are removed. |

<a id="offnavdestinationsizechangebyuniqueid"></a>
## offNavDestinationSizeChangeByUniqueId

```TypeScript
offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void
```

Removes a callback function that was previously registered with 'onNavDestinationSizeChangeByUniqueId()'.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navigationUniqueId | number | Yes | The uniqueId of the Navigation to which NavDestination belongs. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | No | The callback function to remove. If not provided,all callbacks for the given event type will be removed. |

<a id="offrouterpagesizechange"></a>
## offRouterPageSizeChange

```TypeScript
offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void
```

Removes the listener callback registered using the **onRouterPageSizeChange** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void--><!--Device-UIObserver-offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.RouterPageInfo&gt; | No | Callback to be removed. If no parameter is passed, all callbacks are removed. |

<a id="offswipercontentupdate"></a>
## offSwiperContentUpdate

```TypeScript
offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void
```

Unregister the listener for content switching events of the **Swiper** component.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void--><!--Device-UIObserver-offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;SwiperContentInfo&gt; | No | Target listener to unregister. If no parameter is provided, all listeners for the **Swiper** component are unregistered. |

<a id="offswipercontentupdate-1"></a>
## offSwiperContentUpdate

```TypeScript
offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void
```

Unregister the listener for content switching events of a specific **Swiper** component identified by its ID.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void--><!--Device-UIObserver-offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | observer.ObserverOptions | Yes | Information about the target **Swiper** component. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;SwiperContentInfo&gt; | No | Target listener to unregister. If no parameter is provided, all listeners for the **Swiper** component are unregistered. |

<a id="on"></a>
## on('navDestinationUpdate')

```TypeScript
on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void
```

Subscribes to status changes of this **NavDestination** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | Event type.The value is fixed at **'navDestinationUpdate'**, which indicates the state change event<br>of the **NavDestination** component. |
| options | { navigationId: ResourceStr } | Yes | ID of the target **NavDestination** component. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return the current<br>state of the **NavDestination** component. |

<a id="on-1"></a>
## on('navDestinationUpdate')

```TypeScript
on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void
```

Subscribes to status changes of this **NavDestination** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | Event type.The value is fixed at **'navDestinationUpdate'**,<br>which indicates the state change event of the **NavDestination** component. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return the current state of<br>the **NavDestination** component. |

<a id="on-2"></a>
## on('navDestinationUpdateByUniqueId')

```TypeScript
on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void
```

Registers a callback function to be called when the navigation destination is updated.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdateByUniqueId' | Yes | The type of event to listen for. Must be 'navDestinationUpdateByUniqueId'. |
| navigationUniqueId | number | Yes | The uniqueId of the navigation. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | Yes | The callback function to be called when the navigation destination is updated. |

<a id="on-3"></a>
## on('scrollEvent')

```TypeScript
on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void--><!--Device-UIObserver-on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.ScrollEventInfo&gt; | Yes | The callback function to be called when the scroll event start or stop. |

<a id="on-4"></a>
## on('scrollEvent')

```TypeScript
on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void--><!--Device-UIObserver-on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.ScrollEventInfo&gt; | Yes | The callback function to be called when the scroll event start or stop. |

<a id="on-5"></a>
## on('routerPageUpdate')

```TypeScript
on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void
```

Unsubscribes to state changes of the page in the router.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void--><!--Device-UIObserver-on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | Event type.<br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.RouterPageInfo&gt; | Yes | Callback to be unregistered. |

<a id="on-6"></a>
## on('densityUpdate')

```TypeScript
on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void
```

Listens for screen pixel density changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void--><!--Device-UIObserver-on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | Event type. The value **'densityUpdate'** indicates the pixel density changes of the screen. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.DensityInfo&gt; | Yes | Callback used to return the updated screen pixel density using a [DensityInfo](arkts-arkui-uiobserver-densityinfo-c.md) object. |

<a id="on-7"></a>
## on('willDraw')

```TypeScript
on(type: 'willDraw', callback: Callback<void>): void
```

Listens for drawing instruction dispatch in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'willDraw', callback: Callback<void>): void--><!--Device-UIObserver-on(type: 'willDraw', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | Event event. The value **'willDraw'** indicates whether drawing is about to occur. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="on-8"></a>
## on('didLayout')

```TypeScript
on(type: 'didLayout', callback: Callback<void>): void
```

Listens for layout completion status in each frame.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'didLayout', callback: Callback<void>): void--><!--Device-UIObserver-on(type: 'didLayout', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | Event type. The value **'didLayout'** indicates whether the layout has been completed. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="on-9"></a>
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

<!--Device-UIObserver-on(
    type: 'navDestinationSwitch',
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void--><!--Device-UIObserver-on(
    type: 'navDestinationSwitch',
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to listen for. Must be 'navDestinationSwitch'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationSwitchInfo&gt; | Yes | The callback function to be called when the navigation switched to a new navDestination. |

<a id="on-10"></a>
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

<!--Device-UIObserver-on(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void--><!--Device-UIObserver-on(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | The type of event to listen for. Must be 'navDestinationSwitch'. |
| observerOptions | observer.NavDestinationSwitchObserverOptions | Yes | Options. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationSwitchInfo&gt; | Yes | The callback function to be called when the navigation switched to a new navDestination. |

<a id="on-11"></a>
## on('willClick')

```TypeScript
on(type: 'willClick', callback: ClickEventListenerCallback): void
```

Registers a callback function to be called before clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'willClick', callback: ClickEventListenerCallback): void--><!--Device-UIObserver-on(type: 'willClick', callback: ClickEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to listen for. |
| callback | [ClickEventListenerCallback](arkts-arkui-clickeventlistenercallback-t.md) | Yes | The callback function to be called when the clickEvent will be trigger or after. |

<a id="on-12"></a>
## on('didClick')

```TypeScript
on(type: 'didClick', callback: ClickEventListenerCallback): void
```

Registers a callback function to be called after clickEvent is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'didClick', callback: ClickEventListenerCallback): void--><!--Device-UIObserver-on(type: 'didClick', callback: ClickEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to listen for. |
| callback | [ClickEventListenerCallback](arkts-arkui-clickeventlistenercallback-t.md) | Yes | The callback function to be called when the clickEvent will be trigger or after. |

<a id="on-13"></a>
## on('willClick')

```TypeScript
on(type: 'willClick', callback: GestureEventListenerCallback): void
```

Registers a callback function to be called before tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'willClick', callback: GestureEventListenerCallback): void--><!--Device-UIObserver-on(type: 'willClick', callback: GestureEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willClick' | Yes | The type of event to listen for. |
| callback | [GestureEventListenerCallback](arkts-arkui-gestureeventlistenercallback-t.md) | Yes | The callback function to be called when the clickEvent will be trigger or after. |

<a id="on-14"></a>
## on('didClick')

```TypeScript
on(type: 'didClick', callback: GestureEventListenerCallback): void
```

Registers a callback function to be called after tapGesture is called.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'didClick', callback: GestureEventListenerCallback): void--><!--Device-UIObserver-on(type: 'didClick', callback: GestureEventListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didClick' | Yes | The type of event to listen for. |
| callback | [GestureEventListenerCallback](arkts-arkui-gestureeventlistenercallback-t.md) | Yes | The callback function to be called when the clickEvent will be trigger or after. |

<a id="on-15"></a>
## on('beforePanStart')

```TypeScript
on(type: 'beforePanStart', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) pre-execution events, executing the callback before the actual [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-on(type: 'beforePanStart', callback: PanListenerCallback): void--><!--Device-UIObserver-on(type: 'beforePanStart', callback: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanStart' | Yes | Event type. The value is fixed at **'beforePanStart'**, indicating command dispatch before the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1)event. The registered callback is triggered before **onActionStart** is executed. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | Yes | Callback used to return the result. It provides [GestureEvent](arkts-arkui-gestureevent-i.md), [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md), and the target component's [FrameNode](arkts-arkui-framenode-c.md) information. |

<a id="on-16"></a>
## on('beforePanEnd')

```TypeScript
on(type: 'beforePanEnd', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) pre-execution events, executing the callback before the actual [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. It works for finger swiping,mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-on(type: 'beforePanEnd', callback: PanListenerCallback): void--><!--Device-UIObserver-on(type: 'beforePanEnd', callback: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'beforePanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch before the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. The registered callback is triggered before **onActionEnd** is executed. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | Yes | Callback used to return the result. It provides [GestureEvent](arkts-arkui-gestureevent-i.md), [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md), and the target component's [FrameNode](arkts-arkui-framenode-c.md) information. |

<a id="on-17"></a>
## on('afterPanStart')

```TypeScript
on(type: 'afterPanStart', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) post-execution events, executing the callback after the actual [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event. It works for finger swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-on(type: 'afterPanStart', callback: PanListenerCallback): void--><!--Device-UIObserver-on(type: 'afterPanStart', callback: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanStart' | Yes | Event type. The value is fixed at **'afterPanStart'**, indicating command dispatch after the execution of the pan gesture [onActionStart](arkts-arkui-pangestureinterface-i.md#onactionstart-1) event.The registered callback is triggered after **onActionStart** is executed. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | Yes | Callback used to return the result. It provides [GestureEvent](arkts-arkui-gestureevent-i.md), [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md), and the target component's [FrameNode](arkts-arkui-framenode-c.md) information. |

<a id="on-18"></a>
## on('afterPanEnd')

```TypeScript
on(type: 'afterPanEnd', callback: PanListenerCallback): void
```

Listens for pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) post-execution events, executing the callback after the actual [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. It works for finger swiping,mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIObserver-on(type: 'afterPanEnd', callback: PanListenerCallback): void--><!--Device-UIObserver-on(type: 'afterPanEnd', callback: PanListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'afterPanEnd' | Yes | Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch after the execution of the pan gesture [onActionEnd](arkts-arkui-pangestureinterface-i.md#onactionend-1) event. The registered callback is triggered after **onActionEnd** is executed. |
| callback | [PanListenerCallback](arkts-arkui-panlistenercallback-t.md) | Yes | Callback used to return the result. It provides [GestureEvent](arkts-arkui-gestureevent-i.md), [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md), and the target component's [FrameNode](arkts-arkui-framenode-c.md) information. |

<a id="on-19"></a>
## on('tabContentUpdate')

```TypeScript
on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to listen for. Must be 'tabContentUpdate'. |
| options | observer.ObserverOptions | Yes | The options object. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | Yes | The callback function to be called when the tabContent show or hide. |

<a id="on-20"></a>
## on('tabContentUpdate')

```TypeScript
on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UIObserver-on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | The type of event to listen for. Must be 'tabContentUpdate'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | Yes | The callback function to be called when the tabContent is showed or hidden. |

<a id="on-21"></a>
## on('tabChange')

```TypeScript
on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.Include the cases when the first tab content shows and when the tab changes current index.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to listen for. Must be 'tabChange'. |
| config | observer.ObserverOptions | Yes | The options object. Includes the observed component id. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | Yes | The callback function to be called when when the tabContent is showed or hidden. |

<a id="on-22"></a>
## on('tabChange')

```TypeScript
on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void
```

Registers a callback function to be called when the tabContent is showed or hidden.Include the cases when the first tab content shows and when the tab changes current index.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void--><!--Device-UIObserver-on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabChange' | Yes | The type of event to listen for. Must be 'tabChange'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TabContentInfo&gt; | Yes | The callback function to be called when the tabContent is showed or hidden. |

<a id="on-23"></a>
## on('windowSizeLayoutBreakpointChange')

```TypeScript
on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void
```

Registers a callback for window size layout breakpoint changes. This enables adaptive UI layout adjustments based on window size variations. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void--><!--Device-UIObserver-on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowSizeLayoutBreakpointChange' | Yes | Event type. The value is fixed at **'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.WindowSizeLayoutBreakpointInfo&gt; | Yes | Callback used to return the result. It provides window width and height layout breakpoint enumerations using a **WindowSizeLayoutBreakpointinfo** object. |

<a id="on-24"></a>
## on('nodeRenderState')

```TypeScript
on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void
```

Registers a callback to be invoked when the rendering state of a specific node changes. This callback is executed immediately once upon successful registration.

Be mindful of node quantity limitations. For performance reasons, registering too many nodes within a single UI instance will throw an exception.

Typically, a **RENDER_OUT** notification is received when a component moves off-screen. However, in certain scenarios, a **RENDER_OUT** notification might not be triggered even if a component has moved off-screen. For example, components with caching capabilities like [Swiper](../arkts-components/arkts-arkui-swiper.md) will not trigger **RENDER_OUT** notifications even when the **isShown** parameter in the [cachedCount](SwiperAttribute#cachedCount(count: number, isShown: boolean)) attribute is set to **true**.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void--><!--Device-UIObserver-on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'nodeRenderState' | Yes | Event type. The value is fixed at **'nodeRenderState'**, indicating rendering state changes. |
| nodeIdentity | [NodeIdentity](arkts-arkui-nodeidentity-t.md) | Yes | Node ID. |
| callback | [NodeRenderStateChangeCallback](arkts-arkui-noderenderstatechangecallback-t.md) | Yes | Callback used to return the result. It provides the [NodeRenderState](arkts-arkui-arkui-uicontext-noderenderstate-e.md) of the node rendering state change event and the component's [FrameNode](arkts-arkui-framenode-c.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [161001](../errorcode-node-render-monitor.md#161001-number-of-nodes-listening-for-render-state-exceeds-the-limit) | The count of nodes monitoring render state is over the limitation. |

<a id="on-25"></a>
## on('textChange')

```TypeScript
on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void
```

Registers a callback function to be called when text field's content is changed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void--><!--Device-UIObserver-on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to listen for. Must be 'textChange'. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TextChangeEventInfo&gt; | Yes | The callback function to be called when text field's content is changed. |

<a id="on-26"></a>
## on('textChange')

```TypeScript
on(type: 'textChange', identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void
```

Registers a callback function to be called when text field's content is changed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-on(type: 'textChange', identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void--><!--Device-UIObserver-on(type: 'textChange', identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'textChange' | Yes | The type of event to listen for. Must be 'textChange'. |
| identity | observer.ObserverOptions | Yes | Identity options. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.TextChangeEventInfo&gt; | Yes | The callback function to be called when the text field's content is changed. |

<a id="onnavdestinationsizechange"></a>
## onNavDestinationSizeChange

```TypeScript
onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void
```

Registers a callback that is triggered when the size of the visible navigation destination changes. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | Yes | Callback used to return navigation destination information. |

<a id="onnavdestinationsizechangebyuniqueid"></a>
## onNavDestinationSizeChangeByUniqueId

```TypeScript
onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void
```

Removes the listener callback registered using the **onNavDestinationSizeChangeByUniqueId** API. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void--><!--Device-UIObserver-onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navigationUniqueId | number | Yes | Unique ID of the **Navigation** component to which the **NavDestination** component to be listened belongs, which can be obtained through [queryNavigationInfo](../arkts-components/arkts-arkui-basecustomcomponent-c.md#querynavigationinfo-1). |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.NavDestinationInfo&gt; | Yes | Callback to be removed. If no parameter is passed,all callbacks with the same **navigationUniqueId** setting are removed. |

<a id="onrouterpagesizechange"></a>
## onRouterPageSizeChange

```TypeScript
onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void
```

Registers a callback that is triggered when the size of the visible router page changes. This API uses an asynchronous callback to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UIObserver-onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void--><!--Device-UIObserver-onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;observer.RouterPageInfo&gt; | Yes | Callback used to return the information about the router page. |

<a id="onswipercontentupdate"></a>
## onSwiperContentUpdate

```TypeScript
onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void
```

Listens for content switching events of the **Swiper** component. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void--><!--Device-UIObserver-onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;SwiperContentInfo&gt; | Yes | Callback used to return the result. It provides the **Swiper** content switching information using a **SwiperContentInfo** object. |

<a id="onswipercontentupdate-1"></a>
## onSwiperContentUpdate

```TypeScript
onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void
```

Listens for content switching events of a specific **Swiper** component identified by its ID. This API uses an asynchronous callback to return the result.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIObserver-onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void--><!--Device-UIObserver-onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | observer.ObserverOptions | Yes | Information about the target **Swiper** component. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;SwiperContentInfo&gt; | Yes | Callback used to return the result. It provides the **Swiper** content switching information using a **SwiperContentInfo** object. |

<a id="removeglobalgesturelistener"></a>
## removeGlobalGestureListener

```TypeScript
removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void
```

Unregisters the specified global gesture listener.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-UIObserver-removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void--><!--Device-UIObserver-removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [GestureListenerType](arkts-arkui-arkui-uicontext-gesturelistenertype-e.md) | Yes | Event type. |
| callback | [GestureListenerCallback](arkts-arkui-gesturelistenercallback-t.md) | No | Callback to unregister. If this parameter is not specified, this API unregisters all callbacks for this gesture type. |

