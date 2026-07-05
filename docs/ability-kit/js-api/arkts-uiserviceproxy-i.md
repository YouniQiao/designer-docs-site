# UIServiceProxy

UIServiceProxy提供代理能力，可以从UIServiceExtension客户端发送数据到服务端。 > **说明：** > > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## sendData

```TypeScript
sendData(data: Record<string, Object>): void
```

给UIServiceExtension服务端发送数据。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | 待发送给UIServiceExtension服务端的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

## sendData

```TypeScript
sendData(data: Record<string, RecordData>): void
```

给UIServiceExtension服务端发送数据。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | Yes | 待发送给UIServiceExtension服务端的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. Possible cause: Connect to stub failed. |

