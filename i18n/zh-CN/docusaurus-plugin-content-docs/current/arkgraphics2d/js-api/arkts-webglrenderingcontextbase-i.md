# WebGLRenderingContextBase

WebGL 1.0

**起始版本：** 7

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## activeTexture

```TypeScript
activeTexture(texture: GLenum): void
```

Selects active texture unit

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| texture | GLenum | 是 | Texture unit to activate |

## attachShader

```TypeScript
attachShader(program: WebGLProgram, shader: WebGLShader): void
```

Attaches a shader to a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program to attach the shader to |
| shader | WebGLShader | 是 | The shader to attach |

## bindAttribLocation

```TypeScript
bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void
```

Binds a generic vertex index to a named attribute variable

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program to bind the attribute location |
| index | GLuint | 是 | The index of the generic vertex attribute |
| name | string | 是 | The name of the attribute variable |

## bindBuffer

```TypeScript
bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void
```

Binds a buffer to a target

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | The target to bind the buffer to |
| buffer | WebGLBuffer \| null | 是 | The buffer to bind |

## bindFramebuffer

```TypeScript
bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void
```

Binds a framebuffer to a target

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | The target to bind the framebuffer to |
| framebuffer | WebGLFramebuffer \| null | 是 | The framebuffer to bind |

## bindRenderbuffer

```TypeScript
bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void
```

Binds a renderbuffer to a target

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | The target to bind the renderbuffer to |
| renderbuffer | WebGLRenderbuffer \| null | 是 | The renderbuffer to bind |

## bindTexture

```TypeScript
bindTexture(target: GLenum, texture: WebGLTexture | null): void
```

Binds a texture to a target

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | The target to bind the texture to |
| texture | WebGLTexture \| null | 是 | The texture to bind |

## blendColor

```TypeScript
blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void
```

Sets the blend color

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| red | GLclampf | 是 | Red component |
| green | GLclampf | 是 | Green component |
| blue | GLclampf | 是 | Blue component |
| alpha | GLclampf | 是 | Alpha component |

## blendFunc

```TypeScript
blendFunc(sfactor: GLenum, dfactor: GLenum): void
```

Sets the blend function

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sfactor | GLenum | 是 | Source blend factor |
| dfactor | GLenum | 是 | Destination blend factor |

## blendFuncSeparate

```TypeScript
blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void
```

Sets the blend function for RGB and alpha separately

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcRGB | GLenum | 是 | Source RGB blend factor |
| dstRGB | GLenum | 是 | Destination RGB blend factor |
| srcAlpha | GLenum | 是 | Source alpha blend factor |
| dstAlpha | GLenum | 是 | Destination alpha blend factor |

## checkFramebufferStatus

```TypeScript
checkFramebufferStatus(target: GLenum): GLenum
```

Returns the framebuffer status

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | The target framebuffer |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLenum | The framebuffer status |

## clear

```TypeScript
clear(mask: GLbitfield): void
```

Clears buffers

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mask | GLbitfield | 是 | Which buffers to clear |

## clearColor

```TypeScript
clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void
```

Sets the clear color

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| red | GLclampf | 是 | Red component |
| green | GLclampf | 是 | Green component |
| blue | GLclampf | 是 | Blue component |
| alpha | GLclampf | 是 | Alpha component |

## clearDepth

```TypeScript
clearDepth(depth: GLclampf): void
```

Sets the clear depth

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| depth | GLclampf | 是 | Depth clear value |

## clearStencil

```TypeScript
clearStencil(s: GLint): void
```

Sets the clear stencil

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| s | GLint | 是 | Stencil clear value |

## colorMask

```TypeScript
colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void
```

Sets the color mask

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| red | GLboolean | 是 | Whether to write red |
| green | GLboolean | 是 | Whether to write green |
| blue | GLboolean | 是 | Whether to write blue |
| alpha | GLboolean | 是 | Whether to write alpha |

## compileShader

```TypeScript
compileShader(shader: WebGLShader): void
```

Compiles a shader

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader | 是 | The shader to compile |

## copyTexImage2D

```TypeScript
copyTexImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLenum,
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
    ): void
```

Copies pixels from the framebuffer into a 2D texture image

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| internalformat | GLenum | 是 | Internal format |
| x | GLint | 是 | X coordinate |
| y | GLint | 是 | Y coordinate |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |
| border | GLint | 是 | Border width |

## copyTexSubImage2D

```TypeScript
copyTexSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
    ): void
```

Copies a portion of a texture image

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| level | GLint | 是 | Mipmap level |
| xoffset | GLint | 是 | X offset |
| yoffset | GLint | 是 | Y offset |
| x | GLint | 是 | X coordinate |
| y | GLint | 是 | Y coordinate |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |

## createBuffer

```TypeScript
createBuffer(): WebGLBuffer | null
```

Creates a buffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLBuffer | The created buffer |

## createFramebuffer

```TypeScript
createFramebuffer(): WebGLFramebuffer | null
```

Creates a framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLFramebuffer | The created framebuffer |

## createProgram

```TypeScript
createProgram(): WebGLProgram | null
```

Creates a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLProgram | The created program |

## createRenderbuffer

```TypeScript
createRenderbuffer(): WebGLRenderbuffer | null
```

Creates a renderbuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLRenderbuffer | The created renderbuffer |

## createShader

```TypeScript
createShader(type: GLenum): WebGLShader | null
```

Creates a shader

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | GLenum | 是 | Shader type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLShader | The created shader |

## createTexture

```TypeScript
createTexture(): WebGLTexture | null
```

Creates a texture

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLTexture | The created texture |

## cullFace

```TypeScript
cullFace(mode: GLenum): void
```

Sets the cull face mode

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | GLenum | 是 | Cull face mode |

## deleteBuffer

```TypeScript
deleteBuffer(buffer: WebGLBuffer | null): void
```

Deletes a buffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | WebGLBuffer \| null | 是 | The buffer to delete |

## deleteFramebuffer

```TypeScript
deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void
```

Deletes a framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| framebuffer | WebGLFramebuffer \| null | 是 | The framebuffer to delete |

## deleteProgram

```TypeScript
deleteProgram(program: WebGLProgram | null): void
```

Deletes a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram \| null | 是 | The program to delete |

## deleteRenderbuffer

```TypeScript
deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void
```

Deletes a renderbuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| renderbuffer | WebGLRenderbuffer \| null | 是 | The renderbuffer to delete |

## deleteShader

```TypeScript
deleteShader(shader: WebGLShader | null): void
```

Deletes a shader

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader \| null | 是 | The shader to delete |

## deleteTexture

```TypeScript
deleteTexture(texture: WebGLTexture | null): void
```

Deletes a texture

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| texture | WebGLTexture \| null | 是 | The texture to delete |

## depthFunc

```TypeScript
depthFunc(func: GLenum): void
```

Sets the depth function

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| func | GLenum | 是 | Depth function |

## depthMask

```TypeScript
depthMask(flag: GLboolean): void
```

Sets the depth mask

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flag | GLboolean | 是 | Whether to write to depth buffer |

## depthRange

```TypeScript
depthRange(zNear: GLclampf, zFar: GLclampf): void
```

Sets the depth range

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zNear | GLclampf | 是 | Near depth |
| zFar | GLclampf | 是 | Far depth |

