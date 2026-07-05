# create

## create

```TypeScript
function create(config: FloatViewConfiguration): Promise<FloatViewController>
```

创建标准悬浮窗控制器。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | FloatViewConfiguration | Yes | 创建标准悬浮窗控制器的参数。该参数以及构造该参数的context不能为null或者undefined，否则抛出401。其他参数异常情况抛出130  0016。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FloatViewController> | Promise对象。返回当前创建的标准悬浮窗控制器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Possible cause: Call the API on unsupported device. |
| 1300002 | This window state is abnormal. Possible cause:  1. This window context is abnormal.  2. System error, such as a null pointer, insufficient memory or a JS engine exception. |
| 1300016 | Parameter error.  Possible cause: Invalid template type. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { floatView } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  private floatViewController: floatView.FloatViewController | undefined = undefined;
  aboutToAppear(): void {
    // Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
    let ctx = this.getUIContext().getHostContext() as common.UIAbilityContext;
    // Create a float view configuration object.
    let config: floatView.FloatViewConfiguration = {
      context: ctx,
      templateType: floatView.FloatViewTemplateType.ROUNDED_RECTANGLE
    };
    try {
      // Create a float view controller.
      floatView.create(config).then((data: floatView.FloatViewController) => {
        this.floatViewController = data;
        console.info(`Succeeded in creating float view controller. Data: ${data}`);
      }).catch((err: BusinessError): void => {
        console.error(`Failed to create float view controller. Cause:${err.code}, message:${err.message}`);
      });
    } catch (e) {
      console.error(`Failed to create float view controller. Cause:${e.code}, message:${e.message}`);
    }
  }
}

```

