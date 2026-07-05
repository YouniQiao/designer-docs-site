# EventCallbackInfo

Defines the event callback information.

**Since:** 18

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## msg

```TypeScript
msg?: string
```

Received message.

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## image

```TypeScript
image?: image.PixelMap
```

Received image.

**Type:** image.PixelMap

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## reason

```TypeScript
reason?: DisconnectReason
```

Disconnection reason.

**Type:** DisconnectReason

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## data

```TypeScript
data?: ArrayBuffer
```

Received byte stream.

**Type:** ArrayBuffer

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## sessionId

```TypeScript
sessionId: int
```

Collaboration session ID.

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

