# ListScroller

List组件的滚动控制器，通过它控制List组件的滚动，仅支持一对一绑定到List组件。 > **说明：** > > ListScroller继承自[Scroller]Scroller，具有[Scroller]Scroller的全部方法。

**Inheritance:** ListScrollerextends: Scroller.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeAllSwipeActions

```TypeScript
closeAllSwipeActions(options?: CloseSwipeActionOptions): void
```

将[EXPANDED]SwipeActionState状态的[ListItem]list_item收起，并设置回调事件。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CloseSwipeActionOptions | No | 收起[EXPANDED]SwipeActionState状态的[ListItem]list_item的回调事  件集合。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## getItemRectInGroup

```TypeScript
getItemRectInGroup(index: number, indexInGroup: number): RectResult
```

获取[ListItemGroup]list_item_group中的[ListItem]list_item的大小和相对于List的位置。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | ListItemGroup在List中的索引值。 |
| indexInGroup | number | Yes | ListItemGroup在List中的索引值。 |

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | ListItemGroup中的ListItem的大小和相对于List的位置。 单位：vp。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## getVisibleListContentInfo

```TypeScript
getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo
```

根据坐标获取子组件的索引信息。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | x轴坐标，单位为vp。 |
| y | number | Yes | y轴坐标，单位为vp。 |

**Return value:**

| Type | Description |
| --- | --- |
| VisibleListContentInfo | 入参坐标处的子组件的索引信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## scrollToItemInGroup

```TypeScript
scrollToItemInGroup(index: number, indexInGroup:number, smooth?: boolean, align?: ScrollAlign): void
```

滑动到指定的ListItemGroup中指定的ListItem。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。 说明： index值设置成负值或者大于当前容器子组件的最大索引值，  视为异常值，本次跳转不生效。 |
| indexInGroup | number | Yes | 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。 说明： index值设置成负值或者大于当前容器子组件的最大索引值，  视为异常值，本次跳转不生效。 |
| smooth | boolean | No | 设置该次滑动是否有动效，true表示有动效，false表示没有动效。 默认值：false 说明： 开启动效时，会对经过的所有item进行加载  和布局计算，当大量加载item时会导致性能问题。 |
| align | ScrollAlign | No | 指定滑动到的元素与当前容器的对齐方式。 默认值：ScrollAlign.START。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

