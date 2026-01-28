TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg",
  "partial": false,
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Front Porch",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_t.jpg"
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonPause": {
   "class": "IconButton",
   "paddingLeft": 0,
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 67.99,
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "height": 55.72,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
   "paddingBottom": 0,
   "minWidth": 0,
   "shadow": false,
   "transparencyActive": true,
   "minHeight": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "data": {
    "name": "Button1166"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "paddingRight": 0
  },
  "mouseControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg",
  "partial": false,
  "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Den",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0D5DA28B_02F2_FE08_412B_276C56025348_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg",
  "partial": false,
  "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Living Room",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg",
  "partial": false,
  "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Side Entrance",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg",
  "partial": false,
  "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Kitchen",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0DF12F58_02F2_C608_4170_43608C591778_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0DF12F58_02F2_C608_4170_43608C591778_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg",
  "partial": false,
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg",
  "partial": false,
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Guest Bath",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg",
  "partial": false,
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom 2",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg",
  "partial": false,
  "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom 3",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C001D65_02F3_4A38_4181_F07B0987216B_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg",
  "partial": false,
  "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Closet",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg",
  "partial": false,
  "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bath",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg",
  "partial": false,
  "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Laundry Room",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg",
  "partial": false,
  "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "R0012598",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
  "timeToIdle": 20000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "camera": "this.panorama_0C8BCB67_02F2_CE07_4165_8C8872309FFE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "camera": "this.panorama_0D5DA28B_02F2_FE08_412B_276C56025348_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "camera": "this.panorama_0C1E86A6_02F2_C638_4173_554443B1C7C1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "camera": "this.panorama_0C183ACF_02F2_CE08_411B_581D6242AE58_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "camera": "this.panorama_0DF12F58_02F2_C608_4170_43608C591778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)",
    "camera": "this.panorama_0C2F37F2_02F2_C619_417A_016854E3C8D1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "camera": "this.panorama_0C1CBC31_02F2_CA1B_4185_ED1D4D760EFD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "camera": "this.panorama_0C3CC056_02F2_BA19_4175_8F2885DCF576_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "camera": "this.panorama_0C001D65_02F3_4A38_4181_F07B0987216B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "camera": "this.panorama_0C1841D0_02F3_5A18_4182_1C3D28860805_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "camera": "this.panorama_0C2D85F7_02F3_5A18_417D_CABA788F4D0D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "camera": "this.panorama_0C384A1E_02F3_4E08_4185_3D81D30766DA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 0)",
    "camera": "this.panorama_0C2A3E6C_02F3_4608_4184_C535E1FAD300_camera"
   }
  ]
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg",
  "partial": false,
  "id": "panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Closet",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C18449A_02F2_BA09_4177_7A1E6E93FFF7_t.jpg"
   }
  ]
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg",
  "partial": false,
  "id": "panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway 1",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C0353CF_02F2_DE08_4156_134FDA3D69DF_t.jpg"
   }
  ]
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg",
  "partial": false,
  "id": "panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456",
  "vfov": 180,
  "pitch": 0,
  "hfovMax": 120,
  "label": "Closet",
  "hfovMin": 60,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    "thumbnailUrl": "media/panorama_0C01B8F9_02F3_4A0B_4181_5EFBCFC67456_t.jpg"
   }
  ]
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "playbackBarBottom": 5,
  "paddingLeft": 0,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontStyle": "normal",
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 56,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBottom": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "shadow": false,
  "minHeight": 50,
  "progressBorderRadius": 0,
  "progressBorderSize": 0,
  "toolTipShadowOpacity": 0.32,
  "toolTipBorderRadius": 3,
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 0.24,
  "progressBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderColor": "#767676",
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "paddingTop": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "toolTipShadowVerticalLength": 36,
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "height": "100%",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 36,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "toolTipFontSize": 12,
  "progressLeft": 0,
  "transitionMode": "blending",
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarRight": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "borderRadius": 0,
  "id": "MainViewer",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "borderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "transitionDuration": 300,
  "progressBorderColor": "#000000"
 },
 {
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#00CC33",
  "itemThumbnailShadowVerticalLength": 3,
  "paddingBottom": 0,
  "shadow": false,
  "selectedItemLabelTextDecoration": "underline",
  "minHeight": 20,
  "itemThumbnailShadowOpacity": 0.54,
  "itemLabelTextDecoration": "none",
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailHeight": 87,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemLabelFontSize": 14,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingTop": 0,
  "itemPaddingBottom": 3,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailBorderRadius": 50,
  "itemThumbnailShadowHorizontalLength": 3,
  "layout": "vertical",
  "rollOverItemLabelTextDecoration": "none",
  "itemLabelFontFamily": "Arial",
  "itemLabelGap": 0,
  "itemPaddingRight": 3,
  "width": 185.05,
  "itemPaddingTop": 3,
  "scrollBarWidth": 10,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "height": "74.709%",
  "rollOverItemLabelFontSize": 15,
  "itemThumbnailShadowColor": "#000000",
  "scrollBarMargin": 2,
  "rollOverItemBackgroundOpacity": 0,
  "itemLabelFontColor": "#FFFFFF",
  "itemMode": "normal",
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "rollOverItemLabelFontColor": "#0099CC",
  "top": "9.51%",
  "itemThumbnailShadow": true,
  "itemThumbnailWidth": 136,
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "borderSize": 0,
  "borderRadius": 0,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "itemThumbnailShadowSpread": 1,
  "scrollBarVisible": "rollOver",
  "itemLabelFontStyle": "normal",
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0,
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom",
  "selectedItemLabelFontSize": 17,
  "itemThumbnailShadowBlurRadius": 8,
  "paddingRight": 0,
  "right": "0.03%",
  "gap": 1
 },
 {
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "width": "37.846%",
  "height": "5.582%",
  "maxHeight": 145,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "shadow": false,
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "minHeight": 1,
  "top": "0.05%",
  "cursor": "hand",
  "borderRadius": 0,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "data": {
   "name": "MTV Leters"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "29.2%",
  "paddingRight": 0,
  "maxWidth": 1694
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "width": "9.212%",
  "height": "6.604%",
  "maxHeight": 800,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "shadow": false,
  "minHeight": 1,
  "top": "0.05%",
  "borderRadius": 0,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "data": {
   "name": "MTV Logo"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "maxWidth": 1412,
  "right": "24.72%"
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "ViewerArea",
    "toolTipTextShadowColor": "#000000",
    "playbackBarBottom": 0,
    "paddingLeft": 0,
    "playbackBarHeadHeight": 15,
    "progressBackgroundColorRatios": [
     0
    ],
    "toolTipFontStyle": "normal",
    "progressBackgroundColorDirection": "vertical",
    "toolTipShadowBlurRadius": 3,
    "toolTipDisplayTime": 600,
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "progressHeight": 10,
    "playbackBarHeadShadowBlurRadius": 3,
    "progressBottom": 2,
    "toolTipPaddingBottom": 4,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "paddingBottom": 0,
    "shadow": false,
    "minHeight": 70,
    "progressBorderRadius": 0,
    "progressBorderSize": 0,
    "toolTipShadowOpacity": 0.32,
    "toolTipBorderRadius": 3,
    "toolTipFontFamily": "Arial",
    "toolTipOpacity": 1,
    "progressBarOpacity": 1,
    "toolTipPaddingRight": 6,
    "playbackBarLeft": 0,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "toolTipBorderColor": "#767676",
    "progressBackgroundOpacity": 1,
    "playbackBarOpacity": 1,
    "paddingTop": 0,
    "playbackBarHeadShadow": true,
    "toolTipBorderSize": 1,
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "progressBarBackgroundColorDirection": "vertical",
    "toolTipPaddingTop": 4,
    "toolTipShadowColor": "#333333",
    "toolTipShadowVerticalLength": 0,
    "progressRight": 0,
    "playbackBarHeadBorderSize": 0,
    "progressOpacity": 1,
    "playbackBarHeadShadowColor": "#000000",
    "width": "100%",
    "playbackBarHeadBorderColor": "#000000",
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarHeadBorderRadius": 0,
    "height": "100%",
    "playbackBarBackgroundOpacity": 1,
    "playbackBarHeadOpacity": 1,
    "playbackBarBorderSize": 0,
    "playbackBarHeadShadowHorizontalLength": 0,
    "toolTipBackgroundColor": "transparent",
    "playbackBarProgressOpacity": 1,
    "toolTipTextShadowOpacity": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontColor": "#606060",
    "minWidth": 100,
    "toolTipFontSize": 12,
    "progressLeft": 0,
    "transitionMode": "blending",
    "progressBarBorderSize": 0,
    "playbackBarProgressBorderRadius": 0,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "toolTipFontWeight": "normal",
    "playbackBarRight": 0,
    "playbackBarProgressBorderColor": "#000000",
    "playbackBarBorderRadius": 0,
    "borderRadius": 0,
    "id": "MapViewer",
    "progressBarBorderColor": "#000000",
    "playbackBarHeadWidth": 6,
    "playbackBarBackgroundColorDirection": "vertical",
    "progressBarBorderRadius": 0,
    "playbackBarHeight": 10,
    "playbackBarBorderColor": "#FFFFFF",
    "playbackBarProgressBorderSize": 0,
    "borderSize": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipShadowSpread": 0,
    "playbackBarHeadShadowOpacity": 0.7,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "paddingRight": 0,
    "toolTipPaddingLeft": 6,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "transitionDuration": 500,
    "progressBorderColor": "#000000"
   }
  ],
  "horizontalAlign": "left",
  "paddingLeft": 10,
  "width": "100%",
  "scrollBarWidth": 10,
  "height": "80.818%",
  "scrollBarMargin": 2,
  "paddingBottom": 75,
  "minWidth": 1,
  "shadow": false,
  "minHeight": 1,
  "bottom": "0%",
  "borderRadius": 0,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "scrollBarOpacity": 0,
  "verticalAlign": "bottom",
  "visible": false,
  "scrollBarVisible": "rollOver",
  "layout": "horizontal",
  "data": {
   "name": "Container18244"
  },
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "paddingRight": 170,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "overflow": "visible",
  "gap": 0
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     {
      "class": "Label",
      "paddingLeft": 0,
      "horizontalAlign": "right",
      "fontSize": 42,
      "width": "44.135%",
      "textDecoration": "none",
      "maxHeight": 8000,
      "height": "48%",
      "fontFamily": "Arial",
      "text": "Floor Plan",
      "paddingBottom": 0,
      "minWidth": 60,
      "shadow": false,
      "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/43946/mountain-view-homes-sequim/sequim/land%2Fhome-packages/\", \"_blank\")",
      "minHeight": 60,
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontColor": "#000000",
      "borderRadius": 0,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "data": {
       "name": "Label20305"
      },
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "maxWidth": 8000
     },
     {
      "class": "IconButton",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "mode": "toggle",
      "width": 57.3,
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "height": 57.5,
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
      "paddingBottom": 0,
      "minWidth": 0,
      "shadow": false,
      "transparencyActive": true,
      "minHeight": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "cursor": "hand",
      "borderRadius": 0,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "data": {
       "name": "Button49925"
      },
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "paddingRight": 0
     }
    ],
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "width": "75%",
    "scrollBarWidth": 10,
    "height": "100%",
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "minHeight": 1,
    "borderRadius": 0,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "data": {
     "name": "1left"
    },
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "creationPolicy": "inAdvance",
    "overflow": "scroll",
    "gap": 10
   },
   {
    "class": "Container",
    "children": [
     {
      "class": "IconButton",
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "mode": "toggle",
      "width": 62.65,
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "height": 56.91,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
      "paddingBottom": 0,
      "minWidth": 0,
      "shadow": false,
      "transparencyActive": true,
      "minHeight": 0,
      "cursor": "hand",
      "borderRadius": 0,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "borderSize": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "paddingRight": 0
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "width": "25%",
    "scrollBarWidth": 10,
    "height": "100%",
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "minHeight": 1,
    "borderRadius": 0,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "data": {
     "name": "1middle"
    },
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "creationPolicy": "inAdvance",
    "overflow": "scroll",
    "gap": 10
   },
   {
    "class": "Container",
    "horizontalAlign": "right",
    "paddingLeft": 0,
    "width": "25%",
    "scrollBarWidth": 10,
    "height": "100%",
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "minHeight": 1,
    "borderRadius": 0,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "data": {
     "name": "1right"
    },
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "creationPolicy": "inAdvance",
    "overflow": "scroll",
    "gap": 10
   }
  ],
  "horizontalAlign": "center",
  "paddingLeft": 2,
  "scrollBarWidth": 10,
  "height": "10%",
  "scrollBarMargin": 2,
  "paddingBottom": 2,
  "minWidth": 1,
  "shadow": false,
  "minHeight": 1,
  "bottom": "0%",
  "borderRadius": 0,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "layout": "horizontal",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Global"
  },
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": "0%",
  "paddingRight": 2,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "right": "0%",
  "creationPolicy": "inAdvance",
  "overflow": "visible",
  "gap": 10
 },
 {
  "class": "IconButton",
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "mode": "toggle",
  "toolTipFontStyle": "normal",
  "width": 67.4,
  "toolTipShadowBlurRadius": 3,
  "toolTipDisplayTime": 600,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "height": 62.29,
  "maxHeight": 128,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "transparent",
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "minWidth": 1,
  "shadow": false,
  "toolTipFontSize": 12,
  "transparencyActive": true,
  "minHeight": 1,
  "toolTipFontWeight": "normal",
  "cursor": "hand",
  "bottom": "0.04%",
  "toolTipBorderRadius": 3,
  "toolTipBorderColor": "#767676",
  "borderRadius": 0,
  "toolTip": "Fullscreen",
  "toolTipFontFamily": "Arial",
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "toolTipOpacity": 1,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "toolTipPaddingRight": 6,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "toolTipBorderSize": 1,
  "maxWidth": 128,
  "right": "0.06%",
  "toolTipShadowOpacity": 0.32,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; }
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "minWidth": 20,
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "shadow": false,
 "minHeight": 20,
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "data": {
  "name": "Player463"
 },
 "mobileMipmappingEnabled": true,
 "borderSize": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "overflow": "visible",
 "gap": 10
})