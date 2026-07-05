# verticalPanelManager

Defines a vertical domain panel manager.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.AppExtension.VerticalPanel

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { verticalPanelManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[startVerticalPanel](arkts-verticalpanelmanager-startverticalpanel-f-sys.md#startVerticalPanel-1) | Starts the vertical domain picker with panel config. If the target ability is visible, you can start the target ability; If the target ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability. If the caller application is in the background, it is not allowed to call this interface. |
| <!--DelRow-->[startVerticalPanel](arkts-verticalpanelmanager-startverticalpanel-f-sys.md#startVerticalPanel-2) | Starts the vertical domain picker with panel config. If the target ability is visible, you can start the target ability; If the target ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability. If the caller application is in the background, it is not allowed to call this interface. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[PanelConfig](arkts-verticalpanelmanager-panelconfig-i-sys.md) | Indicates the panel config |
| <!--DelRow-->[PanelStartCallback](arkts-verticalpanelmanager-panelstartcallback-i-sys.md) | The callback of start vertical panel. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[VerticalType](arkts-verticalpanelmanager-verticaltype-e-sys.md) | Provides vertical type definition. |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SOURCE_APP_ABILITY_NAME](arkts-verticalpanelmanager-con-sys.md#SOURCE_APP_ABILITY_NAME) | export the const string of abilityName and provide it for sourceAppInfo. |
| <!--DelRow-->[SOURCE_APP_BUNDLE_NAME](arkts-verticalpanelmanager-con-sys.md#SOURCE_APP_BUNDLE_NAME) | export the const string of bundleName and provide it for sourceAppInfo. |
| <!--DelRow-->[SOURCE_APP_MODULE_NAME](arkts-verticalpanelmanager-con-sys.md#SOURCE_APP_MODULE_NAME) | export the const string of moduleName and provide it for sourceAppInfo. |
| <!--DelRow-->[SOURCE_APP_SCREEN_MODE](arkts-verticalpanelmanager-con-sys.md#SOURCE_APP_SCREEN_MODE) | export the const string of screenMode and provide it for sourceAppInfo. |
| <!--DelRow-->[SOURCE_APP_WINDOW_ID](arkts-verticalpanelmanager-con-sys.md#SOURCE_APP_WINDOW_ID) | export the const string of windowId and provide it for sourceAppInfo. |

