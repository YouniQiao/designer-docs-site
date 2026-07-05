# startVerticalPanel

## startVerticalPanel

```TypeScript
function startVerticalPanel(
      context: common.UIAbilityContext,
      wantParam: Record<string, Object>,
      panelConfig: PanelConfig,
      panelStartCallback: PanelStartCallback
  ): Promise<void>
```

Starts the vertical domain picker with panel config. If the target ability is visible, you can start the target ability; If the target ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability. If the caller application is in the background, it is not allowed to call this interface.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.UIAbilityContext | 是 | Indicates the ui ability context of the application. |
| wantParam | Record&lt;string, Object> | 是 | Indicates the want parameter. |
| panelConfig | PanelConfig | 是 | Indicates the panel config. |
| panelStartCallback | PanelStartCallback | 是 | indicates the panelStartCallback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 16000050 | Failed to connect to the system service or system server handle failed. |
| 16000135 | The main window of this ability of this context does not exits. |

**示例：**

```TypeScript
import { common, verticalPanelManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  @State message: string = 'StartVerticalPanel';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('StartVerticalPanel')
        .fontSize($r('app.float.page_text_font_size'))
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          this.callStartVerticalPanelNapi();
        })
    }
    .height('100%')
    .width('100%');
  }

  // 构造参数，调用startVerticalPanel，拉起垂域应用面板
  callStartVerticalPanelNapi() {
    // Param[0] UIAbilityContext
    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

    // Param[1] wantParam: Record<string, Object>
    let wantParam: Record<string, Object> = {
      'sceneType': 3,
      'destinationName': '练秋湖研发中心'
    };

    // Param[2] PanelConfig
    let sourceAppInfo: Record<string, string> = {};
    sourceAppInfo[verticalPanelManager.SOURCE_APP_BUNDLE_NAME] = 'com.huawei.hmos.browser';
    sourceAppInfo[verticalPanelManager.SOURCE_APP_MODULE_NAME] = 'entry';
    sourceAppInfo[verticalPanelManager.SOURCE_APP_ABILITY_NAME] = 'MainAbility';
    sourceAppInfo[verticalPanelManager.SOURCE_APP_WINDOW_ID] = '0';
    sourceAppInfo[verticalPanelManager.SOURCE_APP_SCREEN_MODE] = '1';

    let panelConfig: verticalPanelManager.PanelConfig = {
      type: verticalPanelManager.VerticalType.NAVIGATION,
      sourceAppInfo: sourceAppInfo
    };

    // Param[3] PanelStartCallback
    let callback: verticalPanelManager.PanelStartCallback = {
      onError: (code: number, name: string, message: string): void => {
        console.info(`startVerticalPanel onError code ${code} name: ${name} message: ${message}`);
      },
      onResult: (result: common.AbilityResult): void => {
        console.info(`startVerticalPanel onResult result ${JSON.stringify(result)}`);
      },
    };

    try {
      console.info(`call startVerticalPanel`);
      verticalPanelManager.startVerticalPanel(context, wantParam, panelConfig, callback)
        .then(() => {
          console.info(`call startVerticalPanel end`);
        })
        .catch((error: BusinessError) => {
          console.error(`call startVerticalPanel promise catch error : ${error}`);
        });
    } catch (error) {
      console.error(`call startVerticalPanel catch error : ${error}`);
    }
  }
}

```

