module.exports =

{
    "vers":0.01,
    "config":{
       "rate":"perhr",
       "valueColumns":[
          "1 hour",
          "6 hours"
       ],
       "currencies":[
          "USD"
       ],
       "regions":[
          {
             "region":"us-east-1",
             "footnotes":{
                "*":"notAvailableForCCorCGPU"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.069"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.088"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.139"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.277"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.353"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.554"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.706"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.386"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.764"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.037"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.047"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.073"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.093"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.146"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.186"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.293"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.372"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.061"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.077"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.121"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.154"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.243"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.309"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.485"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.617"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.97"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.234"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.058"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.073"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.231"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.294"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.462"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.588"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.924"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.176"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.358"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.455"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.43"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.82"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.45"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.585"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.6"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.68"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.16xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"7.2"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"9.36"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"7.336"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"9.337"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.096"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.122"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.193"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.245"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.385"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.49"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.77"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.98"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.54"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.96"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.469"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.597"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.938"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.193"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.876"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.387"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.751"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.774"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.38"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.483"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.759"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.966"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.518"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.932"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.036"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"3.864"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.024"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.031"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.048"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.061"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.096"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.122"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.193"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.245"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.072"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.091"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.286"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.364"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cc2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.1"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.4"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuPreviousGen",
                   "sizes":[
                      {
                         "size":"cg1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.155"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.47"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.135"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.171"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.27"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.343"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.539"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.686"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cr1.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.925"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.45"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storagePreviousGen",
                   "sizes":[
                      {
                         "size":"hi1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.705"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.17"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.011"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.014"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"us-west-2",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.069"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.088"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.139"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.277"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.353"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.554"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.706"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.386"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.764"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.037"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.047"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.073"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.093"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.146"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.186"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.293"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.372"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.061"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.077"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.121"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.154"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.243"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.309"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.485"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.617"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.97"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.234"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.058"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.073"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.231"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.294"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.462"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.588"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.924"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.176"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.358"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.455"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.43"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.82"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.45"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.585"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.6"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.68"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.16xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"7.2"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"9.36"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"7.336"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"9.337"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.096"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.122"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.193"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.245"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.385"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.49"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.77"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.98"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.54"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.96"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.469"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.597"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.938"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.193"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.876"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.387"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.751"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.774"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.38"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.483"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.759"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.966"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.518"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.932"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.036"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"3.864"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.024"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.031"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.048"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.061"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.096"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.122"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.193"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.245"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.072"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.091"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.286"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.364"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cc2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.1"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.4"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.135"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.171"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.27"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.343"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.539"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.686"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cr1.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.925"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.45"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storagePreviousGen",
                   "sizes":[
                      {
                         "size":"hi1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.705"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.17"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.011"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.014"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"us-west-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.081"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.103"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.162"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.206"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.323"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.412"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.647"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.823"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.617"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.058"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.042"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.054"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.085"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.108"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.169"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.216"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.339"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.431"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.076"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.097"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.152"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.193"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.304"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.386"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.607"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.773"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.214"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.546"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.066"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.084"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.131"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.167"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.263"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.335"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.526"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.669"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.052"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.338"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.386"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.491"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.544"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.966"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.107"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.136"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.215"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.273"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.429"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.546"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.858"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.092"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.716"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.184"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.516"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.657"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.032"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.313"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.063"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.626"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.126"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.251"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.43"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.547"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.86"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.094"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.719"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.187"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.438"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.375"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.026"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.033"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.052"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.066"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.105"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.133"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.208"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.265"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.081"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.104"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.326"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.414"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.151"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.192"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.303"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.385"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.605"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.77"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.014"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.017"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"eu-west-1",
             "footnotes":{
                "*":"notAvailableForCCorCGPU"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.076"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.097"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.153"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.195"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.306"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.389"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.612"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.778"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.529"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.946"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.04"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.051"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.08"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.102"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.161"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.205"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.322"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.409"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.069"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.087"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.138"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.276"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.351"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.552"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.702"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.103"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.404"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.066"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.084"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.131"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.167"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.263"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.335"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.526"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.669"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.052"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.338"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.386"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.491"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.544"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.966"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.486"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.632"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.888"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.055"
                               }
                            }
                         ]
                      },
                      {
                         "size":"p2.16xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"7.776"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"10.109"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"8.803"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"11.204"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.107"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.136"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.215"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.273"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.429"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.546"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.858"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.092"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.716"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.184"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.516"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.657"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.032"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.313"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.063"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.626"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.126"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.251"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.404"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.514"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.808"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.029"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.617"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.058"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.234"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.116"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.026"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.033"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.052"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.066"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.105"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.133"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.208"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.265"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.081"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.104"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.326"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.414"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cc2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.238"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.575"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuPreviousGen",
                   "sizes":[
                      {
                         "size":"cg1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.298"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.652"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.151"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.192"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.303"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.385"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.605"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.77"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cr1.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.062"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.625"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storagePreviousGen",
                   "sizes":[
                      {
                         "size":"hi1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.705"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.17"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.011"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.014"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"eu-central-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.083"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.105"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.165"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.21"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.33"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.42"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.66"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.84"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.65"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.1"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.043"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.055"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.087"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.111"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.173"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.22"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.348"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.442"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.078"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.099"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.155"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.197"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.309"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.393"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.619"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.787"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.238"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.575"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.071"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.09"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.142"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.181"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.284"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.361"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.568"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.722"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.135"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.445"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.425"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.54"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.698"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.162"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"10.271"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"13.072"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.232"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.295"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.463"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.589"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.926"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.179"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.853"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.358"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.557"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.709"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.114"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.418"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.228"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.836"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.456"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.671"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.437"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.556"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.873"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.112"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.747"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.223"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.494"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.446"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"ap-southeast-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.103"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.131"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.206"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.262"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.411"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.524"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.823"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.047"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.057"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.618"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.054"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.069"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.108"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.137"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.216"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.274"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.431"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.549"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.084"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.106"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.167"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.213"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.334"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.426"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.669"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.851"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.338"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.702"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.073"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.092"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.146"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.185"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.291"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.37"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.582"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.741"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.164"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.482"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.55"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.7"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.2"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.8"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"10.638"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"13.539"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.231"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.294"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.462"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.588"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.924"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.848"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.352"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.56"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.713"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.119"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.424"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.239"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.849"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.477"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.698"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.479"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.609"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.957"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.218"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.914"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.436"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.828"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.872"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.032"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.041"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.064"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.082"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.128"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.163"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.257"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.327"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.09"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.115"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.36"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.458"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.163"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.207"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.326"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.414"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.651"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.828"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.011"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.014"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"ap-northeast-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.101"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.128"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.201"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.256"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.403"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.512"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.805"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.025"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.013"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.562"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.053"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.067"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.106"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.135"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.212"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.269"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.424"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.539"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.077"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.098"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.153"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.195"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.307"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.391"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.614"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.782"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.229"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.564"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.07"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.09"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.14"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.178"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.281"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.358"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.562"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.715"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.124"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.43"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.494"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.629"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.976"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.514"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"10.638"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"13.539"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.231"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.294"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.462"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.588"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.924"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.848"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.352"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.551"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.701"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.101"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.401"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.201"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.801"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.402"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.603"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.464"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.591"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.928"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.182"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.857"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.363"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.714"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.726"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.034"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.043"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.067"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.085"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.134"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.17"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.267"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.34"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.087"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.111"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.348"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.442"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cc2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.292"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.644"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.158"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.201"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.316"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.402"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.632"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.805"
                               }
                            }
                         ]
                      },
                      {
                         "size":"cr1.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.258"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.873"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storagePreviousGen",
                   "sizes":[
                      {
                         "size":"hi1.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.802"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.293"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.014"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.018"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"ap-southeast-2",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.097"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.124"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.195"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.248"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.389"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.496"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.779"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.991"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.947"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.478"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.051"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.065"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.102"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.13"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.205"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.26"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.41"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.521"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.079"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.101"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.159"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.202"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.318"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.405"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.635"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.808"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.271"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.617"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.073"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.092"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.146"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.185"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.291"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.37"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.582"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.741"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.164"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.482"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"gpuCurrentGen",
                   "sizes":[
                      {
                         "size":"g2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.494"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.629"
                               }
                            }
                         ]
                      },
                      {
                         "size":"g2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.976"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.514"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"x1.32xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"10.638"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"13.539"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.116"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.147"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.231"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.294"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.462"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.588"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.924"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.176"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.848"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.352"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.56"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.713"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.119"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.424"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.239"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.849"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.477"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.698"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.479"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.609"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.957"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.218"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.914"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.436"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.828"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.872"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.032"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.041"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.064"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.082"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.128"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.163"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.257"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.327"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.09"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.115"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.36"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.458"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.163"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.207"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.326"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.414"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.651"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.828"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.011"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.014"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"ap-northeast-2",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.091"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.115"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.182"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.232"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.363"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.462"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.727"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.925"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.817"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.312"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.066"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.084"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.131"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.167"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.263"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.335"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.525"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.668"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.05"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.337"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.11"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.14"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.219"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.279"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.439"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.559"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.878"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.117"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.756"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.234"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.551"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.701"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.101"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.401"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.201"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.801"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.402"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.603"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.464"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.591"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.928"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.182"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.857"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.363"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.714"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.726"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"ap-south-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.093"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.118"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.185"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.236"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.371"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.472"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.743"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.945"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.856"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.362"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.075"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.096"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.151"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.192"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.302"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.384"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.603"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.768"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.207"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.536"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"r3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.105"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.133"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.208"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.265"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.417"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.531"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.834"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.061"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.668"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.122"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"storageCurrentGen",
                   "sizes":[
                      {
                         "size":"i2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.532"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.677"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.063"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.353"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"2.127"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.707"
                               }
                            }
                         ]
                      },
                      {
                         "size":"i2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"4.253"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"5.413"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.455"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.579"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.909"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.157"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.818"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.314"
                               }
                            }
                         ]
                      },
                      {
                         "size":"d2.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.637"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.628"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          },
          {
             "region":"sa-east-1",
             "footnotes":{
                "*":"clusterOnlyInUSEast"
             },
             "instanceTypes":[
                {
                   "type":"generalCurrentGen",
                   "sizes":[
                      {
                         "size":"m4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.094"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.12"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.189"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.24"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.377"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.479"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.754"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.959"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m4.10xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.884"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.397"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.052"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.066"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.105"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.133"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.21"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.267"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.419"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.533"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computeCurrentGen",
                   "sizes":[
                      {
                         "size":"c4.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.09"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.114"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.179"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.227"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.358"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.455"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.715"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.91"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c4.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.43"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.82"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.09"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.114"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.179"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.227"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.358"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.455"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.715"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.91"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.43"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"1.82"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"hiMemCurrentGen",
                   "sizes":[
                      {
                         "size":"r3.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"1.62"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"2.062"
                               }
                            }
                         ]
                      },
                      {
                         "size":"r3.8xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"3.241"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"4.124"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"generalPreviousGen",
                   "sizes":[
                      {
                         "size":"m1.small",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.032"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.041"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.064"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.082"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.large",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.128"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.163"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.257"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.327"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"computePreviousGen",
                   "sizes":[
                      {
                         "size":"c1.medium",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.098"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.125"
                               }
                            }
                         ]
                      },
                      {
                         "size":"c1.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.395"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.503"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Memory Optimized - Previous Generation",
                   "sizes":[
                      {
                         "size":"m2.xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.178"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.226"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.2xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.355"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.451"
                               }
                            }
                         ]
                      },
                      {
                         "size":"m2.4xlarge",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.71"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.904"
                               }
                            }
                         ]
                      }
                   ]
                },
                {
                   "type":"Micro Instances - Previous Generation",
                   "sizes":[
                      {
                         "size":"t1.micro",
                         "valueColumns":[
                            {
                               "name":"1 hour",
                               "prices":{
                                  "USD":"0.015"
                               }
                            },
                            {
                               "name":"6 hours",
                               "prices":{
                                  "USD":"0.019"
                               }
                            }
                         ]
                      }
                   ]
                }
             ]
          }
       ]
    }
 }
 