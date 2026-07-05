# TabsController

Tabs组件的控制器，用于控制Tabs组件进行页签切换。不支持一个TabsController控制多个Tabs组件。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## changeIndex

```TypeScript
changeIndex(value: number): void
```

控制Tabs切换到指定页签。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 页签在Tabs里的索引值，索引值从0开始。 说明： 设置小于0或大于最大数量的值时，取默认值0。 |

## constructor

```TypeScript
constructor()
```

TabsController的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## preloadItems

```TypeScript
preloadItems(indices: Optional<Array<number>>): Promise<void>
```

控制Tabs预加载指定子节点。调用该接口后会一次性加载所有指定的子节点，因此为了性能考虑，建议分批加载子节点。 > **说明：** > - Tabs的preloadItems需要在Tabs创建之后去调用，首次预加载推荐在Tabs的[onAppear]CommonMethod#onAppear生命周期中去控制。 > > - 如果TabsController对象未绑定任何Tabs组件，直接调用该接口，会抛出JS异常。因此使用该接口时，建议通过try-catch捕获异常。 > > - 使用preloadItems预加载标签页时，若需自定义TabBar上的显示内容，推荐使用ComponentContent实现，使用示例请参考 > [示例9](docroot://reference/apis-arkui/arkui-ts/ts-container-tabcontent.md#示例9通过componentcontent设置tabbar)。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indices | Optional&lt;Array&lt;number>> | Yes | 需预加载的子节点的下标数组。 默认值：空数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 预加载完成后触发的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter invalid. Possible causes:  1. The parameter type is not Array.  2. The parameter is an empty array.  3. The parameter contains an invalid index. |

## setTabBarOpacity

```TypeScript
setTabBarOpacity(opacity: number): void
```

设置TabBar的不透明度。 > **说明：** > 当使用 > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)或 > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13) > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarOpacity接口设置的TabBar不透明度会失效。因此不建议同时使用 > bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarOpacity接口。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| opacity | number | Yes | 设置TabBar的不透明度，取值范围为[0.0, 1.0]，设置的值小于0.0时，按0.0处理，设置的值大于1.0时，按1.0处理。 默认值：1.0。 |

## setTabBarTranslate

```TypeScript
setTabBarTranslate(translate: TranslateOptions): void
```

设置TabBar的平移距离。 > **说明：** > 当使用 > [bindTabsToScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstoscrollable13)或 > [bindTabsToNestedScrollable](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#bindtabstonestedscrollable13) > 等接口绑定了Tabs组件和可滚动容器组件后，在滑动可滚动容器组件时，会触发所有与其绑定的Tabs组件的TabBar的显示和隐藏动效，调用setTabBarTranslate接口设置的TabBar平移距离会失效。因此不建议同时使 > 用bindTabsToScrollable、bindTabsToNestedScrollable和setTabBarTranslate接口。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| translate | TranslateOptions | Yes | 设置TabBar的平移距离。 |

