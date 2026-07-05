# resetOAID

## resetOAID

```TypeScript
function resetOAID(): void
```

重置开放匿名设备标识符（OAID）。

**起始版本：** 10

**系统能力：** SystemCapability.Advertising.OAID

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17300001 | System internal error. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 17300002 | Not in the trust list. [since 12] |

**示例：**

```TypeScript
import { identifier } from '@kit.AdsKit';

identifier.resetOAID();

```

