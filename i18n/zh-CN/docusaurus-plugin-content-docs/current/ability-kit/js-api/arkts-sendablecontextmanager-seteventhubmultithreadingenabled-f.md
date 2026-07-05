# setEventHubMultithreadingEnabled

## setEventHubMultithreadingEnabled

```TypeScript
function setEventHubMultithreadingEnabled(context: common.Context, enabled: boolean): void
```

设置[Context]./app/context中的[EventHub]./application/EventHub:EventHub是否启用跨线程通信能力。 > **说明：** > > - 当多个Context进行通信时，需要调用该接口设置每个Context都支持EventHub跨线程数据传递功能。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.Context | 是 | Context对象。其中，Eventhub支持传递的序列化数据类型参见  [序列化支持的类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)，数据大小不超过16MB。 |
| enabled | boolean | 是 | 表示是否启用Context的EventHub跨线程通信能力。true表示启用，false表示禁用。 |