## detachShader

```TypeScript
detachShader(program: WebGLProgram, shader: WebGLShader): void
```

Detaches a shader from a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| shader | WebGLShader | 是 | The shader to detach |

## disable

```TypeScript
disable(cap: GLenum): void
```

Disables a capability

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cap | GLenum | 是 | The capability to disable |

## disableVertexAttribArray

```TypeScript
disableVertexAttribArray(index: GLuint): void
```

Disables a vertex attribute array

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | The index of the vertex attribute |

## drawArrays

```TypeScript
drawArrays(mode: GLenum, first: GLint, count: GLsizei): void
```

Draws arrays

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | GLenum | 是 | Drawing mode |
| first | GLint | 是 | Starting index |
| count | GLsizei | 是 | Number of indices |

## drawElements

```TypeScript
drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void
```

Draws elements

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | GLenum | 是 | Drawing mode |
| count | GLsizei | 是 | Number of indices |
| type | GLenum | 是 | Type of indices |
| offset | GLintptr | 是 | Offset in the buffer |

## enable

```TypeScript
enable(cap: GLenum): void
```

Enables a capability

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cap | GLenum | 是 | The capability to enable |

## enableVertexAttribArray

```TypeScript
enableVertexAttribArray(index: GLuint): void
```

Enables a vertex attribute array

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | The index of the vertex attribute |

## finish

```TypeScript
finish(): void
```

Signals the completion of GL rendering

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## flush

```TypeScript
flush(): void
```

Forces all pending GL commands to be executed

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## framebufferRenderbuffer

```TypeScript
framebufferRenderbuffer(
      target: GLenum,
      attachment: GLenum,
      renderbuffertarget: GLenum,
      renderbuffer: WebGLRenderbuffer | null,
    ): void
```

Attaches a renderbuffer to a framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Framebuffer target |
| attachment | GLenum | 是 | Attachment point |
| renderbuffertarget | GLenum | 是 | Renderbuffer target |
| renderbuffer | WebGLRenderbuffer \| null | 是 | The renderbuffer to attach |

## framebufferTexture2D

```TypeScript
framebufferTexture2D(
      target: GLenum,
      attachment: GLenum,
      textarget: GLenum,
      texture: WebGLTexture | null,
      level: GLint,
    ): void
```

Attaches a texture to a framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Framebuffer target |
| attachment | GLenum | 是 | Attachment point |
| textarget | GLenum | 是 | Texture target |
| texture | WebGLTexture \| null | 是 | The texture to attach |
| level | GLint | 是 | Mipmap level |

## frontFace

```TypeScript
frontFace(mode: GLenum): void
```

Sets the front face direction

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | GLenum | 是 | Front face mode |

## generateMipmap

```TypeScript
generateMipmap(target: GLenum): void
```

Generates mipmaps for a texture

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |

## getActiveAttrib

```TypeScript
getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null
```

Returns information about an active attribute

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| index | GLuint | 是 | The index of the attribute |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLActiveInfo | Information about the active attribute |

## getActiveUniform

```TypeScript
getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null
```

Returns information about an active uniform

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| index | GLuint | 是 | The index of the uniform |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLActiveInfo | Information about the active uniform |

## getAttachedShaders

```TypeScript
getAttachedShaders(program: WebGLProgram): WebGLShader[] | null
```

Returns the shaders attached to a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLShader[] | Array of attached shaders |

## getAttribLocation

```TypeScript
getAttribLocation(program: WebGLProgram, name: string): GLint
```

Returns the location of an attribute variable

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| name | string | 是 | The name of the attribute |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLint | The location of the attribute |

## getBufferParameter

```TypeScript
getBufferParameter(target: GLenum, pname: GLenum): any
```

Returns a buffer parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Buffer target |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The buffer parameter value |

## getContextAttributes

```TypeScript
getContextAttributes(): WebGLContextAttributes | null
```

Returns the WebGLContextAttributes for the current context

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLContextAttributes | The WebGLContextAttributes object |

## getError

```TypeScript
getError(): GLenum
```

Returns the error code

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLenum | The error code |

## getExtension

```TypeScript
getExtension(name: string): any
```

Enables a WebGL extension

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | The name of the extension |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The extension object if available |

## getFramebufferAttachmentParameter

```TypeScript
getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any
```

Returns a framebuffer attachment parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Framebuffer target |
| attachment | GLenum | 是 | Attachment point |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The attachment parameter value |

## getParameter

```TypeScript
getParameter(pname: GLenum): any
```

Returns a parameter value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The parameter value |

## getProgramInfoLog

```TypeScript
getProgramInfoLog(program: WebGLProgram): string | null
```

Returns the program info log

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The program info log |

## getProgramParameter

```TypeScript
getProgramParameter(program: WebGLProgram, pname: GLenum): any
```

Returns a program parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The program parameter value |

## getRenderbufferParameter

```TypeScript
getRenderbufferParameter(target: GLenum, pname: GLenum): any
```

Returns a renderbuffer parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Renderbuffer target |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The renderbuffer parameter value |

## getShaderInfoLog

```TypeScript
getShaderInfoLog(shader: WebGLShader): string | null
```

Returns the shader info log

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader | 是 | The shader |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The shader info log |

## getShaderParameter

```TypeScript
getShaderParameter(shader: WebGLShader, pname: GLenum): any
```

Returns a shader parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader | 是 | The shader |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The shader parameter value |

## getShaderPrecisionFormat

```TypeScript
getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null
```

Returns the shader precision format

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shadertype | GLenum | 是 | Shader type |
| precisiontype | GLenum | 是 | Precision type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLShaderPrecisionFormat | The precision format |

## getShaderSource

```TypeScript
getShaderSource(shader: WebGLShader): string | null
```

Returns the shader source

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader | 是 | The shader |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The shader source |

## getSupportedExtensions

```TypeScript
getSupportedExtensions(): string[] | null
```

Returns a list of supported extensions

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | List of supported extensions |

## getTexParameter

```TypeScript
getTexParameter(target: GLenum, pname: GLenum): any
```

Returns a texture parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The texture parameter value |

## getUniform

```TypeScript
getUniform(program: WebGLProgram, location: WebGLUniformLocation): any
```

Returns the value of a uniform

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| location | WebGLUniformLocation | 是 | The uniform location |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The uniform value |

## getUniformLocation

```TypeScript
getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null
```

Returns the location of a uniform variable

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program |
| name | string | 是 | The name of the uniform |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLUniformLocation | The uniform location |

## getVertexAttrib

```TypeScript
getVertexAttrib(index: GLuint, pname: GLenum): any
```

Returns a vertex attribute parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | The index of the vertex attribute |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | The vertex attribute parameter value |

## getVertexAttribOffset

```TypeScript
getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr
```

Returns the offset of a vertex attribute

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | The index of the vertex attribute |
| pname | GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLintptr | The vertex attribute offset |

## hint

```TypeScript
hint(target: GLenum, mode: GLenum): void
```

Sets a hint

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Hint target |
| mode | GLenum | 是 | Hint mode |

## isBuffer

```TypeScript
isBuffer(buffer: WebGLBuffer | null): GLboolean
```

Returns whether a buffer is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | WebGLBuffer \| null | 是 | The buffer |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the buffer is valid |

