# SurfaceParam (System API)

Surface configuration parameters.

**Since:** 18

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@ohos.distributedsched.abilityConnectionManager';
```

## flip

```TypeScript
flip?: FlipOptions
```

This value indicates whether the video is reversed.

**Type:** FlipOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## format

```TypeScript
format?: VideoPixelFormat
```

Video PixelFormat, this option must be configured on the sender. Must be set before stream starts and cannot update once set.

**Type:** VideoPixelFormat

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## height

```TypeScript
height: number
```

Encoding length. Must be set before stream starts and cannot update once set.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## rotation

```TypeScript
rotation?: number
```

This value identifies the rotation angle of the video. the range of rotation angle should be {0, 90, 180, 270}, default is 0

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## width

```TypeScript
width: number
```

Encoding width. Must be set before stream starts and cannot update once set.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

