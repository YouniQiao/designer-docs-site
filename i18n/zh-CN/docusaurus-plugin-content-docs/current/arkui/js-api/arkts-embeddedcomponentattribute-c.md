# EmbeddedComponentAttribute

Define the attribute functions of EmbeddedComponent.

**继承实现关系：** EmbeddedComponentAttribute继承自：CommonMethod<EmbeddedComponentAttribute>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onDrawReady

```TypeScript
onDrawReady(callback: Callback<void>)
```

Callback called when the EmbeddedUIExtensionAbility draw the first frame.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 |  |

## onError

```TypeScript
onError(callback: import('../api/@ohos.base').ErrorCallback)
```

Called when some error occurred.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | 是 |  |

## onTerminated

```TypeScript
onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;TerminationInfo> | 是 |  |

