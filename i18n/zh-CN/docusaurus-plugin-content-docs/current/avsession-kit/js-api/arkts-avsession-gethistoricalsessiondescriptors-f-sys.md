# getHistoricalSessionDescriptors

## getHistoricalSessionDescriptors

```TypeScript
function getHistoricalSessionDescriptors(maxSize: int, callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void
```

Get history avsession records. These sessions have been destroyed.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxSize | int | 是 | Specifies the maximum size of the returned value array. |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | 是 | async callback for an array of  AVSessionDescriptors.  If provided '0' or not provided, the maximum value is determined by the system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App |
| 401 | parameter check failed. Possible causes: 1.Mandatory parameters are left  unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.getHistoricalSessionDescriptors(1, (descriptors: avSession.AVSessionDescriptor[]) => { 
    console.info(`Succeeded in getting historical session descriptors, length: ${descriptors.length}`); 
    if (descriptors.length > 0 ) { 
      console.info(`Succeeded in getting historical session descriptor, isActive: ${descriptors[0].isActive}`); 
      console.info(`Succeeded in getting historical session descriptor, type: ${descriptors[0].type}`); 
      console.info(`Succeeded in getting historical session descriptor, sessionTag: ${descriptors[0].sessionTag}`); 
      console.info(`Succeeded in getting historical session descriptor, sessionId: ${descriptors[0].sessionId}`); 
      console.info(`Succeeded in getting historical session descriptor, bundleName: ${descriptors[0].elementName.bundleName}`); 
    } 
});

```

## getHistoricalSessionDescriptors

```TypeScript
function getHistoricalSessionDescriptors(maxSize?: int): Promise<Array<Readonly<AVSessionDescriptor>>>
```

Get history avsession records. These sessions have been destroyed.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxSize | int | 否 | Specifies the maximum size of the returned value array.  If provided '0' or not provided, the maximum value is determined by the system. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Promise for an array of AVSessionDescriptors |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.getHistoricalSessionDescriptors().then((descriptors: avSession.AVSessionDescriptor[]) => {
  console.info(`Succeeded in getting historical session descriptors, length: ${descriptors.length}`);
  if (descriptors.length > 0 && descriptors[0]) {
    console.info(`Succeeded in getting historical session descriptor, isActive: ${descriptors[0].isActive}`);
    console.info(`Succeeded in getting historical session descriptor, type: ${descriptors[0].type}`);
    console.info(`Succeeded in getting historical session descriptor, sessionTag: ${descriptors[0].sessionTag}`);
    console.info(`Succeeded in getting historical session descriptor, sessionId: ${descriptors[0].sessionId}`);
    console.info(`Succeeded in getting historical session descriptor, bundleName: ${descriptors[0].elementName.bundleName}`);
  }
});

```

