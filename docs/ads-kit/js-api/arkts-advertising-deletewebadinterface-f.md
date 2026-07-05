# deleteWebAdInterface

## deleteWebAdInterface

```TypeScript
function deleteWebAdInterface(controller: web_webview.WebviewController, needRefresh: boolean): void
```

删除通过registerWebAdInterface注入的广告JavaScript对象（该接口仅对部分系统预置应用开放）。

**Since:** 16

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | web_webview.WebviewController | Yes | Web组件控制器。 |
| needRefresh | boolean | Yes | 是否需要刷新页面（true: 需要；false: 不需要）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: Mandatory parameters are left  unspecified. |
| 21800001 | System internal error. |

**Example**

```TypeScript
import { advertising } from '@kit.AdsKit';
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct Index {
  private webViewController: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('deleteWebAdInterface')
        .onClick(() => {
          advertising.deleteWebAdInterface(this.webViewController, true);
        })

      Web({ src: 'https://www.example.com', controller: this.webViewController })
    }
    .width('100%')
    .height('100%')
  }
}

```

