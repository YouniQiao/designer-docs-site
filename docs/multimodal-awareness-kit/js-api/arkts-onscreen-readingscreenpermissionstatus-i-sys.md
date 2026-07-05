# ReadingScreenPermissionStatus

Returns the status of the permission for reading screen information.

**Since:** 23

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { onScreen } from '@kit.MultimodalAwarenessKit';
```

## readingCode

```TypeScript
readingCode?: int
```

If the screen information cannot be read, the corresponding status code will be returned.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

## readingState

```TypeScript
readingState: int
```

Whether screen reading is allowed. **0**: no; **1**: yes.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalAwareness.OnScreenAwareness

**System API:** This is a system API.