## isContextLost

```TypeScript
isContextLost(): boolean
```

Returns whether the context is lost

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the context is lost |

## isEnabled

```TypeScript
isEnabled(cap: GLenum): GLboolean
```

Returns whether a capability is enabled

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cap | GLenum | 是 | The capability |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the capability is enabled |

## isFramebuffer

```TypeScript
isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean
```

Returns whether a framebuffer is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| framebuffer | WebGLFramebuffer \| null | 是 | The framebuffer |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the framebuffer is valid |

## isProgram

```TypeScript
isProgram(program: WebGLProgram | null): GLboolean
```

Returns whether a program is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram \| null | 是 | The program |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the program is valid |

## isRenderbuffer

```TypeScript
isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean
```

Returns whether a renderbuffer is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| renderbuffer | WebGLRenderbuffer \| null | 是 | The renderbuffer |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the renderbuffer is valid |

## isShader

```TypeScript
isShader(shader: WebGLShader | null): GLboolean
```

Returns whether a shader is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader \| null | 是 | The shader |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the shader is valid |

## isTexture

```TypeScript
isTexture(texture: WebGLTexture | null): GLboolean
```

Returns whether a texture is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| texture | WebGLTexture \| null | 是 | The texture |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| GLboolean | Whether the texture is valid |

## lineWidth

```TypeScript
lineWidth(width: GLfloat): void
```

Sets the line width

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | GLfloat | 是 | Line width |

## linkProgram

```TypeScript
linkProgram(program: WebGLProgram): void
```

Links a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program to link |

## pixelStorei

```TypeScript
pixelStorei(pname: GLenum, param: GLint | GLboolean): void
```

Sets pixel storage parameters

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pname | GLenum | 是 | Parameter name |
| param | GLint \| GLboolean | 是 | Parameter value |

## polygonOffset

```TypeScript
polygonOffset(factor: GLfloat, units: GLfloat): void
```

Sets the polygon offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| factor | GLfloat | 是 | Scale factor |
| units | GLfloat | 是 | Units |

## renderbufferStorage

```TypeScript
renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void
```

Sets the renderbuffer storage

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Renderbuffer target |
| internalformat | GLenum | 是 | Internal format |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |

## sampleCoverage

```TypeScript
sampleCoverage(value: GLclampf, invert: GLboolean): void
```

Sets the sample coverage

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | GLclampf | 是 | Coverage value |
| invert | GLboolean | 是 | Invert coverage |

## scissor

```TypeScript
scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
```

Sets the scissor box

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | GLint | 是 | X coordinate |
| y | GLint | 是 | Y coordinate |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |

## shaderSource

```TypeScript
shaderSource(shader: WebGLShader, source: string): void
```

Sets the shader source

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | WebGLShader | 是 | The shader |
| source | string | 是 | The source code |

## stencilFunc

```TypeScript
stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void
```

Sets the stencil function

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| func | GLenum | 是 | Stencil function |
| ref | GLint | 是 | Reference value |
| mask | GLuint | 是 | Mask |

## stencilFuncSeparate

```TypeScript
stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void
```

Sets the stencil function separately for front and back faces

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| face | GLenum | 是 | Face mode |
| func | GLenum | 是 | Stencil function |
| ref | GLint | 是 | Reference value |
| mask | GLuint | 是 | Mask |

## stencilMask

```TypeScript
stencilMask(mask: GLuint): void
```

Sets the stencil mask

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mask | GLuint | 是 | Stencil mask |

## stencilMaskSeparate

```TypeScript
stencilMaskSeparate(face: GLenum, mask: GLuint): void
```

Sets the stencil mask separately for front and back faces

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| face | GLenum | 是 | Face mode |
| mask | GLuint | 是 | Stencil mask |

## stencilOp

```TypeScript
stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void
```

Sets the stencil operation

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fail | GLenum | 是 | Operation when stencil test fails |
| zfail | GLenum | 是 | Operation when depth test fails |
| zpass | GLenum | 是 | Operation when depth test passes |

## stencilOpSeparate

```TypeScript
stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void
```

Sets the stencil operation separately for front and back faces

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| face | GLenum | 是 | Face mode |
| fail | GLenum | 是 | Operation when stencil test fails |
| zfail | GLenum | 是 | Operation when depth test fails |
| zpass | GLenum | 是 | Operation when depth test passes |

## texParameterf

```TypeScript
texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void
```

Sets a texture parameter (float)

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| pname | GLenum | 是 | Parameter name |
| param | GLfloat | 是 | Parameter value |

## texParameteri

```TypeScript
texParameteri(target: GLenum, pname: GLenum, param: GLint): void
```

Sets a texture parameter (int)

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | GLenum | 是 | Texture target |
| pname | GLenum | 是 | Parameter name |
| param | GLint | 是 | Parameter value |

## uniform1f

```TypeScript
uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void
```

Sets a uniform1f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLfloat | 是 | X value |

## uniform1i

```TypeScript
uniform1i(location: WebGLUniformLocation | null, x: GLint): void
```

Sets a uniform1i value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLint | 是 | X value |

## uniform2f

```TypeScript
uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void
```

Sets a uniform2f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |

## uniform2i

```TypeScript
uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void
```

Sets a uniform2i value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLint | 是 | X value |
| y | GLint | 是 | Y value |

## uniform3f

```TypeScript
uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void
```

Sets a uniform3f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |
| z | GLfloat | 是 | Z value |

## uniform3i

```TypeScript
uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void
```

Sets a uniform3i value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLint | 是 | X value |
| y | GLint | 是 | Y value |
| z | GLint | 是 | Z value |

## uniform4f

```TypeScript
uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void
```

Sets a uniform4f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |
| z | GLfloat | 是 | Z value |
| w | GLfloat | 是 | W value |

## uniform4i

```TypeScript
uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void
```

Sets a uniform4i value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | WebGLUniformLocation \| null | 是 | Uniform location |
| x | GLint | 是 | X value |
| y | GLint | 是 | Y value |
| z | GLint | 是 | Z value |
| w | GLint | 是 | W value |

## useProgram

```TypeScript
useProgram(program: WebGLProgram | null): void
```

Uses a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram \| null | 是 | The program to use |

## validateProgram

```TypeScript
validateProgram(program: WebGLProgram): void
```

Validates a program

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | WebGLProgram | 是 | The program to validate |

## vertexAttrib1f

```TypeScript
vertexAttrib1f(index: GLuint, x: GLfloat): void
```

Sets a vertex attrib1f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| x | GLfloat | 是 | X value |

## vertexAttrib1fv

```TypeScript
vertexAttrib1fv(index: GLuint, values: Float32List): void
```

Sets a vertex attrib1fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| values | Float32List | 是 | Values |

## vertexAttrib2f

```TypeScript
vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void
```

Sets a vertex attrib2f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |

## vertexAttrib2fv

```TypeScript
vertexAttrib2fv(index: GLuint, values: Float32List): void
```

Sets a vertex attrib2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| values | Float32List | 是 | Values |

## vertexAttrib3f

```TypeScript
vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void
```

Sets a vertex attrib3f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |
| z | GLfloat | 是 | Z value |

## vertexAttrib3fv

```TypeScript
vertexAttrib3fv(index: GLuint, values: Float32List): void
```

