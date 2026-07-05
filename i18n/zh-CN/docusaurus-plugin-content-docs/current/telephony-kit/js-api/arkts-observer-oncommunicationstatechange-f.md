# onCommunicationStateChange

## onCommunicationStateChange

```TypeScript
function onCommunicationStateChange(callback: Callback<boolean>, options?: ObserverOptions): void
```

This API uses an asynchronous callback to return the result.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Telephony.StateRegistry

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to return the result.  The value true indicates 5A state, and false indicates not 5A state. |
| options | ObserverOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

