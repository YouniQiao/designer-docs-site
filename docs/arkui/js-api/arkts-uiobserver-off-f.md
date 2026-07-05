# off

## off('navDestinationUpdate')

```TypeScript
export function off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<NavDestinationInfo>): void
```

取消监听NavDestination组件的状态变化。与[uiObserver.off]uiObserver.off(type: 'navDestinationUpdate', callback?: Callback<NavDestinationInfo>)相比，新增了options参数，即支持指定监听的Navigation的id。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。 |
| options | { navigationId: ResourceStr } | Yes | 指定监听的Navigation的id。 |
| callback | Callback&lt;NavDestinationInfo> | No | 回调函数。返回当前的NavDestination组件状态。 |

## off('navDestinationUpdate')

```TypeScript
export function off(type: 'navDestinationUpdate', callback?: Callback<NavDestinationInfo>): void
```

取消监听NavDestination组件的状态变化。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationUpdate' | Yes | 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。 |
| callback | Callback&lt;NavDestinationInfo> | No |  |

## off('scrollEvent')

```TypeScript
export function off(type: 'scrollEvent', options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| options | ObserverOptions | Yes | The options object. |
| callback | Callback&lt;ScrollEventInfo> | No | The callback function to remove. If not provided, all callbacks for the given event type and  scroll ID will be removed. |

## off('scrollEvent')

```TypeScript
export function off(type: 'scrollEvent', callback?: Callback<ScrollEventInfo>): void
```

Removes a callback function that was previously registered with `on()`.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scrollEvent' | Yes | The type of event to remove the listener for. Must be 'scrollEvent'. |
| callback | Callback&lt;ScrollEventInfo> | No |  |

## off('routerPageUpdate')

```TypeScript
export function off(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback?: Callback<RouterPageInfo>): void
```

取消监听router中page页面的状态变化。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'routerPageUpdate' | Yes | 监听事件，固定为'routerPageUpdate'，即router中page页面的状态变化。 |
| context | UIAbilityContext \| UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;RouterPageInfo> | No |  |

## off('densityUpdate')

```TypeScript
export function off(type: 'densityUpdate', context: UIContext, callback?: Callback<DensityInfo>): void
```

取消监听屏幕像素密度的变化。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'densityUpdate' | Yes | 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;DensityInfo> | No |  |

## off('willDraw')

```TypeScript
export function off(type: 'willDraw', context: UIContext, callback?: Callback<void>): void
```

取消监听每一帧绘制指令下发情况。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'willDraw' | Yes | 监听事件，固定为'willDraw'，即是否将要绘制。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;void> | No |  |

## off('didLayout')

```TypeScript
export function off(type: 'didLayout', context: UIContext, callback?: Callback<void>): void
```

取消监听每一帧布局完成情况。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'didLayout' | Yes | 监听事件，固定为'didLayout'，即是否布局完成。 |
| context | UIContext | Yes | 上下文信息，用以指定监听页面的范围。 |
| callback | Callback&lt;void> | No |  |

## off('tabContentUpdate')

```TypeScript
export function off(type: 'tabContentUpdate', options: ObserverOptions, callback?: Callback<TabContentInfo>): void
```

取消监听指定Tabs组件id的TabContent页面切换事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。 |
| options | ObserverOptions | Yes | 指定监听的Tabs组件的id。 |
| callback | Callback&lt;TabContentInfo> | No | 需要被注销的回调函数。 |

## off('tabContentUpdate')

```TypeScript
export function off(type: 'tabContentUpdate', callback?: Callback<TabContentInfo>): void
```

取消监听TabContent页面的切换事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'tabContentUpdate' | Yes | 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。 |
| callback | Callback&lt;TabContentInfo> | No |  |

## off('navDestinationSwitch')

```TypeScript
export function off(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void
```

取消监听Navigation的页面切换事件。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'navDestinationSwitch' | Yes | 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。 |
| context | UIAbilityContext \| UIContext | Yes | 上下文信息，用以指定监听页面切换事件的范围。 |
| callback | Callback&lt;NavDestinationSwitchInfo> | No |  |

## off('navDestinationSwitch')

```TypeScript
export function off(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void
```

取消监听Navigation的页面切换事件。与[uiObserver.off]uiObserver.off( type: 'navDestinationSwitch', context: UIAbilityContext | UIContext, callback?: Callback<NavDestinationSwitchInfo> )相比，新增了observerOptions参数，即支持设置监听选项。

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
| callback | Callback&lt;NavDestinationSwitchInfo> | No |  |

