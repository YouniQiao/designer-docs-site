# UIServiceHostProxy

UIServiceHostProxy提供代理能力，可以将数据从 [UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility服务端发送到客户端。 > **说明：** > > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## sendData

```TypeScript
sendData(data: Record<string, Object>): void
```

从[UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility服务端给客户端发送数据。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | 待发送到  [UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility客户端的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## sendData

```TypeScript
sendData(data: Record<string, RecordData>): void
```

从[UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility服务端给客户端发送数据。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | Yes | 待发送到  [UIServiceExtension]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility客户端的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

