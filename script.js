TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "hfovMin": 40,
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "hfovMin": 40,
     "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
       "backwardYaw": -34.33,
       "yaw": -42.75,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "hfov": 360,
        "hfovMin": 40,
        "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
          "backwardYaw": 111.94,
          "yaw": -93.27,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "frameDisplayTime": 4000,
           "hfov": 360,
           "hfovMin": 40,
           "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
             "backwardYaw": 3.15,
             "yaw": -11.76,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "hfov": 360,
              "hfovMin": 40,
              "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
                "backwardYaw": 160.16,
                "yaw": -97.26,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "hfov": 360,
                 "hfovMin": 40,
                 "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
                   "backwardYaw": 88.18,
                   "yaw": -45.57,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
                 "label": "Back Door",
                 "vfov": 180,
                 "hfovMax": 150,
                 "mapLocations": [
                  {
                   "x": 1125.23,
                   "map": {
                    "fieldOfViewOverlayInsideOpacity": 0.41,
                    "id": "map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
                    "fieldOfViewOverlayInsideColor": "#0099CC",
                    "initialZoomFactor": 1,
                    "height": 1126,
                    "fieldOfViewOverlayOutsideColor": "#000000",
                    "minimumZoomFactor": 0.5,
                    "width": 2098,
                    "image": {
                     "levels": [
                      {
                       "height": 858,
                       "width": 1600,
                       "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4.jpeg",
                       "class": "ImageResourceLevel"
                      },
                      {
                       "height": 429,
                       "width": 800,
                       "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_lq.jpeg",
                       "grayscale": true,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "thumbnailUrl": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_t.jpg",
                    "label": "Floorplan - Nitz, Robert",
                    "maximumZoomFactor": 1.2,
                    "overlays": [
                     {
                      "id": "overlay_096651E6_05A6_7414_4194_F68A7620F65C",
                      "map": {
                       "offsetY": 0,
                       "x": 226.09,
                       "width": 90,
                       "y": 595.89,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 0)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 225.99,
                       "y": 595.78,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_09258105_05A6_3414_4191_B3F62D4E1286",
                      "map": {
                       "offsetY": 0,
                       "x": 546.5,
                       "width": 90,
                       "y": 630.02,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_1_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 2)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 546.39,
                       "y": 629.92,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_1.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0B20A282_05AA_340C_418E_3843090681CB",
                      "map": {
                       "offsetY": 0,
                       "x": 851.44,
                       "width": 90,
                       "y": 611.66,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_2_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 3)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 851.34,
                       "y": 611.55,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_2.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_08DA6B3E_05AA_D474_4182_F8EE7B2CC48E",
                      "map": {
                       "offsetY": 0,
                       "x": 867.42,
                       "width": 90,
                       "y": 1003.03,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_3_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 5)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 867.32,
                       "y": 1002.93,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_3.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0BFE46FA_05BA_3DFD_4188_924C3188F890",
                      "map": {
                       "offsetY": 0,
                       "x": 780.58,
                       "width": 90,
                       "y": 316.98,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_4_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 6)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 780.47,
                       "y": 316.88,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_4.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0B9B07CF_05BA_DC14_417E_E72883AF5502",
                      "map": {
                       "offsetY": 0,
                       "x": 1093.62,
                       "width": 90,
                       "y": 457.26,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_5_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 18)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1093.51,
                       "y": 457.16,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_5.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0BC6E368_05BA_541C_4195_1CA790601C52",
                      "map": {
                       "offsetY": 0,
                       "x": 1211.59,
                       "width": 90,
                       "y": 592.88,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_6_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 8)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1211.49,
                       "y": 592.77,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_6.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0A8607CB_05BD_DC13_4185_733F4FE10362",
                      "map": {
                       "offsetY": 0,
                       "x": 1385.59,
                       "width": 90,
                       "y": 597.65,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_7_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 14)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1385.49,
                       "y": 597.55,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_7.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0A00C6F5_05BE_3DF4_4160_C87251412391",
                      "map": {
                       "offsetY": 0,
                       "x": 1205.05,
                       "width": 90,
                       "y": 416.07,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_8_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 9)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1204.95,
                       "y": 415.97,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_8.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_0A54E8A8_05BA_F41C_4194_A5EED1CD95BA",
                      "map": {
                       "offsetY": 0,
                       "x": 1466.63,
                       "width": 90,
                       "y": 303.7,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_9_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 12)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1466.52,
                       "y": 303.6,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_9.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_1535A652_05BA_5C0C_417C_44EF150BA9CB",
                      "map": {
                       "offsetY": 0,
                       "x": 1132.11,
                       "width": 90,
                       "y": 794.17,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_10_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 10)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1132.01,
                       "y": 794.06,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_10.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_14C72CF7_05BA_2DF4_4195_E8BE989CC145",
                      "map": {
                       "offsetY": 0,
                       "x": 1719.38,
                       "width": 90,
                       "y": 733.57,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_11_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 15)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1719.28,
                       "y": 733.47,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_11.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_157570FF_05BA_35F4_4185_BAAE49484028",
                      "map": {
                       "offsetY": 0,
                       "x": 1740.14,
                       "width": 90,
                       "y": 304.01,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_12_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 17)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1740.03,
                       "y": 303.91,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_12.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_14FF0222_05A6_740C_418D_C3F642844D46",
                      "map": {
                       "offsetY": 0,
                       "x": 1080.34,
                       "width": 90,
                       "y": 208.97,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_13_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 19)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1080.23,
                       "y": 208.87,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_13.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_178804FA_05A6_5DFC_4195_14BA76AAD94A",
                      "map": {
                       "offsetY": 0,
                       "x": 1080.34,
                       "width": 90,
                       "y": 36.63,
                       "height": 90,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 34,
                          "width": 34,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_14_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 20)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1080.23,
                       "y": 36.52,
                       "width": 90,
                       "height": 90,
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 68,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_14.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_147ADFC7_05A6_6C14_4183_12779F7F818A",
                      "map": {
                       "offsetY": 0,
                       "x": 1297.71,
                       "width": 50,
                       "y": 218.52,
                       "height": 50,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 19,
                          "width": 19,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_15_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 13)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1297.61,
                       "y": 218.41,
                       "width": 50,
                       "height": 50,
                       "image": {
                        "levels": [
                         {
                          "height": 38,
                          "width": 38,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_15.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_1697DBFE_05AA_EBF4_4184_9D6C13F7DE50",
                      "map": {
                       "offsetY": 0,
                       "x": 1462.17,
                       "width": 50,
                       "y": 843.56,
                       "height": 50,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 19,
                          "width": 19,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_16_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 16)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1462.06,
                       "y": 843.45,
                       "width": 50,
                       "height": 50,
                       "image": {
                        "levels": [
                         {
                          "height": 38,
                          "width": 38,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_16.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     },
                     {
                      "id": "overlay_160150A5_05AD_D414_418E_3C468F67337C",
                      "map": {
                       "offsetY": 0,
                       "x": 1352.91,
                       "width": 50,
                       "y": 846.67,
                       "height": 50,
                       "offsetX": 0,
                       "image": {
                        "levels": [
                         {
                          "height": 19,
                          "width": 19,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_17_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayMap"
                      },
                      "useHandCursor": true,
                      "data": {
                       "label": "Image"
                      },
                      "areas": [
                       {
                        "mapColor": "#FF0000",
                        "click": "this.mainPlayList.set('selectedIndex', 11)",
                        "class": "HotspotMapOverlayArea"
                       }
                      ],
                      "image": {
                       "x": 1352.81,
                       "y": 846.57,
                       "width": 50,
                       "height": 50,
                       "image": {
                        "levels": [
                         {
                          "height": 38,
                          "width": 38,
                          "url": "media/map_0E30DB95_05A6_3434_4186_FC915C8DC2A4_HS_17.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotMapOverlayImage"
                      },
                      "rollOverDisplay": false,
                      "class": "AreaHotspotMapOverlay"
                     }
                    ],
                    "scaleMode": "fit_inside",
                    "fieldOfViewOverlayOutsideOpacity": 0,
                    "fieldOfViewOverlayRadiusScale": 0.09,
                    "class": "Map"
                   },
                   "angle": 229.35,
                   "y": 81.52,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_2791CAEF_059A_5414_4184_1980BD458EF7",
                     "items": [
                      {
                       "yaw": -45.57,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 14.77,
                       "image": {
                        "levels": [
                         {
                          "height": 97,
                          "width": 288,
                          "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -17.04
                      }
                     ],
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA, this.camera_762FB6AF_67EE_A028_41D1_9828606E6420); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.77,
                       "yaw": -45.57,
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 47,
                          "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -17.04
                      }
                     ],
                     "rollOverDisplay": true,
                     "class": "HotspotPanoramaOverlay"
                    }
                   ],
                   "sphere": {
                    "levels": [
                     {
                      "height": 3360,
                      "width": 6720,
                      "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "class": "Panorama"
                },
                "backwardYaw": -45.57,
                "yaw": 88.18,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
              "label": "Laundry Room",
              "vfov": 180,
              "hfovMax": 150,
              "mapLocations": [
               {
                "x": 1125.23,
                "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
                "angle": 267.79,
                "y": 253.87,
                "class": "PanoramaMapLocation"
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_2433AE4B_059E_6C1C_4186_102A0E4A7149",
                  "items": [
                   {
                    "yaw": -97.26,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.98,
                    "image": {
                     "levels": [
                      {
                       "height": 168,
                       "width": 385,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -39.32
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7, this.camera_76FC8652_67EE_A078_41D8_A9C3AACE799D); this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 15.98,
                    "yaw": -97.26,
                    "image": {
                     "levels": [
                      {
                       "height": 84,
                       "width": 192,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -39.32
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_271084DE_059D_DC34_4170_F4FD272EF5EA",
                  "items": [
                   {
                    "yaw": -95.93,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.07,
                    "image": {
                     "levels": [
                      {
                       "height": 194,
                       "width": 206,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -24.33
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.07,
                    "yaw": -95.93,
                    "image": {
                     "levels": [
                      {
                       "height": 97,
                       "width": 103,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -24.33
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_2692D9F8_059A_37FC_4178_AAACEC48F9BA",
                  "items": [
                   {
                    "yaw": 88.18,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 31.41,
                    "image": {
                     "levels": [
                      {
                       "height": 432,
                       "width": 721,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -35.62
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300, this.camera_76D0565E_67EE_A068_417B_2CC0A8678FEE); this.mainPlayList.set('selectedIndex', 20)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 31.41,
                    "yaw": 88.18,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 26,
                       "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -35.62
                   }
                  ],
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 3360,
                   "width": 6720,
                   "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama"
             },
             "backwardYaw": -97.26,
             "yaw": 160.16,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg",
           "label": "Utility",
           "vfov": 180,
           "hfovMax": 150,
           "mapLocations": [
            {
             "x": 1138.51,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
             "angle": 180.17,
             "y": 502.16,
             "class": "PanoramaMapLocation"
            }
           ],
           "frameTransitionTime": 2000,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_25C0A9EC_059E_5414_4192_547701E52909",
               "items": [
                {
                 "yaw": -11.76,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 25.76,
                 "image": {
                  "levels": [
                   {
                    "height": 164,
                    "width": 705,
                    "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -47.02
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_77B9D60A_67EE_A3E8_41AB_FD6E5354A66D); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 25.76,
                 "yaw": -11.76,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 68,
                    "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -47.02
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_26A173DA_059F_F43C_417E_5FDC4BCDBD23",
               "items": [
                {
                 "yaw": 160.16,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.03,
                 "image": {
                  "levels": [
                   {
                    "height": 190,
                    "width": 474,
                    "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -37.93
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA, this.camera_77903615_67EE_A3F9_41D2_A25E11590B68); this.mainPlayList.set('selectedIndex', 19)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 20.03,
                 "yaw": 160.16,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 39,
                    "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -37.93
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            },
            {
             "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg",
             "overlays": [
              "this.overlay_25C0A9EC_059E_5414_4192_547701E52909",
              "this.overlay_26A173DA_059F_F43C_417E_5FDC4BCDBD23"
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "LivePanorama"
          },
          "backwardYaw": -11.76,
          "yaw": 3.15,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "hfov": 360,
           "hfovMin": 40,
           "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
           "adjacentPanoramas": [
            {
             "panorama": {
              "hfov": 360,
              "hfovMin": 40,
              "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
                "backwardYaw": -112.02,
                "yaw": 24.53,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
              "label": "Side Entrance",
              "vfov": 180,
              "hfovMax": 150,
              "mapLocations": [
               {
                "x": 912.32,
                "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
                "angle": -32.77,
                "y": 1047.93,
                "class": "PanoramaMapLocation"
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_1C2ABBB1_05ED_F40C_4192_DC7A4D99BD18",
                  "items": [
                   {
                    "yaw": 24.53,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 13.86,
                    "image": {
                     "levels": [
                      {
                       "height": 97,
                       "width": 288,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.18
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_77C7B5E0_67EE_A058_41CC_097FF67C693B); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.86,
                    "yaw": 24.53,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 47,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -26.18
                   }
                  ],
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_23BBECE9_05A5_EC1C_4191_E648EE16D8F9",
                  "items": [
                   {
                    "yaw": -158,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.97,
                    "image": {
                     "levels": [
                      {
                       "height": 336,
                       "width": 529,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 39.25
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 4); this.MainViewerVideoPlayer.play()",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 21.97,
                    "yaw": -158,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 25,
                       "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 39.25
                   }
                  ],
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 3360,
                   "width": 6720,
                   "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama"
             },
             "backwardYaw": 24.53,
             "yaw": -112.02,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
             "backwardYaw": -90.89,
             "yaw": 90.53,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
             "backwardYaw": 116.15,
             "yaw": 0.85,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "hfov": 360,
              "hfovMin": 40,
              "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
                "backwardYaw": 60.82,
                "yaw": -10.72,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
                "backwardYaw": 65,
                "yaw": 38.55,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
              "label": "Kitchen",
              "vfov": 180,
              "hfovMax": 150,
              "mapLocations": [
               {
                "x": 825.47,
                "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
                "angle": 183.69,
                "y": 361.88,
                "class": "PanoramaMapLocation"
               }
              ],
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_1FEA4888_05EE_341C_4190_489DE13FC777",
                  "items": [
                   {
                    "yaw": -10.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.32,
                    "image": {
                     "levels": [
                      {
                       "height": 97,
                       "width": 184,
                       "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.41
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_774CD62A_67EE_A02B_41A7_4772BC42E914); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.32,
                    "yaw": -10.72,
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 30,
                       "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.41
                   }
                  ],
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_1968E6AC_05EE_7C14_4161_8328D2078660",
                  "items": [
                   {
                    "yaw": 38.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.47,
                    "image": {
                     "levels": [
                      {
                       "height": 267,
                       "width": 219,
                       "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -12.79
                   }
                  ],
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_7723C634_67EE_A038_41D5_5E198453265A); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.47,
                    "yaw": 38.55,
                    "image": {
                     "levels": [
                      {
                       "height": 19,
                       "width": 16,
                       "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -12.79
                   }
                  ],
                  "rollOverDisplay": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "sphere": {
                 "levels": [
                  {
                   "height": 3360,
                   "width": 6720,
                   "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama"
             },
             "backwardYaw": -10.72,
             "yaw": 60.82,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
           "label": "Living Room",
           "vfov": 180,
           "hfovMax": 150,
           "mapLocations": [
            {
             "x": 896.34,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
             "angle": 279.46,
             "y": 656.55,
             "class": "PanoramaMapLocation"
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_1D11BF8A_05E6_2C1C_4171_CD10A1FC2DAF",
               "items": [
                {
                 "yaw": 0.85,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.18,
                 "image": {
                  "levels": [
                   {
                    "height": 162,
                    "width": 245,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.95
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_7668768F_67EE_A0E8_41D3_89A38E3CD8D2); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.18,
                 "yaw": 0.85,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 24,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.95
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_1F3B89A6_05E6_D414_416B_3E3144AA28E3",
               "items": [
                {
                 "yaw": 60.82,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.79,
                 "image": {
                  "levels": [
                   {
                    "height": 164,
                    "width": 253,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.75
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0DF12F58_02F2_C608_4170_43608C591778, this.camera_764AE69F_67EE_A0E8_41C8_CC5F001E0DBD); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.79,
                 "yaw": 60.82,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 24,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.75
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_1CABDA2B_05E5_D41C_418D_DAD3D50ED804",
               "items": [
                {
                 "yaw": -112.02,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.87,
                 "image": {
                  "levels": [
                   {
                    "height": 97,
                    "width": 288,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -33.53
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58, this.camera_76B2866F_67EE_A029_41A9_41B8B98B5446); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.87,
                 "yaw": -112.02,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 47,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -33.53
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_2C8AAFBD_066E_2C74_4195_560E1090EA5D",
               "items": [
                {
                 "yaw": 90.53,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 26.79,
                 "image": {
                  "levels": [
                   {
                    "height": 97,
                    "width": 640,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -38.68
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_7694E67E_67EE_A028_41D4_B1326A5C1008); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 26.79,
                 "yaw": 90.53,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 105,
                    "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_0_HS_3_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -38.68
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama"
          },
          "backwardYaw": 90.53,
          "yaw": -90.89,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
        "label": "Hallway 1",
        "vfov": 180,
        "hfovMax": 150,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_274ADCB9_05A6_2C7C_4106_362C5C442DE0",
            "items": [
             {
              "yaw": -90.89,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.75,
              "image": {
               "levels": [
                {
                 "height": 179,
                 "width": 370,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.43
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_77ACE600_67EE_A3D8_41D3_DC109AE83CA6); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 16.75,
              "yaw": -90.89,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 33,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.43
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_20AD0E60_05A7_EC0C_4195_ADC8B5147D82",
            "items": [
             {
              "yaw": 3.15,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.37,
              "image": {
               "levels": [
                {
                 "height": 153,
                 "width": 515,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -39.26
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7, this.camera_77DE35F5_67EE_A038_4189_088A65492604); this.mainPlayList.set('selectedIndex', 18)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 21.37,
              "yaw": 3.15,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 53,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -39.26
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_213194F2_05A6_DC0C_416C_30373005CB38",
            "items": [
             {
              "yaw": 91.16,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.82,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 227,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -27.51
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 14)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.82,
              "yaw": 91.16,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 37,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -27.51
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_21596E33_05A5_EC0C_4155_5B19BC272BB4",
            "items": [
             {
              "yaw": 90.82,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 15.68,
              "image": {
               "levels": [
                {
                 "height": 207,
                 "width": 459,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -50.38
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 15.68,
              "yaw": 90.82,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 35,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -50.38
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_20EBA34D_05AA_F414_4188_F384C202E945",
            "items": [
             {
              "yaw": 91.63,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.11,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 117,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.02
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 15)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.11,
              "yaw": 91.63,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 19,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.02
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_20825C77_05AB_ECF4_4193_7A70D5C028D0",
            "items": [
             {
              "yaw": -93.27,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.22,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 160,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_5_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.32
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_77CDC5EA_67EE_A028_4174_546B6024E261); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.22,
              "yaw": -93.27,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 26,
                 "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.32
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 3360,
             "width": 6720,
             "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama"
       },
       "backwardYaw": -93.27,
       "yaw": 111.94,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
       "backwardYaw": 38.55,
       "yaw": 65,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
       "backwardYaw": 0.85,
       "yaw": 116.15,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
     "label": "Den",
     "vfov": 180,
     "hfovMax": 150,
     "mapLocations": [
      {
       "x": 591.39,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
       "angle": -44.49,
       "y": 674.92,
       "class": "PanoramaMapLocation"
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DECD382_059E_540D_4183_621524084845",
         "items": [
          {
           "yaw": -42.75,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.35,
           "image": {
            "levels": [
             {
              "height": 97,
              "width": 212,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -24.38
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE, this.camera_75D9E6F3_67EE_A038_41D1_1E36214F0110); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.35,
           "yaw": -42.75,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 34,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -24.38
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DEDEE45_059A_EC14_4193_04F0C160E3DC",
         "items": [
          {
           "yaw": 116.15,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.92,
           "image": {
            "levels": [
             {
              "height": 169,
              "width": 385,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -29.83
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1, this.camera_75707713_67EE_A1F8_41D9_5FA4835D831C); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.92,
           "yaw": 116.15,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 36,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -29.83
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_1DD9012F_059A_5414_4172_23CA256717A4",
         "items": [
          {
           "yaw": 111.94,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.91,
           "image": {
            "levels": [
             {
              "height": 97,
              "width": 134,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.93
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF, this.camera_75BA16FE_67EE_A02B_41D1_4E5D7B45BD42); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.91,
           "yaw": 111.94,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 22,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.93
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_1D9906D6_05E6_DC34_4190_F7C8F480AD8D",
         "items": [
          {
           "yaw": 65,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.73,
           "image": {
            "levels": [
             {
              "height": 232,
              "width": 221,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.22
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0DF12F58_02F2_C608_4170_43608C591778, this.camera_759CB708_67EE_A1E8_41C2_85740434A52E); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.73,
           "yaw": 65,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.22
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 3360,
          "width": 6720,
          "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama"
    },
    "backwardYaw": -42.75,
    "yaw": -34.33,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
  "label": "Front Porch",
  "vfov": 180,
  "hfovMax": 150,
  "mapLocations": [
   {
    "x": 270.99,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "angle": 125.74,
    "y": 640.78,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_13102C6B_059A_6C1C_4150_9CC9F1898E43",
      "items": [
       {
        "yaw": -36.76,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 24.44,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 569,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -36.76
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.44,
        "yaw": -36.76,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 82,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -36.76
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_12C7555F_059F_DC34_4174_3FC0884466DB",
      "items": [
       {
        "yaw": -34.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.2,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 219,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.38
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348, this.camera_771BB649_67EE_A068_41D5_91203ABBC0AE); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.2,
        "yaw": -34.33,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 36,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.38
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "id": "overlay_23424659_05BA_5C3C_4191_EC2D9F59E20F",
      "items": [
       {
        "yaw": 137.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 30.12,
        "image": {
         "levels": [
          {
           "height": 431,
           "width": 570,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.81
       }
      ],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1); this.MainViewerVideoPlayer.play()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.12,
        "yaw": 137.51,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 21,
           "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.81
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "buttonPause": {
   "borderSize": 0,
   "mode": "toggle",
   "width": 67.99,
   "horizontalAlign": "center",
   "height": 55.72,
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1166"
   },
   "verticalAlign": "middle",
   "transparencyActive": true,
   "paddingTop": 0,
   "class": "IconButton"
  },
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "transparent",
   "toolTipShadowOpacity": 0.32,
   "paddingBottom": 0,
   "shadow": false,
   "progressBarBackgroundColorDirection": "vertical",
   "minHeight": 70,
   "playbackBarProgressOpacity": 1,
   "playbackBarBottom": 0,
   "playbackBarBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 0,
   "height": "100%",
   "playbackBarHeadShadow": true,
   "width": "100%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadHeight": 15,
   "progressBackgroundColorRatios": [
    0
   ],
   "progressRight": 0,
   "paddingLeft": 0,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "playbackBarHeadOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "minWidth": 100,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "paddingRight": 0,
   "progressBorderRadius": 0,
   "id": "MapViewer",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadWidth": 6,
   "progressBorderColor": "#000000",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "toolTipBorderRadius": 3,
   "progressOpacity": 1,
   "progressLeft": 0,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 0,
   "toolTipFontStyle": "normal",
   "transitionDuration": 500,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "progressBottom": 2,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "progressHeight": 10,
   "playbackBarOpacity": 1
  },
  "class": "MapPlayer"
 },
 {
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 138.59,
   "pitch": -0.23
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -37.88,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.72,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_2047C216_05BA_D434_4165_95D2D0BAD37A_t.jpg",
  "label": "Video 1",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_2047C216_05BA_D434_4165_95D2D0BAD37A.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_2047C216_05BA_D434_4165_95D2D0BAD37A",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 {
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer"
 },
 "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
 {
  "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -44.01,
   "pitch": -1.95
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 128.89,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.66,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
 {
  "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -13.29,
   "pitch": -4.18
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -114.81,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/video_20218431_05BA_DC0C_417A_588D3E7991A0_t.jpg",
  "label": "Video 2",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_20218431_05BA_DC0C_417A_588D3E7991A0.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_20218431_05BA_DC0C_417A_588D3E7991A0",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
 {
  "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -173.09,
   "pitch": 4.94
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 24.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.15,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
 {
  "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -9.39,
   "pitch": -2.77
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -19.42,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.2,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
 {
  "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -95.62,
   "pitch": 0.69
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 0.55,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 2.94,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 40,
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
  "adjacentPanoramas": [
   {
    "panorama": {
     "frameDisplayTime": 4000,
     "hfov": 360,
     "hfovMin": 40,
     "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfov": 360,
        "hfovMin": 40,
        "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfov": 360,
           "hfovMin": 40,
           "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
             "backwardYaw": 50.46,
             "yaw": -53.91,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
           "label": "Closet 2",
           "vfov": 180,
           "hfovMax": 150,
           "mapLocations": [
            {
             "x": 1322.61,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
             "angle": 156.44,
             "y": 243.41,
             "class": "PanoramaMapLocation"
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_21B8C63D_05AA_DC77_4196_196ABB2B5E9D",
               "items": [
                {
                 "yaw": -53.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.39,
                 "image": {
                  "levels": [
                   {
                    "height": 213,
                    "width": 497,
                    "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -40.13
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA, this.camera_684EE78F_67EE_A0E8_41D4_E8973F90EBB8); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 20.39,
                 "yaw": -53.91,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 37,
                    "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -40.13
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama"
          },
          "backwardYaw": -53.91,
          "yaw": 50.46,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
          "backwardYaw": -100.68,
          "yaw": -46.49,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg",
        "label": "Bedroom 2",
        "vfov": 180,
        "hfovMax": 150,
        "mapLocations": [
         {
          "x": 1511.52,
          "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
          "angle": 237.29,
          "y": 348.6,
          "class": "PanoramaMapLocation"
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_182FB59E_05EE_3C34_4190_FC9261B80CDB",
            "items": [
             {
              "yaw": 50.46,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.4,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 225,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30.63
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456, this.camera_75357729_67EE_A028_41C2_675402C40FB9); this.mainPlayList.set('selectedIndex', 13)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.4,
              "yaw": 50.46,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 37,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30.63
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_1BFAF81A_05EA_D43C_4172_D2BDDAB7D752",
            "items": [
             {
              "yaw": -46.49,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.32,
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 219,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.5
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_75091733_67EE_A038_41C9_B74C4AC130E8); this.mainPlayList.set('selectedIndex', 14)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.32,
              "yaw": -46.49,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 36,
                 "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.5
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 3360,
             "width": 6720,
             "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama"
       },
       "backwardYaw": -46.49,
       "yaw": -100.68,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": {
        "hfov": 360,
        "hfovMin": 40,
        "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
          "backwardYaw": -12.63,
          "yaw": 144.94,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "hfov": 360,
           "hfovMin": 40,
           "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
             "backwardYaw": -131.59,
             "yaw": 77.62,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
           "label": "Master Bath",
           "vfov": 180,
           "hfovMax": 150,
           "mapLocations": [
            {
             "x": 1785.03,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
             "angle": 101.72,
             "y": 348.91,
             "class": "PanoramaMapLocation"
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_254DFC26_059A_6C14_4150_504F3C7634C5",
               "items": [
                {
                 "yaw": 77.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.23,
                 "image": {
                  "levels": [
                   {
                    "height": 147,
                    "width": 245,
                    "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.26
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_74E8073E_67EE_A02B_41BA_50C6DEACACCD); this.mainPlayList.set('selectedIndex', 15)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 12.23,
                 "yaw": 77.62,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 26,
                    "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -21.26
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama"
          },
          "backwardYaw": 77.62,
          "yaw": -131.59,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "hfov": 360,
           "hfovMin": 40,
           "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
             "backwardYaw": 86.94,
             "yaw": 49.83,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
           "label": "Master Closet",
           "vfov": 180,
           "hfovMax": 150,
           "mapLocations": [
            {
             "x": 1487.06,
             "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
             "angle": 22.07,
             "y": 868.45,
             "class": "PanoramaMapLocation"
            }
           ],
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_210948F0_05AE_540D_4193_13FA927F01C8",
               "items": [
                {
                 "yaw": 49.83,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 21.97,
                 "image": {
                  "levels": [
                   {
                    "height": 194,
                    "width": 463,
                    "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -27.74
                }
               ],
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_7553671E_67EE_A1E8_41D2_A6F509A28E86); this.mainPlayList.set('selectedIndex', 15)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 21.97,
                 "yaw": 49.83,
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 38,
                    "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -27.74
                }
               ],
               "rollOverDisplay": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "sphere": {
              "levels": [
               {
                "height": 3360,
                "width": 6720,
                "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama"
          },
          "backwardYaw": 49.83,
          "yaw": 86.94,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
        "label": "Master Bedroom",
        "vfov": 180,
        "hfovMax": 150,
        "mapLocations": [
         {
          "x": 1764.28,
          "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
          "angle": -206.94,
          "y": 778.47,
          "class": "PanoramaMapLocation"
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_1A992D8B_05E6_6C1C_4196_2BBA5B517846",
            "items": [
             {
              "yaw": 86.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 12.68,
              "image": {
               "levels": [
                {
                 "height": 129,
                 "width": 268,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.26
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805, this.camera_75C796E3_67EE_A058_41BE_0FE8E3941F4F); this.mainPlayList.set('selectedIndex', 16)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.68,
              "yaw": 86.94,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 33,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.26
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_24CC3D1E_05E6_2C34_4183_9F4D7ECC4F49",
            "items": [
             {
              "yaw": -131.59,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.97,
              "image": {
               "levels": [
                {
                 "height": 198,
                 "width": 236,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D, this.camera_75E556CE_67EE_A068_41D9_5D82702943B0); this.mainPlayList.set('selectedIndex', 17)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.97,
              "yaw": -131.59,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 19,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -30
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_25312306_05E6_D414_4192_C470280E33D2",
            "items": [
             {
              "yaw": 144.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.08,
              "image": {
               "levels": [
                {
                 "height": 136,
                 "width": 247,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -33.24
             }
            ],
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_7600E6BE_67EE_A028_41CF_6BF69A36A986); this.mainPlayList.set('selectedIndex', 14)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.08,
              "yaw": 144.94,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 29,
                 "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -33.24
             }
            ],
            "rollOverDisplay": true,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "sphere": {
           "levels": [
            {
             "height": 3360,
             "width": 6720,
             "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama"
       },
       "backwardYaw": 144.94,
       "yaw": -12.63,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
       "backwardYaw": 31.63,
       "yaw": 151.77,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg",
     "label": "Hall Closet",
     "vfov": 180,
     "hfovMax": 150,
     "mapLocations": [
      {
       "x": 1430.49,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
       "angle": 112.78,
       "y": 642.55,
       "class": "PanoramaMapLocation"
      }
     ],
     "frameTransitionTime": 2000,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_1811E729_05EB_DC1C_4191_6C219E9EC73F",
         "items": [
          {
           "yaw": 151.77,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.12,
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 420,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -44.24
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1, this.camera_68792783_67EE_A0D8_41C5_8A1CFF2BF164); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.12,
           "yaw": 151.77,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 33,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -44.24
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_25694352_05EA_D40C_418B_C96516500786",
         "items": [
          {
           "yaw": -12.63,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.69,
           "image": {
            "levels": [
             {
              "height": 179,
              "width": 340,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -23.63
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B, this.camera_68738778_67EE_A028_41D7_7ADE150D5A05); this.mainPlayList.set('selectedIndex', 15)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.69,
           "yaw": -12.63,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 30,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -23.63
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_25635AF2_05E5_F40C_417D_19CD548F80FA",
         "items": [
          {
           "yaw": -100.68,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.78,
           "image": {
            "levels": [
             {
              "height": 179,
              "width": 368,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -31.73
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA, this.camera_74CC5748_67EE_A068_41CA_A4E0B77F027E); this.mainPlayList.set('selectedIndex', 12)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.78,
           "yaw": -100.68,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 32,
              "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -31.73
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 3360,
          "width": 6720,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame"
      },
      {
       "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg",
       "overlays": [
        "this.overlay_1811E729_05EB_DC1C_4191_6C219E9EC73F",
        "this.overlay_25694352_05EA_D40C_418B_C96516500786",
        "this.overlay_25635AF2_05E5_F40C_417D_19CD548F80FA"
       ],
       "sphere": {
        "levels": [
         {
          "height": 3360,
          "width": 6720,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "LivePanorama"
    },
    "backwardYaw": 151.77,
    "yaw": 31.63,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
  "label": "Hallway",
  "vfov": 180,
  "hfovMax": 150,
  "mapLocations": [
   {
    "x": 1256.49,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "angle": 410.79,
    "y": 637.77,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_1F1195D3_05EA_5C0C_4190_E967C23D7DB5",
      "items": [
       {
        "yaw": -59.57,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.67,
        "image": {
         "levels": [
          {
           "height": 170,
           "width": 430,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -43.78
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.67,
        "yaw": -59.57,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 40,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -43.78
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_1EE9B7FE_05EA_5BF4_4192_5E16C5638BFF",
      "items": [
       {
        "yaw": -146.81,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.17,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 227,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.75
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.17,
        "yaw": -146.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 37,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.75
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_18501236_05EA_D474_417F_B0179585CECA",
      "items": [
       {
        "yaw": 118.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.72,
        "image": {
         "levels": [
          {
           "height": 144,
           "width": 508,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -37.16
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.72,
        "yaw": 118.77,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 56,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -37.16
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_18DDE132_05EB_D40D_4192_BCB58321327B",
      "items": [
       {
        "yaw": 31.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.88,
        "image": {
         "levels": [
          {
           "height": 144,
           "width": 376,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -42.5
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158, this.camera_7706563F_67EE_A028_4192_0EDCC44A9B68); this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.88,
        "yaw": 31.63,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 41,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -42.5
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_192563FB_05EA_FBFC_418A_1DD3ACFB4EE1",
      "items": [
       {
        "yaw": 33.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.06,
        "image": {
         "levels": [
          {
           "height": 147,
           "width": 234,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.05
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.06,
        "yaw": 33.79,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 25,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.05
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_2D05B08B_066A_341C_4189_05F0E7F8B4F2",
      "items": [
       {
        "yaw": -119.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.77,
        "image": {
         "levels": [
          {
           "height": 291,
           "width": 243,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -47.65
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.77,
        "yaw": -119.72,
        "image": {
         "levels": [
          {
           "height": 145,
           "width": 121,
           "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -47.65
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -147.89,
   "pitch": -2.56
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -55.2,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.75,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 40,
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg",
  "label": "Guest Bath",
  "vfov": 180,
  "hfovMax": 150,
  "mapLocations": [
   {
    "x": 1249.95,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "angle": 106.41,
    "y": 460.97,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_18C7C601_05ED_DC0F_4181_BBCFD7AB2CB8",
      "items": [
       {
        "yaw": 68.76,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 17.39,
        "image": {
         "levels": [
          {
           "height": 207,
           "width": 415,
           "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -38.68
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 17.39,
        "yaw": 68.76,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 32,
           "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -38.68
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -104.08,
   "pitch": -2.1
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 63.34,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 40,
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfov": 360,
     "hfovMin": 40,
     "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
       "backwardYaw": 68.18,
       "yaw": -59.11,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
     "label": "Closet 3",
     "vfov": 180,
     "hfovMax": 150,
     "mapLocations": [
      {
       "x": 1377.81,
       "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
       "angle": -29.11,
       "y": 871.57,
       "class": "PanoramaMapLocation"
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_27897C34_05A6_2C74_4191_D2E1EDE3613F",
         "items": [
          {
           "yaw": -59.11,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.34,
           "image": {
            "levels": [
             {
              "height": 168,
              "width": 480,
              "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -41.29
          }
         ],
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576, this.camera_7769F61F_67EE_A3E8_41C7_FE5E8195C058); this.mainPlayList.set('selectedIndex', 10)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.34,
           "yaw": -59.11,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 45,
              "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -41.29
          }
         ],
         "rollOverDisplay": true,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "sphere": {
        "levels": [
         {
          "height": 3360,
          "width": 6720,
          "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama"
    },
    "backwardYaw": -59.11,
    "yaw": 68.18,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
  "label": "Bedroom 3",
  "vfov": 180,
  "hfovMax": 150,
  "mapLocations": [
   {
    "x": 1177.01,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "angle": 24.76,
    "y": 839.06,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_189DE622_05EE_5C0C_4191_7F1E599431D3",
      "items": [
       {
        "yaw": 68.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.04,
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 288,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.37
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7, this.camera_6855279B_67EE_A0E8_41B2_BC81B5A9F8FC); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.04,
        "yaw": 68.18,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 47,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.37
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     },
     {
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_1A88DE71_05EE_6C0C_4194_CE94FBCED939",
      "items": [
       {
        "yaw": 17.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.45,
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 221,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.21
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.45,
        "yaw": 17.06,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 21,
           "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.21
       }
      ],
      "rollOverDisplay": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 17.01,
   "pitch": -0.82
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 67.85,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.26,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
 {
  "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -117.32,
   "pitch": 4.89
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -12.1,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 4.44,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -47.52,
   "pitch": 1.67
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 50.1,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
 {
  "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -76.15,
   "pitch": 3.68
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -20.6,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.19,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
 {
  "class": "PanoramaCamera",
  "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -16.44,
   "pitch": -0.18
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -110.45,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.5,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
 {
  "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 146.38,
   "pitch": -1.62
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 88.71,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.51,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
 {
  "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 175.06,
   "pitch": 5.52
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 58.52,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.98,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
 {
  "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 69.46,
   "pitch": -1.3
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 84.16,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.15,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
 {
  "class": "PanoramaCamera",
  "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -12.08,
   "pitch": 2.83
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 171.93,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.96,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
 {
  "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -96.03,
   "pitch": -5.11
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 89.44,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.8,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
 {
  "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -140.08,
   "pitch": 8.6
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 20000,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -47.34,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 10.78,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_t.png",
  "label": "Photo Album Pic1",
  "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180",
  "playList": {
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_0_t.png",
      "label": "Pic1",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_0",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.66",
       "zoomFactor": 1.1,
       "y": "0.52",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_1_t.png",
      "label": "Pic2",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_1",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_1.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.60",
       "zoomFactor": 1.1,
       "y": "0.41",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_2_t.png",
      "label": "Pic3",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_2",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_2.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.34",
       "zoomFactor": 1.1,
       "y": "0.58",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_3_t.png",
      "label": "Pic4",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_3",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_3.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.65",
       "zoomFactor": 1.1,
       "y": "0.40",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_4_t.png",
      "label": "Pic5",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_4",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_4.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.60",
       "zoomFactor": 1.1,
       "y": "0.72",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_5_t.png",
      "label": "Pic6",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_5",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_5.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.60",
       "zoomFactor": 1.1,
       "y": "0.37",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "thumbnailUrl": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_6_t.png",
      "label": "Pic7",
      "width": 1920,
      "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_6",
      "height": 1080,
      "image": {
       "levels": [
        {
         "url": "media/album_2CAF1A38_059D_D47C_418A_4E3F07177180_6.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      },
      "targetPosition": {
       "x": "0.56",
       "zoomFactor": 1.1,
       "y": "0.63",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera"
     }
    }
   ],
   "id": "album_2CAF1A38_059D_D47C_418A_4E3F07177180_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "class": "PhotoAlbum"
 },
 {
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer"
 },
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_0",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_1",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_2",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_3",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_4",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_5",
 "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180_6",
 {
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77E025CF_67EE_A068_41C1_0324D4FF6EC4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_77E025CF_67EE_A068_41C1_0324D4FF6EC4",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.video_2047C216_05BA_D434_4165_95D2D0BAD37A",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.video_2047C216_05BA_D434_4165_95D2D0BAD37A)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77E1E5CF_67EE_A068_41D1_7DCBE17CB94F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_77E1E5CF_67EE_A068_41D1_7DCBE17CB94F",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77E125CF_67EE_A067_41D3_34327D9D9710, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_77E125CF_67EE_A067_41D3_34327D9D9710",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.video_20218431_05BA_DC0C_417A_588D3E7991A0",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4, this.video_20218431_05BA_DC0C_417A_588D3E7991A0)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EED5D0_67EE_A078_41C1_3B448632FC7B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_77EED5D0_67EE_A078_41C1_3B448632FC7B",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EE05D0_67EE_A078_41D9_E3EFFE3C1789, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_77EE05D0_67EE_A078_41D9_E3EFFE3C1789",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
    "camera": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EFD5D0_67EE_A078_41D8_6700AB68FC01, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_77EFD5D0_67EE_A078_41D8_6700AB68FC01",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EF35D0_67EE_A078_41C8_82C62C0920D6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_77EF35D0_67EE_A078_41C8_82C62C0920D6",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EF65D1_67EE_A078_41D4_335A1C67CE12, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_77EF65D1_67EE_A078_41D4_335A1C67CE12",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77ECD5D1_67EE_A078_4191_0CFC3CB82092, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
    "camera": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_77ECD5D1_67EE_A078_4191_0CFC3CB82092",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EC05D1_67EE_A078_4196_FFC7C0774892, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_77EC05D1_67EE_A078_4196_FFC7C0774892",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EC65D1_67EE_A078_41B0_84CF157ACCCF, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
    "camera": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_77EC65D1_67EE_A078_41B0_84CF157ACCCF",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EDD5D1_67EE_A078_4184_981FC721B21F, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_77EDD5D1_67EE_A078_4184_981FC721B21F",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77ED05D1_67EE_A078_41BF_7AB51BDBF758, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_77ED05D1_67EE_A078_41BF_7AB51BDBF758",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77ED65D2_67EE_A078_41C5_8471EB9380A4, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_77ED65D2_67EE_A078_41C5_8471EB9380A4",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EAD5D2_67EE_A078_4140_B67686176774, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_77EAD5D2_67EE_A078_4140_B67686176774",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EA05D2_67EE_A078_41D2_8C7222EC9354, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_77EA05D2_67EE_A078_41D2_8C7222EC9354",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EA65D2_67EE_A078_41D1_A65FA490D725, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_77EA65D2_67EE_A078_41D1_A65FA490D725",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_77EB55D2_67EE_A078_419C_6DC350D760CA, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "id": "PanoramaPlayListItem_77EB55D2_67EE_A078_419C_6DC350D760CA",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
    "media": "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')",
    "class": "PhotoAlbumPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "media": "this.video_2047C216_05BA_D434_4165_95D2D0BAD37A",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, this.video_2047C216_05BA_D434_4165_95D2D0BAD37A)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "media": "this.video_20218431_05BA_DC0C_417A_588D3E7991A0",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, this.video_20218431_05BA_DC0C_417A_588D3E7991A0)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "media": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
    "camera": "this.panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "media": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
    "camera": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)",
    "media": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
    "camera": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 18)",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 18, 19)",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 19, 20)",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 20, 21)",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 21, 0)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_2CAF1A38_059D_D47C_418A_4E3F07177180",
    "class": "PhotoAlbumPlayListItem"
   }
  ],
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "class": "PlayList"
 },
 "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_77E085CF_67EE_A068_41D7_35AF251D639E",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_77E0B5CF_67EE_A068_41D2_CAE3A03B0C8E",
  "class": "PlayList"
 },
 {
  "id": "camera_77C7B5E0_67EE_A058_41CC_097FF67C693B",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 67.98,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -13.29,
     "path": "shortest",
     "pitchSpeed": 13.86,
     "yawSpeed": 26.84,
     "easing": "cubic_in_out",
     "targetPitch": -4.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -114.81,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_77C7A5E0_67EE_A058_41D7_83C7947ED259",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_77C7A5E0_67EE_A058_41D7_83C7947ED259"
 },
 {
  "id": "camera_77CDC5EA_67EE_A028_4174_546B6024E261",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -68.06,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -44.01,
     "path": "shortest",
     "pitchSpeed": 3.24,
     "yawSpeed": 5.5,
     "easing": "cubic_in_out",
     "targetPitch": -1.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 128.89,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.66,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_77CDF5EA_67EE_A028_41C7_15D52EFE0721",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_77CDF5EA_67EE_A028_41C7_15D52EFE0721"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_77DE35F5_67EE_A038_4189_088A65492604",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 168.24,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -12.08,
     "path": "shortest",
     "pitchSpeed": 16.72,
     "yawSpeed": 32.58,
     "easing": "cubic_in_out",
     "targetPitch": 2.83,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 171.93,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.96,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_77ACE600_67EE_A3D8_41D3_DC109AE83CA6",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -89.47,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -13.29,
     "path": "shortest",
     "pitchSpeed": 13.05,
     "yawSpeed": 25.22,
     "easing": "cubic_in_out",
     "targetPitch": -4.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -114.81,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_77AC1600_67EE_A3D8_41C6_227BFDBEC818",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_77AC1600_67EE_A3D8_41C6_227BFDBEC818"
 },
 {
  "id": "camera_77B9D60A_67EE_A3E8_41AB_FD6E5354A66D",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -176.85,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -95.62,
     "path": "shortest",
     "pitchSpeed": 14.55,
     "yawSpeed": 28.23,
     "easing": "cubic_in_out",
     "targetPitch": 0.69,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 0.55,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 2.94,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_77B9C60A_67EE_A3E8_41C4_0BCF3B80B21B",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_77B9C60A_67EE_A3E8_41C4_0BCF3B80B21B"
 },
 {
  "id": "camera_77903615_67EE_A3F9_41D2_A25E11590B68",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 82.74,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -96.03,
     "path": "shortest",
     "pitchSpeed": 16.48,
     "yawSpeed": 32.1,
     "easing": "cubic_in_out",
     "targetPitch": -5.11,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 89.44,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.8,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_77902615_67EE_A3F9_41D5_BFC5700B2BA0",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_77902615_67EE_A3F9_41D5_BFC5700B2BA0"
 },
 {
  "id": "camera_7769F61F_67EE_A3E8_41C7_FE5E8195C058",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -111.82,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 17.01,
     "path": "longest",
     "pitchSpeed": 41.62,
     "yawSpeed": 82.63,
     "easing": "cubic_in_out",
     "targetPitch": -0.82,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 67.85,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.26,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_7769161F_67EE_A3E8_41D5_020AE8E22FA0",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_7769161F_67EE_A3E8_41D5_020AE8E22FA0"
 },
 {
  "id": "camera_774CD62A_67EE_A02B_41A7_4772BC42E914",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -119.18,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -13.29,
     "path": "shortest",
     "pitchSpeed": 17.74,
     "yawSpeed": 34.64,
     "easing": "cubic_in_out",
     "targetPitch": -4.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -114.81,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_774CC62A_67EE_A02B_4173_941C9732D313",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_774CC62A_67EE_A02B_4173_941C9732D313"
 },
 {
  "id": "camera_7723C634_67EE_A038_41D5_5E198453265A",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -115,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -44.01,
     "path": "shortest",
     "pitchSpeed": 7.59,
     "yawSpeed": 14.24,
     "easing": "cubic_in_out",
     "targetPitch": -1.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 128.89,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.66,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_7723F635_67EE_A038_41D9_96125A5B623F",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_7723F635_67EE_A038_41D9_96125A5B623F"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7706563F_67EE_A028_4192_0EDCC44A9B68",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -28.23,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -16.44,
     "path": "shortest",
     "pitchSpeed": 3.01,
     "yawSpeed": 5.04,
     "easing": "cubic_in_out",
     "targetPitch": -0.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -110.45,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.5,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_771BB649_67EE_A068_41D5_91203ABBC0AE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 137.25,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -44.01,
     "path": "shortest",
     "pitchSpeed": 17.83,
     "yawSpeed": 34.81,
     "easing": "cubic_in_out",
     "targetPitch": -1.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 128.89,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.66,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_771BD649_67EE_A068_41D2_C92B839ADBCD",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_771BD649_67EE_A068_41D2_C92B839ADBCD"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_76FC8652_67EE_A078_41D8_A9C3AACE799D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -19.84,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -12.08,
     "path": "shortest",
     "pitchSpeed": 1.72,
     "yawSpeed": 2.45,
     "easing": "cubic_in_out",
     "targetPitch": 2.83,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 171.93,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.96,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_76D0565E_67EE_A068_417B_2CC0A8678FEE",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 134.43,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -140.08,
     "path": "shortest",
     "pitchSpeed": 48.52,
     "yawSpeed": 96.49,
     "easing": "cubic_in_out",
     "targetPitch": 8.6,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -47.34,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 10.78,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_76D0465E_67EE_A068_41C9_23BD88964607",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_76D0465E_67EE_A068_41C9_23BD88964607"
 },
 {
  "id": "camera_76B2866F_67EE_A029_41A9_41B8B98B5446",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -155.47,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -173.09,
     "path": "shortest",
     "pitchSpeed": 2.48,
     "yawSpeed": 3.98,
     "easing": "cubic_in_out",
     "targetPitch": 4.94,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 24.96,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.15,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_76B2A66F_67EE_A029_41C7_C65AE4A5FD44",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_76B2A66F_67EE_A029_41C7_C65AE4A5FD44"
 },
 {
  "id": "camera_7694E67E_67EE_A028_41D4_B1326A5C1008",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 89.11,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -95.62,
     "path": "shortest",
     "pitchSpeed": 31.82,
     "yawSpeed": 62.93,
     "easing": "cubic_in_out",
     "targetPitch": 0.69,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 0.55,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 2.94,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_7694167E_67EE_A028_41CF_994F984073D7",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_7694167E_67EE_A028_41CF_994F984073D7"
 },
 {
  "id": "camera_7668768F_67EE_A0E8_41D3_89A38E3CD8D2",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -63.85,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -44.01,
     "path": "shortest",
     "pitchSpeed": 2.85,
     "yawSpeed": 4.72,
     "easing": "cubic_in_out",
     "targetPitch": -1.95,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 128.89,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.66,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_7668668F_67EE_A0E8_41D0_C9CA7FB686F4",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_7668668F_67EE_A0E8_41D0_C9CA7FB686F4"
 },
 {
  "id": "camera_764AE69F_67EE_A0E8_41C8_CC5F001E0DBD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 169.28,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -9.39,
     "path": "longest",
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "easing": "cubic_in_out",
     "targetPitch": -2.77,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -19.42,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.2,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_764A069F_67EE_A0E8_41D7_3D428B52D130",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_764A069F_67EE_A0E8_41D7_3D428B52D130"
 },
 {
  "id": "camera_762FB6AF_67EE_A028_41D1_9828606E6420",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -91.82,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -96.03,
     "path": "shortest",
     "pitchSpeed": 1.57,
     "yawSpeed": 2.15,
     "easing": "cubic_in_out",
     "targetPitch": -5.11,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 89.44,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.8,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_762FA6AF_67EE_A028_41C8_C7EFD332ED1B",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_762FA6AF_67EE_A028_41C8_C7EFD332ED1B"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_7600E6BE_67EE_A028_41CF_6BF69A36A986",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 167.37,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -16.44,
     "path": "shortest",
     "pitchSpeed": 32.37,
     "yawSpeed": 64.03,
     "easing": "cubic_in_out",
     "targetPitch": -0.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -110.45,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.5,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_75E556CE_67EE_A068_41D9_5D82702943B0",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -102.38,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 69.46,
     "path": "shortest",
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "easing": "cubic_in_out",
     "targetPitch": -1.3,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 84.16,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.15,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75E546CE_67EE_A068_41D2_4CEA1E55E5FD",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75E546CE_67EE_A068_41D2_4CEA1E55E5FD"
 },
 {
  "id": "camera_75C796E3_67EE_A058_41BE_0FE8E3941F4F",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -130.17,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 175.06,
     "path": "shortest",
     "pitchSpeed": 43.04,
     "yawSpeed": 85.47,
     "easing": "cubic_in_out",
     "targetPitch": 5.52,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 58.52,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.98,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75C7B6E3_67EE_A058_41D0_DB8EA6659E88",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75C7B6E3_67EE_A058_41D0_DB8EA6659E88"
 },
 {
  "id": "camera_75D9E6F3_67EE_A038_41D1_1E36214F0110",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 145.67,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 138.59,
     "path": "shortest",
     "pitchSpeed": 1.64,
     "yawSpeed": 2.29,
     "easing": "cubic_in_out",
     "targetPitch": -0.23,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -37.88,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.72,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75D916F3_67EE_A038_41D5_CB240258F35E",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75D916F3_67EE_A038_41D5_CB240258F35E"
 },
 {
  "id": "camera_75BA16FE_67EE_A02B_41D1_4E5D7B45BD42",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 86.73,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -95.62,
     "path": "shortest",
     "pitchSpeed": 31.43,
     "yawSpeed": 62.14,
     "easing": "cubic_in_out",
     "targetPitch": 0.69,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 0.55,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 2.94,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75BA06FE_67EE_A02B_41A7_E4A2DBD864EC",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75BA06FE_67EE_A02B_41A7_E4A2DBD864EC"
 },
 {
  "id": "camera_759CB708_67EE_A1E8_41C2_85740434A52E",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -141.45,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -9.39,
     "path": "longest",
     "pitchSpeed": 108,
     "yawSpeed": 216,
     "easing": "cubic_in_out",
     "targetPitch": -2.77,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -19.42,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.2,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_759CA708_67EE_A1E8_41D8_2A6BB9FA6DB8",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_759CA708_67EE_A1E8_41D8_2A6BB9FA6DB8"
 },
 {
  "id": "camera_75707713_67EE_A1F8_41D9_5FA4835D831C",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -179.15,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -13.29,
     "path": "shortest",
     "pitchSpeed": 27.21,
     "yawSpeed": 53.67,
     "easing": "cubic_in_out",
     "targetPitch": -4.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -114.81,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.95,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75719713_67EE_A1F8_41D3_B62B3A789661",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75719713_67EE_A1F8_41D3_B62B3A789661"
 },
 {
  "id": "camera_7553671E_67EE_A1E8_41D2_A6F509A28E86",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -93.06,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 146.38,
     "path": "shortest",
     "pitchSpeed": 67.59,
     "yawSpeed": 134.8,
     "easing": "cubic_in_out",
     "targetPitch": -1.62,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 88.71,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.51,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_7550871E_67EE_A1E8_41D7_C07EA20D5E5A",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_7550871E_67EE_A1E8_41D7_C07EA20D5E5A"
 },
 {
  "id": "camera_75357729_67EE_A028_41C2_675402C40FB9",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 126.09,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -76.15,
     "path": "shortest",
     "pitchSpeed": 59.44,
     "yawSpeed": 118.42,
     "easing": "cubic_in_out",
     "targetPitch": 3.68,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -20.6,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.19,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_75356729_67EE_A028_41C2_68E760AEC27B",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_75356729_67EE_A028_41C2_68E760AEC27B"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_75091733_67EE_A038_41C9_B74C4AC130E8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 79.32,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -16.44,
     "path": "shortest",
     "pitchSpeed": 17.34,
     "yawSpeed": 33.84,
     "easing": "cubic_in_out",
     "targetPitch": -0.18,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -110.45,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.5,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_74E8073E_67EE_A02B_41BA_50C6DEACACCD",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 48.41,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 146.38,
     "path": "shortest",
     "pitchSpeed": 28.25,
     "yawSpeed": 55.75,
     "easing": "cubic_in_out",
     "targetPitch": -1.62,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 88.71,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.51,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_74E8573E_67EE_A02B_41B4_AA73BC8DCA49",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_74E8573E_67EE_A02B_41B4_AA73BC8DCA49"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_74CC5748_67EE_A068_41CA_A4E0B77F027E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 133.51,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -47.52,
     "path": "shortest",
     "pitchSpeed": 30.76,
     "yawSpeed": 60.8,
     "easing": "cubic_in_out",
     "targetPitch": 1.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 50.1,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_68738778_67EE_A028_41D7_7ADE150D5A05",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -35.06,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": 146.38,
     "path": "shortest",
     "pitchSpeed": 51.46,
     "yawSpeed": 102.39,
     "easing": "cubic_in_out",
     "targetPitch": -1.62,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 88.71,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.51,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_6873B778_67EE_A028_41C3_E4BB2258F394",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_6873B778_67EE_A028_41C3_E4BB2258F394"
 },
 {
  "id": "camera_68792783_67EE_A0D8_41C5_8A1CFF2BF164",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -148.37,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -147.89,
     "path": "shortest",
     "pitchSpeed": 1.45,
     "yawSpeed": 1.91,
     "easing": "cubic_in_out",
     "targetPitch": -2.56,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -55.2,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.75,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_68795783_67EE_A0D8_41D0_BC6193500B9B",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_68795783_67EE_A0D8_41D0_BC6193500B9B"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_684EE78F_67EE_A0E8_41D4_E8973F90EBB8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -129.54,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -47.52,
     "path": "shortest",
     "pitchSpeed": 14.48,
     "yawSpeed": 28.1,
     "easing": "cubic_in_out",
     "targetPitch": 1.67,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": 50.1,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.14,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_6855279B_67EE_A0E8_41B2_BC81B5A9F8FC",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 120.89,
   "pitch": 0
  },
  "idleSequence": {
   "movements": [
    {
     "targetYaw": -117.32,
     "path": "shortest",
     "pitchSpeed": 37.35,
     "yawSpeed": 74.03,
     "easing": "cubic_in_out",
     "targetPitch": 4.89,
     "class": "TargetPanoramaCameraMovement"
    },
    {
     "targetYaw": -12.1,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 4.44,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "id": "sequence_6855579B_67EE_A0E8_41D6_8D437ADAE81A",
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 20000,
  "initialSequence": "this.sequence_6855579B_67EE_A0E8_41D6_8D437ADAE81A"
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 0.24,
  "toolTipPaddingLeft": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 0.32,
  "paddingBottom": 0,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 36,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 36,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowBlurRadius": 56,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "paddingLeft": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "progressOpacity": 1,
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "transitionDuration": 300,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "progressHeight": 10,
  "playbackBarOpacity": 1
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowBlurRadius": 8,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "selectedItemLabelFontSize": 17,
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "paddingBottom": 0,
  "rollOverItemLabelFontWeight": "bold",
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "shadow": false,
  "minHeight": 20,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "backgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "class": "ThumbnailList",
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "paddingLeft": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "rollOverItemBackgroundOpacity": 0,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.51%",
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontColor": "#0099CC",
  "paddingRight": 0,
  "itemOpacity": 1,
  "itemThumbnailShadow": true,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom"
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "borderRadius": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "top": "0.05%",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "minWidth": 1,
  "maxWidth": 1694,
  "paddingRight": 0,
  "cursor": "hand",
  "minHeight": 1,
  "shadow": false,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Leters"
  },
  "verticalAlign": "middle",
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145,
  "class": "Image"
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "6.604%",
  "width": "9.212%",
  "borderRadius": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "top": "0.05%",
  "minWidth": 1,
  "maxWidth": 1412,
  "paddingRight": 0,
  "minHeight": 1,
  "shadow": false,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Logo"
  },
  "verticalAlign": "middle",
  "paddingTop": 0,
  "maxHeight": 800,
  "right": "24.72%",
  "class": "Image"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "visible",
  "scrollBarVisible": "rollOver",
  "gap": 0,
  "horizontalAlign": "left",
  "height": "80.818%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 10,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 75,
  "visible": false,
  "paddingRight": 170,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "bottom",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0,
  "contentOpaque": false,
  "class": "Container"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "borderSize": 0,
      "horizontalAlign": "right",
      "fontSize": 42,
      "width": "44.135%",
      "height": "48%",
      "textDecoration": "none",
      "borderRadius": 0,
      "text": "Floor Plan",
      "fontFamily": "Arial",
      "paddingLeft": 0,
      "paddingBottom": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/43946/mountain-view-homes-sequim/sequim/land%2Fhome-packages/\", \"_blank\")",
      "minWidth": 60,
      "maxWidth": 8000,
      "paddingRight": 0,
      "minHeight": 60,
      "shadow": false,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "backgroundOpacity": 0,
      "data": {
       "name": "Label20305"
      },
      "verticalAlign": "middle",
      "fontColor": "#000000",
      "paddingTop": 0,
      "maxHeight": 8000,
      "class": "Label"
     },
     {
      "borderSize": 0,
      "mode": "toggle",
      "width": 57.3,
      "horizontalAlign": "center",
      "height": 57.5,
      "borderRadius": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "minWidth": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49925"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "class": "IconButton"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "75%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1left"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "borderSize": 0,
      "mode": "toggle",
      "width": 62.65,
      "horizontalAlign": "center",
      "height": 56.91,
      "borderRadius": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "class": "IconButton"
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1middle"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "right",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1right"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   }
  ],
  "overflow": "visible",
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "center",
  "height": "10%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 2,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 2,
  "paddingRight": 2,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "data": {
   "name": "Global"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "contentOpaque": false,
  "class": "Container"
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "width": 67.4,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 62.29,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowSpread": 0,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "toolTipShadowOpacity": 0.32,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "minWidth": 1,
  "maxWidth": 128,
  "bottom": "0.04%",
  "paddingRight": 0,
  "cursor": "hand",
  "toolTip": "Fullscreen",
  "shadow": false,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "transparencyActive": true,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "maxHeight": 128,
  "right": "0.06%",
  "toolTipPaddingRight": 6,
  "class": "IconButton"
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "overflow": "visible",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_77E0B5CF_67EE_A068_41D2_CAE3A03B0C8E.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } }
 },
 "paddingBottom": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "layout": "absolute",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "class": "Player"
})