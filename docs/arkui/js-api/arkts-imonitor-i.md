# IMonitor

定义IMonitor接口

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value<T>(path?: string): IMonitorValue<T> | undefined
```

Return the pair of the value before the most recent change and current value for given path. If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| IMonitorValue&lt;T> |  |

## dirty

```TypeScript
dirty: Array<string>
```

变化的状态变量路径数组集合

**Type:** Array<string>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

