# GraphQlRealTimeRacing 

Lab3 in progress

Create your own GeoFence for upload to AWS Location Service - https://geojson.io/

Inline Geofence Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "BatchEvaluate",
            "Effect": "Allow",
            "Action": [
                "geo:BatchEvaluateGeofences"
                ],
            "Resource": "arn:aws:geo:us-east-1:<ID>:geofence-collection/MonzaCircuit"
        }
    ]
}
```

Add AWS SDK location service client
```bash
yarn add @aws-sdk/client-location
```