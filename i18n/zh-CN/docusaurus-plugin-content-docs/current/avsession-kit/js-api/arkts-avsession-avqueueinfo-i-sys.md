# AVQueueInfo

The play list information definition.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## avQueueImage

```TypeScript
avQueueImage: image.PixelMap | string
```

The artwork of play list, can be a {@link PixelMap} or a URI formatted string,

**类型：** image.PixelMap | string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## avQueueName

```TypeScript
avQueueName: string
```

The name of play list

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## avQueueId

```TypeScript
avQueueId: string
```

The id of play list

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
bundleName: string
```

The bundle name of application which current play list belongs to.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

## lastPlayedTime

```TypeScript
lastPlayedTime?: long
```

The time when the user last played the playlist. The time format can be system, such as 1611081385000, it means 2021-01-20 02:36:25.

**类型：** long

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

