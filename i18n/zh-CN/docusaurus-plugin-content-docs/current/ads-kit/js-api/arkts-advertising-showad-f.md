# showAd

## showAd

```TypeScript
function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void
```

展示全屏广告。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Advertising.Ads

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ad | Advertisement | 是 | 广告对象。 |
| options | AdDisplayOptions | 是 | 广告展示参数。 |
| context | common.UIAbilityContext | 否 | UIAbility的上下文环境，不设置从api:  [@ohos.app.ability.common](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/  js-apis-app-ability-common)中获取。 [since 11 - 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are left  unspecified. |
| 21800001 | System internal error. |
| 21800004 | Failed to display the ad. |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { advertising } from '@kit.AdsKit';

function showAd(ad: advertising.Advertisement, context?: common.UIAbilityContext): void {
  // 广告展示参数，开发者可根据项目实际情况设置
  const adDisplayOptions: advertising.AdDisplayOptions = {};
  // 调用全屏广告展示接口
  advertising.showAd(ad, adDisplayOptions, context);
}

```

