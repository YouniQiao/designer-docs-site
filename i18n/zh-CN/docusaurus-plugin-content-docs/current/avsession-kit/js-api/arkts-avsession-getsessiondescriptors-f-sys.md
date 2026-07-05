# getSessionDescriptors

## getSessionDescriptors

```TypeScript
function getSessionDescriptors(category: SessionCategory): Promise<Array<Readonly<AVSessionDescriptor>>>
```

Get session descriptors of the system based on different session category.

**起始版本：** 22

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| category | SessionCategory | 是 | Specifies the category of AVSession. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Promise for an array of AVSessionDescriptors |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |

**示例：**

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

