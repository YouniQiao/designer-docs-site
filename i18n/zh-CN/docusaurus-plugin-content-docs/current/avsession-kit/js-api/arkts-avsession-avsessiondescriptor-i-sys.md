# AVSessionDescriptor

The description of the session

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## isTopSession

```TypeScript
isTopSession: boolean
```

Is it the top priority session

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## outputDevice

```TypeScript
outputDevice: OutputDeviceInfo
```

The current output device information. It will be undefined if this is a local session.

**类型：** OutputDeviceInfo

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## sessionTag

```TypeScript
sessionTag: string
```

The session tag set by the application

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## sessionId

```TypeScript
sessionId: string
```

Unique ID of the session

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## isActive

```TypeScript
isActive: boolean
```

Session active state

**类型：** boolean

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: AVSessionType
```

Session type, currently supports audio or video

**类型：** AVSessionType

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

## elementName

```TypeScript
elementName: ElementName
```

The elementName of the ability that created this session. See {@link ElementName} in bundle/elementName.d.ts

**类型：** ElementName

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

