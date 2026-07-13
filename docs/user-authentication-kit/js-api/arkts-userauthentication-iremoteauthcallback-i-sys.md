# IRemoteAuthCallback (System API)

Provides APIs for getting WidgetParam in remote authentication scenarios.

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

Called to get the information presented on the user authentication page for remote authentication.

**Type:** WidgetParamCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

## onRemoteAuthResult

```TypeScript
onRemoteAuthResult: ResultCallback
```

Called to return the authentication result. If the authentication is successful,
UserAuthResult contains the token information.

**Type:** ResultCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

