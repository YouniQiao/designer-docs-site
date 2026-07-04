---
last_update:
  date: 2026-07-04
---

# UserGesturesData (System API)

Defines user gesture data.

**Inheritance/Implementation:** UserGesturesData extends [UserFacesData](arkts-multimodalawareness-userfacesdata-i-sys.md#userfacesdata)

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userStatus } from '@ohos.multimodalAwareness.userStatus';
```

## directionAngle

```TypeScript
directionAngle?: number[]
```

Angle between user gesture and screen directions.

**Type:** number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## gestureSpeed

```TypeScript
gestureSpeed?: number[]
```

Gesture speed.

**Type:** number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## handPosition

```TypeScript
handPosition?: number[]
```

Hand position relative to screen.

**Type:** number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## handType

```TypeScript
handType?: number
```

User static gesture type. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## isHandExist

```TypeScript
isHandExist?: boolean
```

Whether user hand exists.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

## motionGesture

```TypeScript
motionGesture?: number
```

User dynamic gesture type. The value range is all integers.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

**System API:** This is a system API.

