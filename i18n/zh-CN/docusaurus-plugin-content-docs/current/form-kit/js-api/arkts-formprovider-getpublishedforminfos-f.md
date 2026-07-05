# getPublishedFormInfos

## getPublishedFormInfos

```TypeScript
function getPublishedFormInfos(): Promise<Array<formInfo.FormInfo>>
```

Obtains the information of all widgets that have been added to the home screen on the device. This API uses a promise to return the result. > **NOTE** > > This field is supported since API version 18 and deprecated since API version 20. You are advised to use > [getPublishedRunningFormInfos]formProvider.getPublishedRunningFormInfos instead.

**起始版本：** 18

**废弃版本：** 20

**替代接口：** formProvider.getPublishedRunningFormInfos

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;formInfo.FormInfo>> | Promise used to return the information obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

**示例：**

```TypeScript
import { formInfo, formProvider } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formProvider.getPublishedFormInfos().then((data: formInfo.FormInfo[]) => {
    console.info(`formProvider getPublishedFormInfos, data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`promise error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

