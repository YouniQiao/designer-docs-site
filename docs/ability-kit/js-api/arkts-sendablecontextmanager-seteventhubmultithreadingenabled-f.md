# setEventHubMultithreadingEnabled

## setEventHubMultithreadingEnabled

```TypeScript
function setEventHubMultithreadingEnabled(context: common.Context, enabled: boolean): void
```

设置[Context]./app/context中的[EventHub]./application/EventHub:EventHub是否启用跨线程通信能力。 > **说明：** > > - 当多个Context进行通信时，需要调用该接口设置每个Context都支持EventHub跨线程数据传递功能。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | Context对象。其中，Eventhub支持传递的序列化数据类型参见  [序列化支持的类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)，数据大小不超过16MB。 |
| enabled | boolean | Yes | 表示是否启用Context的EventHub跨线程通信能力。true表示启用，false表示禁用。 |

