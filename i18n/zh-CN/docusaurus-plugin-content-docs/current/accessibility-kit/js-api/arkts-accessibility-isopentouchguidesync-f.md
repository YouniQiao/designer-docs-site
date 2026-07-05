# isOpenTouchGuideSync

## isOpenTouchGuideSync

```TypeScript
function isOpenTouchGuideSync(): boolean
```

Checks whether touch guide mode is enabled.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Vision

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether touch guide mode is enabled. Returns true if touch guide mode is enabled; returns  false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

let status: boolean = accessibility.isOpenTouchGuideSync();

```

