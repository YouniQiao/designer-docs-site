# unregisterConversationListener

## unregisterConversationListener

```TypeScript
function unregisterConversationListener(bundleName: string, abilityName: string): void
```

Unregisters the conversation listener for the specified bundle and ability. After calling this API, the application will no longer receive messages. If no listener was previously registered for the given bundle and ability, this API returns success without any effect.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Name of the bundle whose listener will be unregistered. |
| abilityName | string | 是 | Name of the ability within the bundle whose listener will be unregistered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The bundleName or abilityName is invalid or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

