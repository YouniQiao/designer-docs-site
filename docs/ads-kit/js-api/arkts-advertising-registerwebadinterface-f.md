# registerWebAdInterface

## registerWebAdInterface

```TypeScript
function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext): void
```

注入广告JavaScript对象到Web组件中（该接口仅对部分系统预置应用开放）。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | web_webview.WebviewController | Yes | Web组件控制器。 |
| context | common.UIAbilityContext | Yes | UIAbility的上下文环境。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified. |
| 21800001 | System internal error. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct Index {
  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private webViewController: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('registerWebAdInterface')
        .onClick(() => {
          advertising.registerWebAdInterface(this.webViewController, this.context);
        })
      // ...

      Web({ src: 'https://www.example.com', controller: this.webViewController })
    }
    .width('100%')
    .height('100%')
  }
}

```

## registerWebAdInterface

```TypeScript
function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext, 
    needRefresh: boolean): void
```

注入广告JavaScript对象到Web组件中（该接口仅对部分系统预置应用开放）。

**Since:** 16

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | web_webview.WebviewController | Yes | Web组件控制器。 |
| context | common.UIAbilityContext | Yes | UIAbility的上下文环境。 |
| needRefresh | boolean | Yes | 是否需要刷新页面（true: 需要；false: 不需要）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: Mandatory parameters are left  unspecified. |
| 21800001 | System internal error. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct Index {
  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private webViewController: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      // ...
      Button('registerWebAdInterface')
        .onClick(() => {
          advertising.registerWebAdInterface(this.webViewController, this.context, true);
        })

      Web({ src: 'https://www.example.com', controller: this.webViewController })
    }
    .width('100%')
    .height('100%')
  }
}

```

