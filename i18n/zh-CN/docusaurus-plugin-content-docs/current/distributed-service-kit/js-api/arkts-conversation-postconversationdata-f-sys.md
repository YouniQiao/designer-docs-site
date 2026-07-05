# postConversationData

## postConversationData

```TypeScript
function postConversationData(
    deviceId: string,
    bundleName: string,
    abilityName: string,
    msg: ArrayBuffer
): Promise<void>
```

Posts conversation data to a specified device. This API sends a message to the target device identified by its networkId or udid. The message will be delivered to the specified bundle and ability on the remote device.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | This parameter accepts networkId or udid of the target device. This ID  can be obtained by calling [getTrustedDevices()]conversation.getTrustedDevices. |
| bundleName | string | 是 | Name of the bundle to which the message will be delivered. This must match  the bundle name of an application installed on the target device that has registered a conversation listener. |
| abilityName | string | 是 | Name of the ability within the bundle that will receive the message. This must  match an ability that has registered a conversation listener with the corresponding bundle name. |
| msg | ArrayBuffer | 是 | Message content to be sent. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The deviceId, bundleName, abilityName or msg is invalid  or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |
| 2004001 | Remote not support. |
| 2004002 | Duplicate calls, previous call still in progress. |
| 2004003 | Send data failed. |
| 2004004 | Wait remote ack timeout. |

