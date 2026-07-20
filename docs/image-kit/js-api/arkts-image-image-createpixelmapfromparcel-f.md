# createPixelMapFromParcel

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## createPixelMapFromParcel

```TypeScript
function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap
```

Creates a PixelMap object based on MessageSequence parameter.

**Since:** 11

<!--Device-image-function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap--><!--Device-image-function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | Yes | rpc.MessageSequence parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | Returns the instance if the operation is successful;Otherwise, an exception will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [62980096](../errorcode-image.md#62980096-operation-failed) | The operation failed. Possible cause: 1.Image upload exception.2. Decoding process exception. 3. Insufficient memory. |
| [62980097](../errorcode-image.md#62980097-pixelmap-serialization-failed) | IPC error. Possible cause: 1.IPC communication failed. 2. Image upload exception.3. Decode process exception. 4. Insufficient memory. |
| [62980115](../errorcode-image.md#62980115-invalid-image-parameter) | Invalid input parameter. |
| [62980105](../errorcode-image.md#62980105-failure-in-obtaining-image-data) | Failed to get the data. |
| [62980177](../errorcode-image.md#62980177-abnormal-api-environment) | Abnormal API environment. |
| [62980178](../errorcode-image.md#62980178-failure-in-creating-a-pixelmap) | Failed to create the PixelMap. |
| [62980179](../errorcode-image.md#62980179-abnormal-buffer-size) | Abnormal buffer size. |
| [62980180](../errorcode-image.md#62980180-failure-in-mapping-the-file-descriptor) | FD mapping failed.Possible cause: 1. Size and address does not match. 2. Memory map in memalloc failed. |
| [62980246](../errorcode-image.md#62980246-failure-in-reading-the-pixelmap) | Failed to read the PixelMap. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MySequence implements rpc.Parcelable {
  pixel_map: image.PixelMap;
  constructor(conPixelmap: image.PixelMap) {
    this.pixel_map = conPixelmap;
  }
  marshalling(messageSequence: rpc.MessageSequence) {
    this.pixel_map.marshalling(messageSequence);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence) {
    try {
      this.pixel_map = image.createPixelMapFromParcel(messageSequence);
    } catch(e) {
      let error = e as BusinessError;
      console.error(`createPixelMapFromParcel error. code is ${error.code}, message is ${error.message}`);
      return false;
    }
    return true;
  }
}
async function CreatePixelMapFromParcel() {
  const color: ArrayBuffer = new ArrayBuffer(96);
  let bufferArr: Uint8Array = new Uint8Array(color);
  for (let i = 0; i < bufferArr.length; i++) {
    bufferArr[i] = 0x80;
  }
  let opts: image.InitializationOptions = {
    editable: true,
    pixelFormat: image.PixelMapFormat.BGRA_8888,
    size: { height: 4, width: 6 },
    alphaType: image.AlphaType.UNPREMUL
  }
  let pixelMap: image.PixelMap | undefined = undefined;
  await image.createPixelMap(color, opts).then((srcPixelMap: image.PixelMap) => {
    pixelMap = srcPixelMap;
  })
  if (pixelMap != undefined) {
    // Implement serialization.
    let parcelable: MySequence = new MySequence(pixelMap);
    let data: rpc.MessageSequence = rpc.MessageSequence.create();
    data.writeParcelable(parcelable);

    // Implement deserialization to obtain data through the RPC.
    let ret: MySequence = new MySequence(pixelMap);
    data.readParcelable(ret);

    // Obtain the PixelMap object.
    let newPixelmap = ret.pixel_map;
  }
}

```

