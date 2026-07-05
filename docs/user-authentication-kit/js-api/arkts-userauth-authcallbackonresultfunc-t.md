# AuthCallbackOnResultFunc

```TypeScript
type AuthCallbackOnResultFunc = (result: UserAuthResult) => void
```

回调函数，返回认证结果。认证成功时，可以通过UserAuthResult获取到认证成功的令牌信息。

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | UserAuthResult | Yes | Authentication result information. |

