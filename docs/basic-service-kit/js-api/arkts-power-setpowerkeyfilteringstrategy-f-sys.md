# setPowerKeyFilteringStrategy

## setPowerKeyFilteringStrategy

```TypeScript
function setPowerKeyFilteringStrategy(strategy: PowerKeyFilteringStrategy): void
```

设置电源键过滤策略，在电源服务订阅电源键事件后，用于配置电源键事件的处理方式。 电源键过滤策略见[power.PowerKeyFilteringStrategy](arkts-power-powerkeyfilteringstrategy-e.md#PowerKeyFilteringStrategy)接口。

**Since:** 21

**Required permissions:** 

 ohos.permission.POWER_MANAGER

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | PowerKeyFilteringStrategy | Yes | 电源键过滤策略。该参数必须为枚举类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 4900101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    power.setPowerKeyFilteringStrategy(power.PowerKeyFilteringStrategy.LONG_PRESS_FILTERING_ONCE);
} catch(err) {
    console.error('setPowerKeyFilteringStrategy failed, err: ' + err);
}

```

