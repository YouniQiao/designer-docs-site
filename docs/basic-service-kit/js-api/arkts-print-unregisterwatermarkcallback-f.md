# unregisterWatermarkCallback

## unregisterWatermarkCallback

```TypeScript
function unregisterWatermarkCallback(callback?: WatermarkCallback): void
```

注销强制水印处理的监听事件。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_PRINT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | WatermarkCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let watermarkCallback: print.WatermarkCallback = (jobId: string, fd: number) => {
    console.info('Watermark callback triggered, jobId: ' + jobId + ', fd: ' + fd);
}

try {
    print.registerWatermarkCallback(watermarkCallback);
    console.info('registerWatermarkCallback success');
    // Deregister the specified callback for watermark processing.
    print.unregisterWatermarkCallback(watermarkCallback);
    console.info('unregisterWatermarkCallback success');
} catch (error) {
    console.error('unregisterWatermarkCallback error: ' + JSON.stringify(error));
}

```

