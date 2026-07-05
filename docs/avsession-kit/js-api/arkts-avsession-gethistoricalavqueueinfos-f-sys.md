# getHistoricalAVQueueInfos

## getHistoricalAVQueueInfos

```TypeScript
function getHistoricalAVQueueInfos(maxSize: int, maxAppSize: int, callback: AsyncCallback<Array<Readonly<AVQueueInfo>>>): void
```

Get history play list information records.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | int | Yes | Specifies the maximum size of the returned value array. |
| maxAppSize | int | Yes | Specifies the maximum app size of the returned value array. |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVQueueInfo>>> | Yes | async callback for an array of AVQueueInfo.  If provided '0' or not provided, the maximum value is determined by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**Example**

```TypeScript
avSession.getHistoricalAVQueueInfos(3, 5, (avQueueInfos: avSession.AVQueueInfo[]) => { 
    console.info(`Succeeded in getting historical AV queue infos, length: ${avQueueInfos.length}`); 
});

```

## getHistoricalAVQueueInfos

```TypeScript
function getHistoricalAVQueueInfos(maxSize: int, maxAppSize: int): Promise<Array<Readonly<AVQueueInfo>>>
```

Get history play list information records.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | int | Yes | Specifies the maximum size of the returned value array. |
| maxAppSize | int | Yes | Specifies the maximum app size of the returned value array. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVQueueInfo>>> | Promise for an array of AVQueueInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**Example**

```TypeScript
avSession.getHistoricalAVQueueInfos(3, 5).then((avQueueInfos: avSession.AVQueueInfo[]) => {
  console.info(`Succeeded in getting historical AV queue infos, length: ${avQueueInfos.length}`);
});

```

