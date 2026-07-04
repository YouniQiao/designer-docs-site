---
last_update:
  date: 2026-07-04
---

# UserEmotionData (System API)

Defines user emotion data.

**Inheritance/Implementation:** UserEmotionData extends [UserStatusData](arkts-multimodalawareness-userstatusdata-i-sys.md#userstatusdata)

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userStatus } from '@ohos.multimodalAwareness.userStatus';
```

## confidence

```TypeScript
confidence?: number
```

User emotion confidence. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## emotionNonRealTime

```TypeScript
emotionNonRealTime ?: number[]
```

User non-real-time emotion level.

**Type:** number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## emotionRealTime

```TypeScript
emotionRealTime ?: number
```

User real-time emotion level. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## gravityAcceleration

```TypeScript
gravityAcceleration?: number[]
```

Gravity acceleration of user motion status.

**Type:** number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## isRealTime

```TypeScript
isRealTime?: boolean
```

Whether emotion data is real-time.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## linearAcceleration

```TypeScript
linearAcceleration?: number[][]
```

Linear acceleration of user motion status.

**Type:** number[][]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

