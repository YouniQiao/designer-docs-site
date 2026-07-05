# NodeIdentity

```TypeScript
export declare type NodeIdentity = string | number
```

定义节点标识类型。对于string类型，代表指定组件id，该id通过通用属性[id]CommonMethod#id设置。对于number类型， 代表系统分配的唯一标识的节点UniqueID，可通过[getUniqueId](arkts-framenode-c.md#getUniqueId)获取。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| string |  |
| number |  |

