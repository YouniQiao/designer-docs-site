# parseAdResponse

## parseAdResponse

```TypeScript
function parseAdResponse(adResponse: string, listener: MultiSlotsAdLoadListener, context: common.UIAbilityContext): void
```

解析并处理广告响应体（该接口仅对部分系统预置应用开放）。

**Since:** 12

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adResponse | string | Yes | 广告响应体。 |
| listener | MultiSlotsAdLoadListener | Yes | 请求广告回调监听。 |
| context | common.UIAbilityContext | Yes | UIAbility的上下文环境。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter.Possible causes: 1. Mandatory parameters are  left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Device not supported. |
| 21800001 | System internal error. |
| 21800005 | Failed to parse the ad response. |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

function parseAdResponse(adResponse: string, context: common.UIAbilityContext): void {
  // Listen for the ad parsing callback.
  const multiSlotsAdLoaderListener: advertising.MultiSlotsAdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Map<string, Array<advertising.Advertisement>>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading multiSlots ad');
      // Save the parsed ad content for display.
      const returnAds: advertising.Advertisement[] = [];
      ads.forEach((adsArray) => returnAds.push(...adsArray));
    }
  };
  // Call the API to parse the response body.
  advertising.parseAdResponse(adResponse, multiSlotsAdLoaderListener, context);
}

```

