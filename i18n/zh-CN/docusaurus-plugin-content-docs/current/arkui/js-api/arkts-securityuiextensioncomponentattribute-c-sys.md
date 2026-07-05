# SecurityUIExtensionComponentAttribute

Define the attribute functions of UIExtensionComponent.

**继承实现关系：** SecurityUIExtensionComponentAttribute继承自：CommonMethod<SecurityUIExtensionComponentAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## onError

```TypeScript
onError(
    callback: import('../api/)
```

called when some error occurred except disconnected from UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | 是 | called when some error occurred except disconnected from UIExtensionAbility. |

## onReceive

```TypeScript
onReceive(
    callback: import('../api/)
```

called when data received from UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;{ [key: string]: Object }> | 是 | called when data received from UIExtensionAbility. |

## onRemoteReady

```TypeScript
onRemoteReady(
    callback: import('../api/)
```

callback called when remote UIExtensionAbility object is <br/>ready for receive data

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;SecurityUIExtensionProxy> | 是 | When the remote UIExtensionAbility object is ready to receive data |

## onTerminated

```TypeScript
onTerminated(callback: Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;TerminationInfo> | 是 |  |

