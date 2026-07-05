# ResourceUsageObserver

```TypeScript
export type ResourceUsageObserver = (resourceType: ResourceType, resourceSize: long, detailInfo?: Record<string, long>) => void
```

定义应用资源使用情况的观察者回调函数，作为 [errorManager.setDefaultResourceUsageObserver]errorManager.setDefaultResourceUsageObserver的入参，用于监听各类资源占用变化， 并支持应用执行自定义资源处理逻辑。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceType | ResourceType | 是 | 表示应用资源超基线的类型。 |
| resourceSize | long | 是 | 表示应用资源超基线的资源使用量。 |
| detailInfo | Record&lt;string, long> | 否 |  |

