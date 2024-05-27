"use strict";(self.webpackChunkcalra_docs=self.webpackChunkcalra_docs||[]).push([[514],{9186:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(4848),t=a(8453);const s={sidebar_label:"Resource Builder",sidebar_position:2,description:"Builder instance"},i="Class Resource Builder",o={id:"cdk/resourcebuilder",title:"Class Resource Builder",description:"Builder instance",source:"@site/docs/cdk/resourcebuilder.md",sourceDirName:"cdk",slug:"/cdk/resourcebuilder",permalink:"/docs/cdk/resourcebuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cdk/resourcebuilder.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Resource Builder",sidebar_position:2,description:"Builder instance"},sidebar:"docsSidebar",previous:{title:"About",permalink:"/docs/cdk/about"},next:{title:"Lambda Package",permalink:"/docs/category/lambda-package"}},d={},l=[{value:"ResourceBuilder Constructor",id:"resourcebuilder-constructor",level:2},{value:"Defaults",id:"defaults",level:2},{value:"set_default_memory_size",id:"set_default_memory_size",level:3},{value:"set_default_role",id:"set_default_role",level:3},{value:"set_default_runtime",id:"set_default_runtime",level:3},{value:"set_default_timeout",id:"set_default_timeout",level:3},{value:"set_default_vpc",id:"set_default_vpc",level:3},{value:"Commons",id:"commons",level:2},{value:"add_common_environment",id:"add_common_environment",level:3},{value:"add_common_layer",id:"add_common_layer",level:3},{value:"add_common_security_group",id:"add_common_security_group",level:3},{value:"Customs",id:"customs",level:2},{value:"add_custom_environment",id:"add_custom_environment",level:3},{value:"add_custom_layer",id:"add_custom_layer",level:3},{value:"add_custom_role",id:"add_custom_role",level:3},{value:"add_custom_runtime",id:"add_custom_runtime",level:3},{value:"add_custom_security_group",id:"add_custom_security_group",level:3},{value:"add_custom_vpc",id:"add_custom_vpc",level:3},{value:"Build your Lambda and Rest API Infraestructure",id:"build-your-lambda-and-rest-api-infraestructure",level:2},{value:"Full Example",id:"full-example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"class-resource-builder",children:"Class Resource Builder"}),"\n",(0,r.jsx)(n.h2,{id:"resourcebuilder-constructor",children:"ResourceBuilder Constructor"}),"\n",(0,r.jsx)(n.p,{children:"Before starting to customize our builder object, we have to instantiate it. Whilst it is possible to define the options before instantiating the builder and send them as a parameter, we recommend creating a new object instance and then start defining it's customized default, common and custom options."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from aws_cdk import (\n    Duration,\n    Stack,\n    aws_iam as iam,\n    aws_lambda,\n    aws_lambda_python_alpha,\n    aws_apigateway as apigateway,\n\n)\nfrom calra_cdk import ResourceBuilder\nfrom constructs import Construct\n\nclass CalraExampleStack(Stack):\n\n    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:\n        super().__init__(scope, construct_id, **kwargs)\n\n        builder = ResourceBuilder()\n"})}),"\n",(0,r.jsx)(n.h1,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.p,{children:"Calra CDK supports various methods divided in three categories: Defaults, Commons and Customs, referencing the topic of the option being added to the builder."}),"\n",(0,r.jsx)(n.h2,{id:"defaults",children:"Defaults"}),"\n",(0,r.jsxs)(n.p,{children:["The ResourceBuilder instance is able to set default options for numerous Lambda Function's parameters (And only one value per category). This default options will be assigned to each function created through the Builder and can only be overridden on a case to casis basis using ",(0,r.jsx)(n.a,{href:"/docs/category/lambda-package",children:"Lambda Decorators"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"set_default_memory_size",children:"set_default_memory_size"}),"\n",(0,r.jsx)(n.p,{children:"Sets the default amount of memory, in MB, that is allocated to all Lambda Function's created via this CDK's ResourceBuilder instance."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"memory_size (int)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"        builder.set_default_memory_size(256)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set_default_role",children:"set_default_role"}),"\n",(0,r.jsx)(n.p,{children:"Sets the default role that grants special permissions to access AWS services and resources to all Lambda Function's created via this CDK's ResourceBuilder instance."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"role (iam.Role)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"        default_role = iam.Role(\n            self, \"calra-role\",\n            assumed_by= iam.ServicePrincipal('lambda.amazonaws.com'),\n            managed_policies= [\n                iam.ManagedPolicy.from_aws_managed_policy_name('service-role/AWSLambdaBasicExecutionRole')\n            ]\n        )\n        builder.set_default_role(default_role)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set_default_runtime",children:"set_default_runtime"}),"\n",(0,r.jsx)(n.p,{children:"A default runtime will be assigned as an option to all Lambda Function's created via this CDK's ResourceBuilder instance if not specified a custom one."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"runtime (Runtime)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"        python38 = aws_lambda.Runtime.PYTHON_3_8\n        builder.set_default_runtime(python38)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set_default_timeout",children:"set_default_timeout"}),"\n",(0,r.jsx)(n.p,{children:"Sets how much time every Lambda Function will have by default to complete it's execution before it's aborted. Keep in mind an API Gateway already sets a maximum timeout of 15 seconds, so this option should be in the range from 0 to 15 seconds."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"timeout (Duration)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"        default_timeout = Duration.seconds(10)\n        builder.set_default_timeout(default_timeout)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set_default_vpc",children:"set_default_vpc"}),"\n",(0,r.jsx)(n.h2,{id:"commons",children:"Commons"}),"\n",(0,r.jsx)(n.p,{children:"Common options are parameters destined to be added to every Lambda Function. The difference between default and common options is that common settings can set multiple values per category. For example, a singular Lambda Function can have multiple layers, so it is common. On the other hand, one singular Lambda Function can only assume one IAM Role, so it is default."}),"\n",(0,r.jsx)(n.h3,{id:"add_common_environment",children:"add_common_environment"}),"\n",(0,r.jsx)(n.p,{children:"Adds a new common environment variable. Lambda Functions created via this CDK's ResourceBuilder instance will be assigned this option."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (str|int|float)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'        builder.add_common_environment("URL", "http://example.com")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add_common_layer",children:"add_common_layer"}),"\n",(0,r.jsx)(n.p,{children:"Adds a new common layer. Lambda Functions created via this CDK's ResourceBuilder instance will be assigned this option."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"layer (LayerVersion|PythonLayerVersion)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'        layer = aws_lambda_python_alpha.PythonLayerVersion(\n                self, "calra-lambda",\n                entry="./layers",\n                compatible_runtimes=[aws_lambda.Runtime.PYTHON_3_10, aws_lambda.Runtime.PYTHON_3_11]\n            )\n        builder.add_common_layer(layer)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add_common_security_group",children:"add_common_security_group"}),"\n",(0,r.jsx)(n.p,{children:"Adds a new common security group. Lambda Functions created via this CDK's ResourceBuilder instance will be assigned this option."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Keep in mind a security group will only work if the Lambda Function is assigned the same VPC as the Security Group."})}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"security_group (ec2.SecurityGroup)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"customs",children:"Customs"}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_environment",children:"add_custom_environment"}),"\n",(0,r.jsx)(n.p,{children:"Registers a custom environment variable as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (str|int|float)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'        builder.add_common_environment("URL", "http://example.com")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_layer",children:"add_custom_layer"}),"\n",(0,r.jsx)(n.p,{children:"Registers a layer runtime as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (LayerVersion|PythonLayerVersion)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'        custom_layer = aws_lambda_python_alpha.PythonLayerVersion(\n                self, "calra-lambda",\n                entry="./layers/django",\n                compatible_runtimes=[aws_lambda.Runtime.PYTHON_3_10, aws_lambda.Runtime.PYTHON_3_11]\n            )\n        builder.add_custom_layer("django", custom_layer)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_role",children:"add_custom_role"}),"\n",(0,r.jsx)(n.p,{children:"Registers a custom role as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (iam.Role)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"        custom_role = iam.Role(\n            self, \"calra-role\",\n            assumed_by= iam.ServicePrincipal('lambda.amazonaws.com'),\n            managed_policies= [\n                iam.ManagedPolicy.from_aws_managed_policy_name('service-role/AWSLambdaBasicExecutionRole'),\n                iam.ManagedPolicy.from_aws_managed_policy_name('service-role/AWSLambdaKinesisExecutionRole'),\n                iam.ManagedPolicy.from_aws_managed_policy_name('service-role/AmazonS3ObjectLambdaExecutionRolePolicy')\n            ]\n        )\n        builder.add_custom_role(\"kinesis_s3_connection\", custom_role)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_runtime",children:"add_custom_runtime"}),"\n",(0,r.jsx)(n.p,{children:"Registers a custom runtime as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (Runtime)"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"When instantiating a ResourceBuilder, custom runtimes going from Python 3.8 to 3.12 are also created. A developer can directly set these custom runtimes using the following keys without the need of declaring custom runtimes: 'python3.8', 'python3.9', 'python3.10', 'python3.11' and 'python3.12'."})}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_security_group",children:"add_custom_security_group"}),"\n",(0,r.jsx)(n.p,{children:"Registers a custom security group as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Keep in mind a security group will only work if the Lambda Function is assigned the same VPC as the Security Group."})}),"\n",(0,r.jsx)(n.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"key (str)"}),"\n",(0,r.jsx)(n.li,{children:"value (ec2.SecurityGroup)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"add_custom_vpc",children:"add_custom_vpc"}),"\n",(0,r.jsx)(n.p,{children:"Registers a custom virtual private network as an option for your builder that can be referenced with a key via the runtime decorator in your Lambda Function."}),"\n",(0,r.jsx)(n.h2,{id:"build-your-lambda-and-rest-api-infraestructure",children:"Build your Lambda and Rest API Infraestructure"}),"\n",(0,r.jsxs)(n.p,{children:["After having customized a ResourceBuilder object, invoking the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"build"})})," method will take care of creating the infraestructure for your Lambda Functions and Rest API resources. For this, you need to previously define the path to where the code for your Lambda's is stored and the API Gateway root resource you want the routing to be based off."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class CalraExampleStack(Stack):\n\n    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:\n        super().__init__(scope, construct_id, **kwargs)\n\n        builder = ResourceBuilder()\n\n        lambda_path = 'lambdas'\n\n        restapi = apigateway.RestApi(\n            self, 'calra-RestApi',\n            rest_api_name= 'calra-restApi')\n        root_resource = restapi.root\n\n        builder.build(self, root_resource, lambda_path, print_tree=True)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following code snippet features the CDK side of the example shown in ",(0,r.jsx)(n.a,{href:"https://github.com/cdk-ast-lambda-rest-api/calra-example-simple",children:(0,r.jsx)(n.strong,{children:"CALRA's Simple Example repository"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from aws_cdk import (\n    Duration,\n    Stack,\n    aws_iam as iam,\n    aws_lambda as _lambda,\n    aws_lambda_python_alpha as _lambda_python,\n    aws_apigateway as apigateway,\n    aws_ec2 as ec2\n)\nfrom calra_cdk import ResourceBuilder\nfrom constructs import Construct\n\nclass CalraExampleStack(Stack):\n\n    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:\n        super().__init__(scope, construct_id, **kwargs)\n\n        builder = ResourceBuilder()\n        lambda_path = \'lambdas\'\n\n        restapi = apigateway.RestApi(\n            self, \'calra-RestApi\',\n            rest_api_name= \'calra-restApi\')\n        root_resource = restapi.root\n\n        builder.set_default_timeout(Duration.seconds(10))\n        builder.set_default_runtime(_lambda.Runtime.PYTHON_3_10)\n        builder.add_common_environment("URL", "http://example.com")\n        builder.add_custom_environment("DB_NAME_CATS", "cats")\n        builder.add_custom_environment("DB_NAME_DOGS", "dogs")\n\n        builder.build(self, root_resource, lambda_path, print_tree=True)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);