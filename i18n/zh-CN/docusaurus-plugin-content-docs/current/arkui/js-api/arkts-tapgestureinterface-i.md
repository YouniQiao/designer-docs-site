# TapGestureInterface

支持单击、双击和多次点击事件的识别。 > **说明：** > > 当组件同时绑定双击和单击手势且双击手势先绑定时，单击手势会有300ms的延时。

**继承实现关系：** TapGestureInterface继承自：GestureInterface<TapGestureInterface>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value?: TapGestureParameters): TapGestureInterface
```

创建点击手势对象。继承自[GestureInterface<T>](arkts-gesture.md#GestureInterface)。 触发点击手势事件的设备类型为键盘或手柄时，事件的[SourceTool]SourceTool值为Unknown，事件的[SourceType]SourceType值为KEY或JOYSTICK。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | TapGestureParameters | 否 | 点击手势的相关参数。 [since 12] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TapGestureInterface |  |

## onAction

```TypeScript
onAction(event: (event: GestureEvent) => void): TapGestureInterface
```

点击手势识别成功回调。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (event: GestureEvent) => void | 是 | 手势事件回调函数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TapGestureInterface |  |

