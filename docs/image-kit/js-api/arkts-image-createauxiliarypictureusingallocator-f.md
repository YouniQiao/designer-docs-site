# createAuxiliaryPictureUsingAllocator

## createAuxiliaryPictureUsingAllocator

```TypeScript
function createAuxiliaryPictureUsingAllocator(auxiliaryPictureInfo: AuxiliaryPictureInfo,
    allocatorType?: AllocatorType, pixels?: ArrayBuffer): AuxiliaryPicture
```

使用指定的内存类型，根据辅助图信息和像素数据创建辅助图对象。 > **说明：** > > - 在处理此接口返回的AuxiliaryPicture时，需要考虑内存中每行像素所占的空间的影响。 > > - 创建的辅助图像会使用输入的像素进行初始化。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| auxiliaryPictureInfo | AuxiliaryPictureInfo | Yes | 辅助图图像信息。  - 输入的ArrayBuffer的pixelFormat和最终创建出的辅助图的实际pixelFormat需与auxiliaryPictureInfo中指定的pixelFormat保持一致。  - 当AuxiliaryPictureType为GAINMAP时，AllocatorType仅支持传入AUTO/DMA。  - 当传入SHARE_MEMORY时，返回错误码7600205。 |
| allocatorType | AllocatorType | No |  |
| pixels | ArrayBuffer | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| AuxiliaryPicture | 如果操作成功，则返回AuxiliaryPicture实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600205 | Unsupported allocator type, e.g., use shared memory to create a gainmap as  only DMA supported hdr metadata. |
| 7600206 | Invalid parameter, size.height or size.width is less than or equal to 0. |
| 7600301 | Alloc memory failed. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';

function CreateAuxiliaryPictureUsingAllocator(info: image.AuxiliaryPictureInfo,  allocatorType?: image.AllocatorType, pixels?: ArrayBuffer ) {
  let res : image.AuxiliaryPicture;
  try {
    res = image.createAuxiliaryPictureUsingAllocator(info, allocatorType, pixels);
  } catch (error) {
    console.error(`Failed to create auxiliary picture using allocator=${allocatorType} and pixels=${pixels?.byteLength}.`);
  }
}

```

