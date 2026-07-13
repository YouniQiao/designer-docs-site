# queryBundleStateInfos (System API)

## Modules to Import

```TypeScript
import { bundleState } from '@kit.BackgroundTasksKit';
```

## queryBundleStateInfos

```TypeScript
function queryBundleStateInfos(begin: number, end: number, callback: AsyncCallback<BundleActiveInfoResponse>): void
```

Queries usage information about each bundle within a specified period.

This method queries usage information at the {@link #BY_OPTIMIZED} interval by default.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Indicates the start time of the query period, in milliseconds. |
| end | number | Yes | Indicates the end time of the query period, in milliseconds. |
| callback | AsyncCallback&lt;BundleActiveInfoResponse&gt; | Yes | the callback of queryBundleStateInfos.the {@link BundleActiveInfoResponse} objects containing the usage information about each bundle. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { bundleState } from '@kit.BackgroundTasksKit';

bundleState.queryBundleStateInfos(0, 20000000000000, (err: BusinessError ,
  res: bundleState.BundleActiveInfoResponse ) => {
  if (err) {
    console.error('BUNDLE_ACTIVE queryBundleStateInfos callback failed, because: ' + err.code);
  } else {
    console.info('BUNDLE_ACTIVE queryBundleStateInfos callback success.');
    console.info('BUNDLE_ACTIVE queryBundleStateInfos callback result ' + JSON.stringify(res));
  }
});

```


## queryBundleStateInfos

```TypeScript
function queryBundleStateInfos(begin: number, end: number): Promise<BundleActiveInfoResponse>
```

Queries usage information about each bundle within a specified period.

This method queries usage information at the {@link #BY_OPTIMIZED} interval by default.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.BUNDLE_ACTIVE_INFO

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Indicates the start time of the query period, in milliseconds. |
| end | number | Yes | Indicates the end time of the query period, in milliseconds. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleActiveInfoResponse&gt; | the promise returned by queryBundleStatsInfos.the {@link BundleActiveInfoResponse} objects containing the usage information about each bundle. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { bundleState } from '@kit.BackgroundTasksKit';

bundleState.queryBundleStateInfos(0, 20000000000000).then((res: bundleState.BundleActiveInfoResponse) => {
  console.info('BUNDLE_ACTIVE queryBundleStateInfos promise success.');
  console.info('BUNDLE_ACTIVE queryBundleStateInfos promise result ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE queryBundleStateInfos promise failed, because: ' + err.code);
});

```

