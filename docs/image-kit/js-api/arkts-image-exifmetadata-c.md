# ExifMetadata

ExifMetadata implements Metadata Exif（Exchangeable image file format）元数据。

**Inheritance:** ExifMetadataimplements: Metadata.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<ExifMetadata>
```

对Exif元数据进行克隆。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ExifMetadata> | Promise对象，成功返回Exif元数据实例。 |

## createInstance

```TypeScript
static createInstance(): ExifMetadata
```

创建一个空的[ExifMetadata]image.ExifMetadata实例。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| ExifMetadata | 返回ExifMetadata的空实例。 |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

获取图片中所有元数据的属性和值。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据拥有的所有属性的值。 |

## getBlob

```TypeScript
getBlob(): Promise<ArrayBuffer>
```

以二进制数据的形式获取元数据。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回元数据的二进制数据。 |

## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

获取图像的元数据属性值。使用Promise异步回调。 要查询的属性的具体信息请参考[PropertyKey]image.PropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | Array&lt;string> | Yes | 要获取的值的属性名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回获取到的图像元数据属性值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type. |

## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

使用二进制数据替换当前元数据。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blob | ArrayBuffer | Yes | 要替换的二进制数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid parameter. Possible causes: The blob is empty or has a length of 0. |

## setProperties

```TypeScript
setProperties(records: Record<string, string | null>): Promise<void>
```

批量设置图片元数据中的指定属性的值。使用Promise异步回调。 要查询的属性的具体信息请参考[PropertyKey]image.PropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | Record&lt;string, string \| null> | Yes | 用户要修改的ExifMetadata对象的属性和键值对的集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type. |

## gpsLongitudeRef

```TypeScript
gpsLongitudeRef?: string
```

GPS经度参考。例如，E表示东经，W表示西经。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsLongitude

```TypeScript
gpsLongitude?: double[]
```

GPS经度。 经度用三个RATIONAL（分数形式存储的数值）值表示，分别是度、分和秒，格式为dd/1、mm/1、ss/1。 当使用度数和分钟时，分钟分数最多保留两位小数，格式为dd/1，mmmm/100，0/1。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## copyright

```TypeScript
copyright?: string
```

图像的版权信息。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## spectralSensitivity

```TypeScript
spectralSensitivity?: string
```

指示相机每个通道的光谱灵敏度。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## software

```TypeScript
software?: string
```

用于生成图像的软件名称和版本。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## whiteBalance

```TypeScript
whiteBalance?: int
```

白平衡。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## yCbCrCoefficients

```TypeScript
yCbCrCoefficients?: double[]
```

用于将RGB图像数据转换为YCbCr图像数据的变换矩阵系数。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## lensSpecification

```TypeScript
lensSpecification?: double[]
```

所用镜头的规格。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## deviceSettingDescription

```TypeScript
deviceSettingDescription?: ArrayBuffer
```

特定相机型号的拍照条件信息。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## lensMake

```TypeScript
lensMake?: string
```

镜头的制造商。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## compositeImage

```TypeScript
compositeImage?: int
```

指示图像是否为合成图像。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneCaptureType

```TypeScript
sceneCaptureType?: int
```

拍摄的场景类型。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsImgDirection

```TypeScript
gpsImgDirection?: double
```

拍摄时图像的方向。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subjectDistance

```TypeScript
subjectDistance?: double
```

拍照设备到被摄体的距离。单位为米（m）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestLatitudeRef

```TypeScript
gpsDestLatitudeRef?: string
```

指示目标点的纬度参考。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## offsetTimeOriginal

```TypeScript
offsetTimeOriginal?: string
```

设备的地理时区位置。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## imageDescription

```TypeScript
imageDescription?: string
```

图像描述。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDop

```TypeScript
gpsDop?: double
```

GPS数据精度DOP精度衰减因子（Dilution of Precision）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## model

```TypeScript
model?: string
```

相机型号。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sharpness

```TypeScript
sharpness?: int
```

相机应用的边缘增强处理方式。例如：弱锐化、标准锐化等。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsSpeedRef

```TypeScript
gpsSpeedRef?: string
```

GPS接收器移动速度的单位。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## makerNote

```TypeScript
makerNote?: ArrayBuffer
```

Exif/相机文件系统设计规则DCF（Design rule for Camera File system）写入器制造商记录所需信息的标签。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestDistance

```TypeScript
gpsDestDistance?: double
```

到目的地的距离。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## offsetTime

```TypeScript
offsetTime?: string
```

作为DateTime标签的补充元数据，解决因地理时区变化导致的时间戳歧义问题。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## planarConfiguration

```TypeScript
planarConfiguration?: int
```

指示像素分量是以块状或平面格式记录。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## customRendered

```TypeScript
customRendered?: int
```

表示对图像数据的特殊处理，如HDR合成、AI场景增强。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## flashEnergy

```TypeScript
flashEnergy?: double
```

图像捕获时的闪光灯能量。单位为光束烛光秒（BCPS，Beam Candlepower Seconds）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## standardOutputSensitivity

```TypeScript
standardOutputSensitivity?: int
```

标准输出灵敏度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## primaryChromaticities

```TypeScript
primaryChromaticities?: double[]
```

图像原色的色度。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## samplesPerPixel

```TypeScript
samplesPerPixel?: int
```

记录每个像素的颜色分量数量，适用于RGB（红绿蓝，Red Green Blue）和YCbCr（亮度-蓝色色差-红色色差，Luma-Chrominance）色彩模型。 由于这两种模型都是三分量模型（一个亮度分量加两个色度分量，或三个颜色通道），因此该标签的标准值为3。 对于JPEG压缩图像，此标签将会被对应的JPEG标记替换。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## lightSource

```TypeScript
lightSource?: int
```

光源。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## dateTimeOriginal

```TypeScript
dateTimeOriginal?: string
```

生成原始图像数据的日期和时间。 对于DSC（Digital Still Camera 数码静态相机），会记录拍摄照片的日期和时间。格式为“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sensitivityType

```TypeScript
sensitivityType?: int
```

灵敏度类型。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exifVersion

```TypeScript
exifVersion?: string
```

支持的Exif标准的版本。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## fNumber

```TypeScript
fNumber?: double
```

光圈值，如f/1.8。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## contrast

```TypeScript
contrast?: int
```

相机应用的对比度优化策略。例如：标准处理、弱化对比度等。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exposureProgram

```TypeScript
exposureProgram?: int
```

相机在拍摄照片时用于设置曝光的程序类。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sourceImageNumberOfCompositeImage

```TypeScript
sourceImageNumberOfCompositeImage?: int[]
```

用于合成图像的源图像数量。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsImgDirectionRef

```TypeScript
gpsImgDirectionRef?: string
```

图像方向的参考。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## compression

```TypeScript
compression?: int
```

用于图像压缩的算法标准。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## flash

```TypeScript
flash?: int
```

闪光。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exposureBiasValue

```TypeScript
exposureBiasValue?: double
```

曝光偏差值。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## dateTime

```TypeScript
dateTime?: string
```

图像创建的日期和时间。 在本标准中，指文件更改的日期和时间。格式为：“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。例如：“2025:12:15 18:44:59”。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gainControl

```TypeScript
gainControl?: int
```

整体图像增益调整程度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## artist

```TypeScript
artist?: string
```

创建图像的人的姓名。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subsecTimeOriginal

```TypeScript
subsecTimeOriginal?: string
```

记录DateTimeOriginal标记的秒数。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## photometricInterpretation

```TypeScript
photometricInterpretation?: int
```

像素组成，如RGB（红绿蓝，Red Green Blue）和YCbCr（亮度-蓝色色差-红色色差，Luma-Chrominance）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## bodySerialNumber

```TypeScript
bodySerialNumber?: string
```

相机机身的序列号。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsAltitude

```TypeScript
gpsAltitude?: double
```

基于GPSAltitudeRef中的参考高度。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## dateTimeDigitized

```TypeScript
dateTimeDigitized?: string
```

将图像作为数字数据存储的日期和时间。 例如，如果DSC捕获了图像，并同时记录了文件，则DateTimeOriginal和DateTimeDigitized将具有相同的内容。格式为“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## transferFunction

```TypeScript
transferFunction?: string
```

图像的传递函数，通常用于颜色校正。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## colorSpace

```TypeScript
colorSpace?: int
```

颜色空间信息标签，通常记录为颜色空间说明符。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## spatialFrequencyResponse

```TypeScript
spatialFrequencyResponse?: ArrayBuffer
```

相机或输入设备空间频率表。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## bitsPerSample

```TypeScript
bitsPerSample?: int[]
```

像素各分量的位数。如RGB是3分量，格式是8，8，8。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDateStamp

```TypeScript
gpsDateStamp?: string
```

GPS日期戳。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focalPlaneXResolution

```TypeScript
focalPlaneXResolution?: double
```

传感器物理平面X轴方向上每单位物理长度的像素数量。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## brightnessValue

```TypeScript
brightnessValue?: double
```

图像的亮度值。单位为APEX。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## cfaPattern

```TypeScript
cfaPattern?: ArrayBuffer
```

图像传感器的滤色器阵列CFA（Color Filter Array）几何图案。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## rowsPerStrip

```TypeScript
rowsPerStrip?: int
```

每条图像数据的行数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsLatitudeRef

```TypeScript
gpsLatitudeRef?: string
```

GPS纬度参考。例如，N表示北纬，S表示南纬。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## jpegInterchangeFormat

```TypeScript
jpegInterchangeFormat?: int
```

JPEG交换格式比特流的SOI（Start of Image）标记。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestBearingRef

```TypeScript
gpsDestBearingRef?: string
```

指向目的地的方位参考。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestLatitude

```TypeScript
gpsDestLatitude?: double[]
```

目的地的纬度。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subsecTimeDigitized

```TypeScript
subsecTimeDigitized?: string
```

记录DateTimeDigitized标记的秒数。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsTrackRef

```TypeScript
gpsTrackRef?: string
```

提供GPS接收机运动方向的参考。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subjectDistanceRange

```TypeScript
subjectDistanceRange?: int
```

指示到对象的距离范围。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focalLengthIn35mmFilm

```TypeScript
focalLengthIn35mmFilm?: int
```

换算成35mm等效焦距。单位为毫米（mm）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## maxApertureValue

```TypeScript
maxApertureValue?: double
```

镜头的最小光圈值。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## jpegInterchangeFormatLength

```TypeScript
jpegInterchangeFormatLength?: int
```

JPEG流的字节数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## flashpixVersion

```TypeScript
flashpixVersion?: string
```

FPXR（FlashPix Extension Resource）支持的FlashPix格式版本，用于增强设备兼容性。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsVersionID

```TypeScript
gpsVersionID?: int[]
```

GPS信息的格式版本标识符。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subjectLocation

```TypeScript
subjectLocation?: int[]
```

图像中主体的像素坐标（基于左上角原点）。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## whitePoint

```TypeScript
whitePoint?: double[]
```

图像白点的色度。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## lensSerialNumber

```TypeScript
lensSerialNumber?: string
```

镜头的序列号。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sensingMethod

```TypeScript
sensingMethod?: int
```

摄像头的图像传感器类型。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestLongitude

```TypeScript
gpsDestLongitude?: double[]
```

目的地的经度。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## offsetTimeDigitized

```TypeScript
offsetTimeDigitized?: string
```

记录图像数字化时的UTC协调世界时（Coordinated Universal Time）偏移，有助于精确调整时间戳。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gamma

```TypeScript
gamma?: double
```

每个组件的伽玛值。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## compressedBitsPerPixel

```TypeScript
compressedBitsPerPixel?: double
```

图像压缩方案。单位为每像素比特。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## photoMode

```TypeScript
photoMode?: int
```

照片模式。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## stripByteCounts

```TypeScript
stripByteCounts?: int[]
```

压缩后每个条带中的字节数。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## photographicSensitivity

```TypeScript
photographicSensitivity?: int[]
```

拍摄图像时相机或输入设备的灵敏度。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## oecf

```TypeScript
oecf?: ArrayBuffer
```

ISO 14524中规定的光电转换函数（OECF）。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isoSpeedRatings

```TypeScript
isoSpeedRatings?: int
```

ISO 12232中指定的相机或输入设备的ISO速度和ISO纬度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## digitalZoomRatio

```TypeScript
digitalZoomRatio?: double
```

拍摄时的数字变焦比。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## yResolution

```TypeScript
yResolution?: double
```

高度方向上的图像分辨率。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## saturation

```TypeScript
saturation?: int
```

相机应用的色彩饱和度调节策略。例如：标准、降饱和模式等。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsAreaInformation

```TypeScript
gpsAreaInformation?: string
```

GPS区域名称的字符串。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## resolutionUnit

```TypeScript
resolutionUnit?: int
```

用于测量宽度方向上的图像分辨率和高度方向上的图像分辨率的单位。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exposureIndex

```TypeScript
exposureIndex?: double
```

拍摄时选定的曝光指数。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsStatus

```TypeScript
gpsStatus?: string
```

记录图像时GPS接收器的状态。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## lensModel

```TypeScript
lensModel?: string
```

镜头的型号名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isoSpeedLatitudezzz

```TypeScript
isoSpeedLatitudezzz?: int
```

表示相机传感器在过曝方向保护高光细节的能力边界。单位为EV。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## imageWidth

```TypeScript
imageWidth?: int
```

图像宽度。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsProcessingMethod

```TypeScript
gpsProcessingMethod?: string
```

记录定位方法的名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## meteringMode

```TypeScript
meteringMode?: int
```

测光模式。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focalPlaneResolutionUnit

```TypeScript
focalPlaneResolutionUnit?: int
```

FocalPlaneXResolution和FocalPlaneYResolution的测量单位。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsTrack

```TypeScript
gpsTrack?: double
```

GPS接收器移动的方向。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## imageUniqueId

```TypeScript
imageUniqueId?: string
```

为每个图像分配的唯一标识符。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subsecTime

```TypeScript
subsecTime?: string
```

记录DateTime标记的秒分数的标记。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## shutterSpeedValue

```TypeScript
shutterSpeedValue?: double
```

快门速度，表示为摄影曝光相加系统值APEX（Additive System of Photographic Exposure）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## fileSource

```TypeScript
fileSource?: ArrayBuffer
```

指示图像源。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelXDimension

```TypeScript
pixelXDimension?: int
```

图像在X轴上的（二维坐标系中的Horizontal Axis）尺寸。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sourceExposureTimesOfCompositeImage

```TypeScript
sourceExposureTimesOfCompositeImage?: ArrayBuffer
```

合成图像的源图像的曝光时间，例如1/33秒。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## stripOffsets

```TypeScript
stripOffsets?: int[]
```

图像数据的分块存储偏移量，单位为字节（Byte）。 为提高大图像访问效率，原始像素数据被分割为多个连续区块（称为条带）。 此标签按顺序存储每个条带在文件中的起始位置偏移量。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## yCbCrSubSampling

```TypeScript
yCbCrSubSampling?: int[]
```

色度分量与亮度分量的采样比。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## userComment

```TypeScript
userComment?: string
```

用户评论。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestDistanceRef

```TypeScript
gpsDestDistanceRef?: string
```

到目标点距离的测量单位。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## yCbCrPositioning

```TypeScript
yCbCrPositioning?: int
```

色度分量相对于亮度分量的位置。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## componentsConfiguration

```TypeScript
componentsConfiguration?: string
```

压缩数据的信息。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelYDimension

```TypeScript
pixelYDimension?: int
```

图像在Y轴上的（二维坐标系中的Vertical Axis）尺寸。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsMeasureMode

```TypeScript
gpsMeasureMode?: string
```

GPS测量模式。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestBearing

```TypeScript
gpsDestBearing?: double
```

到达目的地的方位。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subfileType

```TypeScript
subfileType?: int
```

已弃用标签，表示该子文件中的数据类型。请使用newSubfileType替代。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## apertureValue

```TypeScript
apertureValue?: double
```

镜头光圈。单位为APEX。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exposureTime

```TypeScript
exposureTime?: double
```

曝光时间。单位为秒（s）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## imageLength

```TypeScript
imageLength?: int
```

图像长度。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsHPositioningError

```TypeScript
gpsHPositioningError?: double
```

水平定位误差。单位为米（m）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## recommendedExposureIndex

```TypeScript
recommendedExposureIndex?: int
```

推荐曝光指数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## referenceBlackWhite

```TypeScript
referenceBlackWhite?: double[]
```

参考黑点值和白点值。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## relatedSoundFile

```TypeScript
relatedSoundFile?: string
```

与图像数据相关的音频文件的名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsTimestamp

```TypeScript
gpsTimestamp?: double[]
```

GPS时间戳。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## cameraOwnerName

```TypeScript
cameraOwnerName?: string
```

相机所有者的姓名。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsSatellites

```TypeScript
gpsSatellites?: string
```

用于测量的GPS卫星。通常是它的伪随机噪声码（PRN）编号。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsMapDatum

```TypeScript
gpsMapDatum?: string
```

GPS接收机使用的大地测量数据。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## subjectArea

```TypeScript
subjectArea?: int[]
```

用于指示主要对象在整个场景中的位置和区域。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## make

```TypeScript
make?: string
```

拍摄设备的品牌制造商名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsLatitude

```TypeScript
gpsLatitude?: double[]
```

GPS纬度。 纬度用三个RATIONAL（分数形式存储的数值）值表示，分别是度、分和秒，格式为dd/1、mm/1、ss/1。 当使用度数和分钟时，分钟分数最多保留两位小数，格式为dd/1，mmmm/100,0/1。

**Type:** double[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## orientation

```TypeScript
orientation?: Orientation
```

图像方向。

**Type:** Orientation

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xResolution

```TypeScript
xResolution?: double
```

宽度方向上的图像分辨率。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsSpeed

```TypeScript
gpsSpeed?: double
```

GPS接收器移动的速度。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDifferential

```TypeScript
gpsDifferential?: int
```

是否对GPS数据应用了差分校正，这对精确定位精度至关重要。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsDestLongitudeRef

```TypeScript
gpsDestLongitudeRef?: string
```

指示目标点的经度参考。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## newSubfileType

```TypeScript
newSubfileType?: int
```

表示该子文件的数据类型（例如文本/图像等基本类型，而非具体存储格式）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneType

```TypeScript
sceneType?: ArrayBuffer
```

场景类型。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## gpsAltitudeRef

```TypeScript
gpsAltitudeRef?: int
```

用于GPS的参考高度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focalPlaneYResolution

```TypeScript
focalPlaneYResolution?: double
```

传感器物理平面Y轴方向上每单位物理长度的像素数量。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isoSpeedLatitudeyyy

```TypeScript
isoSpeedLatitudeyyy?: int
```

表示相机传感器在单次曝光中可记录的最大动态范围。单位为EV。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## exposureMode

```TypeScript
exposureMode?: int
```

曝光模式。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focalLength

```TypeScript
focalLength?: double
```

焦距。单位为毫米（mm）。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

