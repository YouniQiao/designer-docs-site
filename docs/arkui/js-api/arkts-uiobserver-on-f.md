# on

## on('navDestinationUpdate')

```TypeScript
export function on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<NavDestinationInfo>): void
```

监听NavDestination组件的状态变化。与 * [uiObserver.on]uiObserver.on(type: 'navDestinationUpdate', callback: Callback<NavDestinationInfo>)相比，新增了options参数，即支持指定监听的Navigation的id。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。 |
| options | { navigationId: ResourceStr } | Yes | 指定监听的Navigation的id。 |
| callback | Callback&lt;NavDestinationInfo> | Yes | 回调函数。返回当前的NavDestination组件状态。 |

## on('navDestinationUpdate')

```TypeScript
export function on(type: 'navDestinationUpdate', callback: Callback<NavDestinationInfo>): void
```

监听NavDestination组件的状态变化。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。 |
| callback | Callback&lt;NavDestinationInfo> | Yes | 回调函数。返回当前的NavDestination组件状态。 |

## on('scrollEvent')

```TypeScript
export function on(type: 'scrollEvent', options: ObserverOptions, callback: Callback<ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| options | ObserverOptions | Yes | The options object. |
| callback | Callback&lt;ScrollEventInfo> | Yes | The callback function to be called when the scroll event start or stop. |

## on('scrollEvent')

```TypeScript
export function on(type: 'scrollEvent', callback: Callback<ScrollEventInfo>): void
```

Registers a callback function to be called when the scroll event start or stop.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to listen for. Must be 'scrollEvent'. |
| callback | Callback&lt;ScrollEventInfo> | Yes | The callback function to be called when the scroll event start or stop. |

## on('routerPageUpdate')

```TypeScript
export function on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>): void
```

监听router中page页面的状态变化。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | 监听事件，固定为'routerPageUpdate'，即router中page页面的状态变化。 |
| context | UIAbilityContext \| UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;RouterPageInfo> | Yes | 回调函数。携带pageInfo，返回当前的page页面状态。 |

## on('densityUpdate')

```TypeScript
export function on(type: 'densityUpdate', context: UIContext, callback: Callback<DensityInfo>): void
```

监听屏幕像素密度变化。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;DensityInfo> | Yes | 回调函数。携带DensityInfo，返回变化后的屏幕像素密度。 |

## on('willDraw')

```TypeScript
export function on(type: 'willDraw', context: UIContext, callback: Callback<void>): void
```

监听每一帧绘制指令下发情况。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | 监听事件，固定为'willDraw'，即是否将要绘制。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;void> | Yes | 回调函数。 |

## on('didLayout')

```TypeScript
export function on(type: 'didLayout', context: UIContext, callback: Callback<void>): void
```

监听每一帧布局完成情况。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | 监听事件，固定为'didLayout'，即是否布局完成。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;void> | Yes | 回调函数。 |

## on('tabContentUpdate')

```TypeScript
export function on(type: 'tabContentUpdate', options: ObserverOptions, callback: Callback<TabContentInfo>): void
```

监听指定Tabs组件id的TabContent页面切换事件。相比[on('tabChange')](arkts-uiobserver-c.md#on)，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。 |
| options | ObserverOptions | Yes | 指定监听的Tabs组件的id。 |
| callback | Callback&lt;TabContentInfo> | Yes | 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。 |

## on('tabContentUpdate')

```TypeScript
export function on(type: 'tabContentUpdate', callback: Callback<TabContentInfo>): void
```

监听TabContent页面的切换事件。相比[on('tabChange')](arkts-uiobserver-c.md#on)，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。 |
| callback | Callback&lt;TabContentInfo> | Yes | 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。 |

## on('navDestinationSwitch')

```TypeScript
export function on(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    callback: Callback<NavDestinationSwitchInfo>
  ): void
```

监听Navigation的页面切换事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。 |
| context | UIAbilityContext \| UIContext | Yes | 上下文信息，用以指定监听页面切换事件的范围。 |
| callback | Callback&lt;NavDestinationSwitchInfo> | Yes | 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。 |

## on('navDestinationSwitch')

```TypeScript
export function on(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback: Callback<NavDestinationSwitchInfo>
  ): void
```

监听Navigation的页面切换事件。与[uiObserver.on]uiObserver.on( type: 'navDestinationSwitch', context: UIAbilityContext | UIContext, callback: Callback<NavDestinationSwitchInfo> )相比，新增了observerOptions参数，即支持设置监听选项。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。 |
| context | UIAbilityContext \| UIContext | Yes | 上下文信息，用以指定监听页面切换事件的范围。 |
| observerOptions | NavDestinationSwitchObserverOptions | Yes | 监听选项。 |
| callback | Callback&lt;NavDestinationSwitchInfo> | Yes | 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。 |

