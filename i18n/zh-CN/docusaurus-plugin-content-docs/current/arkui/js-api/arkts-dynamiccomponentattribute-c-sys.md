# DynamicComponentAttribute

Define the attribute functions of DynamicComponent.

**继承实现关系：** DynamicComponentAttribute继承自：CommonMethod<DynamicComponentAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## onError

```TypeScript
onError(
        callback: ErrorCallback
    )
```

Called when the dynamic component is error.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | called when some error occurred except disconnected from DynamicAbility. |

