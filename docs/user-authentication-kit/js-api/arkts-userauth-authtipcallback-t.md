# AuthTipCallback

```TypeScript
type AuthTipCallback = (authTipInfo: AuthTipInfo) => void
```

回调函数，返回认证中间状态。该回调用于在认证过程中获取各种中间状态信息，包括每次认证不通过、冻结状态、界面加载和释放等。通过订阅这些中间状态，应用可以在认证过程中提供更精细的用户交互和状态管理。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authTipInfo | AuthTipInfo | Yes | 认证中间状态。包含认证类型(tipType)和状态码(tipCode)。应用应根据tipCode执行相应处理：  - COMPARE_FAILURE(1)：提示用户重新尝试。  - TIMEOUT(2)：提示用户操作超时。  - TEMPORARILY_LOCKED(3)：提示用户等待冻结解除。  - PERMANENTLY_LOCKED(4)：提示用户需PIN解锁。  - WIDGET_LOADED(5)：认证界面已加载，可执行初始化。  - WIDGET_RELEASED(6)：认证界面已释放，可执行后续操作。  - COMPARE_FAILURE_WITH_FROZEN(7)：提示用户认证不通过且已冻结。 |

