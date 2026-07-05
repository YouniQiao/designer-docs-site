# UIExtensionComponentAttribute

Define the attribute functions of UIExtensionComponent.

**继承实现关系：** UIExtensionComponentAttribute继承自：CommonMethod<UIExtensionComponentAttribute>。

**起始版本：** 10

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## onDrawReady

```TypeScript
onDrawReady(callback: Callback<void>)
```

Callback called when the UIExtensionAbility draw the first frame.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 |  |

## onError

```TypeScript
onError(
    callback: import('../api/)
```

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | 是 | - called when some error occurred except disconnected from UIExtensionAbility. |

## onReceive

```TypeScript
onReceive(callback: ReceiveCallback)
```

AnonyMous Object Rectification

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReceiveCallback | 是 | Called when data received from UIExtensionAbility |

## onRelease

```TypeScript
onRelease(
    callback: import('../api/)
```

**起始版本：** 10

**废弃版本：** 12

**替代接口：** UIExtensionComponentAttribute#onTerminated

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;number> | 是 | - number returned from callback function if disconnected from UIExtensionAbility, 0 means the  UIExtensionAbility is terminate by itself, otherwise the connect is broken abnormal. |

## onRemoteReady

```TypeScript
onRemoteReady(
    callback: import('../api/)
```

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;UIExtensionProxy> | 是 | - callback called when remote UIExtensionAbility object is  ready for receive data |

## onResult

```TypeScript
onResult(
    callback: import('../api/code: number;
      want?: import('../api/}>
  )
```

**起始版本：** 10

**废弃版本：** 12

**替代接口：** UIExtensionComponentAttribute#onTerminated

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;{
      code: number;
      want?: import('../api/@ohos.app.ability.Want').default;
    }> | 是 | - called when the UIExtensionAbility is terminated with result data. |

## onTerminated

```TypeScript
onTerminated(callback: Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;TerminationInfo> | 是 |  |