Sets a vertex attrib3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| values | Float32List | 是 | Values |

## vertexAttrib4f

```TypeScript
vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void
```

Sets a vertex attrib4f value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| x | GLfloat | 是 | X value |
| y | GLfloat | 是 | Y value |
| z | GLfloat | 是 | Z value |
| w | GLfloat | 是 | W value |

## vertexAttrib4fv

```TypeScript
vertexAttrib4fv(index: GLuint, values: Float32List): void
```

Sets a vertex attrib4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| values | Float32List | 是 | Values |

## vertexAttribPointer

```TypeScript
vertexAttribPointer(
      index: GLuint,
      size: GLint,
      type: GLenum,
      normalized: GLboolean,
      stride: GLsizei,
      offset: GLintptr,
    ): void
```

Sets vertex attrib pointer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | GLuint | 是 | Vertex attribute index |
| size | GLint | 是 | Number of components |
| type | GLenum | 是 | Data type |
| normalized | GLboolean | 是 | Whether to normalize |
| stride | GLsizei | 是 | Stride |
| offset | GLintptr | 是 | Offset |

## viewport

```TypeScript
viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
```

Sets the viewport

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | GLint | 是 | X coordinate |
| y | GLint | 是 | Y coordinate |
| width | GLsizei | 是 | Width |
| height | GLsizei | 是 | Height |

## FRAMEBUFFER_UNSUPPORTED

```TypeScript
readonly FRAMEBUFFER_UNSUPPORTED: GLenum
```

Framebuffer status: unsupported

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## POLYGON_OFFSET_UNITS

```TypeScript
readonly POLYGON_OFFSET_UNITS: GLenum
```

Polygon offset units

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_NORMALIZED

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum
```

Vertex attrib array: normalized

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINEAR_MIPMAP_LINEAR

```TypeScript
readonly LINEAR_MIPMAP_LINEAR: GLenum
```

Mipmap filter: linear mipmap linear

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NEVER

```TypeScript
readonly NEVER: GLenum
```

Never

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_EQUATION_RGB

```TypeScript
readonly BLEND_EQUATION_RGB: GLenum
```

Blend equation for RGB

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRONT

```TypeScript
readonly FRONT: GLenum
```

Face mode: front

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_STENCIL_SIZE

```TypeScript
readonly RENDERBUFFER_STENCIL_SIZE: GLenum
```

Renderbuffer parameter: stencil size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_STRIDE

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum
```

Vertex attrib array: stride

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SHADER_TYPE

```TypeScript
readonly SHADER_TYPE: GLenum
```

Shader Type

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_SRC_RGB

```TypeScript
readonly BLEND_SRC_RGB: GLenum
```

Source RGB blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_BINDING

```TypeScript
readonly FRAMEBUFFER_BINDING: GLenum
```

Framebuffer binding

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RGB565

```TypeScript
readonly RGB565: GLenum
```

Renderbuffer internal format: RGB565

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DITHER

```TypeScript
readonly DITHER: GLenum
```

Enable cap: dither

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## drawingBufferWidth

```TypeScript
readonly drawingBufferWidth: GLsizei
```

Drawing buffer width

**类型：** GLsizei

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CULL_FACE

```TypeScript
readonly CULL_FACE: GLenum
```

Enable cap: cull face

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLES

```TypeScript
readonly SAMPLES: GLenum
```

Samples

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## POINTS

```TypeScript
readonly POINTS: GLenum
```

Primitive type: points

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RGB5_A1

```TypeScript
readonly RGB5_A1: GLenum
```

Renderbuffer internal format: RGB5_A1

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BUFFER_BIT

```TypeScript
readonly STENCIL_BUFFER_BIT: GLenum
```

Stencil buffer clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_WRITEMASK

```TypeScript
readonly STENCIL_BACK_WRITEMASK: GLenum
```

Stencil back write mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_DST_COLOR

```TypeScript
readonly ONE_MINUS_DST_COLOR: GLenum
```

One minus destination color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BUFFER_USAGE

```TypeScript
readonly BUFFER_USAGE: GLenum
```

Buffer parameter: buffer usage

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_PASS_DEPTH_PASS

```TypeScript
readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum
```

Stencil back pass depth pass operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CURRENT_PROGRAM

```TypeScript
readonly CURRENT_PROGRAM: GLenum
```

Current Program

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum
```

Framebuffer Attachment Texture Cube Map Face

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COMPRESSED_TEXTURE_FORMATS

```TypeScript
readonly COMPRESSED_TEXTURE_FORMATS: GLenum
```

Compressed texture formats

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNPACK_COLORSPACE_CONVERSION_WEBGL

```TypeScript
readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum
```

Unpack option: colorspace conversion WebGL

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_SRC_ALPHA

```TypeScript
readonly BLEND_SRC_ALPHA: GLenum
```

Source alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## GEQUAL

```TypeScript
readonly GEQUAL: GLenum
```

Comparison function: greater or equal

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_SRC_ALPHA

```TypeScript
readonly ONE_MINUS_SRC_ALPHA: GLenum
```

One minus source alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_COMPONENT16

```TypeScript
readonly DEPTH_COMPONENT16: GLenum
```

Renderbuffer internal format: depth component16

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINE_STRIP

```TypeScript
readonly LINE_STRIP: GLenum
```

Primitive type: line strip

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_SHORT_4_4_4_4

```TypeScript
readonly UNSIGNED_SHORT_4_4_4_4: GLenum
```

Unsigned short 5_5_5_1

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_VERTEX_ATTRIBS

```TypeScript
readonly MAX_VERTEX_ATTRIBS: GLenum
```

Max vertex attribs

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## REPEAT

```TypeScript
readonly REPEAT: GLenum
```

Texture wrap: repeat

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COLOR_WRITEMASK

```TypeScript
readonly COLOR_WRITEMASK: GLenum
```

Color write mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE

```TypeScript
readonly ONE: GLenum
```

One value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COLOR_ATTACHMENT0

```TypeScript
readonly COLOR_ATTACHMENT0: GLenum
```

Color Attachment0

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINEAR_MIPMAP_NEAREST

```TypeScript
readonly LINEAR_MIPMAP_NEAREST: GLenum
```

Mipmap filter: linear mipmap nearest

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DELETE_STATUS

```TypeScript
readonly DELETE_STATUS: GLenum
```

Delete Status

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SHADING_LANGUAGE_VERSION

```TypeScript
readonly SHADING_LANGUAGE_VERSION: GLenum
```

Shading Language Version

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP

```TypeScript
readonly TEXTURE_CUBE_MAP: GLenum
```

Texture target: cube map

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum
```

Framebuffer Attachment Texture Level

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LOW_FLOAT

```TypeScript
readonly LOW_FLOAT: GLenum
```

Precision: low float

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_REF

```TypeScript
readonly STENCIL_BACK_REF: GLenum
```

Stencil back reference value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_WRITEMASK

```TypeScript
readonly STENCIL_WRITEMASK: GLenum
```

Stencil write mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNPACK_FLIP_Y_WEBGL

```TypeScript
readonly UNPACK_FLIP_Y_WEBGL: GLenum
```

Unpack option: flip Y WebGL

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LOW_INT

```TypeScript
readonly LOW_INT: GLenum
```

Precision: low int

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLE_COVERAGE_INVERT

