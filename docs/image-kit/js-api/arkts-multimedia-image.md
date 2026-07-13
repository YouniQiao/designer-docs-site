# @ohos.multimedia.image

The module provides capabilities for image decoding, encoding, editing, metadata processing, and image receiving.
This module contains the following classes:

- [ImageSource](arkts-image-imagesource-i.md): provides the capabilities of obtaining
[image information](arkts-image-imageinfo-i.md), decoding images to PixelMaps or Pictures, and
reading and modifying [image properties](arkts-image-propertykey-e.md).
[Supported image formats for decoding](@ohos.multimedia.image: image.ImageSource#supportedFormats)
include png, jpeg, bmp, gif, webp, dng, and heic<sup>12+</sup>.
- [ImagePacker](arkts-image-imagepacker-i.md): provides the capability of encoding images into
compressed data streams or files. Encoding requires the ImageSource, PixelMap, or Picture of an image as the input.
[Supported image formats for encoding](@ohos.multimedia.image: image.ImagePacker#supportedFormats)
include jpeg, webp, png, heic<sup>12+</sup>, and gif<sup>18+</sup>.
- [PixelMap](arkts-image-pixelmap-i.md): contains pixel data and
[image information](arkts-image-imageinfo-i.md). It can be used for reading/writing pixel data and
performing operations such as cropping, scaling, translating, rotating, and mirroring. It can also be directly passed
to the [Image component](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-image-i.md) for display. Additionally, it provides APIs for
obtaining and setting the color gamut and HDR metadata of images.
- [Picture](arkts-image-picture-i.md): a multi-picture object composed of a main picture,
auxiliary pictures, and metadata. The main picture contains the primary image information; auxiliary pictures store
additional information related to the main picture; metadata stores other information related to the image.
Picture provides methods for obtaining the main picture, compositing HDR images, obtaining and setting auxiliary
pictures, and obtaining and setting metadata.
- [AuxiliaryPicture](arkts-image-auxiliarypicture-i.md): used to display special information
alongside the main picture, enriching the overall content of the image. The supported types of auxiliary pictures
can be found in [AuxiliaryPictureType](arkts-image-auxiliarypicturetype-e.md).
- [Metadata](arkts-image-metadata-i.md): used to store image metadata. The supported metadata types
can be found in [MetadataType](arkts-image-metadatatype-e.md). It includes Exif metadata and
watermark cropping metadata, both stored in Key-Value pairs. The keys for Exif metadata can be found in
[PropertyKey](arkts-image-propertykey-e.md), and the keys for watermark cropping metadata can be
found in [FragmentPropertyKey](arkts-image-fragmentmappropertykey-e.md).
- [ImageReceiver](arkts-image-imagereceiver-i.md): acts as a consumer of images, used for receiving
and reading images from a surface.
- [ImageCreator](arkts-image-imagecreator-i.md): acts as a producer of images, used for writing
images into a surface.
- [Image](arkts-image-image-i.md): used by ImageReceiver and ImageCreator for transferring image
objects, with the actual content determined by the producer. For example, the Image object provided by
a camera preview stream contains YUV data, whereas the Image object provided by a camera photo contains a JPEG file.

**Since:** 6

**System capability:** 
- API version 11 and later: SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [CreateIncrementalSource](arkts-image-createincrementalsource-f.md#createincrementalsource-1) | Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or writing of Exif information.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.The ImageSource instance created in incremental mode supports the following capabilities (applicable to synchronous, callback, and promise modes):- Obtaining image information: Call [getImageInfo](arkts-image-imagesource-i.md#getimageinfo-1)to obtain image information by index, or call [getImageInfo](arkts-image-imagesource-i.md#getimageinfo-3) to directly obtain image information.- Obtaining an image property: Call [getImageProperty](arkts-image-imagesource-i.md#getimageproperty-1)to obtain the value of a property with the specified index in an image.- Obtaining image properties: Call [getImageProperties](arkts-image-imagesource-i.md#getimageproperties-1) toobtain the values of properties with the given names in an image.- Updating incremental data: Call [updateData](arkts-image-imagesource-i.md#updatedata-1).- Creating a PixelMap object: Call [createPixelMap](arkts-image-imagesource-i.md#createpixelmap-1) or [createPixelMap](arkts-image-imagesource-i.md#createpixelmap-5)to create a PixelMap object based on decoding options; call [createPixelMap](arkts-image-imagesource-i.md#createpixelmap-3) to create a PixelMap object based on default parameters.- Releasing an ImageSource instance: Call [release](arkts-image-imagesource-i.md#release-1). |
| [CreateIncrementalSource](arkts-image-createincrementalsource-f.md#createincrementalsource-2) | Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or writing of Exif information.The capabilities supported by the ImageSource instance created by this API are the same as those supported by the instance created by [CreateIncrementalSource(buf: ArrayBuffer): ImageSource](arkts-image-createincrementalsource-f.md#createincrementalsource-1).Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createAuxiliaryPicture](arkts-image-createauxiliarypicture-f.md#createauxiliarypicture-1) | Creates an AuxiliaryPicture instance based on the ArrayBuffer image data, auxiliary picture size, and auxiliary picture type. This API accepts only continuous pixel data in BGRA format and will create an auxiliary picture in RGBA format.Images occupy a large amount of memory. When you finish using an AuxiliaryPicture instance, call [release](arkts-image-auxiliarypicture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createAuxiliaryPictureUsingAllocator](arkts-image-createauxiliarypictureusingallocator-f.md#createauxiliarypictureusingallocator-1) | Create an <b>AuxiliaryPicture</b> object, the memory type used by the AuxiliaryPicture can be specified byallocatorType {@link IMAGE_ALLOCATOR_TYPE}. By default, the system selects the memory type based on the image type,image size, platform capability, etc. When processing the AuxiliaryPicture returned by this interface, pleasealways consider the impact of stride. The created auxiliary picture is initialized with the input pixels. |
| [createEmptyPixelMap](arkts-image-createemptypixelmap-f.md#createemptypixelmap-1) | Creates an empty PixelMap.The following pixel format is not supported for PixelMap creation: ASTC_4x4. |
| [createImageCreator](arkts-image-createimagecreator-f.md#createimagecreator-1) | Creates an ImageCreator instance by specifying the image width, height, format, and capacity.Images occupy a large amount of memory. When you finish using an ImageCreator instance, call [release](arkts-image-imagecreator-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageCreator](arkts-image-createimagecreator-f.md#createimagecreator-2) | Creates an ImageCreator instance by specifying the image size, format, and capacity.Images occupy a large amount of memory. When you finish using an ImageCreator instance, call [release](arkts-image-imagecreator-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImagePacker](arkts-image-createimagepacker-f.md#createimagepacker-1) | Creates an ImagePacker instance.Images occupy a large amount of memory. When you finish using an ImagePacker instance, call [release](arkts-image-imagepacker-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createimagereceiver-1) | Creates an ImageReceiver instance by specifying the image width, height, format, and capacity. The ImageReceiver acts as the receiver and consumer of images. Its parameter properties do not actually affect the received images. The configuration of image properties should be done on the sending side (the producer), such as when creating a camera preview stream with [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createpreviewoutput-1).Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call [release](arkts-image-imagereceiver-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createimagereceiver-2) | Creates an ImageReceiver instance by specifying the image size, format, and capacity. The ImageReceiver acts as thereceiver and consumer of images. Its parameter properties do not actually affect the received images. The configuration of image properties should be done on the sending side (the producer), such as when creating a camerapreview stream with [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createpreviewoutput-1).Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call [release](arkts-image-imagereceiver-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageReceiver](arkts-image-createimagereceiver-f.md#createimagereceiver-3) | Creates an ImageReceiver instance. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-1) | Creates an ImageSource instance based on a given URI.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-2) | Creates an ImageSource instance based on a given URI.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-3) | Creates an ImageSource instance based on a given file descriptor.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-4) | Creates an ImageSource instance based on a given file descriptor.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-5) | Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call [image.createPixelMapSync](arkts-image-imagesource-i.md#createpixelmapsync-1).Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-6) | Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call [image.createPixelMapSync](arkts-image-imagesource-i.md#createpixelmapsync-1).Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createImageSource](arkts-image-createimagesource-f.md#createimagesource-7) | Creates an ImageSource instance based on the raw file descriptor of an image resource file.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memorypromptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [createPicture](arkts-image-createpicture-f.md#createpicture-1) | Creates a Picture object based on a main PixelMap.Images occupy a large amount of memory. When you finish using a Picture instance, call [release](arkts-image-picture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is nolonger needed. |
| [createPictureFromParcel](arkts-image-createpicturefromparcel-f.md#createpicturefromparcel-1) | Creates a Picture object from a MessageSequence object.Images occupy a large amount of memory. When you finish using a Picture instance, call [release](arkts-image-picture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is nolonger needed. |
| [createPixelMap](arkts-image-createpixelmap-f.md#createpixelmap-1) | Create pixelmap by data buffer.Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities. |
| [createPixelMap](arkts-image-createpixelmap-f.md#createpixelmap-2) | Create pixelmap by data buffer.Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities. |
| [createPixelMapFromParcel](arkts-image-createpixelmapfromparcel-f.md#createpixelmapfromparcel-1) | Creates a PixelMap object based on MessageSequence parameter. |
| [createPixelMapFromPixels](arkts-image-createpixelmapfrompixels-f.md#createpixelmapfrompixels-1) | Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specifiedpixel format to initialize the PixelMap.The following pixel formats are not supported for PixelMap creation:RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4. |
| [createPixelMapFromPixelsSync](arkts-image-createpixelmapfrompixelssync-f.md#createpixelmapfrompixelssync-1) | Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specifiedpixel format to initialize the PixelMap.The following pixel formats are not supported for PixelMap creation:RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4. |
| [createPixelMapFromSurface](arkts-image-createpixelmapfromsurface-f.md#createpixelmapfromsurface-1) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurface](arkts-image-createpixelmapfromsurface-f.md#createpixelmapfromsurface-2) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceSync](arkts-image-createpixelmapfromsurfacesync-f.md#createpixelmapfromsurfacesync-1) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceSync](arkts-image-createpixelmapfromsurfacesync-f.md#createpixelmapfromsurfacesync-2) | Creates a PixelMap object from surface id. |
| [createPixelMapFromSurfaceWithTransformation](arkts-image-createpixelmapfromsurfacewithtransformation-f.md#createpixelmapfromsurfacewithtransformation-1) | Creates a PixelMap object based on the ID of a Surface with transformation. |
| [createPixelMapFromSurfaceWithTransformationSync](arkts-image-createpixelmapfromsurfacewithtransformationsync-f.md#createpixelmapfromsurfacewithtransformationsync-1) | Creates a PixelMap object based on the ID of a Surface with transformation. |
| [createPixelMapSync](arkts-image-createpixelmapsync-f.md#createpixelmapsync-1) | Create pixelmap by data buffer.Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixelsSync} instead for better exception handling capabilities. |
| [createPixelMapSync](arkts-image-createpixelmapsync-f.md#createpixelmapsync-2) | Create an empty pixelmap.Starting from API 26.0.0, it is recommended to use {@link createEmptyPixelMap} instead for better exception handling capabilities. |
| [createPixelMapUsingAllocator](arkts-image-createpixelmapusingallocator-f.md#createpixelmapusingallocator-1) | Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specifiedby allocatorType. By default, the system selects the memory type based on the image type, image size,platform capability, etc. When processing the PixelMap returned by this interface, please alwaysconsider the impact of stride. |
| [createPixelMapUsingAllocatorSync](arkts-image-createpixelmapusingallocatorsync-f.md#createpixelmapusingallocatorsync-1) | Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specifiedby allocatorType. By default, the system selects the memory type based on the image type, image size,platform capability, etc. When processing the PixelMap returned by this interface, please alwaysconsider the impact of stride. |
| [createPixelMapUsingAllocatorSync](arkts-image-createpixelmapusingallocatorsync-f.md#createpixelmapusingallocatorsync-2) | Create an empty pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specifiedby allocatorType. By default, the system selects the memory type based on the image type, image size,platform capability, etc. When processing the PixelMap returned by this interface, please alwaysconsider the impact of stride. |
| [createPremultipliedPixelMap](arkts-image-createpremultipliedpixelmap-f.md#createpremultipliedpixelmap-1) | Transforms pixelmap from unpremultiplied alpha format to premultiplied alpha format. |
| [createPremultipliedPixelMap](arkts-image-createpremultipliedpixelmap-f.md#createpremultipliedpixelmap-2) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| [createUnpremultipliedPixelMap](arkts-image-createunpremultipliedpixelmap-f.md#createunpremultipliedpixelmap-1) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| [createUnpremultipliedPixelMap](arkts-image-createunpremultipliedpixelmap-f.md#createunpremultipliedpixelmap-2) | Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format. |
| [getImagePackerSupportedFormats](arkts-image-getimagepackersupportedformats-f.md#getimagepackersupportedformats-1) | Obtains the supported encoding formats, represented by MIME types. |
| [getImageSourceSupportedFormats](arkts-image-getimagesourcesupportedformats-f.md#getimagesourcesupportedformats-1) | Obtains the supported decoding formats, represented by MIME types. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createPictureByHdrAndSdrPixelMap](arkts-image-createpicturebyhdrandsdrpixelmap-f-sys.md#createpicturebyhdrandsdrpixelmap-1) | Creates a Picture object based on an HDR PixelMap and an SDR PixelMap. The system uses the HDR PixelMap and SDR PixelMap to generate a gainmap. The returned Picture object contains the SDR PixelMap and the generated gainmap, both in RGBA8888 format. This API uses a promise to return the result. |
| [createPictureByHdrAndSdrPixelMap](arkts-image-createpicturebyhdrandsdrpixelmap-f-sys.md#createpicturebyhdrandsdrpixelmap-2) | Creates a Picture object by a HDR PixelMap and a SDR PixelMap with specified options. A gainmap will be generatedusing the HDR and SDR PixelMap, and the returned Picture will contain the SDR PixelMap and the generated gainmap. |
| [decomposeToPicture](arkts-image-decomposetopicture-f-sys.md#decomposetopicture-1) | Decomposes an HDR Pixelmap object to a Picture object which contains an SDR PixelMap and a gainmap. This API usesa promise to return the result. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [AvisMetadata](arkts-image-avismetadata-c.md) | Avis metadata. |
| [DngMetadata](arkts-image-dngmetadata-c.md) | DNG metadata. |
| [ExifMetadata](arkts-image-exifmetadata-c.md) | ExifMetadata implements MetadataExchangeable Image File Format (Exif) metadata. |
| [GifMetadata](arkts-image-gifmetadata-c.md) | Gif metadata. |
| [HeifsMetadata](arkts-image-heifsmetadata-c.md) | HeifsMetadata implements MetadataHEIF image sequence metadata. |
| [JfifMetadata](arkts-image-jfifmetadata-c.md) | JFIF metadata. |
| [MakerNoteHuaweiMetadata](arkts-image-makernotehuaweimetadata-c.md) | MakerNoteHuaweiMetadata implements MetadataPhoto metadata from Huawei cameras. |
| [PngMetadata](arkts-image-pngmetadata-c.md) | Png metadata. |
| [TiffMetadata](arkts-image-tiffmetadata-c.md) | TIFF metadata. |
| [WebPMetadata](arkts-image-webpmetadata-c.md) | WebP metadata. |
| [XMPMetadata](arkts-image-xmpmetadata-c.md) | XMPMetadata instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [AuxiliaryPicture](arkts-image-auxiliarypicture-i.md) | The **AuxiliaryPicture** class is used to read or write auxiliary picture data of an image and obtain auxiliary picture information of an image. The supported types of auxiliary pictures can be found in [AuxiliaryPictureType](arkts-image-auxiliarypicturetype-e.md).Before calling any API in AuxiliaryPicture, you must create an AuxiliaryPicture instance using [image.createAuxiliaryPicture](arkts-image-createauxiliarypicture-f.md#createauxiliarypicture-1) or [getAuxiliaryPicture](arkts-image-picture-i.md#getauxiliarypicture-1) in Picture.Images occupy a large amount of memory. When you finish using an AuxiliaryPicture instance, call [release](arkts-image-auxiliarypicture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [AuxiliaryPictureInfo](arkts-image-auxiliarypictureinfo-i.md) | Describes the auxiliary picture information. |
| [BinaryBufferInfo](arkts-image-binarybufferinfo-i.md) | Describes binary buffer info. |
| [Component](arkts-image-component-i.md) | Describes the color components of an image. |
| [DecodingOptions](arkts-image-decodingoptions-i.md) | Describes the image decoding options. |
| [DecodingOptionsForPicture](arkts-image-decodingoptionsforpicture-i.md) | Describes the image decoding options. |
| [DecodingOptionsForThumbnail](arkts-image-decodingoptionsforthumbnail-i.md) | Describes thumbnail decoding parameters. |
| [GainmapChannel](arkts-image-gainmapchannel-i.md) | Describes the data content of a single channel of the gain map. For details, see ISO 21496-1. |
| [GetImagePropertyOptions](arkts-image-getimagepropertyoptions-i.md) | Describes the image properties. |
| [HdrComposeOptions](arkts-image-hdrcomposeoptions-i.md) | Describes compose parameters. |
| [HdrGainmapMetadata](arkts-image-hdrgainmapmetadata-i.md) | Describes the metadata keys used by a gain map, that is, the values available for **HDR_GAINMAP_METADATA** in [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md). For details, see ISO 21496-1. |
| [HdrStaticMetadata](arkts-image-hdrstaticmetadata-i.md) | Describes the static metadata keys, that is, the values available for **HDR_STATIC_METADATA** in [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md). |
| [Image](arkts-image-image-i.md) | The **Image** class is used to obtain image content.An Image instance is returned when [readNextImage](arkts-image-imagereceiver-i.md#readnextimage-1) and[readLatestImage](arkts-image-imagereceiver-i.md#readlatestimage-1)are called.Image properties are initialized only during image creation and cannot be changed later. These properties do not affect the actual image content. You should always rely on the properties written by the image producer, that is, the content actually sent to the [ImageReceiver](arkts-image-imagereceiver-i.md) by the data source.Images occupy a large amount of memory. When you finish using an Image instance, call [release](arkts-image-image-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [ImageBufferData](arkts-image-imagebufferdata-i.md) | Describes the image buffer data. |
| [ImageCreator](arkts-image-imagecreator-i.md) | The ImageCreator class provides APIs for applications to request an image data area and compile image data.Before calling any APIs in ImageCreator, you must use [image.createImageCreator](arkts-image-createimagecreator-f.md#createimagecreator-2)to create an ImageCreator instance. ImageCreator does not support multiple threads.Images occupy a large amount of memory. When you finish using an ImageCreator instance, call [release](arkts-image-imagecreator-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [ImageInfo](arkts-image-imageinfo-i.md) | Describes image information. |
| [ImageMetadata](arkts-image-imagemetadata-i.md) | Metadata set of an image. |
| [ImagePacker](arkts-image-imagepacker-i.md) | The **ImagePacker** class provides APIs to compress and encode images.Before calling any API in ImagePacker, you must use [image.createImagePacker](arkts-image-createimagepacker-f.md#createimagepacker-1) to create an ImagePacker instance.During encoding, do not modify or release the ImageSource, PixelMap, or Picture object that is being used as the input. Otherwise, a crash or other undefined behavior may occur.Images occupy a large amount of memory. When you finish using an ImagePacker instance, call [release](arkts-image-imagepacker-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.Currently, the following formats are supported: jpeg, webp, png, heic&lt;sup&gt;12+&lt;/sup&gt;, and gif&lt;sup&gt;18+&lt;/sup&gt;. (The supported formats may vary depending on the hardware. You can refer to the **supportedFormats** property of ImagePacker to see which ones are supported.) |
| [ImagePropertyOptions](arkts-image-imagepropertyoptions-i.md) | Describes the image properties. |
| [ImageRawData](arkts-image-imagerawdata-i.md) | Describes raw data in an image. |
| [ImageReceiver](arkts-image-imagereceiver-i.md) | The **ImageReceiver** class provides APIs to obtain the surface ID of a component, read the latest image, read the next image, and release the ImageReceiver instance. The ImageReceiver acts as the receiver and consumer of images. Its parameter properties do not actually affect the received images. The configuration of image properties should be done on the sending side (the producer), such as when creating a camera preview stream with [createPreviewOutput](../../apis-camera-kit/arkts-apis/arkts-camera-cameramanager-i.md#createpreviewoutput-1).Before calling any APIs in ImageReceiver, you must use [image.createImageReceiver](arkts-image-createimagereceiver-f.md#createimagereceiver-2)to create an ImageReceiver instance.Since API version 23, you are advised to use [image.createImageReceiver](arkts-image-createimagereceiver-f.md#createimagereceiver-2) tocreate an **ImageReceiver** instance based on the passed [ImageReceiverOptions](arkts-image-imagereceiveroptions-i.md). Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call [release](arkts-image-imagereceiver-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [ImageReceiverOptions](arkts-image-imagereceiveroptions-i.md) | Describes the initialization options for ImageReceiver. |
| [ImageSource](arkts-image-imagesource-i.md) | The **ImageSource** class provides APIs to obtain image information.Before calling any API in ImageSource, you must use [image.createImageSource](arkts-image-createimagesource-f.md#createimagesource-1) to create an ImageSource instance.All APIs in ImageSource cannot be called concurrently.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [InitializationOptions](arkts-image-initializationoptions-i.md) | Defines PixelMap initialization options. |
| [Metadata](arkts-image-metadata-i.md) | The **Metadata** class provides APIs for storing image metadata. For details about the supported metadata types, see [MetadataType](arkts-image-metadatatype-e.md). |
| [PackingOption](arkts-image-packingoption-i.md) | Describes the options for image encoding. |
| [PackingOptionsForSequence](arkts-image-packingoptionsforsequence-i.md) | Defines the options for encoding animated images. |
| [PackingOptionsForTiff](arkts-image-packingoptionsfortiff-i.md) | Describes the options for tiff image packing. |
| [PackingSizeLimit](arkts-image-packingsizelimit-i.md) | Packing image size limit. |
| [Picture](arkts-image-picture-i.md) | An image that contains special information can be decoded into a picture object, which generally contains the main picture, auxiliary picture, and metadata. The main picture contains most information about the image and is mainly used to render the image. The auxiliary picture is used to store data related to but different from the main picture, revealing more comprehensive details. The metadata is generally used to store information about the image file. The picture object class is used to read or write picture objects. Before calling any API in Picture, you must use [image.createPicture](arkts-image-createpicture-f.md#createpicture-1) to create a Picture object.Images occupy a large amount of memory. When you finish using a Picture instance, call [release](arkts-image-picture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [PixelMap](arkts-image-pixelmap-i.md) | The **PixelMap** class provides APIs to read or write image data and obtain image information. Before calling anyAPI in PixelMap, you must use[image.createPixelMap](arkts-image-createpixelmap-f.md#createpixelmap-2)to create a PixelMap object. Currently, the maximum size of a serialized PixelMap is 128 MB. A larger size willcause a display failure. The size is calculated as follows: Width x Height x[Bytes per pixel](arkts-image-pixelmapformat-e.md).Since API version 11, PixelMap supports cross-thread calls through [Worker](../../apis-arkts/arkts-apis/arkts-worker.md). If a PixelMapobject is invoked by another thread through [Worker](../../apis-arkts/arkts-apis/arkts-worker.md), all APIs of the PixelMap object cannot becalled in the original thread. Otherwise, error 501 is reported, indicating that the server cannot complete therequest.Before calling any API in PixelMap, you can use[image.createPixelMap](arkts-image-createpixelmap-f.md#createpixelmap-2)to pass pixel data to create a PixelMap object, or use [ImageSource](arkts-multimedia-image.md) to decodean image to a PixelMap object.To develop an atomic service, use [ImageSource](arkts-multimedia-image.md) to create a PixelMap object.Images occupy a large amount of memory. When you finish using a PixelMap instance, call[release](arkts-image-pixelmap-i.md#release-2) to free the memory promptly. Before releasing the instance, ensure thatall asynchronous operations associated with the instance have finished and the instance is no longer needed. |
| [PositionArea](arkts-image-positionarea-i.md) | Describes area information in an image. |
| [Region](arkts-image-region-i.md) | Describes the region information. |
| [Size](arkts-image-size-i.md) | Describes the size of an image. |
| [SourceOptions](arkts-image-sourceoptions-i.md) | Defines image source initialization options. |
| [XMPEnumerateOptions](arkts-image-xmpenumerateoptions-i.md) | Describes XMP enumerate option parameters. |
| [XMPNamespace](arkts-image-xmpnamespace-i.md) | Describes XMP namespace parameters. |
| [XMPTag](arkts-image-xmptag-i.md) | Describes XMP Tag parameters. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DecodingOptions](arkts-image-decodingoptions-i-sys.md) | Describes the image decoding options. |
| [GainmapParams](arkts-image-gainmapparams-i-sys.md) | Describes gainmap generation parameters. |
| [HdrDecomposeOptions](arkts-image-hdrdecomposeoptions-i-sys.md) | Describes the options for decomposing an HDR Pixelmap to a Picture containing an SDR PixelMap and a gainmap. |
| [ImageSource](arkts-image-imagesource-i-sys.md) | The **ImageSource** class provides APIs to obtain image information.Before calling any API in ImageSource, you must use [image.createImageSource](arkts-image-createimagesource-f.md#createimagesource-1) to create an ImageSource instance.All APIs in ImageSource cannot be called concurrently.Images occupy a large amount of memory. When you finish using an ImageSource instance, call [release](arkts-image-imagesource-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AllocatorType](arkts-image-allocatortype-e.md) | Enumerates the types of the memory used for image decoding. |
| [AlphaType](arkts-image-alphatype-e.md) | Enumerates the alpha types of images. |
| [AntiAliasingLevel](arkts-image-antialiasinglevel-e.md) | Enumerates the anti-aliasing levels. |
| [AuxiliaryPictureType](arkts-image-auxiliarypicturetype-e.md) | Enumerates the auxiliary pictures types.Auxiliary pictures do not directly participate in image display, and not all images contain auxiliary pictures.Before obtaining and using a specific auxiliary picture, call [getAuxiliaryPicture](arkts-image-picture-i.md#getauxiliarypicture-1) in Picture to obtain the auxiliary picture. |
| [AvisPropertyKey](arkts-image-avispropertykey-e.md) | Enumerates the properties available for the metadata of a Avis image. |
| [ComponentType](arkts-image-componenttype-e.md) | Enumerates the color component types of images. |
| [CropAndScaleStrategy](arkts-image-cropandscalestrategy-e.md) | Enumerates the order of cropping and scaling.If the **cropAndScaleStrategy** parameter is not specified in [DecodingOptions](arkts-image-decodingoptions-i.md) and both **desiredRegion** and **desiredSize** are set, the final decoding result may vary slightly due to differences in decoding algorithms usedfor different image formats.For example, if the original image size is 200x200, and you specify **desiredSize:{width: 150, height: 150}, desiredRegion:{x: 0, y: 0, width: 100, height: 100}**, the expectation is to decode the top-left 1/4 region of the original image and then scale the pixelMap size to 150x150.For JPEG and WebP images (as well as some DNG images that decode a JPEG preview within the file and therefore are treated as JPEG format), the system first performs downsampling. For instance, it might downsample by 7/8 and then crop the region based on a 175x175 image size. As a result, the final cropped region will be slightly larger than the top-left 1/4 of the original image.For SVG images, which are vector-based and can be scaled without losing clarity, the system scales the image based on the ratio of **desiredSize** to the original image size and then crops the region. This results in a decoded region that may differ from the exact 1/4 region of the original image.To ensure consistent results when both **desiredRegion** and **desiredSize** are set, set the **cropAndScaleStrategy** parameter to **CROP_FIRST**. |
| [DecodingDynamicRange](arkts-image-decodingdynamicrange-e.md) | Enumerates the desired dynamic range of an image during decoding. |
| [DngPropertyKey](arkts-image-dngpropertykey-e.md) | Enumerates the properties available for the metadata of a DNG image. |
| [FocusMode](arkts-image-focusmode-e.md) | Enumerates the focus modes. |
| [FragmentMapPropertyKey](arkts-image-fragmentmappropertykey-e.md) | Enumerates the fragment map information. |
| [GifPropertyKey](arkts-image-gifpropertykey-e.md) | Enumerates the GIF image information. |
| [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md) | Enumerates the keys of HDR metadata used by [pixelmap](arkts-image-pixelmap-i.md). |
| [HdrMetadataType](arkts-image-hdrmetadatatype-e.md) | Enumerates the values available for **HDR_METADATA_TYPE** in [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md). |
| [HeifsPropertyKey](arkts-image-heifspropertykey-e.md) | Enumerates the properties available for the metadata of a HEIFS image. |
| [ImageFormat](arkts-image-imageformat-e.md) | Enumerates the image formats. |
| [JfifPropertyKey](arkts-image-jfifpropertykey-e.md) | Enumerates the properties available for the metadata of a JFIF image. |
| [MetadataType](arkts-image-metadatatype-e.md) | Enumerates image metadata types. |
| [Orientation](arkts-image-orientation-e.md) | Enumerates image orientation. |
| [PackingDynamicRange](arkts-image-packingdynamicrange-e.md) | Enumerates the desired dynamic range of an image during encoding. |
| [PixelMapFormat](arkts-image-pixelmapformat-e.md) | Enumerates the pixel formats of images. |
| [PngPropertyKey](arkts-image-pngpropertykey-e.md) | Enumerates the properties available for the metadata of a PNG image. |
| [PropertyKey](arkts-image-propertykey-e.md) | Enumerates the types of Exchangeable Image File Format (Exif) data of an image.- The key in the format example is **image.PropertyKey.*XXX*** (where *XXX* is the name of an enumeration name, forexample, **image.PropertyKey.NEW_SUBFILE_TYPE**).- The format example is used only to show how to modify values and read results. For details about how to use them,see [modifyImageProperty](arkts-image-imagesource-i.md#modifyimageproperty-1)(to modify a single Exif field), [modifyImageProperties](@ohos.multimedia.image:image.ImageSource.modifyImageProperties(records: Record&lt;PropertyKey, string\|null&gt;))(to modify multiple Exif fields), [getImageProperty](arkts-image-imagesource-i.md#getimageproperty-1)(to read a single Exif field), and [getImageProperties](arkts-image-imagesource-i.md#getimageproperties-1) (to read multiple Exif fields). |
| [ScaleMode](arkts-image-scalemode-e.md) | Enumerates the scale modes of images. |
| [TiffPropertyKey](arkts-image-tiffpropertykey-e.md) | Enumerates the properties available for the metadata of a TIFF image. |
| [WebPPropertyKey](arkts-image-webppropertykey-e.md) | Enumerates the properties available for the metadata of a WebP image. |
| [XMPTagType](arkts-image-xmptagtype-e.md) | Enumerates XMP tag type. |
| [XmageColorMode](arkts-image-xmagecolormode-e.md) | Enumerates the XMAGE color modes. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PropertyKey](arkts-image-propertykey-e-sys.md) | Enumerates the types of Exchangeable Image File Format (Exif) data of an image.- The key in the format example is **image.PropertyKey.*XXX*** (where *XXX* is the name of an enumeration name, forexample, **image.PropertyKey.NEW_SUBFILE_TYPE**).- The format example is used only to show how to modify values and read results. For details about how to use them,see [modifyImageProperty](arkts-image-imagesource-i.md#modifyimageproperty-1)(to modify a single Exif field), [modifyImageProperties](@ohos.multimedia.image:image.ImageSource.modifyImageProperties(records: Record&lt;PropertyKey, string\|null&gt;))(to modify multiple Exif fields), [getImageProperty](arkts-image-imagesource-i.md#getimageproperty-1)(to read a single Exif field), and [getImageProperties](arkts-image-imagesource-i.md#getimageproperties-1) (to read multiple Exif fields). |
| [ResolutionQuality](arkts-image-resolutionquality-e-sys.md) | Enumerates the image quality levels. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [HdrMetadataValue](arkts-image-hdrmetadatavalue-t.md) | Describes the HDR metadata values used by a PixelMap, which corresponds to the values available for [HdrMetadataKey](arkts-image-hdrmetadatakey-e.md). |

### Constants

| Name | Description |
| --- | --- |
| [CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW](arkts-image-image-con.md#capture_mode_front_lens_night_view) | Capture mode: night view with front lens. |
| [CAPTURE_MODE_LIGHT_GRAFFITI](arkts-image-image-con.md#capture_mode_light_graffiti) | Capture mode: light graffiti. |
| [CAPTURE_MODE_MOVING_PHOTO](arkts-image-image-con.md#capture_mode_moving_photo) | Capture mode: moving photos. |
| [CAPTURE_MODE_PANORAMA](arkts-image-image-con.md#capture_mode_panorama) | Capture mode: panorama. |
| [CAPTURE_MODE_PORTRAIT](arkts-image-image-con.md#capture_mode_portrait) | Capture mode: portrait. |
| [CAPTURE_MODE_PROFESSIONAL](arkts-image-image-con.md#capture_mode_professional) | Capture mode: professional. |
| [CAPTURE_MODE_REAR_LENS_NIGHT_VIEW](arkts-image-image-con.md#capture_mode_rear_lens_night_view) | Capture mode: night view with rear lens. |
| [CAPTURE_MODE_SILKY_WATER](arkts-image-image-con.md#capture_mode_silky_water) | Capture mode: silky water. |
| [CAPTURE_MODE_SNAP_SHOT](arkts-image-image-con.md#capture_mode_snap_shot) | Capture mode: snap shot. |
| [CAPTURE_MODE_STAR_TRACK](arkts-image-image-con.md#capture_mode_star_track) | Capture mode: star track. |
| [CAPTURE_MODE_SUPER_MACRO](arkts-image-image-con.md#capture_mode_super_macro) | Capture mode: super macro. |
| [CAPTURE_MODE_TAIL_LIGHT](arkts-image-image-con.md#capture_mode_tail_light) | Capture mode: tail light. |
| [CAPTURE_MODE_WIDEAPERTURE](arkts-image-image-con.md#capture_mode_wideaperture) | Capture mode: wide aperture. |
| [DUBLIN_CORE](arkts-image-image-con.md#dublin_core) | XMP namespace: dublin core. |
| [EXIF](arkts-image-image-con.md#exif) | XMP namespace: exif. |
| [TIFF](arkts-image-image-con.md#tiff) | XMP namespace: tiff. |
| [XMAGE_WATERMARK_MODE_AT_THE_BOTTOM](arkts-image-image-con.md#xmage_watermark_mode_at_the_bottom) | The XMAGE watermark is at the bottom of the photo. |
| [XMAGE_WATERMARK_MODE_BORDER](arkts-image-image-con.md#xmage_watermark_mode_border) | The XMAGE watermark is around the edges of the photo. |
| [XMP_BASIC](arkts-image-image-con.md#xmp_basic) | XMP namespace: XMP basic. |
| [XMP_RIGHTS](arkts-image-image-con.md#xmp_rights) | XMP namespace: XMP rights. |

