# @ohos.multimedia.image

本模块提供图片的解码、编码、编辑、元数据处理和图片接收等能力。 本模块包含以下基础类： - [ImageSource]{@link image.ImageSource}类，提供获取[图片信息]{@link image.ImageInfo}、将图片解码为PixelMap或Picture、读取和修改 [图片属性]{@link image.PropertyKey}的能力。[支持解码的图片格式](docroot://reference/apis-image-kit/arkts-apis-image-ImageSource.md#属性) 包括png、jpeg、bmp、gif、webp、dng、heic<sup>12+</sup>、wbmp<sup>23+</sup>、heifs<sup>23+</sup>、tiff<sup>23+</sup>。 - [ImagePacker]{@link image.ImagePacker}类，提供将图片编码为压缩后的数据流或文件的能力。编码前需获取图片的ImageSource、PixelMap或Picture作为输入。 [支持编码的图片格式](docroot://reference/apis-image-kit/arkts-apis-image-ImagePacker.md#属性)包括jpeg、webp、png、heic<sup>12+</sup>、 gif<sup>18+</sup>。 - [PixelMap]{@link image.PixelMap}类，位图对象，包含像素数据以及[图片信息]{@link image.ImageInfo}。可用于读取或写入像素数据，进行裁剪、缩放、平移、旋转、镜像等操作，并可直接传 给[Image组件]{@link ./@internal/component/ets/image}用于显示。还提供了获取和设置图片色域、HDR元数据的方法。 - [Picture]{@link image.Picture}类，多图对象，由主图、辅助图和元数据组成。其中，主图包含了主要图像信息；辅助图用于存储与主图相关的附加信息；元数据用于存储与图片相关的其他信息。Picture提供获取主图 、合成HDR图、获取辅助图、设置辅助图、获取元数据、设置元数据等方法。 - [AuxiliaryPicture]{@link image.AuxiliaryPicture}类，辅助图一般用于辅助主图进行特殊信息的展示，使图像包含更丰富的信息。目前支持的辅助图的类型可参考 [AuxiliaryPictureType]{@link image.AuxiliaryPictureType}。 - [Metadata]{@link image.Metadata}类，以Key-Value的形式存储图像的元数据。目前支持的元数据类型可参考[MetadataType]{@link image.MetadataType}，包含 Exif元数据、水印裁剪图元数据和HEIF序列图像元数据。Exif元数据的Key可参考[PropertyKey]{@link image.PropertyKey}；水印裁剪图元数据的Key可参考 [FragmentMapPropertyKey]{@link image.FragmentMapPropertyKey}；HEIF序列图像元数据的Key可参考 [HeifsPropertyKey]{@link image.HeifsPropertyKey}。 - [ExifMetadata]{@link image.ExifMetadata}类，以Key-Value的形式存储图像的Exif元数据。Exif元数据的Key可参考 [PropertyKey]{@link image.PropertyKey}。 - [MakerNoteHuaweiMetadata]{@link image.MakerNoteHuaweiMetadata}类，以Key-Value的形式存储图像Huawei相机定义的照片元数据。Huawei相机定义的照片元数据的 Key可参考[PropertyKey]{@link image.PropertyKey}。 - [HeifsMetadata]{@link image.HeifsMetadata}类，以Key-Value的形式存储图像的HEIF序列图像元数据。HEIF序列图像元数据的Key可参考 [HeifsPropertyKey]{@link image.HeifsPropertyKey}。 - [WebPMetadata](docroot://reference/apis-image-kit/arkts-apis-image-WebPMetadata.md)类，以Key-Value的形式存储图像的WebP图像元数据。 WebP图像元数据的Key可参考[WebPPropertyKey]{@link image.WebPPropertyKey}。 - [GifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-GifMetadata.md)类，以Key-Value的形式存储图像的GIF图像元数据。GIF图像 元数据的Key可参考[GifPropertyKey]{@link image.GifPropertyKey}。 - [JfifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-JfifMetadata.md)类，以Key-Value的形式存储图像的JFIF图像元数据。 JFIF图像元数据的Key可参考[JfifPropertyKey]{@link image.JfifPropertyKey}。 - [TiffMetadata](docroot://reference/apis-image-kit/arkts-apis-image-TiffMetadata.md)类，以Key-Value的形式存储图像的TIFF图像元数据。 TIFF图像元数据的Key可参考[TiffPropertyKey]{@link image.TiffPropertyKey}。 - [PngMetadata](docroot://reference/apis-image-kit/arkts-apis-image-PngMetadata.md)类，以Key-Value的形式存储图像的PNG图像元数据。PNG图像 元数据的Key可参考[PngPropertyKey]{@link image.PngPropertyKey}。 - [AvisMetadata](docroot://reference/apis-image-kit/arkts-apis-image-AvisMetadata.md)类，以Key-Value的形式存储图像的AVIS图像元数据。 AVIS图像元数据的Key可参考[AvisPropertyKey]{@link image.AvisPropertyKey}。 - [ImageReceiver]{@link image.ImageReceiver}类，作为图片的消费者，用于从Surface中接收、读取图片。 - [ImageCreator]{@link image.ImageCreator}类，作为图片的生产者，用于将图片写入到Surface中。 - [Image]{@link image.Image}类，供ImageReceiver和ImageCreator使用，用于传输图片对象，其实际内容由生产者决定。如相机预览流提供的Image对象存储了YUV数据、相机拍照提供的 Image对象存储了JPEG文件。

**起始版本：** 6

**系统能力：** SystemCapability.Multimedia.Image.Core

## 导入模块

```TypeScript
import { image } from '@kit.ImageKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [CreateIncrementalSource](arkts-image-createincrementalsource-f.md#CreateIncrementalSource-1) | 通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 以增量方式创建的ImageSource实例，仅支持使用以下功能，同步、异步callback、异步Promise均支持。 - 获取图片信息：指定序号-[getImageInfo]{@link image.ImageSource.getImageInfo(index: int, callback: AsyncCallback<ImageInfo>)}、 直接获取-[getImageInfo]{@link image.ImageSource.getImageInfo(callback: AsyncCallback<ImageInfo>)} - 获取图片中给定索引处图像的指定属性键的值： [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)} - 批量获取图片中的指定属性键的值：[getImageProperties]{@link image.ImageSource.getImageProperties(key: Array<PropertyKey>)} - 更新增量数据： [updateData]{@link image.ImageSource.updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int)} - 创建PixelMap对象：通过图片解码参数创建-[createPixelMap]{@link image.createPixelMap}、通过默认参数创建- [createPixelMap]{@link image.createPixelMap} 、通过图片解码参数-[createPixelMap]{@link image.createPixelMap} - 释放ImageSource实例：[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)} |
| [CreateIncrementalSource](arkts-image-createincrementalsource-f.md#CreateIncrementalSource-2) | 通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。 此接口支持的功能与[CreateIncrementalSource(buf: ArrayBuffer): ImageSource]{@link image.CreateIncrementalSource}所生成的实例支持的功能相 同。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createAuxiliaryPicture](arkts-image-createauxiliarypicture-f.md#createAuxiliaryPicture-1) | 通过ArrayBuffer图片数据、辅助图尺寸、辅助图类型创建AuxiliaryPicture实例。该接口仅支持传入BGRA的连续像素数据，会创建出RGBA的辅助图。 由于图片占用内存较大，所以当AuxiliaryPicture实例使用完成后，应主动调用[release]{@link image.AuxiliaryPicture.release}方法及时释放内存。释放时应确保该实例的所有异步方法 均执行完成，且后续不再使用该实例。 |
| [createAuxiliaryPictureUsingAllocator](arkts-image-createauxiliarypictureusingallocator-f.md#createAuxiliaryPictureUsingAllocator-1) | 使用指定的内存类型，根据辅助图信息和像素数据创建辅助图对象。 > **说明：** > > - 在处理此接口返回的AuxiliaryPicture时，需要考虑内存中每行像素所占的空间的影响。 > > - 创建的辅助图像会使用输入的像素进行初始化。 |
| [createEmptyPixelMap](arkts-image-createemptypixelmap-f.md#createEmptyPixelMap-1) | Creates an empty PixelMap. The following pixel format is not supported for PixelMap creation: ASTC_4x4. |
| [createImageCreator](arkts-image-createimagecreator-f.md#createImageCreator-1) | 通过宽、高、图片格式、容量创建ImageCreator实例。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > 从API version 9开始支持，从API version 11废弃，建议使用[createImageCreator]{@link image.createImageCreator}代替。 |
| [createImageCreator](arkts-image-createimagecreator-f.md#createImageCreator-2) | 通过图片大小、图片格式、容量创建ImageCreator实例。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImagePacker](arkts-image-createimagepacker-f.md#createImagePacker-1) | 创建ImagePacker实例。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]{@link image.ImagePacker.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createImageReceiver-1) | 通过宽、高、图片格式、容量创建ImageReceiver实例。ImageReceiver做为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)} 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)} 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > 从API version 9开始支持，从API version 11废弃，建议使用[createImageReceiver]{@link image.createImageReceiver}代替。 |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createImageReceiver-2) | 通过图片大小、图片格式、容量创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)} 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)} 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createImageReceiver-3) | Creates an ImageReceiver instance. |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createImageReceiver-4) | 通过ImageReceiverOptions创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，其参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流 [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)} 。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)} 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-1) | 通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-2) | Creates an ImageSource instance based on the URI. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-3) | 通过传入的uri创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-4) | Creates an ImageSource instance based on the URI. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-5) | 通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-6) | Creates an ImageSource instance based on the file descriptor. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-7) | 通过传入文件描述符来创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-8) | Creates an ImageSource instance based on the file descriptor. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-9) | 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [image.createPixelMapSync]{@link image.createPixelMapSync}这一类接口。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-10) | Creates an ImageSource instance based on the buffer. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-11) | 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用 [image.createPixelMapSync]{@link image.createPixelMapSync}这一类接口。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-12) | Creates an ImageSource instance based on the buffer. |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-13) | 通过图像资源文件的RawFileDescriptor创建ImageSource实例。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [createImageSource](arkts-image-createimagesource-f.md#createImageSource-14) | Creates an ImageSource instance based on the raw file descriptor. |
| [createIncrementalSource](arkts-image-createincrementalsource-f.md#createIncrementalSource-1) | Creates an ImageSource instance based on the buffer in incremental. |
| [createIncrementalSource](arkts-image-createincrementalsource-f.md#createIncrementalSource-2) | Creates an ImageSource instance based on the buffer in incremental. |
| [createPicture](arkts-image-createpicture-f.md#createPicture-1) | 通过主图的PixelMap创建一个Picture对象。 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。 |
| <!--DelRow-->[createPictureByHdrAndSdrPixelMap](arkts-image-createpicturebyhdrandsdrpixelmap-f-sys.md#createPictureByHdrAndSdrPixelMap-1) | 根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个增益图（gainmap），返回的Picture对象将包含SDR PixelMap和生成的gainmap PixelMap，像素格式为RGBA8888。使用Promise异步回调。 |
| <!--DelRow-->[createPictureByHdrAndSdrPixelMap](arkts-image-createpicturebyhdrandsdrpixelmap-f-sys.md#createPictureByHdrAndSdrPixelMap-2) | 根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个Gainmap（增益图），返回的Picture对象将包含SDR PixelMap和生成的Gainmap PixelMap，像素格式为RGBA8888。Gainmap PixelMap的尺寸可以通过设置params进行选择。使用Promise异步回调。 |
| [createPictureFromParcel](arkts-image-createpicturefromparcel-f.md#createPictureFromParcel-1) | 从MessageSequence中获取Picture。 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。 |
| [createPixelMap](arkts-image-createpixelmap-f.md#createPixelMap-1) | Create pixelmap by data buffer. Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities. |
| [createPixelMap](arkts-image-createpixelmap-f.md#createPixelMap-2) | Create pixelmap by data buffer. Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities. |
| [createPixelMapFromParcel](arkts-image-createpixelmapfromparcel-f.md#createPixelMapFromParcel-1) | Creates a PixelMap object based on MessageSequence parameter. |
| [createPixelMapFromPixels](arkts-image-createpixelmapfrompixels-f.md#createPixelMapFromPixels-1) | Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specified pixel format to initialize the PixelMap. The following pixel formats are not supported for PixelMap creation: RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4. |
| [createPixelMapFromPixelsSync](arkts-image-createpixelmapfrompixelssync-f.md#createPixelMapFromPixelsSync-1) | Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specified pixel format to initialize the PixelMap. The following pixel formats are not supported for PixelMap creation: RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4. |
| [createPixelMapFromSurface](arkts-image-createpixelmapfromsurface-f.md#createPixelMapFromSurface-1) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurface](arkts-image-createpixelmapfromsurface-f.md#createPixelMapFromSurface-2) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceSync](arkts-image-createpixelmapfromsurfacesync-f.md#createPixelMapFromSurfaceSync-1) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceSync](arkts-image-createpixelmapfromsurfacesync-f.md#createPixelMapFromSurfaceSync-2) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceWithTransformation](arkts-image-createpixelmapfromsurfacewithtransformation-f.md#createPixelMapFromSurfaceWithTransformation-1) | Creates a PixelMap object based on the ID of a Surface with transformation. |
| [createPixelMapFromSurfaceWithTransformationSync](arkts-image-createpixelmapfromsurfacewithtransformationsync-f.md#createPixelMapFromSurfaceWithTransformationSync-1) | Creates a PixelMap object based on the ID of a Surface with transformation. |
| [createPixelMapSync](arkts-image-createpixelmapsync-f.md#createPixelMapSync-1) | Create pixelmap by data buffer. Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixelsSync} instead for better exception handling capabilities. |
| [createPixelMapSync](arkts-image-createpixelmapsync-f.md#createPixelMapSync-2) | Create an empty pixelmap. Starting from API 26.0.0, it is recommended to use {@link createEmptyPixelMap} instead for better exception handling capabilities. |
| [createPixelMapUsingAllocator](arkts-image-createpixelmapusingallocator-f.md#createPixelMapUsingAllocator-1) | Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified by allocatorType. By default, the system selects the memory type based on the image type, image size, platform capability, etc. When processing the PixelMap returned by this interface, please always consider the impact of stride. |
| [createPixelMapUsingAllocatorSync](arkts-image-createpixelmapusingallocatorsync-f.md#createPixelMapUsingAllocatorSync-1) | Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified by allocatorType. By default, the system selects the memory type based on the image type, image size, platform capability, etc. When processing the PixelMap returned by this interface, please always consider the impact of stride. |
| [createPixelMapUsingAllocatorSync](arkts-image-createpixelmapusingallocatorsync-f.md#createPixelMapUsingAllocatorSync-2) | Create an empty pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified by allocatorType. By default, the system selects the memory type based on the image type, image size, platform capability, etc. When processing the PixelMap returned by this interface, please always consider the impact of stride. |
| [createPremultipliedPixelMap](arkts-image-createpremultipliedpixelmap-f.md#createPremultipliedPixelMap-1) | Transforms pixelmap from unpremultiplied alpha format to premultiplied alpha format. |
| [createPremultipliedPixelMap](arkts-image-createpremultipliedpixelmap-f.md#createPremultipliedPixelMap-2) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| [createUnpremultipliedPixelMap](arkts-image-createunpremultipliedpixelmap-f.md#createUnpremultipliedPixelMap-1) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| [createUnpremultipliedPixelMap](arkts-image-createunpremultipliedpixelmap-f.md#createUnpremultipliedPixelMap-2) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| <!--DelRow-->[decomposeToPicture](arkts-image-decomposetopicture-f-sys.md#decomposeToPicture-1) | 将HDR PixelMap分解为包含SDR PixelMap和增益图（gainmap）的Picture对象。使用Promise异步回调。 |
| [getImagePackerSupportedFormats](arkts-image-getimagepackersupportedformats-f.md#getImagePackerSupportedFormats-1) | 获取支持编码的图片格式，图片格式以mime type表示。 |
| [getImageSourceSupportedFormats](arkts-image-getimagesourcesupportedformats-f.md#getImageSourceSupportedFormats-1) | 获取支持解码的图片格式，图片格式以mime type表示。 |

### 类

| 名称 | 描述 |
| --- | --- |
| [AvisMetadata](arkts-image-avismetadata-c.md) | Avis metadata. |
| [DngMetadata](arkts-image-dngmetadata-c.md) | Dng图像元数据类，用于存储图像的元数据。 |
| [ExifMetadata](arkts-image-exifmetadata-c.md) | ExifMetadata implements Metadata Exif（Exchangeable image file format）元数据。 |
| [GifMetadata](arkts-image-gifmetadata-c.md) | Gif metadata. |
| [HeifsMetadata](arkts-image-heifsmetadata-c.md) | HeifsMetadata implements Metadata HEIF序列图像元数据类，用于存储图像的元数据。 |
| [JfifMetadata](arkts-image-jfifmetadata-c.md) | JFIF metadata. |
| [MakerNoteHuaweiMetadata](arkts-image-makernotehuaweimetadata-c.md) | MakerNoteHuaweiMetadata implements Metadata 来自Huawei相机的照片元数据。 |
| [PngMetadata](arkts-image-pngmetadata-c.md) | Png metadata. |
| [TiffMetadata](arkts-image-tiffmetadata-c.md) | TIFF metadata. |
| [WebPMetadata](arkts-image-webpmetadata-c.md) | WebP metadata. |
| [XMPMetadata](arkts-image-xmpmetadata-c.md) | XMPMetadata instance. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AuxiliaryPicture](arkts-image-auxiliarypicture-i.md) | AuxiliaryPicture类，用于读取或写入图像的辅助图数据以及获取图像的辅助图信息。目前支持的辅助图类型可参考[AuxiliaryPictureType]{@link image.AuxiliaryPictureType} 。 在调用AuxiliaryPicture的方法前，需要通过[image.createAuxiliaryPicture]{@link image.createAuxiliaryPicture}或Picture的 [getAuxiliaryPicture]{@link image.Picture.getAuxiliaryPicture}创建一个AuxiliaryPicture实例。 由于图片占用内存较大，所以当AuxiliaryPicture对象使用完成后，应主动调用[release]{@link image.AuxiliaryPicture.release}方法及时释放对象。释放时应确保该实例的所有异步方法 均执行完成，且后续不再使用该对象。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。 |
| [AuxiliaryPictureInfo](arkts-image-auxiliarypictureinfo-i.md) | 表示辅助图的图像信息。 |
| [BinaryBufferInfo](arkts-image-binarybufferinfo-i.md) | 描述二值图像缓冲区内的信息及数据。 |
| [Component](arkts-image-component-i.md) | 描述图像颜色分量。 |
| [DecodingOptions](arkts-image-decodingoptions-i.md) | 图像解码设置选项。 |
| [DecodingOptionsForPicture](arkts-image-decodingoptionsforpicture-i.md) | 图像解码设置选项。 |
| [DecodingOptionsForThumbnail](arkts-image-decodingoptionsforthumbnail-i.md) | 缩略图解码参数选项。 |
| [GainmapChannel](arkts-image-gainmapchannel-i.md) | Gainmap图单个通道的数据内容，参考ISO 21496-1。 |
| <!--DelRow-->[GainmapParams](arkts-image-gainmapparams-i-sys.md) | Gainmap（增益图）参数设置选项。 |
| [GetImagePropertyOptions](arkts-image-getimagepropertyoptions-i.md) | 表示查询图片属性的索引。 > **说明：** > > [ImagePropertyOptions]{@link image.ImagePropertyOptions}代替。 |
| [HdrComposeOptions](arkts-image-hdrcomposeoptions-i.md) | Picture合成HDR时可配置的参数选项。 |
| <!--DelRow-->[HdrDecomposeOptions](arkts-image-hdrdecomposeoptions-i-sys.md) | HDR PixelMap分解为Picture的配置选项，分解后的Picture包含一张SDR主图和一张增益图（GainMap）。 |
| [HdrGainmapMetadata](arkts-image-hdrgainmapmetadata-i.md) | Gainmap使用的元数据值，[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_GAINMAP_METADATA关键字对应的值，参考ISO 21496-1。 |
| [HdrStaticMetadata](arkts-image-hdrstaticmetadata-i.md) | 静态元数据值，[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_STATIC_METADATA关键字对应的值。 |
| [Image](arkts-image-image-i.md) | Image类，供ImageReceiver和ImageCreator使用，用于传输图片对象，其实际内容由生产者决定。如相机预览流提供的Image对象存储了YUV数据、相机拍照提供的Image对象存储了JPEG文件。 调用[readNextImage]{@link image.ImageReceiver.readNextImage(callback: AsyncCallback<Image>)}和 [readLatestImage]{@link image.ImageReceiver.readLatestImage(callback: AsyncCallback<Image>)}接口时会返回Image实例。 Image的属性仅支持在创建时初始化，后续无法再修改，且其属性不对图片内容产生实际影响，请以图片生产者写入的属性为准，即以向[ImageReceiver]{@link image.ImageReceiver}发送图片数据的发送方实 际写入的内容为准。 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用[release]{@link image.Image.release(callback: AsyncCallback<void>)}方法及时释放内存。释放时应确保该 实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 |
| [ImageBufferData](arkts-image-imagebufferdata-i.md) | 保存图像缓冲区数据的指针、不同颜色分量的行间距与像素间距信息。 |
| [ImageCreator](arkts-image-imagecreator-i.md) | ImageCreator类，作为图片的生产者，用于将图片写入到Surface中。 在调用以下方法前需要先通过[image.createImageCreator]{@link image.createImageCreator}创建ImageCreator实例，ImageCreator不支持多线程。 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 |
| [ImageInfo](arkts-image-imageinfo-i.md) | 表示图片信息。 |
| [ImageMetadata](arkts-image-imagemetadata-i.md) | 图像的元数据集。 |
| [ImagePacker](arkts-image-imagepacker-i.md) | ImagePacker类，用于图片压缩和编码。 在调用ImagePacker的方法前，需要先通过[image.createImagePacker]{@link image.createImagePacker}构建一个ImagePacker实例。 编码期间，请避免修改或释放作为输入的ImageSource/PixelMap/Picture对象，以免出现crash或其他未定义行为。 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]{@link image.ImagePacker.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 当前支持的格式有：JPEG、WebP、PNG、HEIC<sup>12+</sup>、GIF<sup>18+</sup>、从API版本26.0.0开始支持TIFF格式（不同硬件设备支持情况不同，可通过ImagePacker的 supportedFormats属性查看）。 |
| [ImagePropertyOptions](arkts-image-imagepropertyoptions-i.md) | 表示查询图片属性的索引。 |
| [ImageRawData](arkts-image-imagerawdata-i.md) | 图像的RAW数据。 |
| [ImageReceiver](arkts-image-imagereceiver-i.md) | ImageReceiver类，用于获取组件surface id、接收最新的图片和读取下一张图片以及释放ImageReceiver实例。ImageReceiver作为图片的接收方和消费者，其参数属性实际上不会对接收到的图片产生影响。 图片属性的配置应在发送方和生产者上进行，如相机预览流 [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)} 。 在调用以下方法前需要先通过[image.createImageReceiver]{@link image.createImageReceiver}创建ImageReceiver实例。 从API version 23开始，更推荐使用[image.createImageReceiver]{@link image.createImageReceiver}，通过传入 [ImageReceiverOptions]{@link image.ImageReceiverOptions}创建ImageReceiver实例。 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)} 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 |
| [ImageReceiverOptions](arkts-image-imagereceiveroptions-i.md) | ImageReceiver的初始化选项。 |
| [ImageSource](arkts-image-imagesource-i.md) | ImageSource类，用于获取图片相关信息。 在调用ImageSource的方法前，需要先通过[image.createImageSource]{@link image.createImageSource}构建一个ImageSource实例。 ImageSource的所有方法均不支持并发调用。 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 |
| [InitializationOptions](arkts-image-initializationoptions-i.md) | PixelMap的初始化选项。 |
| [Metadata](arkts-image-metadata-i.md) | Metadata类，用于存储图像的元数据。目前支持的元数据类型可参考[MetadataType]{@link image.MetadataType}。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。 |
| [PackingOption](arkts-image-packingoption-i.md) | 表示图片编码选项。 |
| [PackingOptionsForSequence](arkts-image-packingoptionsforsequence-i.md) | 描述动图编码参数的选项。 |
| [PackingOptionsForTiff](arkts-image-packingoptionsfortiff-i.md) | 描述TIFF图像编码参数的选项。 |
| [PackingSizeLimit](arkts-image-packingsizelimit-i.md) | 图片编码的大小限制。 |
| [Picture](arkts-image-picture-i.md) | Picture类，一些包含特殊信息的图片可以解码为Picture（也可以称为多图对象）。多图对象一般包含主图、辅助图和元数据。其中主图包含图像的大部分信息，主要用于显示图像内容；辅助图用于存储与主图相关但不同的数据，展示图像更丰富 的信息；元数据一般用来存储关于图像文件的信息。多图对象类用于读取或写入多图对象。在调用Picture的方法前，需要先通过[image.createPicture]{@link image.createPicture}创建一个 Picture实例。 由于图片占用内存较大，所以当Picture实例使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。 |
| [PixelMap](arkts-image-pixelmap-i.md) | The **PixelMap** class provides APIs to read or write image data and obtain image information. Before calling any API in PixelMap, you must use [image.createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)} to create a PixelMap object. Currently, the maximum size of a serialized PixelMap is 128 MB. A larger size will cause a display failure. The size is calculated as follows: Width x Height x [Bytes per pixel]{@link @ohos.multimedia.image:image.PixelMapFormat}. Since API version 11, PixelMap supports cross-thread calls through [Worker]{@link @ohos.worker}. If a PixelMap object is invoked by another thread through [Worker]{@link @ohos.worker}, all APIs of the PixelMap object cannot be called in the original thread. Otherwise, error 501 is reported, indicating that the server cannot complete the request. Before calling any API in PixelMap, you can use [image.createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)} to pass pixel data to create a PixelMap object, or use [ImageSource]{@link @ohos.multimedia.image:image} to decode an image to a PixelMap object. To develop an atomic service, use [ImageSource]{@link @ohos.multimedia.image:image} to create a PixelMap object. Images occupy a large amount of memory. When you finish using a PixelMap instance, call [release]{@link image.PixelMap.release()} to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [PositionArea](arkts-image-positionarea-i.md) | 表示图片指定区域内的数据。 |
| [Region](arkts-image-region-i.md) | 表示区域信息。 |
| [Size](arkts-image-size-i.md) | 表示图片尺寸。 |
| [SourceOptions](arkts-image-sourceoptions-i.md) | ImageSource的初始化选项。 |
| [XMPEnumerateOptions](arkts-image-xmpenumerateoptions-i.md) | 表示XMP枚举选项。 |
| [XMPNamespace](arkts-image-xmpnamespace-i.md) | 表示XMP命名空间。 |
| [XMPTag](arkts-image-xmptag-i.md) | 表示XMP标签信息。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [HdrMetadataValue](arkts-image-hdrmetadatavalue-t.md) | PixelMap使用的HDR元数据值类型，与[HdrMetadataKey]{@link image.HdrMetadataKey}关键字对应。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AllocatorType](arkts-image-allocatortype-e.md) | 表示用于图像解码的内存类型的枚举。开发者可根据场景选择合适的内存申请类型。 |
| [AlphaType](arkts-image-alphatype-e.md) | 表示图像的透明度类型的枚举。 |
| [AntiAliasingLevel](arkts-image-antialiasinglevel-e.md) | 缩放时的插值算法。可根据缩放质量和性能需求选择合适的级别。 |
| [AuxiliaryPictureType](arkts-image-auxiliarypicturetype-e.md) | 表示辅助图的图像类型的枚举。 辅助图不直接参与图片显示，且并非所有图片中都含有辅助图。 在获取和使用特定辅助图前，应首先调用Picture的[getAuxiliaryPicture]{@link image.Picture.getAuxiliaryPicture}方法尝试获取该辅助图。 |
| [AvisPropertyKey](arkts-image-avispropertykey-e.md) | 表示AVIS图片信息的枚举。 > **说明：** > > 返回字段类型具体参考[AvisMetadata](docroot://reference/apis-image-kit/arkts-apis-image-AvisMetadata.md)。 |
| [ComponentType](arkts-image-componenttype-e.md) | 表示图像的组件类型的枚举。 |
| [CropAndScaleStrategy](arkts-image-cropandscalestrategy-e.md) | 表示裁剪与缩放的先后策略的枚举。 如果在配置解码选项[DecodingOptions]{@link image.DecodingOptions}时，未填入参数cropAndScaleStrategy，并且同时设置了参数desiredRegion和 desiredSize，由于系统对于不同图片格式采用的解码算法不同，最终解码效果将略有差异。 例如原始图片大小为200x200，传入desiredSize:{width: 150, height: 150}，desiredRegion:{x: 0, y: 0, width: 100, height: 100}，即预期解码原 图左上角1/4区域，最终将pixelMap大小缩放至150x150返回。 对于jpeg、webp图片（部分dng图片解码时会优先解码图片中的jpeg预览图，在此场景下也会被视为jpeg图片格式）会先进行下采样，例如按照7/8下采样，再基于175x175的图片大小进行区域裁剪，因此最终的区域内容稍大于原图 的左上角1/4区域。 对于svg图片，由于是矢量图，可以任意缩放不损失清晰度，在解码时会根据desiredSize与原图Size的比例选择缩放比例，再基于缩放后的图片大小进行区域裁剪，因此最终返回的解码区域会有所差异。 针对该场景，建议在解码选项同时设置了desiredRegion与desiredSize时，参数cropAndScaleStrategy应传入CROP_FIRST保证效果一致。 |
| [DecodingDynamicRange](arkts-image-decodingdynamicrange-e.md) | 描述解码时期望的图像动态范围。 |
| [DngPropertyKey](arkts-image-dngpropertykey-e.md) | 表示DNG图片信息的枚举。 > **说明：** > > - 关于字段的更详细描述请参考DNG协议文档DNG Specification 1.4.0.0。 > > - 返回字段类型具体参考[DngMetadata]{@link image.DngMetadata}。 |
| [FocusMode](arkts-image-focusmode-e.md) | 表示焦点模式类型的枚举。 |
| [FragmentMapPropertyKey](arkts-image-fragmentmappropertykey-e.md) | 表示水印裁剪图图片信息的枚举。 |
| [GifPropertyKey](arkts-image-gifpropertykey-e.md) | 表示GIF图片信息的枚举。 |
| [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md) | 表示[PixelMap]{@link image.PixelMap}使用的HDR相关元数据信息的关键字的枚举。 |
| [HdrMetadataType](arkts-image-hdrmetadatatype-e.md) | 表示[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_METADATA_TYPE关键字对应的值的枚举。 |
| [HeifsPropertyKey](arkts-image-heifspropertykey-e.md) | 表示HEIF序列图片信息的枚举。 |
| [ImageFormat](arkts-image-imageformat-e.md) | 表示图片格式的枚举。 |
| [JfifPropertyKey](arkts-image-jfifpropertykey-e.md) | 表示JFIF图片信息的枚举。 > **说明：** > > 返回字段类型具体参考[JfifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-JfifMetadata.md)。 > | 名称 | 值 | 说明 | > | ---- | -- | ---- | > | DENSITY_UNIT | 'JfifDensityUnit' | 用于定义JfifXDensity（水平像素密度）和JfifYDensity（垂直像素密度）的物理度量单位。 - 0表示无单位（仅像素宽高比）。 - 1表示每英寸像素数（DPI）。 - 2表示每厘米像素数（DPC）。 该值为正整数。 | | X_DENSITY | 'JfifXDensity' | JFIF图像X方向密度。 | | Y_DENSITY | 'JfifYDensity' | JFIF图像Y方向密度。 | | VERSION | 'JfifVersion' | JFIF图像版本。 | | IS_PROGRESSIVE | 'JfifIsProgressive' | 图像是否采用渐进式编码，即图像在加载过程中按多次扫描逐步提升清晰度。true表示采用，false表示不采用。 | |
| [MetadataType](arkts-image-metadatatype-e.md) | 表示图片元数据类型的枚举。 |
| [Orientation](arkts-image-orientation-e.md) | 表示图像方向类型的枚举。 |
| [PackingDynamicRange](arkts-image-packingdynamicrange-e.md) | 描述编码时期望的图像动态范围。 |
| [PixelMapFormat](arkts-image-pixelmapformat-e.md) | 表示图片像素格式的枚举。 |
| [PngPropertyKey](arkts-image-pngpropertykey-e.md) | 表示PNG图片信息的枚举。 > **说明：** > > 返回字段类型具体参考[PngMetadata](docroot://reference/apis-image-kit/arkts-apis-image-PngMetadata.md)。 > | 名称 | 值 | 说明 | > | ---- | -- | ---- | > | X_PIXELS_PER_METER | 'PngXPixelsPerMeter' | PNG图像X方向每米像素数。 | > | MODIFICATION_TIME | 'PngModificationTime' | PNG图像的最后一次修改的时间。 | > | SOFTWARE | 'PngSoftware' | 用于生成PNG图像的软件名称和版本。 | > | COPYRIGHT | 'PngCopyright' | PNG图像的版权信息。 | > | CREATION_TIME | 'PngCreationTime' | PNG图像的创建时间。 | > | SRGB_INTENT | 'PngSRGBIntent' | PNG图像的sRGB（standard Red Green Blue，标准红绿蓝）渲染意图。 - 0表示感知意图。 - 1表示相对比色意图。 - 2表示饱和度意图。 - 3绝对色度意图。 | | AUTHOR | 'PngAuthor' | PNG图像的作者。 | | INTERLACE_TYPE | 'PngInterlaceType' | PNG图像的交错模式。 - 0表示无交错模式（图像按照从上到下、从左到右的顺序加载）。 - 1表示交错模式（通过多次扫描逐步显示图像，图像在加载过程中逐渐清晰）。 | | WARNING | 'PngWarning' | PNG图像的警告信息。 | | Y_PIXELS_PER_METER | 'PngYPixelsPerMeter' | PNG图像Y方向每米像素数。 | | GAMMA | 'PngGamma' | PNG图像的系数伽马的值。 | | CHROMATICITIES | 'PngChromaticities' | PNG图像的原色与白点色度坐标cHRM（primary chromaticities and white point）。该信息可用于与设备无关的色彩校正。 | | DESCRIPTION | 'PngDescription' | PNG图像的描述。 | | TITLE | 'PngTitle' | PNG图像的标题。 | | COMMENT | 'PngComment' | PNG图像的注释。 | | DISCLAIMER | 'PngDisclaimer' | PNG图像的免责声明。 | |
| [PropertyKey](arkts-image-propertykey-e.md) | 表示Exif（Exchangeable image file format）图像信息的枚举。 - 格式示例中的key为：image.PropertyKey.XXX（XXX为枚举的名称，如：image.PropertyKey.NEW_SUBFILE_TYPE） 。 - 格式示例仅用于说明修改传值和读取结果的格式。具体接口使用方法请参考： [modifyImageProperty]{@link image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)}（修改单个Exif字段）、 [modifyImageProperties]{@link image.ImageSource.modifyImageProperties(records: Record<PropertyKey, string|null>)}（修 改多个Exif字段）、 [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}（读取单个 Exif字段）、[getImageProperties]{@link image.ImageSource.getImageProperties(key: Array<PropertyKey>)}（读取多个Exif字段）。 |
| <!--DelRow-->[ResolutionQuality](arkts-image-resolutionquality-e-sys.md) | 枚举，画质效果等级类型。 |
| [ScaleMode](arkts-image-scalemode-e.md) | 表示图像的缩放模式的枚举。 |
| [TiffPropertyKey](arkts-image-tiffpropertykey-e.md) | 表示TIFF图片信息的枚举。 > **说明：** > > 返回字段类型具体参考[TiffMetadata](docroot://reference/apis-image-kit/arkts-apis-image-TiffMetadata.md)。 > | 名称 | 值 | 说明 | > | ---- | -- | ---- | > | DOCUMENT_NAME | 'TiffDocumentName' | 文档或图像的名称。 | > | PHOTOMETRIC_INTERPRETATION | 'TiffPhotometricInterpretation' | 定义像素颜色的解释方式（如RGB、灰度）。 | > | ORIENTATION | 'TiffOrientation' | 图像方向。 - 1表示"Top-left"，图像未旋转。 - 2表示"Top-right"，镜像水平翻转。 - 3表示"Bottom-right"，图像旋转180°。 - 4表示"Bottom-left"，镜像垂直翻转。 - 5表示"Left-top"，镜像水平翻转后再顺时针旋转270°。 - 6表示"Right-top"，顺时针旋转90°。 - 7表示"Right-bottom"，镜像水平翻转后再顺时针旋转90°。 - 8表示"Left-bottom"，顺时针旋转270°。 若读到未定义值，会返回 `Unknown Value x`，其中 `x` 表示该标签的原始取值。 | | RESOLUTION_UNIT | 'TiffResolutionUnit' | XResolution（水平分辨率）和YResolution（垂直分辨率）的单位，取值为英寸（Inch）或厘米（Centimeter）。 | | COPYRIGHT | 'TiffCopyright' | 图像的版权信息。 | | DATE_TIME | 'TiffDateTime' | 与图像关联的日期和时间（通常为最后修改时间）。 | | IMAGE_DESCRIPTION | 'TiffImageDescription' | 图像信息描述。 | | Y_RESOLUTION | 'TiffYResolution' | 垂直方向分辨率（每分辨率单位的像素数）。 | | X_RESOLUTION | 'TiffXResolution' | 水平方向分辨率（每分辨率单位的像素数）。 | | WHITE_POINT | 'TiffWhitePoint' | 用于指定图像的白点（white point）色度坐标，即图像颜色空间中被认为是“白色”的参考点。 | | TILE_LENGTH | 'TiffTileLength' | 每个图像分块的高度。单位：像素（px）。 | | TRANSFER_FUNCTION | 'TiffTransferFunction' | 图像的传递函数，通常用于颜色校正。 | | TILE_WIDTH | 'TiffTileWidth' | 每个图像分块的宽度。单位：像素（px）。 | | MAKE | 'TiffMake' | 拍摄设备制造商。 | | MODEL | 'TiffModel' | 拍摄设备型号名称或编号。 | | HOST_COMPUTER | 'TiffHostComputer' | 用于图像处理的主机或系统。 | | COMPRESSION | 'TiffCompression' | TIFF图像数据所用的压缩方案。 - 1表示无压缩。 - 5表示LZW（基于字典的无损压缩算法）。 - 7表示JPEG基线。 - 8表示Deflate（基于LZ77+Huffman的无损压缩算法） | | SOFTWARE | 'TiffSoftware' | 用于生成图像的软件名称和版本。 | | PRIMARY_CHROMATICITIES | 'TiffPrimaryChromaticities' | 图像中RGB三原色的色度坐标。 | | ARTIST | 'TiffArtist' | 创建图像的用户名称。 | |
| [WebPPropertyKey](arkts-image-webppropertykey-e.md) | 表示WebP图片信息的枚举。 |
| [XmageColorMode](arkts-image-xmagecolormode-e.md) | 表示XMAGE颜色模式类型的枚举。 |
| [XMPTagType](arkts-image-xmptagtype-e.md) | 表示XMP标签类型的枚举。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW](arkts-image-con.md#CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW) | 拍摄模式：前置摄像头夜景模式。 |
| [CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW](arkts-image-con.md#CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW) | Capture mode: night view with front lens. |
| [CAPTURE_MODE_LIGHT_GRAFFITI](arkts-image-con.md#CAPTURE_MODE_LIGHT_GRAFFITI) | 拍摄模式：轻涂鸦模式。 |
| [CAPTURE_MODE_LIGHT_GRAFFITI](arkts-image-con.md#CAPTURE_MODE_LIGHT_GRAFFITI) | Capture mode: light graffiti. |
| [CAPTURE_MODE_MOVING_PHOTO](arkts-image-con.md#CAPTURE_MODE_MOVING_PHOTO) | 拍摄模式：动态照片模式。 |
| [CAPTURE_MODE_MOVING_PHOTO](arkts-image-con.md#CAPTURE_MODE_MOVING_PHOTO) | Capture mode: moving photos. |
| [CAPTURE_MODE_PANORAMA](arkts-image-con.md#CAPTURE_MODE_PANORAMA) | 拍摄模式：全景模式。 |
| [CAPTURE_MODE_PANORAMA](arkts-image-con.md#CAPTURE_MODE_PANORAMA) | Capture mode: panorama. |
| [CAPTURE_MODE_PORTRAIT](arkts-image-con.md#CAPTURE_MODE_PORTRAIT) | 拍摄模式：人像模式。 |
| [CAPTURE_MODE_PORTRAIT](arkts-image-con.md#CAPTURE_MODE_PORTRAIT) | Capture mode: portrait. |
| [CAPTURE_MODE_PROFESSIONAL](arkts-image-con.md#CAPTURE_MODE_PROFESSIONAL) | 拍摄模式：专业模式。 |
| [CAPTURE_MODE_PROFESSIONAL](arkts-image-con.md#CAPTURE_MODE_PROFESSIONAL) | Capture mode: professional. |
| [CAPTURE_MODE_REAR_LENS_NIGHT_VIEW](arkts-image-con.md#CAPTURE_MODE_REAR_LENS_NIGHT_VIEW) | 拍摄模式：后镜头夜景模式。 |
| [CAPTURE_MODE_REAR_LENS_NIGHT_VIEW](arkts-image-con.md#CAPTURE_MODE_REAR_LENS_NIGHT_VIEW) | Capture mode: night view with rear lens. |
| [CAPTURE_MODE_SILKY_WATER](arkts-image-con.md#CAPTURE_MODE_SILKY_WATER) | 拍摄模式：缎面感水流模式。 |
| [CAPTURE_MODE_SILKY_WATER](arkts-image-con.md#CAPTURE_MODE_SILKY_WATER) | Capture mode: silky water. |
| [CAPTURE_MODE_SNAP_SHOT](arkts-image-con.md#CAPTURE_MODE_SNAP_SHOT) | 拍摄模式：抓拍模式。 |
| [CAPTURE_MODE_SNAP_SHOT](arkts-image-con.md#CAPTURE_MODE_SNAP_SHOT) | Capture mode: snap shot. |
| [CAPTURE_MODE_STAR_TRACK](arkts-image-con.md#CAPTURE_MODE_STAR_TRACK) | 拍摄模式：星轨模式。 |
| [CAPTURE_MODE_STAR_TRACK](arkts-image-con.md#CAPTURE_MODE_STAR_TRACK) | Capture mode: star track. |
| [CAPTURE_MODE_SUPER_MACRO](arkts-image-con.md#CAPTURE_MODE_SUPER_MACRO) | 拍摄模式：超微距模式。 |
| [CAPTURE_MODE_SUPER_MACRO](arkts-image-con.md#CAPTURE_MODE_SUPER_MACRO) | Capture mode: super macro. |
| [CAPTURE_MODE_TAIL_LIGHT](arkts-image-con.md#CAPTURE_MODE_TAIL_LIGHT) | 拍摄模式：尾灯模式。 |
| [CAPTURE_MODE_TAIL_LIGHT](arkts-image-con.md#CAPTURE_MODE_TAIL_LIGHT) | Capture mode: tail light. |
| [CAPTURE_MODE_WIDEAPERTURE](arkts-image-con.md#CAPTURE_MODE_WIDEAPERTURE) | 拍摄模式：广角模式。 |
| [CAPTURE_MODE_WIDEAPERTURE](arkts-image-con.md#CAPTURE_MODE_WIDEAPERTURE) | Capture mode: wide aperture. |
| [DUBLIN_CORE](arkts-image-con.md#DUBLIN_CORE) | Dublin Core元数据命名空间。 |
| [EXIF](arkts-image-con.md#EXIF) | EXIF元数据命名空间。 |
| [TIFF](arkts-image-con.md#TIFF) | TIFF图像格式参数命名空间。 |
| [XMAGE_WATERMARK_MODE_AT_THE_BOTTOM](arkts-image-con.md#XMAGE_WATERMARK_MODE_AT_THE_BOTTOM) | XMAGE水印模式：XMAGE水印固定位于图像底部中央。 |
| [XMAGE_WATERMARK_MODE_AT_THE_BOTTOM](arkts-image-con.md#XMAGE_WATERMARK_MODE_AT_THE_BOTTOM) | The XMAGE watermark is at the bottom of the photo. |
| [XMAGE_WATERMARK_MODE_BORDER](arkts-image-con.md#XMAGE_WATERMARK_MODE_BORDER) | XMAGE水印模式：XMAGE水印会自动调整到边界位置，系统根据图像内容选择最适合的边界区域。 |
| [XMAGE_WATERMARK_MODE_BORDER](arkts-image-con.md#XMAGE_WATERMARK_MODE_BORDER) | The XMAGE watermark is around the edges of the photo. |
| [XMP_BASIC](arkts-image-con.md#XMP_BASIC) | XMP基础命名空间。 |
| [XMP_RIGHTS](arkts-image-con.md#XMP_RIGHTS) | XMP版权与权限命名空间。 |

