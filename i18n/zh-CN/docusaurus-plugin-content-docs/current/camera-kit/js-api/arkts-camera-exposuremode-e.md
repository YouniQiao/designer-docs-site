# ExposureMode

```TypeScript
enum ExposureMode
```

Enumerates the exposure modes.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## EXPOSURE_MODE_UNSPECIFIED

```TypeScript
EXPOSURE_MODE_UNSPECIFIED = -1
```

Unspecified exposure.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## EXPOSURE_MODE_LOCKED

```TypeScript
EXPOSURE_MODE_LOCKED = 0
```

Exposure locked. The metering point cannot be set. After this mode is used, the exposure will be locked by default for each photo capture.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## EXPOSURE_MODE_AUTO

```TypeScript
EXPOSURE_MODE_AUTO = 1
```

Auto exposure. The metering point can be set by calling [AutoExposure.setMeteringPoint]camera.AutoExposure.setMeteringPoint. After this mode is used, it takes effect only for the first photo capture.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## EXPOSURE_MODE_CONTINUOUS_AUTO

```TypeScript
EXPOSURE_MODE_CONTINUOUS_AUTO = 2
```

Continuous auto exposure. The metering point cannot be set. After this mode is used, the camera system automatically adjusts the exposure based on the environment changes each time.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## EXPOSURE_MODE_MANUAL

```TypeScript
EXPOSURE_MODE_MANUAL = 3
```

Manual exposure mode.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

