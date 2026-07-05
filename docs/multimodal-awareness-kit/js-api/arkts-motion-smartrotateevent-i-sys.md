# SmartRotateEvent

The basic data structure of the smart rotate sensor event.

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## logicalOrientation

```TypeScript
logicalOrientation?: LogicalOrientation
```

The logical orientation adjusted by smart algorithms.

**Type:** LogicalOrientation

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

## physicalOrientation

```TypeScript
physicalOrientation: PhysicalOrientation
```

The physical orientation reported by the gravity sensor.

**Type:** PhysicalOrientation

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.Motion

**System API:** This is a system API.

