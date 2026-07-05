# searchTarget

## searchTarget

```TypeScript
function searchTarget(target: TargetInfo, params: SearchParams): Promise<SearchResult>
```

Searching for a specified target.

**Since:** 21

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | TargetInfo | Yes | Target infomation. |
| params | SearchParams | Yes | Parameters to use when searching. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SearchResult> | Promise that return the Search result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 33300001 | Service exception. |
| 33300002 | Device not connected. |
| 33300003 | Feature not supported. |
| 33300004 | Camera not opened. |

**Example**

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

