# LongPressGestureInterface

用于触发长按手势事件，触发长按手势的最少手指数为1，默认最短长按时间为500毫秒。可配置duration参数控制最短长按时长。 > **说明：** > > 从API version 18开始，部分设备会优先响应系统的双指长按手势，导致应用的双指长按手势不生效。

**Inheritance:** LongPressGestureInterfaceextends: GestureInterface<LongPressGestureInterface>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: { fingers?: number; repeat?: boolean; duration?: number }): LongPressGestureInterface
```

创建长按手势对象。继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)。 当组件默认支持可拖拽时，如Text、TextInput、TextArea、HyperLink、Image和RichEditor等组件。长按手势与拖拽会出现冲突，事件优先级如下： 当长按触发时间小于500毫秒时，系统优先响应长按事件而非拖拽事件。 当长按触发时间达到或超过500毫秒时，系统优先响应拖拽事件而非长按事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { fingers?: number; repeat?: boolean; duration?: number } | No | 设置长按手势参数。 - fingers：触发长按的最少手指数，最小值为1，&nbsp;最大值为10。 默认值：1  - repeat：是否连续触发事件回调。true表示连续触发事件回调，false表示不连续触发事件回调。 默认值：false  - duration：触发长按的最短时间，单位为毫秒（ms）。 默认值：500 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

## constructor

```TypeScript
(options?: LongPressGestureHandlerOptions): LongPressGestureInterface
```

创建长按手势对象。与[LongPressGesture]LongPressGestureInterface(value?: { fingers?: number; repeat?: boolean; duration?: number )}相比， options参数新增了对isFingerCountLimited参数，表示是否检查触摸屏幕的手指数量。 当组件默认支持可拖拽时，如Text、TextInput、TextArea、HyperLink、Image和RichEditor等组件。长按手势与拖拽会出现冲突，事件优先级如下： 当长按触发时间小于500毫秒时，系统优先响应长按事件而非拖拽事件。 当长按触发时间达到或超过500毫秒时，系统优先响应拖拽事件而非长按事件。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | LongPressGestureHandlerOptions | No | 长按手势处理器配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

## onAction

```TypeScript
onAction(event: (event: GestureEvent) => void): LongPressGestureInterface
```

设置长按手势识别成功回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 长按手势识别成功回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: () => void): LongPressGestureInterface
```

设置长按手势取消回调。长按手势识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 长按手势取消回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): LongPressGestureInterface
```

设置长按手势取消回调。长按手势识别成功后，接收到触摸取消事件时触发回调。返回手势事件信息。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | Yes | 长按手势取消回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

## onActionEnd

```TypeScript
onActionEnd(event: (event: GestureEvent) => void): LongPressGestureInterface
```

设置长按手势结束回调。长按手势识别成功后，最后一根手指抬起时触发回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 长按手势结束回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| LongPressGestureInterface |  |

