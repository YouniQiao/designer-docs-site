# AdInteractionListener

广告状态变化回调。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { advertising } from '@kit.AdsKit';
```

## onStatusChanged

```TypeScript
onStatusChanged(status: string, ad: Advertisement, data: string)
```

广告状态回调。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | string | Yes | 广告展示状态。  - onAdLoad：广告加载成功。  - onAdFail：广告加载失败。  - onAdOpen：打开广告。  - onAdClick：点击广告。  - onAdClose：关闭广告。  - onMediaProgress：广告播放进度。  - onMediaStart：广告开始播放。  - onMediaPause：广告暂停播放。  - onMediaStop：广告停止播放。  - onMediaComplete：广告播放完成。  - onMediaCountDown：广告倒计时。  - onMediaError：广告播放失败。  - onLandscape：竖屏状态下点击全屏按钮。  - onPortrait：全屏状态下点击返回按钮。  - onBackClicked：点击返回按钮。  - onAdSubWindow：打开半模态。 |
| ad | Advertisement | Yes | 发生状态变化的广告内容。 |
| data | string | Yes | 扩展信息。  当status参数为onAdClose时，data值为关闭原因，关闭原因描述如下：  - adShowEnded：广告展示结束。  - adCloseBtnClicked：点击关闭按钮。  - adSkipBtnClicked：点击跳过。  - adFeedbackClosed：负反馈关闭。  - adBackgroundClosed：开屏切后台关闭。 |

**Example**

```TypeScript
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const adInteractionListener: advertising.AdInteractionListener = {
  onStatusChanged: (status: string, ad: advertising.Advertisement, data: string) => {
    switch (status) {
      case 'onAdLoad':
        hilog.info(0x0000, 'testTag', 'Status is onAdLoad');
        break;
      case 'onAdFail':
        hilog.error(0x0000, 'testTag', 'Status is onAdFail');
        break;
      case 'onAdOpen':
        hilog.info(0x0000, 'testTag', 'Status is onAdOpen');
        break;
      case 'onAdClick':
        hilog.info(0x0000, 'testTag', 'Status is onAdClick');
        break;
      case 'onAdClose':
        // The data value is the close reason.
        hilog.info(0x0000, 'testTag', `Status is onAdClose, Close Reason is ${data}`);
        if (data === 'adShowEnded') {
          // The close reason is that the ad show has ended. You can add processing logic based on the actual scenario.
        }
        break;
      case 'onMediaProgress':
        hilog.info(0x0000, 'testTag', 'Status is onMediaProgress');
        break;
      case 'onMediaStart':
        hilog.info(0x0000, 'testTag', 'Status is onMediaStart');
        break;
      case 'onMediaPause':
        hilog.info(0x0000, 'testTag', 'Status is onMediaPause');
        break;
      case 'onMediaStop':
        hilog.info(0x0000, 'testTag', 'Status is onMediaStop');
        break;
      case 'onMediaComplete':
        hilog.info(0x0000, 'testTag', 'Status is onMediaComplete');
        break;
      case 'onMediaCountDown':
        hilog.info(0x0000, 'testTag', 'Status is onMediaCountDown');
        break;
      case 'onMediaError':
        hilog.info(0x0000, 'testTag', 'Status is onMediaError');
        break;
      case 'onLandscape':
        hilog.info(0x0000, 'testTag', 'Status is onLandscape');
        break;
      case 'onPortrait':
        hilog.info(0x0000, 'testTag', 'Status is onPortrait');
        break;
      case 'onBackClicked':
        hilog.info(0x0000, 'testTag', 'Status is onBackClicked');
        break;
      default:
        break;
    }
  }
}

```

