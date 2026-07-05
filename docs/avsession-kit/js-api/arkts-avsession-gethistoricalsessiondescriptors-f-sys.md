# getHistoricalSessionDescriptors

## getHistoricalSessionDescriptors

```TypeScript
function getHistoricalSessionDescriptors(maxSize: int, callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void
```

Get history avsession records. These sessions have been destroyed.

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | int | Yes | Specifies the maximum size of the returned value array. |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Yes | async callback for an array of  AVSessionDescriptors.  If provided '0' or not provided, the maximum value is determined by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App |
| 401 | parameter check failed. Possible causes: 1.Mandatory parameters are left  unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**Example**

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

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | int | No | Specifies the maximum size of the returned value array.  If provided '0' or not provided, the maximum value is determined by the system. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Promise for an array of AVSessionDescriptors |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**Example**

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

