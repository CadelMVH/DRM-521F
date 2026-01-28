TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mouseControlMode": "drag_rotation",
  "buttonPause": {
   "paddingTop": 0,
   "verticalAlign": "middle",
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 67.99,
   "height": 55.72,
   "class": "IconButton",
   "paddingBottom": 0,
   "minWidth": 0,
   "borderSize": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "shadow": false,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "paddingLeft": 0,
   "data": {
    "name": "Button1166"
   },
   "backgroundOpacity": 0,
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png"
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.44,
        "yaw": -36.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 82,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -36.76
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_13102C6B_059A_6C1C_4150_9CC9F1898E43",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -36.76,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 110,
           "class": "ImageResourceLevel",
           "width": 569,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -36.76
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.2,
        "yaw": -34.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -17.38
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_2A033840_0666_340D_4197_3525A419A3EA); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_12C7555F_059F_DC34_4174_3FC0884466DB",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -34.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "class": "ImageResourceLevel",
           "width": 219,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -17.38
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.12,
        "yaw": 137.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 9.81
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.MainViewerVideoPlayer.play()"
       }
      ],
      "id": "overlay_23424659_05BA_5C3C_4191_EC2D9F59E20F",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 137.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 30.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 431,
           "class": "ImageResourceLevel",
           "width": 570,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 9.81
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": -42.75,
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.35,
           "yaw": -42.75,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 34,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.38
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE, this.camera_2DAF080C_0666_3415_4196_7264A8E993D5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DECD382_059E_540D_4183_621524084845",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": -42.75,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 212,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -24.38
          }
         ]
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.92,
           "yaw": 116.15,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 36,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -29.83
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_2D81C7FD_0666_3BF7_4178_E81E0FC11515); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DEDEE45_059A_EC14_4193_04F0C160E3DC",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": 116.15,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.92,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 169,
              "class": "ImageResourceLevel",
              "width": 385,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -29.83
          }
         ]
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.91,
           "yaw": 111.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 22,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.93
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_2D966807_0666_3413_4191_1F8840956355); this.setMediaBehaviour(this.playList_297C474F_0666_3C13_4187_BD5710EB189C, 0, this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DD9012F_059A_5414_4172_23CA256717A4",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": 111.94,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -15.93
          }
         ]
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.73,
           "yaw": 65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 16,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -9.22
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0DF12F58_02F2_C608_4170_43608C591778, this.camera_2D7E07F3_0666_3BF3_4173_5089D2926B4F); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_1D9906D6_05E6_DC34_4190_F7C8F480AD8D",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": 65,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.73,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 232,
              "class": "ImageResourceLevel",
              "width": 221,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -9.22
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 38.55,
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.32,
              "yaw": -10.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 30,
                 "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -19.41
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_2A646869_0666_341F_4197_4191CF4A8DBC); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_1FEA4888_05EE_341C_4190_489DE13FC777",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": -10.72,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.32,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 184,
                 "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -19.41
             }
            ]
           },
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.47,
              "yaw": 38.55,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 19,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -12.79
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_2A8F7873_0666_34F3_4180_5A253943BDCB); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_1968E6AC_05EE_7C14_4161_8328D2078660",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": 38.55,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 267,
                 "class": "ImageResourceLevel",
                 "width": 219,
                 "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -12.79
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": 60.82,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.18,
                 "yaw": 0.85,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -21.95
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_2D4637D4_0666_3C35_4186_1949C1807AA4); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_1D11BF8A_05E6_2C1C_4171_CD10A1FC2DAF",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": 0.85,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.18,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 162,
                    "class": "ImageResourceLevel",
                    "width": 245,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -21.95
                }
               ]
              },
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.79,
                 "yaw": 60.82,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.75
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0DF12F58_02F2_C608_4170_43608C591778, this.camera_2D3B97BB_0666_3C73_417B_0786DAE46CAB); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_1F3B89A6_05E6_D414_416B_3E3144AA28E3",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": 60.82,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 164,
                    "class": "ImageResourceLevel",
                    "width": 253,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -19.75
                }
               ]
              },
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.87,
                 "yaw": -112.02,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 47,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -33.53
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58, this.camera_2D4B37CA_0666_3C1D_417A_517A35BC2C98); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_1CABDA2B_05E5_D41C_418D_DAD3D50ED804",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": -112.02,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 288,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -33.53
                }
               ]
              },
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 26.79,
                 "yaw": 90.53,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -38.68
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_2D36D7C5_0666_3C17_411D_795EF5CCA5C0); this.setMediaBehaviour(this.playList_297C474F_0666_3C13_4187_BD5710EB189C, 0, this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_2C8AAFBD_066E_2C74_4195_560E1090EA5D",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": 90.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 26.79,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 97,
                    "class": "ImageResourceLevel",
                    "width": 640,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -38.68
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -10.72,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
             "yaw": 60.82,
             "distance": 1
            },
            {
             "backwardYaw": -90.89,
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF.jpeg"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 16.75,
                    "yaw": -90.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 89,
                       "class": "ImageResourceLevel",
                       "width": 185,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -32.43
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_2DD11826_0666_3415_4196_A6E7F513A36B); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_274ADCB9_05A6_2C7C_4106_362C5C442DE0",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -90.89,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 16.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 179,
                       "class": "ImageResourceLevel",
                       "width": 370,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -32.43
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 21.37,
                    "yaw": 3.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 53,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -39.26
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7, this.camera_2DE4F830_0666_340D_4191_D06F5A034E9C); this.mainPlayList.set('selectedIndex', 14)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_20AD0E60_05A7_EC0C_4195_ADC8B5147D82",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": 3.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 153,
                       "class": "ImageResourceLevel",
                       "width": 515,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -39.26
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.82,
                    "yaw": 91.16,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 37,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -27.51
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_213194F2_05A6_DC0C_416C_30373005CB38",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": 91.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.82,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 227,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -27.51
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 15.68,
                    "yaw": 90.82,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 35,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -50.38
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_21596E33_05A5_EC0C_4155_5B19BC272BB4",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": 90.82,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.68,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 207,
                       "class": "ImageResourceLevel",
                       "width": 459,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -50.38
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.11,
                    "yaw": 91.63,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 19,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.02
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_20EBA34D_05AA_F414_4188_F384C202E945",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": 91.63,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 117,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -14.02
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.22,
                    "yaw": -93.27,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 26,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -17.32
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_2DFE6836_0666_3475_4187_C0E743BE3409); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_20825C77_05AB_ECF4_4193_7A70D5C028D0",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": -93.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.22,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 160,
                       "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": -17.32
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMax": 120,
              "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
              "pitch": 0,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": 90.53,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
                "yaw": -90.89,
                "distance": 1
               },
               {
                "backwardYaw": -11.76,
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3360,
                      "class": "ImageResourceLevel",
                      "width": 6720,
                      "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0.jpeg"
                     }
                    ]
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 25.76,
                       "yaw": -11.76,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 68,
                          "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -47.02
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_2A58685F_0666_3433_4155_E106828EAC04); this.setMediaBehaviour(this.playList_297C474F_0666_3C13_4187_BD5710EB189C, 0, this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7)"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_25C0A9EC_059E_5414_4192_547701E52909",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "items": [
                      {
                       "yaw": -11.76,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 25.76,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 164,
                          "class": "ImageResourceLevel",
                          "width": 705,
                          "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -47.02
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 20.03,
                       "yaw": 160.16,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 39,
                          "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -37.93
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA, this.camera_2A567864_0666_3415_4191_E92D6252212E); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_26A173DA_059F_F43C_417E_5FDC4BCDBD23",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "items": [
                      {
                       "yaw": 160.16,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.03,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 190,
                          "class": "ImageResourceLevel",
                          "width": 474,
                          "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -37.93
                      }
                     ]
                    }
                   ]
                  },
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3360,
                      "class": "ImageResourceLevel",
                      "width": 6720,
                      "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_hq.jpeg"
                     },
                     {
                      "height": 2001,
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1.jpeg"
                     }
                    ]
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg",
                   "overlays": [
                    "this.overlay_25C0A9EC_059E_5414_4192_547701E52909",
                    "this.overlay_26A173DA_059F_F43C_417E_5FDC4BCDBD23"
                   ]
                  }
                 ],
                 "partial": false,
                 "hfovMax": 120,
                 "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
                 "hfov": 360,
                 "pitch": 0,
                 "frameTransitionTime": 2000,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 3.15,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
                   "yaw": -11.76,
                   "distance": 1
                  },
                  {
                   "backwardYaw": -97.26,
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3360,
                         "class": "ImageResourceLevel",
                         "width": 6720,
                         "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_hq.jpeg"
                        },
                        {
                         "height": 2001,
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA.jpeg"
                        }
                       ]
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 15.98,
                          "yaw": -97.26,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 84,
                             "class": "ImageResourceLevel",
                             "width": 192,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -39.32
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7, this.camera_2AA79882_0666_340D_418D_4375FDA279C6); this.mainPlayList.set('selectedIndex', 14)"
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_2433AE4B_059E_6C1C_4186_102A0E4A7149",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -97.26,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 15.98,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 168,
                             "class": "ImageResourceLevel",
                             "width": 385,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -39.32
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 10.07,
                          "yaw": -95.93,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 97,
                             "class": "ImageResourceLevel",
                             "width": 103,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.33
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.setMediaBehaviour(this.playList_297C474F_0666_3C13_4187_BD5710EB189C, 0, this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA)"
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_271084DE_059D_DC34_4170_F4FD272EF5EA",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "yaw": -95.93,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 10.07,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 194,
                             "class": "ImageResourceLevel",
                             "width": 206,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -24.33
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 31.41,
                          "yaw": 88.18,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 26,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -35.62
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300, this.camera_2AAB787D_0666_34F7_418E_527FA6CBAB44); this.mainPlayList.set('selectedIndex', 16)"
                         }
                        ],
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_2692D9F8_059A_37FC_4178_AAACEC48F9BA",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "items": [
                         {
                          "yaw": 88.18,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 31.41,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 432,
                             "class": "ImageResourceLevel",
                             "width": 721,
                             "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -35.62
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "hfovMax": 120,
                    "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
                    "hfov": 360,
                    "pitch": 0,
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -45.57,
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3360,
                            "class": "ImageResourceLevel",
                            "width": 6720,
                            "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_hq.jpeg"
                           },
                           {
                            "height": 2001,
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300.jpeg"
                           }
                          ]
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 14.77,
                             "yaw": -45.57,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "class": "ImageResourceLevel",
                                "width": 47,
                                "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -17.04
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA, this.camera_2D2727B6_0666_3C75_4174_6BC8DDFB7B80); this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "data": {
                            "label": "Image"
                           },
                           "id": "overlay_2791CAEF_059A_5414_4184_1980BD458EF7",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "rollOverDisplay": true,
                           "items": [
                            {
                             "yaw": -45.57,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 14.77,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 97,
                                "class": "ImageResourceLevel",
                                "width": 288,
                                "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -17.04
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "hfovMax": 120,
                       "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
                       "hfov": 360,
                       "pitch": 0,
                       "partial": false,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 88.18,
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
                         "yaw": -45.57,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "label": "Back Door",
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
                       "vfov": 180,
                       "mapLocations": [
                        {
                         "x": 1125.32,
                         "y": 81.58,
                         "class": "PanoramaMapLocation",
                         "angle": 229.35,
                         "map": {
                          "fieldOfViewOverlayInsideColor": "#0099CC",
                          "fieldOfViewOverlayRadiusScale": 0.09,
                          "fieldOfViewOverlayInsideOpacity": 0.41,
                          "fieldOfViewOverlayOutsideColor": "#000000",
                          "minimumZoomFactor": 0.5,
                          "overlays": [
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 0)"
                             }
                            ],
                            "id": "overlay_096651E6_05A6_7414_4194_F68A7620F65C",
                            "map": {
                             "offsetY": 0,
                             "x": 226.09,
                             "width": 90,
                             "y": 595.89,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_0_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 226.05,
                             "y": 595.88,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_0.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 2)"
                             }
                            ],
                            "id": "overlay_09258105_05A6_3414_4191_B3F62D4E1286",
                            "map": {
                             "offsetY": 0,
                             "x": 546.5,
                             "width": 90,
                             "y": 630.02,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_1_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 546.47,
                             "y": 630.01,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_1.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 3)"
                             }
                            ],
                            "id": "overlay_0B20A282_05AA_340C_418E_3843090681CB",
                            "map": {
                             "offsetY": 0,
                             "x": 851.44,
                             "width": 90,
                             "y": 611.66,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_2_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 851.41,
                             "y": 611.62,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_2.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 5)"
                             }
                            ],
                            "id": "overlay_08DA6B3E_05AA_D474_4182_F8EE7B2CC48E",
                            "map": {
                             "offsetY": 0,
                             "x": 867.42,
                             "width": 90,
                             "y": 1003.03,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_3_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 867.4,
                             "y": 1003.01,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_3.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 6)"
                             }
                            ],
                            "id": "overlay_0BFE46FA_05BA_3DFD_4188_924C3188F890",
                            "map": {
                             "offsetY": 0,
                             "x": 780.58,
                             "width": 90,
                             "y": 316.98,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_4_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 780.54,
                             "y": 316.95,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_4.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 14)"
                             }
                            ],
                            "id": "overlay_0B9B07CF_05BA_DC14_417E_E72883AF5502",
                            "map": {
                             "offsetY": 0,
                             "x": 1093.62,
                             "width": 90,
                             "y": 457.26,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_5_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1093.61,
                             "y": 457.26,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_5.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 7)"
                             }
                            ],
                            "id": "overlay_0BC6E368_05BA_541C_4195_1CA790601C52",
                            "map": {
                             "offsetY": 0,
                             "x": 1211.59,
                             "width": 90,
                             "y": 592.88,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_6_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1211.59,
                             "y": 592.87,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_6.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 11)"
                             }
                            ],
                            "id": "overlay_0A8607CB_05BD_DC13_4185_733F4FE10362",
                            "map": {
                             "offsetY": 0,
                             "x": 1385.59,
                             "width": 90,
                             "y": 597.65,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_7_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1385.57,
                             "y": 597.62,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_7.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 8)"
                             }
                            ],
                            "id": "overlay_0A00C6F5_05BE_3DF4_4160_C87251412391",
                            "map": {
                             "offsetY": 0,
                             "x": 1205.05,
                             "width": 90,
                             "y": 416.07,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_8_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1205.05,
                             "y": 416.02,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_8.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 10)"
                             }
                            ],
                            "id": "overlay_0A54E8A8_05BA_F41C_4194_A5EED1CD95BA",
                            "map": {
                             "offsetY": 0,
                             "x": 1466.63,
                             "width": 90,
                             "y": 303.7,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_9_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1466.61,
                             "y": 303.66,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_9.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 9)"
                             }
                            ],
                            "id": "overlay_1535A652_05BA_5C0C_417C_44EF150BA9CB",
                            "map": {
                             "offsetY": 0,
                             "x": 1132.11,
                             "width": 90,
                             "y": 794.17,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_10_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1132.08,
                             "y": 794.13,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_10.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 12)"
                             }
                            ],
                            "id": "overlay_14C72CF7_05BA_2DF4_4195_E8BE989CC145",
                            "map": {
                             "offsetY": 0,
                             "x": 1719.38,
                             "width": 90,
                             "y": 733.57,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_11_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1719.38,
                             "y": 733.53,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_11.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 13)"
                             }
                            ],
                            "id": "overlay_157570FF_05BA_35F4_4185_BAAE49484028",
                            "map": {
                             "offsetY": 0,
                             "x": 1740.14,
                             "width": 90,
                             "y": 304.01,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_12_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1740.12,
                             "y": 303.97,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_12.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 15)"
                             }
                            ],
                            "id": "overlay_14FF0222_05A6_740C_418D_C3F642844D46",
                            "map": {
                             "offsetY": 0,
                             "x": 1080.34,
                             "width": 90,
                             "y": 208.97,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_13_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1080.32,
                             "y": 208.93,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_13.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 16)"
                             }
                            ],
                            "id": "overlay_178804FA_05A6_5DFC_4195_14BA76AAD94A",
                            "map": {
                             "offsetY": 0,
                             "x": 1080.34,
                             "width": 90,
                             "y": 36.63,
                             "height": 90,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 34,
                                "class": "ImageResourceLevel",
                                "width": 34,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_14_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1080.32,
                             "y": 36.58,
                             "class": "HotspotMapOverlayImage",
                             "width": 90,
                             "height": 90,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 68,
                                "class": "ImageResourceLevel",
                                "width": 68,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_14.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.playList_29736751_0666_3C0F_4181_9B6D94CD0E92.set('selectedIndex', 0)"
                             }
                            ],
                            "id": "overlay_147ADFC7_05A6_6C14_4183_12779F7F818A",
                            "map": {
                             "offsetY": 0,
                             "x": 1297.71,
                             "width": 50,
                             "y": 218.52,
                             "height": 50,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 19,
                                "class": "ImageResourceLevel",
                                "width": 19,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_15_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1297.68,
                             "y": 218.49,
                             "class": "HotspotMapOverlayImage",
                             "width": 50,
                             "height": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 38,
                                "class": "ImageResourceLevel",
                                "width": 38,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_15.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.playList_29751751_0666_3C0F_418C_19D106E2EF00.set('selectedIndex', 0)"
                             }
                            ],
                            "id": "overlay_1697DBFE_05AA_EBF4_4184_9D6C13F7DE50",
                            "map": {
                             "offsetY": 0,
                             "x": 1462.17,
                             "width": 50,
                             "y": 843.56,
                             "height": 50,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 19,
                                "class": "ImageResourceLevel",
                                "width": 19,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_16_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1462.16,
                             "y": 843.54,
                             "class": "HotspotMapOverlayImage",
                             "width": 50,
                             "height": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 38,
                                "class": "ImageResourceLevel",
                                "width": 38,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_16.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           },
                           {
                            "areas": [
                             {
                              "class": "HotspotMapOverlayArea",
                              "mapColor": "#FF0000",
                              "click": "this.playList_29727750_0666_3C0D_4193_D65F11B6BAF7.set('selectedIndex', 0)"
                             }
                            ],
                            "id": "overlay_160150A5_05AD_D414_418E_3C468F67337C",
                            "map": {
                             "offsetY": 0,
                             "x": 1352.91,
                             "width": 50,
                             "y": 846.67,
                             "height": 50,
                             "class": "HotspotMapOverlayMap",
                             "offsetX": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 19,
                                "class": "ImageResourceLevel",
                                "width": 19,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_17_map.gif"
                               }
                              ]
                             }
                            },
                            "data": {
                             "label": "Image"
                            },
                            "class": "AreaHotspotMapOverlay",
                            "rollOverDisplay": false,
                            "image": {
                             "x": 1352.87,
                             "y": 846.66,
                             "class": "HotspotMapOverlayImage",
                             "width": 50,
                             "height": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 38,
                                "class": "ImageResourceLevel",
                                "width": 38,
                                "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_17.png"
                               }
                              ]
                             }
                            },
                            "useHandCursor": true
                           }
                          ],
                          "width": 2098,
                          "id": "map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
                          "height": 1126,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 858,
                             "class": "ImageResourceLevel",
                             "width": 1600,
                             "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4.jpeg"
                            },
                            {
                             "height": 429,
                             "class": "ImageResourceLevel",
                             "width": 800,
                             "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_lq.jpeg",
                             "grayscale": true
                            }
                           ]
                          },
                          "initialZoomFactor": 1,
                          "fieldOfViewOverlayOutsideOpacity": 0,
                          "class": "Map",
                          "label": "Floorplan - Nitz, Robert",
                          "thumbnailUrl": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_t.jpg",
                          "scaleMode": "fit_inside",
                          "maximumZoomFactor": 1.2
                         }
                        }
                       ]
                      },
                      "yaw": 88.18,
                      "distance": 1
                     },
                     {
                      "backwardYaw": 160.16,
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
                      "yaw": -97.26,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "label": "Laundry Room",
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
                    "vfov": 180,
                    "mapLocations": [
                     {
                      "x": 1125.32,
                      "y": 253.93,
                      "class": "PanoramaMapLocation",
                      "angle": 267.79,
                      "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
                     }
                    ]
                   },
                   "yaw": 160.16,
                   "distance": 1
                  }
                 ],
                 "class": "LivePanorama",
                 "label": "Utility",
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg",
                 "frameDisplayTime": 4000,
                 "vfov": 180,
                 "mapLocations": [
                  {
                   "x": 1138.61,
                   "y": 502.26,
                   "class": "PanoramaMapLocation",
                   "angle": 180.17,
                   "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
                  }
                 ]
                },
                "yaw": 3.15,
                "distance": 1
               },
               {
                "backwardYaw": 111.94,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
                "yaw": -93.27,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "label": "Hallway 1",
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
              "vfov": 180,
              "hfov": 360
             },
             "yaw": 90.53,
             "distance": 1
            },
            {
             "backwardYaw": 24.53,
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3360,
                   "class": "ImageResourceLevel",
                   "width": 6720,
                   "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58.jpeg"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.86,
                    "yaw": 24.53,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 47,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -26.18
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_2AFDA89C_0666_3435_4184_3A2278EAF8AB); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_1C2ABBB1_05ED_F40C_4192_DC7A4D99BD18",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": 24.53,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 13.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 288,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -26.18
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 21.97,
                    "yaw": -158,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 39.25
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 4); this.MainViewerVideoPlayer.play()"
                   }
                  ],
                  "id": "overlay_23BBECE9_05A5_EC1C_4191_E648EE16D8F9",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "yaw": -158,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.97,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 336,
                       "class": "ImageResourceLevel",
                       "width": 529,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 39.25
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMax": 120,
              "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
              "hfov": 360,
              "pitch": 0,
              "partial": false,
              "adjacentPanoramas": [
               {
                "backwardYaw": -112.02,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
                "yaw": 24.53,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "label": "Side Entrance",
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
              "vfov": 180,
              "mapLocations": [
               {
                "x": 912.4,
                "y": 1048.01,
                "class": "PanoramaMapLocation",
                "angle": -32.77,
                "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
               }
              ]
             },
             "yaw": -112.02,
             "distance": 1
            },
            {
             "backwardYaw": 116.15,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
             "yaw": 0.85,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "label": "Living Room",
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
           "vfov": 180,
           "mapLocations": [
            {
             "x": 896.41,
             "y": 656.62,
             "class": "PanoramaMapLocation",
             "angle": 279.46,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
            }
           ]
          },
          "yaw": -10.72,
          "distance": 1
         },
         {
          "backwardYaw": 65,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
          "yaw": 38.55,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "label": "Kitchen",
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
        "vfov": 180,
        "mapLocations": [
         {
          "x": 825.54,
          "y": 361.95,
          "class": "PanoramaMapLocation",
          "angle": 183.69,
          "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
         }
        ]
       },
       "yaw": 65,
       "distance": 1
      },
      {
       "backwardYaw": 0.85,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
       "yaw": 116.15,
       "distance": 1
      },
      {
       "backwardYaw": -93.27,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
       "yaw": 111.94,
       "distance": 1
      },
      {
       "backwardYaw": -34.33,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
       "yaw": -42.75,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "label": "Den",
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
     "vfov": 180,
     "mapLocations": [
      {
       "x": 591.47,
       "y": 675.01,
       "class": "PanoramaMapLocation",
       "angle": -44.49,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
      }
     ]
    },
    "yaw": -34.33,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "label": "Front Porch",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 271.05,
    "y": 640.88,
    "class": "PanoramaMapLocation",
    "angle": 125.74,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "progressBackgroundOpacity": 1,
   "progressLeft": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarProgressOpacity": 1,
   "playbackBarProgressBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "progressOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarHeadShadowOpacity": 0.7,
   "class": "ViewerArea",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowColor": "#333333",
   "progressBottom": 2,
   "borderSize": 0,
   "shadow": false,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressBarBorderSize": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderSize": 0,
   "progressHeight": 10,
   "playbackBarOpacity": 1,
   "paddingLeft": 0,
   "progressBarBorderRadius": 0,
   "toolTipBorderSize": 1,
   "progressBarOpacity": 1,
   "playbackBarBottom": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBackgroundOpacity": 1,
   "toolTipPaddingTop": 4,
   "paddingRight": 0,
   "toolTipFontStyle": "normal",
   "minHeight": 70,
   "playbackBarHeadBorderRadius": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingTop": 0,
   "progressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontWeight": "normal",
   "playbackBarHeight": 10,
   "toolTipTextShadowOpacity": 0,
   "progressBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipOpacity": 1,
   "playbackBarBorderSize": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "height": "100%",
   "playbackBarHeadShadowHorizontalLength": 0,
   "width": "100%",
   "playbackBarHeadWidth": 6,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "progressBorderSize": 0,
   "playbackBarHeadHeight": 15,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "transparent",
   "paddingBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "transitionMode": "blending",
   "progressRight": 0,
   "minWidth": 100,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "borderRadius": 0,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "transitionDuration": 500,
   "playbackBarHeadShadow": true,
   "toolTipBorderRadius": 3,
   "id": "MapViewer",
   "playbackBarHeadOpacity": 1,
   "toolTipDisplayTime": 600,
   "toolTipBorderColor": "#767676",
   "toolTipShadowOpacity": 0.32,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipFontSize": 12,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipPaddingBottom": 4,
   "playbackBarRight": 0,
   "playbackBarBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "progressBarBackgroundColorRatios": [
    0
   ]
  },
  "id": "MapViewerMapPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -4.72,
     "targetYaw": -37.88,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.59,
   "pitch": -0.23
  },
  "timeToIdle": 20000
 },
 {
  "class": "Video",
  "label": "Video 1",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_2047C216_05BA_D434_4165_95D2D0BAD37A.mp4",
   "width": 1920
  },
  "thumbnailUrl": "media/video_2047C216_05BA_D434_4165_95D2D0BAD37A_t.jpg",
  "width": 1920,
  "id": "video_2047C216_05BA_D434_4165_95D2D0BAD37A",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.66,
     "targetYaw": 128.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -44.01,
   "pitch": -1.95
  },
  "timeToIdle": 20000
 },
 "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -7.95,
     "targetYaw": -114.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.29,
   "pitch": -4.18
  },
  "timeToIdle": 20000
 },
 {
  "class": "Video",
  "label": "Video 2",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_20218431_05BA_DC0C_417A_588D3E7991A0.mp4",
   "width": 1920
  },
  "thumbnailUrl": "media/video_20218431_05BA_DC0C_417A_588D3E7991A0_t.jpg",
  "width": 1920,
  "id": "video_20218431_05BA_DC0C_417A_588D3E7991A0",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": 0.15,
     "targetYaw": 24.96,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -173.09,
   "pitch": 4.94
  },
  "timeToIdle": 20000
 },
 "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.2,
     "targetYaw": -19.42,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.39,
   "pitch": -2.77
  },
  "timeToIdle": 20000
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.67,
        "yaw": -59.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -43.78
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_1F1195D3_05EA_5C0C_4190_E967C23D7DB5",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -59.57,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 170,
           "class": "ImageResourceLevel",
           "width": 430,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -43.78
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.17,
        "yaw": -146.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -23.75
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_1EE9B7FE_05EA_5BF4_4192_5E16C5638BFF",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": -146.81,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.17,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "class": "ImageResourceLevel",
           "width": 227,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -23.75
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.72,
        "yaw": 118.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -37.16
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_18501236_05EA_D474_417F_B0179585CECA",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 118.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.72,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 508,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -37.16
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.88,
        "yaw": 31.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -42.5
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_2A4C585A_0666_343D_4192_E56BDB328238); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_18DDE132_05EB_D40D_4192_BCB58321327B",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 31.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 376,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -42.5
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.06,
        "yaw": 33.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 25,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.05
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_192563FB_05EA_FBFC_418A_1DD3ACFB4EE1",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 33.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 147,
           "class": "ImageResourceLevel",
           "width": 234,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -16.05
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.77,
        "yaw": -119.72,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 145,
           "class": "ImageResourceLevel",
           "width": 121,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": -47.65
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_2D05B08B_066A_341C_4189_05F0E7F8B4F2",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -119.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 291,
           "class": "ImageResourceLevel",
           "width": 243,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_5_0.png"
          }
         ]
        },
        "pitch": -47.65
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": 151.77,
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.12,
           "yaw": 151.77,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 33,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -44.24
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1, this.camera_2AC4288D_0666_3417_4192_445835ED710D); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_1811E729_05EB_DC1C_4191_6C219E9EC73F",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": 151.77,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 420,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -44.24
          }
         ]
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.69,
           "yaw": -12.63,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 30,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -23.63
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_2AB64887_0666_3413_4191_9696504CEF68); this.mainPlayList.set('selectedIndex', 12)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_25694352_05EA_D40C_418B_C96516500786",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": -12.63,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 179,
              "class": "ImageResourceLevel",
              "width": 340,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -23.63
          }
         ]
        },
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.78,
           "yaw": -100.68,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 32,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -31.73
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA, this.camera_2AE06896_0666_3435_4197_29BC774E3EA6); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_25635AF2_05E5_F40C_417D_19CD548F80FA",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": -100.68,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.78,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 179,
              "class": "ImageResourceLevel",
              "width": 368,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -31.73
          }
         ]
        }
       ]
      },
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg",
       "overlays": [
        "this.overlay_1811E729_05EB_DC1C_4191_6C219E9EC73F",
        "this.overlay_25694352_05EA_D40C_418B_C96516500786",
        "this.overlay_25635AF2_05E5_F40C_417D_19CD548F80FA"
       ]
      }
     ],
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
     "hfov": 360,
     "pitch": 0,
     "frameTransitionTime": 2000,
     "adjacentPanoramas": [
      {
       "backwardYaw": 144.94,
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.68,
              "yaw": 86.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 33,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -28.26
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805, this.camera_2DCD581B_0666_3432_4183_871B6FC9BDE7); this.setMediaBehaviour(this.playList_29751751_0666_3C0F_418C_19D106E2EF00, 0, this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_1A992D8B_05E6_6C1C_4196_2BBA5B517846",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": 86.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 12.68,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 129,
                 "class": "ImageResourceLevel",
                 "width": 268,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -28.26
             }
            ]
           },
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.97,
              "yaw": -131.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 19,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -30
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D, this.camera_2DC65821_0666_340F_4192_5306193C81D1); this.mainPlayList.set('selectedIndex', 13)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_24CC3D1E_05E6_2C34_4183_9F4D7ECC4F49",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": -131.59,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 198,
                 "class": "ImageResourceLevel",
                 "width": 236,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -30
             }
            ]
           },
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.08,
              "yaw": 144.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 29,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -33.24
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_2DB20816_0666_3435_4193_534AD3CD044D); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_25312306_05E6_D414_4192_C470280E33D2",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": 144.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.08,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 136,
                 "class": "ImageResourceLevel",
                 "width": 247,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -33.24
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": -12.63,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
          "yaw": 144.94,
          "distance": 1
         },
         {
          "backwardYaw": 49.83,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 21.97,
                 "yaw": 49.83,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 38,
                    "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -27.74
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_2A3EC855_0666_3437_4158_64D6BD6380EC); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_210948F0_05AE_540D_4193_13FA927F01C8",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": 49.83,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 21.97,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 194,
                    "class": "ImageResourceLevel",
                    "width": 463,
                    "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -27.74
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 86.94,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
             "yaw": 49.83,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "label": "Master Closet",
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
           "vfov": 180,
           "mapLocations": [
            {
             "x": 1487.16,
             "y": 868.54,
             "class": "PanoramaMapLocation",
             "angle": 22.07,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
            }
           ]
          },
          "yaw": 86.94,
          "distance": 1
         },
         {
          "backwardYaw": 77.62,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.23,
                 "yaw": 77.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 26,
                    "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -21.26
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_2A17084A_0666_341D_4193_DB660A74D0E9); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_254DFC26_059A_6C14_4150_504F3C7634C5",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": 77.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.23,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 147,
                    "class": "ImageResourceLevel",
                    "width": 245,
                    "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -21.26
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": -131.59,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
             "yaw": 77.62,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "label": "Master Bath",
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
           "vfov": 180,
           "mapLocations": [
            {
             "x": 1785.12,
             "y": 348.97,
             "class": "PanoramaMapLocation",
             "angle": 101.72,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
            }
           ]
          },
          "yaw": -131.59,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "label": "Master Bedroom",
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
        "vfov": 180,
        "mapLocations": [
         {
          "x": 1764.38,
          "y": 778.53,
          "class": "PanoramaMapLocation",
          "angle": -206.94,
          "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
         }
        ]
       },
       "yaw": -12.63,
       "distance": 1
      },
      {
       "backwardYaw": 31.63,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
       "yaw": 151.77,
       "distance": 1
      },
      {
       "backwardYaw": -46.49,
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3360,
             "class": "ImageResourceLevel",
             "width": 6720,
             "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.4,
              "yaw": 50.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 37,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -30.63
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456, this.camera_2D6937E3_0666_3C13_4192_97CED69475DC); this.setMediaBehaviour(this.playList_29736751_0666_3C0F_4181_9B6D94CD0E92, 0, this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_182FB59E_05EE_3C34_4190_FC9261B80CDB",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": 50.46,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.4,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 225,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -30.63
             }
            ]
           },
           {
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.32,
              "yaw": -46.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 36,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -28.5
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_2D53A7DE_0666_3C35_416D_3BD6BE6DA854); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_1BFAF81A_05EA_D43C_4172_D2BDDAB7D752",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "items": [
             {
              "yaw": -46.49,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.32,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 97,
                 "class": "ImageResourceLevel",
                 "width": 219,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -28.5
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "adjacentPanoramas": [
         {
          "backwardYaw": -100.68,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
          "yaw": -46.49,
          "distance": 1
         },
         {
          "backwardYaw": -53.91,
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3360,
                "class": "ImageResourceLevel",
                "width": 6720,
                "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 20.39,
                 "yaw": -53.91,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 37,
                    "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -40.13
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA, this.camera_2A235850_0666_340D_4180_7344C2484C7D); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "data": {
                "label": "Image"
               },
               "id": "overlay_21B8C63D_05AA_DC77_4196_196ABB2B5E9D",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "items": [
                {
                 "yaw": -53.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 213,
                    "class": "ImageResourceLevel",
                    "width": 497,
                    "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -40.13
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "adjacentPanoramas": [
            {
             "backwardYaw": 50.46,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
             "yaw": -53.91,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "label": "Closet 2",
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
           "vfov": 180,
           "mapLocations": [
            {
             "x": 1322.68,
             "y": 243.49,
             "class": "PanoramaMapLocation",
             "angle": 156.44,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
            }
           ]
          },
          "yaw": 50.46,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "label": "Bedroom 2",
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg",
        "vfov": 180,
        "mapLocations": [
         {
          "x": 1511.61,
          "y": 348.66,
          "class": "PanoramaMapLocation",
          "angle": 237.29,
          "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
         }
        ]
       },
       "yaw": -100.68,
       "distance": 1
      }
     ],
     "class": "LivePanorama",
     "label": "Hall Closet",
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg",
     "frameDisplayTime": 4000,
     "vfov": 180,
     "mapLocations": [
      {
       "x": 1430.57,
       "y": 642.62,
       "class": "PanoramaMapLocation",
       "angle": 112.78,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
      }
     ]
    },
    "yaw": 31.63,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "label": "Hallway",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1256.59,
    "y": 637.87,
    "class": "PanoramaMapLocation",
    "angle": 410.79,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -4.75,
     "targetYaw": -55.2,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.89,
   "pitch": -2.56
  },
  "timeToIdle": 20000
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.39,
        "yaw": 68.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -38.68
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_18C7C601_05ED_DC0F_4181_BBCFD7AB2CB8",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 68.76,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 207,
           "class": "ImageResourceLevel",
           "width": 415,
           "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -38.68
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Guest Bath",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1250.05,
    "y": 461.02,
    "class": "PanoramaMapLocation",
    "angle": 106.41,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -2.95,
     "targetYaw": 63.34,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.08,
   "pitch": -2.1
  },
  "timeToIdle": 20000
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.04,
        "yaw": 68.18,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -32.37
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7, this.camera_2B1A98A5_0666_3417_4189_E7B861902A56); this.setMediaBehaviour(this.playList_29727750_0666_3C0D_4193_D65F11B6BAF7, 0, this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_189DE622_05EE_5C0C_4191_7F1E599431D3",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 68.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "class": "ImageResourceLevel",
           "width": 288,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -32.37
       }
      ]
     },
     {
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.45,
        "yaw": 17.06,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.21
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_1A88DE71_05EE_6C0C_4194_CE94FBCED939",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "items": [
       {
        "yaw": 17.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 166,
           "class": "ImageResourceLevel",
           "width": 221,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -28.21
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "adjacentPanoramas": [
   {
    "backwardYaw": -59.11,
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.34,
           "yaw": -59.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 45,
              "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -41.29
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576, this.camera_2D6137E9_0666_3C1F_4195_5B26A7680999); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_27897C34_05A6_2C74_4191_D2E1EDE3613F",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "items": [
          {
           "yaw": -59.11,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.34,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 168,
              "class": "ImageResourceLevel",
              "width": 480,
              "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -41.29
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "adjacentPanoramas": [
      {
       "backwardYaw": 68.18,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
       "yaw": -59.11,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "label": "Closet 3",
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
     "vfov": 180,
     "mapLocations": [
      {
       "x": 1377.87,
       "y": 871.66,
       "class": "PanoramaMapLocation",
       "angle": -29.11,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
      }
     ]
    },
    "yaw": 68.18,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "label": "Bedroom 3",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1177.08,
    "y": 839.13,
    "class": "PanoramaMapLocation",
    "angle": 24.76,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.84,
     "targetYaw": 18.25,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.06,
   "pitch": -3.79
  },
  "timeToIdle": 20000
 },
 "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Pic1",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.66",
       "y": "0.52"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic1",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_0_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_0",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.60",
       "y": "0.41"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic2",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_1_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_1",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.34",
       "y": "0.58"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic3",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_2_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_2",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_2.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.65",
       "y": "0.40"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic4",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_3_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_3",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_3.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.60",
       "y": "0.72"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic5",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_4_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_4",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_4.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.60",
       "y": "0.37"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic6",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_5_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_5",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_5.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "duration": 5000,
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "class": "PhotoCameraPosition",
       "x": "0.56",
       "y": "0.63"
      },
      "easing": "linear",
      "initialPosition": {
       "zoomFactor": 1,
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50"
      }
     },
     "media": {
      "duration": 5000,
      "class": "Photo",
      "label": "Pic7",
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_6_t.png",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_6",
      "height": 1080,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_6.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    }
   ]
  },
  "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_t.png",
  "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180"
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_0",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_1",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_2",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_3",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_4",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_5",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_6",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1E17A6_0666_3C15_4178_896D549F0B15, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_2D1E17A6_0666_3C15_4178_896D549F0B15",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_2047C216_05BA_D434_4165_95D2D0BAD37A",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.video_2047C216_05BA_D434_4165_95D2D0BAD37A)"
   },
   {
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1F47A6_0666_3C15_4190_A7CCCE860A92, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_2D1F47A6_0666_3C15_4190_A7CCCE860A92",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1FF7A6_0666_3C15_4190_00B64A2EEA3A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_2D1FF7A6_0666_3C15_4190_00B64A2EEA3A",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_20218431_05BA_DC0C_417A_588D3E7991A0",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4, this.video_20218431_05BA_DC0C_417A_588D3E7991A0)"
   },
   {
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1067A7_0666_3C13_418E_9535F7358958, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_2D1067A7_0666_3C13_418E_9535F7358958",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1017A7_0666_3C13_4191_ED5B9AF9879D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_2D1017A7_0666_3C13_4191_ED5B9AF9879D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D10D7A7_0666_3C13_4196_725DC2E1D5A8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_2D10D7A7_0666_3C13_4196_725DC2E1D5A8",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1087A7_0666_3C13_4191_6718F3DF029C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_2D1087A7_0666_3C13_4191_6718F3DF029C",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1137A7_0666_3C13_4188_B85ECAFD7150, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_2D1137A7_0666_3C13_4188_B85ECAFD7150",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D11E7A7_0666_3C13_418C_AADF007C8B80, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_2D11E7A7_0666_3C13_418C_AADF007C8B80",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1247A8_0666_3C1D_417A_800C69426E70, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_2D1247A8_0666_3C1D_417A_800C69426E70",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D12F7A8_0666_3C1D_4192_0CCF500B45D4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_2D12F7A8_0666_3C1D_4192_0CCF500B45D4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D12A7A8_0666_3C1D_4196_586819B9E592, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_2D12A7A8_0666_3C1D_4196_586819B9E592",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D1247A8_0666_3C1D_418B_B5DB8352B0C0, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_2D1247A8_0666_3C1D_418B_B5DB8352B0C0",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D12F7A8_0666_3C1D_4190_4EBA5901A2B8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_2D12F7A8_0666_3C1D_4190_4EBA5901A2B8",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D12A7A8_0666_3C1D_418A_F3B39F88D882, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_2D12A7A8_0666_3C1D_418A_F3B39F88D882",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "media": "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_2047C216_05BA_D434_4165_95D2D0BAD37A",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, this.video_2047C216_05BA_D434_4165_95D2D0BAD37A)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_20218431_05BA_DC0C_417A_588D3E7991A0",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, this.video_20218431_05BA_DC0C_417A_588D3E7991A0)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 0)"
   }
  ]
 },
 "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "class": "PlayList",
  "id": "playList_297C474F_0666_3C13_4187_BD5710EB189C",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
    "camera": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_camera"
   }
  ]
 },
 "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56,
   "pitch": -7.24
  },
  "timeToIdle": 20000
 },
 {
  "class": "PlayList",
  "id": "playList_29727750_0666_3C0D_4193_D65F11B6BAF7",
  "items": [
   {
    "camera": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
    "media": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D2867AB_0666_3C13_416E_B594737FE1FC, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D2867AB_0666_3C13_416E_B594737FE1FC",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.79,
   "pitch": -13.32
  },
  "timeToIdle": 20000
 },
 {
  "class": "PlayList",
  "id": "playList_29736751_0666_3C0F_4181_9B6D94CD0E92",
  "items": [
   {
    "camera": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
    "media": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D2837AB_0666_3C13_4195_10C9400BFCFF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D2837AB_0666_3C13_4195_10C9400BFCFF",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "class": "PlayList",
  "id": "playList_29751751_0666_3C0F_418C_19D106E2EF00",
  "items": [
   {
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D28F7AB_0666_3C13_418D_A9E431DDC300, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D28F7AB_0666_3C13_418D_A9E431DDC300",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
 {
  "class": "PlayList",
  "id": "playList_2D1DC7A5_0666_3C17_416D_980A4C18ACC3",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_2D1D97A5_0666_3C17_4175_AEC092E61A15",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2D2717B6_0666_3C75_4190_87ABEABCD0D9"
  },
  "initialSequence": "this.sequence_2D2717B6_0666_3C75_4190_87ABEABCD0D9",
  "id": "camera_2D2727B6_0666_3C75_4174_6BC8DDFB7B80",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.82,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D3B87BB_0666_3C73_4192_896C35DF39DD",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "targetPitch": -2.77,
     "targetYaw": -9.39,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.2,
     "targetYaw": -19.42,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D3B87BB_0666_3C73_4192_896C35DF39DD",
  "id": "camera_2D3B97BB_0666_3C73_417B_0786DAE46CAB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.28,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2D36C7C5_0666_3C17_416C_27E26BA9FFCF"
  },
  "initialSequence": "this.sequence_2D36C7C5_0666_3C17_416C_27E26BA9FFCF",
  "id": "camera_2D36D7C5_0666_3C17_411D_795EF5CCA5C0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.11,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D4B17CA_0666_3C1D_418C_A87160E2745C",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 2.48,
     "yawSpeed": 3.98,
     "targetPitch": 4.94,
     "targetYaw": -173.09,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": 0.15,
     "targetYaw": 24.96,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D4B17CA_0666_3C1D_418C_A87160E2745C",
  "id": "camera_2D4B37CA_0666_3C1D_417A_517A35BC2C98",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.47,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D4627D5_0666_3C37_4196_DBBD5D76F999",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 2.85,
     "yawSpeed": 4.72,
     "targetPitch": -1.95,
     "targetYaw": -44.01,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.66,
     "targetYaw": 128.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D4627D5_0666_3C37_4196_DBBD5D76F999",
  "id": "camera_2D4637D4_0666_3C35_4186_1949C1807AA4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.85,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2D53A7DE_0666_3C35_416D_3BD6BE6DA854",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.32,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2D6927E3_0666_3C13_4142_E3FF18E79529"
  },
  "initialSequence": "this.sequence_2D6927E3_0666_3C13_4142_E3FF18E79529",
  "id": "camera_2D6937E3_0666_3C13_4192_97CED69475DC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.09,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D6117E9_0666_3C1F_414A_1227097BCF4F",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "targetPitch": -3.79,
     "targetYaw": 8.06,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.84,
     "targetYaw": 18.25,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D6117E9_0666_3C1F_414A_1227097BCF4F",
  "id": "camera_2D6137E9_0666_3C1F_4195_5B26A7680999",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -111.82,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D7EF7F3_0666_3BF3_4161_0F033754092E",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "targetPitch": -2.77,
     "targetYaw": -9.39,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.2,
     "targetYaw": -19.42,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D7EF7F3_0666_3BF3_4161_0F033754092E",
  "id": "camera_2D7E07F3_0666_3BF3_4173_5089D2926B4F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.45,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2D81B7FD_0666_3BF7_4190_B8909208D08E",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 27.21,
     "yawSpeed": 53.67,
     "targetPitch": -4.18,
     "targetYaw": -13.29,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -7.95,
     "targetYaw": -114.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2D81B7FD_0666_3BF7_4190_B8909208D08E",
  "id": "camera_2D81C7FD_0666_3BF7_4178_E81E0FC11515",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.15,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2D965807_0666_3413_417C_160EAAAED157"
  },
  "initialSequence": "this.sequence_2D965807_0666_3413_417C_160EAAAED157",
  "id": "camera_2D966807_0666_3413_4191_1F8840956355",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.73,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2DAFF80C_0666_3415_418C_1019D8FE5CD8",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 1.64,
     "yawSpeed": 2.29,
     "targetPitch": -0.23,
     "targetYaw": 138.59,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -4.72,
     "targetYaw": -37.88,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2DAFF80C_0666_3415_418C_1019D8FE5CD8",
  "id": "camera_2DAF080C_0666_3415_4196_7264A8E993D5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.67,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2DB20816_0666_3435_4193_534AD3CD044D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.37,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2DCD481C_0666_3435_4195_94FD48359DDA"
  },
  "initialSequence": "this.sequence_2DCD481C_0666_3435_4195_94FD48359DDA",
  "id": "camera_2DCD581B_0666_3432_4183_871B6FC9BDE7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -130.17,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2DC63821_0666_340F_4193_EC278CEF6831"
  },
  "initialSequence": "this.sequence_2DC63821_0666_340F_4193_EC278CEF6831",
  "id": "camera_2DC65821_0666_340F_4192_5306193C81D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.38,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2DD1F827_0666_3413_4185_E014CD86308A",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 13.05,
     "yawSpeed": 25.22,
     "targetPitch": -4.18,
     "targetYaw": -13.29,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -7.95,
     "targetYaw": -114.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2DD1F827_0666_3413_4185_E014CD86308A",
  "id": "camera_2DD11826_0666_3415_4196_A6E7F513A36B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.47,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2DE4F830_0666_340D_4191_D06F5A034E9C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.24,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2DFE5836_0666_3475_4197_82E795D5EEC2",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 3.24,
     "yawSpeed": 5.5,
     "targetPitch": -1.95,
     "targetYaw": -44.01,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.66,
     "targetYaw": 128.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2DFE5836_0666_3475_4197_82E795D5EEC2",
  "id": "camera_2DFE6836_0666_3475_4187_C0E743BE3409",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.06,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2A031840_0666_340D_415C_8B996CE4F0A0",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.83,
     "yawSpeed": 34.81,
     "targetPitch": -1.95,
     "targetYaw": -44.01,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.66,
     "targetYaw": 128.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2A031840_0666_340D_415C_8B996CE4F0A0",
  "id": "camera_2A033840_0666_340D_4197_3525A419A3EA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.25,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2A17F84A_0666_341D_4191_B1748E578B72"
  },
  "initialSequence": "this.sequence_2A17F84A_0666_341D_4191_B1748E578B72",
  "id": "camera_2A17084A_0666_341D_4193_DB660A74D0E9",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.41,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2A235850_0666_340D_4180_7344C2484C7D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.54,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2A3EB855_0666_3437_418D_63E0834020B0"
  },
  "initialSequence": "this.sequence_2A3EB855_0666_3437_418D_63E0834020B0",
  "id": "camera_2A3EC855_0666_3437_4158_64D6BD6380EC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.06,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2A4C585A_0666_343D_4192_E56BDB328238",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -28.23,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2A58585F_0666_3433_4159_42D17BF4A11C"
  },
  "initialSequence": "this.sequence_2A58585F_0666_3433_4159_42D17BF4A11C",
  "id": "camera_2A58685F_0666_3433_4155_E106828EAC04",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.85,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2A565864_0666_3415_4195_2845DB0C440F"
  },
  "initialSequence": "this.sequence_2A565864_0666_3415_4195_2845DB0C440F",
  "id": "camera_2A567864_0666_3415_4191_E92D6252212E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.74,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2A644869_0666_341F_4177_A5C258462AF8",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 17.74,
     "yawSpeed": 34.64,
     "targetPitch": -4.18,
     "targetYaw": -13.29,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -7.95,
     "targetYaw": -114.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2A644869_0666_341F_4177_A5C258462AF8",
  "id": "camera_2A646869_0666_341F_4197_4191CF4A8DBC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -119.18,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2A8F5873_0666_34F3_4187_84D4F8D8E0C4",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 7.59,
     "yawSpeed": 14.24,
     "targetPitch": -1.95,
     "targetYaw": -44.01,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -3.66,
     "targetYaw": 128.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2A8F5873_0666_34F3_4187_84D4F8D8E0C4",
  "id": "camera_2A8F7873_0666_34F3_4180_5A253943BDCB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -115,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2AAB587D_0666_34F7_4171_68888A529E3A"
  },
  "initialSequence": "this.sequence_2AAB587D_0666_34F7_4171_68888A529E3A",
  "id": "camera_2AAB787D_0666_34F7_418E_527FA6CBAB44",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.43,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2AA79882_0666_340D_418D_4375FDA279C6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.84,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2AB62887_0666_3413_418A_F65B3B8126B6"
  },
  "initialSequence": "this.sequence_2AB62887_0666_3413_418A_F65B3B8126B6",
  "id": "camera_2AB64887_0666_3413_4191_9696504CEF68",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -35.06,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2AC4188D_0666_3417_4192_B72699E2B8DD",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 1.45,
     "yawSpeed": 1.91,
     "targetPitch": -2.56,
     "targetYaw": -147.89,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -4.75,
     "targetYaw": -55.2,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2AC4188D_0666_3417_4192_B72699E2B8DD",
  "id": "camera_2AC4288D_0666_3417_4192_445835ED710D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.37,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_2AE06896_0666_3435_4197_29BC774E3EA6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.51,
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "id": "sequence_2AFD989C_0666_3435_417D_28936DAC25A8",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 13.86,
     "yawSpeed": 26.84,
     "targetPitch": -4.18,
     "targetYaw": -13.29,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -7.95,
     "targetYaw": -114.81,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": "this.sequence_2AFD989C_0666_3435_417D_28936DAC25A8",
  "id": "camera_2AFDA89C_0666_3435_4184_3A2278EAF8AB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 67.98,
   "pitch": 0
  },
  "timeToIdle": 20000
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_2B1B78A5_0666_3417_4197_28D71F6D1203"
  },
  "initialSequence": "this.sequence_2B1B78A5_0666_3417_4197_28D71F6D1203",
  "id": "camera_2B1A98A5_0666_3417_4189_E7B861902A56",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 120.89,
   "pitch": 0
  },
  "timeToIdle": 20000
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "progressLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowOpacity": 0.7,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowColor": "#333333",
  "progressBottom": 0,
  "borderSize": 0,
  "shadow": false,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "progressHeight": 10,
  "playbackBarOpacity": 1,
  "paddingLeft": 0,
  "progressBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "paddingRight": 0,
  "toolTipFontStyle": "normal",
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "progressBorderColor": "#000000",
  "toolTipShadowBlurRadius": 56,
  "toolTipFontWeight": "normal",
  "playbackBarHeight": 10,
  "toolTipTextShadowOpacity": 0,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 36,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipOpacity": 0.24,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "height": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "width": "100%",
  "playbackBarHeadWidth": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "progressBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontFamily": "Arial",
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionMode": "blending",
  "progressRight": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 36,
  "borderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "transitionDuration": 300,
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "toolTipDisplayTime": 600,
  "toolTipBorderColor": "#767676",
  "toolTipShadowOpacity": 0.32,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorRatios": [
   0
  ]
 },
 {
  "rollOverItemLabelFontColor": "#0099CC",
  "gap": 1,
  "horizontalAlign": "left",
  "itemThumbnailShadow": true,
  "itemBorderRadius": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarColor": "#FFFFFF",
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "itemPaddingLeft": 3,
  "itemLabelFontColor": "#FFFFFF",
  "class": "ThumbnailList",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "itemBackgroundColor": [],
  "shadow": false,
  "selectedItemLabelFontSize": 17,
  "itemThumbnailShadowBlurRadius": 8,
  "backgroundOpacity": 0,
  "selectedItemLabelFontWeight": "bold",
  "paddingLeft": 0,
  "itemBackgroundColorRatios": [],
  "scrollBarMargin": 2,
  "minHeight": 20,
  "itemThumbnailShadowOpacity": 0.54,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowHorizontalLength": 3,
  "paddingRight": 0,
  "selectedItemLabelTextDecoration": "underline",
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailBorderRadius": 50,
  "paddingTop": 0,
  "itemHorizontalAlign": "center",
  "width": 185.05,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "itemThumbnailHeight": 87,
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "height": "74.709%",
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "selectedItemLabelFontColor": "#00CC33",
  "itemPaddingBottom": 3,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "itemLabelGap": 0,
  "minWidth": 20,
  "itemLabelFontFamily": "Arial",
  "top": "9.51%",
  "borderRadius": 0,
  "itemLabelPosition": "bottom",
  "itemThumbnailWidth": 136,
  "itemPaddingRight": 3,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemThumbnailShadowColor": "#000000",
  "itemPaddingTop": 3,
  "layout": "vertical",
  "data": {
   "name": "ThumbnailList35762"
  },
  "verticalAlign": "top",
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "itemMode": "normal",
  "rollOverItemLabelFontSize": 15,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "right": "0.03%"
 },
 {
  "paddingTop": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "class": "Image",
  "scaleMode": "fit_inside",
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 1694,
  "top": "0.05%",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "cursor": "hand",
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "paddingLeft": 0,
  "data": {
   "name": "MTV Leters"
  },
  "backgroundOpacity": 0,
  "maxHeight": 145,
  "left": "29.2%",
  "paddingRight": 0,
  "minHeight": 1
 },
 {
  "paddingTop": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "width": "9.212%",
  "height": "6.604%",
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "class": "Image",
  "scaleMode": "fit_inside",
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 1412,
  "top": "0.05%",
  "borderRadius": 0,
  "borderSize": 0,
  "shadow": false,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "paddingLeft": 0,
  "data": {
   "name": "MTV Logo"
  },
  "backgroundOpacity": 0,
  "maxHeight": 800,
  "paddingRight": 0,
  "right": "24.72%",
  "minHeight": 1
 },
 {
  "children": [
   "this.MapViewer"
  ],
  "paddingTop": 0,
  "gap": 0,
  "creationPolicy": "inAdvance",
  "horizontalAlign": "left",
  "height": "80.818%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "visible",
  "class": "Container",
  "scrollBarWidth": 10,
  "paddingBottom": 75,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "visible": false,
  "shadow": false,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "paddingLeft": 10,
  "data": {
   "name": "Container18244"
  },
  "backgroundOpacity": 0,
  "bottom": "0%",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "verticalAlign": "bottom",
  "left": "0%",
  "paddingRight": 170,
  "minHeight": 1,
  "scrollBarOpacity": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "paddingTop": 0,
      "verticalAlign": "middle",
      "fontSize": 42,
      "textDecoration": "none",
      "width": "44.135%",
      "height": "48%",
      "horizontalAlign": "right",
      "text": "Floor Plan",
      "fontFamily": "Arial",
      "class": "Label",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "minWidth": 60,
      "maxWidth": 8000,
      "fontWeight": "normal",
      "borderRadius": 0,
      "borderSize": 0,
      "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/43946/mountain-view-homes-sequim/sequim/land%2Fhome-packages/\", \"_blank\")",
      "shadow": false,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "paddingLeft": 0,
      "data": {
       "name": "Label20305"
      },
      "backgroundOpacity": 0,
      "maxHeight": 8000,
      "paddingRight": 0,
      "minHeight": 60,
      "fontColor": "#000000"
     },
     {
      "paddingTop": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "mode": "toggle",
      "width": 57.3,
      "height": 57.5,
      "class": "IconButton",
      "paddingBottom": 0,
      "minWidth": 0,
      "borderSize": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "cursor": "hand",
      "borderRadius": 0,
      "shadow": false,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "paddingLeft": 0,
      "data": {
       "name": "Button49925"
      },
      "backgroundOpacity": 0,
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "transparencyActive": true,
      "paddingRight": 0,
      "minHeight": 0,
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png"
     }
    ],
    "paddingTop": 0,
    "gap": 10,
    "creationPolicy": "inAdvance",
    "horizontalAlign": "center",
    "height": "100%",
    "width": "75%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "overflow": "scroll",
    "class": "Container",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "borderSize": 0,
    "borderRadius": 0,
    "shadow": false,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "paddingLeft": 0,
    "data": {
     "name": "1left"
    },
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minHeight": 1
   },
   {
    "children": [
     {
      "paddingTop": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "mode": "toggle",
      "width": 62.65,
      "height": 56.91,
      "class": "IconButton",
      "paddingBottom": 0,
      "minWidth": 0,
      "borderSize": 0,
      "cursor": "hand",
      "borderRadius": 0,
      "shadow": false,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "paddingLeft": 0,
      "data": {
       "name": "Button49930"
      },
      "backgroundOpacity": 0,
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "transparencyActive": true,
      "paddingRight": 0,
      "minHeight": 0,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png"
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "paddingTop": 0,
    "gap": 10,
    "creationPolicy": "inAdvance",
    "horizontalAlign": "center",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "overflow": "scroll",
    "class": "Container",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "borderSize": 0,
    "borderRadius": 0,
    "shadow": false,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "paddingLeft": 0,
    "data": {
     "name": "1middle"
    },
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minHeight": 1
   },
   {
    "paddingTop": 0,
    "gap": 10,
    "creationPolicy": "inAdvance",
    "horizontalAlign": "right",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "overflow": "scroll",
    "class": "Container",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 1,
    "borderSize": 0,
    "borderRadius": 0,
    "shadow": false,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "paddingLeft": 0,
    "data": {
     "name": "1right"
    },
    "backgroundOpacity": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minHeight": 1
   }
  ],
  "paddingTop": 0,
  "gap": 10,
  "creationPolicy": "inAdvance",
  "horizontalAlign": "center",
  "height": "10%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "visible",
  "class": "Container",
  "scrollBarWidth": 10,
  "paddingBottom": 2,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "shadow": false,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "paddingLeft": 2,
  "data": {
   "name": "Global"
  },
  "backgroundOpacity": 0,
  "bottom": "0%",
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "verticalAlign": "middle",
  "left": "0%",
  "paddingRight": 2,
  "right": "0%",
  "minHeight": 1,
  "scrollBarOpacity": 0.5
 },
 {
  "paddingTop": 0,
  "right": "0.06%",
  "verticalAlign": "middle",
  "toolTipFontWeight": "normal",
  "horizontalAlign": "center",
  "mode": "toggle",
  "toolTipTextShadowOpacity": 0,
  "width": 67.4,
  "toolTipShadowVerticalLength": 0,
  "height": 62.29,
  "toolTipOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "class": "IconButton",
  "toolTipFontFamily": "Arial",
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowColor": "#333333",
  "paddingBottom": 0,
  "minWidth": 1,
  "maxWidth": 128,
  "toolTipShadowHorizontalLength": 0,
  "cursor": "hand",
  "shadow": false,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "toolTipPaddingLeft": 6,
  "borderRadius": 0,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "paddingLeft": 0,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipBorderRadius": 3,
  "backgroundOpacity": 0,
  "bottom": "0.04%",
  "toolTipPaddingRight": 6,
  "toolTipDisplayTime": 600,
  "toolTipBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "toolTipFontStyle": "normal",
  "toolTip": "Fullscreen",
  "toolTipPaddingTop": 4,
  "maxHeight": 128,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "toolTipPaddingBottom": 4,
  "toolTipShadowOpacity": 0.32,
  "toolTipTextShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipFontSize": 12,
  "minHeight": 1,
  "transparencyActive": true,
  "toolTipShadowBlurRadius": 3
 }
], 
 "paddingTop": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "overflow": "visible",
 "width": "100%",
 "class": "Player",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "vrPolyfillScale": 0.5,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "borderRadius": 0,
 "mobileMipmappingEnabled": true,
 "shadow": false,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "data": {
  "name": "Player463"
 },
 "layout": "absolute",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_2D1D97A5_0666_3C17_4175_AEC092E61A15.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true
})