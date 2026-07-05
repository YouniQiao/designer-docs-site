# JfifPropertyKey

```TypeScript
enum JfifPropertyKey
```

表示JFIF图片信息的枚举。 > **说明：** > > 返回字段类型具体参考[JfifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-JfifMetadata.md)。 > | 名称 | 值 | 说明 | > | ---- | -- | ---- | > | DENSITY_UNIT | 'JfifDensityUnit' | 用于定义JfifXDensity（水平像素密度）和JfifYDensity（垂直像素密度）的物理度量单位。 - 0表示无单位（仅像素宽高比）。 - 1表示每英寸像素数（DPI）。 - 2表示每厘米像素数（DPC）。 该值为正整数。 | | X_DENSITY | 'JfifXDensity' | JFIF图像X方向密度。 | | Y_DENSITY | 'JfifYDensity' | JFIF图像Y方向密度。 | | VERSION | 'JfifVersion' | JFIF图像版本。 | | IS_PROGRESSIVE | 'JfifIsProgressive' | 图像是否采用渐进式编码，即图像在加载过程中按多次扫描逐步提升清晰度。true表示采用，false表示不采用。 |

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.Core

## X_DENSITY

```TypeScript
X_DENSITY = 'JfifXDensity'
```

JFIF x density.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## Y_DENSITY

```TypeScript
Y_DENSITY = 'JfifYDensity'
```

JFIF y density.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## DENSITY_UNIT

```TypeScript
DENSITY_UNIT = 'JfifDensityUnit'
```

JFIF density unit.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## VERSION

```TypeScript
VERSION = 'JfifVersion'
```

JFIF version.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## IS_PROGRESSIVE

```TypeScript
IS_PROGRESSIVE = 'JfifIsProgressive'
```

whether the JFIF image is progressive.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

