# GetLocationTypeOption

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

## 导入模块

```TypeScript
import { GetLocationTypeOption,SubscribeLocationOption,GeolocationResponse,GetLocationTypeResponse,GetLocationOption } from '@kit.LocationKit';
```

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the location types fail to be obtained.

**类型：** (data: string, code: number) => void

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

## success

```TypeScript
success?: (data: GetLocationTypeResponse) => void
```

Called when the location types are obtained.

**类型：** (data: GetLocationTypeResponse) => void

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

## complete

```TypeScript
complete?: () => void
```

Called when the execution is completed.

**类型：** () => void

**起始版本：** 3

**废弃版本：** 9

**系统能力：** SystemCapability.Location.Location.Lite

