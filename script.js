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
    "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Front Porch",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 271.09,
    "y": 640.89,
    "class": "PanoramaMapLocation",
    "angle": 125.74,
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
        "x": 226.09,
        "y": 595.89,
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
         "click": "this.mainPlayList.set('selectedIndex', 1)"
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
        "x": 546.5,
        "y": 630.02,
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
         "click": "this.mainPlayList.set('selectedIndex', 2)"
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
        "x": 851.44,
        "y": 611.66,
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
         "click": "this.mainPlayList.set('selectedIndex', 3)"
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
        "x": 867.42,
        "y": 1003.03,
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
         "click": "this.mainPlayList.set('selectedIndex', 4)"
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
        "x": 780.58,
        "y": 316.98,
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
         "click": "this.mainPlayList.set('selectedIndex', 12)"
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
        "x": 1093.62,
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
         "click": "this.mainPlayList.set('selectedIndex', 5)"
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
        "y": 592.88,
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
         "click": "this.mainPlayList.set('selectedIndex', 9)"
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
        "x": 1385.59,
        "y": 597.65,
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
         "click": "this.mainPlayList.set('selectedIndex', 6)"
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
        "y": 416.07,
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
         "click": "this.mainPlayList.set('selectedIndex', 8)"
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
        "x": 1466.63,
        "y": 303.7,
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
         "click": "this.mainPlayList.set('selectedIndex', 7)"
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
        "x": 1132.11,
        "y": 794.17,
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
         "click": "this.mainPlayList.set('selectedIndex', 10)"
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
        "y": 733.57,
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
         "click": "this.mainPlayList.set('selectedIndex', 11)"
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
        "x": 1740.14,
        "y": 304.01,
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
         "click": "this.mainPlayList.set('selectedIndex', 13)"
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
        "x": 1080.34,
        "y": 208.97,
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
         "click": "this.mainPlayList.set('selectedIndex', 14)"
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
        "x": 1080.34,
        "y": 36.63,
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
         "click": "this.playList_13D67E7A_059B_ECFC_4172_78196373A731.set('selectedIndex', 0)"
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
        "x": 1297.71,
        "y": 218.52,
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
         "click": "this.playList_13D68E7A_059B_ECFC_4188_18D5E7AEEBE8.set('selectedIndex', 0)"
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
        "x": 1462.17,
        "y": 843.56,
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
         "click": "this.playList_13D6AE7A_059B_ECFC_4196_CA5E29A22A52.set('selectedIndex', 0)"
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
        "x": 1352.91,
        "y": 846.67,
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
    "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Den",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 591.5,
    "y": 675.02,
    "class": "PanoramaMapLocation",
    "angle": -44.49,
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
    "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Living Room",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 896.44,
    "y": 656.66,
    "class": "PanoramaMapLocation",
    "angle": 279.46,
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
    "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Side Entrance",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 912.42,
    "y": 1048.03,
    "class": "PanoramaMapLocation",
    "angle": -32.77,
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
    "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Kitchen",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 825.58,
    "y": 361.98,
    "class": "PanoramaMapLocation",
    "angle": 183.69,
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
    "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Hallway",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1256.59,
    "y": 637.88,
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
    "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg"
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
    "y": 461.07,
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
    "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Bedroom 3",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1177.11,
    "y": 839.17,
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
    "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Bedroom 2",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1511.63,
    "y": 348.7,
    "class": "PanoramaMapLocation",
    "angle": 237.29,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
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
  "id": "panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
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
    "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_0_t.jpg"
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
    "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg"
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
  "hfov": 360,
  "pitch": 0,
  "frameTransitionTime": 5000,
  "class": "LivePanorama",
  "label": "Hall Closet",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_17A1AD31_030F_4A1B_4152_0A848901E158_1_t.jpg",
  "frameDisplayTime": 5000,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1430.59,
    "y": 642.65,
    "class": "PanoramaMapLocation",
    "angle": 112.78,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
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
  "id": "panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
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
    "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Master Bedroom",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1764.38,
    "y": 778.57,
    "class": "PanoramaMapLocation",
    "angle": -206.94,
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
    "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Master Bath",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1785.14,
    "y": 349.01,
    "class": "PanoramaMapLocation",
    "angle": 101.72,
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
    "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_0_t.jpg"
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
    "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg"
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
  "hfov": 360,
  "pitch": 0,
  "frameTransitionTime": 5000,
  "class": "LivePanorama",
  "label": "Utility",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_1_t.jpg",
  "frameDisplayTime": 5000,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1138.62,
    "y": 502.26,
    "class": "PanoramaMapLocation",
    "angle": 180.17,
    "map": "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4"
   }
  ]
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
  "id": "panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
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
    "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Laundry Room",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1125.34,
    "y": 253.97,
    "class": "PanoramaMapLocation",
    "angle": 267.79,
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
    "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Back Door",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1125.34,
    "y": 81.63,
    "class": "PanoramaMapLocation",
    "angle": 229.35,
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
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13D40E7B_059B_ECFC_418E_7BAAAE981646, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_13D40E7B_059B_ECFC_418E_7BAAAE981646",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13D49E7B_059B_ECFC_4195_3AAA9BBFFEB5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_13D49E7B_059B_ECFC_4195_3AAA9BBFFEB5",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13D4DE7B_059B_ECFC_4188_A69B567C43CE, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_13D4DE7B_059B_ECFC_4188_A69B567C43CE",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CB0E7B_059B_ECFC_415D_4D5B8144C626, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_13CB0E7B_059B_ECFC_415D_4D5B8144C626",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CB7E7C_059B_ECF4_4193_A050BE299585, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_13CB7E7C_059B_ECF4_4193_A050BE299585",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CBAE7C_059B_ECF4_4183_D2C9A11A76F0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_13CBAE7C_059B_ECF4_4183_D2C9A11A76F0",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CA0E7C_059B_ECF4_417F_7EA33FACA050, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_13CA0E7C_059B_ECF4_417F_7EA33FACA050",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CA7E7C_059B_ECF4_4194_ACF041B1488D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_13CA7E7C_059B_ECF4_4194_ACF041B1488D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13CAAE7C_059B_ECF4_4177_9B4B7F4490D4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_13CAAE7C_059B_ECF4_4177_9B4B7F4490D4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C90E7C_059B_ECF4_4177_DCB3819BF152, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_13C90E7C_059B_ECF4_4177_DCB3819BF152",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C97E7D_059B_ECF4_417E_E1833E6D2FB4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_13C97E7D_059B_ECF4_417E_E1833E6D2FB4",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C9AE7D_059B_ECF4_4195_FFB8FE750891, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_13C9AE7D_059B_ECF4_4195_FFB8FE750891",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C80E7D_059B_ECF4_4196_4867EE8AC26D, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_13C80E7D_059B_ECF4_4196_4867EE8AC26D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C86E7D_059B_ECF4_4183_6DB5C8E814A7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_13C86E7D_059B_ECF4_4183_6DB5C8E814A7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C8CE7D_059B_ECF4_4180_8860416C9D24, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
    "id": "PanoramaPlayListItem_13C8CE7D_059B_ECF4_4180_8860416C9D24",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer"
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
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "media": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1B3AA678_0313_4608_4173_A796DBB5C3CA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "media": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_17A1AD31_030F_4A1B_4152_0A848901E158_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)",
    "media": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1781B561_030F_FA38_415A_3FFFEE63E3A7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 0)",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera"
   }
  ]
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
    "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Closet 2",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1322.71,
    "y": 243.52,
    "class": "PanoramaMapLocation",
    "angle": 156.44,
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
  "id": "playList_13D67E7A_059B_ECFC_4172_78196373A731",
  "items": [
   {
    "camera": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_camera",
    "media": "this.panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C35E7F_059B_ECF4_4185_6ED57DDBCA53, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_13C35E7F_059B_ECF4_4185_6ED57DDBCA53",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
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
    "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Master Closet",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1487.17,
    "y": 868.56,
    "class": "PanoramaMapLocation",
    "angle": 22.07,
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
  "id": "playList_13D68E7A_059B_ECFC_4188_18D5E7AEEBE8",
  "items": [
   {
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C39E7F_059B_ECF4_4189_BD1316B81E7D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_13C39E7F_059B_ECF4_4189_BD1316B81E7D",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
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
    "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "label": "Closet 3",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1377.91,
    "y": 871.67,
    "class": "PanoramaMapLocation",
    "angle": -29.11,
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
  "id": "playList_13D6AE7A_059B_ECFC_4196_CA5E29A22A52",
  "items": [
   {
    "camera": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_camera",
    "media": "this.panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_13C3AE7F_059B_ECF4_418F_CCB108876373, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_13C3AE7F_059B_ECF4_418F_CCB108876373",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_0E30DB95_05A6_3434_4186_FC915C8DC2A4",
 {
  "class": "PlayList",
  "id": "playList_13D6DE7A_059B_ECFC_4191_45442B46DA08",
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
  "id": "playList_13D6FE7B_059B_ECFC_4172_FB30A8883CCA",
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
    "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg"
   }
  ],
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
  "pitch": 0,
  "class": "Panorama",
  "label": "Hallway 1",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
  "vfov": 180,
  "hfov": 360
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
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_13D6FE7B_059B_ECFC_4172_FB30A8883CCA.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true
})