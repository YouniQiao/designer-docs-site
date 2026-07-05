# UserEmotionData

Defines user emotion data.

**Inheritance:** UserEmotionDataextends: UserStatusData.

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userStatus } from '@kit.MultimodalAwarenessKit';
```

## emotionNonRealTime

```TypeScript
emotionNonRealTime ?: int[]
```

User non-real-time emotion level.

**Type:** int[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## linearAcceleration

```TypeScript
linearAcceleration?: double[][]
```

Linear acceleration of user motion status.

**Type:** double[][]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## isRealTime

```TypeScript
isRealTime?: boolean
```

Whether emotion data is real-time.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## confidence

```TypeScript
confidence?: int
```

User emotion confidence. The value range is all integers.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## emotionRealTime

```TypeScript
emotionRealTime ?: int
```

User real-time emotion level. The value range is all integers.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## gravityAcceleration

```TypeScript
gravityAcceleration?: double[]
```

Gravity acceleration of user motion status.

**Type:** double[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

