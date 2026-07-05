# AppEventPackage

Defines parameters of an **AppEventPackage** object. This API is used to obtain detail information about an event package, which is obtained using the [takeNext]hiAppEvent.AppEventPackageHolder#takeNext() API.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## data

```TypeScript
data: string[]
```

Event data in the event package. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**类型：** string[]

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## size

```TypeScript
size: int
```

Event size of the event package, in bytes. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## packageId

```TypeScript
packageId: int
```

Event package ID, which is named from **0** in ascending order. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## row

```TypeScript
row: int
```

Number of events in the event package. **Atomic service API**: This parameter can be used in atomic services since API version 11.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appEventInfos

```TypeScript
appEventInfos: Array<AppEventInfo>
```

Event object group. **Atomic service API**: This parameter can be used in atomic services since API version 12.

**类型：** Array<AppEventInfo>

**起始版本：** 12

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

