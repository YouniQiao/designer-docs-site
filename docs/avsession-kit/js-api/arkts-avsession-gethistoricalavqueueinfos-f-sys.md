# getHistoricalAVQueueInfos (System API)

## Modules to Import

```TypeScript
import { avSession } from '@ohos.multimedia.avsession';
```

## getHistoricalAVQueueInfos

```TypeScript
function getHistoricalAVQueueInfos(maxSize: number, maxAppSize: number, callback: AsyncCallback<Array<Readonly<AVQueueInfo>>>): void
```

Get history play list information records.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | number | Yes | Specifies the maximum size of the returned value array. |
| maxAppSize | number | Yes | Specifies the maximum app size of the returned value array. |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVQueueInfo&gt;&gt;&gt; | Yes | async callback for an array of AVQueueInfo.If provided '0' or not provided, the maximum value is determined by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
avSession.getHistoricalAVQueueInfos(3, 5, (avQueueInfos: avSession.AVQueueInfo[]) => { 
    console.info(`Succeeded in getting historical AV queue infos, length: ${avQueueInfos.length}`); 
});

```


## getHistoricalAVQueueInfos

```TypeScript
function getHistoricalAVQueueInfos(maxSize: number, maxAppSize: number): Promise<Array<Readonly<AVQueueInfo>>>
```

Get history play list information records.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | number | Yes | Specifies the maximum size of the returned value array. |
| maxAppSize | number | Yes | Specifies the maximum app size of the returned value array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVQueueInfo&gt;&gt;&gt; | Promise for an array of AVQueueInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
avSession.getHistoricalAVQueueInfos(3, 5).then((avQueueInfos: avSession.AVQueueInfo[]) => {
  console.info(`Succeeded in getting historical AV queue infos, length: ${avQueueInfos.length}`);
});

```