```TypeScript
readonly SAMPLE_COVERAGE_INVERT: GLenum
```

Sample coverage invert

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NO_ERROR

```TypeScript
readonly NO_ERROR: GLenum
```

Error code: no error

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BUFFER_SIZE

```TypeScript
readonly BUFFER_SIZE: GLenum
```

Buffer parameter: buffer size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COLOR_BUFFER_BIT

```TypeScript
readonly COLOR_BUFFER_BIT: GLenum
```

Color buffer clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## GREATER

```TypeScript
readonly GREATER: GLenum
```

Comparison function: greater

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_ALPHA_SIZE

```TypeScript
readonly RENDERBUFFER_ALPHA_SIZE: GLenum
```

Renderbuffer parameter: alpha size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER

```TypeScript
readonly FRAMEBUFFER: GLenum
```

Framebuffer target

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SRC_ALPHA_SATURATE

```TypeScript
readonly SRC_ALPHA_SATURATE: GLenum
```

Source alpha saturate blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ELEMENT_ARRAY_BUFFER_BINDING

```TypeScript
readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum
```

Element array buffer binding point

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_POSITIVE_X

```TypeScript
readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum
```

Texture cube map positive X

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE1

```TypeScript
readonly TEXTURE1: GLenum
```

Texture unit 1

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CW

```TypeScript
readonly CW: GLenum
```

Front face: clockwise

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE2

```TypeScript
readonly TEXTURE2: GLenum
```

Texture unit 2

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INVALID_VALUE

```TypeScript
readonly INVALID_VALUE: GLenum
```

Error code: invalid value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_POSITIVE_Z

```TypeScript
readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum
```

Texture cube map positive Z

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INCR

```TypeScript
readonly INCR: GLenum
```

Stencil operation: increment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE0

```TypeScript
readonly TEXTURE0: GLenum
```

Texture unit 0

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_POSITIVE_Y

```TypeScript
readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum
```

Texture cube map positive Y

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE5

```TypeScript
readonly TEXTURE5: GLenum
```

Texture unit 5

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE6

```TypeScript
readonly TEXTURE6: GLenum
```

Texture unit 6

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE3

```TypeScript
readonly TEXTURE3: GLenum
```

Texture unit 3

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FUNC_REVERSE_SUBTRACT

```TypeScript
readonly FUNC_REVERSE_SUBTRACT: GLenum
```

Blend equation: reverse subtract

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE4

```TypeScript
readonly TEXTURE4: GLenum
```

Texture unit 4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE9

```TypeScript
readonly TEXTURE9: GLenum
```

Texture unit 9

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FUNC_ADD

```TypeScript
readonly FUNC_ADD: GLenum
```

Blend equation: add

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INVALID_FRAMEBUFFER_OPERATION

```TypeScript
readonly INVALID_FRAMEBUFFER_OPERATION: GLenum
```

Error code: invalid framebuffer operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLER_CUBE

```TypeScript
readonly SAMPLER_CUBE: GLenum
```

Sampler type: cube

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE7

```TypeScript
readonly TEXTURE7: GLenum
```

Texture unit 7

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE8

```TypeScript
readonly TEXTURE8: GLenum
```

Texture unit 8

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_MIN_FILTER

```TypeScript
readonly TEXTURE_MIN_FILTER: GLenum
```

Texture parameter: min filter

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ZERO

```TypeScript
readonly ZERO: GLenum
```

Zero value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_INCOMPLETE_DIMENSIONS

```TypeScript
readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum
```

Framebuffer status: incomplete dimensions

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LUMINANCE

```TypeScript
readonly LUMINANCE: GLenum
```

Pixel format: luminance

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ALPHA

```TypeScript
readonly ALPHA: GLenum
```

Pixel format: alpha

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_BUFFER_BINDING

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum
```

Vertex attrib array: buffer binding

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_SHORT_5_6_5

```TypeScript
readonly UNSIGNED_SHORT_5_6_5: GLenum
```

Unsigned short 5_6_5

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINES

```TypeScript
readonly LINES: GLenum
```

Primitive type: lines

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_TYPE

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum
```

Vertex attrib array: type

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## IMPLEMENTATION_COLOR_READ_TYPE

```TypeScript
readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum
```

Implementation color read type

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_INCOMPLETE_ATTACHMENT

```TypeScript
readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum
```

Framebuffer status: incomplete attachment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_CUBE_MAP_TEXTURE_SIZE

```TypeScript
readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum
```

Max cube map texture size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINE_WIDTH

```TypeScript
readonly LINE_WIDTH: GLenum
```

Line width

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_VERTEX_TEXTURE_IMAGE_UNITS

```TypeScript
readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum
```

Max Vertex Texture Image Units

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_DEPTH_SIZE

```TypeScript
readonly RENDERBUFFER_DEPTH_SIZE: GLenum
```

Renderbuffer parameter: depth size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## REPLACE

```TypeScript
readonly REPLACE: GLenum
```

Stencil operation: replace

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## GREEN_BITS

```TypeScript
readonly GREEN_BITS: GLenum
```

Green bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_WRITEMASK

```TypeScript
readonly DEPTH_WRITEMASK: GLenum
```

Depth write mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER

```TypeScript
readonly RENDERBUFFER: GLenum
```

Renderbuffer target

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_BLUE_SIZE

```TypeScript
readonly RENDERBUFFER_BLUE_SIZE: GLenum
```

Renderbuffer parameter: blue size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## POLYGON_OFFSET_FILL

```TypeScript
readonly POLYGON_OFFSET_FILL: GLenum
```

Enable cap: polygon offset fill

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_CLEAR_VALUE

```TypeScript
readonly DEPTH_CLEAR_VALUE: GLenum
```

Depth clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RGB

```TypeScript
readonly RGB: GLenum
```

Pixel format: RGB

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_PASS_DEPTH_FAIL

```TypeScript
readonly STENCIL_PASS_DEPTH_FAIL: GLenum
```

Stencil pass depth fail operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STATIC_DRAW

```TypeScript
readonly STATIC_DRAW: GLenum
```

Buffer usage: static draw

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DECR

```TypeScript
readonly DECR: GLenum
```

Stencil operation: decrement

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NOTEQUAL

```TypeScript
readonly NOTEQUAL: GLenum
```

Comparison function: not equal

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ACTIVE_UNIFORMS

```TypeScript
readonly ACTIVE_UNIFORMS: GLenum
```

Active Uniforms

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_TEXTURE_IMAGE_UNITS

```TypeScript
readonly MAX_TEXTURE_IMAGE_UNITS: GLenum
```

Max Texture Image Units

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_INTERNAL_FORMAT

```TypeScript
readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum
```

Renderbuffer parameter: internal format

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_NEGATIVE_Z

```TypeScript
readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum
```

Texture cube map negative Z

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE

```TypeScript
readonly TEXTURE: GLenum
```

Texture target: texture

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_TEST

```TypeScript
readonly DEPTH_TEST: GLenum
```

Enable cap: depth test

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_NEGATIVE_Y

```TypeScript
readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum
```

Texture cube map negative Y

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_EQUATION_ALPHA

```TypeScript
readonly BLEND_EQUATION_ALPHA: GLenum
```

Blend equation for alpha

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## OUT_OF_MEMORY

