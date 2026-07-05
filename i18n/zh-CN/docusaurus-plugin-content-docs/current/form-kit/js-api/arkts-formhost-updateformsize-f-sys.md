# updateFormSize

## updateFormSize

```TypeScript
function updateFormSize(formId: string, newDimension: formInfo.FormDimension, newRect: formInfo.Rect): void
```

Updates the size of the widget.

**起始版本：** 20

**需要权限：** 

 ohos.permission.REQUIRE_FORM

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| newDimension | formInfo.FormDimension | 是 | Widget dimension. For example, Dimension_1_2 indicates a  1 x 2 widget. |
| newRect | formInfo.Rect | 是 | Widget position information, including the X and Y coordinates of the widget's  top-left corner, as well as its width and height. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | caller is not system app. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |
| 16501012 | The dimension parameter is incorrect |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let formId: string = '12400633174999288';
  let newDimension = formInfo.FormDimension.Dimension_1_2;
  let newRect: formInfo.Rect = {
    left: 1,
    top: 2,
    width: 100,
    height: 100
  };
  formHost.updateFormSize(formId, newDimension, newRect);
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

