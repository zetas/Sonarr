﻿'use strict';

define(
    [
        'marionette'
    ], function (Marionette) {

        return Marionette.ItemView.extend({

            template: 'AddSeries/RootFolders/ItemViewTemplate',
            tagName : 'tr',

            initialize: function () {
                 this.listenTo(this.model, 'change', this.render);
            },


            events: {
                'click .x-delete': 'removeFolder',
                'click .x-folder': 'folderSelected'
            },

            removeFolder: function () {
                this.model.destroy({ wait: true });
            },

            folderSelected: function () {
                this.trigger('folderSelected', this.model);
            }
        });
    });