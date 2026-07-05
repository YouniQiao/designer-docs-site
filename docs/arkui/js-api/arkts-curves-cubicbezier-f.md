# cubicBezier

## cubicBezier

```TypeScript
function cubicBezier(x1: number, y1: number, x2: number, y2: number): string
```

构造三阶贝塞尔曲线对象，曲线的值必须处于0-1之间。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves.cubicBezierCurve]curves.cubicBezierCurve替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** curves.cubicBezierCurve

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x1 | number | Yes | -Value range [0, 1].  Note: If the value is less than 0, 0 is used. If the value is greater than 1, 1 is used. |
| y1 | number | Yes | -Value range (-∞, +∞). |
| x2 | number | Yes | -Value range [0, 1].  Note: If the value is less than 0, 0 is used. If the value is greater than 1, 1 is used. |
| y2 | number | Yes | -Value range (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回三阶贝塞尔曲线对象。 |

