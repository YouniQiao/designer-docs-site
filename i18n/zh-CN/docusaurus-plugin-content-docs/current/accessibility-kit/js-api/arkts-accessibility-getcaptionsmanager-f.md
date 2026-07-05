# getCaptionsManager

## getCaptionsManager

```TypeScript
function getCaptionsManager(): CaptionsManager
```

Obtains a **CaptionsManager** instance.

**起始版本：** 8

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CaptionsManager | Captions configuration. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let captionsManager = accessibility.getCaptionsManager();

```

