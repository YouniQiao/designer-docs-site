# SystemDefinedPixelMap

与系统侧定义的[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md)数据类型对应的图片数据类型，是 [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md)的子类，仅保存PixelMap的二进制数据。

**继承/实现关系：** SystemDefinedPixelMap extends [SystemDefinedRecord](arkts-arkdata-systemdefinedrecord-c.md)

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## rawData

```TypeScript
set rawData(value: Uint8Array)
```

PixelMap对象的二进制数据。

**类型：** Uint8Array

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

