# PixelMapFormat

```TypeScript
export declare enum PixelMapFormat
```

Enumerates pixel map formats.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## NV21

```TypeScript
NV21 = 2
```

Indicates that the storage order is to store Y first and then V U alternately each occupies 8 bits and are stored from the higher-order to the lower-order bits.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## YCBCR_P010

```TypeScript
YCBCR_P010 = 4
```

Indicates that the storage order is to store Y first and then U V alternately each occupies 10 bits and are stored from the higher-order to the lower-order bits.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## RGBA_1010102

```TypeScript
RGBA_1010102 = 3
```

Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components： R(10bits), G(10bits), B(10bits), A(2bits) and are stored from the higher-order to the lower-order bits.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## RGBA_8888

```TypeScript
RGBA_8888 = 1
```

Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits) and are stored from the higher-order to the lower-order bits.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## YCRCB_P010

```TypeScript
YCRCB_P010 = 5
```

Indicates that the storage order is to store Y first and then V U alternately each occupies 10 bits and are stored from the higher-order to the lower-order bits.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## UNKNOWN

```TypeScript
UNKNOWN = 0
```

Indicates an unknown format.

**起始版本：** 14

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

