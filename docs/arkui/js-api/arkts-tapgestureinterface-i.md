# TapGestureInterface

支持单击、双击和多次点击事件的识别。 > **说明：** > > 当组件同时绑定双击和单击手势且双击手势先绑定时，单击手势会有300ms的延时。

**Inheritance:** TapGestureInterfaceextends: GestureInterface<TapGestureInterface>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: TapGestureParameters): TapGestureInterface
```

创建点击手势对象。继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)。 触发点击手势事件的设备类型为键盘或手柄时，事件的[SourceTool]SourceTool值为Unknown，事件的[SourceType]SourceType值为KEY或JOYSTICK。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TapGestureParameters | No | 点击手势的相关参数。 [since 12] |

**Return value:**

| Type | Description |
| --- | --- |
| TapGestureInterface |  |

## onAction

```TypeScript
onAction(event: (event: GestureEvent) => void): TapGestureInterface
```

点击手势识别成功回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | Yes | 手势事件回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| TapGestureInterface |  |

