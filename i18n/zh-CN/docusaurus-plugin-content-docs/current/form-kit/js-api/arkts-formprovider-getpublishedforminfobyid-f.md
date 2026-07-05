# getPublishedFormInfoById

## getPublishedFormInfoById

```TypeScript
function getPublishedFormInfoById(formId: string): Promise<formInfo.FormInfo>
```

Obtains the information of the widget that has been added to the home screen on the device. This API uses a promise to return the result. > **NOTE** > > This field is supported since API version 18 and deprecated since API version 20. You are advised to use > [getPublishedRunningFormInfoById]formProvider.getPublishedRunningFormInfoById instead.

**起始版本：** 18

**废弃版本：** 20

**替代接口：** formProvider.getPublishedRunningFormInfoById

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.FormInfo> | Promise used to return the information obtained. |

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

const formId: string = '388344236';
try {
  formProvider.getPublishedFormInfoById(formId).then((data: formInfo.FormInfo) => {
    console.info(`formProvider getPublishedFormInfoById, data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`promise error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

