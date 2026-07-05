# ResourceUsageObserver

```TypeScript
export type ResourceUsageObserver = (resourceType: ResourceType, resourceSize: long, detailInfo?: Record<string, long>) => void
```

定义应用资源使用情况的观察者回调函数，作为 [errorManager.setDefaultResourceUsageObserver]errorManager.setDefaultResourceUsageObserver的入参，用于监听各类资源占用变化， 并支持应用执行自定义资源处理逻辑。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceType | ResourceType | Yes | 表示应用资源超基线的类型。 |
| resourceSize | long | Yes | 表示应用资源超基线的资源使用量。 |
| detailInfo | Record&lt;string, long> | no |  |

