# Event (System API)

Describes the SSAP event.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## eventUuid

```TypeScript
eventUuid: string
```

The UUID of a event instance.
The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
<br>NearLink standard UUIDs are not allowed.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## parameter

```TypeScript
parameter?: ArrayBuffer
```

The parameter of a event instance.

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the {@link Service} instance to which the event belongs
The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-),
for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.
<br>NearLink standard UUIDs are not allowed.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

