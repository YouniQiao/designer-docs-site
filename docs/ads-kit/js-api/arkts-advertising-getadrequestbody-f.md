# getAdRequestBody

## getAdRequestBody

```TypeScript
function getAdRequestBody(adParams: AdRequestParams[], adOptions: AdOptions): Promise<string>
```

获取广告请求体，使用Promise异步回调（该接口仅对部分系统预置应用开放）。

**Since:** 12

**System capability:** SystemCapability.Advertising.Ads

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adParams | AdRequestParams[] | Yes | 广告请求参数。  说明： 该接口体的adId参数可以为空。 |
| adOptions | AdOptions | Yes | 广告配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回字符类型的广告数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Invalid input parameter. Possible causes: 1. Mandatory parameters are  left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Device not supported. |
| 21800001 | System internal error. |

**Example**

```TypeScript
import { advertising } from '@kit.AdsKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function getAdRequestBody(adRequestParamsArray: advertising.AdRequestParams[]): Promise<void> {
  // Ad configuration options. You can set the options based on the project requirements.
  const adOptions: advertising.AdOptions = {};
  await advertising.getAdRequestBody(adRequestParamsArray, adOptions).then((data: string) => {
    hilog.info(0x0000, 'testTag', `Succeeded in getting ad request body. Data is ${data}`);
  }).catch((error: BusinessError) => {
    hilog.error(0x0000, 'testTag', `Failed to get ad request body. Code is ${error.code}, message is ${error.message}`);
  });
}

```

