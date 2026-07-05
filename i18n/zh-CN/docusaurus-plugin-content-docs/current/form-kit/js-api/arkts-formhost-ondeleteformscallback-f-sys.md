# onDeleteFormsCallback

## onDeleteFormsCallback

```TypeScript
function onDeleteFormsCallback(callback: formInfo.DeleteFormsCallback): void
```

Register the callback for deleting forms.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | formInfo.DeleteFormsCallback | 是 | Identifies the callback for deleting forms. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  const callback = (formIds: string[]): void => {
    console.info(`onDeleteFormsCallback formIds length: ${formIds.length}`);
    for (let formId of formIds) {
      console.info(`deleted formId: ${formId}`);
    }
  };
  formHost.onDeleteFormsCallback(callback);
  console.info(`onDeleteFormsCallback success`);
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

