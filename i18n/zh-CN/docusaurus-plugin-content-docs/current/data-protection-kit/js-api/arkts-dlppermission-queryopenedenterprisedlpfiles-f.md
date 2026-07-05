# queryOpenedEnterpriseDlpFiles

## queryOpenedEnterpriseDlpFiles

```TypeScript
function queryOpenedEnterpriseDlpFiles(options?: DlpFileQueryOptions): Promise<Array<string>>
```

查询已打开且符合指定选项的企业DLP文件的URI列表。使用Promise异步回调。 在需要管理或追踪当前应用已打开的企业DLP文件时调用该接口，可用于文件状态检查、资源管理等场景。 > **说明：** > > - 该接口仅能查询调用方应用通过[generateDlpFileForEnterprise]dlpPermission.generateDlpFileForEnterprise生成的企业DLP文件，无法查询 > 其他应用生成的企业DLP文件。 > > - 相同分类标签的只读企业DLP文件在同一个沙箱中打开。如果一个沙箱中打开了多个相同标签的只读企业DLP文件，则查询结果返回所有该沙箱打开过文件的URI（包括手动关闭的文件）。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.DataLossPrevention

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DlpFileQueryOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回已打开的目标企业DLP文件的URI列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let options: dlpPermission.DlpFileQueryOptions = {
  classificationLabel: 'label1'
}; // 设置查询选项，指定分类标签。
dlpPermission.queryOpenedEnterpriseDlpFiles(options).then((uris: Array<string>) => {
  console.info("try to query opened enterprise dlp files, result: ", JSON.stringify(uris));
}).catch((error: BusinessError)=> {
  console.error(error.message);
}).finally(()=> {
  console.info("after querying opened enterprise dlp files");
});

```

