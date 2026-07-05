# searchTarget

## searchTarget

```TypeScript
function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>
```

Searching for a specified target.

**起始版本：** 21

**系统能力：** SystemCapability.Mechanic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | TargetInfo | 是 | Target infomation. |
| params | SearchParams | 是 | Parameters to use when searching. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SearchResult> | Promise that return the Search result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |
| 33300004 | Camera not opened. |

**示例：**

```TypeScript
let targetInfo: mechanicManager.TargetInfo = {
    targetType: mechanicManager.TargetType.HUMAN_FACE
};
let searchParams: mechanicManager.SearchParams = {
    direction: mechanicManager.SearchDirection.DEFAULT
}
mechanicManager.searchTarget(targetInfo,
    searchParams).then((searchResult) => {
    console.info(`'result:' ${searchResult}`);
});

```

