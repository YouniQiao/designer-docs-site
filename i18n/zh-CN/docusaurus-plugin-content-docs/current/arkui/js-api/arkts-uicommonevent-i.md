# UICommonEvent

用于设置基础事件回调。方法入参为undefined的时候，重置对应的事件回调。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## setOnAppear

```TypeScript
setOnAppear(callback: Callback<void> | undefined): void
```

设置[onAppear](arkts-commonmethod-c.md#onAppear)挂载显示事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> \| undefined | 是 | 挂载显示事件的回调函数。 |

## setOnBlur

```TypeScript
setOnBlur(callback: Callback<void> | undefined): void
```

设置[onBlur](arkts-commonmethod-c.md#onBlur)失焦事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> \| undefined | 是 | 失焦事件的回调。 |

## setOnClick

```TypeScript
setOnClick(callback: Callback<ClickEvent> | undefined): void
```

设置[点击事件](arkts-commonmethod-c.md#onClick)的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ClickEvent> \| undefined | 是 | 点击事件的回调函数。 |

## setOnDisappear

```TypeScript
setOnDisappear(callback: Callback<void> | undefined): void
```

设置[onDisAppear](arkts-commonmethod-c.md#onDisAppear)卸载消失事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> \| undefined | 是 | 卸载消失事件的回调。 |

## setOnFocus

```TypeScript
setOnFocus(callback: Callback<void> | undefined): void
```

设置[onFocus](arkts-commonmethod-c.md#onFocus)获焦事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> \| undefined | 是 | 获焦事件的回调。 |

## setOnHover

```TypeScript
setOnHover(callback: HoverCallback | undefined): void
```

设置[onHover](arkts-commonmethod-c.md#onHover)悬浮事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | HoverCallback \| undefined | 是 | 悬浮事件的回调函数。 |

## setOnKeyEvent

```TypeScript
setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void
```

设置[按键事件]common的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent> \| undefined | 是 | 按键事件的回调函数。 |

## setOnMouse

```TypeScript
setOnMouse(callback: Callback<MouseEvent> | undefined): void
```

设置[onMouse](arkts-commonmethod-c.md#onMouse)鼠标事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MouseEvent> \| undefined | 是 | 鼠标事件的回调函数。 |

## setOnSizeChange

```TypeScript
setOnSizeChange(callback: SizeChangeCallback | undefined): void
```

设置[onSizeChange](arkts-commonmethod-c.md#onSizeChange)组件区域变化事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | SizeChangeCallback \| undefined | 是 | 组件区域变化事件的回调函数。 |

## setOnTouch

```TypeScript
setOnTouch(callback: Callback<TouchEvent> | undefined): void
```

设置[触摸事件](arkts-commonmethod-c.md#onTouch)的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;TouchEvent> \| undefined | 是 | 触摸事件的回调函数。 |

## setOnVisibleAreaApproximateChange

```TypeScript
setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void
```

设置限制回调间隔的 [onVisibleAreaChange](arkts-commonmethod-c.md#onVisibleAreaChange) 可见区域变化事件的回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | VisibleAreaEventOptions | 是 | 可见区域变化相关的参数。 |
| event | VisibleAreaChangeCallback \| undefined | 是 | 可见区域变化事件的回调函数。当组件可见面积与自身面积的比值接近options中设置的阈值时触发该回调。 |

