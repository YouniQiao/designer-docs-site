# registerConversationListener

## registerConversationListener

```TypeScript
function registerConversationListener(
    bundleName: string,
    abilityName: string,
    dataCallback: DataCallback,
  ): void
```

Registers a conversation listener to receive messages from any trusted device. Once registered, the specified callback function will be invoked whenever a message is received by the specified bundle and ability combination. Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener will replace any previously registered listener for the same bundle and ability.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Name of the bundle for which messages will be received. This must match the  bundle name of the local application. |
| abilityName | string | 是 | Name of the ability within the bundle that will receive the messages. This must  match an ability name in the local application. |
| dataCallback | DataCallback | 是 | Callback function called when a message is received. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The bundleName, abilityName or dataCallback is  invalid or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

