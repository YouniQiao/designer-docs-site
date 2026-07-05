# AdLoader

提供加载广告的功能。

**Since:** 11

**System capability:** SystemCapability.Advertising.Ads

## Modules to Import

```TypeScript
import { advertising } from '@kit.AdsKit';
```

## constructor

```TypeScript
constructor(context: common.Context)
```

构造函数。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | common.Context | Yes | ability或application的上下文环境。 |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
// ...

function createAdLoader(context: common.Context): void {
  const adLoader: advertising.AdLoader = new advertising.AdLoader(context);
}

```

## loadAd

```TypeScript
loadAd(adParam: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void
```

请求单广告位广告。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adParam | AdRequestParams | Yes | 广告请求参数。 |
| adOptions | AdOptions | Yes | 广告配置参数。 |
| listener | AdLoadListener | Yes | 请求广告回调监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified.2. Incorrect parameter types. 3.Parameter verification failed |
| 21800001 | System internal error. |
| 21800003 | Failed to load the ad request. |
| 801 | Device not supported. [since 12] |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// ...
function loadAd(context: common.Context, adRequestParams: advertising.AdRequestParams): void {
  // Ad configuration options. You can set the options based on the project requirements.
  const adOptions: advertising.AdOptions = {};
  // Listener for the ad loading status.
  const adLoaderListener: advertising.AdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');
      // Save the requested ad content for display.
      const returnAds: advertising.Advertisement[] = ads;
    }
  };
  // Create an AdLoader object.
  const adLoader: advertising.AdLoader = new advertising.AdLoader(context);
  // Load the ad.
  adLoader.loadAd(adRequestParams, adOptions, adLoaderListener);
}

```

## loadAdWithMultiSlots

```TypeScript
loadAdWithMultiSlots(adParams: AdRequestParams[], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void
```

请求多广告位广告。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adParams | AdRequestParams[] | Yes | 广告请求参数。 |
| adOptions | AdOptions | Yes | 广告配置参数。 |
| listener | MultiSlotsAdLoadListener | Yes | 请求广告回调监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified.2. Incorrect parameter types. 3.Parameter verification failed |
| 21800001 | System internal error. |
| 21800003 | Failed to load the ad request. |
| 801 | Device not supported. [since 12] |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// ...
function loadAdWithMultiSlots(context: common.Context, adRequestParamsArray: advertising.AdRequestParams[]): void {
  // Ad configuration options. You can set the options based on the project requirements.
  const adOptions: advertising.AdOptions = {};
  // Listener for the ad loading status.
  const multiSlotsAdLoaderListener: advertising.MultiSlotsAdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Map<string, Array<advertising.Advertisement>>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading multiSlots ad');
      // Save the requested ad content for display.
      const returnAds: advertising.Advertisement[] = [];
      ads.forEach((adsArray) => returnAds.push(...adsArray));
    }
  };
  // Create an AdLoader object.
  const adLoader: advertising.AdLoader = new advertising.AdLoader(context);
  // Load the ad.
  adLoader.loadAdWithMultiSlots(adRequestParamsArray, adOptions, multiSlotsAdLoaderListener);
}

```

