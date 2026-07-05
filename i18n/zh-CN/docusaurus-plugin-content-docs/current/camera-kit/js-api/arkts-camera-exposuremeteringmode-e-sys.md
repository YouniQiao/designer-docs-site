# ExposureMeteringMode

```TypeScript
enum ExposureMeteringMode
```

Enumerates the exposure metering modes.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## MATRIX

```TypeScript
MATRIX = 0
```

Matrix metering mode. A wide area of the screen is selected, which is ideal for shooting natural landscapes.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## CENTER

```TypeScript
CENTER = 1
```

Center-weighted metering mode. Metering is performed on the entire image, with the center allocated with the maximum weight, which is ideal for shooting portraits.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## SPOT

```TypeScript
SPOT = 2
```

Spot metering mode. Metering is performed around 2.5% of the metering points, focusing on the light in a specific small area, such as the eyes of the subject.

**起始版本：** 12

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## CENTER_HIGHLIGHT_WEIGHTED

```TypeScript
CENTER_HIGHLIGHT_WEIGHTED = 3
```

Center-weighted and highlight metering mode. This mode focuses on the highlight area near the center of the screen.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

