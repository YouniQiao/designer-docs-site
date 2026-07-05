# closeFormEditAbility

## closeFormEditAbility

```TypeScript
function closeFormEditAbility(isMainPage?: boolean): void
```

Closes the widget editing page.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isMainPage | boolean | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported due to limited device capabilities. |
| 16500050 | IPC connection error. |
| 16501015 | Cannot close the widget editing page opened by other apps. |

**示例：**

```TypeScript
import { formProvider } from '@kit.FormKit';

const TAG: string = 'FormEditDemo-Page] -->';

@Entry
@Component
struct Page {
  @State message: string = 'Hello World';

  aboutToAppear(): void {
    console.info(`${TAG} aboutToAppear.....`);
  }

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('PageHelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Top },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          console.info(`${TAG} onClick.....`);
          try {
            formProvider.closeFormEditAbility();
            console.info(`${TAG} close FormEditAbility success.`);
          } catch (error) {
            console.error(`${TAG} close FormEditAbility failed, code: ${error.code}, message: ${error.message}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