```TypeScript
readonly OUT_OF_MEMORY: GLenum
```

Error code: out of memory

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRONT_AND_BACK

```TypeScript
readonly FRONT_AND_BACK: GLenum
```

Face mode: front and back

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_CUBE_MAP_NEGATIVE_X

```TypeScript
readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum
```

Texture cube map negative X

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LUMINANCE_ALPHA

```TypeScript
readonly LUMINANCE_ALPHA: GLenum
```

Pixel format: luminance alpha

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLE_ALPHA_TO_COVERAGE

```TypeScript
readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum
```

Enable cap: sample alpha to coverage

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_GREEN_SIZE

```TypeScript
readonly RENDERBUFFER_GREEN_SIZE: GLenum
```

Renderbuffer parameter: green size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MEDIUM_FLOAT

```TypeScript
readonly MEDIUM_FLOAT: GLenum
```

Precision: medium float

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SCISSOR_TEST

```TypeScript
readonly SCISSOR_TEST: GLenum
```

Enable cap: scissor test

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_BINDING_CUBE_MAP

```TypeScript
readonly TEXTURE_BINDING_CUBE_MAP: GLenum
```

Texture binding cube map

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_COMBINED_TEXTURE_IMAGE_UNITS

```TypeScript
readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum
```

Max combined texture image units

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINE_LOOP

```TypeScript
readonly LINE_LOOP: GLenum
```

Primitive type: line strip

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_COMPONENT

```TypeScript
readonly DEPTH_COMPONENT: GLenum
```

Pixel format: depth component

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_ENABLED

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum
```

Vertex attrib array: enabled

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ATTACHED_SHADERS

```TypeScript
readonly ATTACHED_SHADERS: GLenum
```

Attached Shaders

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INVERT

```TypeScript
readonly INVERT: GLenum
```

Stencil operation: invert

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## IMPLEMENTATION_COLOR_READ_FORMAT

```TypeScript
readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum
```

Implementation color read format

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## PACK_ALIGNMENT

```TypeScript
readonly PACK_ALIGNMENT: GLenum
```

Pack alignment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TRIANGLES

```TypeScript
readonly TRIANGLES: GLenum
```

Primitive type: triangles

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INCR_WRAP

```TypeScript
readonly INCR_WRAP: GLenum
```

Stencil operation: increment wrap

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## EQUAL

```TypeScript
readonly EQUAL: GLenum
```

Comparison function: equal

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BROWSER_DEFAULT_WEBGL

```TypeScript
readonly BROWSER_DEFAULT_WEBGL: GLenum
```

Browser default WebGL

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SHORT

```TypeScript
readonly SHORT: GLenum
```

Data type: short

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_HEIGHT

```TypeScript
readonly RENDERBUFFER_HEIGHT: GLenum
```

Renderbuffer parameter: height

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BOOL

```TypeScript
readonly BOOL: GLenum
```

Uniform type: bool

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_FUNC

```TypeScript
readonly DEPTH_FUNC: GLenum
```

Depth function

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BACK

```TypeScript
readonly BACK: GLenum
```

Face mode: back

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_STENCIL

```TypeScript
readonly DEPTH_STENCIL: GLenum
```

Renderbuffer internal format: depth stencil

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINEAR

```TypeScript
readonly LINEAR: GLenum
```

Filter: linear

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_SHORT_5_5_5_1

```TypeScript
readonly UNSIGNED_SHORT_5_5_5_1: GLenum
```

Unsigned short 5_5_5_1

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_DST_ALPHA

```TypeScript
readonly BLEND_DST_ALPHA: GLenum
```

Destination alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_VALUE_MASK

```TypeScript
readonly STENCIL_BACK_VALUE_MASK: GLenum
```

Stencil back value mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE24

```TypeScript
readonly TEXTURE24: GLenum
```

Texture unit 24

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE23

```TypeScript
readonly TEXTURE23: GLenum
```

Texture unit 23

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DECR_WRAP

```TypeScript
readonly DECR_WRAP: GLenum
```

Stencil operation: decrement wrap

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CULL_FACE_MODE

```TypeScript
readonly CULL_FACE_MODE: GLenum
```

Cull face mode

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE26

```TypeScript
readonly TEXTURE26: GLenum
```

Texture unit 26

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE25

```TypeScript
readonly TEXTURE25: GLenum
```

Texture unit 25

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_FAIL

```TypeScript
readonly STENCIL_FAIL: GLenum
```

Stencil fail operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE20

```TypeScript
readonly TEXTURE20: GLenum
```

Texture unit 20

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE22

```TypeScript
readonly TEXTURE22: GLenum
```

Texture unit 22

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE21

```TypeScript
readonly TEXTURE21: GLenum
```

Texture unit 21

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_FUNC

```TypeScript
readonly STENCIL_BACK_FUNC: GLenum
```

Stencil back function

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ELEMENT_ARRAY_BUFFER

```TypeScript
readonly ELEMENT_ARRAY_BUFFER: GLenum
```

Buffer target: element array buffer

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RGBA

```TypeScript
readonly RGBA: GLenum
```

Pixel format: RGBA

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FASTEST

```TypeScript
readonly FASTEST: GLenum
```

Hint: fastest

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE17

```TypeScript
readonly TEXTURE17: GLenum
```

Texture unit 17

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE16

```TypeScript
readonly TEXTURE16: GLenum
```

Texture unit 16

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE19

```TypeScript
readonly TEXTURE19: GLenum
```

Texture unit 19

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE18

```TypeScript
readonly TEXTURE18: GLenum
```

Texture unit 18

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BYTE

```TypeScript
readonly BYTE: GLenum
```

Data type: byte

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_MAT2

```TypeScript
readonly FLOAT_MAT2: GLenum
```

Uniform type: float mat2

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_VARYING_VECTORS

```TypeScript
readonly MAX_VARYING_VECTORS: GLenum
```

Max varying vectors

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_MAT4

```TypeScript
readonly FLOAT_MAT4: GLenum
```

Uniform type: float mat4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_MAT3

```TypeScript
readonly FLOAT_MAT3: GLenum
```

Uniform type: float mat3

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NONE

```TypeScript
readonly NONE: GLenum
```

None

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BITS

```TypeScript
readonly STENCIL_BITS: GLenum
```

Stencil bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## canvas

```TypeScript
readonly canvas: HTMLCanvasElement | OffscreenCanvas
```

The canvas element

**类型：** HTMLCanvasElement | OffscreenCanvas

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RGBA4

```TypeScript
readonly RGBA4: GLenum
```

Renderbuffer internal format: RGBA4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## HIGH_FLOAT

```TypeScript
readonly HIGH_FLOAT: GLenum
```

Precision: high float

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_ATTACHMENT_OBJECT_NAME

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum
```

Framebuffer attachment parameter: object name

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE13

```TypeScript
readonly TEXTURE13: GLenum
```

Texture unit 13

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE12

```TypeScript
readonly TEXTURE12: GLenum
```

Texture unit 12

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE15

```TypeScript
readonly TEXTURE15: GLenum
```

Texture unit 15

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_BINDING

```TypeScript
readonly RENDERBUFFER_BINDING: GLenum
```

Renderbuffer binding

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE14

```TypeScript
readonly TEXTURE14: GLenum
```

Texture unit 14

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_REF

