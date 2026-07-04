# AVSessionDescriptor (System API)

The description of the session

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { avSession } from '@ohos.multimedia.avsession';
```

## elementName

```TypeScript
elementName: ElementName
```

The elementName of the ability that created this session. See {@link ElementName} in bundle/elementName.d.ts

**Type:** ElementName

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## isActive

```TypeScript
isActive: boolean
```

Session active state

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## isTopSession

```TypeScript
isTopSession: boolean
```

Is it the top priority session

**Type:** boolean

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## outputDevice

```TypeScript
outputDevice: OutputDeviceInfo
```

The current output device information. It will be undefined if this is a local session.

**Type:** OutputDeviceInfo

**Since:** 9

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## sessionId

```TypeScript
sessionId: string
```

Unique ID of the session

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## sessionTag

```TypeScript
sessionTag: string
```

The session tag set by the application

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

## type

```TypeScript
type: AVSessionType
```

Session type, currently supports audio or video

**Type:** AVSessionType

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

