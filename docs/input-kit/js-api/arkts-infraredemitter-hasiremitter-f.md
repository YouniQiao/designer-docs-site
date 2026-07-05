# hasIrEmitter

## hasIrEmitter

```TypeScript
function hasIrEmitter(): Promise<boolean>
```

查询设备是否配备红外发射器。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_INPUT_INFRARED_EMITTER

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示设备具有红外发射器；返回false表示设备不具有红外发射器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 3800001 | Input service exception. |

**Example**

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
            // Query Whether There Is an Infrared Emitter
            infraredEmitter.hasIrEmitter().then((result: boolean) => {
              console.info(`Succeeded in querying infrared emitter: ${JSON.stringify(result)}.`);
            }).catch((error: BusinessError)=> {
              console.error(`Failed to query infrared emitter, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);})
        })
    }
  }
}

```