```TypeScript
readonly STENCIL_REF: GLenum
```

Stencil reference value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_BUFFER_BIT

```TypeScript
readonly DEPTH_BUFFER_BIT: GLenum
```

Depth buffer clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COLOR_CLEAR_VALUE

```TypeScript
readonly COLOR_CLEAR_VALUE: GLenum
```

Color clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE11

```TypeScript
readonly TEXTURE11: GLenum
```

Texture unit 11

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INVALID_ENUM

```TypeScript
readonly INVALID_ENUM: GLenum
```

Error code: invalid enum

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE10

```TypeScript
readonly TEXTURE10: GLenum
```

Texture unit 10

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_VALUE_MASK

```TypeScript
readonly STENCIL_VALUE_MASK: GLenum
```

Stencil value mask

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BOOL_VEC2

```TypeScript
readonly BOOL_VEC2: GLenum
```

Uniform type: bool vec2

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BOOL_VEC3

```TypeScript
readonly BOOL_VEC3: GLenum
```

Uniform type: bool vec3

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BOOL_VEC4

```TypeScript
readonly BOOL_VEC4: GLenum
```

Uniform type: bool vec4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_PASS_DEPTH_FAIL

```TypeScript
readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum
```

Stencil back pass depth fail operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_COMPLETE

```TypeScript
readonly FRAMEBUFFER_COMPLETE: GLenum
```

Framebuffer Complete

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_BITS

```TypeScript
readonly DEPTH_BITS: GLenum
```

Depth bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_2D

```TypeScript
readonly TEXTURE_2D: GLenum
```

Texture target: 2D

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLE_BUFFERS

```TypeScript
readonly SAMPLE_BUFFERS: GLenum
```

Sample buffers

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SUBPIXEL_BITS

```TypeScript
readonly SUBPIXEL_BITS: GLenum
```

Subpixel bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ALPHA_BITS

```TypeScript
readonly ALPHA_BITS: GLenum
```

Alpha bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ARRAY_BUFFER_BINDING

```TypeScript
readonly ARRAY_BUFFER_BINDING: GLenum
```

Array buffer binding point

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NEAREST_MIPMAP_NEAREST

```TypeScript
readonly NEAREST_MIPMAP_NEAREST: GLenum
```

Mipmap filter: nearest mipmap nearest

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NICEST

```TypeScript
readonly NICEST: GLenum
```

Hint: nicest

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## drawingBufferHeight

```TypeScript
readonly drawingBufferHeight: GLsizei
```

Drawing buffer height

**类型：** GLsizei

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NEAREST_MIPMAP_LINEAR

```TypeScript
readonly NEAREST_MIPMAP_LINEAR: GLenum
```

Mipmap filter: nearest mipmap linear

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_EQUATION

```TypeScript
readonly BLEND_EQUATION: GLenum
```

Blend equation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_FRAGMENT_UNIFORM_VECTORS

```TypeScript
readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum
```

Max Fragment Uniform Vectors

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_CLEAR_VALUE

```TypeScript
readonly STENCIL_CLEAR_VALUE: GLenum
```

Stencil clear value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ALWAYS

```TypeScript
readonly ALWAYS: GLenum
```

Comparison function: always

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_PASS_DEPTH_PASS

```TypeScript
readonly STENCIL_PASS_DEPTH_PASS: GLenum
```

Stencil pass depth pass operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_RED_SIZE

```TypeScript
readonly RENDERBUFFER_RED_SIZE: GLenum
```

Renderbuffer parameter: red size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ACTIVE_ATTRIBUTES

```TypeScript
readonly ACTIVE_ATTRIBUTES: GLenum
```

Active Attributes

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_TEXTURE_SIZE

```TypeScript
readonly MAX_TEXTURE_SIZE: GLenum
```

Max texture size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_VIEWPORT_DIMS

```TypeScript
readonly MAX_VIEWPORT_DIMS: GLenum
```

Max viewport dims

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_STENCIL_ATTACHMENT

```TypeScript
readonly DEPTH_STENCIL_ATTACHMENT: GLenum
```

Depth Stencil Attachment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_VERTEX_UNIFORM_VECTORS

```TypeScript
readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum
```

Max vertex uniform vectors

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VIEWPORT

```TypeScript
readonly VIEWPORT: GLenum
```

Viewport

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_COLOR

```TypeScript
readonly BLEND_COLOR: GLenum
```

Blend color

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SRC_ALPHA

```TypeScript
readonly SRC_ALPHA: GLenum
```

Source alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_BINDING_2D

```TypeScript
readonly TEXTURE_BINDING_2D: GLenum
```

Texture binding 2D

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CONTEXT_LOST_WEBGL

```TypeScript
readonly CONTEXT_LOST_WEBGL: GLenum
```

Context lost WebGL

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_FUNC

```TypeScript
readonly STENCIL_FUNC: GLenum
```

Stencil function

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ARRAY_BUFFER

```TypeScript
readonly ARRAY_BUFFER: GLenum
```

Buffer target: array buffer

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MEDIUM_INT

```TypeScript
readonly MEDIUM_INT: GLenum
```

Precision: medium int

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_VEC2

```TypeScript
readonly FLOAT_VEC2: GLenum
```

Uniform type: float vec2

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_VEC4

```TypeScript
readonly FLOAT_VEC4: GLenum
```

Uniform type: float vec4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT_VEC3

```TypeScript
readonly FLOAT_VEC3: GLenum
```

Uniform type: float vec3

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INVALID_OPERATION

```TypeScript
readonly INVALID_OPERATION: GLenum
```

Error code: invalid operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERSION

```TypeScript
readonly VERSION: GLenum
```

WebGL version

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_CONSTANT_ALPHA

```TypeScript
readonly ONE_MINUS_CONSTANT_ALPHA: GLenum
```

One minus constant alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DONT_CARE

```TypeScript
readonly DONT_CARE: GLenum
```

Hint: don't care

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERBUFFER_WIDTH

```TypeScript
readonly RENDERBUFFER_WIDTH: GLenum
```

Renderbuffer parameter: width

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT

```TypeScript
readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum
```

Framebuffer status: incomplete missing attachment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RED_BITS

```TypeScript
readonly RED_BITS: GLenum
```

Red bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DST_COLOR

```TypeScript
readonly DST_COLOR: GLenum
```

Destination color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRONT_FACE

```TypeScript
readonly FRONT_FACE: GLenum
```

Front face mode

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLER_2D

```TypeScript
readonly SAMPLER_2D: GLenum
```

Sampler type: 2D

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CLAMP_TO_EDGE

```TypeScript
readonly CLAMP_TO_EDGE: GLenum
```

Texture wrap: clamp to edge

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CURRENT_VERTEX_ATTRIB

```TypeScript
readonly CURRENT_VERTEX_ATTRIB: GLenum
```

Current vertex attribute

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SRC_COLOR

```TypeScript
readonly SRC_COLOR: GLenum
```

Source color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MAX_RENDERBUFFER_SIZE

```TypeScript
readonly MAX_RENDERBUFFER_SIZE: GLenum
```

Max renderbuffer size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TRIANGLE_STRIP

```TypeScript
readonly TRIANGLE_STRIP: GLenum
```

Primitive type: triangle strip

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## POLYGON_OFFSET_FACTOR

