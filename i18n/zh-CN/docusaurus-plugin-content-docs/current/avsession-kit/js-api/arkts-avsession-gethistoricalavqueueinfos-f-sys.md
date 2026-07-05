# getHistoricalAVQueueInfos

## getHistoricalAVQueueInfos

```TypeScript
function getHistoricalAVQueueInfos(maxSize: int, maxAppSize: int, callback: AsyncCallback<Array<Readonly<AVQueueInfo>>>): void
```

Get history play list information records.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxSize | int | 是 | Specifies the maximum size of the returned value array. |
| maxAppSize | int | 是 | Specifies the maximum app size of the returned value array. |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVQueueInfo>>> | 是 | async callback for an array of AVQueueInfo.  If provided '0' or not provided, the maximum value is determined by the system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

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

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxSize | int | 是 | Specifies the maximum size of the returned value array. |
| maxAppSize | int | 是 | Specifies the maximum app size of the returned value array. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVQueueInfo>>> | Promise for an array of AVQueueInfo |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.getHistoricalAVQueueInfos(3, 5).then((avQueueInfos: avSession.AVQueueInfo[]) => {
  console.info(`Succeeded in getting historical AV queue infos, length: ${avQueueInfos.length}`);
});

```

