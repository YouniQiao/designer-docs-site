# UIServiceExtensionConnectCallback

UIServiceExtensionConnectCallback是UIServiceExtension连接回调接口类，提供UIServiceExtension连接回调数据能力。 > **说明：** > > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onData

```TypeScript
onData(data: Record<string, Object>): void
```

接收UIServiceExtension连接的回调数据。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | 接收UIServiceExtension连接回调数据。 |

## onData

```TypeScript
onData(data: Record<string, RecordData>): void
```

Called back when data is sent.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, RecordData> | Yes | Indicates the received data. |

## onDisconnect

```TypeScript
onDisconnect(): void
```

成功断开UIServiceExtension连接的回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

