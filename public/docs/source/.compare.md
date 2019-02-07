---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#Auth
<!-- START_66e08d3cc8222573018fed49e121e96d -->
## Show the application&#039;s login form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/login" 
```

```javascript
const url = new URL("http://localhost:8000/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
## Handle a login request to the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/login" 
```

```javascript
const url = new URL("http://localhost:8000/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
## Log the user out of the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/logout" 
```

```javascript
const url = new URL("http://localhost:8000/logout");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->
## Show the application registration form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/register" 
```

```javascript
const url = new URL("http://localhost:8000/register");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET register`


<!-- END_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->

<!-- START_d7aad7b5ac127700500280d511a3db01 -->
## Handle a registration request for the application.

> Example request:

```bash
curl -X POST "http://localhost:8000/register" 
```

```javascript
const url = new URL("http://localhost:8000/register");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST register`


<!-- END_d7aad7b5ac127700500280d511a3db01 -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
## Display the form to request a password reset link.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/password/reset" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
## Send a reset link to the given user.

> Example request:

```bash
curl -X POST "http://localhost:8000/password/email" 
```

```javascript
const url = new URL("http://localhost:8000/password/email");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
## Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/password/reset/{token}" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset/{token}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
## Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST "http://localhost:8000/password/reset" 
```

```javascript
const url = new URL("http://localhost:8000/password/reset");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_f8e23df123cf972b9863d86c6413e1cd -->
## Redirect the user to the Social authentication page.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/login/{provider}" 
```

```javascript
const url = new URL("http://localhost:8000/login/{provider}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (500):

```json
{
    "message": "Driver [1] not supported.",
    "exception": "InvalidArgumentException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Manager.php",
    "line": 99,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Manager.php",
            "line": 71,
            "function": "createDriver",
            "class": "Illuminate\\Support\\Manager",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Facades\/Facade.php",
            "line": 237,
            "function": "driver",
            "class": "Illuminate\\Support\\Manager",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Http\/Controllers\/Auth\/LoginController.php",
            "line": 56,
            "function": "__callStatic",
            "class": "Illuminate\\Support\\Facades\\Facade",
            "type": "::"
        },
        {
            "function": "redirectToProvider",
            "class": "App\\Http\\Controllers\\Auth\\LoginController",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 219,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 176,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 682,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Http\/Middleware\/RedirectIfAuthenticated.php",
            "line": 24,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "App\\Http\\Middleware\\RedirectIfAuthenticated",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/VerifyCsrfToken.php",
            "line": 75,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/View\/Middleware\/ShareErrorsFromSession.php",
            "line": 49,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\View\\Middleware\\ShareErrorsFromSession",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Session\/Middleware\/StartSession.php",
            "line": 63,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Session\\Middleware\\StartSession",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Cookie\/Middleware\/AddQueuedCookiesToResponse.php",
            "line": 37,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Cookie\/Middleware\/EncryptCookies.php",
            "line": 66,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Cookie\\Middleware\\EncryptCookies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET login/{provider}`


<!-- END_f8e23df123cf972b9863d86c6413e1cd -->

<!-- START_dc6e1016b832bfbd32be18e2ebaaf8e5 -->
## Obtain the user information from the social login.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/login/{provider}/callback" 
```

```javascript
const url = new URL("http://localhost:8000/login/{provider}/callback");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (500):

```json
{
    "message": "Driver [1] not supported.",
    "exception": "InvalidArgumentException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Manager.php",
    "line": 99,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Manager.php",
            "line": 71,
            "function": "createDriver",
            "class": "Illuminate\\Support\\Manager",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Support\/Facades\/Facade.php",
            "line": 237,
            "function": "driver",
            "class": "Illuminate\\Support\\Manager",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Http\/Controllers\/Auth\/LoginController.php",
            "line": 67,
            "function": "__callStatic",
            "class": "Illuminate\\Support\\Facades\\Facade",
            "type": "::"
        },
        {
            "function": "handleProviderCallback",
            "class": "App\\Http\\Controllers\\Auth\\LoginController",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Controller.php",
            "line": 54,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/ControllerDispatcher.php",
            "line": 45,
            "function": "callAction",
            "class": "Illuminate\\Routing\\Controller",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 219,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\ControllerDispatcher",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Route.php",
            "line": 176,
            "function": "runController",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 682,
            "function": "run",
            "class": "Illuminate\\Routing\\Route",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Http\/Middleware\/RedirectIfAuthenticated.php",
            "line": 24,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "App\\Http\\Middleware\\RedirectIfAuthenticated",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/SubstituteBindings.php",
            "line": 41,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\SubstituteBindings",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/VerifyCsrfToken.php",
            "line": 75,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\VerifyCsrfToken",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/View\/Middleware\/ShareErrorsFromSession.php",
            "line": 49,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\View\\Middleware\\ShareErrorsFromSession",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Session\/Middleware\/StartSession.php",
            "line": 63,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Session\\Middleware\\StartSession",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Cookie\/Middleware\/AddQueuedCookiesToResponse.php",
            "line": 37,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Cookie\/Middleware\/EncryptCookies.php",
            "line": 66,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Cookie\\Middleware\\EncryptCookies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET login/{provider}/callback`


<!-- END_dc6e1016b832bfbd32be18e2ebaaf8e5 -->

#Collection
<!-- START_eb783257bcc779ba25a708794d0ccbb1 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collection" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/collection`


<!-- END_eb783257bcc779ba25a708794d0ccbb1 -->

<!-- START_e30e6d3b3891f3211c1805fce50c02e1 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collection/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/collection/create`


<!-- END_e30e6d3b3891f3211c1805fce50c02e1 -->

<!-- START_a5ee9b59c13afa631dcff3557769d7cd -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/collection" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/collection`


<!-- END_a5ee9b59c13afa631dcff3557769d7cd -->

<!-- START_bbb23ffdf5bdba7fa7c98b0deba68866 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collection/{collection}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/{collection}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (404):

```json
{
    "message": "No query results for model [App\\Collection].",
    "exception": "Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
    "line": 200,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
            "line": 176,
            "function": "prepareException",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Exceptions\/Handler.php",
            "line": 49,
            "function": "render",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/nunomaduro\/collision\/src\/Adapters\/Laravel\/ExceptionHandler.php",
            "line": 68,
            "function": "render",
            "class": "App\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 83,
            "function": "render",
            "class": "NunoMaduro\\Collision\\Adapters\\Laravel\\ExceptionHandler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 55,
            "function": "handleException",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
            "line": 58,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/collection/{collection}`


<!-- END_bbb23ffdf5bdba7fa7c98b0deba68866 -->

<!-- START_674669f1bd3c00322d95938bd695ab78 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collection/{collection}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/{collection}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (404):

```json
{
    "message": "No query results for model [App\\Collection].",
    "exception": "Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
    "line": 200,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
            "line": 176,
            "function": "prepareException",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Exceptions\/Handler.php",
            "line": 49,
            "function": "render",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/nunomaduro\/collision\/src\/Adapters\/Laravel\/ExceptionHandler.php",
            "line": 68,
            "function": "render",
            "class": "App\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 83,
            "function": "render",
            "class": "NunoMaduro\\Collision\\Adapters\\Laravel\\ExceptionHandler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 55,
            "function": "handleException",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
            "line": 58,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/collection/{collection}/edit`


<!-- END_674669f1bd3c00322d95938bd695ab78 -->

<!-- START_0023ae9b2b0cd0e00d66374e4588ae11 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/collection/{collection}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/{collection}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/collection/{collection}`

`PATCH api/collection/{collection}`


<!-- END_0023ae9b2b0cd0e00d66374e4588ae11 -->

<!-- START_6309309db453212e96d5bb907ce10be0 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/collection/{collection}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/{collection}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/collection/{collection}`


<!-- END_6309309db453212e96d5bb907ce10be0 -->

<!-- START_cb4304e789e1ab7493acba5aad8a3a6d -->
## Adds recipes to collection

> Example request:

```bash
curl -X POST "http://localhost:8000/api/collection/{collection}/addrecipes" 
```

```javascript
const url = new URL("http://localhost:8000/api/collection/{collection}/addrecipes");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/collection/{collection}/addrecipes`


<!-- END_cb4304e789e1ab7493acba5aad8a3a6d -->

#Collection Category
<!-- START_fa5ec90090f59c45baa108b8ea7db9b4 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collectioncategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/collectioncategory`


<!-- END_fa5ec90090f59c45baa108b8ea7db9b4 -->

<!-- START_8d21ec762f025ea09df19ee1dbdcb82c -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collectioncategory/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/collectioncategory/create`


<!-- END_8d21ec762f025ea09df19ee1dbdcb82c -->

<!-- START_18a22d7d94cb8ac30d3c61012aa62008 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/collectioncategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/collectioncategory`


<!-- END_18a22d7d94cb8ac30d3c61012aa62008 -->

<!-- START_031ad926c209d58c644c6591132bdcd1 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collectioncategory/{collectioncategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory/{collectioncategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/collectioncategory/{collectioncategory}`


<!-- END_031ad926c209d58c644c6591132bdcd1 -->

<!-- START_a20b9ef5cb7b80dec2eddaa7567dccf2 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/collectioncategory/{collectioncategory}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory/{collectioncategory}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/collectioncategory/{collectioncategory}/edit`


<!-- END_a20b9ef5cb7b80dec2eddaa7567dccf2 -->

<!-- START_1b59de746568752ff6fdfc23ac60ba94 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/collectioncategory/{collectioncategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory/{collectioncategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/collectioncategory/{collectioncategory}`

`PATCH api/collectioncategory/{collectioncategory}`


<!-- END_1b59de746568752ff6fdfc23ac60ba94 -->

<!-- START_e20e195f4a1b3571e7e07ccea8b7f3f1 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/collectioncategory/{collectioncategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/collectioncategory/{collectioncategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/collectioncategory/{collectioncategory}`


<!-- END_e20e195f4a1b3571e7e07ccea8b7f3f1 -->

#Item
<!-- START_0413e2e68e6b9925e158d12637d2f830 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/item" 
```

```javascript
const url = new URL("http://localhost:8000/api/item");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": [
        {
            "id": 1,
            "created_at": "2019-02-07 01:27:27",
            "updated_at": "2019-02-07 01:27:27",
            "name": "Bacalhau",
            "item_cat": 1,
            "description": "Testes, testes, testes"
        },
        {
            "id": 2,
            "created_at": "2019-02-07 01:27:27",
            "updated_at": "2019-02-07 01:27:27",
            "name": "Batata",
            "item_cat": 1,
            "description": "Testes, testes, testes"
        },
        {
            "id": 3,
            "created_at": "2019-02-07 01:27:27",
            "updated_at": "2019-02-07 01:27:27",
            "name": "Coisas",
            "item_cat": 1,
            "description": "Testes, testes, testes"
        },
        {
            "id": 4,
            "created_at": "2019-02-07 01:27:27",
            "updated_at": "2019-02-07 01:27:27",
            "name": "Sei lá",
            "item_cat": 1,
            "description": "Testes, testes, testes"
        }
    ]
}
```

### HTTP Request
`GET api/item`


<!-- END_0413e2e68e6b9925e158d12637d2f830 -->

<!-- START_469d2e26a60dbf44392d0739675dc85a -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/item/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/item/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/item/create`


<!-- END_469d2e26a60dbf44392d0739675dc85a -->

<!-- START_7fefd730898a4d951cad6733d4d477ca -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/item" 
```

```javascript
const url = new URL("http://localhost:8000/api/item");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/item`


<!-- END_7fefd730898a4d951cad6733d4d477ca -->

<!-- START_dca1351b320ea5fdaf130bb44136a25d -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/item/{item}" 
```

```javascript
const url = new URL("http://localhost:8000/api/item/{item}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": {
        "id": 1,
        "created_at": "2019-02-07 01:27:27",
        "updated_at": "2019-02-07 01:27:27",
        "name": "Bacalhau",
        "item_cat": 1,
        "description": "Testes, testes, testes"
    }
}
```

### HTTP Request
`GET api/item/{item}`


<!-- END_dca1351b320ea5fdaf130bb44136a25d -->

<!-- START_913ac1e3906e73d7e72e1cbb627f05d8 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/item/{item}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/item/{item}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/item/{item}/edit`


<!-- END_913ac1e3906e73d7e72e1cbb627f05d8 -->

<!-- START_8c2afc21f17f914088b278fd47067c0e -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/item/{item}" 
```

```javascript
const url = new URL("http://localhost:8000/api/item/{item}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/item/{item}`

`PATCH api/item/{item}`


<!-- END_8c2afc21f17f914088b278fd47067c0e -->

<!-- START_660a04aa88b794efd55c11d388a19fcf -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/item/{item}" 
```

```javascript
const url = new URL("http://localhost:8000/api/item/{item}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/item/{item}`


<!-- END_660a04aa88b794efd55c11d388a19fcf -->

#Item Category
<!-- START_68521bb5e8df5cec5a937f5962e7ee39 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/itemcategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/itemcategory`


<!-- END_68521bb5e8df5cec5a937f5962e7ee39 -->

<!-- START_ea3e1c8544070414276731edcd1a3051 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/itemcategory/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/itemcategory/create`


<!-- END_ea3e1c8544070414276731edcd1a3051 -->

<!-- START_c79e6628eeeb819de5e50c3c87b3a9b6 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/itemcategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/itemcategory`


<!-- END_c79e6628eeeb819de5e50c3c87b3a9b6 -->

<!-- START_c7567d75e2c7d38c970fdc43eb26fe0b -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/itemcategory/{itemcategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory/{itemcategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/itemcategory/{itemcategory}`


<!-- END_c7567d75e2c7d38c970fdc43eb26fe0b -->

<!-- START_1d194e262c7ae21dbc5b666ba4073668 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/itemcategory/{itemcategory}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory/{itemcategory}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/itemcategory/{itemcategory}/edit`


<!-- END_1d194e262c7ae21dbc5b666ba4073668 -->

<!-- START_d6575534365363346a7f2f39c3394c95 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/itemcategory/{itemcategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory/{itemcategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/itemcategory/{itemcategory}`

`PATCH api/itemcategory/{itemcategory}`


<!-- END_d6575534365363346a7f2f39c3394c95 -->

<!-- START_7936229605a7cb28df0f96bf828aa267 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/itemcategory/{itemcategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/itemcategory/{itemcategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/itemcategory/{itemcategory}`


<!-- END_7936229605a7cb28df0f96bf828aa267 -->

#Recipe
<!-- START_5f6c0f8cee6fd55f42e5e6594b0e9c5d -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipe" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": [
        {
            "id": 1,
            "name": "Bacalhau",
            "recipe_cat": 1,
            "description": "Testes, testes, testes",
            "est_price": "15",
            "kcal": 3000,
            "time": "30min",
            "image": "http:\/\/www.pescanova.pt\/content\/img\/PN_Bacalhau_Lagareiro-1_utili.jpg",
            "feeds": 2,
            "created_at": "2019-02-07 01:27:27",
            "updated_at": "2019-02-07 01:27:27",
            "items": [
                {
                    "id": 1,
                    "created_at": "2019-02-07 01:27:27",
                    "updated_at": "2019-02-07 01:27:27",
                    "name": "Bacalhau",
                    "item_cat": 1,
                    "description": "Testes, testes, testes",
                    "pivot": {
                        "recipe_id": 1,
                        "item_id": 1,
                        "quantity": "300g"
                    }
                },
                {
                    "id": 2,
                    "created_at": "2019-02-07 01:27:27",
                    "updated_at": "2019-02-07 01:27:27",
                    "name": "Batata",
                    "item_cat": 1,
                    "description": "Testes, testes, testes",
                    "pivot": {
                        "recipe_id": 1,
                        "item_id": 2,
                        "quantity": "300g"
                    }
                },
                {
                    "id": 3,
                    "created_at": "2019-02-07 01:27:27",
                    "updated_at": "2019-02-07 01:27:27",
                    "name": "Coisas",
                    "item_cat": 1,
                    "description": "Testes, testes, testes",
                    "pivot": {
                        "recipe_id": 1,
                        "item_id": 3,
                        "quantity": "300g"
                    }
                },
                {
                    "id": 4,
                    "created_at": "2019-02-07 01:27:27",
                    "updated_at": "2019-02-07 01:27:27",
                    "name": "Sei lá",
                    "item_cat": 1,
                    "description": "Testes, testes, testes",
                    "pivot": {
                        "recipe_id": 1,
                        "item_id": 4,
                        "quantity": "300g"
                    }
                }
            ]
        }
    ]
}
```

### HTTP Request
`GET api/recipe`


<!-- END_5f6c0f8cee6fd55f42e5e6594b0e9c5d -->

<!-- START_3bac276824589d6d581eedd5ad145da6 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipe/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/recipe/create`


<!-- END_3bac276824589d6d581eedd5ad145da6 -->

<!-- START_0e78ae66932e9ae9735855c0cd24320f -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/recipe" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/recipe`


<!-- END_0e78ae66932e9ae9735855c0cd24320f -->

<!-- START_bb021d5e9552cbcb4ba82bc4d8678c36 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipe/{recipe}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe/{recipe}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": {
        "id": 1,
        "name": "Bacalhau",
        "recipe_cat": 1,
        "description": "Testes, testes, testes",
        "est_price": "15",
        "kcal": 3000,
        "time": "30min",
        "image": "http:\/\/www.pescanova.pt\/content\/img\/PN_Bacalhau_Lagareiro-1_utili.jpg",
        "feeds": 2,
        "created_at": "2019-02-07 01:27:27",
        "updated_at": "2019-02-07 01:27:27",
        "items": [
            {
                "id": 1,
                "created_at": "2019-02-07 01:27:27",
                "updated_at": "2019-02-07 01:27:27",
                "name": "Bacalhau",
                "item_cat": 1,
                "description": "Testes, testes, testes",
                "pivot": {
                    "recipe_id": 1,
                    "item_id": 1,
                    "quantity": "300g"
                }
            },
            {
                "id": 2,
                "created_at": "2019-02-07 01:27:27",
                "updated_at": "2019-02-07 01:27:27",
                "name": "Batata",
                "item_cat": 1,
                "description": "Testes, testes, testes",
                "pivot": {
                    "recipe_id": 1,
                    "item_id": 2,
                    "quantity": "300g"
                }
            },
            {
                "id": 3,
                "created_at": "2019-02-07 01:27:27",
                "updated_at": "2019-02-07 01:27:27",
                "name": "Coisas",
                "item_cat": 1,
                "description": "Testes, testes, testes",
                "pivot": {
                    "recipe_id": 1,
                    "item_id": 3,
                    "quantity": "300g"
                }
            },
            {
                "id": 4,
                "created_at": "2019-02-07 01:27:27",
                "updated_at": "2019-02-07 01:27:27",
                "name": "Sei lá",
                "item_cat": 1,
                "description": "Testes, testes, testes",
                "pivot": {
                    "recipe_id": 1,
                    "item_id": 4,
                    "quantity": "300g"
                }
            }
        ]
    }
}
```

### HTTP Request
`GET api/recipe/{recipe}`


<!-- END_bb021d5e9552cbcb4ba82bc4d8678c36 -->

<!-- START_4675f9450133664fd286029c56654815 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipe/{recipe}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe/{recipe}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/recipe/{recipe}/edit`


<!-- END_4675f9450133664fd286029c56654815 -->

<!-- START_852963192fed58de08ad3134ce91d339 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/recipe/{recipe}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe/{recipe}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/recipe/{recipe}`

`PATCH api/recipe/{recipe}`


<!-- END_852963192fed58de08ad3134ce91d339 -->

<!-- START_4e7b7d05649205b488c9b6310fae75ff -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/recipe/{recipe}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipe/{recipe}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/recipe/{recipe}`


<!-- END_4e7b7d05649205b488c9b6310fae75ff -->

#Recipe Category
<!-- START_a6857cbd3c582c18c05380c8fad09ec8 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipecategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/recipecategory`


<!-- END_a6857cbd3c582c18c05380c8fad09ec8 -->

<!-- START_06b741f4e0f06b4e18eb7a503d531ac0 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipecategory/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/recipecategory/create`


<!-- END_06b741f4e0f06b4e18eb7a503d531ac0 -->

<!-- START_9ad4936be000b13028d8ef9c49ba496d -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/recipecategory" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/recipecategory`


<!-- END_9ad4936be000b13028d8ef9c49ba496d -->

<!-- START_e813753ca0552a5b58457d05118645be -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipecategory/{recipecategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory/{recipecategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/recipecategory/{recipecategory}`


<!-- END_e813753ca0552a5b58457d05118645be -->

<!-- START_62744655447d73590aac38c5d69bcd44 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/recipecategory/{recipecategory}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory/{recipecategory}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/recipecategory/{recipecategory}/edit`


<!-- END_62744655447d73590aac38c5d69bcd44 -->

<!-- START_315b97a51aa644ea102c258f40fed817 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/recipecategory/{recipecategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory/{recipecategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/recipecategory/{recipecategory}`

`PATCH api/recipecategory/{recipecategory}`


<!-- END_315b97a51aa644ea102c258f40fed817 -->

<!-- START_6d28b0f0b25b5316bc4f871658866168 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/recipecategory/{recipecategory}" 
```

```javascript
const url = new URL("http://localhost:8000/api/recipecategory/{recipecategory}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/recipecategory/{recipecategory}`


<!-- END_6d28b0f0b25b5316bc4f871658866168 -->

#User
<!-- START_2b6e5a4b188cb183c7e59558cce36cb6 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/user" 
```

```javascript
const url = new URL("http://localhost:8000/api/user");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/user`


<!-- END_2b6e5a4b188cb183c7e59558cce36cb6 -->

<!-- START_7f66c974d24032cb19061d55d801f62b -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/user/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/user/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/user/create`


<!-- END_7f66c974d24032cb19061d55d801f62b -->

<!-- START_f0654d3f2fc63c11f5723f233cc53c83 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/user" 
```

```javascript
const url = new URL("http://localhost:8000/api/user");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/user`


<!-- END_f0654d3f2fc63c11f5723f233cc53c83 -->

<!-- START_ceec0e0b1d13d731ad96603d26bccc2f -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/user/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/api/user/{user}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (404):

```json
{
    "message": "No query results for model [App\\User].",
    "exception": "Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
    "line": 200,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
            "line": 176,
            "function": "prepareException",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Exceptions\/Handler.php",
            "line": 49,
            "function": "render",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/nunomaduro\/collision\/src\/Adapters\/Laravel\/ExceptionHandler.php",
            "line": 68,
            "function": "render",
            "class": "App\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 83,
            "function": "render",
            "class": "NunoMaduro\\Collision\\Adapters\\Laravel\\ExceptionHandler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 55,
            "function": "handleException",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
            "line": 58,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/user/{user}`


<!-- END_ceec0e0b1d13d731ad96603d26bccc2f -->

<!-- START_f4aa12af19ba08e1448d7eafc9f55e67 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/user/{user}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/user/{user}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (404):

```json
{
    "message": "No query results for model [App\\User].",
    "exception": "Symfony\\Component\\HttpKernel\\Exception\\NotFoundHttpException",
    "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
    "line": 200,
    "trace": [
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Exceptions\/Handler.php",
            "line": 176,
            "function": "prepareException",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/app\/Exceptions\/Handler.php",
            "line": 49,
            "function": "render",
            "class": "Illuminate\\Foundation\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/nunomaduro\/collision\/src\/Adapters\/Laravel\/ExceptionHandler.php",
            "line": 68,
            "function": "render",
            "class": "App\\Exceptions\\Handler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 83,
            "function": "render",
            "class": "NunoMaduro\\Collision\\Adapters\\Laravel\\ExceptionHandler",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 55,
            "function": "handleException",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Middleware\/ThrottleRequests.php",
            "line": 58,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Routing\\Middleware\\ThrottleRequests",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 684,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 659,
            "function": "runRouteWithinStack",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 625,
            "function": "runRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Router.php",
            "line": 614,
            "function": "dispatchToRoute",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 176,
            "function": "dispatch",
            "class": "Illuminate\\Routing\\Router",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 30,
            "function": "Illuminate\\Foundation\\Http\\{closure}",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/fideloper\/proxy\/src\/TrustProxies.php",
            "line": 57,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Fideloper\\Proxy\\TrustProxies",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/TransformsRequest.php",
            "line": 31,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\TransformsRequest",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/ValidatePostSize.php",
            "line": 27,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Middleware\/CheckForMaintenanceMode.php",
            "line": 62,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 151,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Routing\/Pipeline.php",
            "line": 53,
            "function": "Illuminate\\Pipeline\\{closure}",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Pipeline\/Pipeline.php",
            "line": 104,
            "function": "Illuminate\\Routing\\{closure}",
            "class": "Illuminate\\Routing\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 151,
            "function": "then",
            "class": "Illuminate\\Pipeline\\Pipeline",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Http\/Kernel.php",
            "line": 116,
            "function": "sendRequestThroughRouter",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 272,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Http\\Kernel",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 256,
            "function": "callLaravelRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseStrategies\/ResponseCallStrategy.php",
            "line": 33,
            "function": "makeApiCall",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 49,
            "function": "__invoke",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseStrategies\\ResponseCallStrategy",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/ResponseResolver.php",
            "line": 68,
            "function": "resolve",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Tools\/Generator.php",
            "line": 54,
            "function": "getResponse",
            "class": "Mpociot\\ApiDoc\\Tools\\ResponseResolver",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 196,
            "function": "processRoute",
            "class": "Mpociot\\ApiDoc\\Tools\\Generator",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/mpociot\/laravel-apidoc-generator\/src\/Commands\/GenerateDocumentation.php",
            "line": 57,
            "function": "processRoutes",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "function": "handle",
            "class": "Mpociot\\ApiDoc\\Commands\\GenerateDocumentation",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 29,
            "function": "call_user_func_array"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 87,
            "function": "Illuminate\\Container\\{closure}",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/BoundMethod.php",
            "line": 31,
            "function": "callBoundMethod",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Container\/Container.php",
            "line": 572,
            "function": "call",
            "class": "Illuminate\\Container\\BoundMethod",
            "type": "::"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 183,
            "function": "call",
            "class": "Illuminate\\Container\\Container",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Command\/Command.php",
            "line": 255,
            "function": "execute",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Command.php",
            "line": 170,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Command\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 901,
            "function": "run",
            "class": "Illuminate\\Console\\Command",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 262,
            "function": "doRunCommand",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/symfony\/console\/Application.php",
            "line": 145,
            "function": "doRun",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Console\/Application.php",
            "line": 89,
            "function": "run",
            "class": "Symfony\\Component\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Console\/Kernel.php",
            "line": 122,
            "function": "run",
            "class": "Illuminate\\Console\\Application",
            "type": "->"
        },
        {
            "file": "\/home\/josueaosilverio\/Desktop\/lime\/limeapi\/artisan",
            "line": 37,
            "function": "handle",
            "class": "Illuminate\\Foundation\\Console\\Kernel",
            "type": "->"
        }
    ]
}
```

### HTTP Request
`GET api/user/{user}/edit`


<!-- END_f4aa12af19ba08e1448d7eafc9f55e67 -->

<!-- START_a4a2abed1e8e8cad5e6a3282812fe3f3 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/user/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/api/user/{user}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/user/{user}`

`PATCH api/user/{user}`


<!-- END_a4a2abed1e8e8cad5e6a3282812fe3f3 -->

<!-- START_4bb7fb4a7501d3cb1ed21acfc3b205a9 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/user/{user}" 
```

```javascript
const url = new URL("http://localhost:8000/api/user/{user}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/user/{user}`


<!-- END_4bb7fb4a7501d3cb1ed21acfc3b205a9 -->

#User Roles
<!-- START_def092c61cff31ea71c3b271f0d740bc -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/userrole" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/userrole`


<!-- END_def092c61cff31ea71c3b271f0d740bc -->

<!-- START_96d3922e084cf439c88d9bf366ee3eff -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/userrole/create" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole/create");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/userrole/create`


<!-- END_96d3922e084cf439c88d9bf366ee3eff -->

<!-- START_47612cfdf47c0b337c77aa962ea4467e -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST "http://localhost:8000/api/userrole" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`POST api/userrole`


<!-- END_47612cfdf47c0b337c77aa962ea4467e -->

<!-- START_5f60feb65b8fa1a82a18dabe6a0653da -->
## Display the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/userrole/{userrole}" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole/{userrole}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
{
    "status": "200",
    "message": "Operation Successful",
    "data": []
}
```

### HTTP Request
`GET api/userrole/{userrole}`


<!-- END_5f60feb65b8fa1a82a18dabe6a0653da -->

<!-- START_c6ad0cf976171d2cf6714fcdbadc819f -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET -G "http://localhost:8000/api/userrole/{userrole}/edit" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole/{userrole}/edit");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```

> Example response (200):

```json
null
```

### HTTP Request
`GET api/userrole/{userrole}/edit`


<!-- END_c6ad0cf976171d2cf6714fcdbadc819f -->

<!-- START_bd2b374a3f7a2e4755a1d84b5f65000f -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT "http://localhost:8000/api/userrole/{userrole}" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole/{userrole}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`PUT api/userrole/{userrole}`

`PATCH api/userrole/{userrole}`


<!-- END_bd2b374a3f7a2e4755a1d84b5f65000f -->

<!-- START_867750a5a8462710c5b6e5b7158a7db0 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE "http://localhost:8000/api/userrole/{userrole}" 
```

```javascript
const url = new URL("http://localhost:8000/api/userrole/{userrole}");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


### HTTP Request
`DELETE api/userrole/{userrole}`


<!-- END_867750a5a8462710c5b6e5b7158a7db0 -->


