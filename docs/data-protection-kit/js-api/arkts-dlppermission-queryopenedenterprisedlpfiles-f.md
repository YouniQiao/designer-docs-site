# queryOpenedEnterpriseDlpFiles

## queryOpenedEnterpriseDlpFiles

```TypeScript
function queryOpenedEnterpriseDlpFiles(options?: DlpFileQueryOptions): Promise<Array<string>>
```

查询已打开且符合指定选项的企业DLP文件的URI列表。使用Promise异步回调。 在需要管理或追踪当前应用已打开的企业DLP文件时调用该接口，可用于文件状态检查、资源管理等场景。 > **说明：** > > - 该接口仅能查询调用方应用通过[generateDlpFileForEnterprise]dlpPermission.generateDlpFileForEnterprise生成的企业DLP文件，无法查询 > 其他应用生成的企业DLP文件。 > > - 相同分类标签的只读企业DLP文件在同一个沙箱中打开。如果一个沙箱中打开了多个相同标签的只读企业DLP文件，则查询结果返回所有该沙箱打开过文件的URI（包括手动关闭的文件）。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DlpFileQueryOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回已打开的目标企业DLP文件的URI列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let options: dlpPermission.DlpFileQueryOptions = {
  classificationLabel: 'label1'
}; // Set query options and specify the classification label.
dlpPermission.queryOpenedEnterpriseDlpFiles(options).then((uris: Array<string>) => {
  console.info("try to query opened enterprise dlp files, result: ", JSON.stringify(uris));
}).catch((error: BusinessError)=> {
  console.error(error.message);
}).finally(()=> {
  console.info("after querying opened enterprise dlp files");
});

```

