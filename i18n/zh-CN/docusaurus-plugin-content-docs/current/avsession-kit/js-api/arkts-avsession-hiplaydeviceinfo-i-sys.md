# HiPlayDeviceInfo

HiPlay Device Information Definition

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## castMode

```TypeScript
castMode?: int
```

HiPlay device cast mode. 1: DEVICE_LEVEL_CAST 2: APP_LEVEL_CAST

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## castUid

```TypeScript
castUid?: int
```

HiPlay device current cast uid.

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

## supportCastMode

```TypeScript
supportCastMode?: int
```

HiPlay device supports cast mode. when device both support device level cast and app level cast, support cast mode is DEVICE_LEVEL_CAST| APP_LEVEL_CAST 1: DEVICE_LEVEL_CAST 2: APP_LEVEL_CAST

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

