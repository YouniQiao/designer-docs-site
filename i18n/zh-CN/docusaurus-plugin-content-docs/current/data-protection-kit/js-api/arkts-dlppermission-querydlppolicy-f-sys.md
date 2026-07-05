# queryDlpPolicy

## queryDlpPolicy

```TypeScript
function queryDlpPolicy(dlpFd: number): Promise<string>
```

在DLP文件中解析文件头，获取DLP明文策略。返回的策略JSON字符串包含[DLPProperty]dlpPermission.DLPProperty和 [CustomProperty]dlpPermission.CustomProperty信息。使用Promise异步回调。 该接口可用于在查看DLP文件权限配置等场景中，获取文件的策略信息以便进行分析。 > **说明：** > > 该接口仅支持企业账号调用。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ENTERPRISE_ACCESS_DLP_FILE

**系统能力：** SystemCapability.Security.DataLossPrevention

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dlpFd | number | 是 | 待查询策略的DLP文件的fd。取值范围为[0, 231-1]。当fd小于0时，打印错误日志，函数停止运行；当fd大于231-1时，  fd的值被截断。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise对象，返回当前DLP策略的JSON字符串。长度不超过4194304字节。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. [since 20 - 20] |
| 19100001 | Invalid parameter value. |
| 19100002 | Credential service busy due to too many tasks or duplicate tasks. |
| 19100003 | Credential task time out. |
| 19100004 | Credential service error. |
| 19100005 | Credential authentication server error. |
| 19100008 | The file is not a DLP file. |
| 19100009 | Failed to operate the DLP file. |
| 19100011 | The system ability works abnormally. |
| 19100013 | The user does not have the permission. |

**示例：**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { fileIo } from '@kit.CoreFileKit';

let dlpFd : number | undefined = undefined; // 待查询策略的DLP文件描述符。
let dlpFilePath: string = "file://docs/storage/Users/currentUser/Documents/test.txt.dlp"; // 指定DLP文件路径。
dlpFd = fileIo.openSync(dlpFilePath, fileIo.OpenMode.READ_ONLY).fd; // 打开DLP文件获取描述符。
dlpPermission.queryDlpPolicy(dlpFd).then((policy) => {
  console.info('DLP policy:' + policy);
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
}).finally(()=>{
  if (dlpFd) {
    fileIo.closeSync(dlpFd);
  }
});

```

