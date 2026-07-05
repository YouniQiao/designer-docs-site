# AdLoader

提供加载广告的功能。

**起始版本：** 11

**系统能力：** SystemCapability.Advertising.Ads

## 导入模块

```TypeScript
import { advertising } from '@kit.AdsKit';
```

## constructor

```TypeScript
constructor(context: common.Context)
```

构造函数。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Advertising.Ads

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.Context | 是 | ability或application的上下文环境。 |

**示例：**

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

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Advertising.Ads

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adParam | AdRequestParams | 是 | 广告请求参数。 |
| adOptions | AdOptions | 是 | 广告配置参数。 |
| listener | AdLoadListener | 是 | 请求广告回调监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified.2. Incorrect parameter types. 3.Parameter verification failed |
| 21800001 | System internal error. |
| 21800003 | Failed to load the ad request. |
| 801 | Device not supported. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// ...
function loadAd(context: common.Context, adRequestParams: advertising.AdRequestParams): void {
  // 广告配置参数，开发者可根据项目实际情况设置
  const adOptions: advertising.AdOptions = {};
  // 广告请求回调监听
  const adLoaderListener: advertising.AdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Array<advertising.Advertisement>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading ad');
      // 保存请求到的广告内容用于展示
      const returnAds: advertising.Advertisement[] = ads;
    }
  };
  // 创建AdLoader广告对象
  const adLoader: advertising.AdLoader = new advertising.AdLoader(context);
  // 调用广告请求接口
  adLoader.loadAd(adRequestParams, adOptions, adLoaderListener);
}

```

## loadAdWithMultiSlots

```TypeScript
loadAdWithMultiSlots(adParams: AdRequestParams[], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void
```

请求多广告位广告。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Advertising.Ads

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adParams | AdRequestParams[] | 是 | 广告请求参数。 |
| adOptions | AdOptions | 是 | 广告配置参数。 |
| listener | MultiSlotsAdLoadListener | 是 | 请求广告回调监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified.2. Incorrect parameter types. 3.Parameter verification failed |
| 21800001 | System internal error. |
| 21800003 | Failed to load the ad request. |
| 801 | Device not supported. [since 12] |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// ...
function loadAdWithMultiSlots(context: common.Context, adRequestParamsArray: advertising.AdRequestParams[]): void {
  // 广告配置参数，开发者可根据项目实际情况设置
  const adOptions: advertising.AdOptions = {};
  // 广告请求回调监听
  const multiSlotsAdLoaderListener: advertising.MultiSlotsAdLoadListener = {
    onAdLoadFailure: (errorCode: number, errorMsg: string) => {
      hilog.error(0x0000, 'testTag', `Failed to load multiSlots ad. Code is ${errorCode}, message is ${errorMsg}`);
    },
    onAdLoadSuccess: (ads: Map<string, Array<advertising.Advertisement>>) => {
      hilog.info(0x0000, 'testTag', 'Succeeded in loading multiSlots ad');
      // 保存请求到的广告内容用于展示
      const returnAds: advertising.Advertisement[] = [];
      ads.forEach((adsArray) => returnAds.push(...adsArray));
    }
  };
  // 创建AdLoader广告对象
  const adLoader: advertising.AdLoader = new advertising.AdLoader(context);
  // 调用广告请求接口
  adLoader.loadAdWithMultiSlots(adRequestParamsArray, adOptions, multiSlotsAdLoaderListener);
}

```

