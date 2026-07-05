# getAuthorizationManager

## getAuthorizationManager

```TypeScript
function getAuthorizationManager(): AuthorizationManager
```

获取系统账号授权管理器。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| AuthorizationManager | 返回系统账号授权管理的实例对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |

**Example**

```TypeScript
let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();

```

