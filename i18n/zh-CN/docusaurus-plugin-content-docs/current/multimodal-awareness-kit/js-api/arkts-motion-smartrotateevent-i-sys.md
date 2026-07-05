# SmartRotateEvent

The basic data structure of the smart rotate sensor event.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## logicalOrientation

```TypeScript
logicalOrientation?: LogicalOrientation
```

The logical orientation adjusted by smart algorithms.

**类型：** LogicalOrientation

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**系统接口：** 此接口为系统接口。

## physicalOrientation

```TypeScript
physicalOrientation: PhysicalOrientation
```

The physical orientation reported by the gravity sensor.

**类型：** PhysicalOrientation

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.Motion

**系统接口：** 此接口为系统接口。

