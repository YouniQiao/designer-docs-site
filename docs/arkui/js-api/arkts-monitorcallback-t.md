# MonitorCallback

```TypeScript
export declare type MonitorCallback = (monitorValue: IMonitor) => void
```

参数为[IMonitor]IMonitor类型的监听回调函数。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monitorValue | IMonitor | Yes | 回调函数传入的变化信息。 |

