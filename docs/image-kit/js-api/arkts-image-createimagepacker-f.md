# createImagePacker

## Modules to Import

```TypeScript
import { image } from '@ohos.multimedia.image';
```

## createImagePacker

```TypeScript
function createImagePacker(): ImagePacker
```

Creates an ImagePacker instance. Images occupy a large amount of memory. When you finish using an ImagePacker instance, call [release](arkts-image-imagepacker-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 6

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

**Return value:**

| Type | Description |
| --- | --- |
| ImagePacker | ImagePacker instance created. |

**Example**

```TypeScript
async function CreateImagePacker() {
  const imagePackerObj: image.ImagePacker = image.createImagePacker();
}

```

