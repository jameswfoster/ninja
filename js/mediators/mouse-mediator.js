/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

var Montage = require("montage/core/core").Montage,
    NJComponent = require("js/lib/nj-base").NJComponent;

exports.MouseMediator = Montage.create( NJComponent, {
    hasTemplate: {
        value: false
    },

    deserializedFromTemplate: {
        value: function() {
            document.addEventListener("mouseup", this, false);
        }
    },

    handleMouseup: {
        value: function(event) {

            if(event._event.target.id !== "drawingCanvas") {
                NJevent( "appMouseUp");
            }

            return true;
        }
    }
});
