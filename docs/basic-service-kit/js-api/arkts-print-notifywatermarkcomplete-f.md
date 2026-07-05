# notifyWatermarkComplete

## notifyWatermarkComplete

```TypeScript
function notifyWatermarkComplete(jobId: string, result: WatermarkHandleResult): void
```

通知水印处理完成。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_PRINT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 表示打印任务ID。 |
| result | WatermarkHandleResult | Yes | 表示水印处理结果。 |

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

    try {
        // Notify the system that the watermark processing is successful.
        print.notifyWatermarkComplete(jobId, print.WatermarkHandleResult.WATERMARK_HANDLE_SUCCESS);
        console.info('notifyWatermarkComplete success');
    } catch (error) {
        console.error('notifyWatermarkComplete error: ' + JSON.stringify(error));
    }
}

try {
    print.registerWatermarkCallback(watermarkCallback);
    console.info('registerWatermarkCallback success');
} catch (error) {
    console.error('registerWatermarkCallback error: ' + JSON.stringify(error));
}

```

