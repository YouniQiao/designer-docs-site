# setDlpFeature

## setDlpFeature

```TypeScript
function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>
```

设置DLP特性开关状态。使用Promise异步回调。调用成功后，DLP特性开关将设置为指定状态，系统将根据该状态启用或禁用DLP保护功能。 当特性开关处于开启状态时，右键单击支持加密的文件，右键菜单中会显示“加密保护”选项。可加密类型包括：.txt，.pdf，.xls，.xlsx，.ppt，.pptx，.doc，.docx。 企业策略开启或关闭数据防泄漏功能时使用此接口。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | DlpFeatureStatus | Yes | DLP特性开关状态。ENABLED_FEATURE用于开启DLP特性，菜单中显示"加密保护"选项；NOT_ENABLED_FEATURE用于关闭DLP特性  ，菜单中不显示"加密保护"选项。超出此范围抛出错误码19100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StatusInfoResult> | Promise对象。设置DLP特性开关状态，返回DLP特性开关状态设置的结果信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpSetDlpFeature } from '@kit.DataProtectionKit';

async function exampleFunction() {
  let statusInfoResult: dlpSetDlpFeature.StatusInfoResult =
    await dlpSetDlpFeature.setDlpFeature(dlpSetDlpFeature.DlpFeatureStatus.ENABLED_FEATURE); // Record the execution result.
  console.info('setDlpFeature result: ', JSON.stringify(statusInfoResult));
} // Set the DLP status.

exampleFunction();

```

