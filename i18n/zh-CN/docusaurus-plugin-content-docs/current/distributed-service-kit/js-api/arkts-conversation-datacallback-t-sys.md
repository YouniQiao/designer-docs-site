# DataCallback

```TypeScript
type DataCallback = (networkId: string, msg: ArrayBuffer) => void
```

Callback function invoked when a message is received.

**起始版本：** 26.1.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | NetworkId of the source device that sent the message. |
| msg | ArrayBuffer | 是 | Message content received as a string. |

