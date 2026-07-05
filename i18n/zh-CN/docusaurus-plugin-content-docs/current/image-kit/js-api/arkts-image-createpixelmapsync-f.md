# createPixelMapSync

## createPixelMapSync

```TypeScript
function createPixelMapSync(colors: ArrayBuffer, options: InitializationOptions): PixelMap
```

Create pixelmap by data buffer. Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixelsSync} instead for better exception handling capabilities.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colors | ArrayBuffer | 是 | The image color buffer. |
| options | InitializationOptions | 是 | Initialization options for pixelmap. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, return undefined. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function CreatePixelMapSync() {
  const color: ArrayBuffer = new ArrayBuffer(96); // 96为需要创建的像素缓冲区大小，取值为：width * height * 4。
  let opts: image.InitializationOptions = {
    size: { height: 4, width: 6 },
    srcPixelFormat: image.PixelMapFormat.RGBA_8888, // 缓冲区中的源像素数据的像素格式。
    pixelFormat: image.PixelMapFormat.RGBA_8888, // 新创建的PixelMap的像素格式。
    editable: true
  };
  try {
    let pixelMap: image.PixelMap = image.createPixelMapSync(color, opts);
    console.info('Succeeded in creating PixelMap.');
    return pixelMap;
  } catch (e) {
    const error = e as BusinessError;
    console.error(`Failed to create PixelMap. Code is ${error.code}, message is ${error.message}`);
  }
}

```

## createPixelMapSync

```TypeScript
function createPixelMapSync(options: InitializationOptions): PixelMap
```

Create an empty pixelmap. Starting from API 26.0.0, it is recommended to use {@link createEmptyPixelMap} instead for better exception handling capabilities.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | InitializationOptions | 是 | Initialization options for pixelmap. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PixelMap | Returns the instance if the operation is successful;Otherwise, return undefined. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function CreatePixelMapSync() {
  let opts: image.InitializationOptions = { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: 4, width: 6 } }
  try {
    let pixelMap: image.PixelMap = image.createPixelMapSync(opts);
    console.info('Succeeded in creating PixelMap.');
    return pixelMap;
  } catch (e) {
    const error = e as BusinessError;
    console.error(`Failed to create PixelMap. Code is ${error.code}, message is ${error.message}`);
  }
}

```

