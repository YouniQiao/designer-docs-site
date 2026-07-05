# getOsAccountSubProfileManager

## getOsAccountSubProfileManager

```TypeScript
function getOsAccountSubProfileManager(): OsAccountSubProfileManager
```

获取系统账号子身份资料管理器。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| OsAccountSubProfileManager | 系统账号子身份资料管理器的实例对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |

**Example**

```TypeScript
let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();

```

