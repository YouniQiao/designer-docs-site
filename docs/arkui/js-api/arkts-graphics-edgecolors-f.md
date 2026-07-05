# edgeColors

## edgeColors

```TypeScript
export function edgeColors(all: number): Edges<number>
```

用于生成边框颜色均设置为传入值的边框颜色对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| all | number | Yes | 边框颜色，ARGB格式，示例：0xffff00ff。 取值范围：[0, 0xffffffff] |

**Return value:**

| Type | Description |
| --- | --- |
| Edges&lt;number> | 边框颜色均设置为传入值的边框颜色对象。 |

