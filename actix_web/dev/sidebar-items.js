initSidebarItems({"enum":[["Body","Represents various types of http message body."],["BodySize","Body size hint"],["Payload","Type represent streaming payload"],["ResponseBody",""]],"struct":[["AppConfig",""],["AppService","Application configuration"],["ConnectionInfo","`HttpRequest` connection information"],["Decompress",""],["Extensions","A type map of request extensions."],["HttpResponseBuilder","An HTTP response builder"],["JsonBody","Request's payload json parser, it resolves to a deserialized `T` value. This future could be used with `ServiceRequest` and `ServiceFromRequest`."],["Path","Resource path match information"],["Readlines","Stream to read request line by line."],["RequestHead",""],["ResourceDef","ResourceDef describes an entry in resources table"],["ResourceMap",""],["ResponseHead",""],["Server",""],["ServiceRequest","An service http request"],["ServiceResponse",""],["SizedStream","Type represent streaming body. This body implementation should be used if total size of stream is known. Data get sent as is without using transfer encoding."],["Url",""],["UrlEncoded","Future that resolves to a parsed urlencoded values."],["WebService",""]],"trait":[["HttpServiceFactory",""],["MessageBody","Type that provides this trait can be streamed to a peer."],["ResourcePath",""],["Service","An asynchronous function from `Request` to a `Response`."],["Transform","The `Transform` trait defines the interface of a Service factory.  `Transform` is often implemented for middleware, defining how to manufacture a middleware Service.  A Service that is manufactured by the factory takes the Service that follows it during execution as a parameter, assuming ownership of the next Service.  A Service can be a variety of types, such as (but not limited to) another middleware Service, an extractor Service, other helper Services, or the request handler endpoint Service."]],"type":[["PayloadStream","Type represent boxed payload"]]});