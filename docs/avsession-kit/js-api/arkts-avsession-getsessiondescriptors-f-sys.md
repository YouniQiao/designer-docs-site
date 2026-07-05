# getSessionDescriptors

## getSessionDescriptors

```TypeScript
function getSessionDescriptors(category: SessionCategory): Promise<Array<Readonly<AVSessionDescriptor>>>
```

Get session descriptors of the system based on different session category.

**Since:** 22

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| category | SessionCategory | Yes | Specifies the category of AVSession. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Promise for an array of AVSessionDescriptors |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |

**Example**

```TypeScript
avSession.getSessionDescriptors(avSession.SessionCategory.CATEGORY_ALL).then((descriptors: avSession.AVSessionDescriptor[]) => {
  console.info(`Succeeded in getting session descriptors, length: ${descriptors.length}`);
  if (descriptors.length > 0) {
    console.info(`Succeeded in getting session descriptor, isActive: ${descriptors[0].isActive}`);
    console.info(`Succeeded in getting session descriptor, type: ${descriptors[0].type}`);
    console.info(`Succeeded in getting session descriptor, sessionTag: ${descriptors[0].sessionTag}`);
  }
});

```

