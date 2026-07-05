# AbilityComponentAttribute

Define the attribute functions of ability component.

**继承实现关系：** AbilityComponentAttribute继承自：CommonMethod<AbilityComponentAttribute>。

**起始版本：** 9

**废弃版本：** 10

**替代接口：** UIExtensionComponentAttribute

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## onConnect

```TypeScript
onConnect(callback: () => void)
```

Called when the component is connected to ability.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** UIExtensionComponent#onRemoteReady

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | () => void | 是 | A callback instance used when connected. |

## onDisconnect

```TypeScript
onDisconnect(callback: () => void)
```

Called when the component is disconnected.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** UIExtensionComponent#onRelease

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | () => void | 是 | A callback instance used when disconnected. |

