# IRemoteAuthCallback

提供远端认证场景下获取WigetParam的接口。

**Since:** 26.0.0

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## onGetRemoteAuthWidgetParam

```TypeScript
onGetRemoteAuthWidgetParam: WidgetParamCallback
```

调用以获取远程身份验证的用户身份验证页面上显示的信息。

**Type:** WidgetParamCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## onRemoteAuthResult

```TypeScript
onRemoteAuthResult: ResultCallback
```

调用返回认证结果。如果鉴权成功。 UserAuthResult中包含token信息。

**Type:** ResultCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

