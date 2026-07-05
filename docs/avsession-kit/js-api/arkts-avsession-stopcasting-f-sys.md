# stopCasting

## stopCasting

```TypeScript
function stopCasting(session: SessionToken, callback: AsyncCallback<void>): void
```

Stop current cast and disconnect device connection.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken | Yes | Specifies the sessionId which is to be stopped. |
| callback | AsyncCallback&lt;void> | Yes | A callback instance used to return when cast stopped completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600109 | The remote connection is not established |

**Example**

```TypeScript

let myToken: avSession.SessionToken = {
  sessionId: sessionId,
}
avSession.stopCasting(myToken, () => {
    console.info('Succeeded in stopping casting.');
});

```

## stopCasting

```TypeScript
function stopCasting(session: SessionToken): Promise<void>
```

Stop current cast and disconnect device connection.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken | Yes | Specifies the sessionId which is to be stopped. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600109 | The remote connection is not established |

**Example**

```TypeScript

let myToken: avSession.SessionToken = {
  sessionId: sessionId,
}
avSession.stopCasting(myToken).then(() => {
  console.info('Succeeded in stopping casting.');
});

```