```TypeScript
readonly POLYGON_OFFSET_FACTOR: GLenum
```

Polygon offset factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## MIRRORED_REPEAT

```TypeScript
readonly MIRRORED_REPEAT: GLenum
```

Texture wrap: mirrored repeat

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_CONSTANT_COLOR

```TypeScript
readonly ONE_MINUS_CONSTANT_COLOR: GLenum
```

One minus constant color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## NEAREST

```TypeScript
readonly NEAREST: GLenum
```

Filter: nearest

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_SHADER

```TypeScript
readonly VERTEX_SHADER: GLenum
```

Shader type: vertex shader

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INT_VEC4

```TypeScript
readonly INT_VEC4: GLenum
```

Uniform type: int vec4

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_TEST

```TypeScript
readonly STENCIL_TEST: GLenum
```

Enable cap: stencil test

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## KEEP

```TypeScript
readonly KEEP: GLenum
```

Stencil operation: keep

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DST_ALPHA

```TypeScript
readonly DST_ALPHA: GLenum
```

Destination alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNPACK_PREMULTIPLY_ALPHA_WEBGL

```TypeScript
readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum
```

Unpack option: premultiply alpha WebGL

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LINK_STATUS

```TypeScript
readonly LINK_STATUS: GLenum
```

Link Status

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SCISSOR_BOX

```TypeScript
readonly SCISSOR_BOX: GLenum
```

Scissor box

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_INDEX8

```TypeScript
readonly STENCIL_INDEX8: GLenum
```

Renderbuffer internal format: stencil index8

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STREAM_DRAW

```TypeScript
readonly STREAM_DRAW: GLenum
```

Buffer usage: stream draw

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLE_COVERAGE_VALUE

```TypeScript
readonly SAMPLE_COVERAGE_VALUE: GLenum
```

Sample coverage value

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_SIZE

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum
```

Vertex attrib array: size

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAGMENT_SHADER

```TypeScript
readonly FRAGMENT_SHADER: GLenum
```

Shader type: fragment shader

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INT_VEC3

```TypeScript
readonly INT_VEC3: GLenum
```

Uniform type: int vec3

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LESS

```TypeScript
readonly LESS: GLenum
```

Comparison function: less

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_BACK_FAIL

```TypeScript
readonly STENCIL_BACK_FAIL: GLenum
```

Stencil back fail operation

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## COMPILE_STATUS

```TypeScript
readonly COMPILE_STATUS: GLenum
```

Compile status

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INT_VEC2

```TypeScript
readonly INT_VEC2: GLenum
```

Uniform type: int vec2

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CONSTANT_COLOR

```TypeScript
readonly CONSTANT_COLOR: GLenum
```

Constant color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## GENERATE_MIPMAP_HINT

```TypeScript
readonly GENERATE_MIPMAP_HINT: GLenum
```

Generate mipmap hint

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## STENCIL_ATTACHMENT

```TypeScript
readonly STENCIL_ATTACHMENT: GLenum
```

Stencil Attachment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FLOAT

```TypeScript
readonly FLOAT: GLenum
```

Data type: float

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_INT

```TypeScript
readonly UNSIGNED_INT: GLenum
```

Data type: unsigned int

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ALIASED_LINE_WIDTH_RANGE

```TypeScript
readonly ALIASED_LINE_WIDTH_RANGE: GLenum
```

Aliased line width range

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TRIANGLE_FAN

```TypeScript
readonly TRIANGLE_FAN: GLenum
```

Primitive type: triangle fan

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLUE_BITS

```TypeScript
readonly BLUE_BITS: GLenum
```

Blue bits

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## INT

```TypeScript
readonly INT: GLenum
```

Data type: int

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_RANGE

```TypeScript
readonly DEPTH_RANGE: GLenum
```

Depth range

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ACTIVE_TEXTURE

```TypeScript
readonly ACTIVE_TEXTURE: GLenum
```

Active texture

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_SHORT

```TypeScript
readonly UNSIGNED_SHORT: GLenum
```

Data type: unsigned short

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNSIGNED_BYTE

```TypeScript
readonly UNSIGNED_BYTE: GLenum
```

Data type: unsigned byte

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ALIASED_POINT_SIZE_RANGE

```TypeScript
readonly ALIASED_POINT_SIZE_RANGE: GLenum
```

Aliased point size range

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_MAG_FILTER

```TypeScript
readonly TEXTURE_MAG_FILTER: GLenum
```

Texture parameter: mag filter

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VALIDATE_STATUS

```TypeScript
readonly VALIDATE_STATUS: GLenum
```

Validate Status

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CONSTANT_ALPHA

```TypeScript
readonly CONSTANT_ALPHA: GLenum
```

Constant alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND_DST_RGB

```TypeScript
readonly BLEND_DST_RGB: GLenum
```

Destination RGB blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DEPTH_ATTACHMENT

```TypeScript
readonly DEPTH_ATTACHMENT: GLenum
```

Depth Attachment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum
```

Framebuffer attachment parameter: object type

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_WRAP_T

```TypeScript
readonly TEXTURE_WRAP_T: GLenum
```

Texture parameter: wrap t

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE_WRAP_S

```TypeScript
readonly TEXTURE_WRAP_S: GLenum
```

Texture parameter: wrap s

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## FUNC_SUBTRACT

```TypeScript
readonly FUNC_SUBTRACT: GLenum
```

Blend equation: subtract

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_SRC_COLOR

```TypeScript
readonly ONE_MINUS_SRC_COLOR: GLenum
```

One minus source color blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## UNPACK_ALIGNMENT

```TypeScript
readonly UNPACK_ALIGNMENT: GLenum
```

Unpack alignment

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## RENDERER

```TypeScript
readonly RENDERER: GLenum
```

Renderer name

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VERTEX_ATTRIB_ARRAY_POINTER

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum
```

Vertex attrib array: pointer

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## DYNAMIC_DRAW

```TypeScript
readonly DYNAMIC_DRAW: GLenum
```

Buffer usage: dynamic draw

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## LEQUAL

```TypeScript
readonly LEQUAL: GLenum
```

Comparison function: less or equal

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE31

```TypeScript
readonly TEXTURE31: GLenum
```

Texture unit 31

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE30

```TypeScript
readonly TEXTURE30: GLenum
```

Texture unit 30

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## ONE_MINUS_DST_ALPHA

```TypeScript
readonly ONE_MINUS_DST_ALPHA: GLenum
```

One minus destination alpha blend factor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## HIGH_INT

```TypeScript
readonly HIGH_INT: GLenum
```

Precision: high int

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE28

```TypeScript
readonly TEXTURE28: GLenum
```

Texture unit 28

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## BLEND

```TypeScript
readonly BLEND: GLenum
```

Enable cap: blend

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE27

```TypeScript
readonly TEXTURE27: GLenum
```

Texture unit 27

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## CCW

```TypeScript
readonly CCW: GLenum
```

Front face: counter-clockwise

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## TEXTURE29

```TypeScript
readonly TEXTURE29: GLenum
```

Texture unit 29

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## VENDOR

```TypeScript
readonly VENDOR: GLenum
```

Renderer vendor

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

## SAMPLE_COVERAGE

```TypeScript
readonly SAMPLE_COVERAGE: GLenum
```

Enable cap: sample coverage

**类型：** GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL

