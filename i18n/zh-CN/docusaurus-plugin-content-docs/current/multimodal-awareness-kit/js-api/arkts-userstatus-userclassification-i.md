# UserClassification

Defines the user age group detection result.

**起始版本：** 20

**废弃版本：** 24

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

## 导入模块

```TypeScript
import { userStatus } from '@kit.MultimodalAwarenessKit';
```

## confidence

```TypeScript
confidence?: float
```

Confidence of the detection result. The value is a floating point number ranging from 0 to 1. A larger value indicates a higher confidence.

**类型：** float

**起始版本：** 20

**废弃版本：** 24

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

## ageGroup

```TypeScript
ageGroup?: UserAgeGroup
```

User age group, for example, child or adult.

**类型：** UserAgeGroup

**起始版本：** 20

**废弃版本：** 24

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

