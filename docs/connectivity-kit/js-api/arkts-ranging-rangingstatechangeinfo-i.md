# RangingStateChangeInfo

Describes the ranging state change information.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## cause

```TypeScript
cause: RangingStoppedCause
```

Cause of ranging stop.

**Type:** RangingStoppedCause

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## handle

```TypeScript
handle?: int
```

Indicates the handle number of ranging monitoring. The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## state

```TypeScript
state: RangingState
```

Ranging state.

**Type:** RangingState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## deviceId

```TypeScript
deviceId?: string
```

Address of the ranging device.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

