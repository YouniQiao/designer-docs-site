# Location

Describes the event location.

**起始版本：** 10

**系统能力：** SystemCapability.Applications.CalendarData

## 导入模块

```TypeScript
import { calendarManager } from '@kit.CalendarKit';
```

## latitude

```TypeScript
latitude?: number
```

Latitude of the location. The value range is [-90, 90]. The default value is **undefined**. If the value is out of the range, the map cannot be displayed properly.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## location

```TypeScript
location?: string
```

Location, with a maximum of 5,000 characters. If this parameter is not specified, the default value is an empty string.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

## longitude

```TypeScript
longitude?: number
```

Longitude of the location. The value range is [-180, 180]. The default value is **undefined**. If the value is out of the range, the map cannot be displayed properly.

**类型：** number

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.CalendarData

