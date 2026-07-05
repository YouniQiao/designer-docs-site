# steps

## steps

```TypeScript
function steps(count: number, end: boolean): string
```

构造阶梯曲线对象。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves. stepsCurve]curves.stepsCurve替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** curves.stepsCurve

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | 阶梯的数量，需要为正整数。 |
| end | boolean | Yes | 在每个间隔的起点或是终点发生阶跃变化。 -true：在终点发生阶跃变化。 -false：在起点发生阶跃变化。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回阶梯曲线对象。 |

