# getPublishedRunningFormInfoById

## getPublishedRunningFormInfoById

```TypeScript
function getPublishedRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>
```

Obtains the information of a specified widget that has been added to the home screen. This API uses a promise to return the result.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;formInfo.RunningFormInfo> | Promise used to return the information about the widgets that meet the  requirements, including the widget name and dimension. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16500050 | IPC connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |
| 16501003 | The form cannot be operated by the current application. |

**示例：**

```TypeScript
import { formInfo, formProvider } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

const formId: string = '388344236';

try {
  formProvider.getPublishedRunningFormInfoById(formId).then((data: formInfo.RunningFormInfo) => {
    console.info(`formProvider getPublishedRunningFormInfoById, data: ${JSON.stringify(data)}`);
  }).catch((error: BusinessError) => {
    console.error(`promise error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

