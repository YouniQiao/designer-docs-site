# on

## on('stateChanged')

```TypeScript
function on(type: 'stateChanged', callback: Callback<ServiceState>): void
```

Register the service state changed event.

**起始版本：** 18

**系统能力：** SystemCapability.Communication.SecureElement

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChanged' | 是 | The type to register. |
| callback | Callback&lt;ServiceState> | 是 | The callback used to listen for the state change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

