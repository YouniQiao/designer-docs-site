# PinchGestureHandler

捏合手势处理器对象类型。

**继承实现关系：** PinchGestureHandler继承自：GestureHandler<PinchGestureHandler>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(options?: PinchGestureHandlerOptions)
```

捏合手势处理器的构造函数。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | PinchGestureHandlerOptions | 否 | 捏合手势处理器配置参数。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<void>): PinchGestureHandler
```

设置捏合手势处理器取消回调。捏合手势处理器识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Callback&lt;void> | 是 | 捏合手势处理器取消回调。不返回手势事件信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PinchGestureHandler | 返回当前捏合手势处理器对象。 |

## onActionCancel

```TypeScript
onActionCancel(event: Callback<GestureEvent>): PinchGestureHandler
```

设置捏合手势处理器取消回调。捏合手势处理器识别成功后，接收到触摸取消事件时触发回调。与 [onActionCancel](arkts-pinchgesturehandler-c.md#onActionCancel)接口相比，此接口返回手势事件信息。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | 是 | 捏合手势处理器取消回调。返回手势事件信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PinchGestureHandler | 返回当前捏合手势处理器对象。 |

## onActionEnd

```TypeScript
onActionEnd(event: Callback<GestureEvent>): PinchGestureHandler
```

设置捏合手势处理器结束回调。捏合手势处理器识别成功后，手指抬起时触发回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | 是 | 捏合手势处理器结束回调。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PinchGestureHandler | 返回当前捏合手势处理器对象。 |

## onActionStart

```TypeScript
onActionStart(event: Callback<GestureEvent>): PinchGestureHandler
```

设置捏合手势处理器识别成功回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | 是 | 捏合手势处理器识别成功回调。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PinchGestureHandler | 返回当前捏合手势处理器对象。 |

## onActionUpdate

```TypeScript
onActionUpdate(event: Callback<GestureEvent>): PinchGestureHandler
```

设置捏合手势处理器更新回调。捏合手势处理器移动过程中触发回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Callback&lt;GestureEvent> | 是 | 捏合手势处理器更新回调。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PinchGestureHandler | 返回当前捏合手势处理器对象。 |

