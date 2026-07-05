# spring

## spring

```TypeScript
function spring(velocity: number, mass: number, stiffness: number, damping: number): string
```

构造弹簧曲线对象。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves.springCurve]curves.springCurve替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** curves.springCurve

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | 初始速度。是由外部因素对弹性动效产生的影响参数，其目的是保证对象从之前的运动状态平滑地过渡到弹性动效。 |
| mass | number | Yes | 质量。弹性系统的受力对象，会对弹性系统产生惯性影响。质量越大，震荡的幅度越大，恢复到平衡位置的速度越慢。 |
| stiffness | number | Yes | 刚度。是物体抵抗施加的力而形变的程度。在弹性系统中，刚度越大，抵抗变形的能力越强，恢复到平衡位置的速度就越快。 |
| damping | number | Yes | 阻尼。是一个纯数，无真实的物理意义，用于描述系统在受到扰动后震荡及衰减的情形。阻尼越大，弹性运动的震荡次数越少、震荡幅度越小。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回弹簧曲线对象。 |

