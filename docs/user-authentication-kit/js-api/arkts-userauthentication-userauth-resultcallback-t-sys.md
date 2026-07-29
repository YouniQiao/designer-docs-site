# ResultCallback (System API)

```TypeScript
type ResultCallback = (challenge: Uint8Array, result: UserAuthResult) => void
```

Called to return the authentication result. If the authentication is successful,UserAuthResult contains the token information.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-userAuth-type ResultCallback = (challenge: Uint8Array, result: UserAuthResult) => void--><!--Device-userAuth-type ResultCallback = (challenge: Uint8Array, result: UserAuthResult) => void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| challenge | Uint8Array | Yes | Challenge value, which can be passed in Uint8Array([]) format.  |
| result | [UserAuthResult](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-backgroundtaskmanager-userauthresult-e.md) | Yes | Authentication result.  |

