---
last_update:
  date: 2026-07-04
---

# UserBlowData (System API)

Defines user blow data.

**Inheritance/Implementation:** UserBlowData extends [UserStatusData](arkts-multimodalawareness-userstatusdata-i-sys.md#userstatusdata)

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userStatus } from '@ohos.multimodalAwareness.userStatus';
```

## blowDirection

```TypeScript
blowDirection?: number
```

Blow direction. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## emotion

```TypeScript
emotion?: number
```

User emotion level. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## facePosition

```TypeScript
facePosition?: number[]
```

Face position relative to screen.

**Type:** number[]

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

## isGazeStatus

```TypeScript
isGazeStatus?: boolean
```

Whether user is gazing at screen.

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

## strengthLevel

```TypeScript
strengthLevel?: number
```

Blow strength level. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

