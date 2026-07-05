# LevelOrder

弹窗层级，可以控制弹窗显示的顺序。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## clamp

```TypeScript
static clamp(order: number): LevelOrder
```

创建指定顺序的弹窗层级。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| order | number | Yes | 弹窗显示顺序。取值范围为[-100000.0, 100000.0]，如果值小于-100000.0则设置为-100000.0，如果值大于100000.0则设置为100000.  0。 |

**Return value:**

| Type | Description |
| --- | --- |
| LevelOrder | 返回当前对象实例。 |

## getOrder

```TypeScript
getOrder(): number
```

获取弹窗显示顺序。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回显示顺序数值。 |

